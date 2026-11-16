// import React from "react"
// const products = [
//   {
//     id: 1,
//     title: "Navy Blue Evening Gown",
//     price: "₹3299",
//     oldPrice: "₹9999",
//     discount: "67% OFF",
//     rating: 4.5,
//     sizes: ["S", "M", "L", "XL"],
//     img: "https://i.pinimg.com/1200x/bc/1b/77/bc1b77ee713955eb5d6e8484fab7a5d0.jpg"
//   },
//   {
//     id: 2,
//     title: "Maroon Party Wear Gown",
//     price: "₹2799",
//     oldPrice: "₹8499",
//     discount: "67% OFF",
//     rating: 4.3,
//     sizes: ["S", "M", "L"],
//     img: "https://i.pinimg.com/1200x/bc/1b/77/bc1b77ee713955eb5d6e8484fab7a5d0.jpg"
//   },
//   {
//     id: 3,
//     title: "Black Satin Cocktail Gown",
//     price: "₹3499",
//     oldPrice: "₹10999",
//     discount: "68% OFF",
//     rating: 4.6,
//     sizes: ["M", "L", "XL"],
//     img: "https://i.pinimg.com/1200x/bc/1b/77/bc1b77ee713955eb5d6e8484fab7a5d0.jpg"
//   },
//   {
//     id: 4,
//     title: "Rose Gold Bridal Gown",
//     price: "₹5999",
//     oldPrice: "₹19999",
//     discount: "70% OFF",
//     rating: 4.8,
//     sizes: ["S", "M", "L", "XL"],
//     img: "https://i.pinimg.com/1200x/bc/1b/77/bc1b77ee713955eb5d6e8484fab7a5d0.jpg"
//   },
//   {
//     id: 5,
//     title: "Purple Embellished Floor Gown",
//     price: "₹3799",
//     oldPrice: "₹12999",
//     discount: "71% OFF",
//     rating: 4.5,
//     sizes: ["M", "L"],
//     img: "https://i.pinimg.com/1200x/bc/1b/77/bc1b77ee713955eb5d6e8484fab7a5d0.jpg"
//   },
//   {
//     id: 6,
//     title: "Royal Blue Embroidered Gown",
//     price: "₹3999",
//     oldPrice: "₹13999",
//     discount: "72% OFF",
//     rating: 4.4,
//     sizes: ["S", "M", "XL"],
//     img: "https://i.pinimg.com/1200x/bc/1b/77/bc1b77ee713955eb5d6e8484fab7a5d0.jpg"
//   },
//   {
//     id: 7,
//     title: "Green Modern Ball Gown",
//     price: "₹3499",
//     oldPrice: "₹10999",
//     discount: "68% OFF",
//     rating: 4.2,
//     sizes: ["XS", "S", "M", "L"],
//     img: "https://i.pinimg.com/1200x/bc/1b/77/bc1b77ee713955eb5d6e8484fab7a5d0.jpg"
//   },
//   {
//     id: 8,
//     title: "Champagne Sequin Work Gown",
//     price: "₹4999",
//     oldPrice: "₹17999",
//     discount: "72% OFF",
//     rating: 4.7,
//     sizes: ["S", "M", "L", "XL"],
//     img: "https://i.pinimg.com/1200x/bc/1b/77/bc1b77ee713955eb5d6e8484fab7a5d0.jpg"
//   },
//   {
//     id: 9,
//     title: "Wine Net Designer Gown",
//     price: "₹3399",
//     oldPrice: "₹10999",
//     discount: "69% OFF",
//     rating: 4.4,
//     sizes: ["S", "M", "L"],
//     img: "https://i.pinimg.com/1200x/bc/1b/77/bc1b77ee713955eb5d6e8484fab7a5d0.jpg"
//   },
//   {
//     id: 10,
//     title: "Emerald Draped Gown",
//     price: "₹2899",
//     oldPrice: "₹8999",
//     discount: "68% OFF",
//     rating: 4.1,
//     sizes: ["S", "M", "L"],
//     img: "https://i.pinimg.com/1200x/bc/1b/77/bc1b77ee713955eb5d6e8484fab7a5d0.jpg"
//   },
//   {
//     id: 11,
//     title: "Peach Soft Net Gown",
//     price: "₹3199",
//     oldPrice: "₹9999",
//     discount: "68% OFF",
//     rating: 4.3,
//     sizes: ["S", "M", "XL"],
//     img: "https://i.pinimg.com/1200x/bc/1b/77/bc1b77ee713955eb5d6e8484fab7a5d0.jpg"
//   },
//   {
//     id: 12,
//     title: "Turquoise Feather Gown",
//     price: "₹4499",
//     oldPrice: "₹15999",
//     discount: "72% OFF",
//     rating: 4.6,
//     sizes: ["M", "L", "XL"],
//     img: "https://i.pinimg.com/1200x/bc/1b/77/bc1b77ee713955eb5d6e8484fab7a5d0.jpg"
//   },
//   {
//     id: 13,
//     title: "Black Luxury Bridal Ball Gown",
//     price: "₹7999",
//     oldPrice: "₹25999",
//     discount: "69% OFF",
//     rating: 4.9,
//     sizes: ["L", "XL"],
//     img: "https://i.pinimg.com/1200x/bc/1b/77/bc1b77ee713955eb5d6e8484fab7a5d0.jpg"
//   },
//   {
//     id: 14,
//     title: "Silver Shimmer Gown",
//     price: "₹5299",
//     oldPrice: "₹19999",
//     discount: "73% OFF",
//     rating: 4.8,
//     sizes: ["S", "M", "L", "XL"],
//     img: "https://i.pinimg.com/1200x/bc/1b/77/bc1b77ee713955eb5d6e8484fab7a5d0.jpg"
//   },
//   {
//     id: 15,
//     title: "Lavender Party Wear Gown",
//     price: "₹3599",
//     oldPrice: "₹11999",
//     discount: "70% OFF",
//     rating: 4.5,
//     sizes: ["S", "M", "L"],
//     img: "https://i.pinimg.com/1200x/bc/1b/77/bc1b77ee713955eb5d6e8484fab7a5d0.jpg"
//   }
// ];


// function ProductCard({ img, title, price, oldPrice, discount }) {
//   return (
//     <div className="bg-white rounded-lg p-3 shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer">
//       <img
//         src={img}
//         alt={title}
//         className="w-full h-90 object-cover rounded-md hover:scale-105 transform transition-transform duration-300"
//       />

//       <h4 className="text-sm font-medium mt-3">{title}</h4>

//       <div className="text-sm mt-1 flex gap-2 items-center">
//         <span className="font-semibold">{price}</span>
//         <span className="line-through text-gray-400">{oldPrice}</span>
//         <span className="text-red-500 font-semibold">{discount}</span>
//       </div>
//     </div>
//   )
// }

// export default function Sarees() {
//   return (
//     <main className="relative min-h-screen bg-sky-200">
//       <div className="bg-white/70 h-full w-full backdrop-blur-md rounded-2xl p-10 shadow-lg">
//         <h1
//           className="text-4xl font-serif text-slate-900 mt-10 mb-10"
//           style={{ letterSpacing: "0.18em" }}
//         >
//           Dresses Collection
//         </h1>

//         <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 gap-8">
//           {products.map((item) => (
//             <ProductCard
//               key={item.id}
//               img={item.img}
//               title={item.title}
//               price={item.price}
//               oldPrice={item.oldPrice}
//               discount={item.discount}
//             />
//           ))}
//         </div>
//       </div>
//     </main>
//   )
// }

import React from "react";
import { Link } from "react-router-dom";
import { products as ProductDetails3 } from "./ProductDetails3.jsx"; // your dresses product array

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

export default function Dresses() {
  return (
    <main className="relative min-h-screen bg-sky-200">
      <div className="bg-white/70 h-full w-full backdrop-blur-md rounded-2xl p-10 shadow-lg">
        <h1
          className="text-4xl font-serif text-slate-900 mt-10 mb-10"
          style={{ letterSpacing: "0.18em" }}
        >
          Dresses Collection
        </h1>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 gap-8">
          {ProductDetails3.map((item) => (
            <Link key={item.id} to={`/dresses/${item.id}`}>
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
