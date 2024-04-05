import { create } from 'zustand';

export const useCartStore = create((set) => ({
  shoppingCart: JSON.parse(localStorage.getItem('shoppingCart')) || [],

  addProduct: (product) => {
    set((state) => {
      const updatedCart = [];
      let productExists = false;

      for (let i = 0; i < state.shoppingCart.length; i++) {
        const item = state.shoppingCart[i];
        if (item.id === product.id) {
          updatedCart.push({ ...item, quantity: item.quantity + 1 });
          productExists = true;
        } else {
          updatedCart.push(item);
        }
      }

      if (!productExists) {
        updatedCart.push({ ...product, quantity: 1 });
      }

      localStorage.setItem('shoppingCart', JSON.stringify(updatedCart));
      return { shoppingCart: updatedCart };
    });
  },

  removeProduct: (product) => {
    set((state) => {
      const updatedCart = [];

      for (let i = 0; i < state.shoppingCart.length; i++) {
        const item = state.shoppingCart[i];
        if (item.id === product.id) {
          if (item.quantity > 1) {
            updatedCart.push({ ...item, quantity: item.quantity - 1 });
          }
        } else {
          updatedCart.push(item);
        }
      }

      localStorage.setItem('shoppingCart', JSON.stringify(updatedCart));
      return { shoppingCart: updatedCart };
    });
  },

  emptyCart: () => {
    set((state) => {
      const updatedCart = [];
      localStorage.setItem('shoppingCart', JSON.stringify(updatedCart));
      return { shoppingCart: updatedCart };
    });
  },
}));
