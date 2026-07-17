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
import { useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";
import { Smile } from "react-feather";
import { useBlogStore } from "@/store/blog.store";
import BlogDialog from "@/components/admin/blog/BlogDialog";
import { DeleteContact, UpdateStatus } from "@/services/contact.services";
import { Checkbox } from "../checkbox";

type TableDemoProps = {
  header: string[];
  title: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data: any[];
  footer?: string;
};

export function MessageTable({ header, data }: TableDemoProps) {
  const queryClient = useQueryClient();

  const { mutate: deleteMessage } = DeleteContact();
  const { mutate: UpdateMessageStatus } = UpdateStatus();

  const dailogClose = useBlogStore((state) => state.setDailogClose);

  const handleMessageDelete = (id: string) => {
    deleteMessage(id, {
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: [KEY.Contact] });
        toast.success("Message deleted successfully");
        dailogClose();
      },
      onError: () => {
        toast.error("Error deleting blog");
      },
    });
  };

  const handleStatusChange = ({ id, checked }: { id: string; checked: string }) => {
    UpdateMessageStatus(
      { id, checked },
      {
        onSuccess: () => {
          queryClient.invalidateQueries({ queryKey: [KEY.Contact] });
          toast.success("Status updated successfully");
          dailogClose();
        },
        onError: () => {
          toast.error("Error updating status");
        },
      }
    );
  };

  if (data?.length === 0) {
    return (
      <div className="flex flex-col justify-center items-center py-24 gap-3 bg-white border border-border-light">
        <Smile className="text-forest w-16 h-16" />
        <h1 className="text-xl font-extrabold text-ink">No Messages Right Now</h1>
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
            <TableHead className="font-accent text-[11px] tracking-[.1em] text-ink/60 uppercase h-12 px-4 text-right">
              Read / Actions
            </TableHead>
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
                      className={`px-4 py-3 max-w-[240px] overflow-hidden text-ellipsis text-[13.5px] ${
                        row.checked === "true" ? "line-through text-body-muted" : "text-ink"
                      }`}
                      key={colIndex}
                    >
                      {row[col] ?? ""}
                    </TableCell>
                  );
                })}
                <TableCell className="px-4 py-3 text-right">
                  <div className="flex gap-3 justify-end items-center">
                    <Checkbox
                      checked={row.checked === "true"}
                      onClick={() =>
                        handleStatusChange({
                          id: row._id,
                          checked: row.checked === "true" ? "false" : "true",
                        })
                      }
                    />
                    <BlogDialog
                      title="Delete Message"
                      btnText="Delete"
                      description="Are you sure you want to delete this message?"
                      onClickEvent={() => handleMessageDelete(row._id)}
                      submitText="Delete"
                    />
                  </div>
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </div>
  );
}
