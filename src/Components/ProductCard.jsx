import Link from "next/link";
import React from "react";

const ProductCardSidha = ({ name, image, desc, path }) => {
  return (
    <>
      <div className="item-card flex gap-[10%]">
        <div className="images basis-[40%]">
          <img src={image} alt={name} />
        </div>
        <div className="info basis-[60%] flex items-center">
          <div className="hero-product-info p44t- flex flex-col gap-8">
            <h1>{name}</h1>
            <p className="text-gray-400 w-[27rem]">{desc}</p> 
            <Link href={`/${path}`}>
              <button>see product</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

const ProductCardUlta = ({ name, image, desc }) => {
  return (
    <>
      <div className="item-card flex gap-[10%]">
        <div className="info basis-[60%] flex items-center">
          <div className="hero-product-info p44t- flex flex-col gap-8">
            <h1>{name}</h1>
            <p className="text-gray-400 w-[27rem]">{desc}</p>
            <button>see product</button>
          </div>
        </div>
        <div className="images basis-[40%]">
          <img src={image} alt={name} />
        </div>
      </div>
    </>
  );
};

export { ProductCardSidha, ProductCardUlta };
