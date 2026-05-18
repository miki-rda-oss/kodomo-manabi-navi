import Link from "next/link";
import { ALL_PREFS_LIST } from "./sorobanData";

export const metadata = {
  title: "子供のそろばん教室おすすめ｜全国都道府県別【コドモならいごと】",
  description: "全国の子ども向けそろばん教室・珠算教室を都道府県別に比較。公文・石戸珠算・そろばん塾ピコなど人気スクールの月謝・コース・口コミを掲載。",
  keywords: ["子供 そろばん教室", "珠算 子ども", "キッズそろばん", "そろばん教室 比較", "段位 小学生"],
  alternates: {
    canonical: "https://www.kodomo-navi.com/soroban",
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "トップ", item: "https://www.kodomo-navi.com" },
    { "@type": "ListItem", position: 2, name: "そろばん教室・珠算教室", item: "https://www.kodomo-navi.com/soroban" },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "そろばんは何歳から始めるのがベストですか？", acceptedAnswer: { "@type": "Answer", text: "4〜6歳が最適です。数の概念が身につく時期に始めると効果的。" } },
    { "@type": "Question", name: "そろばん教室の月謝相場は？", acceptedAnswer: { "@type": "Answer", text: "週1〜2回で4,000〜7,000円が一般的です。" } },
    { "@type": "Question", name: "そろばんを習う効果は？", acceptedAnswer: { "@type": "Answer", text: "計算力・集中力・暗算力・忍耐力が育ちます。脳の活性化にも効果的。" } },
    { "@type": "Question", name: "電卓の時代にそろばんは必要ですか？", acceptedAnswer: { "@type": "Answer", text: "そろばんで培われる暗算力・集中力・忍耐力は生涯にわたって役立ちます。" } },
  ],
};

const popularSchools = [
  { name: "石戸珠算学園", rating: 4.5, fee: 5500, age: "4歳〜", desc: "全国最大規模のそろばん教室チェーン。段位取得まで体系的に学べる。", emoji: "🧮" },
  { name: "そろばん塾ピコ", rating: 4.4, fee: 6600, age: "4歳〜", desc: "フラッシュ暗算も学べる現代型そろばん教室。集中力・暗算力を短期で育成。", emoji: "📊" },
  { name: "全国珠算教育連盟（全珠連）加盟教室", rating: 4.3, fee: 4400, age: "4歳〜", desc: "全国に多数展開する珠算教育連盟認定教室。検定・段位取得に対応。", emoji: "🧮" },
  { name: "公文（くもん）そろばん", rating: 4.2, fee: 7150, age: "3歳〜", desc: "全国展開の公文式。数処理能力と集中力を育てる。自分のペースで進められるのが特徴。", emoji: "📊" },
  { name: "日本珠算連盟（日珠連）加盟教室", rating: 4.2, fee: 4400, age: "4歳〜", desc: "伝統的な珠算指導。段位・級位取得を目指せる。", emoji: "🧮" },
];

const faqs = [
  { q: "そろばんは何歳から始めるのがベストですか？", a: "4〜6歳が最適です。数の概念が身につく時期に始めると効果的。" },
  { q: "そろばん教室の月謝相場は？", a: "週1〜2回で4,000〜7,000円が一般的です。" },
  { q: "そろばんを習う効果は？", a: "計算力・集中力・暗算力・忍耐力が育ちます。脳の活性化にも効果的。" },
  { q: "電卓の時代にそろばんは必要ですか？", a: "そろばんで培われる暗算力・集中力・忍耐力は生涯にわたって役立ちます。" },
];

const blogs = [
  { href: "/blog/kids-activity-ranking-all", text: "子供の習い事人気ランキング" },
  { href: "/blog/kids-activity-cost-annual", text: "子供の習い事年間費用" },
  { href: "/blog/elementary-activity-start-guide", text: "小学生の習い事選び方" },
];

export default function SorobanTopPage() {
  return (
    <div style={{ fontFamily: "'Noto Sans JP','Hiragino Sans',sans-serif", background: "#f4f7fc", minHeight: "100vh" }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Header */}
      <header style={{ background: "#fff", borderBottom: "1px solid #e8edf4", boxShadow: "0 2px 8px rgba(0,0,0,.05)", position: "sticky", top: 0, zIndex: 100 }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 24px", display: "flex", alignItems: "center", gap: 10, height: 56 }}>
          <Link href="/" style={{ display: "flex", alignItems: "center", gap: 8, textDecoration: "none" }}>
            <div style={{ width: 32, height: 32, borderRadius: 9, background: "linear-gradient(135deg, #795548, #4E342E)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 16 }}>🧒</div>
            <span style={{ fontSize: 15, fontWeight: 900, color: "#1B2A4A" }}>コドモならいごと</span>
          </Link>
          <span style={{ color: "#ddd" }}>›</span>
          <span style={{ fontSize: 13, color: "#888", fontWeight: 600 }}>そろばん教室・珠算教室</span>
        </div>
      </header>

      {/* Breadcrumb */}
      <nav aria-label="パンくず" style={{ maxWidth: 1100, margin: "0 auto", padding: "10px 24px" }}>
        <div style={{ fontSize: 12, color: "#888" }}>
          <Link href="/" style={{ color: "#795548", textDecoration: "none" }}>トップ</Link>
          {" › "}
          <span style={{ color: "#666" }}>そろばん教室・珠算教室</span>
        </div>
      </nav>

      {/* Hero */}
      <section style={{ background: "linear-gradient(135deg, #3E2723, #6D4C41)", padding: "52px 24px 48px" }}>
        <div style={{ maxWidth: 800, margin: "0 auto", textAlign: "center" }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 6, background: "rgba(255,255,255,.2)", borderRadius: 20, padding: "4px 16px", marginBottom: 16, fontSize: 12, color: "#fff", fontWeight: 700 }}>
            🧮 全国47都道府県対応
          </div>
          <h1 style={{ fontSize: 30, fontWeight: 900, color: "#fff", marginBottom: 14, lineHeight: 1.4 }}>
            子供のそろばん教室・珠算教室<br />おすすめ比較【全国版】
          </h1>
          <p style={{ fontSize: 14, color: "rgba(255,255,255,.92)", lineHeight: 2, marginBottom: 24 }}>
            石戸珠算・そろばん塾ピコ・公文など人気スクールを都道府県別に比較。<br />
            月謝・対象年齢・口コミ・体験情報を掲載。
          </p>
          <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
            {["⭐ 口コミ多数掲載", "👶 3歳〜OK", "💰 月4,400円〜", "🎯 段位・級位取得対応"].map((b, i) => (
              <span key={i} style={{ fontSize: 13, color: "rgba(255,255,255,.9)", fontWeight: 700, background: "rgba(255,255,255,.15)", padding: "6px 14px", borderRadius: 20 }}>{b}</span>
            ))}
          </div>
        </div>
      </section>

      <div style={{ maxWidth: 1000, margin: "0 auto", padding: "36px 24px 60px" }}>

        {/* 都道府県グリッド */}
        <div style={{ background: "#fff", borderRadius: 18, padding: "28px 24px", marginBottom: 28, border: "1.5px solid #e8edf4", boxShadow: "0 2px 12px rgba(0,0,0,.05)" }}>
          <h2 style={{ fontSize: 18, fontWeight: 900, color: "#1B2A4A", marginBottom: 20, paddingBottom: 12, borderBottom: "2px solid #79554820" }}>
            🗾 都道府県からそろばん教室を探す
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(140px, 1fr))", gap: 8 }}>
            {ALL_PREFS_LIST.map((pref) => (
              <Link
                key={pref.slug}
                href={`/soroban/${pref.slug}`}
                style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "10px 14px", background: "#fff", border: "1.5px solid #e8edf4", borderRadius: 10, textDecoration: "none", color: "#1B2A4A", fontWeight: 700, fontSize: 13, boxShadow: "0 1px 4px rgba(0,0,0,.04)" }}
              >
                <span>{pref.name}</span>
                <span style={{ color: "#795548", fontSize: 14 }}>›</span>
              </Link>
            ))}
          </div>
        </div>

        {/* 人気スクール一覧 */}
        <div style={{ background: "#fff", borderRadius: 18, padding: "28px 24px", marginBottom: 28, border: "1.5px solid #e8edf4", boxShadow: "0 2px 12px rgba(0,0,0,.05)" }}>
          <h2 style={{ fontSize: 18, fontWeight: 900, color: "#1B2A4A", marginBottom: 20, paddingBottom: 12, borderBottom: "2px solid #79554820" }}>
            🏆 人気のそろばん・珠算スクール
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: 14 }}>
            {popularSchools.map((s, i) => (
              <div key={i} style={{ background: "#fff", border: "1.5px solid #e8edf4", borderRadius: 14, padding: "20px 18px", boxShadow: "0 2px 8px rgba(0,0,0,.04)" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 10 }}>
                  <div style={{ width: 44, height: 44, borderRadius: 12, background: "linear-gradient(135deg, #79554820, #4E342E30)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 22 }}>{s.emoji}</div>
                  <div>
                    <div style={{ fontSize: 14, fontWeight: 800, color: "#1B2A4A" }}>{s.name}</div>
                    <div style={{ fontSize: 12, color: "#888", marginTop: 2 }}>対象: {s.age}</div>
                  </div>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 8 }}>
                  <span style={{ fontSize: 13, color: "#795548", fontWeight: 700 }}>★ {s.rating}</span>
                  <span style={{ fontSize: 12, color: "#888" }}>月額 ¥{s.fee.toLocaleString()}〜</span>
                </div>
                <p style={{ fontSize: 12, color: "#666", lineHeight: 1.7, margin: 0 }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ */}
        <div style={{ background: "#fff", borderRadius: 18, padding: "28px 24px", marginBottom: 28, border: "1.5px solid #e8edf4", boxShadow: "0 2px 12px rgba(0,0,0,.05)" }}>
          <h2 style={{ fontSize: 18, fontWeight: 900, color: "#1B2A4A", marginBottom: 18, paddingBottom: 12, borderBottom: "2px solid #79554820" }}>
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
          <h2 style={{ fontSize: 18, fontWeight: 900, color: "#1B2A4A", marginBottom: 16, paddingBottom: 12, borderBottom: "2px solid #79554820" }}>
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
          <Link href="/genre/soroban" style={{ display: "inline-flex", alignItems: "center", gap: 6, padding: "12px 24px", background: "#fff", border: "1.5px solid #BCAAA4", borderRadius: 20, color: "#795548", fontWeight: 700, fontSize: 14, textDecoration: "none" }}>
            🧮 そろばん教室一覧
          </Link>
          <Link href="/" style={{ display: "inline-flex", alignItems: "center", gap: 6, padding: "12px 24px", background: "linear-gradient(135deg, #795548, #4E342E)", borderRadius: 20, color: "#fff", fontWeight: 700, fontSize: 14, textDecoration: "none", boxShadow: "0 4px 16px rgba(121,85,72,.3)" }}>
            ← トップページへ戻る
          </Link>
        </div>
      </div>
    </div>
  );
}
