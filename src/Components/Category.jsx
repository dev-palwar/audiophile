import React from "react";
import Image from "next/image";
import { BiRightArrow } from "react-icons/bi";
import Link from "next/link";

import headphoneImg from "../assets/cart/image-xx99-mark-two-headphones.jpg";
import earphoneImg from "../assets/cart/image-yx1-earphones.jpg";
import speakerImg from "../assets/cart/image-zx7-speaker.jpg";

const Category = () => {
  return (
    <div className="wrapper">
      <div className="categories flex justify-evenly mt-6rem mb-6rem mx-[-20px]">
        <div className="card">
          <Image
            alt="Headphones"
            src={headphoneImg}
            width={"50%"}
            height={"50%"}
          />
          <h2>Headphones</h2>
          <Link href="/headphones" className="flex items-center gap-1">
            <p className="text-gray-400">Shop</p>
            <BiRightArrow className="text-gray-400" />
          </Link>
        </div>
        <div className="card">
          <Image
            alt="Earphones"
            src={earphoneImg}
            width={"50%"}
            height={"50%"}
          />
          {/* <Image alt="Earphones" src={earphoneImg} width={500} height={500} /> */}
          <h2>Earphones</h2>
          <Link href="/earphones" className="flex items-center gap-1">
            <p className="text-gray-400">Shop</p>
            <BiRightArrow className="text-gray-400" />
          </Link>
        </div>
        <div className="card">
          <Image
            alt="Speakers"
            src={speakerImg}
            width={"50%"}
            height={"50%"}
          />
          {/* <Image alt="Speakers" src={speakerImg} width={500} height={500} /> */}
          <h2>Speakers</h2>
          <Link href="/speakers" className="flex items-center gap-1">
            <p className="text-gray-400">Shop</p>
            <BiRightArrow className="text-gray-400" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Category;
