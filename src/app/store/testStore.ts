import { create } from "zustand";
import { persist } from "zustand/middleware";

// Định nghĩa kiểu dữ liệu cho store
interface CounterState {
  count: number;
  increase: () => void;
  decrease: () => void;
  reset: () => void;
}

// Tạo Zustand store với middleware persist để lưu vào localStorage
const useCounterStore = create<CounterState>()(
  persist(
    (set) => ({
      count: 0,
      increase: () => set((state) => ({ count: state.count + 1 })),
      decrease: () => set((state) => ({ count: state.count - 1 })),
      reset: () => set({ count: 0 }),
    }),
    {
      name: "counter-storage", // Tên key trong localStorage
    }
  )
);

export default useCounterStore;
