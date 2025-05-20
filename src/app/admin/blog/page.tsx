"use client";

import { TableDemo } from "@/components/ui/dynamicTable";
import { GETBlogs } from "@/services/blog.services";
import Link from "next/link";
import { useRouter } from "next/navigation";

const BlogPostForm = () => {
  const { data } = GETBlogs();
  const router = useRouter();
  console.log("Blogs", data);
  return (
    <>
      <Link
        href="/admin/addblog"
        className="w-fit flex bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mt-5 mr-5 ml-auto">
        Add Blog
      </Link>
      <div className="w-11/12 m-auto">
        <TableDemo
          title="Blogs"
          header={["Title", "Description", "Author", "Image"]}
          data={(data ?? []).map((blog: any) => ({
            Title: blog.title ?? "",
            Description: blog.description ?? "",
            Author: blog.author ?? "",
            Image: blog.image ?? "",
          }))}
          action={true}
        />
      </div>
    </>
  );
};

export default BlogPostForm;
