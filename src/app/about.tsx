export default function About() {
  return (
    <div className="w-full">
      <section className="w-full bg-blue-600 py-32 px-0">
        <div className="w-full text-white rounded-none py-24 px-8 max-w-6xl mx-auto">
          <h2 className="text-6xl font-bold mb-2 text-left">About Us</h2>
          <div className="text-3xl font-semibold mb-4 text-left">会社概要</div>
        </div>
      </section>
      <section className="w-full max-w-6xl mx-auto px-4 flex flex-col items-center gap-24 my-16 text-[1.2em]">
        {/* Vision, Mission, Value セクション（縦並び・背景色なし） */}
        <div className="mb-16 w-full flex flex-col gap-8 items-stretch">
          <div className="rounded-xl shadow p-8 flex flex-col items-start">
            <h3 className="text-2xl font-bold text-blue-700 mb-2 text-left">Vision</h3>
            <h2 className="mb-0 text-xl text-gray-700 text-left">テクノロジーと情熱で、未来を動かす力を社会に届ける。</h2>
            <p className="text-lg text-gray-600 mt-2">私たちは、テクノロジーと情熱がこの激動の時代の原動力になると信じています。</p>
          </div>
          <div className="rounded-xl shadow p-8 flex flex-col items-start">
            <h3 className="text-2xl font-bold text-blue-700 mb-2 text-left">Mission</h3>
            <h2 className="mb-0 text-xl text-gray-700 text-left">お客様の成長と変革をITの力で支援し、価値あるソリューションを提供する。</h2>
            <p className="text-lg text-gray-600 mt-2">私たちは、ITの力でお客様のビジネスを支え、成長と変革を実現します。</p>
          </div>
          <div className="rounded-xl shadow p-8 flex flex-col items-start">
            <h3 className="text-2xl font-bold text-blue-700 mb-2 text-left">Value</h3>
            <h2 className="mb-4 text-xl text-gray-700 text-left">誠実なパートナーシップ</h2>
            <h2 className="mb-4 text-xl text-gray-700 text-left">挑戦と成長</h2>
            <h2 className="mb-4 text-xl text-gray-700 text-left">テクノロジーへの情熱</h2>
            <h2 className="mb-0 text-xl text-gray-700 text-left">社会への貢献</h2>
            <p className="text-lg text-gray-600 mt-2">私たちは、誠実なパートナーシップを築き、挑戦を恐れず、テクノロジーへの情熱を持って社会に貢献します。</p>
          </div>
        </div>
        <section className="w-full bg-white px-4 flex flex-col items-center">
          {/* 見出し部分 */}
          <div className="w-full text-blue-700 rounded-none mb-12 py-2 px-8 max-w-6xl mx-auto">
            <h2 className="text-6xl font-bold mb-2 text-left">Profile</h2>
            <div className="text-3xl font-semibold mb-4 text-left">プロフィール</div>
          </div>
        </section>
        {/* 会社概要テーブル */}
        <div className="w-full overflow-x-auto mb-12">
          <table className="min-w-[320px] w-full border border-blue-200 rounded-xl bg-white shadow text-xl text-gray-700 border-separate border-spacing-0">
            <tbody>
              <tr>
          <th className="bg-blue-50 font-bold px-4 py-3 text-left w-1/4 border-b border-blue-200 border-r">会社名</th>
          <td className="px-4 py-3 border-b border-blue-200">合同会社PowerForce</td>
              </tr>
              <tr>
          <th className="bg-blue-50 font-bold px-4 py-3 text-left border-b border-blue-200 border-r">設立</th>
          <td className="px-4 py-3 border-b border-blue-200">2024年11月</td>
              </tr>
              <tr>
          <th className="bg-blue-50 font-bold px-4 py-3 text-left border-b border-blue-200 border-r">所在地</th>
          <td className="px-4 py-3 border-b border-blue-200">東京都渋谷区道玄坂1-16-6二葉ビル8b</td>
              </tr>
              <tr>
          <th className="bg-blue-50 font-bold px-4 py-3 text-left border-b border-blue-200 border-r">代表者</th>
          <td className="px-4 py-3 border-b border-blue-200">山崎　恒</td>
              </tr>
              <tr>
          <th className="bg-blue-50 font-bold px-4 py-3 text-left border-r">事業内容</th>
          <td className="px-4 py-3">
            <ul className="list-disc list-inside">
              <li>AI・DX事業</li>
              <li>BPO事業</li>
            </ul>
          </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
