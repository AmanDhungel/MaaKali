import { CldUploadButton } from "next-cloudinary";
import React from "react";
import { useFormContext } from "react-hook-form";
import { toast } from "react-toastify";

const ProductForm = () => {
  const form = useFormContext();
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 w-3/4 m-auto">
      <div className="flex flex-col space-y-4">
        <label className="text-sm font-medium">Product Name</label>
        <input
          type="text"
          {...form.register("name", { required: "Product name is required" })}
          className={`border p-2 rounded-md w-full ${
            form.formState.errors.name ? "border-red-500" : "border-gray-300"
          }`}
        />
        {form.formState.errors.name && (
          <span className="text-red-500 text-sm">
            {form.formState.errors.name.message?.toString()}
          </span>
        )}
      </div>

      <div className="flex flex-col space-y-4">
        <label className="text-sm font-medium">Category</label>
        <select
          id="rating"
          {...form.register("category", { required: "Rating is required" })}
          className={`p-2 rounded-md border ${
            form.formState.errors.rating ? "border-red-500" : "border-gray-300"
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
        {form.formState.errors.category && (
          <span className="text-red-500 text-sm">
            {form.formState.errors.category.message?.toString()}
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
              form.setValue("image", data.info.url as string);
            } else {
              toast.error("Failed to upload image");
            }
          }}
        />
        {form.getValues("image") && (
          <div>
            <img
              src={form.getValues("image")}
              alt="Uploaded Image"
              className="w-32 h-32 object-cover mt-2"
            />
          </div>
        )}

        {form.formState.errors.brand && (
          <span className="text-red-500 text-sm">
            {form.formState.errors.brand.message?.toString()}
          </span>
        )}
      </div>
      <div className="flex flex-col space-y-4">
        <label className="text-sm font-medium">Brand</label>
        <input
          type="text"
          {...form.register("brand", { required: "brand is required" })}
          className={`border p-2 rounded-md ${
            form.formState.errors.brand ? "border-red-500" : "border-gray-300"
          }`}
        />
        {form.formState.errors.brand && (
          <span className="text-red-500 text-sm">
            {form.formState.errors.brand.message?.toString()}
          </span>
        )}
      </div>
      <div className="flex flex-col space-y-4">
        <label className="text-sm font-medium">Price</label>
        <input
          type="number"
          {...form.register("price", { required: "Price is required" })}
          className={`border p-2 rounded-md ${
            form.formState.errors.price ? "border-red-500" : "border-gray-300"
          }`}
        />
        {form.formState.errors.price && (
          <span className="text-red-500 text-sm">
            {form.formState.errors.price.message?.toString()}
          </span>
        )}
      </div>
      <div className="flex flex-col space-y-4">
        <label className="text-sm font-medium">Original Price</label>
        <input
          type="number"
          {...form.register("originalPrice")}
          className={`border p-2 rounded-md `}
        />
      </div>
      <div className="flex flex-col space-y-4">
        <label className="text-sm font-medium">Rating</label>
        <select
          id="rating"
          {...form.register("rating", { required: "Rating is required" })}
          className={`p-2 rounded-md border ${
            form.formState.errors.rating ? "border-red-500" : "border-gray-300"
          } bg-white text-gray-700 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500`}>
          <option value="">-- Choose Rating --</option>
          {[1, 2, 3, 4, 5].map((value) => (
            <option key={value} value={Number(value)}>
              {value} {value === 1 ? "star" : "stars"}
            </option>
          ))}
        </select>
        {form.formState.errors.rating && (
          <span className="text-red-500 text-sm">
            {form.formState.errors.rating.message?.toString()}
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
            value="true"
            {...form.register("inStock")}
            className={`border p-2 rounded-md ${
              form.formState.errors.inStock
                ? "border-red-500"
                : "border-gray-300"
            }`}
          />
          <label className="text-sm font-medium" htmlFor="inStockFalse">
            False
          </label>
          <input
            type="radio"
            id="inStockFalse"
            value="false"
            {...form.register("inStock")}
            className={`border p-2 rounded-md ${
              form.formState.errors.inStock
                ? "border-red-500"
                : "border-gray-300"
            }`}
          />
        </div>

        {form.formState.errors.inStock && (
          <span className="text-red-500 text-sm">
            {form.formState.errors.inStock.message?.toString()}
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
            {...form.register("isProductNew", {
              required: "isNew is required",
            })}
            className={`border p-2 rounded-md ${
              form.formState.errors.isProductNew
                ? "border-red-500"
                : "border-gray-300"
            }`}
          />
          <label className="text-sm font-medium" htmlFor="isNewFalse">
            False
          </label>
          <input
            type="radio"
            id="isNewFalse"
            value="false"
            {...form.register("isProductNew", {
              required: "isNew is required",
            })}
            className={`border p-2 rounded-md ${
              form.formState.errors.isProductNew
                ? "border-red-500"
                : "border-gray-300"
            }`}
          />
        </div>
        {form.formState.errors.isProductNew && (
          <span className="text-red-500 text-sm">
            {form.formState.errors.isProductNew.message?.toString()}
          </span>
        )}
      </div>
      <div className="flex flex-col space-y-4">
        <label className="text-sm font-medium">Features</label>
        <input
          type="text"
          {...form.register("features", { required: "Features is required" })}
          className={`border p-2 rounded-md ${
            form.formState.errors.features
              ? "border-red-500"
              : "border-gray-300"
          }`}
        />
        {form.formState.errors.features && (
          <span className="text-red-500 text-sm">
            {form.formState.errors.features.message?.toString()}
          </span>
        )}
      </div>
      <div className="flex flex-col space-y-4">
        <label className="text-sm font-medium">description</label>
        <textarea
          {...form.register("description", {
            required: "description is required",
          })}
          className={`border p-2 rounded-md ${
            form.formState.errors.description
              ? "border-red-500"
              : "border-gray-300"
          }`}
        />
        {form.formState.errors.description && (
          <span className="text-red-500 text-sm">
            {form.formState.errors.description.message?.toString()}
          </span>
        )}
      </div>
      <div className="flex flex-col space-y-4">
        <label className="text-sm font-medium">Specification</label>
        <input
          type="text"
          {...form.register("specifications", {
            required: "brand is required",
          })}
          className={`border p-2 rounded-md ${
            form.formState.errors.specifications
              ? "border-red-500"
              : "border-gray-300"
          }`}
        />
        {form.formState.errors.specifications && (
          <span className="text-red-500 text-sm">
            {form.formState.errors.specifications.message?.toString()}
          </span>
        )}
      </div>
    </div>
  );
};

export default ProductForm;
