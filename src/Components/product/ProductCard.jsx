// import React from "react";
// import { Link } from "react-router-dom";

// const ProductCard = ({ id, name, image, price, oldPrice, discount, linkPath = `/product/${id}` }) => {
//   return (
//     <Link
//       to={linkPath}
//       className="w-full bg-white rounded-xl shadow hover:shadow-lg transition cursor-pointer"
//     >
//       {/* Product Image */}
//       <div className="w-full h-56 bg-gray-200 rounded-t-xl flex justify-center items-center overflow-hidden">
//         {image ? (
//           <img
//             src={image}
//             alt={name}
//             className="w-full h-full object-cover"
//           />
//         ) : (
//           <span className="text-gray-400">Image not available</span>
//         )}
//       </div>

//       {/* Product Details */}
//       <div className="px-4 py-3">
//         <h3 className="font-semibold text-gray-800 text-lg">{name}</h3>
//         <div className="flex items-center gap-2 mt-1">
//           <p className="text-pink-500 font-medium text-sm">
//             ₹{price}
//           </p>
//           {oldPrice && (
//             <p className="text-gray-500 line-through text-xs">
//               ₹{oldPrice}
//             </p>
//           )}
//           {discount && (
//             <span className="bg-red-500 text-white text-xs px-1 py-0.5 rounded">
//               {discount}
//             </span>
//           )}
//         </div>
//       </div>
//     </Link>
//   );
// };

// export default ProductCard;
