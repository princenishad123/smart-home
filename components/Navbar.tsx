
"use client";

import { Lightbulb, Moon, Sun } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";

const Navbar = () => {
  const [dark, setDark] = useState(true);

  return (
    <nav className="relative flex h-16 w-full items-center justify-between px-4">
      {/* Left */}
      <div className="flex items-center gap-3">
        {/* Logo */}
        <div className="relative flex size-10 items-center justify-center rounded-xl border border-emerald-400/20 bg-emerald-400/10 shadow-[0_0_25px_rgba(16,185,129,0.12)]">
          <Lightbulb
            size={21}
            className="text-emerald-400"
            strokeWidth={1.8}
          />

          {/* Online dot */}
          <span className="absolute -right-0.5 -top-0.5 size-2.5 rounded-full border-2 border-[#06110d] bg-emerald-400" />
        </div>

        <div>
          <h2 className="text-[15px] font-semibold tracking-tight text-white">
            Smart Home
          </h2>

          <div className="mt-0.5 flex items-center gap-1.5">
            <span className="size-1.5 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.8)]" />
            <span className="text-[10px] font-medium text-emerald-400/80">
              All systems online
            </span>
          </div>
        </div>
      </div>

      {/* Right */}
      <div className="flex items-center gap-2.5">
        {/* Theme button */}
        <button
          onClick={() => setDark(!dark)}
          className="group flex size-9 items-center justify-center rounded-xl border border-white/8 bg-white/4.5 text-white/60 backdrop-blur-xl transition-all duration-300 hover:border-emerald-400/30 hover:bg-emerald-400/10 hover:text-emerald-400"
        >
          {dark ? (
            <Moon
              size={17}
              strokeWidth={1.8}
              className="transition-transform duration-300 group-hover:rotate-12"
            />
          ) : (
            <Sun
              size={18}
              strokeWidth={1.8}
              className="transition-transform duration-300 group-hover:rotate-45"
            />
          )}
        </button>

        {/* Profile */}
        <button className="group relative size-10 rounded-full p-[2px]">
          {/* Green glowing ring */}
          <span className="absolute inset-0 rounded-full bg-gradient-to-br from-emerald-300 via-emerald-500 to-green-700 opacity-80 transition-all duration-300 group-hover:opacity-100 group-hover:shadow-[0_0_20px_rgba(16,185,129,0.35)]" />

          <span className="relative flex size-full items-center justify-center rounded-full bg-[#07100c] p-[2px]">
            <Image
              src="/image/me.png"
              alt="profile-image"
              width={36}
              height={36}
              priority
              className="size-full rounded-full object-cover"
            />
          </span>

          {/* Online status */}
          <span className="absolute bottom-0 right-0 size-2.5 rounded-full border-2 border-[#07100c] bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.8)]" />
        </button>
      </div>

      {/* Bottom glass line */}
      <div className="pointer-events-none absolute bottom-0 left-4 right-4 h-px bg-gradient-to-r from-transparent via-emerald-400/20 to-transparent" />
    </nav>
  );
};

export default Navbar;

