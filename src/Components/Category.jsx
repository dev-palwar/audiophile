import Image from "next/image";
import { BiRightArrow } from "react-icons/bi";

import React from "react";
import headphoneImg from "../assets/cart/image-xx99-mark-two-headphones.jpg";
import earphoneImg from "../assets/cart/image-yx1-earphones.jpg";
import speakerImg from "../assets/cart/image-zx7-speaker.jpg";
import Link from "next/link";

const Category = () => {
  return (
    <>
      <div className="wrapper">
        <div className="categories flex justify-evenly mt-[6rem] mb-[6rem] mx-[-20px]">
          <div className="card">
            <Image alt="" src={headphoneImg} />
            <h2>Headphones</h2>
            <Link href="/headphones" className="flex items-center gap-1">
              <p className="text-gray-400">Shop</p>
              <BiRightArrow className="text-gray-400" />
            </Link>
          </div>
          <div className="card">
            <Image alt="" src={earphoneImg} />
            <h2>earphones</h2>
            <Link href="/earphones" className="flex items-center gap-1">
              <p className="text-gray-400">Shop</p>
              <BiRightArrow className="text-gray-400" />
            </Link>
          </div>
          <div className="card">
            <Image alt="" src={speakerImg} />
            <h2>speakers</h2>
            <Link href="/speakers" className="flex items-center gap-1">
              <p className="text-gray-400">Shop</p>
              <BiRightArrow className="text-gray-400" />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Category;
