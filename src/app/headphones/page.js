import Category from "@/Components/Category";
import { ProductCard } from "@/Components/ProductCard";
import headphoneData from "@/app/headphones/data/headphoneData";
import React from "react";

const page = () => {
  return (
    <>
      <div className="headphones h-[40vh] bg-[#191919] text-white mb-20">
        <h1 className="uppercase text-center pt-[20vh]">Headphones</h1>
      </div>
      <div className="wrapper">
        <div>
          {headphoneData.map((value)=>{
            return(
              <ProductCard key={value.id} name={value.name} image={value.image} desc={value.desc} path={`headphones/${value.id}`}/>
            )
          })}
        </div>
        <Category />
      </div>
    </>
  );
};

export default page;
