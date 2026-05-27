import Link from "next/link";
import { ALL_PREFS_LIST } from "./musicData";

export const metadata = {
  title: "子供の音楽教室・楽器教室おすすめ｜全国都道府県別【コドモならいごと】",
  description: "全国の子ども向け音楽教室・楽器教室を都道府県別に比較。ヤマハ・カワイ・EYS Music Schoolなど人気スクールの月謝・コース・口コミを掲載。無料体験情報も。",
  keywords: ["子供 音楽教室", "楽器教室 子ども", "キッズ音楽", "ピアノ教室 比較", "ヤマハ音楽教室"],
  alternates: {
    canonical: "https://www.kodomo-navi.com/music",
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "トップ", item: "https://www.kodomo-navi.com" },
    { "@type": "ListItem", position: 2, name: "音楽教室・楽器教室", item: "https://www.kodomo-navi.com/music" },
  ],
};


const popularSchools = [
  { name: "ヤマハ音楽教室（総合）", rating: 4.5, fee: 7700, age: "0歳〜", desc: "国内最大手の総合音楽教室。ピアノ・エレクトーン・ギター・バイオリン・ドラム・ボーカルなど多彩なコース。", emoji: "🎸" },
  { name: "カワイ音楽教室（総合）", rating: 4.3, fee: 8250, age: "3歳〜", desc: "老舗の総合音楽教室。個人レッスン中心で一人ひとりの個性を伸ばす指導。", emoji: "🎼" },
  { name: "EYS Music School", rating: 4.4, fee: 11000, age: "3歳〜", desc: "マンツーマンレッスン専門の音楽スクール。30種類以上の楽器に対応。振替制度充実。", emoji: "🎸" },
  { name: "島村楽器 音楽教室", rating: 4.3, fee: 9900, age: "3歳〜", desc: "全国の楽器店チェーンが運営。ピアノ・ギター・ドラム・歌など幅広いコースが充実。", emoji: "🎼" },
  { name: "ミュージックスクール ジョイ", rating: 4.3, fee: 8800, age: "3歳〜", desc: "子どもに特化した音楽教室。楽しい指導で音楽好きな子どもを育てる。", emoji: "🎸" },
];

const faqs = [
  { q: "音楽教室は何歳から通えますか？", a: "0歳から通えるリトミック・親子コースがあります。一般コースは3歳から多いです。" },
  { q: "子供の音楽教室の月謝相場は？", a: "週1回で7,000〜15,000円が相場です。楽器の種類によって異なります。" },
  { q: "どの楽器から始めるのがおすすめですか？", a: "ピアノは音楽の基礎を学ぶのに最適です。ギターやドラムは少し大きくなってから始める子が多いです。" },
  { q: "音楽を習う効果は？", a: "音感・集中力・表現力・忍耐力が育ちます。脳の発達にも良い影響があります。" },
];

const blogs = [
  { href: "/blog/kids-piano-guide", text: "子供のピアノ教室選び方完全ガイド" },
  { href: "/blog/toddler-dance-rhythmics-guide", text: "音楽系習い事の選び方ガイド" },
  { href: "/blog/kids-activity-ranking-all", text: "子供の習い事人気ランキング" },
];

export default function MusicTopPage() {
  return (
    <div style={{ fontFamily: "'Noto Sans JP','Hiragino Sans',sans-serif", background: "#f4f7fc", minHeight: "100vh" }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "WebPage",
        "@id": "https://www.kodomo-navi.com/music",
        "name": "子供の音楽教室おすすめ｜全国都道府県別比較",
        "description": "全国の子ども向け音楽教室を都道府県・エリア別に比較。月謝・コース・無料体験情報を掲載。",
        "url": "https://www.kodomo-navi.com/music",
        "inLanguage": "ja",
        "isPartOf": { "@id": "https://www.kodomo-navi.com/#website" },
        "speakable": { "@type": "SpeakableSpecification", "cssSelector": ["h1", "h2"] },
      }) } } />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "ItemList",
        "name": "子供の音楽教室おすすめ人気スクール一覧",
        "description": "全国の子ども向け音楽教室を比較。月謝・口コミ・無料体験情報を掲載。",
        "url": "https://www.kodomo-navi.com/music",
        "numberOfItems": popularSchools.length,
        "itemListElement": popularSchools.map((s, i) => ({
          "@type": "ListItem",
          "position": i + 1,
          "name": s.name,
          "description": s.desc,
          "url": s.trialUrl || s.url || "https://www.kodomo-navi.com/music",
        })),
      }) } } />

      {/* Header */}
      <header style={{ background: "#fff", borderBottom: "1px solid #e8edf4", boxShadow: "0 2px 8px rgba(0,0,0,.05)", position: "sticky", top: 0, zIndex: 100 }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 24px", display: "flex", alignItems: "center", gap: 10, height: 56 }}>
          <Link href="/" style={{ display: "flex", alignItems: "center", gap: 8, textDecoration: "none" }}>
            <div style={{ width: 32, height: 32, borderRadius: 9, background: "linear-gradient(135deg, #FF8A00, #FFB347)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 16 }}>🧒</div>
            <span style={{ fontSize: 15, fontWeight: 900, color: "#1B2A4A" }}>コドモならいごと</span>
          </Link>
          <span style={{ color: "#ddd" }}>›</span>
          <span style={{ fontSize: 13, color: "#888", fontWeight: 600 }}>音楽教室・楽器教室</span>
        </div>
      </header>

      {/* Breadcrumb */}
      <nav aria-label="パンくず" style={{ maxWidth: 1100, margin: "0 auto", padding: "10px 24px" }}>
        <div style={{ fontSize: 12, color: "#888" }}>
          <Link href="/" style={{ color: "#673AB7", textDecoration: "none" }}>トップ</Link>
          {" › "}
          <span style={{ color: "#666" }}>音楽教室・楽器教室</span>
        </div>
      </nav>

      {/* Hero */}
      <section style={{ background: "linear-gradient(135deg, #311B92, #673AB7)", padding: "52px 24px 48px" }}>
        <div style={{ maxWidth: 800, margin: "0 auto", textAlign: "center" }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 6, background: "rgba(255,255,255,.2)", borderRadius: 20, padding: "4px 16px", marginBottom: 16, fontSize: 12, color: "#fff", fontWeight: 700 }}>
            🎸 全国47都道府県対応
          </div>
          <h1 style={{ fontSize: 30, fontWeight: 900, color: "#fff", marginBottom: 14, lineHeight: 1.4 }}>
            子供の音楽教室・楽器教室<br />おすすめ比較【全国版】
          </h1>
          <p style={{ fontSize: 14, color: "rgba(255,255,255,.92)", lineHeight: 2, marginBottom: 24 }}>
            ヤマハ・カワイ・EYS Music Schoolなど人気スクールを都道府県別に比較。<br />
            月謝・対象年齢・口コミ・無料体験情報を掲載。
          </p>
          <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
            {["⭐ 口コミ多数掲載", "👶 0歳〜OK", "💰 月7,700円〜", "🎼 多彩な楽器対応"].map((b, i) => (
              <span key={i} style={{ fontSize: 13, color: "rgba(255,255,255,.9)", fontWeight: 700, background: "rgba(255,255,255,.15)", padding: "6px 14px", borderRadius: 20 }}>{b}</span>
            ))}
          </div>
        </div>
      </section>

      <div style={{ maxWidth: 1000, margin: "0 auto", padding: "36px 24px 60px" }}>

        {/* 都道府県グリッド */}
        <div style={{ background: "#fff", borderRadius: 18, padding: "28px 24px", marginBottom: 28, border: "1.5px solid #e8edf4", boxShadow: "0 2px 12px rgba(0,0,0,.05)" }}>
          <h2 style={{ fontSize: 18, fontWeight: 900, color: "#1B2A4A", marginBottom: 20, paddingBottom: 12, borderBottom: "2px solid #673AB720" }}>
            🗾 都道府県から音楽教室を探す
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(140px, 1fr))", gap: 8 }}>
            {ALL_PREFS_LIST.map((pref) => (
              <Link
                key={pref.slug}
                href={`/music/${pref.slug}`}
                style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "10px 14px", background: "#fff", border: "1.5px solid #e8edf4", borderRadius: 10, textDecoration: "none", color: "#1B2A4A", fontWeight: 700, fontSize: 13, boxShadow: "0 1px 4px rgba(0,0,0,.04)" }}
              >
                <span>{pref.name}</span>
                <span style={{ color: "#673AB7", fontSize: 14 }}>›</span>
              </Link>
            ))}
          </div>
        </div>

        {/* 人気スクール一覧 */}
        <div style={{ background: "#fff", borderRadius: 18, padding: "28px 24px", marginBottom: 28, border: "1.5px solid #e8edf4", boxShadow: "0 2px 12px rgba(0,0,0,.05)" }}>
          <h2 style={{ fontSize: 18, fontWeight: 900, color: "#1B2A4A", marginBottom: 20, paddingBottom: 12, borderBottom: "2px solid #673AB720" }}>
            🏆 人気の音楽スクール
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: 14 }}>
            {popularSchools.map((s, i) => (
              <div key={i} style={{ background: "#fff", border: "1.5px solid #e8edf4", borderRadius: 14, padding: "20px 18px", boxShadow: "0 2px 8px rgba(0,0,0,.04)" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 10 }}>
                  <div style={{ width: 44, height: 44, borderRadius: 12, background: "linear-gradient(135deg, #673AB720, #4527A030)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 22 }}>{s.emoji}</div>
                  <div>
                    <div style={{ fontSize: 14, fontWeight: 800, color: "#1B2A4A" }}>{s.name}</div>
                    <div style={{ fontSize: 12, color: "#888", marginTop: 2 }}>対象: {s.age}</div>
                  </div>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 8 }}>
                  <span style={{ fontSize: 13, color: "#673AB7", fontWeight: 700 }}>★ {s.rating}</span>
                  <span style={{ fontSize: 12, color: "#888" }}>月額 ¥{s.fee.toLocaleString()}〜</span>
                </div>
                <p style={{ fontSize: 12, color: "#666", lineHeight: 1.7, margin: 0 }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ */}
        <div style={{ background: "#fff", borderRadius: 18, padding: "28px 24px", marginBottom: 28, border: "1.5px solid #e8edf4", boxShadow: "0 2px 12px rgba(0,0,0,.05)" }}>
          <h2 style={{ fontSize: 18, fontWeight: 900, color: "#1B2A4A", marginBottom: 18, paddingBottom: 12, borderBottom: "2px solid #673AB720" }}>
            ❓ よくある質問
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            {faqs.map((faq, i) => (
              <div key={i} style={{ background: "#f8f9fb", borderRadius: 12, padding: "18px 20px", border: "1.5px solid #e8edf4" }}>
                <div style={{ fontSize: 14, fontWeight: 800, color: "#1B2A4A", marginBottom: 8 }}>Q. {faq.q}</div>
                <div style={{ fontSize: 13, color: "#555", lineHeight: 1.8 }}>A. {faq.a}</div>
              </div>
            ))}
          </div>
        </div>

        {/* 関連ブログ */}
        <div style={{ background: "#fff", borderRadius: 18, padding: "28px 24px", marginBottom: 28, border: "1.5px solid #e8edf4", boxShadow: "0 2px 12px rgba(0,0,0,.05)" }}>
          <h2 style={{ fontSize: 18, fontWeight: 900, color: "#1B2A4A", marginBottom: 16, paddingBottom: 12, borderBottom: "2px solid #673AB720" }}>
            📝 関連記事・ガイド
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            {blogs.map((blog, i) => (
              <Link key={i} href={blog.href} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "12px 16px", background: "#f8f9fb", borderRadius: 10, textDecoration: "none", color: "#1B2A4A", fontSize: 14, fontWeight: 600, border: "1px solid #e8edf4" }}>
                <span>📝 {blog.text}</span>
                <span style={{ color: "#ccc" }}>›</span>
              </Link>
            ))}
          </div>
        </div>

        <div style={{ textAlign: "center", display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
          <Link href="/genre/music" style={{ display: "inline-flex", alignItems: "center", gap: 6, padding: "12px 24px", background: "#fff", border: "1.5px solid #C5B3E6", borderRadius: 20, color: "#673AB7", fontWeight: 700, fontSize: 14, textDecoration: "none" }}>
            🎸 音楽スクール一覧
          </Link>
          <Link href="/" style={{ display: "inline-flex", alignItems: "center", gap: 6, padding: "12px 24px", background: "linear-gradient(135deg, #311B92, #673AB7)", borderRadius: 20, color: "#fff", fontWeight: 700, fontSize: 14, textDecoration: "none", boxShadow: "0 4px 16px rgba(103,58,183,.3)" }}>
            ← トップページへ戻る
          </Link>
        </div>
      </div>
    </div>
  );
}
