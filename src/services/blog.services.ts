import { DELETE, GET, PATCH, POST } from "@/helper/fetcher"; // Ensure PATCH is exported as a function from fetcher, or import the correct function name
import { KEY } from "@/lib/Keys";
import { ApiResponseType } from "@/types/ApiResponseType";
import { BlogPostFormProps } from "@/types/blog.types";
import { useMutation, useQuery } from "@tanstack/react-query";
import { AxiosError } from "axios";

export const GETBlogs = () => {
  return useQuery<
    ApiResponseType<BlogPostFormProps[]>,
    AxiosError<{ message: string; error: Record<string, unknown> }>,
    BlogPostFormProps[]
  >({
    queryKey: [KEY.Blog],
    queryFn: () => {
      return GET<ApiResponseType<BlogPostFormProps[]>>("blog");
    },
  });
};

export const GETSingleBlog = (id: string) => {
  return useQuery<
    ApiResponseType<BlogPostFormProps>,
    AxiosError<{ message: string; error: Record<string, unknown> }>,
    BlogPostFormProps
  >({
    queryKey: [KEY.Blog, id],
    queryFn: async () => {
      return GET<ApiResponseType<BlogPostFormProps>>(`blog/${id}`);
    },
  });
};

export const AddBlogPost = () => {
  return useMutation({
    mutationKey: [KEY.Blog],
    mutationFn: async (data: BlogPostFormProps) => {
      return await POST("blog", data);
    },
  });
};

export const DeleteBlog = () => {
  return useMutation({
    mutationKey: [KEY.Blog],
    mutationFn: async (id: string) => {
      console.log("Delete Blog ID", id);
      return await DELETE(`blog/${id}`);
    },
  });
};

export const UpdateBlog = (id: string) => {
  return useMutation({
    mutationKey: [KEY.Blog],
    mutationFn: async (data: BlogPostFormProps) => {
      return await PATCH(`blog/${id}`, data);
    },
  });
};
