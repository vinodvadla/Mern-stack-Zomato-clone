import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { UserContextProvider } from "./context/UserContext.jsx";
import { CityContextProvider } from "./context/cityContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <GoogleOAuthProvider clientId="202124445144-kghthl6r0u2vn049ejtm3titpq5o0cfk.apps.googleusercontent.com">
    <CityContextProvider>
      <UserContextProvider>
        <App />
      </UserContextProvider>
    </CityContextProvider>
  </GoogleOAuthProvider>
);
