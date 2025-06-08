'use client';

import { PhoneArrowDownLeftIcon } from "@heroicons/react/24/solid";

export default function CallButton({ phoneNumber, label = "HEMEN ARA", className = "" }) {
  const handleCall = () => {
    window.location.href = `tel:${phoneNumber}`;
  };

  return (
    <button
      onClick={handleCall}
      className={`flex items-center justify-center gap-2 bg-blue-400 hover:bg-blue-700 text-white font-bold py-4 px-6 rounded-lg shadow-md transition-all duration-300 ${className}`}
    >
      <PhoneArrowDownLeftIcon className="h-5 w-5" />
      {label}
    </button>
  );
}