"use client";
import axios from "axios";
import { CldUploadButton } from "next-cloudinary";
import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

interface ProductFormProps {
  image: string;
  name: string;
  category: string;
  brand: string;
  price: number;
  originalPrice?: number;
  rating: number;
  inStock: boolean;
  isProductNew: boolean;
  features: string[];
  description: string;
  specifications: string[];
  relatedProducts: string[];
}

const AddProduct = () => {
  const {
    register,
    setValue,
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

  const onSubmit = async (data: ProductFormProps) => {
    try {
      await axios.post("http://localhost:3000/api/blog", data);
      toast.success("Submitted successfully!", {
        autoClose: 2000,
        theme: "colored",
      });
      reset();
    } catch (error) {
      if (axios.isAxiosError(error) && error.response) {
        toast.warn(error.response.data?.error || "Something went wrong");
      } else {
        toast.warn("Something went wrong");
      }
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-6 mt-10 border-2 border-gray-300 p-4 py-20 rounded-md shadow-md bg-white w-full max-w-3xl m-auto"
      encType="multipart/form-data">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 w-3/4 m-auto">
        <div className="flex flex-col space-y-4">
          <label className="text-sm font-medium">Product Name</label>
          <input
            type="text"
            {...register("name", { required: "Product name is required" })}
            className={`border p-2 rounded-md w-full ${
              errors.name ? "border-red-500" : "border-gray-300"
            }`}
          />
          {errors.name && (
            <span className="text-red-500 text-sm">
              {errors.name.message?.toString()}
            </span>
          )}
        </div>

        <div className="flex flex-col space-y-4">
          <label className="text-sm font-medium">Category</label>
          <select
            id="rating"
            {...register("category", { required: "Rating is required" })}
            className={`p-2 rounded-md border ${
              errors.rating ? "border-red-500" : "border-gray-300"
            } bg-white text-gray-700 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500`}>
            <option value="">-- Choose Category --</option>
            {[
              "Plumbing",
              "Painting",
              "tiles & marbles",
              "False Ceiling",
              "Electrical",
              "Carpentry",
              "interior Design",
            ].map((value) => (
              <option key={value} value={value}>
                {value}
              </option>
            ))}
          </select>
          {errors.category && (
            <span className="text-red-500 text-sm">
              {errors.category.message?.toString()}
            </span>
          )}
        </div>

        <div className="flex flex-col space-y-4">
          <label className="text-sm font-medium">image</label>
          <CldUploadButton
            uploadPreset="njqfzuge"
            className="bg-amber-300 text-1xl text-white p-2 rounded-md cloudinary-widget position-relative z-50"
            onSuccess={(data) => {
              if (
                data.info &&
                typeof data.info === "object" &&
                "url" in data.info
              ) {
                setValue("image", data.info.url as string);
              } else {
                toast.error("Failed to upload image");
              }
            }}
          />

          {errors.brand && (
            <span className="text-red-500 text-sm">
              {errors.brand.message?.toString()}
            </span>
          )}
        </div>
        <div className="flex flex-col space-y-4">
          <label className="text-sm font-medium">Brand</label>
          <input
            type="text"
            {...register("brand", { required: "brand is required" })}
            className={`border p-2 rounded-md ${
              errors.brand ? "border-red-500" : "border-gray-300"
            }`}
          />
          {errors.brand && (
            <span className="text-red-500 text-sm">
              {errors.brand.message?.toString()}
            </span>
          )}
        </div>
        <div className="flex flex-col space-y-4">
          <label className="text-sm font-medium">Price</label>
          <input
            type="string"
            {...register("price", { required: "Price is required" })}
            className={`border p-2 rounded-md ${
              errors.price ? "border-red-500" : "border-gray-300"
            }`}
          />
          {errors.price && (
            <span className="text-red-500 text-sm">
              {errors.price.message?.toString()}
            </span>
          )}
        </div>
        <div className="flex flex-col space-y-4">
          <label className="text-sm font-medium">Original Price</label>
          <input
            type="string"
            {...register("originalPrice")}
            className={`border p-2 rounded-md `}
          />
        </div>
        <div className="flex flex-col space-y-4">
          <label className="text-sm font-medium">Rating</label>
          <select
            id="rating"
            {...register("rating", { required: "Rating is required" })}
            className={`p-2 rounded-md border ${
              errors.rating ? "border-red-500" : "border-gray-300"
            } bg-white text-gray-700 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500`}>
            <option value="">-- Choose Rating --</option>
            {[1, 2, 3, 4, 5].map((value) => (
              <option key={value} value={value}>
                {value} {value === 1 ? "star" : "stars"}
              </option>
            ))}
          </select>
          {errors.rating && (
            <span className="text-red-500 text-sm">
              {errors.rating.message?.toString()}
            </span>
          )}
        </div>
        <div className="flex flex-col space-y-4">
          <label className="text-sm font-medium">InStock</label>
          <div className="flex gap-3">
            <label className="text-sm font-medium" htmlFor="inSockTrue">
              True
            </label>
            <input
              type="radio"
              id="inStockTrue"
              value="True"
              {...register("inStock")}
              className={`border p-2 rounded-md ${
                errors.inStock ? "border-red-500" : "border-gray-300"
              }`}
            />
            <label className="text-sm font-medium" htmlFor="inStockFalse">
              False
            </label>
            <input
              type="radio"
              id="inStockFalse"
              value="false"
              {...register("inStock")}
              className={`border p-2 rounded-md ${
                errors.inStock ? "border-red-500" : "border-gray-300"
              }`}
            />
          </div>

          {errors.inStock && (
            <span className="text-red-500 text-sm">
              {errors.inStock.message?.toString()}
            </span>
          )}
        </div>
        <div className="flex flex-col space-y-4">
          <label className="text-sm font-medium">isNew</label>
          <div className="flex gap-3">
            <label className="text-sm font-medium" htmlFor="isNewTrue">
              True
            </label>
            <input
              type="radio"
              id="isNewTrue"
              value="True"
              {...register("isProductNew", { required: "isNew is required" })}
              className={`border p-2 rounded-md ${
                errors.isProductNew ? "border-red-500" : "border-gray-300"
              }`}
            />
            <label className="text-sm font-medium" htmlFor="isNewFalse">
              False
            </label>
            <input
              type="radio"
              id="isNewFalse"
              value="false"
              {...register("isProductNew", { required: "isNew is required" })}
              className={`border p-2 rounded-md ${
                errors.isProductNew ? "border-red-500" : "border-gray-300"
              }`}
            />
          </div>
          {errors.isProductNew && (
            <span className="text-red-500 text-sm">
              {errors.isProductNew.message?.toString()}
            </span>
          )}
        </div>
        <div className="flex flex-col space-y-4">
          <label className="text-sm font-medium">Features</label>
          <input
            type="text"
            {...register("features", { required: "Features is required" })}
            className={`border p-2 rounded-md ${
              errors.features ? "border-red-500" : "border-gray-300"
            }`}
          />
          {errors.features && (
            <span className="text-red-500 text-sm">
              {errors.features.message?.toString()}
            </span>
          )}
        </div>
        <div className="flex flex-col space-y-4">
          <label className="text-sm font-medium">description</label>
          <textarea
            {...register("description", {
              required: "description is required",
            })}
            className={`border p-2 rounded-md ${
              errors.description ? "border-red-500" : "border-gray-300"
            }`}
          />
          {errors.description && (
            <span className="text-red-500 text-sm">
              {errors.description.message?.toString()}
            </span>
          )}
        </div>
        <div className="flex flex-col space-y-4">
          <label className="text-sm font-medium">Specification</label>
          <input
            type="text"
            {...register("specifications", { required: "brand is required" })}
            className={`border p-2 rounded-md ${
              errors.specifications ? "border-red-500" : "border-gray-300"
            }`}
          />
          {errors.specifications && (
            <span className="text-red-500 text-sm">
              {errors.specifications.message?.toString()}
            </span>
          )}
        </div>
      </div>
      <button
        type="submit"
        className="flex cursor-pointer justify-center w-3/4 m-auto mt-4 bg-blue-500 text-white p-2 rounded-md">
        Submit
      </button>
    </form>
  );
};

export default AddProduct;
