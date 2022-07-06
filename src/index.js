import React from "react";
import { render } from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";

import { CategoriesProvider } from "../src/context/categories.context";
import { CartProvider } from "./context/cart.context";
import { store } from "../src/store/store";

const rootElement = document.getElementById("root");

render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
          <CategoriesProvider>
            <CartProvider>
              <App />
            </CartProvider>
          </CategoriesProvider>
        </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  rootElement
);