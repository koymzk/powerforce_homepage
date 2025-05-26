import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="w-full flex items-center justify-between px-6 py-7 shadow-sm bg-white fixed top-0 left-0 z-50">
      <div className="flex items-center gap-3">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/PowerForce.png"
            alt="PowerForce logo"
            width={180}
            height={45}
            className="object-contain"
          />
        </Link>
      </div>
      <nav className="hidden sm:flex gap-8 text-sm">
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
    </header>
  );
}
