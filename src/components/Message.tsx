"use client";
import React from "react";
import { GetContacts } from "@/services/contact.services";
import { MessageTable } from "./ui/message/table";

const Message = () => {
  const { data } = GetContacts();
  const header = ["name", "phonenumber", "message", "subject"];

  console.log("message data", data);
  return (
    <div className="w-11/12 mx-auto mt-10 border p-4 rounded-lg bg-white shadow-md">
      <MessageTable header={header} title="Message" data={data as any} />
    </div>
  );
};

export default Message;
