

import React from "react";
import { Link } from "react-router-dom";
import { products as ProductPage } from "./ProductPage.jsx"; // your product array

function ProductCard({ img, title, price, oldPrice, discount }) {
  return (
    <div className="bg-white rounded-lg p-3 shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer">
      <img
        src={img}
        alt={title}
        className="w-full h-90 object-cover rounded-md hover:scale-105 transform transition-transform duration-300"
      />
      <h4 className="text-sm font-medium mt-3">{title}</h4>
      <div className="text-sm mt-1 flex gap-2 items-center">
        <span className="font-semibold">{price}</span>
        <span className="line-through text-gray-400">{oldPrice}</span>
        <span className="text-red-500 font-semibold">{discount}</span>
      </div>
    </div>
  );
}

export default function Kurta() {
  return (
    <main className="relative min-h-screen bg-sky-200">
      <div className="bg-white/70 h-full w-full backdrop-blur-md rounded-2xl p-10 shadow-lg">
        <h1
          className="text-4xl font-serif text-slate-900 mt-10 mb-10"
          style={{ letterSpacing: "0.18em" }}
        >
          Kurti and Kurta Sets
        </h1>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 gap-8">
          {ProductPage.map((item) => (
            <Link key={item.id} to={`/kurtis/${item.id}`}>
              <ProductCard
                img={item.img}
                title={item.title}
                price={item.price}
                oldPrice={item.oldPrice}
                discount={item.discount}
              />
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}

