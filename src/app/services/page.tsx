import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services｜PowerForce LLC",
};

export default function Services() {
  return (
    <section id="services" className="w-full py-40 bg-blue-50 rounded-none text-[1.2em]">
      <div className="w-full text-[0.8em] sm:text-[1.2em] px-4 sm:px-0 py-2 sm:py-0">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-8">
          {/* 左: 見出し＋コア説明 */}
          <div className="w-full md:w-1/3 flex flex-col items-start justify-center px-0 md:px-4 mb-8 md:mb-0">
            <h2 className="text-6xl font-bold mb-2 text-blue-700">Services</h2>
            <div className="text-3xl font-semibold mb-4 text-blue-700">サービス</div>
            <p className="text-lg text-gray-700 mb-4 max-w-prose text-pretty leading-relaxed text-balance">
              PowerForce LLCのコアは、AI技術の開発面・実務面双方での活用です。<br />
              その成果として、<span className="font-bold text-blue-700">AI・DX支援事業</span>と
              <span className="font-bold text-blue-700">BPO事業</span>の2軸で事業を展開しています。
            </p>
            <p className="text-base text-gray-600 mb-2 max-w-prose text-pretty leading-relaxed text-balance">
              私たちは、最新のAI技術を積極的に取り入れ、クライアントの課題解決や新たな価値創出に貢献しています。<br />
              企画・設計から運用まで一貫してサポートし、柔軟な体制で多様なニーズに対応します。
            </p>
          </div>
          {/* 中央: DX支援 */}
          <div className="w-full md:w-1/3 flex flex-col items-start justify-center bg-white rounded-xl shadow p-8 border border-blue-100">
            <h3 className="text-2xl font-bold mb-2 text-blue-700">AI・DX支援事業</h3>
            <p className="text-lg mb-2 max-w-prose text-pretty leading-relaxed text-balance">
              AIを活用した業務プロセスの自動化・効率化、データ活用による意思決定支援など、企業のデジタル変革を推進します。
            </p>
            <ul className="list-disc pl-5 text-base text-gray-700 mb-4">
              <li>業務自動化・効率化（RPA/AI-OCR/チャットボット等）</li>
              <li>データ分析・活用（BIツール/ダッシュボード構築）</li>
              <li>AI導入コンサルティング・PoC支援</li>
              <li>AIシステム開発・API連携</li>
              <li>DX推進プロジェクトマネジメント</li>
            </ul>
            <div className="text-sm text-gray-500">※業種・規模問わずご相談ください</div>
          </div>
          {/* 右: BPO事業 */}
          <div className="w-full md:w-1/3 flex flex-col items-start justify-center bg-blue-100 rounded-xl shadow p-8 border border-blue-200">
            <h3 className="text-2xl font-bold mb-2 text-blue-700">BPO事業</h3>
            <p className="text-lg mb-2 max-w-prose text-pretty leading-relaxed text-balance">
              AIと人の力を組み合わせた業務代行・アウトソーシングサービスで、お客様の業務負担を軽減します。
            </p>
            <ul className="list-disc pl-5 text-base text-gray-700 mb-4">
              <li>バックオフィス業務代行（経理・人事・総務など）</li>
              <li>営業代行・リード獲得支援</li>
              <li>カスタマーサポート（チャット/メール/電話）</li>
              <li>AIによる高付加価値BPO（データ入力・分類・チェック等）</li>
              <li>業務設計・運用改善コンサルティング</li>
            </ul>
            <div className="text-sm text-gray-500">※AI活用によるコスト削減・品質向上を実現</div>
          </div>
        </div>
        {/* サービスの流れ・特徴 */}
        <div className="max-w-6xl mx-auto mt-20 flex flex-col md:flex-row gap-8">
          {/* サービスの流れ */}
          <div className="w-full md:w-1/2 bg-white rounded-xl shadow p-8 border border-blue-100 mb-8 md:mb-0">
            <h3 className="text-2xl font-bold mb-6 text-blue-700">サービスの流れ</h3>
            <ol className="list-decimal pl-8 text-lg text-gray-700 space-y-2 mb-0">
              <li>ヒアリング・課題整理</li>
              <li>ご提案・お見積り</li>
              <li>要件定義・設計</li>
              <li>開発・導入・運用</li>
              <li>効果検証・継続的な改善</li>
            </ol>
          </div>
          {/* PowerForce LLCの強み */}
          <div className="w-full md:w-1/2 bg-blue-100 rounded-xl shadow p-8 border border-blue-200">
            <h3 className="text-2xl font-bold mb-6 text-blue-700">PowerForce LLCの強み</h3>
            <ul className="list-disc pl-8 text-lg text-gray-700 space-y-2 mb-0">
              <li>AI・DX領域に精通した若手エンジニア・コンサルタントが在籍</li>
              <li>スピード感ある対応と柔軟な体制</li>
              <li>最新技術・ツールの積極活用</li>
              <li>中小企業から大手まで幅広く支援可能</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
