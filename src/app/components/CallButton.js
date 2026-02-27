'use client';

import { PhoneArrowDownLeftIcon } from "@heroicons/react/24/solid";

export default function CallButton({ phoneNumber, label = "HEMEN ARA", className = "" }) {
  const handleCall = () => {
    // Telefon araması başlatma
    window.location.href = `tel:${phoneNumber}`;

    // Google Ads dönüşümünü burada tetikleyin
    // 'window.gtag' global olarak tanımlı olduğu için, Next.js'in client tarafında çalıştığından emin olmalıyız.
    // 'typeof window.gtag === 'function'' kontrolü bunu sağlar.
    if (typeof window.gtag === 'function') {
      window.gtag('event', 'conversion', {
        'send_to': 'AW-17178419606/_mMkCPyArdgaEJbDp_8_' // Bu etiket Google Ads mailinizden geldi
      });
    }
  };

  return (
    <button
      onClick={handleCall}
      className={`flex items-center justify-center gap-2 ${className ? className : "bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-6 rounded-lg shadow-[0_0_15px_rgba(37,99,235,0.4)] transition-all duration-300"}`}
    >
      <PhoneArrowDownLeftIcon className="h-5 w-5" />
      {label}
    </button>
  );
}