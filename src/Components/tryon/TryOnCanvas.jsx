// import React, { useState } from "react";

// // Sample clothing images (add your real ones here)
// const clothes = [
//   "/clothes/top1.png",
//   "/clothes/top2.png",
//   "/clothes/top3.png",
// ];

// const TryOnCanvas = () => {
//   const [uploadedImage, setUploadedImage] = useState(null);
//   const [clothIndex, setClothIndex] = useState(0);

//   const selectedCloth = clothes[clothIndex];

//   // Upload image
//   const handleUpload = (e) => {
//     setUploadedImage(URL.createObjectURL(e.target.files[0]));
//   };

//   const handleNextClothing = () => {
//     setClothIndex((prev) => (prev + 1) % clothes.length);
//   };

//   const handlePrevClothing = () => {
//     setClothIndex((prev) =>
//       prev - 1 < 0 ? clothes.length - 1 : prev - 1
//     );
//   };

//   const removeImage = () => setUploadedImage(null);

//   return (
//     <div className="p-8 flex flex-col items-center">
//       <h1 className="text-3xl font-bold mb-6">Virtual Try-On</h1>

//       {/* Preview Box */}
//       <div className="w-full max-w-md border p-4 rounded-xl bg-white shadow-md">
//         <div className="w-full h-80 rounded-lg border bg-gray-50 flex items-center justify-center overflow-hidden relative">

//           {/* User Image */}
//           {uploadedImage ? (
//             <img
//               src={uploadedImage}
//               alt="User Preview"
//               className="h-full object-contain"
//             />
//           ) : (
//             <p className="text-gray-500">No image uploaded yet</p>
//           )}

//           {/* Clothing Overlay */}
//           {uploadedImage && (
//             <img
//               src={selectedCloth}
//               alt="Cloth Overlay"
//               className="absolute h-1/2 object-contain"
//               style={{ top: "25%" }}
//             />
//           )}
//         </div>

//         {/* Upload Button */}
//         <label className="block mt-6 cursor-pointer text-center bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition">
//           Upload Your Photo
//           <input
//             type="file"
//             accept="image/*"
//             className="hidden"
//             onChange={handleUpload}
//           />
//         </label>

//         {/* Controls */}
//         {uploadedImage && (
//           <div className="mt-4 flex items-center justify-between">
//             <button
//               onClick={handlePrevClothing}
//               className="bg-gray-700 text-white px-4 py-2 rounded-lg hover:bg-gray-800"
//             >
//               Prev
//             </button>

//             <button
//               onClick={removeImage}
//               className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
//             >
//               Remove
//             </button>

//             <button
//               onClick={handleNextClothing}
//               className="bg-gray-700 text-white px-4 py-2 rounded-lg hover:bg-gray-800"
//             >
//               Next
//             </button>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default TryOnCanvas;
