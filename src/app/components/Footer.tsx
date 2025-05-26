import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full bg-blue-900 text-white pt-24 pb-24 px-24 mt-24">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between gap-12">
        {/* 会社概要 */}
        <div className="flex-1 min-w-[220px] mb-8 md:mb-0">
          <h3 className="text-xl font-bold mb-4 text-blue-200">会社概要</h3>
          <ul className="text-sm text-blue-100 space-y-1">
            <li><span className="font-bold">会社名：</span>合同会社PowerForce</li>
            <li><span className="font-bold">設立：</span>2024年11月</li>
            <li><span className="font-bold">所在地：</span>東京都渋谷区道玄坂1-16-6二葉ビル8b</li>
            <li><span className="font-bold">代表者：</span>山崎 恒</li>
          </ul>
        </div>
        {/* サイトマップ */}
        <div className="flex-1 min-w-[180px]">
          <h3 className="text-xl font-bold mb-4 text-blue-200">サイトマップ</h3>
          <ul className="text-sm text-blue-100 space-y-2">
            <li><Link href="/" className="hover:underline">ホーム</Link></li>
            <li><Link href="/about" className="hover:underline">会社概要</Link></li>
            <li><Link href="/services" className="hover:underline">サービス</Link></li>
            <li><Link href="/contact" className="hover:underline">お問い合わせ</Link></li>
          </ul>
        </div>
        {/* ロゴ＆コピーライト */}
        <div className="flex-1 min-w-[180px] flex flex-col items-start md:items-end justify-between">
          <div className="mb-0 md:mb-4">
            <div className="text-lg font-bold tracking-wide text-blue-100">PowerForce LLC</div>
          </div>
          <div className="text-xs text-blue-300 mt-4 md:mt-0">&copy; {new Date().getFullYear()} PowerForce LLC. All rights reserved.</div>
        </div>
      </div>
    </footer>
  );
}
