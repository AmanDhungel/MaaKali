"use client";
import { GetContacts } from "@/services/contact.services";
import { MessageTable } from "./ui/message/table";
import { Loader2 } from "lucide-react";
import AdminPageHeader from "@/components/admin/AdminPageHeader";

const Message = () => {
  const { data, isLoading } = GetContacts();
  const header = ["name", "phonenumber", "message", "subject"];

  return (
    <div>
      <AdminPageHeader eyebrow="INBOX" title="Messages" />
      <div className="max-w-[1400px] mx-auto">
        {isLoading ? (
          <div className="flex justify-center py-24">
            <Loader2 className="animate-spin text-forest h-8 w-8" />
          </div>
        ) : (
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          <MessageTable header={header} title="Message" data={data as any} />
        )}
      </div>
    </div>
  );
};

export default Message;
