import Link from "next/link";
import { JUKU_PREFS } from "./jukuData";

export const metadata = {
  title: "子供の学習塾・学習教室おすすめ｜全国都道府県別【コドモならいごと】",
  description: "全国の子供向け学習塾・学習教室を都道府県・エリア別に比較。公文式・学研・個別指導塾など人気塾の料金・口コミを掲載。",
  keywords: ["子供 学習塾", "学習塾 子ども", "公文式", "学研教室", "個別指導塾 比較"],
  alternates: {
    canonical: "https://www.kodomo-navi.com/juku",
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "トップ", item: "https://www.kodomo-navi.com" },
    { "@type": "ListItem", position: 2, name: "学習塾・学習教室", item: "https://www.kodomo-navi.com/juku" },
  ],
};


const ALL_PREFS_LIST = Object.entries(JUKU_PREFS).map(([slug, data]) => ({ slug, name: data.name }));

const popularSchools = [
  { name: "公文式（くもん）", rating: 4.2, fee: 7150, age: "2歳〜", desc: "自学自習で考える力を育てる公文式。全国16,000教室以上展開。国語・算数・英語の基礎力を無理なく積み上げる。", emoji: "📝" },
  { name: "学研教室", rating: 4.3, fee: 8800, age: "3歳〜", desc: "学習習慣を早期から育成。国語・算数の基礎を丁寧に指導。少人数グループ形式で全国展開。", emoji: "✏️" },
  { name: "個別教室のトライ", rating: 4.4, fee: 11000, age: "小学生〜", desc: "マンツーマン指導で苦手科目を克服。子どものペースに合わせたカリキュラムで確実に伸ばす。", emoji: "🎓" },
  { name: "SAPIXキッズ", rating: 4.6, fee: 16500, age: "小学生〜", desc: "中学受験専門塾。最難関校への合格実績多数。東京・大阪中心展開。", emoji: "🏆" },
  { name: "明光義塾", rating: 4.2, fee: 9900, age: "小学生〜", desc: "「わかった！」を大切にする対話式学習塾。全国2,000教室以上。", emoji: "💡" },
  { name: "栄光ゼミナール", rating: 4.3, fee: 12100, age: "小学生〜", desc: "少人数指導で一人ひとりに合った学習計画。中学受験から定期テスト対策まで幅広く対応。", emoji: "⭐" },
];

const faqs = [
  { q: "子供の学習塾は何歳から始めるべき？", a: "公文式・学研教室は2〜3歳から通えるコースがあります。一般的な学習塾は小学生からが多いです。" },
  { q: "学習塾の月謝相場は？", a: "週1〜2回で月7,000〜16,000円が目安。個別指導は高め、グループ指導は比較的リーズナブルです。" },
  { q: "公文式と学研教室の違いは？", a: "公文式はプリント学習中心の自学自習方式で先取り学習が特徴。学研教室は先生が丁寧に指導する少人数グループ形式です。" },
  { q: "中学受験対策はいつから始めるべき？", a: "小学3〜4年生から始めるのが一般的です。難関校を目指す場合はSAPIXなど専門塾への早めの入塾をおすすめします。" },
];

const blogs = [
  { href: "/blog/kumon-vs-gakken-complete-comparison", text: "公文式 vs 学研教室 徹底比較2026" },
  { href: "/blog/kids-activity-ranking-all", text: "子供の習い事人気ランキング" },
  { href: "/blog/kids-activity-cost-annual", text: "子供の習い事 年間費用の相場" },
];

const primaryColor = "#1565C0";
const secondaryColor = "#0D47A1";

export default function JukuTopPage() {
  return (
    <div style={{ fontFamily: "'Noto Sans JP','Hiragino Sans',sans-serif", background: "#f4f7fc", minHeight: "100vh" }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "WebPage",
        "@id": "https://www.kodomo-navi.com/juku",
        "name": "子供の学習塾・学習教室おすすめ｜全国都道府県別比較",
        "description": "全国の子ども向け学習塾・学習教室を都道府県・エリア別に比較。月謝・コース・無料体験情報を掲載。",
        "url": "https://www.kodomo-navi.com/juku",
        "inLanguage": "ja",
        "isPartOf": { "@id": "https://www.kodomo-navi.com/#website" },
        "speakable": { "@type": "SpeakableSpecification", "cssSelector": ["h1", "h2"] },
      }) } } />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "ItemList",
        "name": "子供の学習塾・学習教室おすすめ人気スクール一覧",
        "description": "全国の子ども向け学習塾・学習教室を比較。月謝・口コミ・無料体験情報を掲載。",
        "url": "https://www.kodomo-navi.com/juku",
        "numberOfItems": popularSchools.length,
        "itemListElement": popularSchools.map((s, i) => ({
          "@type": "ListItem",
          "position": i + 1,
          "name": s.name,
          "description": s.desc,
          "url": s.trialUrl || s.url || "https://www.kodomo-navi.com/juku",
        })),
      }) } } />

      {/* Header */}
      <header style={{ background: "#fff", borderBottom: "1px solid #e8edf4", boxShadow: "0 2px 8px rgba(0,0,0,.05)", position: "sticky", top: 0, zIndex: 100 }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 24px", display: "flex", alignItems: "center", gap: 10, height: 56 }}>
          <Link href="/" style={{ display: "flex", alignItems: "center", gap: 8, textDecoration: "none" }}>
            <div style={{ width: 32, height: 32, borderRadius: 9, background: `linear-gradient(135deg, ${primaryColor}, ${secondaryColor})`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 16 }}>🧒</div>
            <span style={{ fontSize: 15, fontWeight: 900, color: "#1B2A4A" }}>コドモならいごと</span>
          </Link>
          <span style={{ color: "#ddd" }}>›</span>
          <span style={{ fontSize: 13, color: "#888", fontWeight: 600 }}>学習塾・学習教室</span>
        </div>
      </header>

      {/* Breadcrumb */}
      <nav aria-label="パンくず" style={{ maxWidth: 1100, margin: "0 auto", padding: "10px 24px" }}>
        <div style={{ fontSize: 12, color: "#888" }}>
          <Link href="/" style={{ color: primaryColor, textDecoration: "none" }}>トップ</Link>
          {" › "}
          <span style={{ color: "#666" }}>学習塾・学習教室</span>
        </div>
      </nav>

      {/* Hero */}
      <section style={{ background: `linear-gradient(135deg, ${secondaryColor}, ${primaryColor})`, padding: "52px 24px 48px" }}>
        <div style={{ maxWidth: 800, margin: "0 auto", textAlign: "center" }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 6, background: "rgba(255,255,255,.2)", borderRadius: 20, padding: "4px 16px", marginBottom: 16, fontSize: 12, color: "#fff", fontWeight: 700 }}>
            📚 全国47都道府県対応
          </div>
          <h1 style={{ fontSize: 30, fontWeight: 900, color: "#fff", marginBottom: 14, lineHeight: 1.4 }}>
            子供の学習塾・学習教室<br />全国・都道府県別
          </h1>
          <p style={{ fontSize: 14, color: "rgba(255,255,255,.92)", lineHeight: 2, marginBottom: 24 }}>
            お近くの学習塾・学習教室を探そう。公文式・学研から個別指導塾まで比較できます。
          </p>
          <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
            {["⭐ 口コミ多数掲載", "👶 2歳〜OK", "💰 月7,150円〜", "📝 公文・学研対応"].map((b, i) => (
              <span key={i} style={{ fontSize: 13, color: "rgba(255,255,255,.9)", fontWeight: 700, background: "rgba(255,255,255,.15)", padding: "6px 14px", borderRadius: 20 }}>{b}</span>
            ))}
          </div>
          <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap", marginTop: 20 }}>
            {["公文式・学研など老舗が充実", "個別指導から集団授業まで", "受験対策から基礎学力まで対応"].map((b, i) => (
              <span key={i} style={{ fontSize: 12, color: "rgba(255,255,255,.85)", background: "rgba(255,255,255,.1)", padding: "5px 12px", borderRadius: 12, border: "1px solid rgba(255,255,255,.2)" }}>{b}</span>
            ))}
          </div>
        </div>
      </section>

      <div style={{ maxWidth: 1000, margin: "0 auto", padding: "36px 24px 60px" }}>

        {/* 都道府県グリッド */}
        <div style={{ background: "#fff", borderRadius: 18, padding: "28px 24px", marginBottom: 28, border: "1.5px solid #e8edf4", boxShadow: "0 2px 12px rgba(0,0,0,.05)" }}>
          <h2 style={{ fontSize: 18, fontWeight: 900, color: "#1B2A4A", marginBottom: 20, paddingBottom: 12, borderBottom: `2px solid ${primaryColor}20` }}>
            🗾 都道府県から学習塾・学習教室を探す
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(140px, 1fr))", gap: 8 }}>
            {ALL_PREFS_LIST.map((pref) => (
              <Link
                key={pref.slug}
                href={`/juku/${pref.slug}`}
                style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "10px 14px", background: "#fff", border: "1.5px solid #e8edf4", borderRadius: 10, textDecoration: "none", color: "#1B2A4A", fontWeight: 700, fontSize: 13, boxShadow: "0 1px 4px rgba(0,0,0,.04)" }}
              >
                <span>{pref.name}</span>
                <span style={{ color: primaryColor, fontSize: 14 }}>›</span>
              </Link>
            ))}
          </div>
        </div>

        {/* 人気塾一覧 */}
        <div style={{ background: "#fff", borderRadius: 18, padding: "28px 24px", marginBottom: 28, border: "1.5px solid #e8edf4", boxShadow: "0 2px 12px rgba(0,0,0,.05)" }}>
          <h2 style={{ fontSize: 18, fontWeight: 900, color: "#1B2A4A", marginBottom: 20, paddingBottom: 12, borderBottom: `2px solid ${primaryColor}20` }}>
            🏆 人気の学習塾・学習教室
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: 14 }}>
            {popularSchools.map((s, i) => (
              <div key={i} style={{ background: "#fff", border: "1.5px solid #e8edf4", borderRadius: 14, padding: "20px 18px", boxShadow: "0 2px 8px rgba(0,0,0,.04)" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 10 }}>
                  <div style={{ width: 44, height: 44, borderRadius: 12, background: `linear-gradient(135deg, ${primaryColor}20, ${secondaryColor}30)`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 22 }}>{s.emoji}</div>
                  <div>
                    <div style={{ fontSize: 14, fontWeight: 800, color: "#1B2A4A" }}>{s.name}</div>
                    <div style={{ fontSize: 12, color: "#888", marginTop: 2 }}>対象: {s.age}</div>
                  </div>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 8 }}>
                  <span style={{ fontSize: 13, color: primaryColor, fontWeight: 700 }}>★ {s.rating}</span>
                  <span style={{ fontSize: 12, color: "#888" }}>月額 ¥{s.fee.toLocaleString()}〜</span>
                </div>
                <p style={{ fontSize: 12, color: "#666", lineHeight: 1.7, margin: 0 }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ */}
        <div style={{ background: "#fff", borderRadius: 18, padding: "28px 24px", marginBottom: 28, border: "1.5px solid #e8edf4", boxShadow: "0 2px 12px rgba(0,0,0,.05)" }}>
          <h2 style={{ fontSize: 18, fontWeight: 900, color: "#1B2A4A", marginBottom: 18, paddingBottom: 12, borderBottom: `2px solid ${primaryColor}20` }}>
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
          <h2 style={{ fontSize: 18, fontWeight: 900, color: "#1B2A4A", marginBottom: 16, paddingBottom: 12, borderBottom: `2px solid ${primaryColor}20` }}>
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
          <Link href="/genre/juku" style={{ display: "inline-flex", alignItems: "center", gap: 6, padding: "12px 24px", background: "#fff", border: `1.5px solid ${primaryColor}40`, borderRadius: 20, color: primaryColor, fontWeight: 700, fontSize: 14, textDecoration: "none" }}>
            📚 学習塾のスクール一覧
          </Link>
          <Link href="/" style={{ display: "inline-flex", alignItems: "center", gap: 6, padding: "12px 24px", background: `linear-gradient(135deg, ${primaryColor}, ${secondaryColor})`, borderRadius: 20, color: "#fff", fontWeight: 700, fontSize: 14, textDecoration: "none", boxShadow: `0 4px 16px ${primaryColor}40` }}>
            ← トップページへ戻る
          </Link>
        </div>
      </div>
    </div>
  );
}
