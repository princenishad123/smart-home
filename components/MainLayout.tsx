"use client"
import { ChildrenInterface } from "@/types/ChildrenInterface";
import React from "react";
import Navbar from "./Navbar";

const MainLayout: React.FC<ChildrenInterface> = ({ children }) => {
  return (
    <div className="relative mx-auto h-screen max-w-md overflow-hidden bg-[#030806] text-white">
      {/* Ambient background lights */}
      <div className="pointer-events-none absolute -left-32 -top-32 h-80 w-80 rounded-full bg-emerald-500/20 blur-[120px]" />

      <div className="pointer-events-none absolute right-[-120px] top-[25%] h-80 w-80 rounded-full bg-green-400/10 blur-[130px]" />

      <div className="pointer-events-none absolute -bottom-32 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-emerald-600/15 blur-[120px]" />

      {/* Subtle noise / grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)
          `,
          backgroundSize: "36px 36px",
        }}
      />

      {/* App container */}
      <div className="relative z-10 flex h-full flex-col">

        {/* Floating Glass Navbar */}
        <div className="px-3 pt-3">
          <div className="rounded-2xl border border-white/[0.08] bg-white/[0.045] shadow-[0_8px_40px_rgba(0,0,0,0.35)] backdrop-blur-2xl">
            <Navbar />
          </div>
        </div>

        {/* Content */}
        <main className="flex-1 overflow-y-auto px-4 pb-8 pt-5 scrollbar-none">
          <div className="rounded-3xl border border-white/[0.06] bg-white/[0.025] p-4 shadow-[0_20px_60px_rgba(0,0,0,0.25)] backdrop-blur-xl">
            {children}
          </div>
        </main>
      </div>

      {/* Bottom glass fade */}
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 z-20 h-20 bg-gradient-to-t from-[#030806] to-transparent" />
    </div>
  );
};

export default MainLayout;

