
import React, { useEffect, useState, useMemo } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { products } from "./Kurtis/ProductPage.jsx";
import { comparisonData } from "./Kurtis/comparisonData.jsx";
import VoiceAssistant from "../Components/VoiceAssistant";

/**
 * KurtaDetails.jsx
 *
 * Updated ProductDetailsModal to populate its content from item.details
 * (the products array you provided). The modal shows:
 * - Key attributes (materialComposition, length, sleeveType, neckStyle, style, materialType, countryOfOrigin)
 * - About this item (mapped from details.aboutItem array)
 * - Additional Information (mapped from details.additionalInfo)
 *
 * Usage:
 * - Click the "Product Details" button to open the modal populated from the selected product's details.
 * - If a product doesn't include details, the modal will show appropriate fallbacks.
 *
 * Accessibility & UX:
 * - body scroll locked while modal is open
 * - Escape closes modals
 * - modal is scrollable if content exceeds viewport (max-h)
 */

function ProductDetailsModal({ open, onClose, item }) {
  useEffect(() => {
    if (open) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    function onKey(e) {
      if (e.key === "Escape" && open) onClose();
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  if (!open) return null;

  const details = item?.details ?? {};
  const about = Array.isArray(details.aboutItem) ? details.aboutItem : [];
  const info = details.additionalInfo ?? {};

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={`Product details for ${item?.title ?? "product"}`}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-lg max-w-3xl w-full p-6 overflow-auto max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-start justify-between gap-4">
          <h3 className="text-xl font-semibold">Product details</h3>
          <button
            onClick={onClose}
            aria-label="Close product details"
            className="text-gray-600 hover:text-gray-900"
          >
            ✕
          </button>
        </div>

        <div className="mt-4 text-sm space-y-5">
          <section>
            <h4 className="font-medium">Key attributes</h4>
            <ul className="list-disc ml-5 mt-2">
              <li>
                Material composition:{" "}
                <span className="font-medium">{details.materialComposition ?? "—"}</span>
              </li>
              <li>
                Length: <span className="font-medium">{details.length ?? "—"}</span>
              </li>
              <li>
                Sleeve type: <span className="font-medium">{details.sleeveType ?? "—"}</span>
              </li>
              <li>
                Neck style: <span className="font-medium">{details.neckStyle ?? "—"}</span>
              </li>
              <li>
                Style: <span className="font-medium">{details.style ?? "—"}</span>
              </li>
              <li>
                Material type: <span className="font-medium">{details.materialType ?? "—"}</span>
              </li>
              <li>
                Country of Origin: <span className="font-medium">{details.countryOfOrigin ?? "—"}</span>
              </li>
            </ul>
          </section>

          <section>
            <h4 className="font-medium">About this item</h4>
            <div className="mt-2 space-y-2">
              {about.length > 0 ? (
                about.map((line, i) => (
                  <p key={i} className="text-gray-700">
                    {line}
                  </p>
                ))
              ) : (
                <p className="text-gray-600">No additional description available.</p>
              )}
            </div>
          </section>

          <section>
            <h4 className="font-medium">Size details (quick)</h4>
            <div className="mt-2 text-gray-700">
              {/* Attempt to extract common numbers from about or show fallback */}
              {/* We keep this simple: render any 'kurta length' / 'sleeves' lines if present */}
              {about.length > 0 ? (
                about
                  .filter((l) =>
                    /kurta length|kurta sleeves|kurta bust|dupatta length|pant waist|pant length|pant hip/i.test(
                      l
                    )
                  )
                  .map((line, i) => (
                    <p key={i} className="text-gray-700">
                      {line}
                    </p>
                  ))
              ) : (
                <p className="text-gray-600">Size details not available.</p>
              )}
            </div>
          </section>

          <section>
            <h4 className="font-medium">Additional Information</h4>
            <ul className="list-disc ml-5 mt-2">
              <li>Manufacturer: <span className="font-medium">{info.manufacturer ?? "—"}</span></li>
              <li>Packer: <span className="font-medium">{info.packer ?? "—"}</span></li>
              <li>Importer: <span className="font-medium">{info.importer ?? "—"}</span></li>
              <li>Item Weight: <span className="font-medium">{info.itemWeight ?? "—"}</span></li>
              <li>Item Dimensions: <span className="font-medium">{info.dimensions ?? "—"}</span></li>
              <li>Net Quantity: <span className="font-medium">{info.netQuantity ?? "—"}</span></li>
              <li>Generic Name: <span className="font-medium">{info.genericName ?? "—"}</span></li>
            </ul>
          </section>

          <section>
            <h4 className="font-medium">Product reference</h4>
            <p className="mt-2 text-xs text-gray-600">Title: {item?.title ?? "—"}</p>
            <p className="mt-1 text-xs text-gray-600">Brand: {item?.brand ?? "—"}</p>
            <p className="mt-1 text-xs text-gray-600">SKU / ID: {item?.id ?? "—"}</p>
          </section>
        </div>

        <div className="mt-6 text-right">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-teal-600 text-white rounded hover:bg-teal-700"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

function SizeChartModal({ open, onClose }) {
  useEffect(() => {
    if (open) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    function onKey(e) {
      if (e.key === "Escape" && open) onClose();
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  if (!open) return null;
  return (
    <div role="dialog" aria-modal="true" className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4" onClick={onClose}>
      <div className="bg-white rounded-lg max-w-lg w-full p-6" onClick={(e) => e.stopPropagation()}>
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold">Size Chart</h3>
          <button onClick={onClose} className="text-gray-600 hover:text-gray-900" aria-label="Close size chart">✕</button>
        </div>
        <div className="mt-4 text-sm">
          <table className="w-full text-left">
            <thead>
              <tr className="text-xs text-gray-500">
                <th className="py-2">Size</th>
                <th className="py-2">Bust (in)</th>
                <th className="py-2">Waist (in)</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t">
                <td className="py-2">S</td>
                <td className="py-2">32</td>
                <td className="py-2">26</td>
              </tr>
              <tr className="border-t">
                <td className="py-2">M</td>
                <td className="py-2">34</td>
                <td className="py-2">28</td>
              </tr>
              <tr className="border-t">
                <td className="py-2">L</td>
                <td className="py-2">36</td>
                <td className="py-2">30</td>
              </tr>
              <tr className="border-t">
                <td className="py-2">XL</td>
                <td className="py-2">38</td>
                <td className="py-2">32</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="mt-4 text-right">
          <button onClick={onClose} className="px-4 py-2 bg-teal-600 text-white rounded hover:bg-teal-700">Close</button>
        </div>
      </div>
    </div>
  );
}

function RatingBreakdown({ rating = 0, ratingCount = 0 }) {
  const breakdownPercent = (() => {
    const base = [0.55, 0.2, 0.12, 0.08, 0.05];
    const factor = Math.max(0, Math.min(1, (rating - 1) / 4));
    const adjusted = base.map((b, i) => {
      const boost = i === 0 ? 0.2 * factor : i === 1 ? 0.08 * factor : 0;
      return Math.max(0, b + boost);
    });
    const s = adjusted.reduce((a, b) => a + b, 0);
    return adjusted.map((a) => Math.round((a / s) * 100));
  })();

  return (
    <div className="flex gap-6 items-start">
      <div className="flex-shrink-0">
        <div className="text-3xl font-bold">
          {rating.toFixed(1)}
          <span className="text-teal-600">★</span>
        </div>
        <div className="text-xs text-gray-500">{ratingCount}+ Verified Buyers</div>
      </div>

      <div className="flex-1 space-y-2">
        {[5, 4, 3, 2, 1].map((star, idx) => (
          <div key={star} className="flex items-center gap-3 text-xs">
            <div className="w-6">{star}★</div>
            <div className="h-2 rounded bg-gray-200 flex-1 overflow-hidden">
              <div className="h-2 rounded bg-green-400" style={{ width: `${breakdownPercent[idx]}%` }} aria-hidden />
            </div>
            <div className="w-10 text-right text-sm text-gray-600">{breakdownPercent[idx]}%</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function KurtaDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const item = useMemo(() => products.find((p) => p.id === Number(id)), [id]);

  const [mainImg, setMainImg] = useState(() => item?.images?.[0] ?? item?.img ?? "");
  const [selectedColor, setSelectedColor] = useState(() => item?.colors?.[0]?.name ?? null);
  const [selectedSize, setSelectedSize] = useState(null);
  const [qty, setQty] = useState(1);
  const [sizeChartOpen, setSizeChartOpen] = useState(false);
  const [productDetailsOpen, setProductDetailsOpen] = useState(false);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  useEffect(() => {
    setMainImg(item?.images?.[0] ?? item?.img ?? "");
    setSelectedColor(item?.colors?.[0]?.name ?? item?.colors?.[0] ?? null);
    setSelectedSize(null);
    setQty(1);
  }, [item]);

  useEffect(() => {
    function onKey(e) {
      if (e.key === "Escape") {
        if (lightboxOpen) setLightboxOpen(false);
        if (sizeChartOpen) setSizeChartOpen(false);
        if (productDetailsOpen) setProductDetailsOpen(false);
      }
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [lightboxOpen, sizeChartOpen, productDetailsOpen]);

  if (!item) return <h2 className="text-center mt-20">Product not found!</h2>;

  const percentOff =
    item.oldPrice && item.price
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
            <div className="md:col-span-6 flex gap-6">
              <div className="flex flex-col gap-3">
                {(item.images ?? [item.img]).slice(0, 5).map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setMainImg(img)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") {
                        e.preventDefault();
                        setMainImg(img);
                      }
                    }}
                    className={`w-24 h-36 overflow-hidden rounded-md border-2 flex-shrink-0 focus:outline-none focus:ring-2 ${
                      mainImg === img ? "ring-2 ring-white ring-offset-2 ring-offset-[#eaf6f8] border-white" : "border-gray-200"
                    }`}
                    aria-label={`Select image ${idx + 1}`}
                  >
                    <img src={img} alt={`${item.title} ${idx + 1}`} className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>

              <div className="flex-1">
                <button
                  onClick={() => setLightboxOpen(true)}
                  className="block w-full h-[610px] rounded-md overflow-hidden bg-white border"
                  aria-label="Open image in lightbox"
                >
                  <img src={mainImg} alt={item.title} className="w-full h-full object-contain" />
                </button>

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

            <div className="md:col-span-6">
              <div className="max-w-lg">
                <div className="text-sm text-gray-600 mb-1">{item.brand ?? "Brand"}</div>

                <h1 className="text-4xl font-serif leading-tight mb-3">{item.title}</h1>

                <p className="text-gray-700 text-2xl mb-3">{item.description ?? item.about ?? ""}</p>

                <div className="flex items-center gap-3 mb-4">
                  <div className="px-3 py-1 bg-white border rounded">4.5 ★ | {item.rating ?? 0} Ratings</div>
                </div>

                <div className="mb-4">
                  <div className="text-3xl font-bold">₹{item.price?.toString().replace(/[₹, ]/g, "") ? item.price : item.price}</div>
                  {item.oldPrice && (
                    <div className="text-sm text-gray-500">
                      <span className="line-through mr-2">MRP {item.oldPrice}</span>
                      <span className="text-red-500 text-xl">{item.discount ?? `${percentOff}% off`}</span>
                    </div>
                  )}
                  <div className="text-sm text-green-600 mt-1">inclusive of all taxes</div>
                </div>

                <div className="mb-4">
                  <h4 className="text-sm font-medium text-gray-600 mb-2">MORE COLORS</h4>
                  <div className="flex gap-3 items-center">
                    {(item.colors && item.colors.length > 0 ? item.colors : [{ name: "cyan", hex: "#2b7a78" }, { name: "red", hex: "#E4080A" }, { name: "blue", hex: "#274B93" }, { name: "purple", hex: "#6B2793" }]).map((c, idx) => (
                      <button
                        key={idx}
                        onClick={() => setSelectedColor(c.name)}
                        className={`w-8 h-8 rounded-full border-2 cursor-pointer focus:outline-none ${selectedColor === c.name ? "ring-2 ring-offset-1 ring-[#296b7a]" : "border-gray-200"}`}
                        style={{ background: c.hex }}
                        aria-label={`Select color ${c.name}`}
                        title={c.name}
                      />
                    ))}
                  </div>
                </div>

                <div className="mb-4">
                  <div className="flex items-center justify-between">
                    <h4 className="text-sm font-medium text-gray-600">SELECT SIZE</h4>
                    <button onClick={() => setSizeChartOpen(true)} className="text-pink-500 cursor-pointer text-sm">
                      SIZE CHART &gt;
                    </button>
                  </div>

                  <div className="flex gap-3 mt-3">
                    {(item.sizes && item.sizes.length > 0 ? item.sizes : ["S", "M", "L"]).map((s) => (
                      <button
                        key={s}
                        onClick={() => setSelectedSize(s)}
                        className={`px-3 py-1 rounded-full border-2 cursor-pointer focus:outline-none ${selectedSize === s ? "bg-white text-black ring-2 ring-offset-1 ring-[#6f98a8]" : "bg-gray-100 text-gray-700"}`}
                        aria-pressed={selectedSize === s}
                        aria-label={`Select size ${s}`}
                      >
                        {s}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="mb-6">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center border rounded">
                      <button onClick={() => toggleQty(-1)} className="px-3 py-2" aria-label="Decrease quantity">−</button>
                      <div className="px-4" aria-live="polite">{qty}</div>
                      <button onClick={() => toggleQty(1)} className="px-3 py-2" aria-label="Increase quantity">+</button>
                    </div>

                    <button onClick={addToCart} className="flex items-center gap-2 bg-[#0e7387] hover:bg-[#0b607e] hover:scale-105 text-white px-4 py-2 rounded shadow" aria-label="Add to cart">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden>
                        <path d="M6 6h15l-1.5 9h-12z" stroke="white" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M6 6L4 2H2" stroke="white" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      ADD TO CART
                    </button>
                  </div>

                  {!selectedSize && <div className="text-xs text-red-500 mt-2">Please select a size</div>}
                </div>

                <div className="mb-6">
                  <RatingBreakdown rating={item.rating ?? 0} ratingCount={item.ratingCount ?? 0} />
                </div>
                     {/* Quality Comparison Box */}
<div className="  mt-8 bg-white shadow-md rounded-xl p-5
    transform transition duration-700 ease-out hover:scale-105 hover:shadow-lg">
  <h2 className="text-xl font-semibold mb-4 animate-fadeIn">
    Quality Comparison With Other Websites
  </h2>

  {comparisonData[id] ? (
    <div className="flex gap-5 text-center justify-center flex-nowrap">
      <div className="flex-1 border rounded-xl p-3 shadow-sm animate-slideInUp">
        <h3 className="font-bold text-lg">Our Product</h3>
        <p className="text-gray-700">{item.price}</p>
        <p className="text-gray-700">{item.details?.materialType || "Premium Fabric"}</p>
        <p className="text-gray-700">{item.rating}★</p>
      </div>

      {Object.entries(comparisonData[id].competitors).map(([site, info]) => (
        <div key={site} className="flex-1 border rounded-xl p-3 shadow-sm animate-slideInUp">
          <h3 className="font-bold text-lg">{site}</h3>
          <p className="text-gray-700">{info.price}</p>
          <p className="text-gray-700">{info.fabric}</p>
          <p className="text-gray-700">{info.rating}</p>
        </div>
      ))}
    </div>
  ) : (
    <p>No comparison available for this product.</p>
  )}
</div>
  
                <div>
                  <button onClick={() => navigate(-1)} className="mt-2 px-4 py-2 bg-white border rounded hover:bg-gray-50">Back</button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <SizeChartModal open={sizeChartOpen} onClose={() => setSizeChartOpen(false)} />
        <ProductDetailsModal open={productDetailsOpen} onClose={() => setProductDetailsOpen(false)} item={item} />

        {lightboxOpen && (
          <div
            role="dialog"
            aria-modal="true"
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-6"
            onClick={() => setLightboxOpen(false)}
          >
            <div className="bg-white rounded-md overflow-hidden max-w-3xl w-full" onClick={(e) => e.stopPropagation()}>
              <div className="flex items-center justify-end p-2">
                <button onClick={() => setLightboxOpen(false)} className="text-gray-600 px-3">Close</button>
              </div>
              <div className="p-4">
                <img src={mainImg} alt={`${item.title} large`} className="w-full h-[600px] object-contain" />
              </div>
            </div>
          </div>
        )}
        <div className="animate-pulse text-teal-600">
          <VoiceAssistant product={item} />
        </div>
      </div>
    </div>
  );
}