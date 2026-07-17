"use client";
import { useEffect } from "react";
import BlogForm from "./BlogForm";
import { useParams, useRouter } from "next/navigation";
import { GETSingleBlog, UpdateBlog } from "@/services/blog.services";
import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { BlogFormType, BlogPostFormProps } from "@/types/blog.types";
import { Loader2 } from "lucide-react";
import { toast } from "react-toastify";
import axios from "axios";
import { useQueryClient } from "@tanstack/react-query";
import { KEY } from "@/lib/Keys";
import AdminPageHeader from "@/components/admin/AdminPageHeader";

const EditBlog = () => {
  const params = useParams();
  const router = useRouter();
  const { data, isLoading } = GETSingleBlog(params?.id as string);
  const { mutate, isPending } = UpdateBlog(params?.id as string);
  const queryClient = useQueryClient();

  const form = useForm<BlogPostFormProps>({
    resolver: zodResolver(BlogFormType),
  });

  useEffect(() => {
    if (data) {
      form.reset({
        ...data,
        id: "",
        title: data.title,
        tags:
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          "tags" in data && Array.isArray((data as any).tags) ? (data as any).tags : [],
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
        queryClient.invalidateQueries({ queryKey: [KEY.Blog] });
        form.reset();
        router.push("/admin/blog");
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
      <AdminPageHeader eyebrow="CONTENT" title="Edit Blog Post" />
      <FormProvider {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="max-w-[1400px] mx-auto bg-white border border-border-light p-8 md:p-10 mb-10"
        >
          {isLoading ? (
            <div className="flex justify-center py-16">
              <Loader2 className="animate-spin text-forest h-8 w-8" />
            </div>
          ) : (
            <BlogForm />
          )}
          <button
            disabled={isPending}
            type="submit"
            className="mt-8 w-full md:w-auto bg-forest hover:bg-mint hover:text-ink disabled:opacity-60 text-white font-extrabold px-10 py-3.5 transition-colors"
          >
            {isPending ? "Saving…" : "Update Blog Post"}
          </button>
        </form>
      </FormProvider>
    </div>
  );
};

export default EditBlog;
