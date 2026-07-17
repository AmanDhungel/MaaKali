"use client";
import axios from "axios";
import { FormProvider, useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { zodResolver } from "@hookform/resolvers/zod";
import { AddProductData } from "@/services/product.services";
import ProductForm from "./ProductForm";
import { ProductFormProps, ProductFormType } from "@/types/product.types";
import AdminPageHeader from "@/components/admin/AdminPageHeader";

const AddProduct = () => {
  const form = useForm({
    resolver: zodResolver(ProductFormType),
  });

  const { mutate, isPending } = AddProductData();

  const onSubmit = async (data: ProductFormProps) => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    mutate(data as any, {
      onSuccess: () => {
        toast.success("Product added successfully!");
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
      <AdminPageHeader eyebrow="INVENTORY" title="Add Product" />
      <FormProvider {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="max-w-[1400px] mx-auto bg-white border border-border-light p-8 md:p-10"
          encType="multipart/form-data"
        >
          <ProductForm />
          <button
            type="submit"
            disabled={isPending}
            className="mt-8 w-full md:w-auto bg-forest hover:bg-mint hover:text-ink disabled:opacity-60 text-white font-extrabold px-10 py-3.5 transition-colors"
          >
            {isPending ? "Saving…" : "Save Product"}
          </button>
        </form>
      </FormProvider>
    </div>
  );
};

export default AddProduct;
