"use client";
import { AddBlogPost, GETSingleBlog } from "@/services/blog.services";
import axios from "axios";
import { CldUploadButton } from "next-cloudinary";
import React, { useEffect, useState } from "react";
import { Plus, Trash2 } from "react-feather";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import RichTextEditor from "@/components/ui/TextEditor";
import "froala-editor/css/froala_style.min.css";
import "froala-editor/css/froala_editor.pkgd.min.css";

import FroalaEditorComponent from "react-froala-wysiwyg";
import { Cross } from "lucide-react";
import { FaDeleteLeft } from "react-icons/fa6";
import { useParams } from "next/navigation";

export interface BlogPostFormProps {
  title: string;
  excerpt: string;
  description: string;
  author: string;
  tags: string[];
  image: string;
  relatedPosts: string[];
}

const AddBlog = () => {
  const [tagInput, setTagInput] = useState("");
  const [relatedPostInput, setRelatedPostInput] = useState("");
  const [state, setState] = useState({
    image: "",
    tags: [] as string[],
    relatedPosts: [] as string[],
  });

  const {
    register,
    setValue,
    getValues,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: {
      title: "",
      excerpt: "",
      description: "",
      author: "",
      tags: [] as string[],
      image: "",
      relatedPosts: [] as string[],
    },
  });

  const { mutate } = AddBlogPost();
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    setIsMounted(true);
    return () => setIsMounted(false);
  }, []);
  const onSubmit = async (data: BlogPostFormProps) => {
    mutate(data, {
      onSuccess: () => {
        toast.success("Blog post added successfully!");
        reset();
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

  const addTag = () => {
    if (tagInput.trim()) {
      const currentTags = getValues("tags") || [];
      setValue("tags", [...currentTags, tagInput.trim()]);
      setTagInput("");
    }
  };

  const removeTag = (index: number) => {
    const currentTags = getValues("tags");
    setValue(
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
      const currentRelatedPosts = getValues("relatedPosts") || [];
      setValue("relatedPosts", [
        ...currentRelatedPosts,
        relatedPostInput.trim(),
      ]);

      setRelatedPostInput("");
    }
  };

  const removeRelatedPost = (index: number) => {
    const currentRelatedPosts = getValues("relatedPosts");
    setValue(
      "relatedPosts",
      currentRelatedPosts.filter((_, i) => i !== index)
    );
    setState((prev) => ({
      ...prev,
      relatedPosts: currentRelatedPosts.filter((_, i) => i !== index),
    }));
  };
  const params = useParams();
  const blog = params ? params["blog"] : undefined;
  const { data } = GETSingleBlog(blog as string);

  useEffect(() => {
    if (data) {
      reset({
        title: data.title,
        excerpt: data.excerpt,
        description: data.description,
        author: data.author,
        tags:
          "tags" in data && Array.isArray((data as any).tags)
            ? (data as any).tags
            : [],
        image: data.image,
        relatedPosts:
          "relatedPosts" in data && Array.isArray(data.relatedPosts)
            ? (data.relatedPosts as (string | undefined)[])
            : [],
      });
    }
  }, [data, reset]);

  console.log("state", getValues());

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-6 w-11/12 m-auto p-4 border-2 rounded-md mt-10">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 w-full ">
        <div className="flex flex-col space-y-4">
          <label className="text-sm font-medium">Title</label>
          <input
            type="text"
            {...register("title", { required: "Title is required" })}
            className={`border p-2 rounded-md w-full ${
              errors.title ? "border-red-500" : "border-gray-300"
            }`}
          />
          {errors.title && (
            <span className="text-red-500 text-sm">
              {errors.title.message?.toString()}
            </span>
          )}
        </div>

        <div className="flex flex-col space-y-4">
          <label className="text-sm font-medium">Excerpt</label>
          <textarea
            {...register("excerpt", { required: "Excerpt is required" })}
            className={`border p-2 rounded-md ${
              errors.excerpt ? "border-red-500" : "border-gray-300"
            }`}
            rows={3}
          />
          {errors.excerpt && (
            <span className="text-red-500 text-sm">
              {errors.excerpt.message?.toString()}
            </span>
          )}
        </div>

        <div className="col-span-full flex w- flex-col space-y-4">
          <label className="text-sm font-medium">Content</label>
          {isMounted && (
            <FroalaEditorComponent
              model={getValues("description") ?? ""}
              onModelChange={(e: string) => {
                setValue("description", e);
              }}
            />
          )}
          {errors.description && (
            <span className="text-red-500 text-sm">
              {errors.description.message?.toString()}
            </span>
          )}
        </div>

        <div className="flex flex-col space-y-4">
          <label className="text-sm font-medium">Author</label>
          <input
            type="text"
            {...register("author", { required: "Author is required" })}
            className={`border p-2 rounded-md ${
              errors.author ? "border-red-500" : "border-gray-300"
            }`}
          />
          {errors.author && (
            <span className="text-red-500 text-sm">
              {errors.author.message?.toString()}
            </span>
          )}
        </div>

        <div className="flex flex-col space-y-4">
          <label className="text-sm font-medium">Featured Image</label>
          <CldUploadButton
            uploadPreset="njqfzuge"
            className="bg-amber-300 text-1xl text-white p-2 rounded-md"
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
                  image: "asdasd",
                }));
                setValue("image", imageUrl);
              } else {
                toast.error("Failed to upload image");
              }
            }}
          />
          {getValues("image") && (
            <div className="w-fit" title="Remove image">
              <Cross
                className="ml-auto -mt-5 bg-amber-400 relative top-6 rotate-45 cursor-pointer text-2xl text-red-500"
                onClick={() => {
                  setValue("image", "");
                  setState((prev) => ({
                    ...prev,
                    image: "",
                  }));
                }}
              />
              <img
                src={getValues("image")}
                alt="Preview"
                className="h-20 w-auto"
                title="Image"
              />
            </div>
          )}
          {errors.image && (
            <span className="text-red-500 text-sm">
              {errors.image.message?.toString()}
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
              {getValues("tags")?.map((tag, index) => (
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
            {errors.tags && (
              <span className="text-red-500 text-sm">
                {errors.tags.message?.toString()}
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
              {getValues("relatedPosts")?.map((post, index) => (
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
            {errors.relatedPosts && (
              <span className="text-red-500 text-sm">
                {errors.relatedPosts.message?.toString()}
              </span>
            )}
          </div>
        </div>
      </div>
      <button
        type="submit"
        className="flex cursor-pointer justify-center w-3/4 m-auto mt-4 bg-blue-500 text-white p-2 rounded-md">
        Submit Blog Post
      </button>
    </form>
  );
};

export default AddBlog;
