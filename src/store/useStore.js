import { create } from 'zustand'

export const useStore = create((set) => ({
  user: null,
  cart: [],

  login: (userData) => set({ user: userData }),
  logout: () => set({ user: null }),

  addToCart: (product) =>
    set((state) => {
      const exists = state.cart.find((item) => item.id === product.id)
      if (exists) {
        return {
          cart: state.cart.map((item) =>
            item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
          ),
        }
      }
      return {
        cart: [...state.cart, { ...product, quantity: 1 }],
      }
    }),

  removeFromCart: (id) =>
    set((state) => ({
      cart: state.cart.filter((item) => item.id !== id),
    })),

  clearCart: () => set({ cart: [] }),
}))
