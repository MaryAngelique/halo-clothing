import React from "react";
import { render } from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

import { UserProvider } from "../src/context/user.context";
import { ProductsProvider } from "../src/context/product.content.jsx";

const rootElement = document.getElementById("root");

render(
  <React.StrictMode>
   <BrowserRouter>
      <UserProvider>
        <ProductsProvider>
          <App />
        </ProductsProvider>
      </UserProvider>
    </BrowserRouter>
  </React.StrictMode>,
  rootElement
);