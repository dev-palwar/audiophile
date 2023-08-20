"use client";
import { useDispatch } from "react-redux";
import { addItem } from "@/Redux/CartSlice";

import React, { useEffect } from "react";

const ReduxStorage = () => {
  const dispatch = useDispatch();
  const dataaa = JSON.parse(localStorage.getItem("cart_data"));

  useEffect(() => {
    if (dataaa) {
      dataaa.map((value) => {
        dispatch(addItem(value));
      });
    }
  }, []);

  return <></>;
};

export default ReduxStorage;
