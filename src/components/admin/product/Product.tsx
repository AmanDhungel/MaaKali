"use client";
import { TableDemo } from "@/components/ui/dynamicTable";
import { GETProducts } from "@/services/product.services";
import { Loader2 } from "lucide-react";
import Link from "next/link";
import React from "react";

const Product = () => {
  const { data, isLoading } = GETProducts();

  const tableData = data?.map((product) => ({
    ...product,
    inStock: product.inStock ? "Yes" : "No",
    isProductNew: product.isProductNew ? "Yes" : "No",
  }));

  return (
    <div>
      <Link
        href="/admin/addproduct"
        className="w-fit flex bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mt-5 mr-5 ml-auto">
        Add Product
      </Link>
      {isLoading ? (
        <Loader2 className="animate-spin flex w-12 h-12 m-auto" />
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
            "features",
            "description",
            "specifications",
          ]}
          data={tableData as any}
          action={true}
        />
      )}
    </div>
  );
};

export default Product;
