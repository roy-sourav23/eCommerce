import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/home/Home";
import CategoryWiseProducts from "../pages/products/CategoryWiseProducts";
import ProductCard from "../components/products/ProductCard";
import AllProducts from "../pages/products/AllProducts";
import TestPage from "../pages/test/TestPage";
import WishList from "../pages/wishList/WishList";
import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";
import ProtectedRouting from "./ProtectedRouting";
import SingleProductPage from "../pages/products/SingleProductPage";

const Routing = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/:categoryName" element={<CategoryWiseProducts />}></Route>
        <Route path="/products" element={<AllProducts />} />
        <Route path="/products/:prodId" element={<SingleProductPage />} />
        <Route element={<ProtectedRouting />}>
          <Route path="/wishlist" element={<WishList />}></Route>
        </Route>
        <Route path="/test" element={<TestPage />}></Route>
        <Route path="/accounts">
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Register />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Routing;
