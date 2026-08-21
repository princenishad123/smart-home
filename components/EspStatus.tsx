
"use client";

import React, { FC } from "react";
import {
  Cpu,
  Wifi,
  WifiOff,
  CheckCircle2,
  AlertCircle,
  Activity,
} from "lucide-react";

interface ESP32StatusProps {
  connected?: boolean;
  deviceName?: string;
  deviceId?: string;
}

const ESP32Status: FC<ESP32StatusProps> = ({
  connected = true,
  deviceName = "ESP32",
  deviceId = "esp-001",
}) => {
  return (
    <div
      className={`
        group relative overflow-hidden rounded-2xl border
        backdrop-blur-xl transition-all duration-500
        ${
          connected
            ? "border-emerald-400/20 bg-emerald-400/[0.045] shadow-[0_10px_35px_rgba(16,185,129,0.08)]"
            : "border-white/[0.07] bg-white/[0.03]"
        }
      `}
    >
      {/* Ambient glow */}
      <div
        className={`
          pointer-events-none absolute -right-16 -top-16
          size-36 rounded-full blur-[80px]
          ${
            connected
              ? "bg-emerald-400/20"
              : "bg-red-400/10"
          }
        `}
      />

      <div className="relative z-10 p-4">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            {/* Device icon */}
            <div
              className={`
                flex size-11 items-center justify-center rounded-xl border
                ${
                  connected
                    ? "border-emerald-400/20 bg-emerald-400/10 text-emerald-400"
                    : "border-white/[0.07] bg-white/[0.04] text-white/35"
                }
              `}
            >
              <Cpu size={21} strokeWidth={1.7} />
            </div>

            <div>
              <h2 className="text-sm font-semibold text-white">
                {deviceName}
              </h2>

              <p className="mt-0.5 text-[10px] text-white/30">
                {deviceId}
              </p>
            </div>
          </div>

          {/* Status */}
          <div
            className={`
              flex items-center gap-1.5 rounded-full border
              px-2.5 py-1.5
              ${
                connected
                  ? "border-emerald-400/15 bg-emerald-400/10"
                  : "border-red-400/10 bg-red-400/[0.06]"
              }
            `}
          >
            <span
              className={`
                size-1.5 rounded-full
                ${
                  connected
                    ? "bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.9)]"
                    : "bg-red-400"
                }
              `}
            />

            <span
              className={`
                text-[10px] font-semibold uppercase tracking-wider
                ${
                  connected
                    ? "text-emerald-400"
                    : "text-red-400"
                }
              `}
            >
              {connected ? "Connected" : "Disconnected"}
            </span>
          </div>
        </div>

        {/* Message */}
        <div
          className={`
            mt-4 flex items-center gap-3 rounded-xl border p-3
            ${
              connected
                ? "border-emerald-400/10 bg-emerald-400/[0.035]"
                : "border-red-400/10 bg-red-400/[0.03]"
            }
          `}
        >
          {connected ? (
            <CheckCircle2
              size={18}
              className="shrink-0 text-emerald-400"
            />
          ) : (
            <AlertCircle
              size={18}
              className="shrink-0 text-red-400"
            />
          )}

          <div>
            <p className="text-xs font-medium text-white/80">
              {connected
                ? "ESP32 is ready"
                : "ESP32 is disconnected"}
            </p>

            <p className="mt-0.5 text-[10px] text-white/35">
              {connected
                ? "Your smart devices are ready to control."
                : "Check the device power and Wi-Fi connection."}
            </p>
          </div>
        </div>

        {/* Device info */}
        <div className="mt-3 grid grid-cols-2 gap-2">
          {/* WiFi */}
          <div className="flex items-center gap-2 rounded-xl border border-white/[0.05] bg-white/[0.025] p-2.5">
            {connected ? (
              <Wifi
                size={15}
                className="text-emerald-400"
              />
            ) : (
              <WifiOff
                size={15}
                className="text-white/25"
              />
            )}

            <div>
              <p className="text-[9px] uppercase tracking-wider text-white/25">
                Network
              </p>

              <p className="text-[10px] font-medium text-white/55">
                {connected ? "Wi-Fi Online" : "Offline"}
              </p>
            </div>
          </div>

          {/* Activity */}
          <div className="flex items-center gap-2 rounded-xl border border-white/[0.05] bg-white/[0.025] p-2.5">
            <Activity
              size={15}
              className={
                connected
                  ? "text-emerald-400"
                  : "text-white/25"
              }
            />

            <div>
              <p className="text-[9px] uppercase tracking-wider text-white/25">
                Status
              </p>

              <p className="text-[10px] font-medium text-white/55">
                {connected ? "Active" : "Idle"}
              </p>
            </div>
          </div>
        </div>

        {/* Bottom indicator */}
        <div
          className={`
            mt-4 h-px w-full bg-gradient-to-r
            ${
              connected
                ? "from-emerald-400/30 via-emerald-400/10"
                : "from-red-400/20 via-red-400/5"
            }
            to-transparent
          `}
        />
      </div>
    </div>
  );
};

export default ESP32Status;

