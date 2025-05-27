"use client";

import { AddBlogPost } from "@/services/blog.services";
import BlogForm from "./BlogForm";
import { toast } from "react-toastify";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormProvider, useForm } from "react-hook-form";
import axios from "axios";
import { BlogFormType, BlogPostFormProps } from "@/types/blog.types";

const AddBlog = () => {
  const { mutate, isPending } = AddBlogPost();
  const form = useForm<BlogPostFormProps>({
    resolver: zodResolver(BlogFormType),
  });
  const onSubmit = async () => {
    const data = form.getValues();
    mutate(data, {
      onSuccess: () => {
        toast.success("Blog post added successfully!");
        form.reset();
      },
      onError: (error) => {
        if (axios.isAxiosError(error) && error.response) {
          toast.error(error.response.data?.error || "Something went wrong");
        } else {
          toast.error("Something went wrong");
        }
      },
    });
  };
  return (
    <div className="overflow-y-auto min-h-max">
      <FormProvider {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-6 w-11/12 m-auto p-4 border-2 rounded-md mt-10 overflow-scroll mb-10 overflow-y-auto max-h-screen">
          <BlogForm />
          <button
            disabled={isPending}
            type="submit"
            className="flex cursor-pointer justify-center w-3/4 m-auto mt-4 bg-blue-500 text-white p-2 rounded-md mb-20">
            Submit Blog Post
          </button>
        </form>
      </FormProvider>
    </div>
  );
};

export default AddBlog;
