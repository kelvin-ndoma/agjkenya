import React, { useState } from "react";

const Gallery = () => {
  const imageCount = 24;
  const images = Array.from({ length: imageCount }, (_, i) => `/src/gallery/${i + 1}.jpg`);
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-6 text-center">Image Gallery</h2>

      {/* Responsive Grid: 1 col on small, 4 cols on large */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
        {images.map((src, index) => (
          <div
            key={index}
            className="aspect-square bg-gray-100 flex items-center justify-center rounded-2xl shadow-md cursor-pointer hover:scale-105 transition-transform duration-300"
            onClick={() => setSelectedImage(src)}
          >
            <img
              src={src}
              alt={`Gallery image ${index + 1}`}
              className="w-full h-full object-contain rounded-xl"
            />
          </div>
        ))}
      </div>

      {/* Modal for Zoom */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 px-4"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="relative max-w-6xl w-full max-h-[90vh] mx-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedImage}
              alt="Zoomed"
              className="w-full h-auto max-h-[90vh] object-contain rounded-xl"
            />
            <button
              className="absolute top-3 right-3 text-white text-4xl font-bold bg-black bg-opacity-50 rounded-full px-3 hover:bg-opacity-75 transition"
              onClick={() => setSelectedImage(null)}
            >
              &times;
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
