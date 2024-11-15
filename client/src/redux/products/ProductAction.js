import axios from "axios";
import {
  FETCH_PRODUCTS_REQUEST,
  FETCH_PRODUCTS_SUCCESS,
  FETCH_PRODUCTS_FAILURE,
  SHOW_PRODUCTS_ADMIN
} from "./ProductTypes";

export const fetchPrductsRequest = () => {
  return {
    type: FETCH_PRODUCTS_REQUEST
  };
};

export const fetchProductsSuccess = (products) => {
  return {
    type: FETCH_PRODUCTS_SUCCESS,
    payload: products
  };
};

export const fetchProductsError = (error) => {
  return {
    type: FETCH_PRODUCTS_FAILURE,
    payload: error
  };
};

export const showProductsAdmin = () => {
  return { type: SHOW_PRODUCTS_ADMIN };
};

export const fetchProducts = () => {
  return (dispatch) => {
    dispatch(fetchPrductsRequest);
    axios
      .get("http://localhost:8000/api/v1/products/allproducts")
      .then((response) => {
        const products = response.data.products;
        console.log("products", products);
        dispatch(fetchProductsSuccess(products));
      })
      .catch((error) => {
        const errorMsg = error.message;
        dispatch(fetchProductsError(errorMsg));
      });
  };
};
