import { combineReducers } from "redux";

import productReducer from "./products/ProductReducer";

const rootReducer = combineReducers({
  product: productReducer
});

console.log(rootReducer);

export default rootReducer;
