import { TableDemo } from "@/components/ui/dynamicTable";
import { GETProducts } from "@/services/product.services";
import { Loader2 } from "lucide-react";
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
