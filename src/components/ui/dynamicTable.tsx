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
      onError: () => {
        toast.success("Error deleting blog");
      },
    });
  };

  console.log("Table Data", data);

  return (
    <Table>
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
                    className="md:max-w-[2rem] overflow-ellipsis max-w-md overflow-hidden"
                    // dangerouslySetInnerHTML={
                    //   row[col] ? { __html: String(row[col]) } : undefined
                    // }
                    key={colIndex}>
                    {col === "description" ? "" : row[col] ?? ""}
                    {col === "Image" ? (
                      <Image
                        src={row[col] ? String(row[col]) : ""}
                        alt={String(row["Product Name"])}
                        className="w-10 h-10"
                        width={100}
                        height={100}
                        style={{ objectFit: "cover" }}
                      />
                    ) : col === "description" ? (
                      <p
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
                          ? router.push(`/admin/addblog/${row.id}`)
                          : router.push(`/admin/addproduct/${row.id}`);
                      }}>
                      Edit
                    </button>
                    <button
                      className="bg-red-500 text-white px-4 py-2 rounded cursor-pointer"
                      onClick={() => {
                        console.log("Row ID", row);
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
