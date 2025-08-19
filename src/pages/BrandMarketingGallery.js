import React from "react";

export default function BrandMarketingGallery() {
  const images = [
    "https://via.placeholder.com/800x1000?text=Brand+1",
    "https://via.placeholder.com/800x1000?text=Brand+2",
    "https://via.placeholder.com/800x1000?text=Brand+3"
  ];
  return (
    <div className="min-h-screen bg-white py-16 px-4">
      <h1 className="text-4xl font-bold text-gray-900 text-center mb-12">Brand Marketing Gallery</h1>
      <div className="flex flex-col gap-12 max-w-3xl mx-auto">
        {images.map((img, idx) => (
          <img
            key={idx}
            src={img}
            alt={`Brand Gallery ${idx + 1}`}
            className="w-full rounded-xl shadow-2xl object-cover border-4 border-white"
          />
        ))}
      </div>
    </div>
  );
}
