"use client";

import { TableDemo } from "@/components/ui/dynamicTable";
import { GETBlogs } from "@/services/blog.services";
import { Loader } from "lucide-react";
import Link from "next/link";

const BlogPostForm = () => {
  const { data, isLoading } = GETBlogs();
  return (
    <>
      <Link
        href="/admin/addblog"
        className="w-fit flex bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mt-5 mr-5 ml-auto">
        Add Blog
      </Link>
      <div className="w-11/12 m-auto">
        {isLoading ? (
          <Loader className="animate-spin flex m-auto w-12 h-12" />
        ) : (
          <TableDemo
            title="Blogs"
            header={["title", "description", "tags", "relatedPosts", "image"]}
            data={data as any}
            action={true}
          />
        )}
      </div>
    </>
  );
};

export default BlogPostForm;
