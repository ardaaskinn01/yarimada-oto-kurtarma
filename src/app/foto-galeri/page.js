"use client";
import { useState } from "react";
import Navbar from "../components/Navbar";
import Image from "next/image";
import Head from "next/head";

const images = [
  "/(1).jpeg",
  "/(3).jpeg",
  "/(4).jpeg",
  "/(5).jpeg",
  "/(6).jpeg",
  "/(7).jpeg",
  "/(8).jpeg",
  "/11.jpg",
  "/12.jpg"
];

export default function PhotoGaleri() {
  const [selectedImg, setSelectedImg] = useState(null);

  return (
    <>
        <Head>
        <script async src="https://www.googletagmanager.com/gtag/js?id=AM-17178419606" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'AM-17178419606');
            `,
          }}
        />
      </Head>
      <Navbar />
      <main className="min-h-screen bg-gray-900 text-white p-8">
        <h1 className="text-3xl font-bold mb-8 text-center">Foto Galeri</h1>

        {/* Küçük fotoğraflar grid */}
        <div className="grid grid-cols-3 gap-4 max-w-4xl mx-auto">
          {images.map((src, i) => (
            <div
              key={i}
              className="cursor-pointer rounded-md shadow-md hover:scale-105 transition-transform duration-300 w-[250px] h-[200px] relative"
              onClick={() => setSelectedImg(src)}
            >
              <Image
                src={src}
                alt={`Fotoğraf ${i + 1}`}
                fill
                className="object-cover rounded-md"
                sizes="250px"
                loading="lazy"
              />
            </div>
          ))}
        </div>

        {/* Modal - Büyük fotoğraf */}
        {selectedImg && (
          <div
            className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50"
            onClick={() => setSelectedImg(null)}
          >
            <div className="relative max-h-[90vh] max-w-[90vw] w-auto h-auto">
              <Image
                src={selectedImg}
                alt="Büyük fotoğraf"
                width={1000}
                height={1000}
                className="rounded-lg shadow-lg object-contain"
              />
              <button
                onClick={() => setSelectedImg(null)}
                className="absolute top-4 right-4 text-white text-3xl font-bold bg-black bg-opacity-50 rounded-full px-3 hover:bg-opacity-80"
                aria-label="Kapat"
              >
                &times;
              </button>
            </div>
          </div>
        )}
      </main>
    </>
  );
}