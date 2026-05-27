import Link from "next/link";
import { ALL_PREFS_LIST } from "./englishData";

export const metadata = {
  title: "子供の英語・英会話教室おすすめ｜全国都道府県別【コドモならいごと】",
  description: "全国の子ども向け英語・英会話教室を都道府県別に比較。ECCジュニア・ECC KIDS・シェーン・Kids Duoなど人気スクールの月謝・コース・口コミを掲載。無料体験情報も。",
  keywords: ["子供 英語教室", "英会話 子ども", "キッズ英語", "英語スクール 比較", "英検対策 小学生"],
  alternates: {
    canonical: "https://www.kodomo-navi.com/english",
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "トップ", item: "https://www.kodomo-navi.com" },
    { "@type": "ListItem", position: 2, name: "英語・英会話教室", item: "https://www.kodomo-navi.com/english" },
  ],
};


const popularSchools = [
  { name: "ECCジュニア", rating: 4.3, fee: 9900, age: "1歳半〜", desc: "全国8,700以上の教室数を誇る業界最大手。外国人講師とバイリンガル講師のペアティーチングで4技能を育成。英検対策も充実。", emoji: "🌍" },
  { name: "ECC KIDS", rating: 4.4, fee: 11000, age: "1歳半〜", desc: "All Englishの環境で自然に英語が身につく。外国人講師とバイリンガル講師のペアティーチング。", emoji: "📚" },
  { name: "シェーン英会話", rating: 4.3, fee: 11000, age: "2歳〜", desc: "ネイティブ講師による少人数制。英国式メソッドで4技能をバランスよく習得。英検対策コースも充実。", emoji: "🗣️" },
  { name: "Kids Duo", rating: 4.5, fee: 29700, age: "1歳〜6歳", desc: "英語と日本語を半々で使うバイリンガル幼児教育。全日英語の環境に加え、知育活動や野外体験も充実。", emoji: "🌍" },
  { name: "リップルキッズパーク", rating: 4.5, fee: 5500, age: "2歳〜", desc: "フィリピン人講師とのオンラインレッスン。月5,500円〜という低価格で毎日受講可能。移動不要。", emoji: "📚" },
  { name: "公文の英語", rating: 4.1, fee: 7150, age: "0歳〜", desc: "くもん独自のスモールステップ方式。自分のペースで無理なく英語の基礎力を積み上げる。全国教室展開。", emoji: "🗣️" },
];

const faqs = [
  { q: "子供の英語教室は何歳から始めるべき？", a: "1歳半からのベビークラスを設けているスクールもあります。一般的には2〜3歳からが始めどきとされており、多くのスクールが幼児コースを充実させています。" },
  { q: "子供の英語教室の月謝相場は？", a: "週1回通塾タイプで月8,000〜15,000円が相場です。オンラインスクールは月5,500円〜とリーズナブルに始められます。" },
  { q: "英語を幼少期から習う効果は？", a: "幼少期は耳が柔軟で発音・リスニング力が身につきやすい時期です。英語への抵抗感をなくし、グローバルな感覚を自然に育てられます。" },
  { q: "英検対策ができる英語スクールはありますか？", a: "多くの英語スクールで英検5〜3級対策コースを設けています。小学生のうちに英検3級以上を取得する子どもも増えています。" },
];

const blogs = [
  { href: "/blog/kids-english-guide", text: "子供の英語教室の選び方完全ガイド" },
  { href: "/blog/kids-english-school-guide-2026", text: "子供英語スクールおすすめ2026年版" },
  { href: "/blog/kids-english-phonics-guide", text: "子供の英語フォニックス完全ガイド" },
  { href: "/blog/kids-english-benefits-guide", text: "子供が英語を習う効果・メリット" },
  { href: "/blog/kids-english-online-guide", text: "子供のオンライン英語レッスン完全ガイド" },
];

export default function EnglishTopPage() {
  return (
    <div style={{ fontFamily: "'Noto Sans JP','Hiragino Sans',sans-serif", background: "#f4f7fc", minHeight: "100vh" }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      {/* Header */}
      <header style={{ background: "#fff", borderBottom: "1px solid #e8edf4", boxShadow: "0 2px 8px rgba(0,0,0,.05)", position: "sticky", top: 0, zIndex: 100 }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 24px", display: "flex", alignItems: "center", gap: 10, height: 56 }}>
          <Link href="/" style={{ display: "flex", alignItems: "center", gap: 8, textDecoration: "none" }}>
            <div style={{ width: 32, height: 32, borderRadius: 9, background: "linear-gradient(135deg, #FF8A00, #FFB347)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 16 }}>🧒</div>
            <span style={{ fontSize: 15, fontWeight: 900, color: "#1B2A4A" }}>コドモならいごと</span>
          </Link>
          <span style={{ color: "#ddd" }}>›</span>
          <span style={{ fontSize: 13, color: "#888", fontWeight: 600 }}>英語・英会話</span>
        </div>
      </header>

      {/* Breadcrumb */}
      <nav aria-label="パンくず" style={{ maxWidth: 1100, margin: "0 auto", padding: "10px 24px" }}>
        <div style={{ fontSize: 12, color: "#888" }}>
          <Link href="/" style={{ color: "#FF8A00", textDecoration: "none" }}>トップ</Link>
          {" › "}
          <span style={{ color: "#666" }}>英語・英会話教室</span>
        </div>
      </nav>

      {/* Hero */}
      <section style={{ background: "linear-gradient(135deg, #FF8A00, #FFB347)", padding: "52px 24px 48px" }}>
        <div style={{ maxWidth: 800, margin: "0 auto", textAlign: "center" }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 6, background: "rgba(255,255,255,.2)", borderRadius: 20, padding: "4px 16px", marginBottom: 16, fontSize: 12, color: "#fff", fontWeight: 700 }}>
            🌍 全国47都道府県対応
          </div>
          <h1 style={{ fontSize: 30, fontWeight: 900, color: "#fff", marginBottom: 14, lineHeight: 1.4 }}>
            子供の英語・英会話教室<br />おすすめ比較【全国版】
          </h1>
          <p style={{ fontSize: 14, color: "rgba(255,255,255,.92)", lineHeight: 2, marginBottom: 24 }}>
            ECCジュニア・ECC KIDS・シェーン・Kids Duoなど人気スクールを都道府県別に比較。<br />
            月謝・対象年齢・口コミ・無料体験情報を掲載。
          </p>
          <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
            {["⭐ 口コミ多数掲載", "👶 1歳半〜OK", "💰 月5,500円〜", "🎯 英検対策対応"].map((b, i) => (
              <span key={i} style={{ fontSize: 13, color: "rgba(255,255,255,.9)", fontWeight: 700, background: "rgba(255,255,255,.15)", padding: "6px 14px", borderRadius: 20 }}>{b}</span>
            ))}
          </div>
        </div>
      </section>

      <div style={{ maxWidth: 1000, margin: "0 auto", padding: "36px 24px 60px" }}>

        {/* 都道府県グリッド */}
        <div style={{ background: "#fff", borderRadius: 18, padding: "28px 24px", marginBottom: 28, border: "1.5px solid #e8edf4", boxShadow: "0 2px 12px rgba(0,0,0,.05)" }}>
          <h2 style={{ fontSize: 18, fontWeight: 900, color: "#1B2A4A", marginBottom: 20, paddingBottom: 12, borderBottom: "2px solid #FF8A0020" }}>
            🗾 都道府県から英語教室を探す
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(140px, 1fr))", gap: 8 }}>
            {ALL_PREFS_LIST.map((pref) => (
              <Link
                key={pref.slug}
                href={`/english/${pref.slug}`}
                style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "10px 14px", background: "#fff", border: "1.5px solid #e8edf4", borderRadius: 10, textDecoration: "none", color: "#1B2A4A", fontWeight: 700, fontSize: 13, boxShadow: "0 1px 4px rgba(0,0,0,.04)" }}
              >
                <span>{pref.name}</span>
                <span style={{ color: "#FF8A00", fontSize: 14 }}>›</span>
              </Link>
            ))}
          </div>
        </div>

        {/* 人気スクール一覧 */}
        <div style={{ background: "#fff", borderRadius: 18, padding: "28px 24px", marginBottom: 28, border: "1.5px solid #e8edf4", boxShadow: "0 2px 12px rgba(0,0,0,.05)" }}>
          <h2 style={{ fontSize: 18, fontWeight: 900, color: "#1B2A4A", marginBottom: 20, paddingBottom: 12, borderBottom: "2px solid #FF8A0020" }}>
            🏆 人気の英語スクール
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: 14 }}>
            {popularSchools.map((s, i) => (
              <div key={i} style={{ background: "#fff", border: "1.5px solid #e8edf4", borderRadius: 14, padding: "20px 18px", boxShadow: "0 2px 8px rgba(0,0,0,.04)" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 10 }}>
                  <div style={{ width: 44, height: 44, borderRadius: 12, background: "linear-gradient(135deg, #FF8A0020, #FFB34730)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 22 }}>{s.emoji}</div>
                  <div>
                    <div style={{ fontSize: 14, fontWeight: 800, color: "#1B2A4A" }}>{s.name}</div>
                    <div style={{ fontSize: 12, color: "#888", marginTop: 2 }}>対象: {s.age}</div>
                  </div>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 8 }}>
                  <span style={{ fontSize: 13, color: "#FF8A00", fontWeight: 700 }}>★ {s.rating}</span>
                  <span style={{ fontSize: 12, color: "#888" }}>月額 ¥{s.fee.toLocaleString()}〜</span>
                </div>
                <p style={{ fontSize: 12, color: "#666", lineHeight: 1.7, margin: 0 }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ */}
        <div style={{ background: "#fff", borderRadius: 18, padding: "28px 24px", marginBottom: 28, border: "1.5px solid #e8edf4", boxShadow: "0 2px 12px rgba(0,0,0,.05)" }}>
          <h2 style={{ fontSize: 18, fontWeight: 900, color: "#1B2A4A", marginBottom: 18, paddingBottom: 12, borderBottom: "2px solid #FF8A0020" }}>
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
          <h2 style={{ fontSize: 18, fontWeight: 900, color: "#1B2A4A", marginBottom: 16, paddingBottom: 12, borderBottom: "2px solid #FF8A0020" }}>
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
          <Link href="/genre/english" style={{ display: "inline-flex", alignItems: "center", gap: 6, padding: "12px 24px", background: "#fff", border: "1.5px solid #FFD9A0", borderRadius: 20, color: "#FF8A00", fontWeight: 700, fontSize: 14, textDecoration: "none" }}>
            🌍 英語スクール一覧
          </Link>
          <Link href="/" style={{ display: "inline-flex", alignItems: "center", gap: 6, padding: "12px 24px", background: "linear-gradient(135deg, #FF8A00, #FFB347)", borderRadius: 20, color: "#fff", fontWeight: 700, fontSize: 14, textDecoration: "none", boxShadow: "0 4px 16px rgba(255,138,0,.3)" }}>
            ← トップページへ戻る
          </Link>
        </div>
      </div>
    </div>
  );
}
