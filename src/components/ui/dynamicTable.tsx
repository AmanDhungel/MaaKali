"use client";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
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
import { Frown, Meh } from "react-feather";
import Link from "next/link";
import { useBlogStore } from "@/store/blog.store";

type TableDemoProps = {
  header: string[];
  title: string;
  data: any[];
  footer?: string;
  action?: boolean;
};

export function TableDemo({
  title,
  header,
  data,
  footer,
  action,
}: TableDemoProps) {
  const router = useRouter();
  const pathname = usePathname();
  const queryClient = useQueryClient();

  const { mutate } = DeleteProduct();
  const { mutate: blogDelete, isPending } = DeleteBlog();

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
      <div className="flex flex-col justify-center items-center h-screen space-y-2">
        <Meh className=" text-amber-500 w-32 h-32" />
        <h1 className="text-2xl font-bold">No Data Found !</h1>
        <Link
          href={
            pathname?.includes("/blog") ? "/admin/addblog" : "/admin/addproduct"
          }>
          <button className="bg-blue-500 text-white px-4 py-2 rounded mt-4">
            {pathname?.includes("/blog") ? "Add Blog" : "Add Product"}
          </button>
        </Link>
      </div>
    );
  }

  return (
    <Table className="scrollbar-hide">
      <TableHeader>
        <TableRow>
          {header.map((item, index) => (
            <TableHead key={index}>{item}</TableHead>
          ))}
        </TableRow>
      </TableHeader>
      <TableBody>
        {data?.map((row, rowIndex) => {
          if (row.length === 0) {
            return (
              <TableCaption key={rowIndex} className="text-left">
                No Data Found
              </TableCaption>
            );
          }
          return (
            <TableRow key={rowIndex} className="max-w-md ">
              {header.map((col, colIndex) => {
                return (
                  <TableCell
                    className=" scrollbar-hidden md:max-w-[2rem]  max-w-md overflow-scroll scroll-smooth "
                    key={colIndex}>
                    {col === "description"
                      ? ""
                      : col === "image"
                      ? ""
                      : row[col] ?? ""}
                    {col === "Image" || col === "image" ? (
                      !row[col] ? (
                        ""
                      ) : (
                        <Image
                          src={row[col] ? String(row[col]) : ""}
                          alt={String(row["Product Name"])}
                          className="w-10 h-10"
                          width={100}
                          height={100}
                          style={{ objectFit: "cover" }}
                        />
                      )
                    ) : col === "description" ? (
                      <p
                        className="max-h-[5rem]"
                        dangerouslySetInnerHTML={{
                          __html: String(row[col]),
                        }}></p>
                    ) : (
                      ""
                    )}
                  </TableCell>
                );
              })}
              {action && (
                <TableCell className="text-right md:max-w-[5rem]">
                  <div className="flex gap-2">
                    <button
                      className="bg-blue-500 text-white px-4 py-2 rounded cursor-pointer"
                      onClick={() => {
                        pathname?.includes("/blog")
                          ? router.push(`/admin/editblog/${row._id}`)
                          : router.push(`/admin/addproduct/${row._id}`);
                      }}>
                      Edit
                    </button>
                    <BlogDialog
                      title="Delete Blog"
                      btnText="Delete"
                      description="Are you sure you want to delete this blog?"
                      onClickEvent={() => {
                        pathname?.includes("/blog")
                          ? handleBlogDelete(row._id as string)
                          : pathname?.includes("/product")
                          ? handleProductDelete(row._id as string)
                          : "";
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
      {footer && footer.length > 0 && (
        <TableFooter>
          <TableRow>
            <TableCell colSpan={header.length}>{footer}</TableCell>
          </TableRow>
        </TableFooter>
      )}
    </Table>
  );
}
