"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";

export default function Navbar() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const getLinkClass = (href) =>
    pathname === href || (href === "/projelerimiz" && pathname.startsWith("/projelerimiz"))
      ? "relative font-semibold text-gray-100 after:content-[''] after:absolute after:w-full after:h-[3px] after:bg-gray-100 after:bottom-0 after:left-0"
      : "relative text-gray-100 hover:text-gray-100 transition-colors duration-300 after:content-[''] after:absolute after:w-0 hover:after:w-full after:h-[2px] after:bg-gray-100 after:bottom-0 after:left-0 after:transition-all after:duration-300";

  return (
    <nav className="fixed w-full z-50 bg-slate-900/80 backdrop-blur-xl border-b border-white/10 top-0 left-0 right-0 shadow-2xl transition-all duration-300">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold flex items-center space-x-2 group hover:scale-105 transition-transform duration-300">
            <div className="p-1.5 bg-white/5 rounded-lg border border-white/10 group-hover:bg-white/10 transition-colors">
              <Image
                src="/11.png"
                alt="Yarımada Oto Kurtarma Logo"
                width={160}
                height={40}
                className="brightness-125"
                priority
              />
            </div>
          </Link>

          <div className="hidden md:flex items-center space-x-6">
            <Link href="/" className={`px-3 py-2 text-sm uppercase tracking-wider ${getLinkClass("/")}`}>ANA SAYFA</Link>
            <Link href="/hakkinda" className={`px-3 py-2 text-sm uppercase tracking-wider ${getLinkClass("/hakkinda")}`}>HAKKIMIZDA</Link>
            <Link href="/foto-galeri" className={`px-3 py-2 text-sm uppercase tracking-wider ${getLinkClass("/foto")}`}>FOTO GALERİ</Link>
            <Link href="/iletisim" className={`px-3 py-2 text-sm uppercase tracking-wider ${getLinkClass("/iletisim")}`}>İLETİŞİM</Link>
          </div>

          {/* Mobil Menü Butonu */}
          <button
            className="md:hidden p-2 text-white focus:outline-none rounded-md hover:bg-white/10 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Menu"
          >
            {isMenuOpen ? (
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobil Menü İçeriği */}
        {isMenuOpen && (
          <div className="md:hidden bg-slate-900/95 backdrop-blur-xl border-t border-white/10 absolute left-0 w-full shadow-2xl">
            <div className="px-4 py-6 space-y-4">
              {[
                { href: "/", label: "Ana Sayfa" },
                { href: "/hakkinda", label: "Hakkımızda" },
                { href: "/foto-galeri", label: "Foto Galeri" },
                { href: "/iletisim", label: "İletişim" }
              ].map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`block px-4 py-3 rounded-lg text-lg uppercase tracking-wide border border-transparent ${pathname === item.href
                      ? 'bg-blue-600/20 text-blue-400 border-blue-500/30'
                      : 'text-gray-300 hover:bg-white/5 hover:text-white'
                    } transition-all duration-300`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
