import Category from "@/Components/Category";
import Navbar from "@/Components/Navbar";
import React from "react";

const page = () => {
  return (
    <>
      <div className="headphones h-[40vh] bg-[#191919] text-white mb-20">
        <h1 className="uppercase text-center pt-[20vh]">Headphones</h1>
      </div>
      <div className="wrapper">
        <div className="headphone-items flex flex-col gap-40">
          <div className="item-1 flex gap-[10%]">
            <div className="images basis-[40%]">
              <img
                src="https://audiophilewebsite.netlify.app/img/image-category-page-preview.b19275ff.jpg"
                alt=""
              />
            </div>
            <div className="info basis-[60%] flex items-center">
              <div className="hero-product-info p44t- flex flex-col gap-8">
                <h3 className="border-l-rose-50 tracking-[5px] text-[1.2rem] text-orange-400">
                  New product
                </h3>
                <h1>XX99 Mark II Headphones</h1>
                <p className="text-gray-400 w-[27rem]">
                  The new XX99 Mark II headphones is the pinnacle of pristine
                  audio. It redefines your premium headphone experience by
                  reproducing the balanced depth and precision of studio-quality
                  sound.
                </p>
                <button>see product</button>
              </div>
            </div>
          </div>
          <div className="item-2 flex gap-[10%]">
            <div className="info basis-[60%] flex items-center">
              <div className="hero-product-info p44t- flex flex-col gap-8">
                <h1>XX99 Mark II Headphones</h1>
                <p className="text-gray-400 w-[27rem]">
                Enjoy your audio almost anywhere and customize it to your specific tastes with the XX59 headphones. The stylish yet durable versatile wireless headset is a brilliant companion at home or on the move.
                </p>
                <button>see product</button>
              </div>
            </div>
            <div className="images basis-[40%]">
              <img
                src="https://audiophilewebsite.netlify.app/img/image-category-page-preview.8ce57b69.jpg"
                alt=""
              />
            </div>
          </div>
          <div className="item-3 flex gap-[10%]">
            <div className="images basis-[40%]">
              <img
                src="https://audiophilewebsite.netlify.app/img/image-category-page-preview.4761c4dc.jpg"
                alt=""
              />
            </div>
            <div className="info basis-[60%] flex items-center">
              <div className="hero-product-info p44t- flex flex-col gap-8">
                <h1>XX99 Mark I Headphones</h1>
                <p className="text-gray-400 w-[27rem]">
                As the gold standard for headphones, the classic XX99 Mark I offers detailed and accurate audio reproduction for audiophiles, mixing engineers, and music aficionados alike in studios and on the go.
                </p>
                <button>see product</button>
              </div>
            </div>
          </div>
        </div>
        <Category />
      </div>
    </>
  );
};

export default page;
