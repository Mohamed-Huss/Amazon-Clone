export const initialState = {
  basket: JSON.parse(localStorage.getItem('basket')) || [],
  user: null,
  searchQuery: ""
};

// Selector
export const getBasketTotal = (basket) =>
  basket?.reduce((amount, item) => item.price + amount, 0);

// const x = { y: [1, 2, 3] };
// const z = { ...x, y: [...x.y, 1] };
// console.log(z);
const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_Basket":
      // console.log(state);
      const newBasket = [...state.basket, action.item];
      localStorage.setItem('basket', JSON.stringify(newBasket));
      return { ...state, basket: [...state.basket, action.item] };

    case "REMOVE_FROM_BASKET":
      const index = state.basket.findIndex(
        (basketItem) => basketItem.id === action.id
      );
      let updatedBasket = [...state.basket];
      if (index >= 0) {
        updatedBasket.splice(index, 1);
      } else {
        console.warn(
          `Cant remove product (id: ${action.id}) as its not in basket!`
        );
      }
      localStorage.setItem('basket', JSON.stringify(updatedBasket));
      return {
        ...state,
        basket: updatedBasket,
      };

    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };

    case "EMPTY_BASKET":
      localStorage.setItem('basket', JSON.stringify([]));
      return {
        ...state,
        basket: [],
      };

    case "SET_SEARCH_QUERY":
      return { ...state, searchQuery: action.payload };
    default:
      return state;
  }
};

export default reducer;
