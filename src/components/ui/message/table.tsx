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

import { Frown, Meh, Smile } from "react-feather";
import Link from "next/link";
import { useBlogStore } from "@/store/blog.store";
import BlogDialog from "@/components/admin/blog/BlogDialog";
import { DeleteContact, UpdateStatus } from "@/services/contact.services";
import { Checkbox } from "../checkbox";

type TableDemoProps = {
  header: string[];
  title: string;
  data: any[];
  footer?: string;
};

export function MessageTable({ header, data, footer }: TableDemoProps) {
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

  const handleStatusChange = ({
    id,
    checked,
  }: {
    id: string;
    checked: string;
  }) => {
    UpdateMessageStatus(
      { id, checked },
      {
        onSuccess: () => {
          queryClient.invalidateQueries({ queryKey: [KEY.Contact] });
          toast.success("Status Updated successfully");
          dailogClose();
        },
        onError: () => {
          toast.error("Error updating Status");
        },
      }
    );
  };

  if (data?.length === 0) {
    return (
      <div className="flex flex-col justify-center items-center h-screen space-y-2">
        <Smile className=" text-amber-500 w-32 h-32" />
        <h1 className="text-2xl font-bold">No Messages Right Now</h1>
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
            <TableRow key={rowIndex} className=" ">
              {header.map((col, colIndex) => {
                return (
                  <TableCell
                    className={`${
                      row.checked === "true" ? "line-through" : ""
                    } scrollbar-hidden md:max-w-[2rem]   overflow-scroll scroll-smooth `}
                    key={colIndex}>
                    {row[col] ?? ""}
                  </TableCell>
                );
              })}
              <TableCell className="text-right md:max-w-[5rem]">
                <div className="flex gap-2">
                  <Checkbox
                    className="mx-3 my-auto"
                    checked={row.checked === "true" ? true : false}
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
                    description="Are you sure you want to delete this Message?"
                    onClickEvent={() => handleMessageDelete(row._id)}
                    submitText="Delete"
                  />
                </div>
              </TableCell>
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
