import React from "react";
import speakersData from "../data/speakersData";
import Product from "@/Components/Product";

const ProductDetails = ({ params }) => {
  const data = speakersData[params.productid - 1];

  return (
    <>
      <Product data={data} />
    </>
  );
};

export default ProductDetails;
