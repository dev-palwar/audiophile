import React from "react";
import Category from "@/Components/Category";
import { ProductCardSidha, ProductCardUlta } from "@/Components/ProductCard";
import speakersData from "./data/speakersData";

const page = () => {
  return (
    <>
      <div className="headphones h-[40vh] bg-[#191919] text-white mb-20">
        <h1 className="uppercase text-center pt-[20vh]">Speakers</h1>
      </div>
      <div className="wrapper">
        {speakersData.map((value)=>{
          return (
            <ProductCardSidha name={value.name} image={value.image} desc={value.desc} path={`speakers/${value.id}`}/>
          )
        })}
        <Category />
      </div>
    </>
  );
};

export default page;
