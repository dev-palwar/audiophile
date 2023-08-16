import Image from "next/image";
import { BiRightArrow } from "react-icons/bi";

import React from "react";
import headphoneImg from "../assets/cart/image-xx99-mark-two-headphones.jpg";
import earphoneImg from "../assets/cart/image-yx1-earphones.jpg";
import speakerImg from "../assets/cart/image-zx7-speaker.jpg";

const Category = () => {
  return (
    <>
      <div className="wrapper">
        <div className="categories flex justify-evenly mt-[6rem] mb-[6rem]">
          <div className="card">
            <Image src={headphoneImg} />
            <h2>Headphones</h2>
            <div className="flex items-center gap-1">
              <p className="text-gray-400">Shop</p>
              <BiRightArrow className="text-gray-400" />
            </div>
          </div>
          <div className="card">
            <Image src={earphoneImg} />
            <h2>earphones</h2>
            <div className="flex items-center gap-1">
              <p className="text-gray-400">Shop</p>
              <BiRightArrow className="text-gray-400" />
            </div>
          </div>
          <div className="card">
            <Image src={speakerImg} />
            <h2>speakers</h2>
            <div className="flex items-center gap-1">
              <p className="text-gray-400">Shop</p>
              <BiRightArrow className="text-gray-400" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Category;
