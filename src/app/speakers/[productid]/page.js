"use client";
import React, { useEffect, useState } from "react";
import speakersData from "../data/speakersData";
import { addItem, removeItem } from "@/Redux/CartSlice";
import { useDispatch, useSelector } from "react-redux";

const ProductDetails = ({ params }) => {
  const data = speakersData[params.productid - 1];
  const [quantity, setQuantity] = useState(1);
  const cartData = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const minus = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  };
  const plus = () => {
    setQuantity(quantity + 1);
  };

  const handler = (product) => {
    if (cartData.some((value) => value.id === product.id)) {
      dispatch(removeItem(product.id));
    } else {
      dispatch(addItem(product));
    }
  };

  useEffect(() => {
    if (cartData.length > 0) {
      const cartItem = cartData.find((value) => value.id === data.id);
      if (cartItem) {
        setQuantity(cartItem.quantity);
      }
    }
  }, [cartData, data.id, quantity, data]);

  return (
    <>
      <div className="h-[20vh]"></div>
      <div className="wrapper">
        <div className="item-card flex gap-[10%]">
          <div className="images basis-[55%]">
            <img src={data.image} alt={data.name} />
          </div>
          <div className="info basis-[60%] flex items-center">
            <div className="hero-product-info p44t- flex flex-col gap-8">
              <h1>{data.name}</h1>
              <p className="text-gray-400 w-[27rem]">{data.desc}</p>
              <h3 className="font-bold">$ 2,999</h3>
              <div className="buttons flex gap-5">
                <div className="counter flex w-[20%]">
                  <button className="bg-[#f1f1f1] text-black" onClick={minus}>
                    -
                  </button>
                  <h3 className="bg-[#f1f1f1] w-[50%] flex items-center justify-center">
                    {quantity}
                  </h3>
                  <button className="bg-[#f1f1f1] text-black" onClick={plus}>
                    +
                  </button>
                </div>
                <button
                  onClick={() => {
                    handler({
                      id: data.id,
                      name: data.name,
                      image: data.image,
                      quantity: quantity,
                      price: data.price * quantity,
                    });
                  }}
                >
                  {cartData.some((value) => value.id === data.id) === true ? (
                    <>Added to cart</>
                  ) : (
                    <>Add to cart</>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="info flex gap-52 mt-20">
          <div className="features flex flex-col gap-8 basis-[50%]">
            <h2>Features</h2>
            <p className="text-gray-600">{data.features}</p>
          </div>
          <div className="in-the-box flex flex-col gap-8">
            <h2>In the box</h2>
            <ul className="list-disc text-gray-600">
              {data.inTheBox.map((value) => {
                return <li>{value}</li>;
              })}
            </ul>
          </div>
        </div>
        <div className="images mt-20 flex justify-center gap-[3rem]">
          <div className="flex flex-col gap-8">
            <img src={data.images[0]} className="rounded" />
            <img src={data.images[1]} className="rounded" />
          </div>
          <div>
            <img src={data.images[2]} className="rounded" />
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetails;
