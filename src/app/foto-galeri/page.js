"use client";
import { useState } from "react";
import Navbar from "../components/Navbar";

const images = [
  "/(1).jpeg",
  "/(3).jpeg",
  "/(4).jpeg",
  "/(5).jpeg",
  "/(6).jpeg",
  "/(7).jpeg",
  "/(8).jpeg",
];

export default function PhotoGaleri() {
  const [selectedImg, setSelectedImg] = useState(null);

  return (
    <>
       <Navbar />
      <main className="min-h-screen bg-gray-900 text-white p-8">
        <h1 className="text-3xl font-bold mb-8 text-center">Foto Galeri</h1>

        {/* Küçük fotoğraflar grid */}
        <div className="grid grid-cols-3 gap-4 max-w-4xl mx-auto">
          {images.map((src, i) => (
            <img
              key={i}
              src={src}
              alt={`Fotoğraf ${i + 1}`}
              className="cursor-pointer rounded-md shadow-md hover:scale-105 transition-transform duration-300 w-[250px] h-[200px] object-cover"
              onClick={() => setSelectedImg(src)}
              loading="lazy"
            />
          ))}
        </div>

        {/* Modal - Büyük fotoğraf */}
        {selectedImg && (
          <div
            className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50"
            onClick={() => setSelectedImg(null)}
          >
            <img
              src={selectedImg}
              alt="Büyük fotoğraf"
              className="max-h-[90vh] max-w-[90vw] rounded-lg shadow-lg"
              onClick={(e) => e.stopPropagation()}
            />
            <button
              onClick={() => setSelectedImg(null)}
              className="absolute top-4 right-4 text-white text-3xl font-bold bg-black bg-opacity-50 rounded-full px-3 hover:bg-opacity-80"
              aria-label="Kapat"
            >
              &times;
            </button>
          </div>
        )}
      </main>
    </>
  );
}
