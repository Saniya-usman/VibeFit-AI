import React, { useState, useEffect } from "react";
import OutfitCatalog from "./OutfitCatalog";
import outfits from "../data/outfits.jsx";

export default function TryOn() {
  const [userPhoto, setUserPhoto] = useState(null);
  const [selectedOutfit, setSelectedOutfit] = useState(null);
  const [selectedOutfitName, setSelectedOutfitName] = useState("");
  const [selectedOutfitObj, setSelectedOutfitObj] = useState(null);
  const [category, setCategory] = useState("saree");
  const [loading, setLoading] = useState(false);
  const [generatedImage, setGeneratedImage] = useState(null);
  const [isDragging, setIsDragging] = useState(false);
  const [animationClass, setAnimationClass] = useState("");
  const [buttonAnimating, setButtonAnimating] = useState(false);

  useEffect(() => {
    setAnimationClass("fade-in-up");
  }, []);

  const handleUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setUserPhoto(URL.createObjectURL(file));
      setAnimationClass("bounce-in");
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);
    const files = e.dataTransfer.files;
    if (files.length > 0) {
      const file = files[0];
      if (file.type.startsWith('image/')) {
        setUserPhoto(URL.createObjectURL(file));
        setAnimationClass("bounce-in");
      }
    }
  };

  const filteredOutfits = outfits.filter(o => o.category === category);

  const handleOutfitSelect = (image, name) => {
    const outfit = outfits.find(o => o.image === image);
    setSelectedOutfit(image);
    setSelectedOutfitName(name);
    setSelectedOutfitObj(outfit);
    setAnimationClass("pulse");
  };

  const handleReset = () => {
    setSelectedOutfit(null);
    setSelectedOutfitName("");
    setGeneratedImage(null);
    setAnimationClass("fade-in-up");
  };

  const generateRealisticTryOn = () => {
    if (!userPhoto || !selectedOutfitObj) return;

    setLoading(true);
    console.log("Starting demo try-on generation...");
    console.log("User photo:", userPhoto);
    console.log("Selected outfit:", selectedOutfitObj);

    // Simulate generation delay for realism
    setTimeout(() => {
      setGeneratedImage(selectedOutfitObj.finalImage);
      setAnimationClass("zoom-in");
      setLoading(false);
    }, 2000); // 2 second delay
  };



  const handleSave = () => {
    if (!generatedImage && !userPhoto) return;

    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    const img = new Image();

    img.onload = () => {
      canvas.width = img.width;
      canvas.height = img.height;
      ctx.drawImage(img, 0, 0);

      canvas.toBlob((blob) => {
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `virtual-try-on-${Date.now()}.png`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
      });
    };

    img.src = generatedImage || userPhoto;
  };

  const animateButton = (callback) => {
    setButtonAnimating(true);
    setTimeout(() => {
      setButtonAnimating(false);
      callback();
    }, 300);
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-[#1b8ab3] to-[#0a1b24] p-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className={`text-center mb-8 ${animationClass}`}>
          <h1 className="text-5xl font-bold text-white mb-2 drop-shadow-lg">
            👗 Virtual Wardrobe Try-On
          </h1>
          <p className="text-purple-100 text-lg">
            Upload your photo and try on amazing outfits virtually!
          </p>
        </div>

        {/* Upload photo */}
        <div className="mb-8 flex justify-center">
          <div
            className={`relative border-4 border-solid rounded-2xl p-8 transition-all duration-300 cursor-pointer ${
              isDragging
                ? 'border-white bg-white/20 scale-105'
                : 'border-white/50 bg-white/10 hover:border-white/80 hover:bg-white/15'
            }`}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
            onClick={() => document.getElementById('photo-upload').click()}
          >
            <input
              id="photo-upload"
              type="file"
              accept="image/*"
              onChange={handleUpload}
              className="hidden"
            />
            <div className="text-center">
              <div className="text-6xl mb-4">📸</div>
              <p className="text-white text-xl font-semibold mb-2">
                {userPhoto ? 'Change Photo' : 'Upload Your Photo'}
              </p>
              <p className="text-purple-200">
                Drag & drop or click to browse
              </p>
            </div>
          </div>
        </div>

        {/* Category filter */}
        <div className="flex gap-3 mb-8 flex-wrap justify-center">
          {[
            { key: "saree", label: "Sarees", emoji: "🧣" },
            { key: "kurta", label: "Kurtas", emoji: "👔" },
            { key: "dress", label: "Dresses", emoji: "👗" },
            
          ].map(({ key, label, emoji }) => (
            <button
              key={key}
              onClick={() => setCategory(key)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 ${
                category === key
                  ? "bg-linear-to-br from-[#1b8ab3] to-[#0a1b24] text-white shadow-lg ring-4 ring-purple-300"
                  : "bg-white/80 backdrop-blur-sm text-cyan-700 border-2 border-purple-200 hover:border-purple-400 hover:bg-purple-50"
              }`}
            >
              {emoji} {label}
            </button>
          ))}
        </div>

        {/* Main content */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Preview area */}
          <div className="flex justify-center">
            <div className={`relative w-full max-w-sm h-auto aspect-[5/6] bg-white/90 backdrop-blur-sm shadow-2xl rounded-3xl overflow-hidden border-4 border-white/50 ${animationClass}`}>
              {generatedImage ? (
                <img src={generatedImage} alt="Generated Try-On" className="w-full h-full object-contain" />
              ) : (
                <>
                  {userPhoto && (
                    <img src={userPhoto} alt="User" className="w-full h-full object-cover" />
                  )}
                  {selectedOutfit && (
                    <div
                      className="absolute cursor-move transition-all duration-200"
                      style={{
                        left: '60px',
                        top: '80px',
                        width: '180px',
                        height: '250px',
                      }}
                      draggable
                      onDragStart={(e) => {
                        e.dataTransfer.setData('text/plain', '');
                      }}
                      onDrag={(e) => {
                        if (e.clientX && e.clientY) {
                          const rect = e.currentTarget.parentElement.getBoundingClientRect();
                          const x = e.clientX - rect.left - 90; // center the image
                          const y = e.clientY - rect.top - 125; // center the image
                          e.currentTarget.style.left = `${Math.max(0, Math.min(x, rect.width - 180))}px`;
                          e.currentTarget.style.top = `${Math.max(0, Math.min(y, rect.height - 250))}px`;
                        }
                      }}
                    >
                      <img
                        src={selectedOutfit}
                        alt="Outfit"
                        className="w-full h-full object-contain opacity-90 mix-blend-multiply shadow-lg transition-transform duration-300 hover:scale-105"
                      />
                    </div>
                  )}
                </>
              )}

              {/* Loading overlay */}
              {loading && (
                <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                  <div className="text-center text-white">
                    <div className="loading-spinner mx-auto mb-4"></div>
                    <p className="text-lg font-semibold">Generating...</p>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Controls */}
          <div className="space-y-6">
            {/* Outfit name + controls */}
            {selectedOutfitName && (
              <div className="text-center">
                <h3 className="text-2xl font-bold text-white mb-2 drop-shadow-lg">
                  {selectedOutfitName}
                </h3>
              </div>
            )}

            {/* Action buttons */}
            <div className="flex flex-col gap-4">
              {selectedOutfit && (
                <>
                  <button
                    onClick={() => animateButton(handleReset)}
                    className={`btn-secondary w-full hover:scale-110 hover:rotate-1 ${buttonAnimating ? 'animate-pulse' : ''}`}
                  >
                    🔄 Reset Outfit
                  </button>
                  <button
                    onClick={() => animateButton(generateRealisticTryOn)}
                    disabled={loading}
                    className={`btn-primary w-full hover:scale-110 hover:rotate-1 ${buttonAnimating ? 'animate-pulse' : ''}`}
                  >
                    {loading ? (
                      <>
                        <div className="loading-spinner mr-2"></div>
                        Generating...
                      </>
                    ) : (
                      <>✨ Generate Realistic Try-On</>
                    )}
                  </button>
                  {(generatedImage || userPhoto) && (
                    <button
                      onClick={() => animateButton(handleSave)}
                      className={`btn-secondary w-full hover:scale-110 hover:rotate-1 ${buttonAnimating ? 'animate-pulse' : ''}`}
                    >
                      💾 Save Image
                    </button>
                  )}
                </>
              )}
            </div>

            {/* Instructions */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <h4 className="text-white font-semibold mb-3 flex items-center">
                <span className="text-2xl mr-2">💡</span>
                How to Use
              </h4>
              <ul className="text-purple-100 space-y-2 text-sm">
                <li>• Upload your photo by dragging & dropping or clicking</li>
                <li>• Select a category and choose an outfit</li>
                <li>• Drag the outfit around on your photo to position it</li>
                <li>• Use the corners to resize the outfit</li>
                <li>• Click "Generate Realistic Try-On" for AI magic!</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Outfit catalog */}
        <div className="mt-12">
          <h3 className="text-3xl font-bold text-white text-center mb-8 drop-shadow-lg">
            Choose Your Style
          </h3>
          <OutfitCatalog
            outfits={filteredOutfits}
            onSelect={(image) => {
              const outfit = outfits.find(o => o.image === image);
              handleOutfitSelect(image, outfit?.name || "");
            }}
          />
        </div>
      </div>
    </div>
  );
}
