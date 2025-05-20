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

type TableDemoProps = {
  header: string[];
  title: string;
  data: Array<Record<string, string | number>>;
  footer?: string;
};

export function TableDemo({ title, header, data, footer }: TableDemoProps) {
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
        {data.map((row, rowIndex) => (
          <TableRow key={rowIndex}>
            {header.map((col, colIndex) => (
              <TableCell key={colIndex}>{row[col] ?? ""}</TableCell>
            ))}
          </TableRow>
        ))}
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
