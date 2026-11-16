import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function CollectionPage() {
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const categories = [
    { name: "Sarees", image: "https://m.media-amazon.com/images/I/71gD9Q0KdeL._SY500_.jpg", link: "/sarees" },
    { name: "Kurtas", image: "https://images.meesho.com/images/products/614124045/umwmk_512.avif?width=512", link: "/kurtas" },
    { name: "Dresses", image: "https://images.meesho.com/images/products/233717849/tgqnq_512.avif?width=512", link: "/dresses" },
    { name: "Shirts", image: "https://images.meesho.com/images/products/534922228/5d06e_512.avif?width=512", link: "/shirts" },
  ];

  return (
    <div className={`min-h-screen bg-gradient-to-br from-[#2c7098] via-[#1e5f7a] to-[#00293a] text-white px-6 py-12 transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
      {/* Page Title */}
      <h1 className="text-4xl md:text-5xl font-bold text-center mb-12 animate-fade-in-up">
        Browse Our Collection
      </h1>

      {/* Search Bar */}
      <div className="max-w-xl mx-auto mb-12 animate-fade-in-up animation-delay-200">
        <div className="relative">
          <input
            type="text"
            placeholder="Search outfits..."
            className="w-full px-6 py-3 rounded-full border-2 border-transparent bg-white/20 backdrop-blur-sm text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50 focus:bg-white/30 transition-all duration-300 shadow-lg"
          />
          <svg className="absolute right-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-white/70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>
      </div>

      {/* Category Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
        {categories.map((cat, index) => (
          <div
            key={cat.name}
            className={`group h-80 bg-white rounded-2xl shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-500 cursor-pointer overflow-hidden animate-fade-in-up`}
            style={{ animationDelay: `${index * 200}ms` }}
            onClick={() => navigate(cat.link)}
          >
            <div className="relative h-48 overflow-hidden">
              <img
                src={cat.image}
                alt={cat.name}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            <div className="p-6 text-center">
              <h3 className="font-bold text-xl text-indigo-800 group-hover:text-indigo-600 transition-colors duration-300">
                {cat.name}
              </h3>
              <div className="mt-2 w-0 group-hover:w-full h-0.5 bg-indigo-600 transition-all duration-300 mx-auto"></div>
            </div>
          </div>
        ))}
      </div>

      {/* Featured Try-On Section */}
      <div className=" text-white p-8 rounded-3xl shadow-2xl  max-w-2xl mx-auto mb-16 animate-fade-in-up animation-delay-600 hover:shadow-3xl transition-shadow duration-500">
        <div className="text-center  mb-6">
          <h2 className="text-2xl md:text-3xl font-bold mb-2 flex items-center justify-center gap-2">
            <span className="animate-bounce">✨</span> Try This Look <span className="animate-bounce">✨</span>
          </h2>
          <p className="text-sky-100">Experience fashion like never before</p>
        </div>
        <div className="relative overflow-hidden rounded-2xl mb-6">
          <img
            src="https://images.meesho.com/images/products/376946876/mmvws_512.avif?width=512"
            alt="Featured Outfit"
            className="w-full h-180 object-cover hover:scale-105 transition-transform duration-500"
          />
        </div>
        <div className="text-center">
          <button
            className="bg-white text-indigo-700 font-bold px-8 py-3 rounded-full hover:bg-indigo-50 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Try On Now 🚀
          </button>
        </div>
      </div>

      {/* Voice Assistant Prompt */}
      <div className="text-center animate-fade-in-up animation-delay-800">
        <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 shadow-lg">
          <span className="text-2xl animate-pulse">🎙️</span>
          <p className="text-sm text-gray-200 italic">
            Tip: Say "Show me sarees for weddings" to explore curated looks instantly!
          </p>
        </div>
      </div>
    </div>
  );
}
