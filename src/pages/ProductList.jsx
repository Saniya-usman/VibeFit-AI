import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

// Local images (make sure these exist in /src/assets/)
import shirtImg from "../assets/shirt.png";
import kurtaImg from "../assets/kurtam.png";
import jeansImg from "../assets/pants.png";
import tshirtImg from "../assets/tshirt.png";
import jacketImg from "../assets/jacket.png";

// Categories for Men
const categories = [
  { id: 1, title: "Shirts", img: shirtImg },
  { id: 2, title: "Kurta", img: kurtaImg },
  { id: 3, title: "Jeans", img: jeansImg },
  { id: 4, title: "T-Shirts", img: tshirtImg },
  { id: 5, title: "Jacket", img: jacketImg },
];

// Trending in Men's Wear
const trendingMensWear = [
   { id: 1, img: "https://i.pinimg.com/1200x/c8/63/b1/c863b166d46765dcc87e9c4ca9a0c310.jpg" },
  { id: 2, img: "https://i.pinimg.com/1200x/ee/36/5c/ee365c22dd45c4343c52e90d657ea4c7.jpg", alt: "indian-2" },
  { id: 3, img: "https://i.pinimg.com/1200x/a5/7b/71/a57b71fe41acb04400797e9b35d929b5.jpg", alt: "indian-3" },
  { id: 4, img: "https://i.pinimg.com/736x/5f/e6/51/5fe651f93c6d645c110dec685364a5e4.jpg", alt: "indian-4" },
  { id: 5, img: "https://i.pinimg.com/1200x/42/65/99/426599e59a5c344fc93f754b46d0770a.jpg", alt: "indian-5" },

];

// Trending Accessories for Men
const trendingAccessories = [
   { id: 1, img: "https://i.pinimg.com/736x/88/dc/1c/88dc1c3ab7fc882fd7d6e18fedb1efac.jpg", alt: "acc-1" },
  { id: 2, img: "https://i.pinimg.com/1200x/ce/29/1c/ce291c659a747233c14d457929a0ba0c.jpg", alt: "acc-2" },
  { id: 3, img: "https://i.pinimg.com/1200x/6b/cd/35/6bcd35e72b407ee01812ecc589129dc5.jpg", alt: "acc-3" },
  { id: 4, img: "https://i.pinimg.com/736x/59/01/3e/59013e1b8c7efc73880ba71ed0f7f30a.jpg", alt: "acc-4" },
  { id: 5, img: "https://i.pinimg.com/1200x/d1/b1/e2/d1b1e25159909bd2cd31284fe4fd6d22.jpg", alt: "acc-5" },
];

function CategoryCard({ title, img }) {
  const pathMap = {
    'Shirts': 'shirts',
    'Kurta': 'Menskurta',
    'Jeans': 'Mensjeans',
    'T-Shirts': 'Menstshirt',
    'Jacket': 'Mensjacket',
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

function TrendCard({ img, alt }) {
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

export default function Men() {
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
              Categories For Men
            </h2>

            {/* Categories */}
            <div className={`grid grid-cols-2 sm:grid-cols-5 gap-6 items-start mb-12 ${isVisible ? 'animate-slide-in-right' : ''}`}>
              {categories.map((c, index) => (
                <div key={c.id} className="flex justify-center" style={{ animationDelay: `${index * 0.1}s` }}>
                  <CategoryCard title={c.title} img={c.img} />
                </div>
              ))}
            </div>

            {/* Trending In Men's Wear */}
            <section className={`mb-10 ${isVisible ? 'animate-slide-in-left' : ''}`}>
              <h3
                className="text-2xl font-serif text-slate-900 mb-3"
                style={{ letterSpacing: "0.18em" }}
              >
                Trending In Men's Wear
              </h3>

              <div className="grid grid-cols-2 sm:grid-cols-5 gap-6">
                {trendingMensWear.map((t, index) => (
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
                Trending Accessories
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
  );
}
