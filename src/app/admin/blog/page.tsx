"use client";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { Plus, Trash2 } from "react-feather";
import axios from "axios";
import { toast } from "react-toastify";
import { CldUploadButton } from "next-cloudinary";
import FroalaEditorComponent from "react-froala-wysiwyg";
import "froala-editor/css/froala_style.min.css";
import "froala-editor/css/froala_editor.pkgd.min.css";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import AddBlog from "@/components/admin/blog/AddBlog";

const BlogPostForm = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className="flex bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mt-5 mr-5 ml-auto">
          Add Blog
        </button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] md:max-w-[600px] lg:max-w-[800px] xl:max-w-[1000px]">
        <DialogHeader>
          <DialogTitle>Add Blog</DialogTitle>
        </DialogHeader>
        <AddBlog />
      </DialogContent>
    </Dialog>
  );
};

export default BlogPostForm;
