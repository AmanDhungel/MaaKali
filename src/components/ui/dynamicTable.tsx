"use client";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { KEY } from "@/lib/Keys";
import { DeleteBlog } from "@/services/blog.services";
import { DeleteProduct } from "@/services/product.services";
import { useQueryClient } from "@tanstack/react-query";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { toast } from "react-toastify";
import BlogDialog from "../admin/blog/BlogDialog";
import { Meh, Edit2 } from "react-feather";
import Link from "next/link";
import { useBlogStore } from "@/store/blog.store";

type TableDemoProps = {
  header: string[];
  title: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data: any[];
  footer?: string;
  action?: boolean;
};

export function TableDemo({ header, data, action }: TableDemoProps) {
  const router = useRouter();
  const pathname = usePathname();
  const queryClient = useQueryClient();

  const { mutate } = DeleteProduct();
  const { mutate: blogDelete } = DeleteBlog();

  const handleProductDelete = (id: string) => {
    mutate(
      { id },
      {
        onSuccess: () => {
          queryClient.invalidateQueries({ queryKey: [KEY.Product] });
          toast.success("Product deleted successfully");
          dailogClose();
        },
        onError: () => {
          toast.error("Error deleting product");
        },
      }
    );
  };
  const dailogClose = useBlogStore((state) => state.setDailogClose);

  const handleBlogDelete = (id: string) => {
    blogDelete(id, {
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: [KEY.Blog] });
        toast.success("Blog deleted successfully");
        dailogClose();
      },
      onError: () => {
        toast.error("Error deleting blog");
      },
    });
  };

  if (data?.length === 0) {
    return (
      <div className="flex flex-col justify-center items-center py-24 gap-3 bg-white border border-border-light">
        <Meh className="text-forest w-16 h-16" />
        <h1 className="text-xl font-extrabold text-ink">No Data Found</h1>
        <Link
          href={pathname?.includes("/blog") ? "/admin/addblog" : "/admin/addproduct"}
        >
          <button className="bg-forest hover:bg-mint hover:text-ink text-white font-bold px-5 py-2.5 mt-2 transition-colors">
            {pathname?.includes("/blog") ? "Add Blog" : "Add Product"}
          </button>
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-white border border-border-light overflow-hidden">
      <Table>
        <TableHeader>
          <TableRow className="border-b border-border-light hover:bg-transparent">
            {header.map((item, index) => (
              <TableHead
                key={index}
                className="font-accent text-[11px] tracking-[.1em] text-ink/60 uppercase h-12 px-4"
              >
                {item}
              </TableHead>
            ))}
            {action && (
              <TableHead className="font-accent text-[11px] tracking-[.1em] text-ink/60 uppercase h-12 px-4 text-right">
                Actions
              </TableHead>
            )}
          </TableRow>
        </TableHeader>
        <TableBody>
          {data?.map((row, rowIndex) => {
            return (
              <TableRow
                key={rowIndex}
                className="border-b border-border-light last:border-0 hover:bg-offwhite transition-colors"
              >
                {header.map((col, colIndex) => {
                  return (
                    <TableCell
                      className="px-4 py-3 max-w-[220px] overflow-hidden text-ellipsis text-[13.5px] text-ink"
                      key={colIndex}
                    >
                      {col === "description" ? (
                        <p
                          className="max-h-16 overflow-hidden text-body-muted"
                          dangerouslySetInnerHTML={{
                            __html: String(row[col] ?? ""),
                          }}
                        />
                      ) : col === "image" ? (
                        row[col] ? (
                          <Image
                            src={String(row[col])}
                            alt={String(row["name"] ?? "")}
                            className="w-11 h-11 object-cover border border-border-light"
                            width={100}
                            height={100}
                            style={{ objectFit: "cover" }}
                          />
                        ) : (
                          ""
                        )
                      ) : (
                        row[col] ?? ""
                      )}
                    </TableCell>
                  );
                })}
                {action && (
                  <TableCell className="px-4 py-3 text-right">
                    <div className="flex gap-2 justify-end">
                      <button
                        className="flex items-center gap-1.5 border border-border-light hover:border-forest hover:text-forest text-ink text-xs font-bold px-3 py-2 transition-colors"
                        onClick={() => {
                          pathname?.includes("/blog")
                            ? router.push(`/admin/editblog/${row._id}`)
                            : router.push(`/admin/editproduct/${row._id}`);
                        }}
                      >
                        <Edit2 className="h-3.5 w-3.5" />
                        Edit
                      </button>
                      <BlogDialog
                        title={pathname?.includes("/blog") ? "Delete Blog" : "Delete Product"}
                        btnText="Delete"
                        description={`Are you sure you want to delete this ${
                          pathname?.includes("/blog") ? "blog" : "product"
                        }?`}
                        onClickEvent={() => {
                          pathname?.includes("/blog")
                            ? handleBlogDelete(row._id as string)
                            : pathname?.includes("/product")
                            ? handleProductDelete(row._id as string)
                            : undefined;
                        }}
                        submitText="Delete"
                      />
                    </div>
                  </TableCell>
                )}
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </div>
  );
}
