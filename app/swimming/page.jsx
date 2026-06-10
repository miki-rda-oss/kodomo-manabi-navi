import Link from "next/link";
import { ALL_PREFS_LIST } from "./swimmingData";

export const metadata = {
  title: "子供のスイミングスクール・水泳教室おすすめ｜全国都道府県別【コドモならいごと】",
  description: "全国の子ども向けスイミングスクール・水泳教室を都道府県別に比較。コナミスポーツ・ルネサンス・セントラルスポーツなど人気スクールの月謝・コース・口コミを掲載。",
  keywords: ["子供 スイミングスクール", "水泳教室 子ども", "キッズ水泳", "スイミング 比較", "ベビースイミング"],
  alternates: {
    canonical: "https://www.kodomo-navi.com/swimming",
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "トップ", item: "https://www.kodomo-navi.com" },
    { "@type": "ListItem", position: 2, name: "スイミングスクール・水泳教室", item: "https://www.kodomo-navi.com/swimming" },
  ],
};


const popularSchools = [
  { name: "コナミスポーツクラブ", rating: 4.3, fee: 8250, age: "6ヶ月〜15歳", desc: "段階的な進級制度で着実にステップアップ。ベビーから選手コースまで幅広く対応。", emoji: "🏊" },
  { name: "ルネサンス スイミング", rating: 4.2, fee: 7150, age: "6ヶ月〜", desc: "楽しく安全に水に親しめるプログラム。コーチの質の高さに定評あり。", emoji: "🌊" },
  { name: "セントラルスポーツ", rating: 4.3, fee: 8800, age: "3歳〜", desc: "全国展開のスポーツクラブ。専門コーチによる指導で確実に上達。", emoji: "🏊" },
  { name: "ジャクサスイミングスクール", rating: 4.4, fee: 7700, age: "3歳〜", desc: "水泳専門スクール。進級テストで目標を持って通える。", emoji: "🌊" },
  { name: "ティップネス", rating: 4.2, fee: 8800, age: "3歳〜", desc: "全国展開のフィットネスクラブのスイミングスクール。", emoji: "🏊" },
];

const faqs = [
  { q: "子供のスイミングスクールは何歳から始めるべき？", a: "ベビースイミングは生後6ヶ月から始められます。一般的なキッズクラスは3〜4歳からが多く、多くのスクールがベビークラスを充実させています。" },
  { q: "子供のスイミングスクールの月謝相場は？", a: "週1回で6,000〜10,000円程度が相場です。大手スポーツクラブは7,000〜9,000円程度が多いです。" },
  { q: "水が苦手な子供でもスイミングスクールに通えますか？", a: "水慣れクラスから始められます。専門コーチが丁寧に指導し、少しずつ水に親しめるよう工夫されています。" },
  { q: "子供がスイミングを習う効果は？", a: "全身運動で体力・心肺機能が向上します。水難防止にも効果的で、精神的な強さも養えます。" },
];

const blogs = [
  { href: "/blog/kids-swimming-guide", text: "子供のスイミングスクール選び方完全ガイド" },
  { href: "/blog/kids-swimming-school-guide-2026", text: "子供スイミングスクールおすすめ2026年版" },
  { href: "/blog/kids-swimming-benefits-complete", text: "子供がスイミングを習う効果・メリット" },
  { href: "/blog/kids-swimming-fear-guide", text: "水が苦手な子供のスイミング入門ガイド" },
];

export default function SwimmingTopPage() {
  return (
    <div style={{ fontFamily: "'Noto Sans JP','Hiragino Sans',sans-serif", background: "#f4f7fc", minHeight: "100vh" }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "WebPage",
        "@id": "https://www.kodomo-navi.com/swimming",
        "name": "子供のスイミングスクールおすすめ｜全国都道府県別比較",
        "description": "全国の子ども向けスイミングスクールを都道府県・エリア別に比較。月謝・コース・無料体験情報を掲載。",
        "url": "https://www.kodomo-navi.com/swimming",
        "inLanguage": "ja",
        "isPartOf": { "@id": "https://www.kodomo-navi.com/#website" },
        "speakable": { "@type": "SpeakableSpecification", "cssSelector": ["h1", "h2"] },
      }) } } />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "ItemList",
        "name": "子供のスイミングスクールおすすめ人気スクール一覧",
        "description": "全国の子ども向けスイミングスクールを比較。月謝・口コミ・無料体験情報を掲載。",
        "url": "https://www.kodomo-navi.com/swimming",
        "numberOfItems": popularSchools.length,
        "itemListElement": popularSchools.map((s, i) => ({
          "@type": "ListItem",
          "position": i + 1,
          "name": s.name,
          "description": s.desc,
          "url": s.trialUrl || s.url || "https://www.kodomo-navi.com/swimming",
        })),
      }) } } />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": faqs.map(faq => ({
          "@type": "Question",
          "name": faq.q,
          "acceptedAnswer": { "@type": "Answer", "text": faq.a },
        })),
      }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Course",
        "name": "子供向けスイミングスクール",
        "description": "全国の子ども向けスイミングスクールを比較。月謝・対象年齢・無料体験情報で選べます。",
        "url": "https://www.kodomo-navi.com/swimming",
        "inLanguage": "ja",
        "provider": {
          "@type": "Organization",
          "name": popularSchools[0].name,
          "url": popularSchools[0].url || popularSchools[0].trialUrl || "https://www.kodomo-navi.com/swimming",
        },
        "offers": {
          "@type": "Offer",
          "price": String(popularSchools[0].fee),
          "priceCurrency": "JPY",
          "availability": "https://schema.org/InStock",
        },
        "hasCourseInstance": popularSchools.slice(0, 3).map(s => ({
          "@type": "CourseInstance",
          "name": s.name,
          "courseMode": "Blended",
          "instructor": { "@type": "Organization", "name": s.name },
        })),
      }) }} />

      {/* Header */}
      <header style={{ background: "#fff", borderBottom: "1px solid #e8edf4", boxShadow: "0 2px 8px rgba(0,0,0,.05)", position: "sticky", top: 0, zIndex: 100 }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 24px", display: "flex", alignItems: "center", gap: 10, height: 56 }}>
          <Link href="/" style={{ display: "flex", alignItems: "center", gap: 8, textDecoration: "none" }}>
            <div style={{ width: 32, height: 32, borderRadius: 9, background: "linear-gradient(135deg, #FF8A00, #FFB347)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 16 }}>🧒</div>
            <span style={{ fontSize: 15, fontWeight: 900, color: "#1B2A4A" }}>コドモならいごと</span>
          </Link>
          <span style={{ color: "#ddd" }}>›</span>
          <span style={{ fontSize: 13, color: "#888", fontWeight: 600 }}>スイミングスクール・水泳教室</span>
        </div>
      </header>

      {/* Breadcrumb */}
      <nav aria-label="パンくず" style={{ maxWidth: 1100, margin: "0 auto", padding: "10px 24px" }}>
        <div style={{ fontSize: 12, color: "#888" }}>
          <Link href="/" style={{ color: "#0288D1", textDecoration: "none" }}>トップ</Link>
          {" › "}
          <span style={{ color: "#666" }}>スイミングスクール・水泳教室</span>
        </div>
      </nav>

      {/* Hero */}
      <section style={{ background: "linear-gradient(135deg, #01579B, #0288D1)", padding: "52px 24px 48px" }}>
        <div style={{ maxWidth: 800, margin: "0 auto", textAlign: "center" }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 6, background: "rgba(255,255,255,.2)", borderRadius: 20, padding: "4px 16px", marginBottom: 16, fontSize: 12, color: "#fff", fontWeight: 700 }}>
            🏊 全国47都道府県対応
          </div>
          <h1 style={{ fontSize: 30, fontWeight: 900, color: "#fff", marginBottom: 14, lineHeight: 1.4 }}>
            子供のスイミングスクール・水泳教室<br />おすすめ比較【全国版】
          </h1>
          <p style={{ fontSize: 14, color: "rgba(255,255,255,.92)", lineHeight: 2, marginBottom: 24 }}>
            コナミスポーツ・ルネサンス・セントラルスポーツなど人気スクールを都道府県別に比較。<br />
            月謝・対象年齢・口コミ情報を掲載。
          </p>
          <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
            {["⭐ 口コミ多数掲載", "👶 6ヶ月〜OK", "💰 月7,000円〜", "🎯 進級制度あり"].map((b, i) => (
              <span key={i} style={{ fontSize: 13, color: "rgba(255,255,255,.9)", fontWeight: 700, background: "rgba(255,255,255,.15)", padding: "6px 14px", borderRadius: 20 }}>{b}</span>
            ))}
          </div>
        </div>
      </section>

      <div style={{ maxWidth: 1000, margin: "0 auto", padding: "36px 24px 60px" }}>

        {/* 都道府県グリッド */}
        <div style={{ background: "#fff", borderRadius: 18, padding: "28px 24px", marginBottom: 28, border: "1.5px solid #e8edf4", boxShadow: "0 2px 12px rgba(0,0,0,.05)" }}>
          <h2 style={{ fontSize: 18, fontWeight: 900, color: "#1B2A4A", marginBottom: 20, paddingBottom: 12, borderBottom: "2px solid #0288D120" }}>
            🗾 都道府県からスイミングスクールを探す
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(140px, 1fr))", gap: 8 }}>
            {ALL_PREFS_LIST.map((pref) => (
              <Link
                key={pref.slug}
                href={`/swimming/${pref.slug}`}
                style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "10px 14px", background: "#fff", border: "1.5px solid #e8edf4", borderRadius: 10, textDecoration: "none", color: "#1B2A4A", fontWeight: 700, fontSize: 13, boxShadow: "0 1px 4px rgba(0,0,0,.04)" }}
              >
                <span>{pref.name}</span>
                <span style={{ color: "#0288D1", fontSize: 14 }}>›</span>
              </Link>
            ))}
          </div>
        </div>

        {/* 人気スクール一覧 */}
        <div style={{ background: "#fff", borderRadius: 18, padding: "28px 24px", marginBottom: 28, border: "1.5px solid #e8edf4", boxShadow: "0 2px 12px rgba(0,0,0,.05)" }}>
          <h2 style={{ fontSize: 18, fontWeight: 900, color: "#1B2A4A", marginBottom: 20, paddingBottom: 12, borderBottom: "2px solid #0288D120" }}>
            🏆 人気のスイミングスクール
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: 14 }}>
            {popularSchools.map((s, i) => (
              <div key={i} style={{ background: "#fff", border: "1.5px solid #e8edf4", borderRadius: 14, padding: "20px 18px", boxShadow: "0 2px 8px rgba(0,0,0,.04)" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 10 }}>
                  <div style={{ width: 44, height: 44, borderRadius: 12, background: "linear-gradient(135deg, #0288D120, #01579B30)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 22 }}>{s.emoji}</div>
                  <div>
                    <div style={{ fontSize: 14, fontWeight: 800, color: "#1B2A4A" }}>{s.name}</div>
                    <div style={{ fontSize: 12, color: "#888", marginTop: 2 }}>対象: {s.age}</div>
                  </div>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 8 }}>
                  <span style={{ fontSize: 13, color: "#0288D1", fontWeight: 700 }}>★ {s.rating}</span>
                  <span style={{ fontSize: 12, color: "#888" }}>月額 ¥{s.fee.toLocaleString()}〜</span>
                </div>
                <p style={{ fontSize: 12, color: "#666", lineHeight: 1.7, margin: 0 }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ */}
        <div style={{ background: "#fff", borderRadius: 18, padding: "28px 24px", marginBottom: 28, border: "1.5px solid #e8edf4", boxShadow: "0 2px 12px rgba(0,0,0,.05)" }}>
          <h2 style={{ fontSize: 18, fontWeight: 900, color: "#1B2A4A", marginBottom: 18, paddingBottom: 12, borderBottom: "2px solid #0288D120" }}>
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
          <h2 style={{ fontSize: 18, fontWeight: 900, color: "#1B2A4A", marginBottom: 16, paddingBottom: 12, borderBottom: "2px solid #0288D120" }}>
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

        <div style={{ maxWidth: 900, margin: "0 auto", padding: "0 20px 44px" }}>
          <a href="https://lin.ee/v9q2QAX" target="_blank" rel="noopener noreferrer"
             style={{ display: "block", background: "linear-gradient(135deg,#06C755,#04A647)", color: "#fff", textAlign: "center", padding: "20px 24px", borderRadius: 16, fontWeight: 900, fontSize: 16, textDecoration: "none", boxShadow: "0 6px 20px rgba(6,199,85,.3)" }}>
            💬 LINEで気軽に相談・無料体験を予約する →
          </a>
        </div>

        <div style={{ textAlign: "center", display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
          <Link href="/genre/swimming" style={{ display: "inline-flex", alignItems: "center", gap: 6, padding: "12px 24px", background: "#fff", border: "1.5px solid #B3E5FC", borderRadius: 20, color: "#0288D1", fontWeight: 700, fontSize: 14, textDecoration: "none" }}>
            🏊 スイミングスクール一覧
          </Link>
          <Link href="/" style={{ display: "inline-flex", alignItems: "center", gap: 6, padding: "12px 24px", background: "linear-gradient(135deg, #01579B, #0288D1)", borderRadius: 20, color: "#fff", fontWeight: 700, fontSize: 14, textDecoration: "none", boxShadow: "0 4px 16px rgba(2,136,209,.3)" }}>
            ← トップページへ戻る
          </Link>
        </div>
      </div>
    </div>
  );
}
