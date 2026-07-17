"use client";

import { AddBlogPost } from "@/services/blog.services";
import BlogForm from "./BlogForm";
import { toast } from "react-toastify";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormProvider, useForm } from "react-hook-form";
import axios from "axios";
import { BlogFormType, BlogPostFormProps } from "@/types/blog.types";
import AdminPageHeader from "@/components/admin/AdminPageHeader";

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
    <div>
      <AdminPageHeader eyebrow="CONTENT" title="Add Blog Post" />
      <FormProvider {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="max-w-[1400px] mx-auto bg-white border border-border-light p-8 md:p-10 mb-10"
        >
          <BlogForm />
          <button
            disabled={isPending}
            type="submit"
            className="mt-8 w-full md:w-auto bg-forest hover:bg-mint hover:text-ink disabled:opacity-60 text-white font-extrabold px-10 py-3.5 transition-colors"
          >
            {isPending ? "Publishing…" : "Publish Blog Post"}
          </button>
        </form>
      </FormProvider>
    </div>
  );
};

export default AddBlog;
