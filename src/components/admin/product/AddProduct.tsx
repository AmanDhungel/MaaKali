"use client";
import axios from "axios";
import { CldUploadButton } from "next-cloudinary";
import React from "react";
import { FormProvider, useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { AddProductData, GETProducts } from "@/services/product.services";
import ProductForm from "./ProductForm";
import { ProductFormProps, ProductFormType } from "@/types/product.types";

const AddProduct = () => {
  const form = useForm({
    resolver: zodResolver(ProductFormType),
  });

  const { mutate } = AddProductData();

  const onSubmit = async (data: ProductFormProps) => {
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

  console.log(form.getValues());

  return (
    <FormProvider {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-6 mt-10 border-2 border-gray-300 p-4 py-20 rounded-md shadow-md bg-white w-full max-w-3xl m-auto"
        encType="multipart/form-data">
        <ProductForm />
        <button
          type="submit"
          className="flex cursor-pointer justify-center w-3/4 m-auto mt-4 bg-blue-500 text-white p-2 rounded-md">
          Submit
        </button>
      </form>
    </FormProvider>
  );
};

export default AddProduct;
