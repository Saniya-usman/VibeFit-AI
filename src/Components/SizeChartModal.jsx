import React, { useEffect } from "react";

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

export default SizeChartModal;
