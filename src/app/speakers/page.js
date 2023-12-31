import React from "react";
import Category from "@/Components/Category";
import { ProductCard } from "@/Components/ProductCard";
import speakersData from "./data/speakersData";

const Page = () => {
  return (
    <>
      <div className="headphones h-[40vh] bg-[#191919] text-white mb-20">
        <h1 className="uppercase text-center pt-[20vh]">Speakers</h1>
      </div>
      <div className="wrapper">
        {speakersData.map((value) => {
          return (
            <ProductCard
              key={value.id}
              name={value.name}
              image={value.image}
              desc={value.desc}
              path={`speakers/${value.id}`}
            />
          );
        })}
        <Category />
      </div>
    </>
  );
};

export default Page;
