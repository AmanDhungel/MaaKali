import { CldUploadButton } from "next-cloudinary";
import { useFormContext } from "react-hook-form";
import { toast } from "react-toastify";

const fieldLabel = "text-xs font-bold tracking-[.04em] text-ink uppercase";
const inputClass = (hasError: boolean) =>
  `border ${
    hasError ? "border-red-500" : "border-border-light"
  } px-3.5 py-2.5 text-sm outline-none focus:border-forest transition-colors bg-white w-full`;

const ProductForm = () => {
  const form = useFormContext();
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="flex flex-col gap-2">
        <label className={fieldLabel}>Product Name</label>
        <input
          type="text"
          {...form.register("name", { required: "Product name is required" })}
          className={inputClass(!!form.formState.errors.name)}
        />
        {form.formState.errors.name && (
          <span className="text-red-500 text-xs">
            {form.formState.errors.name.message?.toString()}
          </span>
        )}
      </div>

      <div className="flex flex-col gap-2">
        <label className={fieldLabel}>Category</label>
        <select
          {...form.register("category", { required: "Category is required" })}
          className={inputClass(!!form.formState.errors.category)}
        >
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
          <span className="text-red-500 text-xs">
            {form.formState.errors.category.message?.toString()}
          </span>
        )}
      </div>

      <div className="flex flex-col gap-2">
        <label className={fieldLabel}>Image</label>
        <CldUploadButton
          uploadPreset="njqfzuge"
          className="inline-flex w-fit bg-forest hover:bg-mint hover:text-ink text-white text-sm font-bold px-4 py-2.5 transition-colors cloudinary-widget"
          onSuccess={(data) => {
            if (data.info && typeof data.info === "object" && "url" in data.info) {
              form.setValue("image", data.info.url as string);
            } else {
              toast.error("Failed to upload image");
            }
          }}
        >
          Upload Image
        </CldUploadButton>
        {form.getValues("image") && (
          <img
            src={form.getValues("image")}
            alt="Uploaded"
            className="w-24 h-24 object-cover border border-border-light mt-1"
          />
        )}
        {form.formState.errors.image && (
          <span className="text-red-500 text-xs">
            {form.formState.errors.image.message?.toString()}
          </span>
        )}
      </div>

      <div className="flex flex-col gap-2">
        <label className={fieldLabel}>Brand</label>
        <input
          type="text"
          {...form.register("brand", { required: "Brand is required" })}
          className={inputClass(!!form.formState.errors.brand)}
        />
        {form.formState.errors.brand && (
          <span className="text-red-500 text-xs">
            {form.formState.errors.brand.message?.toString()}
          </span>
        )}
      </div>

      <div className="flex flex-col gap-2">
        <label className={fieldLabel}>Price (Rs.)</label>
        <input
          type="number"
          {...form.register("price", { required: "Price is required" })}
          className={inputClass(!!form.formState.errors.price)}
        />
        {form.formState.errors.price && (
          <span className="text-red-500 text-xs">
            {form.formState.errors.price.message?.toString()}
          </span>
        )}
      </div>

      <div className="flex flex-col gap-2">
        <label className={fieldLabel}>Original Price (Rs.)</label>
        <input
          type="number"
          {...form.register("originalPrice")}
          className={inputClass(false)}
        />
      </div>

      <div className="flex flex-col gap-2">
        <label className={fieldLabel}>Rating</label>
        <select
          {...form.register("rating", { required: "Rating is required" })}
          className={inputClass(!!form.formState.errors.rating)}
        >
          <option value="">-- Choose Rating --</option>
          {[1, 2, 3, 4, 5].map((value) => (
            <option key={value} value={value}>
              {value} {value === 1 ? "star" : "stars"}
            </option>
          ))}
        </select>
        {form.formState.errors.rating && (
          <span className="text-red-500 text-xs">
            {form.formState.errors.rating.message?.toString()}
          </span>
        )}
      </div>

      <div className="flex flex-col gap-2">
        <label className={fieldLabel}>In Stock</label>
        <div className="flex border border-border-light w-fit">
          {[
            { value: "true", label: "Yes" },
            { value: "false", label: "No" },
          ].map((opt) => (
            <label
              key={opt.value}
              className="relative px-5 py-2.5 text-sm font-semibold cursor-pointer has-[:checked]:bg-forest has-[:checked]:text-white transition-colors"
            >
              <input
                type="radio"
                value={opt.value}
                {...form.register("inStock")}
                className="absolute opacity-0"
              />
              {opt.label}
            </label>
          ))}
        </div>
        {form.formState.errors.inStock && (
          <span className="text-red-500 text-xs">
            {form.formState.errors.inStock.message?.toString()}
          </span>
        )}
      </div>

      <div className="flex flex-col gap-2">
        <label className={fieldLabel}>New Arrival</label>
        <div className="flex border border-border-light w-fit">
          {[
            { value: "True", label: "Yes" },
            { value: "false", label: "No" },
          ].map((opt) => (
            <label
              key={opt.value}
              className="relative px-5 py-2.5 text-sm font-semibold cursor-pointer has-[:checked]:bg-forest has-[:checked]:text-white transition-colors"
            >
              <input
                type="radio"
                value={opt.value}
                {...form.register("isProductNew", { required: "New arrival status is required" })}
                className="absolute opacity-0"
              />
              {opt.label}
            </label>
          ))}
        </div>
        {form.formState.errors.isProductNew && (
          <span className="text-red-500 text-xs">
            {form.formState.errors.isProductNew.message?.toString()}
          </span>
        )}
      </div>

      <div className="flex flex-col gap-2 md:col-span-2">
        <label className={fieldLabel}>Features (comma-separated)</label>
        <input
          type="text"
          {...form.register("features", { required: "Features is required" })}
          className={inputClass(!!form.formState.errors.features)}
        />
        {form.formState.errors.features && (
          <span className="text-red-500 text-xs">
            {form.formState.errors.features.message?.toString()}
          </span>
        )}
      </div>

      <div className="flex flex-col gap-2 md:col-span-2">
        <label className={fieldLabel}>Description</label>
        <textarea
          rows={4}
          {...form.register("description", { required: "Description is required" })}
          className={inputClass(!!form.formState.errors.description)}
        />
        {form.formState.errors.description && (
          <span className="text-red-500 text-xs">
            {form.formState.errors.description.message?.toString()}
          </span>
        )}
      </div>

      <div className="flex flex-col gap-2 md:col-span-2">
        <label className={fieldLabel}>Specifications</label>
        <input
          type="text"
          {...form.register("specifications", { required: "Specifications is required" })}
          className={inputClass(!!form.formState.errors.specifications)}
        />
        {form.formState.errors.specifications && (
          <span className="text-red-500 text-xs">
            {form.formState.errors.specifications.message?.toString()}
          </span>
        )}
      </div>
    </div>
  );
};

export default ProductForm;
