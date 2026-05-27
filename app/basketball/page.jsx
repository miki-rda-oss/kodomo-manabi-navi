import Link from "next/link";
import { ALL_PREFS_LIST } from "./basketballData";

export const metadata = {
  title: "子供のバスケットボールスクールおすすめ｜全国都道府県別【コドモならいごと】",
  description: "全国の子ども向けバスケットボールスクール・教室を都道府県別に比較。千葉ジェッツ・川崎ブレイブサンダース・大阪エヴェッサなど人気スクールの月謝・コース・口コミを掲載。無料体験情報も。",
  keywords: ["子供 バスケットボール教室", "バスケ 子ども", "キッズバスケット", "バスケスクール 比較", "ミニバスケット 小学生"],
  alternates: {
    canonical: "https://www.kodomo-navi.com/basketball",
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "トップ", item: "https://www.kodomo-navi.com" },
    { "@type": "ListItem", position: 2, name: "バスケットボールスクール・教室", item: "https://www.kodomo-navi.com/basketball" },
  ],
};


const popularSchools = [
  { name: "千葉ジェッツ バスケットボールスクール", rating: 4.7, fee: 7700, age: "3歳〜", desc: "Bリーグ・千葉ジェッツが運営する公式スクール。プロの指導メソッドで基礎から本格的に学べる。", emoji: "🏀" },
  { name: "川崎ブレイブサンダース バスケットボールスクール", rating: 4.6, fee: 7150, age: "3歳〜", desc: "Bリーグ・川崎ブレイブサンダースが運営。プロクラブの本格指導が受けられる。", emoji: "⭐" },
  { name: "大阪エヴェッサ バスケットボールスクール", rating: 4.5, fee: 6600, age: "3歳〜", desc: "Bリーグ・大阪エヴェッサが運営。プロの環境で基礎から本格的に学べる。", emoji: "🏀" },
  { name: "バスケットボールスクール ドリームコート", rating: 4.4, fee: 6600, age: "4歳〜", desc: "専門コーチによる技術指導。ドリブル・シュート・パスの基礎を楽しく学ぶ。", emoji: "⭐" },
  { name: "ミニバスケットボールクラブ", rating: 4.3, fee: 3300, age: "小学生〜", desc: "地域密着型のミニバスケットクラブ。チームワークと基礎技術を習得。", emoji: "🏀" },
  { name: "スポーツデポ バスケット教室", rating: 4.2, fee: 5500, age: "3歳〜", desc: "全国展開のスポーツショップが運営。基礎から楽しくバスケットを学べる。", emoji: "⭐" },
];

const faqs = [
  { q: "何歳からバスケを習えますか？", a: "3〜4歳から通えるキッズクラスがあります。ミニバスケットボール対応の幼児コースを設けているスクールも多くあります。" },
  { q: "月謝相場は？", a: "週1回で3,000〜7,000円が一般的です。Bリーグクラブ運営のスクールは5,000〜8,000円程度が多いです。" },
  { q: "女の子でもバスケを習えますか？", a: "もちろんです。女子バスケも人気が高まっており、多くのスクールで男女問わず受け入れています。" },
  { q: "バスケを習う効果は？", a: "瞬発力・判断力・チームワーク・背が伸びやすくなる効果も期待できます。運動能力全般が向上します。" },
];

const blogs = [
  { href: "/blog/kids-soccer-benefits-guide", text: "体を動かす習い事のメリット" },
  { href: "/blog/kids-activity-ranking-all", text: "子供の習い事人気ランキング" },
  { href: "/blog/kids-sports-dance-comparison", text: "スポーツ系習い事比較" },
];

export default function BasketballTopPage() {
  return (
    <div style={{ fontFamily: "'Noto Sans JP','Hiragino Sans',sans-serif", background: "#f4f7fc", minHeight: "100vh" }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "WebPage",
        "@id": "https://www.kodomo-navi.com/basketball",
        "name": "子供のバスケットボールスクールおすすめ｜全国都道府県別比較",
        "description": "全国の子ども向けバスケットボールスクールを都道府県・エリア別に比較。月謝・コース・無料体験情報を掲載。",
        "url": "https://www.kodomo-navi.com/basketball",
        "inLanguage": "ja",
        "isPartOf": { "@id": "https://www.kodomo-navi.com/#website" },
        "speakable": { "@type": "SpeakableSpecification", "cssSelector": ["h1", "h2"] },
      }) } } />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "ItemList",
        "name": "子供のバスケットボールスクールおすすめ人気スクール一覧",
        "description": "全国の子ども向けバスケットボールスクールを比較。月謝・口コミ・無料体験情報を掲載。",
        "url": "https://www.kodomo-navi.com/basketball",
        "numberOfItems": popularSchools.length,
        "itemListElement": popularSchools.map((s, i) => ({
          "@type": "ListItem",
          "position": i + 1,
          "name": s.name,
          "description": s.desc,
          "url": s.trialUrl || s.url || "https://www.kodomo-navi.com/basketball",
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
        "name": "子供向けバスケットボール教室",
        "description": "全国の子ども向けバスケットボール教室を比較。月謝・対象年齢・無料体験情報で選べます。",
        "url": "https://www.kodomo-navi.com/basketball",
        "inLanguage": "ja",
        "provider": {
          "@type": "Organization",
          "name": popularSchools[0].name,
          "url": popularSchools[0].url || popularSchools[0].trialUrl || "https://www.kodomo-navi.com/basketball",
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
            <div style={{ width: 32, height: 32, borderRadius: 9, background: "linear-gradient(135deg, #BF360C, #E65100)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 16 }}>🧒</div>
            <span style={{ fontSize: 15, fontWeight: 900, color: "#1B2A4A" }}>コドモならいごと</span>
          </Link>
          <span style={{ color: "#ddd" }}>›</span>
          <span style={{ fontSize: 13, color: "#888", fontWeight: 600 }}>バスケットボールスクール・教室</span>
        </div>
      </header>

      {/* Breadcrumb */}
      <nav aria-label="パンくず" style={{ maxWidth: 1100, margin: "0 auto", padding: "10px 24px" }}>
        <div style={{ fontSize: 12, color: "#888" }}>
          <Link href="/" style={{ color: "#E65100", textDecoration: "none" }}>トップ</Link>
          {" › "}
          <span style={{ color: "#666" }}>バスケットボールスクール・教室</span>
        </div>
      </nav>

      {/* Hero */}
      <section style={{ background: "linear-gradient(135deg, #BF360C, #E65100)", padding: "52px 24px 48px" }}>
        <div style={{ maxWidth: 800, margin: "0 auto", textAlign: "center" }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 6, background: "rgba(255,255,255,.2)", borderRadius: 20, padding: "4px 16px", marginBottom: 16, fontSize: 12, color: "#fff", fontWeight: 700 }}>
            🏀 全国47都道府県対応
          </div>
          <h1 style={{ fontSize: 30, fontWeight: 900, color: "#fff", marginBottom: 14, lineHeight: 1.4 }}>
            子供のバスケットボールスクール<br />おすすめ比較【全国版】
          </h1>
          <p style={{ fontSize: 14, color: "rgba(255,255,255,.92)", lineHeight: 2, marginBottom: 24 }}>
            千葉ジェッツ・川崎ブレイブサンダース・大阪エヴェッサなど人気スクールを都道府県別に比較。<br />
            月謝・対象年齢・口コミ・無料体験情報を掲載。
          </p>
          <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
            {["⭐ 口コミ多数掲載", "👶 3歳〜OK", "💰 月3,300円〜", "🏀 Bリーグ公式スクール"].map((b, i) => (
              <span key={i} style={{ fontSize: 13, color: "rgba(255,255,255,.9)", fontWeight: 700, background: "rgba(255,255,255,.15)", padding: "6px 14px", borderRadius: 20 }}>{b}</span>
            ))}
          </div>
        </div>
      </section>

      <div style={{ maxWidth: 1000, margin: "0 auto", padding: "36px 24px 60px" }}>

        {/* 都道府県グリッド */}
        <div style={{ background: "#fff", borderRadius: 18, padding: "28px 24px", marginBottom: 28, border: "1.5px solid #e8edf4", boxShadow: "0 2px 12px rgba(0,0,0,.05)" }}>
          <h2 style={{ fontSize: 18, fontWeight: 900, color: "#1B2A4A", marginBottom: 20, paddingBottom: 12, borderBottom: "2px solid #E6510020" }}>
            🗾 都道府県からバスケットボールスクールを探す
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(140px, 1fr))", gap: 8 }}>
            {ALL_PREFS_LIST.map((pref) => (
              <Link
                key={pref.slug}
                href={`/basketball/${pref.slug}`}
                style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "10px 14px", background: "#fff", border: "1.5px solid #e8edf4", borderRadius: 10, textDecoration: "none", color: "#1B2A4A", fontWeight: 700, fontSize: 13, boxShadow: "0 1px 4px rgba(0,0,0,.04)" }}
              >
                <span>{pref.name}</span>
                <span style={{ color: "#E65100", fontSize: 14 }}>›</span>
              </Link>
            ))}
          </div>
        </div>

        {/* 人気スクール一覧 */}
        <div style={{ background: "#fff", borderRadius: 18, padding: "28px 24px", marginBottom: 28, border: "1.5px solid #e8edf4", boxShadow: "0 2px 12px rgba(0,0,0,.05)" }}>
          <h2 style={{ fontSize: 18, fontWeight: 900, color: "#1B2A4A", marginBottom: 20, paddingBottom: 12, borderBottom: "2px solid #E6510020" }}>
            🏆 人気のバスケットボールスクール
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: 14 }}>
            {popularSchools.map((s, i) => (
              <div key={i} style={{ background: "#fff", border: "1.5px solid #e8edf4", borderRadius: 14, padding: "20px 18px", boxShadow: "0 2px 8px rgba(0,0,0,.04)" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 10 }}>
                  <div style={{ width: 44, height: 44, borderRadius: 12, background: "linear-gradient(135deg, #E6510020, #BF360C30)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 22 }}>{s.emoji}</div>
                  <div>
                    <div style={{ fontSize: 14, fontWeight: 800, color: "#1B2A4A" }}>{s.name}</div>
                    <div style={{ fontSize: 12, color: "#888", marginTop: 2 }}>対象: {s.age}</div>
                  </div>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 8 }}>
                  <span style={{ fontSize: 13, color: "#E65100", fontWeight: 700 }}>★ {s.rating}</span>
                  <span style={{ fontSize: 12, color: "#888" }}>月額 ¥{s.fee.toLocaleString()}〜</span>
                </div>
                <p style={{ fontSize: 12, color: "#666", lineHeight: 1.7, margin: 0 }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ */}
        <div style={{ background: "#fff", borderRadius: 18, padding: "28px 24px", marginBottom: 28, border: "1.5px solid #e8edf4", boxShadow: "0 2px 12px rgba(0,0,0,.05)" }}>
          <h2 style={{ fontSize: 18, fontWeight: 900, color: "#1B2A4A", marginBottom: 18, paddingBottom: 12, borderBottom: "2px solid #E6510020" }}>
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
          <h2 style={{ fontSize: 18, fontWeight: 900, color: "#1B2A4A", marginBottom: 16, paddingBottom: 12, borderBottom: "2px solid #E6510020" }}>
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
          <Link href="/genre/basketball" style={{ display: "inline-flex", alignItems: "center", gap: 6, padding: "12px 24px", background: "#fff", border: "1.5px solid #FFCCBC", borderRadius: 20, color: "#E65100", fontWeight: 700, fontSize: 14, textDecoration: "none" }}>
            🏀 バスケスクール一覧
          </Link>
          <Link href="/" style={{ display: "inline-flex", alignItems: "center", gap: 6, padding: "12px 24px", background: "linear-gradient(135deg, #BF360C, #E65100)", borderRadius: 20, color: "#fff", fontWeight: 700, fontSize: 14, textDecoration: "none", boxShadow: "0 4px 16px rgba(230,81,0,.3)" }}>
            ← トップページへ戻る
          </Link>
        </div>
      </div>
    </div>
  );
}
