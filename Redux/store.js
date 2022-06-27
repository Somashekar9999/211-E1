// TODO: use this store variable to create a store.


// NOTE: Do not remove this code,its used for calculating your score, if removed it will give you zero marks
if (window.Cypress) {
  window.store = store;
}






import {
  applyMiddleware,
  combineReducers,
  legacy_createStore as createStore,
} from "redux";
import { cartReducer } from "./AddToCart/cartReducer";
import { productsReducer } from "./Products/reducer";

const rootReducer = combineReducers({
  cart: cartReducer,
  products: productsReducer,
});

const loggerMiddleware = (store) => (next) => (action) => {
  next(action);
};

export const store = createStore(
  rootReducer,
  applyMiddleware(loggerMiddleware)
);

// store.subscribe(() => {
// console.log(store.getState())
// })
