import React from "react";
import headphoneData from "../data/headphoneData";
import Product from "@/Components/Product";

const ProductDetails = ({ params }) => {
  const data = headphoneData[params.productid - 3];

  return (
    <>
      <Product data={data} />
    </>
  );
};

export default ProductDetails;
