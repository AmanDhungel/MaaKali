"use client";
import { TableDemo } from "@/components/ui/dynamicTable";
import { GETProducts } from "@/services/product.services";
import { Loader2 } from "lucide-react";
import { Plus } from "react-feather";
import AdminPageHeader from "@/components/admin/AdminPageHeader";

const Product = () => {
  const { data, isLoading } = GETProducts();

  const tableData = data?.map((product) => ({
    ...product,
    inStock: product.inStock === "true" ? "Yes" : "No",
    isProductNew: product.isProductNew?.toLowerCase() === "true" ? "Yes" : "No",
  }));

  return (
    <div>
      <AdminPageHeader
        eyebrow="INVENTORY"
        title="Products"
        action={{ label: "Add Product", href: "/admin/addproduct", icon: <Plus className="h-4 w-4" /> }}
      />
      <div className="max-w-[1400px] mx-auto">
        {isLoading ? (
          <div className="flex justify-center py-24">
            <Loader2 className="animate-spin text-forest h-8 w-8" />
          </div>
        ) : (
          <TableDemo
            title="Products"
            header={[
              "image",
              "name",
              "category",
              "brand",
              "price",
              "originalPrice",
              "rating",
              "inStock",
              "isProductNew",
            ]}
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            data={tableData as any}
            action={true}
          />
        )}
      </div>
    </div>
  );
};

export default Product;
