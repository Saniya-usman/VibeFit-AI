// import React from 'react'

// const Men = () => {
//   return (
//     <div>
//         <h1 className=' absolute top-1/2 left-1/2 text-4xl underline text-teal-800'>Women page</h1>
        
//     </div>
//   )
// }

// export default Men
import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import kurtas from "../assets/kurta.png"
import kurtasImg from "../assets/kurta.png"
import sareeImg from "../assets/saree.png"
import dressImg from "../assets/dress.png"
import topImg from "../assets/top.png"
import jeansImg from "../assets/pant.png"



const categories = [
  { id: 1, title: "Kurtas", img: "/src/assets/kurta.png" },
  { id: 2, title: "Saree", img: "/src/assets/saree.png" },
  { id: 3, title: "Dress", img: "/src/assets/dress.png" },
  { id: 4, title: "Tops", img: "/src/assets/top.png" },
  { id: 5, title: "Jeans", img: "/src/assets/pant.png" },
  
]

const trendingIndian = [
  { id: 1, img: "https://i.pinimg.com/736x/61/51/ea/6151ea4b19bc0f7512d10182d1a83561.jpg" },
  { id: 2, img: "https://i.pinimg.com/736x/83/ce/94/83ce94d979decfbcbff7814c9e5fedfb.jpg", alt: "indian-2" },
  { id: 3, img: "https://i.pinimg.com/1200x/e6/20/72/e620729108c072fddbcae017f23ff4bc.jpg", alt: "indian-3" },
  { id: 4, img: "https://i.pinimg.com/736x/f5/bc/b4/f5bcb49fc4cf99c9d7b6a0a20b4e53be.jpg", alt: "indian-4" },
  { id: 5, img: "https://i.pinimg.com/736x/ec/f4/7a/ecf47a845c12bafbdabf74ec8229eb6d.jpg", alt: "indian-5" },
]

const trendingAccessories = [
  { id: 1, img: "https://i.pinimg.com/1200x/7c/2c/c2/7c2cc2d46f49b1b536c69b7b42c69539.jpg", alt: "acc-1" },
  { id: 2, img: "https://i.pinimg.com/1200x/cb/3b/3d/cb3b3d81a17b2399194c38fa82af7ca7.jpg", alt: "acc-2" },
  { id: 3, img: "https://i.pinimg.com/736x/5c/4d/84/5c4d848fcc2b7e062bf6da45b9daad47.jpg", alt: "acc-3" },
  { id: 4, img: "https://i.pinimg.com/1200x/72/b8/83/72b883f2263b7997168a775c1860cbde.jpg", alt: "acc-4" },
  { id: 5, img: "https://i.pinimg.com/736x/4d/44/cf/4d44cfc2c6b3a49c3364fffea2685ddd.jpg", alt: "acc-5" },
]

function CategoryCard({ title, img }) {
  const pathMap = {
    'Kurtas': 'kurtis',
    'Saree': 'sarees',
    'Dress': 'dresses',
    'Tops': 'tops',
    'Jeans': 'jeans'
  };
  return (
    <Link
      to={`/${pathMap[title] || title.toLowerCase()}`}
      className=" shrink-0 w-40 flex flex-col gap-4 items-center  text-center group"
      aria-label={title}
    >
      <div className="card-hover">
        <div className="card-border">
          <div className="card-inner w-60 h-70 bg-white pt-5 pl-5 items-center justify-center rounded-lg shadow-md flex flex-col gap-4">
            <div className="w-48 h-48 rounded-full border-2 border-sky-300 overflow-hidden flex items-center justify-center bg-sky-50">
              <img
                src={img}
                alt={title}
                className=" w-35 h-full transform transition-transform bg-cover  duration-300 "
                onError={(e) => {
                  e.currentTarget.src = "https://via.placeholder.com/200?text=No+Image"
                }}
              />
            </div>
            <span className="text-xl font-bold text-slate-800">{title}</span>
          </div>
        </div>
      </div>
    </Link>
  )
}

function TrendCard({ img, alt }) {
  return (
    <div className=" w-full h-80 object-cover rounded-xl bg-white p-3 shadow-md hover:shadow-2xl transition-shadow bg-cover flex items-center justify-center">
      <img
        src={img}
        alt={alt}
        className="w-50 h-70 object-cover  rounded-md hover:scale-105 transform transition-transform duration-300"
        onError={(e) => {
          e.currentTarget.src = "https://via.placeholder.com/300x400?text=No+Image"
        }}
      />
    </div>
  )
}

export default function Women() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <>
      <style>
        {`
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
          }
          @keyframes slideInLeft {
            from { opacity: 0; transform: translateX(-50px); }
            to { opacity: 1; transform: translateX(0); }
          }
          @keyframes slideInRight {
            from { opacity: 0; transform: translateX(50px); }
            to { opacity: 1; transform: translateX(0); }
          }
          @keyframes slideInUp {
            from { opacity: 0; transform: translateY(50px); }
            to { opacity: 1; transform: translateY(0); }
          }
          @keyframes float {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-10px); }
          }
          .animate-fade-in {
            animation: fadeIn 1s ease-out forwards;
          }
          .animate-slide-in-left {
            animation: slideInLeft 1.2s ease-out forwards;
          }
          .animate-slide-in-right {
            animation: slideInRight 1.2s ease-out forwards;
          }
          .animate-slide-in-up {
            animation: slideInUp 1s ease-out 0.5s forwards;
            opacity: 0;
          }
          .animate-float {
            animation: float 3s ease-in-out infinite;
          }
          .card-hover {
            transition: all 0.3s ease;
            position: relative;
          }
          .card-hover:hover {
            transform: scale(1.05) translateY(-5px);
            box-shadow: 0 15px 30px rgba(0,0,0,0.2);
          }
          @keyframes cyan-border {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }
          .card-border {
            background: linear-gradient(45deg, #00ffff, #ffffff, #00ffff, #ffffff);
            background-size: 400% 400%;
            animation: cyan-border 2s ease infinite;
            border-radius: 12px;
            padding: 2px;
            opacity: 1;
          }
          .card-inner {
            background: white;
            border-radius: 10px;
          }
        `}
      </style>
      <main className={`relative min-h-screen bg-sky-200 ${isVisible ? 'animate-fade-in' : ''}`}>
        <div className="">
          {/* Rounded outer panel */}
          <div className={`rounded-2xl bg-white/60 p-8 h-full w-full shadow-lg ${isVisible ? 'animate-slide-in-up' : ''}`}>
            {/* Title */}
            <h2
              className={`text-3xl font-serif text-slate-900 mt-12 mb-2 ${isVisible ? 'animate-slide-in-left' : ''}`}
              style={{ letterSpacing: "0.35em" }}
            >
              Categories To Bag
            </h2>

            {/* Categories */}
            <div className={`grid grid-cols-2 sm:grid-cols-5 gap-6 items-start mb-12 ${isVisible ? 'animate-slide-in-right' : ''}`}>
              {categories.map((c, index) => (
                <div key={c.id} className="flex justify-center" style={{ animationDelay: `${index * 0.1}s` }}>
                  <CategoryCard title={c.title} img={c.img} />
                </div>
              ))}
            </div>

            {/* Trending In Indian Wear */}
            <section className={`mb-10 ${isVisible ? 'animate-slide-in-left' : ''}`}>
              <h3
                className="text-2xl font-serif text-slate-900 mb-3"
                style={{ letterSpacing: "0.18em" }}
              >
                Trending In Indian Wear
              </h3>

              <div className="grid grid-cols-2 sm:grid-cols-5 gap-6">
                {trendingIndian.map((t, index) => (
                  <div key={t.id} style={{ animationDelay: `${index * 0.1}s` }}>
                    <TrendCard img={t.img} alt={t.alt} />
                  </div>
                ))}
              </div>
            </section>

            {/* Trending In Accessories */}
            <section className={`${isVisible ? 'animate-slide-in-right' : ''}`}>
              <h3
                className="text-2xl md:text-3xl font-serif text-slate-900 mb-6"
                style={{ letterSpacing: "0.18em" }}
              >
                Trending In Accessories
              </h3>

              <div className="grid grid-cols-2 sm:grid-cols-5 gap-6">
                {trendingAccessories.map((t, index) => (
                  <div key={t.id} style={{ animationDelay: `${index * 0.1}s` }}>
                    <TrendCard img={t.img} alt={t.alt} />
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>
      </main>
    </>
  )
}


// import React from "react";
// import ProductCard from "../Components/product/ProductCard.jsx";
// import products from "./data/products";

// const ProductList = () => {
//   return (
//     <div className="max-w-6xl mx-auto py-12 px-6">
//       <h1 className="text-2xl font-bold mb-8">All Products</h1>

//       {/* Product Grid */}
//       <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-8">
//         {products.map((item) => (
//           <ProductCard
//             key={item.id}
//             id={item.id}
//             name={item.name}
//             image={item.image}
//             price={item.price}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ProductList;
