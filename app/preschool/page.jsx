import Link from "next/link";
import { ALL_PREFS_LIST } from "./preschoolData";

export const metadata = {
  title: "子供の幼児教室・知育教室おすすめ｜全国都道府県別【コドモならいごと】",
  description: "全国の子ども向け幼児教室・知育教室を都道府県別に比較。七田式・ベビーパーク・公文・ヤマハ・学研など人気教室の月謝・コース・口コミを掲載。無料体験情報も。",
  keywords: ["子供 幼児教室", "知育教室 子ども", "幼児教育", "幼児教室 比較", "七田式 ベビーパーク"],
  alternates: {
    canonical: "https://www.kodomo-navi.com/preschool",
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "トップ", item: "https://www.kodomo-navi.com" },
    { "@type": "ListItem", position: 2, name: "幼児教室・知育教室", item: "https://www.kodomo-navi.com/preschool" },
  ],
};


const popularSchools = [
  { name: "七田式（しちだ）教室", rating: 4.6, fee: 16500, age: "0歳〜6歳", desc: "右脳教育の先駆け。フラッシュカード・記憶力・想像力を育てる独自プログラム。全国展開。", emoji: "🧒" },
  { name: "幼児教室ベビーパーク", rating: 4.5, fee: 14300, age: "0歳〜3歳", desc: "母子で通う幼児教室。愛着形成と知育を同時に実現。科学的根拠に基づいたプログラム。", emoji: "⭐" },
  { name: "公文式（くもん）", rating: 4.2, fee: 7150, age: "0歳〜", desc: "自学自習で考える力を育てる。国語・算数・英語の基礎力を無理なく積み上げる。全国教室展開。", emoji: "📚" },
  { name: "ヤマハ幼児教室", rating: 4.3, fee: 8800, age: "2歳〜5歳", desc: "音楽を通じた知育・感性教育。グループレッスンで社会性も育む。", emoji: "🧒" },
  { name: "学研教室", rating: 4.2, fee: 8800, age: "3歳〜", desc: "学習習慣を早期から育成。国語・算数の基礎を丁寧に指導。全国展開。", emoji: "📚" },
];

const faqs = [
  { q: "幼児教室は何歳から通えますか？", a: "0〜1歳から通えるベビークラスがあります。" },
  { q: "幼児教室の月謝相場は？", a: "7,000〜20,000円が相場です。" },
  { q: "幼児教室の効果は？", a: "集中力・記憶力・想像力・社会性が育ちます。" },
  { q: "保育園・幼稚園と併用できますか？", a: "はい。週1回から通える教室がほとんどです。" },
];

const blogs = [
  { href: "/blog/preschool-activity-ranking-2026", text: "幼児の習い事人気ランキング2026" },
  { href: "/blog/kids-activity-ranking-all", text: "子供の習い事人気ランキング" },
  { href: "/blog/toddler-dance-rhythmics-guide", text: "幼児の習い事選び方ガイド" },
];

export default function PreschoolTopPage() {
  return (
    <div style={{ fontFamily: "'Noto Sans JP','Hiragino Sans',sans-serif", background: "#f4f7fc", minHeight: "100vh" }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "WebPage",
        "@id": "https://www.kodomo-navi.com/preschool",
        "name": "子供の幼児教室・知育教室おすすめ｜全国都道府県別比較",
        "description": "全国の子ども向け幼児教室・知育教室を都道府県・エリア別に比較。月謝・コース・無料体験情報を掲載。",
        "url": "https://www.kodomo-navi.com/preschool",
        "inLanguage": "ja",
        "isPartOf": { "@id": "https://www.kodomo-navi.com/#website" },
        "speakable": { "@type": "SpeakableSpecification", "cssSelector": ["h1", "h2"] },
      }) } } />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "ItemList",
        "name": "子供の幼児教室・知育教室おすすめ人気スクール一覧",
        "description": "全国の子ども向け幼児教室・知育教室を比較。月謝・口コミ・無料体験情報を掲載。",
        "url": "https://www.kodomo-navi.com/preschool",
        "numberOfItems": popularSchools.length,
        "itemListElement": popularSchools.map((s, i) => ({
          "@type": "ListItem",
          "position": i + 1,
          "name": s.name,
          "description": s.desc,
          "url": s.trialUrl || s.url || "https://www.kodomo-navi.com/preschool",
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
        "name": "子供向け幼児・知育教室",
        "description": "全国の子ども向け幼児・知育教室を比較。月謝・対象年齢・無料体験情報で選べます。",
        "url": "https://www.kodomo-navi.com/preschool",
        "inLanguage": "ja",
        "provider": {
          "@type": "Organization",
          "name": popularSchools[0].name,
          "url": popularSchools[0].url || popularSchools[0].trialUrl || "https://www.kodomo-navi.com/preschool",
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
            <div style={{ width: 32, height: 32, borderRadius: 9, background: "linear-gradient(135deg, #E65100, #FF8F00)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 16 }}>🧒</div>
            <span style={{ fontSize: 15, fontWeight: 900, color: "#1B2A4A" }}>コドモならいごと</span>
          </Link>
          <span style={{ color: "#ddd" }}>›</span>
          <span style={{ fontSize: 13, color: "#888", fontWeight: 600 }}>幼児教室・知育教室</span>
        </div>
      </header>

      {/* Breadcrumb */}
      <nav aria-label="パンくず" style={{ maxWidth: 1100, margin: "0 auto", padding: "10px 24px" }}>
        <div style={{ fontSize: 12, color: "#888" }}>
          <Link href="/" style={{ color: "#FF8F00", textDecoration: "none" }}>トップ</Link>
          {" › "}
          <span style={{ color: "#666" }}>幼児教室・知育教室</span>
        </div>
      </nav>

      {/* Hero */}
      <section style={{ background: "linear-gradient(135deg, #E65100, #FF8F00)", padding: "52px 24px 48px" }}>
        <div style={{ maxWidth: 800, margin: "0 auto", textAlign: "center" }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 6, background: "rgba(255,255,255,.2)", borderRadius: 20, padding: "4px 16px", marginBottom: 16, fontSize: 12, color: "#fff", fontWeight: 700 }}>
            🧒 全国47都道府県対応
          </div>
          <h1 style={{ fontSize: 30, fontWeight: 900, color: "#fff", marginBottom: 14, lineHeight: 1.4 }}>
            子供の幼児教室・知育教室<br />おすすめ比較【全国版】
          </h1>
          <p style={{ fontSize: 14, color: "rgba(255,255,255,.92)", lineHeight: 2, marginBottom: 24 }}>
            七田式・ベビーパーク・公文・ヤマハ・学研など人気教室を都道府県別に比較。<br />
            月謝・対象年齢・口コミ・無料体験情報を掲載。
          </p>
          <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
            {["⭐ 口コミ多数掲載", "👶 0歳〜OK", "💰 月7,000円〜", "📚 知育・右脳教育"].map((b, i) => (
              <span key={i} style={{ fontSize: 13, color: "rgba(255,255,255,.9)", fontWeight: 700, background: "rgba(255,255,255,.15)", padding: "6px 14px", borderRadius: 20 }}>{b}</span>
            ))}
          </div>
        </div>
      </section>

      <div style={{ maxWidth: 1000, margin: "0 auto", padding: "36px 24px 60px" }}>

        {/* 都道府県グリッド */}
        <div style={{ background: "#fff", borderRadius: 18, padding: "28px 24px", marginBottom: 28, border: "1.5px solid #e8edf4", boxShadow: "0 2px 12px rgba(0,0,0,.05)" }}>
          <h2 style={{ fontSize: 18, fontWeight: 900, color: "#1B2A4A", marginBottom: 20, paddingBottom: 12, borderBottom: "2px solid #FFC10720" }}>
            🗾 都道府県から幼児教室を探す
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(140px, 1fr))", gap: 8 }}>
            {ALL_PREFS_LIST.map((pref) => (
              <Link
                key={pref.slug}
                href={`/preschool/${pref.slug}`}
                style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "10px 14px", background: "#fff", border: "1.5px solid #e8edf4", borderRadius: 10, textDecoration: "none", color: "#1B2A4A", fontWeight: 700, fontSize: 13, boxShadow: "0 1px 4px rgba(0,0,0,.04)" }}
              >
                <span>{pref.name}</span>
                <span style={{ color: "#FF8F00", fontSize: 14 }}>›</span>
              </Link>
            ))}
          </div>
        </div>

        {/* 人気教室一覧 */}
        <div style={{ background: "#fff", borderRadius: 18, padding: "28px 24px", marginBottom: 28, border: "1.5px solid #e8edf4", boxShadow: "0 2px 12px rgba(0,0,0,.05)" }}>
          <h2 style={{ fontSize: 18, fontWeight: 900, color: "#1B2A4A", marginBottom: 20, paddingBottom: 12, borderBottom: "2px solid #FFC10720" }}>
            🏆 人気の幼児教室・知育教室
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: 14 }}>
            {popularSchools.map((s, i) => (
              <div key={i} style={{ background: "#fff", border: "1.5px solid #e8edf4", borderRadius: 14, padding: "20px 18px", boxShadow: "0 2px 8px rgba(0,0,0,.04)" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 10 }}>
                  <div style={{ width: 44, height: 44, borderRadius: 12, background: "linear-gradient(135deg, #FFC10720, #FF8F0030)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 22 }}>{s.emoji}</div>
                  <div>
                    <div style={{ fontSize: 14, fontWeight: 800, color: "#1B2A4A" }}>{s.name}</div>
                    <div style={{ fontSize: 12, color: "#888", marginTop: 2 }}>対象: {s.age}</div>
                  </div>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 8 }}>
                  <span style={{ fontSize: 13, color: "#FF8F00", fontWeight: 700 }}>★ {s.rating}</span>
                  <span style={{ fontSize: 12, color: "#888" }}>月額 ¥{s.fee.toLocaleString()}〜</span>
                </div>
                <p style={{ fontSize: 12, color: "#666", lineHeight: 1.7, margin: 0 }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ */}
        <div style={{ background: "#fff", borderRadius: 18, padding: "28px 24px", marginBottom: 28, border: "1.5px solid #e8edf4", boxShadow: "0 2px 12px rgba(0,0,0,.05)" }}>
          <h2 style={{ fontSize: 18, fontWeight: 900, color: "#1B2A4A", marginBottom: 18, paddingBottom: 12, borderBottom: "2px solid #FFC10720" }}>
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
          <h2 style={{ fontSize: 18, fontWeight: 900, color: "#1B2A4A", marginBottom: 16, paddingBottom: 12, borderBottom: "2px solid #FFC10720" }}>
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
          <Link href="/genre/preschool" style={{ display: "inline-flex", alignItems: "center", gap: 6, padding: "12px 24px", background: "#fff", border: "1.5px solid #FFD082", borderRadius: 20, color: "#FF8F00", fontWeight: 700, fontSize: 14, textDecoration: "none" }}>
            🧒 幼児教室一覧
          </Link>
          <Link href="/" style={{ display: "inline-flex", alignItems: "center", gap: 6, padding: "12px 24px", background: "linear-gradient(135deg, #E65100, #FF8F00)", borderRadius: 20, color: "#fff", fontWeight: 700, fontSize: 14, textDecoration: "none", boxShadow: "0 4px 16px rgba(230,81,0,.3)" }}>
            ← トップページへ戻る
          </Link>
        </div>
      </div>
    </div>
  );
}
