import { DELETE, GET, PATCH, POST } from "@/helper/fetcher";
import { KEY } from "@/lib/Keys";
import { ApiResponseType } from "@/types/ApiResponseType";
import { ProductFormProps } from "@/types/product.types";
import { useMutation, useQuery } from "@tanstack/react-query";
import { AxiosError } from "axios";

export const GETProducts = () => {
  return useQuery<
    ApiResponseType<ProductFormProps[]>,
    AxiosError<{ message: string; error: Record<string, unknown> }>,
    ProductFormProps[]
  >({
    queryKey: [KEY.Product],
    queryFn: () => {
      return GET("product");
    },
  });
};

export const GETSingleProduct = (id: string) => {
  return useQuery<
    ApiResponseType<ProductFormProps>,
    AxiosError<{ message: string; error: Record<string, unknown> }>,
    ProductFormProps
  >({
    queryKey: [KEY.Product, id],
    queryFn: () => {
      return GET(`product/${id}`);
    },
    enabled: !!id,
  });
};

export const AddProductData = () => {
  return useMutation({
    mutationKey: [KEY.Product],
    mutationFn: (data) => {
      console.log(data);
      return POST(`product`, data);
    },
  });
};

export const UpdateProduct = (id: string) => {
  return useMutation({
    mutationKey: [KEY.Product],
    mutationFn: (data: ProductFormProps) => {
      return PATCH(`product/${id}`, data);
    },
  });
};

export const DeleteProduct = () => {
  return useMutation({
    mutationKey: [KEY.Product],
    mutationFn: async (data: { id: string }) => {
      return await DELETE(`product/${data.id}`);
    },
  });
};
