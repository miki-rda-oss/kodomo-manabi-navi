import Link from "next/link";
import { ALL_PREFS_LIST } from "./karateData";

export const metadata = {
  title: "子供の空手教室・道場おすすめ｜全国都道府県別【コドモならいごと】",
  description: "全国の子ども向け空手教室・道場を都道府県・エリア別に比較。極真会館・松濤館など伝統流派から地域道場まで月謝・コース・無料体験情報を掲載。",
  keywords: ["子供 空手教室", "空手 子ども", "キッズ空手", "空手道場 比較", "極真 子供"],
  alternates: {
    canonical: "https://www.kodomo-navi.com/karate",
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "トップ", item: "https://www.kodomo-navi.com" },
    { "@type": "ListItem", position: 2, name: "空手教室・道場", item: "https://www.kodomo-navi.com/karate" },
  ],
};


const popularSchools = [
  { name: "極真会館加盟道場", rating: 4.4, fee: 7700, age: "4歳〜", desc: "世界最大の空手団体・極真会館加盟道場。礼儀作法・精神力・忍耐力を鍛える本格空手指導。フルコンタクト空手で鍛えられた強さと礼節を子どもに。", emoji: "🥋" },
  { name: "正道会館加盟道場", rating: 4.3, fee: 6600, age: "4歳〜", desc: "総合格闘技団体としても知名度高い正道会館。子どもの精神面と技術面を同時に育成。", emoji: "🥋" },
  { name: "全国空手道場連盟加盟", rating: 4.2, fee: 5500, age: "3歳〜", desc: "全国展開の空手道場。礼節を重んじる伝統的な指導で子どもの人格形成に寄与。", emoji: "🥋" },
  { name: "国際松濤館加盟道場", rating: 4.3, fee: 6600, age: "4歳〜", desc: "松濤館流の伝統を受け継ぐ空手道場。型・組手をバランスよく指導。", emoji: "🥋" },
  { name: "糸東流空手道加盟道場", rating: 4.2, fee: 5500, age: "3歳〜", desc: "糸東流の伝統空手を学べる道場。礼儀・型・組手を丁寧に指導。", emoji: "🥋" },
  { name: "地域密着型空手道場", rating: 4.1, fee: 5000, age: "3歳〜小学生", desc: "地域に根ざした空手道場。少人数制で丁寧な指導。礼儀・型・組手を楽しく学べるアットホームな環境。", emoji: "🥋" },
];

const faqs = [
  { q: "子供の空手教室は何歳から始めるべき？", a: "3〜4歳から少年部クラスに通える道場が多いです。礼儀作法を早い時期から学べるため、幼少期から始めることを推奨する道場が多くあります。" },
  { q: "子供の空手道場の月謝相場は？", a: "週1〜2回で5,000〜8,000円が相場です。道着代が別途5,000〜10,000円ほどかかります。" },
  { q: "空手を習うと喧嘩っ早くなりますか？", a: "反対です。空手は礼儀・規律を最重視する武道です。「礼に始まり礼に終わる」精神が日常生活にも活かされます。" },
  { q: "女の子でも空手を習えますか？", a: "はい。護身術・精神力・集中力を育て女の子にも人気があります。" },
];

const blogs = [
  { href: "/blog/kids-karate-guide", text: "子供の空手教室選び方完全ガイド" },
  { href: "/blog/kids-karate-school-guide-2026", text: "子供空手教室おすすめ2026年版" },
  { href: "/blog/kids-karate-benefits-complete", text: "子供が空手を習う効果・メリット" },
  { href: "/blog/kids-karate-ballet-guide", text: "子供に空手・武道を習わせたい！選び方と費用" },
];

export default function KarateTopPage() {
  return (
    <div style={{ fontFamily: "'Noto Sans JP','Hiragino Sans',sans-serif", background: "#f4f7fc", minHeight: "100vh" }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      {/* Header */}
      <header style={{ background: "#fff", borderBottom: "1px solid #e8edf4", boxShadow: "0 2px 8px rgba(0,0,0,.05)", position: "sticky", top: 0, zIndex: 100 }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 24px", display: "flex", alignItems: "center", gap: 10, height: 56 }}>
          <Link href="/" style={{ display: "flex", alignItems: "center", gap: 8, textDecoration: "none" }}>
            <div style={{ width: 32, height: 32, borderRadius: 9, background: "linear-gradient(135deg, #795548, #4E342E)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 16 }}>🧒</div>
            <span style={{ fontSize: 15, fontWeight: 900, color: "#1B2A4A" }}>コドモならいごと</span>
          </Link>
          <span style={{ color: "#ddd" }}>›</span>
          <span style={{ fontSize: 13, color: "#888", fontWeight: 600 }}>空手教室・道場</span>
        </div>
      </header>

      {/* Breadcrumb */}
      <nav aria-label="パンくず" style={{ maxWidth: 1100, margin: "0 auto", padding: "10px 24px" }}>
        <div style={{ fontSize: 12, color: "#888" }}>
          <Link href="/" style={{ color: "#795548", textDecoration: "none" }}>トップ</Link>
          {" › "}
          <span style={{ color: "#666" }}>空手教室・道場</span>
        </div>
      </nav>

      {/* Hero */}
      <section style={{ background: "linear-gradient(135deg, #3E2723, #6D4C41)", padding: "52px 24px 48px" }}>
        <div style={{ maxWidth: 800, margin: "0 auto", textAlign: "center" }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 6, background: "rgba(255,255,255,.2)", borderRadius: 20, padding: "4px 16px", marginBottom: 16, fontSize: 12, color: "#fff", fontWeight: 700 }}>
            🥋 全国47都道府県対応
          </div>
          <h1 style={{ fontSize: 30, fontWeight: 900, color: "#fff", marginBottom: 14, lineHeight: 1.4 }}>
            子供の空手教室・道場<br />全国・都道府県別
          </h1>
          <p style={{ fontSize: 14, color: "rgba(255,255,255,.92)", lineHeight: 2, marginBottom: 24 }}>
            お近くの空手道場を探そう。極真会館・松濤館など伝統流派から地域道場まで比較できます。
          </p>
          <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
            {["⭐ 口コミ多数掲載", "👶 3歳〜OK", "💰 月5,500円〜", "🥋 礼儀・精神力を育む"].map((b, i) => (
              <span key={i} style={{ fontSize: 13, color: "rgba(255,255,255,.9)", fontWeight: 700, background: "rgba(255,255,255,.15)", padding: "6px 14px", borderRadius: 20 }}>{b}</span>
            ))}
          </div>
        </div>
      </section>

      <div style={{ maxWidth: 1000, margin: "0 auto", padding: "36px 24px 60px" }}>

        {/* 都道府県グリッド */}
        <div style={{ background: "#fff", borderRadius: 18, padding: "28px 24px", marginBottom: 28, border: "1.5px solid #e8edf4", boxShadow: "0 2px 12px rgba(0,0,0,.05)" }}>
          <h2 style={{ fontSize: 18, fontWeight: 900, color: "#1B2A4A", marginBottom: 20, paddingBottom: 12, borderBottom: "2px solid #79554820" }}>
            🗾 都道府県から空手教室・道場を探す
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(140px, 1fr))", gap: 8 }}>
            {ALL_PREFS_LIST.map((pref) => (
              <Link
                key={pref.slug}
                href={`/karate/${pref.slug}`}
                style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "10px 14px", background: "#fff", border: "1.5px solid #e8edf4", borderRadius: 10, textDecoration: "none", color: "#1B2A4A", fontWeight: 700, fontSize: 13, boxShadow: "0 1px 4px rgba(0,0,0,.04)" }}
              >
                <span>{pref.name}</span>
                <span style={{ color: "#795548", fontSize: 14 }}>›</span>
              </Link>
            ))}
          </div>
        </div>

        {/* 人気道場一覧 */}
        <div style={{ background: "#fff", borderRadius: 18, padding: "28px 24px", marginBottom: 28, border: "1.5px solid #e8edf4", boxShadow: "0 2px 12px rgba(0,0,0,.05)" }}>
          <h2 style={{ fontSize: 18, fontWeight: 900, color: "#1B2A4A", marginBottom: 20, paddingBottom: 12, borderBottom: "2px solid #79554820" }}>
            🏆 人気の空手教室・道場
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
          <Link href="/genre/karate" style={{ display: "inline-flex", alignItems: "center", gap: 6, padding: "12px 24px", background: "#fff", border: "1.5px solid #D7CCC8", borderRadius: 20, color: "#4E342E", fontWeight: 700, fontSize: 14, textDecoration: "none" }}>
            🥋 空手の道場一覧
          </Link>
          <Link href="/" style={{ display: "inline-flex", alignItems: "center", gap: 6, padding: "12px 24px", background: "linear-gradient(135deg, #795548, #4E342E)", borderRadius: 20, color: "#fff", fontWeight: 700, fontSize: 14, textDecoration: "none", boxShadow: "0 4px 16px rgba(121,85,72,.3)" }}>
            ← トップページへ戻る
          </Link>
        </div>
      </div>
    </div>
  );
}
