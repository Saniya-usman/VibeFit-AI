import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

// Local images (keep these inside /src/assets/)
import kidsShirt from "../assets/kids-shirt.png";
import kidsDress from "../assets/kids-dress.png";
import kidsJeans from "../assets/kids-jeans.png";
import kidsTshirt from "../assets/kids-tshirt.png";
import kidsShoes from "../assets/kids-shoes.png";

// Categories for Kids
const kidsCategories = [
  { id: 1, title: "Kids Shirts", img: kidsShirt },
  { id: 2, title: "Kids Dresses", img: kidsDress },
  { id: 3, title: "Kids Jeans", img: kidsJeans },
  { id: 4, title: "Kids T-Shirts", img: kidsTshirt },
  { id: 5, title: "Kids Shoes", img: kidsShoes },
];

// Trending Wear for Kids
const trendingKidsWear = [
  { id: 1, img: "https://i.pinimg.com/736x/4d/76/42/4d76425a9526ce9c1abdf485490d39cc.jpg", alt: "kid-1" },
  { id: 2, img: "https://i.pinimg.com/1200x/25/a9/f2/25a9f2768034618ff9d9e996a1b4f296.jpg", alt: "kid-2" },
  { id: 3, img: "https://i.pinimg.com/736x/f1/6d/df/f16ddf2436a4b924aaf97bb72200f615.jpg", alt: "kid-3" },
  { id: 4, img: "https://i.pinimg.com/1200x/d5/b2/7a/d5b27a581ea35a64a0bdaea9ffda3654.jpg", alt: "kid-4" },
  { id: 5, img: "https://i.pinimg.com/736x/50/39/76/503976174f4c9e844ba115607c201466.jpg", alt: "kid-5" },
];

// Trending Accessories for Kids
const trendingKidsAccessories = [
  { id: 1, img: "https://i.pinimg.com/1200x/ed/a0/50/eda05027248527825ffaa4fb63e9a472.jpg", alt: "acc-k-1" },
  { id: 2, img: "https://i.pinimg.com/1200x/9a/93/25/9a93255227d5f8f89873c441c9fda8f0.jpg", alt: "acc-k-2" },
  { id: 3, img: "https://i.pinimg.com/1200x/37/a5/5e/37a55e7fc498edcc8d50b9e0ae690bb8.jpg", alt: "acc-k-3" },
  { id: 4, img: "https://i.pinimg.com/1200x/f1/2e/19/f12e19245554b5c6d6e2d898907d8c54.jpg", alt: "acc-k-4" },
  { id: 5, img: "https://i.pinimg.com/736x/a4/26/d9/a426d9a15a3a38a877f8ccfc086f0025.jpg", alt: "acc-k-5" },
];

function KidsCategoryCard({ title, img }) {
  const pathMap = {
    "Kids Shirts": "KidsShirt",
    "Kids Dresses": "KidsDress",
    "Kids Jeans": "KidsJeans",
    "Kids T-Shirts": "KidsTshirt",
    "Kids Shoes": "KidsShoes",
  };

  return (
    <Link
      to={`/${pathMap[title] || title.toLowerCase()}`}
      className="shrink-0 w-40 flex flex-col gap-4 items-center text-center group"
      aria-label={title}
    >
      <div className="card-hover">
        <div className="card-border">
          <div className="card-inner w-60 h-70 bg-white pt-5 pl-5 items-center justify-center rounded-lg shadow-md flex flex-col gap-4">
            <div className="w-48 h-48 rounded-full border-2 border-sky-300 overflow-hidden flex items-center justify-center bg-sky-50">
              <img
                src={img}
                alt={title}
                className="w-35 h-full transform transition-transform bg-cover duration-300"
                onError={(e) => {
                  e.currentTarget.src = "https://via.placeholder.com/200?text=No+Image";
                }}
              />
            </div>
            <span className="text-xl font-bold text-slate-800">{title}</span>
          </div>
        </div>
      </div>
    </Link>
  );
}

function KidsTrendCard({ img, alt }) {
  return (
    <div className="w-full h-80 object-cover rounded-xl bg-white p-3 shadow-md hover:shadow-2xl transition-shadow bg-cover flex items-center justify-center">
      <img
        src={img}
        alt={alt}
        className="w-50 h-70 object-cover rounded-md hover:scale-105 transform transition-transform duration-300"
        onError={(e) => {
          e.currentTarget.src = "https://via.placeholder.com/300x400?text=No+Image";
        }}
      />
    </div>
  );
}

export default function Kids() {
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
              Categories For Kids
            </h2>

            {/* Categories */}
            <div className={`grid grid-cols-2 sm:grid-cols-5 gap-6 items-start mb-12 ${isVisible ? 'animate-slide-in-right' : ''}`}>
              {kidsCategories.map((c, index) => (
                <div key={c.id} className="flex justify-center" style={{ animationDelay: `${index * 0.1}s` }}>
                  <KidsCategoryCard title={c.title} img={c.img} />
                </div>
              ))}
            </div>

            {/* Trending In Kids Wear */}
            <section className={`mb-10 ${isVisible ? 'animate-slide-in-left' : ''}`}>
              <h3
                className="text-2xl font-serif text-slate-900 mb-3"
                style={{ letterSpacing: "0.18em" }}
              >
                Trending In Kids Wear
              </h3>

              <div className="grid grid-cols-2 sm:grid-cols-5 gap-6">
                {trendingKidsWear.map((t, index) => (
                  <div key={t.id} style={{ animationDelay: `${index * 0.1}s` }}>
                    <KidsTrendCard img={t.img} alt={t.alt} />
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
                Trending Accessories
              </h3>

              <div className="grid grid-cols-2 sm:grid-cols-5 gap-6">
                {trendingKidsAccessories.map((t, index) => (
                  <div key={t.id} style={{ animationDelay: `${index * 0.1}s` }}>
                    <KidsTrendCard img={t.img} alt={t.alt} />
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>
      </main>
    </>
  );
}
