import Link from "next/link";
import { ALL_PREFS_LIST } from "./gymnasticsData";

export const metadata = {
  title: "子供の体操教室おすすめ｜全国都道府県別【コドモならいごと】",
  description: "全国の子ども向け体操教室・体操スクールを都道府県別に比較。コナミスポーツ・忍者ナイン・セントラルスポーツなど人気スクールの月謝・コース・口コミを掲載。無料体験情報も。",
  keywords: ["子供 体操教室", "体操 子ども", "キッズ体操", "体操スクール 比較", "運動神経 小学生"],
  alternates: {
    canonical: "https://www.kodomo-navi.com/gymnastics",
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "トップ", item: "https://www.kodomo-navi.com" },
    { "@type": "ListItem", position: 2, name: "体操教室・体操スクール", item: "https://www.kodomo-navi.com/gymnastics" },
  ],
};


const popularSchools = [
  { name: "コナミスポーツ体操教室", rating: 4.3, fee: 7700, age: "2歳〜", desc: "全国展開のスポーツクラブが運営。マット運動・跳び箱・鉄棒など基礎体操を楽しく学ぶ。", emoji: "🤸" },
  { name: "忍者ナイン", rating: 4.5, fee: 8800, age: "3歳〜12歳", desc: "9つの身体能力を育てる独自プログラム。運動神経を総合的に鍛える体操・運動スクール。", emoji: "🤸" },
  { name: "セントラルスポーツ体操教室", rating: 4.2, fee: 7150, age: "3歳〜", desc: "全国展開。体操の基礎から安全に楽しく学べる環境。", emoji: "🤸" },
  { name: "地域密着体操クラブ", rating: 4.2, fee: 4400, age: "3歳〜", desc: "地域に根ざした少人数制体操クラブ。マット運動・鉄棒・跳び箱の基礎をアットホームな環境で習得。", emoji: "⭐" },
  { name: "スポーツ少年団体操部", rating: 4.1, fee: 4400, age: "3歳〜", desc: "地域のスポーツ少年団体操部。低価格で本格的な体操指導を受けられる。大会参加の機会も充実。", emoji: "⭐" },
  { name: "ジュニア体操アカデミー", rating: 4.3, fee: 5500, age: "2歳〜", desc: "幼児から小学生まで対応。マット・鉄棒・跳び箱・平均台を安全に楽しく学ぶ少人数制スクール。", emoji: "🤸" },
];

const faqs = [
  { q: "体操教室は何歳から？", a: "2〜3歳から通えます。幼児向けクラスを設けているスクールが多く、早い時期から体幹・柔軟性・バランス感覚を育てられます。" },
  { q: "月謝相場は？", a: "週1回で4,000〜8,000円が一般的です。スポーツクラブ運営のスクールは7,000〜9,000円程度、地域の体操クラブは4,000〜6,000円程度が相場です。" },
  { q: "体操を習う効果は？", a: "体幹・柔軟性・バランス感覚・運動神経が育ちます。姿勢の改善や転倒予防にも効果的で、他のスポーツへの基礎能力向上にもつながります。" },
  { q: "女の子にも体操はおすすめですか？", a: "はい。柔軟性・姿勢が良くなります。また集中力や身体コントロール能力が高まり、ダンスや他のスポーツにも役立つ能力が身につきます。" },
];

const blogs = [
  { href: "/blog/kids-activity-ranking-all", text: "子供の習い事人気ランキング" },
  { href: "/blog/kids-activity-cost-annual", text: "子供の習い事年間費用" },
];

export default function GymnasticsTopPage() {
  return (
    <div style={{ fontFamily: "'Noto Sans JP','Hiragino Sans',sans-serif", background: "#f4f7fc", minHeight: "100vh" }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "WebPage",
        "@id": "https://www.kodomo-navi.com/gymnastics",
        "name": "子供の体操教室おすすめ｜全国都道府県別比較",
        "description": "全国の子ども向け体操教室を都道府県・エリア別に比較。月謝・コース・無料体験情報を掲載。",
        "url": "https://www.kodomo-navi.com/gymnastics",
        "inLanguage": "ja",
        "isPartOf": { "@id": "https://www.kodomo-navi.com/#website" },
        "speakable": { "@type": "SpeakableSpecification", "cssSelector": ["h1", "h2"] },
      }) } } />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "ItemList",
        "name": "子供の体操教室おすすめ人気スクール一覧",
        "description": "全国の子ども向け体操教室を比較。月謝・口コミ・無料体験情報を掲載。",
        "url": "https://www.kodomo-navi.com/gymnastics",
        "numberOfItems": popularSchools.length,
        "itemListElement": popularSchools.map((s, i) => ({
          "@type": "ListItem",
          "position": i + 1,
          "name": s.name,
          "description": s.desc,
          "url": s.trialUrl || s.url || "https://www.kodomo-navi.com/gymnastics",
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
        "name": "子供向け体操教室",
        "description": "全国の子ども向け体操教室を比較。月謝・対象年齢・無料体験情報で選べます。",
        "url": "https://www.kodomo-navi.com/gymnastics",
        "inLanguage": "ja",
        "provider": {
          "@type": "Organization",
          "name": popularSchools[0].name,
          "url": popularSchools[0].url || popularSchools[0].trialUrl || "https://www.kodomo-navi.com/gymnastics",
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
            <div style={{ width: 32, height: 32, borderRadius: 9, background: "linear-gradient(135deg, #FF6F00, #E65100)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 16 }}>🧒</div>
            <span style={{ fontSize: 15, fontWeight: 900, color: "#1B2A4A" }}>コドモならいごと</span>
          </Link>
          <span style={{ color: "#ddd" }}>›</span>
          <span style={{ fontSize: 13, color: "#888", fontWeight: 600 }}>体操教室・体操スクール</span>
        </div>
      </header>

      {/* Breadcrumb */}
      <nav aria-label="パンくず" style={{ maxWidth: 1100, margin: "0 auto", padding: "10px 24px" }}>
        <div style={{ fontSize: 12, color: "#888" }}>
          <Link href="/" style={{ color: "#FF6F00", textDecoration: "none" }}>トップ</Link>
          {" › "}
          <span style={{ color: "#666" }}>体操教室・体操スクール</span>
        </div>
      </nav>

      {/* Hero */}
      <section style={{ background: "linear-gradient(135deg, #BF360C, #E64A19)", padding: "52px 24px 48px" }}>
        <div style={{ maxWidth: 800, margin: "0 auto", textAlign: "center" }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 6, background: "rgba(255,255,255,.2)", borderRadius: 20, padding: "4px 16px", marginBottom: 16, fontSize: 12, color: "#fff", fontWeight: 700 }}>
            🤸 全国47都道府県対応
          </div>
          <h1 style={{ fontSize: 30, fontWeight: 900, color: "#fff", marginBottom: 14, lineHeight: 1.4 }}>
            子供の体操教室・体操スクール<br />おすすめ比較【全国版】
          </h1>
          <p style={{ fontSize: 14, color: "rgba(255,255,255,.92)", lineHeight: 2, marginBottom: 24 }}>
            コナミスポーツ・忍者ナイン・セントラルスポーツなど人気スクールを都道府県別に比較。<br />
            月謝・対象年齢・口コミ・無料体験情報を掲載。
          </p>
          <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
            {["⭐ 口コミ多数掲載", "👶 2歳〜OK", "💰 月4,400円〜", "🤸 運動神経UP"].map((b, i) => (
              <span key={i} style={{ fontSize: 13, color: "rgba(255,255,255,.9)", fontWeight: 700, background: "rgba(255,255,255,.15)", padding: "6px 14px", borderRadius: 20 }}>{b}</span>
            ))}
          </div>
        </div>
      </section>

      <div style={{ maxWidth: 1000, margin: "0 auto", padding: "36px 24px 60px" }}>

        {/* 都道府県グリッド */}
        <div style={{ background: "#fff", borderRadius: 18, padding: "28px 24px", marginBottom: 28, border: "1.5px solid #e8edf4", boxShadow: "0 2px 12px rgba(0,0,0,.05)" }}>
          <h2 style={{ fontSize: 18, fontWeight: 900, color: "#1B2A4A", marginBottom: 20, paddingBottom: 12, borderBottom: "2px solid #FF6F0020" }}>
            🗾 都道府県から体操教室を探す
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(140px, 1fr))", gap: 8 }}>
            {ALL_PREFS_LIST.map((pref) => (
              <Link
                key={pref.slug}
                href={`/gymnastics/${pref.slug}`}
                style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "10px 14px", background: "#fff", border: "1.5px solid #e8edf4", borderRadius: 10, textDecoration: "none", color: "#1B2A4A", fontWeight: 700, fontSize: 13, boxShadow: "0 1px 4px rgba(0,0,0,.04)" }}
              >
                <span>{pref.name}</span>
                <span style={{ color: "#FF6F00", fontSize: 14 }}>›</span>
              </Link>
            ))}
          </div>
        </div>

        {/* 人気スクール一覧 */}
        <div style={{ background: "#fff", borderRadius: 18, padding: "28px 24px", marginBottom: 28, border: "1.5px solid #e8edf4", boxShadow: "0 2px 12px rgba(0,0,0,.05)" }}>
          <h2 style={{ fontSize: 18, fontWeight: 900, color: "#1B2A4A", marginBottom: 20, paddingBottom: 12, borderBottom: "2px solid #FF6F0020" }}>
            🏆 人気の体操スクール
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: 14 }}>
            {popularSchools.map((s, i) => (
              <div key={i} style={{ background: "#fff", border: "1.5px solid #e8edf4", borderRadius: 14, padding: "20px 18px", boxShadow: "0 2px 8px rgba(0,0,0,.04)" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 10 }}>
                  <div style={{ width: 44, height: 44, borderRadius: 12, background: "linear-gradient(135deg, #FF6F0020, #E6510030)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 22 }}>{s.emoji}</div>
                  <div>
                    <div style={{ fontSize: 14, fontWeight: 800, color: "#1B2A4A" }}>{s.name}</div>
                    <div style={{ fontSize: 12, color: "#888", marginTop: 2 }}>対象: {s.age}</div>
                  </div>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 8 }}>
                  <span style={{ fontSize: 13, color: "#FF6F00", fontWeight: 700 }}>★ {s.rating}</span>
                  <span style={{ fontSize: 12, color: "#888" }}>月額 ¥{s.fee.toLocaleString()}〜</span>
                </div>
                <p style={{ fontSize: 12, color: "#666", lineHeight: 1.7, margin: 0 }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ */}
        <div style={{ background: "#fff", borderRadius: 18, padding: "28px 24px", marginBottom: 28, border: "1.5px solid #e8edf4", boxShadow: "0 2px 12px rgba(0,0,0,.05)" }}>
          <h2 style={{ fontSize: 18, fontWeight: 900, color: "#1B2A4A", marginBottom: 18, paddingBottom: 12, borderBottom: "2px solid #FF6F0020" }}>
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
          <h2 style={{ fontSize: 18, fontWeight: 900, color: "#1B2A4A", marginBottom: 16, paddingBottom: 12, borderBottom: "2px solid #FF6F0020" }}>
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
          <Link href="/genre/gymnastics" style={{ display: "inline-flex", alignItems: "center", gap: 6, padding: "12px 24px", background: "#fff", border: "1.5px solid #FFCC80", borderRadius: 20, color: "#FF6F00", fontWeight: 700, fontSize: 14, textDecoration: "none" }}>
            🤸 体操スクール一覧
          </Link>
          <Link href="/" style={{ display: "inline-flex", alignItems: "center", gap: 6, padding: "12px 24px", background: "linear-gradient(135deg, #FF6F00, #E65100)", borderRadius: 20, color: "#fff", fontWeight: 700, fontSize: 14, textDecoration: "none", boxShadow: "0 4px 16px rgba(255,111,0,.3)" }}>
            ← トップページへ戻る
          </Link>
        </div>
      </div>
    </div>
  );
}
