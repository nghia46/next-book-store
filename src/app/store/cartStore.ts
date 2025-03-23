import { create } from "zustand";
import { persist } from "zustand/middleware";
import { Book } from "../lib/models/book";

// Định nghĩa kiểu dữ liệu cho store
interface CartState {
  cart: Book[];
  addToCart: (book: Book) => void;
  removeFromCart: (id: number) => void;
  updateQuantity: (id: number, quantity: number) => void;
  clearCart: () => void;
}

// Tạo Zustand store với middleware persist
const useCartStore = create<CartState>()(
  persist(
    (set) => ({
      cart: [],

      // Thêm sản phẩm vào giỏ hàng
      addToCart: (book: Book) =>
        set((state) => {
          const existingItem = state.cart.find((b) => b.id === book.id);
          if (existingItem) {
            // Nếu sản phẩm đã có trong giỏ hàng, tăng quantity
            return {
              cart: state.cart.map((b) =>
                b.id === book.id ? { ...b, quantity: (b.quantity ?? 1) + 1 } : b
              ),
            };
          } else {
            // Nếu sản phẩm chưa có, thêm vào giỏ hàng
            return { cart: [...state.cart, { ...book, quantity: 1 }] };
          }
        }),

      // Xóa sản phẩm khỏi giỏ hàng
      removeFromCart: (id: number) =>
        set((state) => ({
          cart: state.cart.filter((b) => b.id !== id),
        })),

      updateQuantity: (id: number, quantity: number) =>
        set((state) => ({
          cart: state.cart
            .map((b) =>
              b.id === id ? { ...b, quantity: quantity } : b
            )
            .filter((b) => b.quantity && b.quantity > 0),
        })),

      // Xóa toàn bộ giỏ hàng
      clearCart: () => set({ cart: [] }),
    }),
    {
      name: "cart-storage", // Tên key trong localStorage
    }
  )
);

export default useCartStore;
