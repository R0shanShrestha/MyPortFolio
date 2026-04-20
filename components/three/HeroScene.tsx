"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function HeroScene() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <div className=" hidden  relative w-full h-full md:flex items-center justify-center">
      {/* soft background glow */}
      <div className="absolute w-[500px] h-[500px] bg-teal-400/20 blur-3xl rounded-full animate-pulse" />

      {/* IMAGE CONTAINER */}
      <div
        className={`relative transition-all duration-700 ${
          loaded ? "opacity-100 scale-100" : "opacity-0 scale-95"
        }`}
      >
        <div className="relative w-[280px] h-[280px] md:w-[360px] md:h-[360px] rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
          <Image
            src="/assets/logo/me.png"   // 👈 PUT YOUR REAL IMAGE IN /public
            alt="Profile"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* floating glow ring */}
        <div className="absolute inset-0 rounded-2xl border border-teal-400/30 animate-pulse" />
      </div>
    </div>
  );
}