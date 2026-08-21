
import {
  Fan,
  Lightbulb,
  Tv,
  Wifi,
  ChevronRight,
} from "lucide-react";
import React from "react";

const Category = () => {
  const categories = [
    {
      id: 1,
      name: "Front Door",
      icon: Lightbulb,
    },
    {
      id: 2,
      name: "Fan",
      icon: Fan,
    },
    {
      id: 3,
      name: "TV",
      icon: Tv,
    },
    {
      id: 4,
      name: "Wi-Fi",
      icon: Wifi,
    },
  ];

  return (
    <section className="relative py-4">
      {/* Background glow */}
      <div className="pointer-events-none absolute -left-20 top-10 size-40 rounded-full bg-emerald-500/10 blur-[90px]" />

      {/* Heading */}
      <div className="relative mb-4 flex items-center justify-between">
        <div>
          <p className="text-[10px] font-medium uppercase tracking-[0.18em] text-emerald-400/50">
            Connected devices
          </p>

          <h2 className="mt-1 text-lg font-semibold tracking-tight text-white">
            Sweet Home
          </h2>
        </div>

        <button className="flex size-8 items-center justify-center rounded-lg border border-white/[0.07] bg-white/[0.04] text-white/40 transition hover:border-emerald-400/20 hover:text-emerald-400">
          <ChevronRight size={16} />
        </button>
      </div>

      {/* Categories */}
      <div className="relative grid grid-cols-4 gap-2">
        {categories.map((category) => {
          const Icon = category.icon;

          return (
            <button
              key={category.id}
              className="group flex flex-col items-center gap-2 rounded-2xl border border-white/[0.06] bg-white/[0.025] py-3 transition-all duration-300 hover:-translate-y-1 hover:border-emerald-400/20 hover:bg-emerald-400/[0.06] hover:shadow-[0_8px_25px_rgba(16,185,129,0.08)]"
            >
              {/* Icon */}
              <div className="relative flex size-11 items-center justify-center rounded-xl border border-emerald-400/10 bg-emerald-400/[0.07] text-emerald-400 transition-all duration-300 group-hover:border-emerald-400/25 group-hover:bg-emerald-400/10 group-hover:shadow-[0_0_20px_rgba(16,185,129,0.12)]">
                <Icon
                  size={20}
                  strokeWidth={1.7}
                  className="transition-transform duration-300 group-hover:scale-110"
                />

                {/* Online dot */}
                <span className="absolute -right-0.5 -top-0.5 size-2 rounded-full border border-[#06110d] bg-emerald-400 shadow-[0_0_7px_rgba(52,211,153,0.8)]" />
              </div>

              {/* Name */}
              <span className="max-w-full truncate px-1 text-[11px] font-medium text-white/50 transition group-hover:text-white/80">
                {category.name}
              </span>
            </button>
          );
        })}
      </div>
    </section>
  );
};

export default Category;

