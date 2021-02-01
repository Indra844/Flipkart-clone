export const initialState = {
  user: null,
  basket: [],
  productinfo: [],
};
export const basketTotal = (basket) =>
  basket.reduce((amount, item) => item.price + amount, 0);

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_PRODUCTINFO":
      return {
        ...state,
        productinfo: action.info,
      };
    case "ADD_TO_BASKET":
      return {
        ...state,
        basket: [...state.basket, action.item],
      };
    case "REMOVE_FROM_BASKET":
      let newbasket = [...state.basket];
      const index = state.basket.findIndex(
        (basketItem) => basketItem.id === action.id
      );
      if (index >= 0) {
        newbasket.splice(index, 1);
      }
      return {
        ...state,
        basket: newbasket,
      };
    case "SET__USER":
      return {
        ...state,
        user: action.user,
      };
    default:
      return state;
  }
};
export default reducer;
