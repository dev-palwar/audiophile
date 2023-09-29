import Link from "next/link";
import React from "react";
import { BsTwitter, BsInstagram, BsFacebook } from "react-icons/bs";

const Footer = () => {
  return (
    <footer className="bg-[#000] text-white">
      <div className="wrapper flex flex-col gap-20 pb-10">
        <div className="flex pt-10 justify-between">
          <div className="description flex flex-col gap-[2rem] basis-[50%]">
            <h2 className="text-[35px]">audiophile</h2>
            <p className="text-gray-400">
              Audiophile is an all-in-one stop to fulfill your audio needs. We're a small team of music lovers and sound specialists who are devoted to helping you get the most out of personal audio. Come and visit our demo facility - we’re open 7 days a week.
            </p>
          </div>
          <div className="navigation uppercase flex gap-5">
            <Link href='/'>
              <h3 className="link">home</h3>
            </Link>
            <Link href="/speakers">
              <h3 className="link">Speakers</h3>
            </Link>
            <Link href="/headphones">
              <h3 className="link">Headphones</h3>
            </Link>
            <Link href="/earphones">
              <h3 className="link">Earphones</h3>
            </Link>
          </div>
        </div>
        <div className="copyright flex justify-between">
          <p className="text-gray-400">Copyright 2021. All Rights Reserved.</p>
          <div className="icons flex gap-5 text-2xl transition-[all 0.3s]">
            <BsTwitter className="hover:text-blue-400 cursor-pointer" /> 
            <BsInstagram className="hover:text-red-400 cursor-pointer" /> 
            <BsFacebook className="hover:text-blue-400 cursor-pointer" /> 
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
