import Link from "next/link";

export default function Home() {
  return (
    <div className="w-full flex flex-col items-center justify-center gap-48 text-[0.8em] sm:text-[1.2em] py-2 sm:py-0">
      {/* キャッチコピー */}
      <section
      className="w-full flex flex-col items-center justify-center relative overflow-hidden px-0 py-24 sm:py-48"
      style={{
        backgroundImage: 'url(/Background.webp)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        minHeight: '400px',
      }}
      >
      <div className="max-w-6xl w-full flex flex-col md:flex-row items-center justify-center h-full mx-auto gap-8 md:gap-0 px-4 sm:px-0">
        {/* 左側: キャッチコピー */}
        <div className="w-full md:w-1/2 flex flex-col items-start justify-center h-full md:h-80 px-4 py-8 md:px-12 md:py-12">
        <h1 className="text-4xl sm:text-5xl font-extrabold mb-6 text-left text-white drop-shadow-md">
          <span className="text-blue-700">未来を動かす力</span>を、<br/>あなたのビジネスに。
        </h1>
        <p className="text-lg sm:text-xl text-white mb-2 text-left max-w-2xl drop-shadow text-balance leading-relaxed">
          PowerForceは、<br className="hidden sm:inline" />
          テクノロジーで企業の成長を支援します。
        </p>
        </div>
        {/* 右側: 空のコンテナ（今後画像などを配置可能） */}
        <div className="w-full md:w-1/2 flex items-center justify-center h-48 md:h-80"></div>
      </div>
      </section>

      {/* About US 概要 */}
      <section className="w-full text-left py-40 bg-blue-600 text-white rounded-none">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center md:items-start px-6 sm:px-0">
          {/* 左側: 見出し */}
          <div className="w-full md:w-1/2 flex flex-col items-start justify-center px-0 md:px-8 mb-6 md:mb-0">
        <h2 className="text-6xl font-bold mb-2">About Us</h2>
        <div className="text-3xl font-semibold mb-4">私たちについて</div>
          </div>
          {/* 右側: テキスト・画像など */}
          <div className="w-full md:w-1/2 flex flex-col items-start justify-center">
            <p className="mb-2 max-w-prose text-pretty leading-relaxed text-balance">
              慶應義塾大学をはじめとする各大学に所属する、20代前半の若いメンバーが中心となり、
              時代の最先端を捉える感性と最新技術を駆使して、企業の成長に新たなインパクトをもたらします。
            </p>
            <Link href="/about" className="underline font-semibold text-white hover:text-blue-200 transition">会社概要を見る</Link>
          </div>
        </div>
      </section>

      {/* サービス概要 */}
      <section className="w-full py-40 bg-blue-50 rounded-none">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-8 px-6 sm:px-0">
          {/* 左: 見出し＋コア説明 */}
          <div className="w-full md:w-1/3 flex flex-col items-start justify-center px-0 md:px-4 mb-8 md:mb-0">
            <h2 className="text-6xl font-bold mb-2 text-blue-700">Service</h2>
            <div className="text-3xl font-semibold mb-4 text-blue-700">サービス</div>
            <p className="text-lg text-gray-700 mb-4 max-w-prose text-pretty leading-relaxed text-balance">
              PowerForce LLCのコアは、AI技術の開発面・実務面双方での活用です。<br />
              その成果として、<span className="font-bold text-blue-700">業務効率化支援（DX）</span>と
              <span className="font-bold text-blue-700">BPO事業</span>の2軸で事業を展開しています。
            </p>
          </div>
          {/* 中央: DX支援 */}
          <div className="w-full md:w-1/3 flex flex-col items-start justify-center bg-white rounded-xl shadow p-8 border border-blue-100">
            <h3 className="text-2xl font-bold mb-2 text-blue-700">AI・DX支援</h3>
            <p className="text-lg mb-2">AIを活用した業務プロセスの自動化・効率化、データ活用による意思決定支援など、企業のデジタル変革を推進します。</p>
            <ul className="list-disc pl-5 text-base text-gray-700">
              <li>業務自動化・効率化</li>
              <li>データ分析・活用</li>
              <li>AI導入コンサルティング</li>
            </ul>
          </div>
          {/* 右: BPO事業 */}
          <div className="w-full md:w-1/3 flex flex-col items-start justify-center bg-blue-100 rounded-xl shadow p-8 border border-blue-200">
            <h3 className="text-2xl font-bold mb-2 text-blue-700">BPO事業</h3>
            <p className="text-lg mb-2">AIと人の力を組み合わせた業務代行・アウトソーシングサービスで、お客様の業務負担を軽減します。</p>
            <ul className="list-disc pl-5 text-base text-gray-700">
              <li>バックオフィス業務代行</li>
              <li>営業代行</li>
              <li>AIによる高付加価値BPO</li>
            </ul>
          </div>
        </div>
        <div className="max-w-6xl mx-auto mt-8 text-right px-6 sm:px-0">
          <Link href="/services" className="text-blue-600 underline font-semibold">サービス詳細を見る</Link>
        </div>
      </section>

      {/* お問い合わせセクション */}
      <section className="w-full py-40 px-0 bg-blue-600 text-white rounded-none">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between px-6">
          {/* 見出し用コンテナ */}
            <div className="flex-1 w-full sm:w-auto flex flex-col items-start justify-center mb-8 sm:mb-0">
            <h2 className="text-6xl font-bold mb-2 text-left w-full">Contact</h2>
            <div className="text-3xl font-semibold mb-2 text-left w-full">お問い合わせ</div>
            </div>
          {/* ボタン用コンテナ */}
          <div className="flex-1 w-full sm:w-auto flex items-center justify-center">
            <Link
              href="/contact"
              className="w-full border-2 border-white bg-blue-600 text-white px-10 py-4 rounded-none font-bold shadow hover:bg-white hover:text-blue-600 transition text-lg text-center"
            >
              お問い合わせはこちら
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
