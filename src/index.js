import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

import {
  BrowserRouter
} from "react-router-dom";
import UserContextProvider from "./js/Context/userContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<UserContextProvider>
  <BrowserRouter><App></App></BrowserRouter>
</UserContextProvider>
);

