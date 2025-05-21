import { DELETE, GET } from "@/helper/fetcher";
import { ApiResponseType } from "@/types/ApiResponseType";
import { ProductPropsType } from "@/types/product.types";
import { useMutation, useQuery } from "@tanstack/react-query";
import { AxiosError } from "axios";

export const GETProducts = () => {
  return useQuery<
    ApiResponseType<ProductPropsType[]>,
    AxiosError<{ message: string; error: Record<string, unknown> }>,
    ProductPropsType
  >({
    queryKey: ["products"],
    queryFn: () => {
      return GET("product");
    },
  });
};

export const DeleteProduct = () => {
  return useMutation({
    mutationKey: ["deleteProduct"],
    mutationFn: async (data: { id: string }) => {
      return await DELETE(`product/${data.id}`);
    },
  });
};
