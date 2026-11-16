import React, { useEffect, useState, useMemo } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { tshirt } from "./MenstshirtPage.jsx";   // <-- your jeans data file
import { comparisonData } from "./MenstshirtComparisonData.jsx"; // competitor data for shirts
import VoiceAssistant from "../Components/VoiceAssistant";

// ---------- Product Details Modal ----------
function ProductDetailsModal({ open, onClose, item }) {
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  useEffect(() => {
    function onKey(e) { if (e.key === "Escape" && open) onClose(); }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  if (!open) return null;

  const details = item?.details ?? {};
  const about = Array.isArray(details.aboutItem) ? details.aboutItem : [];
  const info = details.additionalInfo ?? {};

  return (
    <div role="dialog" aria-modal="true" className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4" onClick={onClose}>
      <div className="bg-white rounded-lg max-w-3xl w-full p-6 overflow-auto max-h-[90vh]" onClick={(e) => e.stopPropagation()}>
        <div className="flex items-start justify-between">
          <h3 className="text-xl font-semibold">Product details</h3>
          <button onClick={onClose} className="text-gray-600 hover:text-gray-900">✕</button>
        </div>

        <div className="mt-4 text-sm space-y-5">
          <section>
            <h4 className="font-medium">Key attributes</h4>
            <ul className="list-disc ml-5 mt-2">
              <li>Material composition: <span className="font-medium">{details.materialComposition ?? "—"}</span></li>
              <li>Sleeve type: <span className="font-medium">{details.sleeveType ?? "—"}</span></li>
              <li>Neck style: <span className="font-medium">{details.neckStyle ?? "—"}</span></li>
              <li>Style: <span className="font-medium">{details.style ?? "—"}</span></li>
              <li>Country of Origin: <span className="font-medium">{details.countryOfOrigin ?? "—"}</span></li>
            </ul>
          </section>

          <section>
            <h4 className="font-medium">About this item</h4>
            <div className="mt-2 space-y-2">
              {about.length > 0 ? about.map((line, i) => <p key={i} className="text-gray-700">{line}</p>) : <p className="text-gray-600">No description available.</p>}
            </div>
          </section>

          <section>
            <h4 className="font-medium">Additional Information</h4>
            <ul className="list-disc ml-5 mt-2">
              <li>Manufacturer: <span className="font-medium">{info.manufacturer ?? "—"}</span></li>
              <li>Item Weight: <span className="font-medium">{info.itemWeight ?? "—"}</span></li>
              <li>Dimensions: <span className="font-medium">{info.dimensions ?? "—"}</span></li>
              <li>Net Quantity: <span className="font-medium">{info.netQuantity ?? "—"}</span></li>
              <li>Generic Name: <span className="font-medium">{info.genericName ?? "—"}</span></li>
            </ul>
          </section>
        </div>

        <div className="mt-6 text-right">
          <button onClick={onClose} className="px-4 py-2 bg-teal-600 text-white rounded hover:bg-teal-700">Close</button>
        </div>
      </div>
    </div>
  );
}

// ---------- Size Chart Modal ----------
function SizeChartModal({ open, onClose }) {
  if (!open) return null;
  return (
    <div role="dialog" aria-modal="true" className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4" onClick={onClose}>
      <div className="bg-white rounded-lg max-w-lg w-full p-6" onClick={(e) => e.stopPropagation()}>
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold">Size Chart</h3>
          <button onClick={onClose} className="text-gray-600 hover:text-gray-900">✕</button>
        </div>
        <div className="mt-4 text-sm">
          <table className="w-full text-left">
            <thead>
              <tr className="text-xs text-gray-500">
                <th className="py-2">Size</th>
                <th className="py-2">Chest (in)</th>
                <th className="py-2">Waist (in)</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t"><td>S</td><td>38</td><td>30</td></tr>
              <tr className="border-t"><td>M</td><td>40</td><td>32</td></tr>
              <tr className="border-t"><td>L</td><td>42</td><td>34</td></tr>
              <tr className="border-t"><td>XL</td><td>44</td><td>36</td></tr>
            </tbody>
          </table>
        </div>
        <div className="mt-4 text-right">
          <button onClick={onClose} className="px-4 py-2 bg-teal-600 text-white rounded">Close</button>
        </div>
      </div>
    </div>
  );
}

// ---------- Rating Breakdown ----------
function RatingBreakdown({ rating = 0, ratingCount = 0 }) {
  const breakdownPercent = [60, 20, 10, 6, 4]; // simple static distribution
  return (
    <div className="flex gap-6 items-start">
      <div className="flex-shrink-0">
        <div className="text-3xl font-bold">{rating.toFixed(1)}<span className="text-teal-600">★</span></div>
        <div className="text-xs text-gray-500">{ratingCount}+ Verified Buyers</div>
      </div>
      <div className="flex-1 space-y-2">
        {[5,4,3,2,1].map((star, idx) => (
          <div key={star} className="flex items-center gap-3 text-xs">
            <div className="w-6">{star}★</div>
            <div className="h-2 rounded bg-gray-200 flex-1 overflow-hidden">
              <div className="h-2 rounded bg-green-400" style={{ width: `${breakdownPercent[idx]}%` }} />
            </div>
            <div className="w-10 text-right text-sm text-gray-600">{breakdownPercent[idx]}%</div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ---------- Main ShirtDetails ----------
export default function ShirtDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const item = useMemo(() => tshirt.find((p) => p.id === Number(id)), [id]);

  const [mainImg, setMainImg] = useState(item?.images?.[0] ?? item?.img ?? "");
  const [selectedColor, setSelectedColor] = useState(null);
  const [selectedSize, setSelectedSize] = useState(null);
  const [qty, setQty] = useState(1);
  const [sizeChartOpen, setSizeChartOpen] = useState(false);
  const [productDetailsOpen, setProductDetailsOpen] = useState(false);

  if (!item) return <h2 className="text-center mt-20">Product not found!</h2>;

  const percentOff = item.oldPrice && item.price
    ? Math.round(((Number(item.oldPrice.replace(/[^\d]/g, "")) - Number(item.price.replace(/[^\d]/g, ""))) / Number(item.oldPrice.replace(/[^\d]/g, ""))) * 100)
    : 0;

  function addToCart() {
    if (!selectedSize) {
      alert("Please select a size before adding to cart.");
      return;
    }
    const cart = JSON.parse(localStorage.getItem("cart") || "[]");
    cart.push({
      id: item.id,
      title: item.title,
      price: item.price,
      size: selectedSize,
      color: selectedColor,
      qty,
    });
    localStorage.setItem("cart", JSON.stringify(cart));
    alert(`Added ${qty} × ${item.title} (${selectedSize}) to cart`);
  }

  function toggleQty(delta) {
    setQty((q) => Math.max(1, q + delta));
  }

  return (
    <div className="w-full relative h-full bg-sky-200">
      <div className="w-full h-full bg-[#e6f3f6] rounded-2xl shadow-lg">
        <div className="p-8">
          <div className="grid mt-9 grid-cols-1 md:grid-cols-12 gap-6">
            {/* Left side: images */}
            <div className="md:col-span-6 flex gap-6">
              <div className="flex flex-col gap-3">
                {(item.images ?? [item.img]).slice(0, 5).map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setMainImg(img)}
                    className={`w-24 h-36 overflow-hidden rounded-md border-2 flex-shrink-0 ${
                      mainImg === img
                        ? "ring-2 ring-white ring-offset-2 ring-offset-[#eaf6f8] border-white"
                        : "border-gray-200"
                    }`}
                  >
                    <img
                      src={img}
                      alt={`${item.title} ${idx + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>

              <div className="flex-1">
                <div className="block w-full h-[610px] rounded-md overflow-hidden bg-white border">
                  <img
                    src={mainImg}
                    alt={item.title}
                    className="w-full h-full object-contain"
                  />
                </div>

                <div className="mt-6 flex items-start gap-4">
                  <button
                    onClick={() => setProductDetailsOpen(true)}
                    className="bg-cyan-700 hover:scale-110 text-white px-4 py-2 cursor-pointer rounded-md shadow-2xl"
                  >
                    Product Details
                  </button>
                </div>
              </div>
            </div>

            {/* Right side: details */}
            <div className="md:col-span-6">
              <div className="max-w-lg">
                <h1 className="text-4xl font-serif leading-tight mb-3">
                  {item.title}
                </h1>

                <p className="text-gray-700 text-lg mb-3">
                  {item.description}
                </p>

                <div className="flex items-center gap-3 mb-4">
                  <div className="px-3 py-1 bg-white border rounded">
                    {item.rating} ★ Ratings
                  </div>
                </div>

                <div className="mb-4">
                  <div className="text-3xl font-bold">{item.price}</div>
                  {item.oldPrice && (
                    <div className="text-sm text-gray-500">
                      <span className="line-through mr-2">MRP {item.oldPrice}</span>
                      <span className="text-red-500 text-xl">
                        {item.discount ?? `${percentOff}% off`}
                      </span>
                    </div>
                  )}
                  <div className="text-sm text-green-600 mt-1">
                    inclusive of all taxes
                  </div>
                </div>

                {/* Sizes */}
                <div className="mb-4">
                  <div className="flex items-center justify-between">
                    <h4 className="text-sm font-medium text-gray-600">
                      SELECT SIZE
                    </h4>
                    <button
                      onClick={() => setSizeChartOpen(true)}
                      className="text-pink-500 cursor-pointer text-sm"
                    >
                      SIZE CHART &gt;
                    </button>
                  </div>

                  <div className="flex gap-3 mt-3">
                    {(item.sizes && item.sizes.length > 0
                      ? item.sizes
                      : ["S", "M", "L", "XL"]
                    ).map((s) => (
                      <button
                        key={s}
                        onClick={() => setSelectedSize(s)}
                        className={`px-3 py-1 rounded-full border-2 cursor-pointer ${
                          selectedSize === s
                            ? "bg-white text-black ring-2 ring-offset-1 ring-[#6f98a8]"
                            : "bg-gray-100 text-gray-700"
                        }`}
                      >
                        {s}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Quantity + Add to cart */}
                <div className="mb-6">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center border rounded">
                      <button
                        onClick={() => toggleQty(-1)}
                        className="px-3 py-2"
                      >
                        −
                      </button>
                      <div className="px-4">{qty}</div>
                      <button
                        onClick={() => toggleQty(1)}
                        className="px-3 py-2"
                      >
                        +
                      </button>
                    </div>

                    <button
                      onClick={addToCart}
                      className="flex items-center gap-2 bg-[#0e7387] hover:bg-[#0b607e] hover:scale-105 text-white px-4 py-2 rounded shadow"
                    >
                      ADD TO CART
                    </button>
                  </div>

                  {!selectedSize && (
                    <div className="text-xs text-red-500 mt-2">
                      Please select a size
                    </div>
                  )}
                </div>

                {/* Rating breakdown */}
                <div className="mb-6">
                  <RatingBreakdown
                    rating={item.rating ?? 0}
                    ratingCount={item.ratingCount ?? 0}
                  />
                </div>

                {/* Comparison box */}
                <div className="mt-8 bg-white shadow-md rounded-xl p-5 hover:scale-105 transition">
                  <h2 className="text-xl font-semibold mb-4">
                    Quality Comparison With Other Websites
                  </h2>

                  {comparisonData[id] ? (
                    <div className="flex gap-5 text-center justify-center flex-nowrap">
                      <div className="flex-1 border rounded-xl p-3 shadow-sm">
                        <h3 className="font-bold text-lg">Our Product</h3>
                        <p className="text-gray-700">{item.price}</p>
                        <p className="text-gray-700">
                          {item.details?.materialComposition || "Premium Fabric"}
                        </p>
                        <p className="text-gray-700">{item.rating}★</p>
                      </div>

                      {Object.entries(comparisonData[id].competitors).map(
                        ([site, info]) => (
                          <div
                            key={site}
                            className="flex-1 border rounded-xl p-3 shadow-sm"
                          >
                            <h3 className="font-bold text-lg">{site}</h3>
                            <p className="text-gray-700">{info.price}</p>
                            <p className="text-gray-700">{info.fabric}</p>
                            <p className="text-gray-700">{info.rating}</p>
                          </div>
                        )
                      )}
                    </div>
                  ) : (
                    <p>No comparison available for this product.</p>
                  )}
                </div>

                <div>
                  <button
                    onClick={() => navigate(-1)}
                    className="mt-2 px-4 py-2 bg-white border rounded hover:bg-gray-50"
                  >
                    Back
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Modals */}
        <SizeChartModal
          open={sizeChartOpen}
          onClose={() => setSizeChartOpen(false)}
        />
        <ProductDetailsModal
          open={productDetailsOpen}
          onClose={() => setProductDetailsOpen(false)}
          item={item}
        />

        {/* Voice Assistant */}
        <div className="animate-pulse text-teal-600">
          <VoiceAssistant product={item} />
        </div>
      </div>
    </div>
  );
}
