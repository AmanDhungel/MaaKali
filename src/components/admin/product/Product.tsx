import { TableDemo } from "@/components/ui/dynamicTable";
import { GETProducts } from "@/services/product.services";
import React from "react";

const Product = () => {
  // const {data} = GETProducts();
  const sampleProducts = [
    {
      name: "Wireless Mouse",
      category: "Electronics",
      brand: "Logitech",
      price: 29.99,
      originalPrice: 39.99,
      rating: 4.5,
      inStock: true,
      isProductNew: false,
    },
    {
      name: "Bluetooth Headphones",
      category: "Electronics",
      brand: "Sony",
      price: 99.99,
      originalPrice: 129.99,
      rating: 4.7,
      inStock: true,
      isProductNew: true,
    },
    {
      name: "Running Shoes",
      category: "Footwear",
      brand: "Nike",
      price: 59.99,
      originalPrice: 79.99,
      rating: 4.3,
      inStock: false,
      isProductNew: false,
    },
  ];

  const tableData = sampleProducts.map((product) => ({
    ...product,
    inStock: product.inStock ? "Yes" : "No",
    isProductNew: product.isProductNew ? "Yes" : "No",
  }));

  return (
    <div>
      <TableDemo
        title="Products"
        header={[
          "name",
          "category",
          "brand",
          "price",
          "originalPrice",
          "rating",
          "inStock",
          "isProductNew",
        ]}
        data={tableData}
        action={true}
      />
    </div>
  );
};

export default Product;
