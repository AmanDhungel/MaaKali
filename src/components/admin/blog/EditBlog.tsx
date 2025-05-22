"use client";
import React, { useEffect } from "react";
import BlogForm from "./BlogForm";
import { useParams, useRouter } from "next/navigation";
import { GETSingleBlog, UpdateBlog } from "@/services/blog.services";
import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { BlogFormType, BlogPostFormProps } from "@/types/blog.types";
import { Loader2 } from "lucide-react";
import { toast } from "react-toastify";
import axios from "axios";

const EditBlog = () => {
  const params = useParams();
  const router = useRouter();
  const { data, isLoading } = GETSingleBlog(params?.id as string);
  const { mutate } = UpdateBlog(params?.id as string);

  const form = useForm<BlogPostFormProps>({
    resolver: zodResolver(BlogFormType),
  });

  console.log("Form Data", data);

  //   console.log("Erro Form Data", error);

  useEffect(() => {
    if (data) {
      form.reset({
        ...data,
        id: "",
        title: data.title,
        tags:
          "tags" in data && Array.isArray((data as any).tags)
            ? (data as any).tags
            : [],
        relatedPosts:
          "relatedPosts" in data && Array.isArray(data.relatedPosts)
            ? (data.relatedPosts as (string | undefined)[])
            : [],
      });
    }
  }, [data, form.reset]);

  const onSubmit = async () => {
    const formData = form.getValues();
    mutate(formData, {
      onSuccess: () => {
        toast.success("Blog post updated successfully!");
        form.reset();
        router.push("/admin/blog");
      },
      onError: (error) => {
        console.log("Error", error);
        if (axios.isAxiosError(error) && error.response) {
          toast.error(error.response.data?.error || "Something went wrong");
        } else {
          toast.error("Something went wrong");
        }
      },
    });
  };

  return (
    <FormProvider {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-6 w-11/12 m-auto p-4 border-2 rounded-md mt-10">
        {isLoading ? <Loader2 className="animate-spin" /> : <BlogForm />}
        <button
          type="submit"
          className="flex cursor-pointer justify-center w-3/4 m-auto mt-4 bg-blue-500 text-white p-2 rounded-md">
          Edit Blog Post
        </button>
      </form>
    </FormProvider>
  );
};

export default EditBlog;
