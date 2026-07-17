"use client";
import { useEffect } from "react";
import axios from "axios";
import { useParams, useRouter } from "next/navigation";
import { FormProvider, useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2 } from "lucide-react";
import { useQueryClient } from "@tanstack/react-query";
import { GETSingleProduct, UpdateProduct } from "@/services/product.services";
import { KEY } from "@/lib/Keys";
import ProductForm from "./ProductForm";
import { ProductFormProps, ProductFormType } from "@/types/product.types";
import AdminPageHeader from "@/components/admin/AdminPageHeader";

const EditProduct = () => {
  const params = useParams<{ id: string }>();
  const router = useRouter();
  const queryClient = useQueryClient();
  const { data, isLoading } = GETSingleProduct(params?.id ?? "");
  const { mutate, isPending } = UpdateProduct(params?.id ?? "");

  const form = useForm<ProductFormProps>({
    resolver: zodResolver(ProductFormType),
  });

  useEffect(() => {
    if (data) {
      form.reset(data);
    }
  }, [data, form]);

  const onSubmit = async (formData: ProductFormProps) => {
    mutate(formData, {
      onSuccess: () => {
        toast.success("Product updated successfully!");
        queryClient.invalidateQueries({ queryKey: [KEY.Product] });
        router.push("/admin/product");
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
      <AdminPageHeader eyebrow="INVENTORY" title="Edit Product" />
      <FormProvider {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="max-w-[1400px] mx-auto bg-white border border-border-light p-8 md:p-10"
        >
          {isLoading ? (
            <div className="flex justify-center py-16">
              <Loader2 className="animate-spin text-forest h-8 w-8" />
            </div>
          ) : (
            <ProductForm />
          )}
          <button
            type="submit"
            disabled={isPending || isLoading}
            className="mt-8 w-full md:w-auto bg-forest hover:bg-mint hover:text-ink disabled:opacity-60 text-white font-extrabold px-10 py-3.5 transition-colors"
          >
            {isPending ? "Saving…" : "Update Product"}
          </button>
        </form>
      </FormProvider>
    </div>
  );
};

export default EditProduct;
