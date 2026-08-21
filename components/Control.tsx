
"use client";

import { Card, Switch } from "@heroui/react";
import { Lightbulb } from "lucide-react";
import React, { FC, ReactNode, useState } from "react";

interface ControlInterface {
  id: string;
  name: string;
  icon: ReactNode;
  bgColor?: string;
  iconColor?: string;
  onChange?: (payload: {
    id: string;
    value: boolean;
  }) => void;
}

const Control: FC<ControlInterface> = ({
  id = "btn1",
  name = "Light",
  icon = <Lightbulb size={21} />,
  bgColor = "bg-emerald-400/10",
  iconColor = "text-emerald-400",
  onChange,
}) => {
  const [isSelected, setIsSelected] = useState(false);

  const handleChange = () => {
    const newValue = !isSelected;

    setIsSelected(newValue);

    onChange?.({
      id,
      value: newValue,
    });
  };

  return (
    <Card
      className={`
        group relative overflow-hidden
        rounded-2xl border
        backdrop-blur-xl
        transition-all duration-300
        ${
          isSelected
            ? "border-emerald-400/25 bg-emerald-400/[0.055] shadow-[0_8px_30px_rgba(16,185,129,0.10)]"
            : "border-white/[0.07] bg-white/[0.035] hover:border-white/[0.11]"
        }
      `}
    >
      {/* Ambient glow */}
      <div
        className={`
          pointer-events-none absolute -right-16 -top-16
          size-32 rounded-full blur-[70px]
          transition-opacity duration-500
          ${
            isSelected
              ? "bg-emerald-400/20 opacity-100"
              : "bg-emerald-400/5 opacity-0 group-hover:opacity-100"
          }
        `}
      />

      <Card.Content className="relative z-10 p-3.5">
        <div className="flex w-full items-center justify-between gap-3">
          {/* Left section */}
          <div className="flex min-w-0 items-center gap-3">
            {/* Device icon */}
            <div
              className={`
                relative flex size-12 shrink-0 items-center
                justify-center rounded-2xl border
                transition-all duration-300
                ${
                  isSelected
                    ? `${bgColor} ${iconColor} border-emerald-400/25 shadow-[0_0_22px_rgba(16,185,129,0.14)]`
                    : "border-white/[0.07] bg-white/[0.04] text-white/40"
                }
              `}
            >
              <span
                className={`
                  transition-transform duration-300
                  ${isSelected ? "scale-110" : "group-hover:scale-105"}
                `}
              >
                {icon}
              </span>

              {/* Status indicator */}
              <span
                className={`
                  absolute -right-1 -top-1 size-2.5
                  rounded-full border-2 border-[#06110d]
                  transition-all duration-300
                  ${
                    isSelected
                      ? "bg-emerald-400 shadow-[0_0_9px_rgba(52,211,153,0.9)]"
                      : "bg-white/20"
                  }
                `}
              />
            </div>

            {/* Device details */}
            <div className="min-w-0">
              <h2 className="truncate text-sm font-semibold text-white">
                {name}
              </h2>

              <div className="mt-1 flex items-center gap-1.5">
                <span
                  className={`
                    size-1.5 rounded-full
                    ${
                      isSelected
                        ? "bg-emerald-400 shadow-[0_0_7px_rgba(52,211,153,0.8)]"
                        : "bg-white/20"
                    }
                  `}
                />

                <p
                  className={`
                    text-[10px] font-medium uppercase tracking-[0.14em]
                    ${
                      isSelected
                        ? "text-emerald-400"
                        : "text-white/30"
                    }
                  `}
                >
                  {isSelected ? "Active" : "Off"}
                </p>
              </div>
            </div>
          </div>

          {/* Right switch section */}
          <div className="flex shrink-0 items-center">
            <Switch
              isSelected={isSelected}
              onChange={handleChange}
              aria-label={`Toggle ${name}`}
            >
              <Switch.Content>
                <Switch.Control
                  className={`
                    transition-all duration-300
                    ${
                      isSelected
                        ? "bg-emerald-500 shadow-[0_0_16px_rgba(16,185,129,0.35)]"
                        : "bg-white/10"
                    }
                  `}
                >
                  <Switch.Thumb />
                </Switch.Control>
              </Switch.Content>
            </Switch>
          </div>
        </div>

        {/* Bottom active line */}
        <div
          className={`
            mt-3 h-[1px] rounded-full
            transition-all duration-500
            ${
              isSelected
                ? "bg-gradient-to-r from-emerald-400/40 via-emerald-400/10 to-transparent"
                : "bg-white/[0.04]"
            }
          `}
        />
      </Card.Content>
    </Card>
  );
};

export default Control;

