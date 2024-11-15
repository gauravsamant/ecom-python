import {
  FETCH_PRODUCTS_REQUEST,
  FETCH_PRODUCTS_SUCCESS,
  FETCH_PRODUCTS_FAILURE,
  SHOW_PRODUCTS_ADMIN
} from "./ProductTypes";

const initialState = {
  loading: false,
  products: [],
  error: "",
  showProducts: false
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PRODUCTS_REQUEST:
      return {
        ...state,
        loading: true
      };
    case FETCH_PRODUCTS_SUCCESS:
      return {
        ...state,
        loading: false,
        products: action.payload
      };
    case FETCH_PRODUCTS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload
      };
    case SHOW_PRODUCTS_ADMIN:
      return {
        ...state,
        showProducts: !state.showProducts
      };
    default:
      return state;
  }
};

export default productReducer;
