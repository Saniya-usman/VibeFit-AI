import React, { useEffect } from "react";

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

export default ProductDetailsModal;
