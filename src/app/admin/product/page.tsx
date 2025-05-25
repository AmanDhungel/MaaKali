import Link from "next/link";
import Product from "@/components/admin/product/Product";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Maa Kali Hardware | Product page",
  description:
    "hardware shop in Bhaktapur, building materials store Nepal, best hardware store near me,  Maa Kali Hardware Radhe Radhe",
  keywords:
    "cement, bhaktapur, hardware store, construction material, hardware shop near me",
};

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
