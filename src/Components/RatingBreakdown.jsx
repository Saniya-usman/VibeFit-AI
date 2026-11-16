import React from "react";

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
          {rating.toFixed(1)} <span className="text-teal-600">★</span>
        </div>
        <div className="text-xs text-gray-500">{ratingCount}+ Verified Buyers</div>
      </div>
      <div className="flex-1 space-y-2">
        {[5, 4, 3, 2, 1].map((star, idx) => (
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

export default RatingBreakdown;
