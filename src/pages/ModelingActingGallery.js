import React from "react";

export default function ModelingActingGallery() {
  const images = [
    "/photo1.jpg",
    "/photo2.jpg",
    "/photo3.jpg"
  ];
  return (
    <div className="min-h-screen bg-white py-16 px-4">
      <h1 className="text-4xl font-bold text-gray-900 text-center mb-12">Modeling &amp; Acting Gallery</h1>
      <div className="flex flex-col gap-12 max-w-3xl mx-auto">
        {images.map((img, idx) => (
          <img
            key={idx}
            src={img}
            alt={`Gallery ${idx + 1}`}
            className="w-full rounded-xl shadow-2xl object-cover border-4 border-white"
          />
        ))}
      </div>
    </div>
  );
}
