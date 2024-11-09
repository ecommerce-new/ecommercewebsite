import { createSlice } from "@reduxjs/toolkit";
import allProductData from "../products/AllProducts";

const initialState = {
  cart: [],
  item: allProductData,
  withOutDiscountPrice: 0,
  totalQuantity: 0,
  totalPrice: 0,
  anotherCart: [],
  hideLoginForm: true,
  removeActiveClass: false,
  activeButton: 'signUp', 
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addTocart: (state, action) => {
      const combinedCarts = [...state.cart, ...state.anotherCart];
      const find = combinedCarts.findIndex((item) => item.id === action.payload.id);

      if (find >= 0) {
        state.cart[find].quantity += 1;
        state.anotherCart[find].quantity += 1;
      } else {
        state.cart.push(action.payload);
        state.anotherCart.push(action.payload);
      }
    },
    getCartTotal: (state) => {
      const { mainPrice, totalQuantity, totalPrice } = state.cart.reduce(
        (cartTotal, cartItem) => {
          const { discount_price1, discount_price2, quantity } = cartItem;
          const itemTotal = parseInt(discount_price2) * quantity;
          const notDiscountPrice = parseInt(discount_price1) * quantity;
          cartTotal.totalPrice += itemTotal;
          cartTotal.totalQuantity += quantity;
          cartTotal.mainPrice += notDiscountPrice;
          return cartTotal;
        },
        { mainPrice: 0, totalQuantity: 0, totalPrice: 0 }
      );
      state.totalQuantity = totalQuantity;
      state.withOutDiscountPrice = mainPrice;
      state.totalPrice = parseInt(totalPrice.toFixed(2));
    },
    removeItem: (state, action) => {
      const filterItem = state.cart.filter((items) => items.id !== action.payload);
      state.cart = filterItem;
    },
    increaseItemQuantity: (state, action) => {
      state.cart = state.cart.map((item) => {
        if (item.id === action.payload) {
          return { ...item, quantity: item.quantity + 1 };
        }
        return item;
      });
    },
    decreaseItemQuantity: (state, action) => {
      state.cart = state.cart.map((item) => {
        if (item.id === action.payload) {
          return { ...item, quantity: item.quantity > 0 ? item.quantity - 1 : 0 };
        }
        return item;
      });
    },
    showHide_LoginForm: (state, action) => {
      state.hideLoginForm = action.payload;
    },
    removeClassActive: (state, action) => {
      state.removeActiveClass = action.payload;
    },
    updateActiveButton: (state, action) => {
      state.activeButton = action.payload;
    }
  }
});

export default cartSlice.reducer;
export const {
  addTocart,
  removeItem,
  increaseItemQuantity,
  decreaseItemQuantity,
  getCartTotal,
  showHide_LoginForm,
  removeClassActive,
  updateActiveButton // Export the new action
} = cartSlice.actions;



