"use client";

import { Moon, Sun } from "lucide-react";
import { useState } from "react";

interface SwitchToggleProps {
  defaultChecked?: boolean;
  onToggle?: (checked: boolean) => void;
}

export default function SwitchToggle({
  defaultChecked = false,
  onToggle,
}: SwitchToggleProps) {
  const [checked, setChecked] = useState(defaultChecked);

  const handleToggle = () => {
    const value = !checked;
    setChecked(value);

    // Call parent function
    onToggle?.(value);
  };

  return (
    <button
      onClick={handleToggle}
      className={`relative flex h-8 w-16 items-center rounded-full p-1 transition-all duration-300 ${
        checked ? "bg-blue-600" : "bg-gray-300 dark:bg-gray-700"
      }`}
    >
      <div
        className={`flex h-6 w-6 items-center justify-center rounded-full bg-white shadow-md transition-transform duration-300 ${
          checked ? "translate-x-8" : "translate-x-0"
        }`}
      >
        {checked ? (
          <Moon className="h-4 w-4 text-blue-600" />
        ) : (
          <Sun className="h-4 w-4 text-yellow-500" />
        )}
      </div>
    </button>
  );
}