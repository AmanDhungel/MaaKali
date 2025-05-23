import { TableDemo } from "@/components/ui/dynamicTable";
import { GETProducts } from "@/services/product.services";
import React from "react";

const Product = () => {
  const { data } = GETProducts();

  const tableData = data?.map((product) => ({
    ...product,
    inStock: product.inStock ? "Yes" : "No",
    isProductNew: product.isProductNew ? "Yes" : "No",
  }));

  return (
    <div>
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
          "relatedProducts",
        ]}
        data={tableData as any}
        action={true}
      />
    </div>
  );
};

export default Product;
