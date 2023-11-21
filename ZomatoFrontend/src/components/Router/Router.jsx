import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../homeComponents/Home";
import Details from "../DetailsPage/Details";
import Filters from "../FiltersPage/Filters";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/home" element={<Home />} />
        <Route path="/details/:id" element={<Details />} />
        <Route path="/filters/:city" element={<Filters />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
