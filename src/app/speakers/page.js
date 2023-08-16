import Category from "@/Components/Category";
import React from "react";

const page = () => {
  return (
    <>
      <div className="headphones h-[40vh] bg-[#191919] text-white mb-20">
        <h1 className="uppercase text-center pt-[20vh]">Speakers</h1>
      </div>
      <div className="wrapper">
      <div className="headphone-items flex flex-col gap-40">
          <div className="item-1 flex gap-[10%]">
            <div className="images basis-[40%]">
              <img
                src="https://audiophilewebsite.netlify.app/img/image-category-page-preview.b8438b07.jpg"
                alt=""
              />
            </div>
            <div className="info basis-[60%] flex items-center">
              <div className="hero-product-info p44t- flex flex-col gap-8">
                <h3 className="border-l-rose-50 tracking-[5px] text-[1.2rem] text-orange-400">
                  New product
                </h3>
                <h1>ZX9 Speaker</h1>
                <p className="text-gray-400 w-[27rem]">
                Upgrade your sound system with the all new ZX9 active speaker. It’s a bookshelf speaker system that offers truly wireless connectivity -- creating new possibilities for more pleasing and practical audio setups.
                </p>
                <button>see product</button>
              </div>
            </div>
          </div>
          <div className="item-2 flex gap-[10%]">
            <div className="info basis-[60%] flex items-center">
              <div className="hero-product-info p44t- flex flex-col gap-8">
                <h1>ZX7 Speaker</h1>
                <p className="text-gray-400 w-[27rem]">
                Stream high quality sound wirelessly with minimal to no loss. The ZX7 speaker uses high-end audiophile components that represents the top of the line powered speakers for home or studio use.  
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
        </div>
        <Category />
      </div>
    </>
  );
};

export default page;
