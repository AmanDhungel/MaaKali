"use client";

import { TableDemo } from "@/components/ui/dynamicTable";
import { GETBlogs } from "@/services/blog.services";
import { Loader2 } from "lucide-react";
import { Plus } from "react-feather";
import AdminPageHeader from "@/components/admin/AdminPageHeader";

const BlogPostForm = () => {
  const { data, isLoading } = GETBlogs();
  return (
    <div>
      <AdminPageHeader
        eyebrow="CONTENT"
        title="Blog Posts"
        action={{ label: "Add Blog", href: "/admin/addblog", icon: <Plus className="h-4 w-4" /> }}
      />
      <div className="max-w-[1400px] mx-auto">
        {isLoading ? (
          <div className="flex justify-center py-24">
            <Loader2 className="animate-spin text-forest h-8 w-8" />
          </div>
        ) : (
          <TableDemo
            title="Blogs"
            header={["image", "title", "author", "tags"]}
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            data={data as any}
            action={true}
          />
        )}
      </div>
    </div>
  );
};

export default BlogPostForm;
