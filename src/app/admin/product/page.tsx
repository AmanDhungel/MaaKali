"use client";

import Link from "next/link";
import Product from "@/components/admin/product/Product";

const ProductForm = () => {
  return (
    <>
      <Link
        href="/admin/addproduct"
        className="w-fit flex bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mt-5 mr-5 ml-auto">
        Add Product
      </Link>

      <Product />
    </>
  );
};
export default ProductForm;
