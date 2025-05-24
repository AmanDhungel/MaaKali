import { ProductFormProps } from "@/types/product.types";
import { create } from "zustand";

interface ProductStore {
  cart: ProductFormProps[];
  addToCart: (product: ProductFormProps) => void;
  removeFromCart: (productId: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
}

export const useProductStore = create<ProductStore>((set) => ({
  cart: [],
  addToCart: (product) =>
    set((state) => {
      const existingProduct = state.cart.find(
        (item) => item._id === product._id
      );
      if (existingProduct) {
        return { cart: [...state.cart] };
      }
      return { cart: [...state.cart, product] };
    }),
  removeFromCart: (productId) =>
    set((state) => ({
      cart: state.cart.filter((item) => item._id !== productId),
    })),
  updateQuantity: (id: string, quantity: number) =>
    set((state) => ({
      cart: state.cart.map((item) =>
        item._id === id ? { ...item, quantity } : item
      ),
    })),
}));
