
"use client";

import moment from "moment";
import React, { useEffect, useState } from "react";
import { CalendarDays, Sparkles } from "lucide-react";

type MannerType = "morning" | "afternoon" | "evening";

const MannerControl = () => {
  const [wish, setWish] = useState<MannerType>("morning");

  useEffect(() => {
    const updateGreeting = () => {
      const hour = new Date().getHours();

      if (hour < 12) {
        setWish("morning");
      } else if (hour < 16) {
        setWish("afternoon");
      } else {
        setWish("evening");
      }
    };

    updateGreeting();

    const timer = setInterval(updateGreeting, 60 * 1000);

    return () => clearInterval(timer);
  }, []);

  const greeting = {
    morning: {
      text: "morning",
      emoji: "☀️",
    },
    afternoon: {
      text: "afternoon",
      emoji: "🌤️",
    },
    evening: {
      text: "evening",
      emoji: "🌙",
    },
  };

  return (
    <section className="relative overflow-hidden py-5">
      {/* Same Navbar Theme Glow */}
      <div className="pointer-events-none absolute -left-20 -top-20 size-56 rounded-full" />

      <div className="pointer-events-none absolute -right-20 top-10 size-48 rounded-full " />

      <div className="relative z-10">
        {/* Welcome badge */}
        <div className="mb-3 flex items-center gap-2">
          <div className="flex size-9 items-center justify-center rounded-xl border border-emerald-400/20 bg-emerald-400/10">
            <Sparkles
              size={17}
              className="text-emerald-400"
              strokeWidth={1.8}
            />
          </div>

          <div>
            <p className="text-[10px] font-medium uppercase tracking-[0.18em] text-emerald-400/60">
              Welcome back
            </p>

            <div className="mt-0.5 flex items-center gap-1.5">
              <span className="size-1.5 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.8)]" />
              <span className="text-[10px] text-white/35">
                Home is ready
              </span>
            </div>
          </div>
        </div>

        {/* Greeting */}
        <h2 className="text-[28px] font-semibold leading-tight tracking-tight text-white">
          Hi, Good{" "}
          <span className="text-emerald-400">
            {greeting[wish].text}
          </span>{" "}
          <span className="text-xl">
            {greeting[wish].emoji}
          </span>
        </h2>

        {/* Date */}
        <div className="mt-3 flex items-center gap-2">
          <CalendarDays
            size={14}
            className="text-emerald-400/50"
            strokeWidth={1.8}
          />

          <p className="text-xs font-medium text-white/35">
            {moment().format("dddd, MMMM Do YYYY")}
          </p>
        </div>

        {/* Emerald divider */}
        <div className="mt-5 h-px w-full bg-linear-to-r from-emerald-400/30 via-emerald-400/10 to-transparent" />
      </div>
    </section>
  );
};

export default MannerControl;

