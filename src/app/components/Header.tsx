"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="w-full flex items-center justify-between px-4 sm:px-6 py-4 sm:py-7 shadow-sm bg-white fixed top-0 left-0 z-50">
      <div className="flex items-center gap-2 sm:gap-3">
        <Link href="/" className="flex items-center gap-2 sm:gap-3">
          <Image
            src="/powerforce_homepage/PowerForce.png"
            alt="PowerForce logo"
            width={120}
            height={32}
            className="object-contain"
          />
        </Link>
      </div>
      {/* PCナビ */}
      <nav className="hidden md:flex gap-6 sm:gap-8 text-base sm:text-sm">
        <Link href="/about" className="hover:underline">
          会社概要
        </Link>
        <Link href="/services" className="hover:underline">
          サービス
        </Link>
        <Link href="/contact" className="hover:underline">
          お問い合わせ
        </Link>
      </nav>
      {/* モバイル用ハンバーガー */}
      <button
        className="md:hidden flex flex-col justify-center items-center w-10 h-10"
        onClick={() => setOpen(!open)}
        aria-label="メニュー"
      >
        <span
          className={`block w-7 h-0.5 bg-blue-700 mb-1 transition-all ${
            open ? "rotate-45 translate-y-2" : ""
          }`}
        ></span>
        <span
          className={`block w-7 h-0.5 bg-blue-700 mb-1 transition-all ${
            open ? "opacity-0" : ""
          }`}
        ></span>
        <span
          className={`block w-7 h-0.5 bg-blue-700 transition-all ${
            open ? "-rotate-45 -translate-y-2" : ""
          }`}
        ></span>
      </button>
      {/* モバイルメニュー */}
      {open && (
        <nav className="absolute top-full right-0 w-56 bg-white shadow-lg rounded-b-xl flex flex-col items-start py-4 px-6 gap-4 md:hidden z-50 animate-fadeIn">
          <Link
            href="/about"
            className="w-full py-2 hover:underline"
            onClick={() => setOpen(false)}
          >
            会社概要
          </Link>
          <Link
            href="/services"
            className="w-full py-2 hover:underline"
            onClick={() => setOpen(false)}
          >
            サービス
          </Link>
          <Link
            href="/contact"
            className="w-full py-2 hover:underline"
            onClick={() => setOpen(false)}
          >
            お問い合わせ
          </Link>
        </nav>
      )}
    </header>
  );
}
