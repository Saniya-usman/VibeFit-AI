import React, { useState, useEffect } from "react";
import App from "./App.jsx";
import { useNavigate } from "react-router-dom";

const Front = () => {
  const navigate = useNavigate();
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
          .animate-float {
            animation: float 3s ease-in-out infinite;
          }
          .navbar-enter {
            animation: fadeIn 0.8s ease-out forwards;
          }
          .text-enter {
            animation: slideInLeft 1s ease-out 0.3s forwards;
            opacity: 0;
          }
          .image-enter {
            animation: slideInRight 1s ease-out 0.6s forwards;
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

      <div className={`min-h-screen bg-linear-to-br from-[#1b8ab3] to-[#0a1b24] text-white flex p-6 ${isVisible ? 'animate-fade-in' : ''}`}>
        <div className="w-full max-w-7xl bg-opacity-10 rounded-3xl p-10">

          {/* Navbar */}
          <div className={`flex justify-between items-center mb-10 ${isVisible ? 'navbar-enter' : ''}`}>
            <h1 className="font-bold text-4xl text-shadow-lg/40 text-shadow-gray-800 italic">VibeFit</h1>
            <div className="flex gap-12">
              <button
                onClick={() => navigate("/login")}
                className="px-8 py-2 font-semibold text-lg rounded-full hover:text-blue-300 hover:border hover:border-white transition hover:scale-105 cursor-pointer shadow-lg/20 button-hover"
              >
                Login
              </button>
              <button
                onClick={() => navigate("/signup")}
                className="px-8 py-2 font-semibold border text-lg rounded-full hover:text-blue-300 hover:border-white cursor-pointer transition hover:scale-105 shadow-lg/20 button-hover"
              >
                Sign up
              </button>
            </div>
          </div>

          {/* Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

            {/* Left text */}
            <div className={isVisible ? 'text-enter' : ''}>
              <h2 className="text-5xl md:text-6xl text-shadow-lg/20 font-serif mt-30 leading-tight">
                Your <span className="text-blue-300">Personal</span><br />
                AI Stylist
              </h2>

              <p className="mt-6 font-semibold text-lg max-w-md">
                Discover the perfect outfit for any mood.
                Let AI transform your wardrobe with intelligent recommendations tailored just for you.
              </p>

              <button
                onClick={() => navigate('/home')}
                className="mt-10 px-8 py-3 border font-semibold bg-linear-to-br from-[#2c7098] to-[#00293a] rounded-full hover:border-white hover:text-blue-300 transition text-lg cursor-pointer shadow-lg/40 button-hover"
              >
                Get Started
              </button>
            </div>

            {/* Right image */}
            <div className={`bg-[url(/src/assets/Model.png)] bg-cover bg-center bg-no-repeat h-150 md:h-[600px] opacity-90 ${isVisible ? 'image-enter animate-float' : ''}`}>

            </div>

          </div>
        </div>
      </div>
    </>
  );
};

export default Front;


// import React from "react";
// import { useNavigate } from "react-router-dom";

// const Front = () => {
//   const navigate = useNavigate();

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-[#1b8ab3] to-[#0a1b24] text-white flex p-6">

//       <div className="w-full max-w-7xl bg-opacity-10 rounded-3xl p-10">

//         {/* Navbar */}
//         <div className="flex justify-between items-center mb-10">
//           <h1 className="font-bold text-4xl italic">VibeFit</h1>

//           <div className="flex gap-12">
//             <button
//               onClick={() => navigate("/login")}
//               className="px-8 py-2 font-semibold text-lg rounded-full hover:text-blue-300 hover:border hover:border-white transition hover:scale-105"
//             >
//               Login
//             </button>

//             <button
//               onClick={() => navigate("/signup")}
//               className="px-8 py-2 font-semibold border text-lg rounded-full hover:text-blue-300 hover:border-white transition hover:scale-105"
//             >
//               Sign up
//             </button>
//           </div>
//         </div>

//         {/* Content */}
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

//           <div>
//             <h2 className="text-5xl md:text-6xl leading-tight">
//               Your <span className="text-blue-300">Personal</span><br />
//               AI Stylist
//             </h2>

//             <p className="mt-6 font-semibold text-lg max-w-md">
//               Discover the perfect outfit for any mood.
//             </p>

//             <button
//               onClick={() => navigate("/home")}
//               className="mt-10 px-8 py-3 border font-semibold bg-gradient-to-br from-[#2c7098] to-[#00293a] rounded-full"
//             >
//               Get Started
//             </button>
//           </div>

//           {/* Image */}
//           <div className=" bg-[url(/src/assets/Model.png)] bg-cover bg-center bg-no-repeat h-150 md:h-[600px]" />
//         </div>

//       </div>
//     </div>
//   );
// };

// export default Front;




// import React from "react";
// import { useNavigate } from "react-router-dom";

// const Front = () => {
//   const navigate = useNavigate();

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-[#1b8ab3] to-[#0a1b24] text-white flex p-6">

//       <div className="w-full max-w-7xl bg-opacity-10 rounded-3xl p-10">

//         {/* Navbar */}
//         <div className="flex justify-between items-center mb-10">
//           <h1 className="font-bold text-4xl italic">VibeFit</h1>

//           <div className="flex gap-12">
//             <button
//               onClick={() => navigate("/login")}
//               className="px-8 py-2 font-semibold text-lg rounded-full"
//             >
//               Login
//             </button>

//             <button
//               onClick={() => navigate("/signup")}
//               className="px-8 py-2 font-semibold border text-lg rounded-full"
//             >
//               Sign up
//             </button>
//           </div>
//         </div>

//         {/* Content */}
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

//           <div>
//             <h2 className="text-5xl md:text-6xl leading-tight">
//               Your <span className="text-blue-300">Personal</span><br />
//               AI Stylist
//             </h2>

//             <p className="mt-6 font-semibold text-lg max-w-md">
//               Discover the perfect outfit for any mood.
//             </p>

//             <button
//               onClick={() => navigate("/home")}
//               className="mt-10 px-8 py-3 border font-semibold bg-gradient-to-br rounded-full"
//             >
//               Get Started
//             </button>
//           </div>

//           <div className=" bg-[url(/src/assets/Model.png)] bg-cover bg-center bg-no-repeat h-150 md:h-[600px]" />
//         </div>

//       </div>
//     </div>
//   );
// };

// export default Front;
