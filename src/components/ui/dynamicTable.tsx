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
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";

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
  return (
    <Table>
      <TableCaption>{title}</TableCaption>
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
        {data.map((row, rowIndex) => {
          console.log("Row", row);
          return (
            <TableRow key={rowIndex} className="max-w-md overflow-hidden">
              {header.map((col, colIndex) => {
                console.log("Col", col);
                return (
                  <TableCell
                    className="md:max-w-[2rem] overflow-ellipsis max-w-md overflow-hidden"
                    key={colIndex}>
                    {row[col] ?? ""}
                    {col === "Image" && (
                      <Image
                        src={row[col] ? String(row[col]) : ""}
                        alt={String(row["Product Name"])}
                        className="w-10 h-10"
                        width={100}
                        height={100}
                        style={{ objectFit: "cover" }}
                      />
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
                    <button className="bg-red-500 text-white px-4 py-2 rounded cursor-pointer">
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
