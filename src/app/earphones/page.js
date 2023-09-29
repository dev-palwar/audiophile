// 'use client'

import Category from "@/Components/Category";
import { ProductCard } from "@/Components/ProductCard";
import React from "react";
import earphonesData from "./data/earphonesData";

const Page = () => {
  return (
    <>
      <div className="headphones h-[40vh] bg-[#191919] text-white mb-20">
        <h1 className="uppercase text-center pt-[20vh]">earphones</h1>
      </div>
      <div className="wrapper">
        {earphonesData.map((value) => {
          return (
            <ProductCard
              key={value.id}
              name={value.name}
              image={value.image}
              desc={value.desc}
              path={`earphones/${value.id}`}
            />
          );
        })}
        <Category />
      </div>
    </>
  );
};

export default Page;
