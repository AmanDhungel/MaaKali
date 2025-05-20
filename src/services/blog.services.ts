import { DELETE, GET, POST } from "@/helper/fetcher";
import { KEY } from "@/lib/Keys";
import { ApiResponseType } from "@/types/ApiResponseType";
import { useMutation, useQuery } from "@tanstack/react-query";
import { AxiosError } from "axios";

export const GETBlogs = () => {
  return useQuery<
    ApiResponseType<BlogPropsType[]>,
    AxiosError<{ message: string; error: Record<string, unknown> }>,
    BlogPropsType[]
  >({
    queryKey: [KEY.Blog],
    queryFn: () => {
      return GET<ApiResponseType<BlogPropsType[]>>("blog");
    },
  });
};

export const GETSingleProduct = async (id: string) => {
  return useQuery({
    queryKey: ["products"],
    queryFn: () => {
      return GET(`product/${id}`);
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
