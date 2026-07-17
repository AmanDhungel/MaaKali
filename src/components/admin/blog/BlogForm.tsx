import { useEffect, useState } from "react";
import { useFormContext } from "react-hook-form";
import { toast } from "react-toastify";
import FroalaEditorComponent from "react-froala-wysiwyg";
import "froala-editor/css/froala_style.min.css";
import "froala-editor/css/froala_editor.pkgd.min.css";
import { CldUploadButton } from "next-cloudinary";
import { X, Plus, Trash2 } from "react-feather";
import { BlogPostFormProps } from "@/types/blog.types";

const fieldLabel = "text-xs font-bold tracking-[.04em] text-ink uppercase";
const inputClass = (hasError: boolean) =>
  `border ${
    hasError ? "border-red-500" : "border-border-light"
  } px-3.5 py-2.5 text-sm outline-none focus:border-forest transition-colors bg-white w-full`;

const BlogForm = () => {
  const [tagInput, setTagInput] = useState("");
  const [relatedPostInput, setRelatedPostInput] = useState("");
  const [isMounted, setIsMounted] = useState(false);

  const form = useFormContext<BlogPostFormProps>();

  if (!form) {
    throw new Error("BlogForm must be used within a FormProvider.");
  }
  useEffect(() => {
    setIsMounted(true);
    return () => setIsMounted(false);
  }, []);

  const addTag = () => {
    if (tagInput.trim()) {
      const currentTags = form.getValues("tags") || [];
      form.setValue("tags", [...currentTags, tagInput.trim()]);
      setTagInput("");
    }
  };

  const removeTag = (index: number) => {
    const currentTags = form.getValues("tags");
    form.setValue(
      "tags",
      currentTags.filter((_, i) => i !== index)
    );
  };

  const addRelatedPost = () => {
    if (relatedPostInput.trim()) {
      const currentRelatedPosts = form.getValues("relatedPosts") || [];
      form.setValue("relatedPosts", [...currentRelatedPosts, relatedPostInput.trim()]);
      setRelatedPostInput("");
    }
  };

  const removeRelatedPost = (index: number) => {
    const currentRelatedPosts = form.getValues("relatedPosts");
    form.setValue(
      "relatedPosts",
      currentRelatedPosts.filter((_, i) => i !== index)
    );
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="flex flex-col gap-2">
        <label className={fieldLabel}>Title</label>
        <input
          type="text"
          {...form.register("title", { required: "Title is required" })}
          className={inputClass(!!form.formState.errors.title)}
        />
        {form.formState.errors.title && (
          <span className="text-red-500 text-xs">
            {form.formState.errors.title.message?.toString()}
          </span>
        )}
      </div>

      <div className="flex flex-col gap-2">
        <label className={fieldLabel}>Excerpt</label>
        <textarea
          {...form.register("excerpt", { required: "Excerpt is required" })}
          className={inputClass(!!form.formState.errors.excerpt)}
          rows={3}
        />
        {form.formState.errors.excerpt && (
          <span className="text-red-500 text-xs">
            {form.formState.errors.excerpt.message?.toString()}
          </span>
        )}
      </div>

      <div className="col-span-full flex flex-col gap-2">
        <label className={fieldLabel}>Content</label>
        <div className="border border-border-light [&_.fr-toolbar]:border-border-light [&_.fr-wrapper]:border-border-light">
          {isMounted && (
            <FroalaEditorComponent
              model={form.getValues("description") ?? ""}
              onModelChange={(e: string) => {
                form.setValue("description", e);
              }}
            />
          )}
        </div>
        {form.formState.errors.description && (
          <span className="text-red-500 text-xs">
            {form.formState.errors.description.message?.toString()}
          </span>
        )}
      </div>

      <div className="flex flex-col gap-2">
        <label className={fieldLabel}>Author</label>
        <input
          type="text"
          {...form.register("author", { required: "Author is required" })}
          className={inputClass(!!form.formState.errors.author)}
        />
        {form.formState.errors.author && (
          <span className="text-red-500 text-xs">
            {form.formState.errors.author.message?.toString()}
          </span>
        )}
      </div>

      <div className="flex flex-col gap-2">
        <label className={fieldLabel}>Featured Image</label>
        {!form.getValues("image") ? (
          <CldUploadButton
            uploadPreset="njqfzuge"
            className="inline-flex w-fit bg-forest hover:bg-mint hover:text-ink text-white text-sm font-bold px-4 py-2.5 transition-colors"
            options={{
              maxFiles: 1,
              resourceType: "image",
              multiple: false,
              clientAllowedFormats: ["jpg", "jpeg", "png", "gif", "webp"],
            }}
            onSuccess={(data) => {
              if (
                data.info &&
                typeof data.info === "object" &&
                data.info !== null &&
                "url" in data.info
              ) {
                const imageUrl = (data.info as { url: string }).url;
                form.setValue("image", imageUrl);
              } else {
                toast.error("Failed to upload image");
              }
            }}
          >
            Upload Image
          </CldUploadButton>
        ) : (
          <div className="relative w-fit">
            <img
              src={form.getValues("image")}
              alt="Preview"
              className="h-24 w-auto object-cover border border-border-light"
              title="Image"
            />
            <button
              type="button"
              title="Remove image"
              onClick={() => form.setValue("image", "")}
              className="absolute -top-2 -right-2 w-6 h-6 flex items-center justify-center bg-ink text-white hover:bg-red-500 transition-colors"
            >
              <X className="h-3.5 w-3.5" />
            </button>
          </div>
        )}
        {form.formState.errors.image && (
          <span className="text-red-500 text-xs">
            {form.formState.errors.image.message?.toString()}
          </span>
        )}
      </div>

      <div className="flex flex-col gap-2">
        <label className={fieldLabel}>Tags</label>
        <div className="flex gap-2">
          <input
            type="text"
            value={tagInput}
            onChange={(e) => setTagInput(e.target.value)}
            className={`${inputClass(false)} flex-1`}
            placeholder="Add a tag"
          />
          <button
            type="button"
            onClick={addTag}
            className="bg-forest hover:bg-mint hover:text-ink text-white px-3.5 transition-colors"
          >
            <Plus size={16} />
          </button>
        </div>
        <div className="flex flex-wrap gap-2">
          {form.getValues("tags")?.map((tag, index) => (
            <div
              key={index}
              className="bg-offwhite border border-border-light px-3 py-1 flex items-center gap-1.5 text-sm"
            >
              <span>{tag}</span>
              <button type="button" onClick={() => removeTag(index)} className="text-red-500 cursor-pointer">
                <Trash2 size={13} />
              </button>
            </div>
          ))}
        </div>
        {form.formState.errors.tags && (
          <span className="text-red-500 text-xs">
            {form.formState.errors.tags.message?.toString()}
          </span>
        )}
      </div>

      <div className="flex flex-col gap-2 md:col-span-2">
        <label className={fieldLabel}>Related Posts (IDs)</label>
        <div className="flex gap-2">
          <input
            type="text"
            value={relatedPostInput}
            onChange={(e) => setRelatedPostInput(e.target.value)}
            className={`${inputClass(false)} flex-1`}
            placeholder="Add related post ID"
          />
          <button
            type="button"
            onClick={addRelatedPost}
            className="bg-forest hover:bg-mint hover:text-ink text-white px-3.5 transition-colors"
          >
            <Plus size={16} />
          </button>
        </div>
        <div className="flex flex-wrap gap-2">
          {form.getValues("relatedPosts")?.map((post, index) => (
            <div
              key={index}
              className="bg-offwhite border border-border-light px-3 py-1 flex items-center gap-1.5 text-sm"
            >
              <span>{post}</span>
              <button
                type="button"
                onClick={() => removeRelatedPost(index)}
                className="text-red-500 cursor-pointer"
              >
                <Trash2 size={13} />
              </button>
            </div>
          ))}
        </div>
        {form.formState.errors.relatedPosts && (
          <span className="text-red-500 text-xs">
            {form.formState.errors.relatedPosts.message?.toString()}
          </span>
        )}
      </div>
    </div>
  );
};

export default BlogForm;
