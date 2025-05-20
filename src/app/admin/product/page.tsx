"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import AddProduct from "@/components/admin/product/AddProduct";
import { CldUploadButton } from "next-cloudinary";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import Link from "next/link";
import Product from "@/components/admin/product/Product";

const ProductForm = () => {
  const {
    register,
    setValue,
    getValues,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: {
      image: "",
      name: "",
      category: "",
      brand: "",
      price: 0,
      originalPrice: undefined,
      rating: 0,
      inStock: true,
      isProductNew: false,
      features: [],
      description: "",
      specifications: [],
      relatedProducts: [],
    },
  });
  return (
    <>
      <Link
        href="/admin/addproduct"
        className="w-fit flex bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mt-5 mr-5 ml-auto">
        Add Product
      </Link>

      <Product />
    </>
  );
};
export default ProductForm;
