"use client";
import { useProductStore } from "@/store/product.store";
import React, { useState } from "react";

type CartItem = {
  _id?: string;
  image: string;
  name: string;
  category: string;
  brand: string;
  price: string;
  originalPrice?: string;
  rating: string;
  inStock: string;
  isProductNew: string;
  features: string;
  description: string;
  specifications: string;
  relatedProducts?: string[];
  quantity: number;
};

const mockCartItems: CartItem[] = [
  {
    _id: "1",
    image: "/placeholder.png",
    name: "Sample Product",
    category: "Electronics",
    brand: "BrandX",
    price: "199.99",
    originalPrice: "249.99",
    rating: "4",
    inStock: "Yes",
    isProductNew: "Yes",
    features: "Feature 1, Feature 2",
    description: "A great product.",
    specifications: "Spec 1, Spec 2",
    relatedProducts: ["2", "3"],
    quantity: 1,
  },
];

const CartPage: React.FC = () => {
  const { cart: cartItems, updateQuantity, removeFromCart } = useProductStore();
  const [quantities, setQuantities] = useState<Record<string, number>>(() => {
    const initialQuantities: Record<string, number> = {};
    cartItems.forEach((item) => {
      if (item._id) {
        initialQuantities[item._id] = 1;
      }
    });
    return initialQuantities;
  });

  const handleQuantityChange = (id: string, newQuantity: number) => {
    if (newQuantity < 1) return;

    setQuantities((prev) => ({
      ...prev,
      [id]: newQuantity,
    }));

    if (updateQuantity) {
      updateQuantity(id, newQuantity);
    }
  };

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => {
      const itemQuantity = quantities[item._id || ""] || 1;
      return total + Number(item.price) * itemQuantity;
    }, 0);
  };
  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Your Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className="space-y-4">
          {cartItems.map((item, idx) => {
            return (
              <div
                key={item?._id || idx}
                className="flex items-center border rounded p-4 gap-4">
                <img
                  src={item?.image}
                  alt={item?.name}
                  className="w-24 h-24 object-cover rounded"
                />
                <div className="flex-1">
                  <h2 className="font-semibold">{item?.name}</h2>
                  <p className="text-sm text-gray-500">{item?.brand}</p>
                  <p className="text-sm text-gray-500">{item?.category}</p>
                  <p className="text-sm">
                    <span className="font-bold">
                      {" "}
                      रू
                      {item?.price}
                    </span>
                    {item?.originalPrice && (
                      <span className="line-through text-gray-400 ml-2">
                        रू{item?.originalPrice}
                      </span>
                    )}
                    <span className="ml-4">
                      Total: रू{" "}
                      {(
                        Number(item?.price) * (quantities[item._id || ""] || 1)
                      ).toFixed(2)}
                    </span>
                  </p>
                  <p className="text-xs text-yellow-600">
                    Rating: {item?.rating}/5
                  </p>
                  <p className="text-xs">
                    {item?.inStock === "Yes" ? "In Stock" : "Out of Stock"}
                  </p>
                  <div className="flex items-center mt-2">
                    <label className="mr-2 text-sm">Qty:</label>
                    <input
                      type="number"
                      min={1}
                      value={quantities[item._id || ""] || 1}
                      className="w-16 border rounded px-2 py-1"
                      onChange={(e) => {
                        handleQuantityChange(
                          item?._id || "",
                          Number(e.target.value)
                        );
                      }}
                    />
                  </div>
                  <button
                    onClick={() => removeFromCart(item?._id || "")}
                    className="mt-2 text-red-500 text-sm">
                    Remove
                  </button>
                </div>
              </div>
            );
          })}
          <div className="flex justify-between items-center mt-6 border-t pt-4">
            <span className="font-bold text-lg">Total:</span>
            <span className="font-bold text-lg">
              रू
              {calculateTotal().toFixed(2)}
            </span>
          </div>
          <button className="w-full bg-blue-600 text-white py-2 rounded mt-4 hover:bg-blue-700 transition">
            Proceed to Checkout
          </button>
        </div>
      )}
    </div>
  );
};

export default CartPage;
