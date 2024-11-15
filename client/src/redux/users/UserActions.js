import axios from "axios";
import {
  FETCH_ALL_USERS,
  FETCH_ALL_USERS_SUCCESS,
  FETCH_ALL_USER_FAILURE
} from "./UserTypes";

export const fetchAllUser = () => {
  return {
    type: FETCH_ALL_USERS
  };
};

export const fetchAllUserSuccess = (users) => {
  return {
    type: FETCH_ALL_USERS_SUCCESS,
    payload: users
  };
};

export const fetchAllUserFailure = (error) => {
  return {
    type: FETCH_ALL_USER_FAILURE,
    payload: error
  };
};

export const fetchProducts = () => {
  return (dispatch) => {
    dispatch(fetchAllUser);
    axios
      .get("http://localhost:8000/api/v1/users/allusers")
      .then((response) => {
        const users = response.data.users;
        console.log("users", users);
        dispatch(fetchAllUserSuccess(users));
      })
      .catch((error) => {
        const errorMsg = error.message;
        dispatch(fetchAllUserFailure(errorMsg));
      });
  };
};
