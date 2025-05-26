import { AddBlogPost, GETSingleBlog } from "@/services/blog.services";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import { useForm, useFormContext } from "react-hook-form";
import { toast } from "react-toastify";
import { z } from "zod";
import FroalaEditorComponent from "react-froala-wysiwyg";
import "froala-editor/css/froala_style.min.css";
import "froala-editor/css/froala_editor.pkgd.min.css";
import { CldUploadButton } from "next-cloudinary";
import { Cross } from "lucide-react";
import { Plus, Trash2 } from "react-feather";
import { BlogPostFormProps } from "@/types/blog.types";

const BlogForm = () => {
  const [tagInput, setTagInput] = useState("");
  const [relatedPostInput, setRelatedPostInput] = useState("");
  const [state, setState] = useState({
    image: "",
    tags: [] as string[],
    relatedPosts: [] as string[],
  });

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
    setState((prev) => ({
      ...prev,
      tags: currentTags.filter((_, i) => i !== index),
    }));
  };

  const addRelatedPost = () => {
    if (relatedPostInput.trim()) {
      const currentRelatedPosts = form.getValues("relatedPosts") || [];
      form.setValue("relatedPosts", [
        ...currentRelatedPosts,
        relatedPostInput.trim(),
      ]);

      setRelatedPostInput("");
    }
  };

  const removeRelatedPost = (index: number) => {
    const currentRelatedPosts = form.getValues("relatedPosts");
    form.setValue(
      "relatedPosts",
      currentRelatedPosts.filter((_, i) => i !== index)
    );
    setState((prev) => ({
      ...prev,
      relatedPosts: currentRelatedPosts.filter((_, i) => i !== index),
    }));
  };

  return (
    <div className="">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 w-full">
        <div className="flex flex-col space-y-4">
          <label className="text-sm font-medium">Title</label>
          <input
            type="text"
            {...form.register("title", { required: "Title is required" })}
            className={`border p-2 rounded-md w-full ${
              form.formState.errors.title ? "border-red-500" : "border-gray-300"
            }`}
          />
          {form.formState.errors.title && (
            <span className="text-red-500 text-sm">
              {form.formState.errors.title.message?.toString()}
            </span>
          )}
        </div>

        <div className="flex flex-col space-y-4">
          <label className="text-sm font-medium">Excerpt</label>
          <textarea
            {...form.register("excerpt", { required: "Excerpt is required" })}
            className={`border p-2 rounded-md ${
              form.formState.errors.excerpt
                ? "border-red-500"
                : "border-gray-300"
            }`}
            rows={3}
          />
          {form.formState.errors.excerpt && (
            <span className="text-red-500 text-sm">
              {form.formState.errors.excerpt.message?.toString()}
            </span>
          )}
        </div>

        <div className="col-span-full flex w- flex-col space-y-4">
          <label className="text-sm font-medium">Content</label>
          {isMounted && (
            <FroalaEditorComponent
              model={form.getValues("description") ?? ""}
              onModelChange={(e: string) => {
                form.setValue("description", e);
              }}
            />
          )}
          {form.formState.errors.description && (
            <span className="text-red-500 text-sm">
              {form.formState.errors.description.message?.toString()}
            </span>
          )}
        </div>

        <div className="flex flex-col space-y-4">
          <label className="text-sm font-medium">Author</label>
          <input
            type="text"
            {...form.register("author", { required: "Author is required" })}
            className={`border p-2 rounded-md ${
              form.formState.errors.author
                ? "border-red-500"
                : "border-gray-300"
            }`}
          />
          {form.formState.errors.author && (
            <span className="text-red-500 text-sm">
              {form.formState.errors.author.message?.toString()}
            </span>
          )}
        </div>

        <div className="flex flex-col space-y-4">
          <label className="text-sm font-medium">Featured Image</label>
          {!form.getValues("image") ? (
            <CldUploadButton
              uploadPreset="njqfzuge"
              className="bg-amber-300 text-1xl text-white p-2 rounded-md"
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
                  setState((prev) => ({
                    ...prev,
                    image: imageUrl,
                  }));
                  form.setValue("image", imageUrl);
                } else {
                  toast.error("Failed to upload image");
                }
              }}
            />
          ) : (
            <button
              disabled={form.getValues("image") ? true : false}
              className="bg-amber-300 text-1xl text-white p-2 rounded-md">
              Upload Image
            </button>
          )}

          {form.getValues("image") && (
            <div className="w-fit" title="Remove image">
              <Cross
                className="ml-auto -mt-5 bg-amber-400 relative top-6 rotate-45 cursor-pointer text-2xl text-red-500"
                onClick={() => {
                  form.setValue("image", "");
                  setState((prev) => ({
                    ...prev,
                    image: "",
                  }));
                }}
              />
              <img
                src={form.getValues("image")}
                alt="Preview"
                className="h-20 w-auto"
                title="Image"
              />
            </div>
          )}
          {form.formState.errors.image && (
            <span className="text-red-500 text-sm">
              {form.formState.errors.image.message?.toString()}
            </span>
          )}
        </div>

        <div className="w-full flex sm:flex-col md:flex-row space-y-4 lg:space-x-[8.5rem] justify-between">
          <div className="flex flex-col space-y-4 w-full">
            <label className="text-sm font-medium">Tags</label>
            <div className="flex gap-2">
              <input
                type="text"
                value={tagInput}
                onChange={(e) => setTagInput(e.target.value)}
                className="border p-2 rounded-md flex-1"
                placeholder="Add a tag"
              />
              <button
                type="button"
                onClick={addTag}
                className="bg-blue-500 text-white p-2 rounded-md">
                <Plus size={16} />
              </button>
            </div>
            <div className="flex flex-wrap gap-2">
              {form.getValues("tags")?.map((tag, index) => (
                <div
                  key={index}
                  className="bg-gray-200 px-3 py-1 rounded-full flex items-center gap-1">
                  <span>{tag}</span>
                  <button
                    type="button"
                    onClick={() => removeTag(index)}
                    className="text-red-500 cursor-pointer">
                    <Trash2 size={14} />
                  </button>
                </div>
              ))}
            </div>
            {form.formState.errors.tags && (
              <span className="text-red-500 text-sm">
                {form.formState.errors.tags.message?.toString()}
              </span>
            )}
          </div>

          <div className="flex flex-col space-y-4 w-full">
            <label className="text-sm font-medium">Related Posts</label>
            <div className="flex gap-2">
              <input
                type="text"
                value={relatedPostInput}
                onChange={(e) => setRelatedPostInput(e.target.value)}
                className="border p-2 rounded-md flex-1"
                placeholder="Add related post ID"
              />
              <button
                type="button"
                onClick={addRelatedPost}
                className="bg-blue-500 text-white p-2 rounded-md ">
                <Plus size={16} />
              </button>
            </div>
            <div className="flex flex-wrap gap-2">
              {form.getValues("relatedPosts")?.map((post, index) => (
                <div
                  key={index}
                  className="bg-gray-200 px-3 py-1 rounded-full flex items-center gap-1">
                  <span className="text-black">{post}</span>
                  <button
                    type="button"
                    onClick={() => removeRelatedPost(index)}
                    className="text-red-500 cursor-pointer">
                    <Trash2 size={14} className="cursor-pointer" />
                  </button>
                </div>
              ))}
            </div>
            {form.formState.errors.relatedPosts && (
              <span className="text-red-500 text-sm">
                {form.formState.errors.relatedPosts.message?.toString()}
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogForm;
