import Category from "@/Components/Category";
import Navbar from "@/Components/Navbar";
import zx9 from "../assets/home/desktop/image-speaker-zx9.png";
import yx1 from "../assets/product-yx1-earphones/desktop/image-gallery-2.jpg";
import Image from "next/image";
import IoPort from "tailwind/dist/IoPort";
import About from "@/Components/About";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="hero-section h-screen text-white">
        <div className="wrapper">
          <div className="hero-product-info w-3/6 pt-44 flex flex-col gap-8">
            <h3 className="text-gray-400 border-l-rose-50 tracking-[1rem] text-[1.2rem] ">
              New product
            </h3>
            <h1>XX99 Mark II HeadphoneS</h1>
            <p className="text-gray-400 w-[27rem]">
              Experience natural, lifelike audio and exceptional build quality
              made for the passionate music enthusiast.{" "}
            </p>
            <button>see product</button>
          </div>
        </div>
      </div>
      <Category />
      <div className="featured-products wrapper">
        <div className="zx9-speaker flex px-8 overflow-hidden mb-12 pt-[5rem]">
          <Image src={zx9} className="mb-[-1rem]" />
          <div className="flex flex-col justify-center basis-[130%]">
            <div className="info w-[60%] m-auto flex flex-col gap-4">
              <h1 className="text-white">ZX9 SPEAKER</h1>
              <p className="text-white">
                Upgrade to premium speakers that are phenomenally built to
                deliver truly remarkable sound.{" "}
              </p>
              <button className="bg-black">see product</button>
            </div>
          </div>
        </div>
        <div className="zx7-speaker flex items-center">
          <div className="info p-5 flex flex-col gap-6">
            <h1 className="text-5xl font-normal">ZX7 SPEAKER</h1>
            <button className="button2">see product</button>
          </div>
        </div>
        <div className="yx1-earphone flex gap-10 mt-10 mb-10">
          <div className="image basis-[50%]">
            <Image src={yx1} className="rounded w-full" />
          </div>
          <div className="info flex flex-col justify-center gap-6 basis-[50%] bg-[#f1f1f1] rounded w-full">
            <h1 className="text-5xl font-normal mx-10">YX1 EARPHONES</h1>
            <button className="button2 mx-10">see product</button>
          </div>
        </div>
      </div>
    </>
  );
}
