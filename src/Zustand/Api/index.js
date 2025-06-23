
import { create } from "zustand";
import { baseUrl } from "../../BaseUrl";

// Store for general products
export const getProducts = create((set) => ({
    Products: [], 
    isLoading: false,
    error: null,

    fetchProductData: async () => {
        set({ isLoading: true });
        try {
            const response = await fetch(`${baseUrl}/products`);
            const data = await response.json();
            set({ Products: data });
        } catch (error) {
            set({ error: error.message });
        } finally {
            set({ isLoading: false });
        }
    },
}));

// Store for handmade table
export const Handmade = create((set) => ({
    handmadetable: {}, 
    isLoading: false,
    error: null,

    fetchhandmadeData: async () => {
        set({ isLoading: true });
        try {
            const response = await fetch(`${baseUrl}/products/slug/handmade-fresh-table`);
            const data = await response.json();
            set({ handmadetable: data });
        } catch (error) {
            set({ error: error.message });
        } finally {
            set({ isLoading: false });
        }
    },
}));

//Catergories

export const GetCategories = create((set) => ({
  allCategories: [], 
  isLoading: false,
  error: null,

  fetchCategorieData: async () => {
    set({ isLoading: true, error: null });
    try {
      const response = await fetch(`${baseUrl}/categories`);
      const data = await response.json();
      set({ allCategories: data });
    } catch (error) {
      set({ error: error.message });
    } finally {
      set({ isLoading: false });
    }
  },
}));

