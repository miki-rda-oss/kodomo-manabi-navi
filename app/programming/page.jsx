import Link from "next/link";
import { ALL_PREFS_LIST } from "./programmingData";

export const metadata = {
  title: "子供のプログラミング・パソコン教室おすすめ｜全国都道府県別【コドモならいごと】",
  description: "全国の子ども向けプログラミング・パソコン教室を都道府県別に比較。LITALICOワンダー・Tech Kids School・プログラボ・ヒューマンアカデミーなど人気スクールの月謝・コース・口コミを掲載。無料体験情報も。",
  keywords: ["子供 プログラミング教室", "プログラミング 子ども", "キッズ プログラミング", "パソコン教室 比較", "ロボット教室 小学生"],
  alternates: {
    canonical: "https://www.kodomo-navi.com/programming",
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "トップ", item: "https://www.kodomo-navi.com" },
    { "@type": "ListItem", position: 2, name: "プログラミング教室・パソコン教室", item: "https://www.kodomo-navi.com/programming" },
  ],
};


const popularSchools = [
  { name: "LITALICOワンダー", rating: 4.6, fee: 19800, age: "3歳〜", desc: "個性を大切にした創造的なプログラミング・デジタル教室。全国展開。ロボット・ゲーム・アプリ制作を楽しく学ぶ。", emoji: "💻" },
  { name: "Tech Kids School（サイバーエージェント）", rating: 4.5, fee: 22000, age: "小学生〜", desc: "サイバーエージェントが運営する本格プログラミングスクール。Scratchからアプリ開発まで段階的に習得。", emoji: "🤖" },
  { name: "プログラボ", rating: 4.4, fee: 11000, age: "4歳〜", desc: "ロボットプログラミングで論理的思考力を育成。楽しい教材で飽きない設計。", emoji: "🤖" },
  { name: "Z会プログラミング講座", rating: 4.3, fee: 5500, age: "小学生〜", desc: "通信教育のZ会が提供するプログラミング講座。自宅学習でもしっかり習得できる。", emoji: "💻" },
  { name: "ヒューマンアカデミー ロボット教室", rating: 4.3, fee: 13200, age: "5歳〜", desc: "ロボット制作を通じてプログラミングの基礎を学ぶ。全国展開で通いやすい。", emoji: "🤖" },
];

const faqs = [
  { q: "プログラミング教室は何歳から？", a: "5〜6歳からビジュアルプログラミング（Scratch等）で始められます。" },
  { q: "月謝相場は？", a: "8,000〜22,000円が相場です。オンライン型は比較的リーズナブル。" },
  { q: "プログラミングを習う効果は？", a: "論理的思考力・問題解決力・創造力が育ちます。将来の理系キャリアにも直結。" },
  { q: "パソコンを持っていないと通えませんか？", a: "教室のパソコンを使うので不要な場合がほとんどです。" },
];

const blogs = [
  { href: "/blog/kids-programming-school-guide-2026", text: "子供プログラミング教室おすすめ2026年版" },
  { href: "/blog/kids-programming-age-guide", text: "プログラミングは何歳から始める？" },
  { href: "/blog/kids-programming-scratch-guide", text: "ScratchでプログラミングをはじめようするためのガイドGuide" },
];

export default function ProgrammingTopPage() {
  return (
    <div style={{ fontFamily: "'Noto Sans JP','Hiragino Sans',sans-serif", background: "#f4f7fc", minHeight: "100vh" }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "WebPage",
        "@id": "https://www.kodomo-navi.com/programming",
        "name": "子供のプログラミング教室おすすめ｜全国都道府県別比較",
        "description": "全国の子ども向けプログラミング教室を都道府県・エリア別に比較。月謝・コース・無料体験情報を掲載。",
        "url": "https://www.kodomo-navi.com/programming",
        "inLanguage": "ja",
        "isPartOf": { "@id": "https://www.kodomo-navi.com/#website" },
        "speakable": { "@type": "SpeakableSpecification", "cssSelector": ["h1", "h2"] },
      }) } } />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "ItemList",
        "name": "子供のプログラミング教室おすすめ人気スクール一覧",
        "description": "全国の子ども向けプログラミング教室を比較。月謝・口コミ・無料体験情報を掲載。",
        "url": "https://www.kodomo-navi.com/programming",
        "numberOfItems": popularSchools.length,
        "itemListElement": popularSchools.map((s, i) => ({
          "@type": "ListItem",
          "position": i + 1,
          "name": s.name,
          "description": s.desc,
          "url": s.trialUrl || s.url || "https://www.kodomo-navi.com/programming",
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
        "name": "子供向けプログラミング教室",
        "description": "全国の子ども向けプログラミング教室を比較。月謝・対象年齢・無料体験情報で選べます。",
        "url": "https://www.kodomo-navi.com/programming",
        "inLanguage": "ja",
        "provider": {
          "@type": "Organization",
          "name": popularSchools[0].name,
          "url": popularSchools[0].url || popularSchools[0].trialUrl || "https://www.kodomo-navi.com/programming",
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
          <span style={{ fontSize: 13, color: "#888", fontWeight: 600 }}>プログラミング教室・パソコン教室</span>
        </div>
      </header>

      {/* Breadcrumb */}
      <nav aria-label="パンくず" style={{ maxWidth: 1100, margin: "0 auto", padding: "10px 24px" }}>
        <div style={{ fontSize: 12, color: "#888" }}>
          <Link href="/" style={{ color: "#1565C0", textDecoration: "none" }}>トップ</Link>
          {" › "}
          <span style={{ color: "#666" }}>プログラミング教室・パソコン教室</span>
        </div>
      </nav>

      {/* Hero */}
      <section style={{ background: "linear-gradient(135deg, #0D47A1, #1565C0)", padding: "52px 24px 48px" }}>
        <div style={{ maxWidth: 800, margin: "0 auto", textAlign: "center" }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 6, background: "rgba(255,255,255,.2)", borderRadius: 20, padding: "4px 16px", marginBottom: 16, fontSize: 12, color: "#fff", fontWeight: 700 }}>
            💻 全国47都道府県対応
          </div>
          <h1 style={{ fontSize: 30, fontWeight: 900, color: "#fff", marginBottom: 14, lineHeight: 1.4 }}>
            子供のプログラミング・パソコン教室<br />おすすめ比較【全国版】
          </h1>
          <p style={{ fontSize: 14, color: "rgba(255,255,255,.92)", lineHeight: 2, marginBottom: 24 }}>
            LITALICOワンダー・Tech Kids School・プログラボ・ヒューマンアカデミーなど人気スクールを都道府県別に比較。<br />
            月謝・対象年齢・口コミ・無料体験情報を掲載。
          </p>
          <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
            {["⭐ 口コミ多数掲載", "👶 3歳〜OK", "💰 月5,500円〜", "🤖 ロボット・Scratch対応"].map((b, i) => (
              <span key={i} style={{ fontSize: 13, color: "rgba(255,255,255,.9)", fontWeight: 700, background: "rgba(255,255,255,.15)", padding: "6px 14px", borderRadius: 20 }}>{b}</span>
            ))}
          </div>
        </div>
      </section>

      <div style={{ maxWidth: 1000, margin: "0 auto", padding: "36px 24px 60px" }}>

        {/* 都道府県グリッド */}
        <div style={{ background: "#fff", borderRadius: 18, padding: "28px 24px", marginBottom: 28, border: "1.5px solid #e8edf4", boxShadow: "0 2px 12px rgba(0,0,0,.05)" }}>
          <h2 style={{ fontSize: 18, fontWeight: 900, color: "#1B2A4A", marginBottom: 20, paddingBottom: 12, borderBottom: "2px solid #1565C020" }}>
            🗾 都道府県からプログラミング教室を探す
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(140px, 1fr))", gap: 8 }}>
            {ALL_PREFS_LIST.map((pref) => (
              <Link
                key={pref.slug}
                href={`/programming/${pref.slug}`}
                style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "10px 14px", background: "#fff", border: "1.5px solid #e8edf4", borderRadius: 10, textDecoration: "none", color: "#1B2A4A", fontWeight: 700, fontSize: 13, boxShadow: "0 1px 4px rgba(0,0,0,.04)" }}
              >
                <span>{pref.name}</span>
                <span style={{ color: "#1565C0", fontSize: 14 }}>›</span>
              </Link>
            ))}
          </div>
        </div>

        {/* 人気スクール一覧 */}
        <div style={{ background: "#fff", borderRadius: 18, padding: "28px 24px", marginBottom: 28, border: "1.5px solid #e8edf4", boxShadow: "0 2px 12px rgba(0,0,0,.05)" }}>
          <h2 style={{ fontSize: 18, fontWeight: 900, color: "#1B2A4A", marginBottom: 20, paddingBottom: 12, borderBottom: "2px solid #1565C020" }}>
            🏆 人気のプログラミングスクール
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: 14 }}>
            {popularSchools.map((s, i) => (
              <div key={i} style={{ background: "#fff", border: "1.5px solid #e8edf4", borderRadius: 14, padding: "20px 18px", boxShadow: "0 2px 8px rgba(0,0,0,.04)" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 10 }}>
                  <div style={{ width: 44, height: 44, borderRadius: 12, background: "linear-gradient(135deg, #1565C020, #0D47A130)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 22 }}>{s.emoji}</div>
                  <div>
                    <div style={{ fontSize: 14, fontWeight: 800, color: "#1B2A4A" }}>{s.name}</div>
                    <div style={{ fontSize: 12, color: "#888", marginTop: 2 }}>対象: {s.age}</div>
                  </div>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 8 }}>
                  <span style={{ fontSize: 13, color: "#1565C0", fontWeight: 700 }}>★ {s.rating}</span>
                  <span style={{ fontSize: 12, color: "#888" }}>月額 ¥{s.fee.toLocaleString()}〜</span>
                </div>
                <p style={{ fontSize: 12, color: "#666", lineHeight: 1.7, margin: 0 }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ */}
        <div style={{ background: "#fff", borderRadius: 18, padding: "28px 24px", marginBottom: 28, border: "1.5px solid #e8edf4", boxShadow: "0 2px 12px rgba(0,0,0,.05)" }}>
          <h2 style={{ fontSize: 18, fontWeight: 900, color: "#1B2A4A", marginBottom: 18, paddingBottom: 12, borderBottom: "2px solid #1565C020" }}>
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
          <h2 style={{ fontSize: 18, fontWeight: 900, color: "#1B2A4A", marginBottom: 16, paddingBottom: 12, borderBottom: "2px solid #1565C020" }}>
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
          <Link href="/genre/programming" style={{ display: "inline-flex", alignItems: "center", gap: 6, padding: "12px 24px", background: "#fff", border: "1.5px solid #90CAF9", borderRadius: 20, color: "#1565C0", fontWeight: 700, fontSize: 14, textDecoration: "none" }}>
            💻 プログラミングスクール一覧
          </Link>
          <Link href="/" style={{ display: "inline-flex", alignItems: "center", gap: 6, padding: "12px 24px", background: "linear-gradient(135deg, #0D47A1, #1565C0)", borderRadius: 20, color: "#fff", fontWeight: 700, fontSize: 14, textDecoration: "none", boxShadow: "0 4px 16px rgba(21,101,192,.3)" }}>
            ← トップページへ戻る
          </Link>
        </div>
      </div>
    </div>
  );
}
