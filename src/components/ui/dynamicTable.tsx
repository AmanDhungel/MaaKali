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

type TableDemoProps = {
  header: string[];
  title: string;
  data: Array<Record<string, string | number>>;
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
  const { mutate: blogDelete } = DeleteBlog();

  const handleProductDelete = (id: string) => {
    mutate(
      { id },
      {
        onSuccess: () => {
          queryClient.invalidateQueries({ queryKey: [KEY.Product] });
          toast.success("Product deleted successfully");
        },
        onError: () => {
          toast.error("Error deleting product");
        },
      }
    );
  };

  const handleBlogDelete = (id: string) => {
    blogDelete(id, {
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: [KEY.Blog] });
        toast.success("Blog deleted successfully");
      },
      onError: (err) => {
        toast.error("Error deleting blog");
      },
    });
  };

  return (
    <Table className="scrollbar-hide">
      <TableHeader>
        <TableRow>
          {header.map((item, index) => (
            <TableHead
              key={index}
              className={index === header.length - 1 ? "text-left" : ""}>
              {item}
            </TableHead>
          ))}
        </TableRow>
      </TableHeader>
      <TableBody>
        {data?.map((row, rowIndex) => {
          return (
            <TableRow key={rowIndex} className="max-w-md overflow-hidden">
              {header.map((col, colIndex) => {
                return (
                  <TableCell
                    className=" scrollbar-hidden md:max-w-[2rem] overflow-ellipsis max-w-md overflow-scroll scroll-smooth "
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
                          ? router.push(`/admin/addblog/${row._id}`)
                          : router.push(`/admin/addproduct/${row._id}`);
                      }}>
                      Edit
                    </button>
                    <button
                      className="bg-red-500 text-white px-4 py-2 rounded cursor-pointer"
                      onClick={() => {
                        pathname?.includes("/blog")
                          ? handleBlogDelete(String(row._id))
                          : handleProductDelete(String(row._id));
                      }}>
                      Delete
                    </button>
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
