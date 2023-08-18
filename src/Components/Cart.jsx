"use client";
import React, { useEffect, useState } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useSelector } from "react-redux";

export default function Cart() {
  const [showModal, setShowModal] = useState(false);
  const [totalBill, setTotalBill] = useState(0);
  const cartData = useSelector((state) => state.cart);

  var total = 0;

  useEffect(() => {
    cartData.forEach((value) => {
      total += value.price;
      setTotalBill(total);
    });
  });

  return (
    <>
      <button
        className="bg-pink-500 text-white active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
        type="button"
        onClick={() => setShowModal(true)}
      >
        <AiOutlineShoppingCart />
      </button>
      {showModal ? (
        <>
          <div className="text-black justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className=" rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-2xl font-semibold">
                    Cart ({cartData.length})
                  </h3>
                  <div
                    className="cursor-pointer p-1 ml-auto bg-transparent border-0 text-black  float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="bg-transparent text-black h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </div>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto max-h-[50vh] overflow-auto">
                  {cartData.length > 0 ? (
                    <>
                      {cartData.map((value) => {
                        return (
                          <Card
                            name={value.name}
                            image={value.image}
                            price={value.price}
                          />
                        );
                      })}
                      <div className="flex justify-around mb-5 mt-5">
                        <h4 className="text-gray-700 ">Total:</h4>
                        <p className="font-bold">${totalBill}</p>
                      </div>
                      <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                        <button className="w-full">Checkout</button>
                      </div>
                    </>
                  ) : (
                    <>
                      <h2>No items yet</h2>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </>
      ) : null}
    </>
  );
}

const Card = ({ name, image, price }) => {
  return (
    <div className="flex justify-between items-center gap-10 mt-5">
      <div className="h-[15vh]">
        <img className="h-[100%]" src={image} alt="" />
      </div>
      <div className="flex flex-col">
        <h4 className="font-bold">{name}</h4>
        <p>$ {price}</p>
      </div>
    </div>
  );
};
