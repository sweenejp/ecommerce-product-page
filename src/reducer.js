import { ADD_TO_CART, REMOVE_FROM_CART, UPDATE_CART_TOTAL } from './actions';

export const reducer = (state, action) => {
  let newCart = [];
  switch (action.type) {
    case ADD_TO_CART:
      const { product, amount } = action.payload;
      let newAmount = amount;
      const tempItem = state.cart.find((item) => item.id === product.id);
      if (tempItem) {
        newAmount = tempItem.amount + newAmount;
      }
      const newItem = { ...product, amount: newAmount };
      newCart = state.cart.filter((item) => item.id !== product.id);
      return { ...state, cart: [...newCart, newItem] };
    case REMOVE_FROM_CART:
      const id = action.payload;
      newCart = state.cart.filter((item) => item.id !== id);
      return { ...state, cart: newCart };
    case UPDATE_CART_TOTAL:
      const totals = state.cart.reduce(
        (counter, item) => {
          counter.items += item.amount;
          counter.price += item.price * item.discount * item.amount;
          return counter;
        },
        { items: 0, price: 0 }
      );
      return {
        ...state,
        cartTotalItems: totals.items,
        cartTotalPrice: totals.price,
      };
    default:
      throw new Error(`No Matching "${action.type}" - action type`);
  }
};
