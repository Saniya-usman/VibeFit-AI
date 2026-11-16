// import React from 'react'

// const Home = () => {
//   return (
//     <div>
//         <h1 className=' absolute top-1/2 left-1/2 text-4xl underline text-teal-800'>Home Page</h1>
//     </div>
//   )
// }

// export default Home

// import React from "react";
// import { Link } from "react-router-dom";

// const Home = () => {
//   return (
//     <>
   
//     <div className="w-full">

//       {/* Hero Section */}
//       <section className=" bg-[url('/src/assets/Image.jpg')] bg-cover bg-center h-screen w-full bg-gradient-to-br from-[#0a4054] to-[#011927] opacity-80  text-white py-20 px-6">
//         <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">

//           {/* Left Text Section */}
//           <div className="flex-1">
//             <h1 className="text-4xl md:text-5xl font-bold leading-tight">
//               Try Your Outfit Virtually Before You Buy.
//             </h1>
//             <p className="mt-4 text-lg opacity-90">
//               Choose outfits online and preview them on your avatar instantly.
//             </p>

//             <div className="mt-6 flex gap-4">
//               <Link
//                 to="/try-on"
//                 className="px-6 py-3 bg-white text-pink-500 font-medium rounded-lg shadow hover:bg-gray-100 transition"
//               >
//                 Try On Now
//               </Link>

//               <Link
//                 to="/products"
//                 className="px-6 py-3 border border-white text-white font-medium rounded-lg hover:bg-white hover:text-pink-500 transition"
//               >
//                 Browse Collection
//               </Link>
//             </div>
//           </div>

//           {/* Right Mock Image */}
//           <div className="flex-1 w-full">
//             <div className="w-full h-72 bg-white rounded-xl shadow-lg opacity-80 flex justify-center items-center text-gray-600">
//               Preview Model / Hero Image Here
//             </div>
//           </div>
//         </div>
//       </section>

      
//     </div>
//     </>
//   );
// };

// export default Home;

// import React from "react";
// import { Link } from "react-router-dom";
// import bg from "../assets/Image.jpg";   // adjust if needed

// const Home = () => {
//   return (
//     <div
//       className="w-full opacity-100 h-screen bg-cover bg-center relative"
//       style={{ backgroundImage: `url(${bg})` }}
//     >
//       {/* Dark overlay */}
//       <div className="absolute inset-0 bg-black/40"></div>

//       {/* Content */}
//       <section className="relative z-10 max-w-6xl mx-auto h-full flex flex-col md:flex-row items-center gap-10 px-6">

//         {/* Left Content */}
//         <div className="flex-1 mb-190">
//           <h1 className="text-4xl md:text-5xl font-bold mt-100
//            text-white">
//             Try Your Outfit Virtually Before You Buy.
//           </h1>

//           <p className="mt-4 text-lg text-white/90">
//             Choose outfits online and preview them on your avatar instantly.
//           </p>

//           <div className="mt-6 flex gap-4">
//             <Link
//               to="/try-on"
//               className="px-6 py-3 bg-white text-blue-600 font-medium rounded-lg shadow hover:bg-gray-100 transition"
//             >
//               Try On Now
//             </Link>

//             <Link
//               to="/products"
//               className="px-6 py-3 border border-white text-white font-medium rounded-lg hover:bg-white hover:text-blue-600 transition"
//             >
//               Browse Collection
//             </Link>
//           </div>
//         </div>

//         {/* Right Preview Box */}
//         <div className="flex-1 w-full">
//           <div className="w-full h-72 bg-white/80 rounded-xl shadow-lg flex justify-center items-center text-gray-600">
//             Preview Model / Hero Image Here
//           </div>
//         </div>

//       </section>
//     </div>
//   );
// };

// export default Home;




import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import bg from "../assets/AI.jpg"; // adjust if needed

const Home = () => {
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
          @keyframes slideInUp {
            from { opacity: 0; transform: translateY(50px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .animate-fade-in {
            animation: fadeIn 1s ease-out forwards;
          }
          .animate-slide-in-left {
            animation: slideInLeft 1.2s ease-out forwards;
          }
          .animate-slide-in-up {
            animation: slideInUp 1s ease-out 0.5s forwards;
            opacity: 0;
          }
          .button-hover {
            transition: all 0.3s ease;
          }
          .button-hover:hover {
            transform: scale(1.05) translateY(-2px);
            box-shadow: 0 10px 20px rgba(0,0,0,0.2);
          }
        `}
      </style>

      <section
        className={`h-screen w-full bg-contain bg-center ${isVisible ? 'animate-fade-in' : ''}`}
        style={{ backgroundImage: `url(${bg})` }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/30"></div>

        {/* Content */}
        <div className="relative z-10 h-full max-w-8xl mx-auto flex flex-col md:flex-row items-center justify-center gap-12 px-6">

          {/* Left text section */}
          <div className={`flex-5 text-white ${isVisible ? 'animate-slide-in-left' : ''}`}>
            <h1 className="text-4xl mt-80 text-shadow-lg/50 font-serif leading-tight">
              Try Your Outfit <br /> Virtually
            </h1>

            <p className="mt-4 text-5xl text-white/90 font-bold text-shadow-lg/30 text-shadow-blue-400">
              Upload your photo <br /> and see outfits instantly.
            </p>

            <div className={`mt-6 flex gap-10 ${isVisible ? 'animate-slide-in-up' : ''}`}>
              <Link
                to="/TryOn"
                className="mt-10 px-8 py-3 border font-semibold bg-linear-to-br from-[#2c7098] to-[#00293a] rounded-full hover:border-white hover:text-blue-300 transition text-lg cursor-pointer shadow-lg/40 button-hover"
              >
                Try Now
              </Link>

              <Link
                to="/collection"
                className="mt-10 px-8 py-3 border font-semibold bg-linear-to-br from-[#2c7098] to-[#00293a] rounded-full hover:border-white hover:text-blue-300 transition text-lg cursor-pointer shadow-lg/40 button-hover"
              >
                Browse Collection
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
