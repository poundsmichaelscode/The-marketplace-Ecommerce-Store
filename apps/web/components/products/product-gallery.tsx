"use client";
import { useState } from "react";

export function ProductGallery({ images }: { images: string[] }) {
  const [active, setActive] = useState(images[0]);
  return (
    <div className="grid gap-4">
      <div className="overflow-hidden rounded-[2rem] bg-marketLight shadow-premium"><img src={active} alt="Product" className="h-[520px] w-full object-cover" />
      
      </div>
      <div className="grid grid-cols-4 gap-3">
        {images.map((img) => <button key={img} onClick={() => setActive(img)} className="overflow-hidden rounded-2xl border-2 border-transparent focus:border-marketCream">
          <img src={img} className="h-24 w-full object-cover" alt="Product thumbnail" />
      </button>)}</div>
    </div>
  );
}
