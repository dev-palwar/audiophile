import Image from "next/image";
import aboutImg from "../assets/shared/desktop/image-best-gear.jpg";
import React from "react";

const About = () => {
  return (
    <>
      <div className="wrapper">
        <div className="about flex gap-[10%] mb-[10%]">
          <div className="info basis-[50%] flex flex-col gap-10 justify-center">
            <h1 className="uppercase">Bringing you the <span className="text-orange-400">best</span> audio gear </h1>
            <p className="opacity-[0.7]">
            Located at the heart of New York City, Audiophile is the premier store for high end headphones, earphones, speakers, and audio accessories. We have a large showroom and luxury demonstration rooms available for you to browse and experience a wide range of our products. Stop by our store to meet some of the fantastic people who make Audiophile the best place to buy your portable audio equipment. 
            </p>
          </div>
          <div className="image">
            <Image src={aboutImg} className="rounded"/>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
