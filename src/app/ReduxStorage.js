'use client'
import { useDispatch } from "react-redux";
import { addItem } from "@/Redux/CartSlice";
import React, { useEffect } from "react";

const ReduxStorage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const dataaaString = window.localStorage.getItem("cart_data");

    if (dataaaString) {
      const dataaa = JSON.parse(dataaaString);
      dataaa.forEach((value) => {
        dispatch(addItem(value));
      });
    }
  }, []);

  return <></>;
};

export default ReduxStorage;
