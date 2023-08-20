import React from "react";
import earphonesData from "../data/earphonesData";
import Product from "@/Components/Product";

const ProductDetails = ({ params }) => {
  const data = earphonesData[params.productid - params.productid];

  return (
    <>
      <Product data={data} type='earphones'/>
    </>
  );
};

export default ProductDetails;
