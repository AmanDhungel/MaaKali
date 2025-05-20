import { GET } from "@/helper/fetcher";
import { ApiResponseType } from "@/types/ApiResponseType";
import { ProductPropsType } from "@/types/product.types";
import { useQuery } from "@tanstack/react-query";
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
