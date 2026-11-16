import React, { useState } from "react";

export default function OutfitCatalog({ outfits, onSelect }) {
  const [hoveredItem, setHoveredItem] = useState(null);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4  gap-4 justify-center ml-70">
      {outfits.map((item) => (
        <div
          key={item.id}
          className={`group relative cursor-pointer transform transition-all duration-300 hover:scale-110 ${
            hoveredItem === item.id ? 'z-10' : ''
          }`}
          onMouseEnter={() => setHoveredItem(item.id)}
          onMouseLeave={() => setHoveredItem(null)}
          onClick={() => onSelect(item.image)}
        >
          <div className="aspect-[3/4]  bg-white rounded-xl shadow-lg overflow-hidden border-2 border-transparent group-hover:border-purple-300 transition-all duration-300 flex justify-center items-center">
            <img
              src={item.image}
              alt={item.name}
              className="max-w-full max-h-full object-contain group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="absolute bottom-0 left-0 right-0 p-3">
                <h4 className="text-white font-semibold text-sm text-center drop-shadow-lg">
                  {item.name}
                </h4>
              </div>
            </div>
          </div>

          {/* Hover glow effect */}
          <div className="absolute inset-0 rounded-xl bg-purple-400/20 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-300 -z-10"></div>
        </div>
      ))}
    </div>
  );
}
