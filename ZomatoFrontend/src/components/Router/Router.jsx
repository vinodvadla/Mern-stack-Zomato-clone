import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../homeComponents/Home";
import Details from "../DetailsPage/Details";
import Filters from "../FiltersPage/Filters";
import Cancel from "../Cancel";
import Success from "./../Success";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/home" element={<Home />} />
        <Route path="/details/:id" element={<Details />} />
        <Route path="/filters/:city" element={<Filters />} />
        <Route path="/success" element={<Success />} />
        <Route path="/cancel" element={<Cancel />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
