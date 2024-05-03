"use client";
import React, { useEffect } from "react";
import { useAppSelector, useAppDispatch } from "@/lib/redux/hooks";
import { getProducts } from "@/lib/redux/features/product/api";
import Product from "./SingleProduct";

const ListProducts = () => {
  const dispatch = useAppDispatch();

  const products = useAppSelector((state) => state.product.products);

  useEffect(() => {
    getProducts(dispatch);
  }, []);
  return (
    <div className=" flex gap-10 justify-center">
      {products.map((product) => (
        <Product key={product._id} product={product} />
      ))}
    </div>
  );
};

export default ListProducts;
