"use client";

import { useState } from "react";

interface GalleryProps {
  images: string[];
  columns?: number;
}

export default function Gallery({ images, columns = 3 }: GalleryProps) {
  const [lightbox, setLightbox] = useState<string | null>(null);

  return (
    <>
      <div
        className="grid gap-2"
        style={{ gridTemplateColumns: `repeat(${columns}, 1fr)` }}
      >
        {images.map((src, i) => (
          <div
            key={i}
            className="gallery-item"
            onClick={() => setLightbox(src)}
          >
            <img
              src={src}
              alt={`Photo ${i + 1}`}
              className="object-cover w-full h-full"
              loading="lazy"
            />
          </div>
        ))}
      </div>

      {lightbox && (
        <div className="lightbox" onClick={() => setLightbox(null)}>
          <button
            className="absolute top-6 right-6 text-white text-4xl z-[110]"
            onClick={() => setLightbox(null)}
            aria-label="Close"
          >
            &times;
          </button>
          <img
            src={lightbox}
            alt="Full size"
            className="max-w-[90vw] max-h-[90vh] object-contain"
          />
        </div>
      )}
    </>
  );
}
