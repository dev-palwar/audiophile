'use client'
import React from "react";
import earphonesData from "../data/earphonesData";
const ProductDetails = ({params}) => {
  const data = earphonesData[params.productid - params.productid];

  return (
    <>
      <div className="h-[20vh]"></div>
      <div className="wrapper">
        <div className="item-card flex gap-[10%]">
          <div className="images basis-[55%]">
            <img
              src={data.image}
              alt={data.name}
            />
          </div>
          <div className="info basis-[60%] flex items-center">
            <div className="hero-product-info p44t- flex flex-col gap-8">
              <h1>{data.name}</h1>
              <p className="text-gray-400 w-[27rem]">
                {data.desc}
              </p>
              <h3 className="font-bold">$ 2,999</h3>
              <div className="buttons flex gap-5">
                <div className="counter flex w-[20%]">
                  <button className="bg-[#f1f1f1] text-black">-</button>
                  <h3 className="bg-[#f1f1f1] w-[50%] flex items-center justify-center">
                    1
                  </h3>
                  <button className="bg-[#f1f1f1] text-black">+</button>
                </div>
                <button>Add to cart</button>
              </div>
            </div>
          </div>
        </div>
        <div className="info flex gap-52 mt-20">
          <div className="features flex flex-col gap-8 basis-[50%]">
            <h2>Features</h2>
            <p className="text-gray-600">
              {data.features}
            </p>
          </div>
          <div className="in-the-box flex flex-col gap-8">
            <h2>In the box</h2>
            <ul className="list-disc text-gray-600">
              {data.inTheBox.map((value)=>{
                return (
                  <li>{value}</li>
                )
              })}
            </ul>
          </div>
        </div>
        <div className="images mt-20 flex justify-center gap-[3rem]">
          <div className="flex flex-col gap-8">
            <img
              src={data.images[0]}
              className="rounded"
            />
            <img
              src={data.images[1]}
              className="rounded"
            />
          </div>
          <div>
            <img
              src={data.images[2]}
              className="rounded"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetails;
