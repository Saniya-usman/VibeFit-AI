// import React from 'react'
// import { Link } from 'react-router-dom'

// const Navbar = () => {
//   return (
//     <div className='flex py-4 px-8 justify-between items-center bg-cyan-800 text-white'>
//       <h2 className='text-2xl font-bold italic'>Saniya</h2>
//       <div className='flex gap-8'>
//         <Link to='/*' className='text-lg font-semibold'>Home</Link>
//         <Link to='/about' className='text-lg font-semibold'>Women</Link>
//         <Link to='/productList' className='text-lg font-semibold'>Men</Link>
//         <Link to='/contact' className='text-lg font-semibold'>Contact</Link>
        
//       </div>
//     </div>
//   )
// }

// export default Navbar

import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const Navbar = () => {
  return (
    <>
      <nav
        className="fixed top-0 left-0 w-full h-15 z-20 text-white py-3 relative"
        style={{
          background: 'linear-gradient(135deg, #2c7098, #00293a)',
          boxShadow: '8px 8px 16px #1e4a5f, -8px -8px 16px #3f8fb3',
        }}
      >
        <div className="mx-auto flex items-center justify-between px-8">

          <motion.h1
            className="font-bold text-4xl text-shadow-lg/40 text-shadow-gray-800 italic"
            whileHover={{ scale: 1.05 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            VibeFit
          </motion.h1>

          <div className="flex gap-10">
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
              <Link to="/home" className="text-lg font-semibold hover:text-gray-300 transition-colors duration-300">Home</Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
              <Link to="/about" className="text-lg font-semibold hover:text-gray-300 transition-colors duration-300">Women</Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
              <Link to="/productList" className="text-lg font-semibold hover:text-gray-300 transition-colors duration-300">Men</Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
              <Link to="/kids" className="text-lg font-semibold hover:text-gray-300 transition-colors duration-300">Kids</Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
              <Link to="/contact" className="text-lg font-semibold hover:text-gray-300 transition-colors duration-300">Contact</Link>
            </motion.div>
          </div>

        </div>
      </nav>
    </>
  )
}

export default Navbar


// import React from "react";
// import { NavLink } from "react-router-dom";

// const Navbar = () => {
//   const navItems = [
//     { name: "Home", path: "/" },
//     { name: "Men", path: "/men" },
//     { name: "Women", path: "/women" },
//     { name: "Kids", path: "/kids" },
//     { name: "Trending", path: "/trending" },
//     { name: "Help", path: "/help" },
//   ];

//   return (
//     <nav className="w-full shadow-md bg-white sticky top-0 z-50">
//       <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
        
//         {/* Logo */}
//         <h1 className="text-2xl font-bold tracking-wide">
//           V<span className="text-pink-500">ibe</span>Fit
//         </h1>

//         {/* Navigation Links */}
//         <ul className="hidden md:flex items-center gap-8">
//           {navItems.map((item) => (
//             <li key={item.name}>
//               <NavLink
//                 to={item.path}
//                 className={({ isActive }) =>
//                   `text-sm font-medium transition ${
//                     isActive ? "text-pink-500" : "text-gray-700 hover:text-pink-500"
//                   }`
//                 }
//               >
//                 {item.name}
//               </NavLink>
//             </li>
//           ))}
//         </ul>

//         {/* Login / Signup Buttons */}
//         <div className="hidden md:flex items-center gap-3">
//           <button className="px-4 py-2 rounded-lg border border-gray-300 text-gray-700 hover:border-pink-500 hover:text-pink-500 transition">
//             Login
//           </button>
//           <button className="px-4 py-2 rounded-lg bg-pink-500 text-white hover:bg-pink-600 transition">
//             Sign Up
//           </button>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;
