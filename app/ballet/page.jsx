import Link from "next/link";
import { ALL_PREFS_LIST } from "./balletData";

export const metadata = {
  title: "子供のバレエ教室おすすめ｜全国都道府県別【コドモならいごと】",
  description: "全国の子ども向けバレエ教室を都道府県別に比較。Kバレエスクール・チャコットなど人気スクールの月謝・コース・口コミを掲載。無料体験情報も。",
  keywords: ["子供 バレエ教室", "バレエ 子ども", "キッズバレエ", "バレエスクール 比較", "幼児 バレエ"],
  alternates: {
    canonical: "https://www.kodomo-navi.com/ballet",
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "トップ", item: "https://www.kodomo-navi.com" },
    { "@type": "ListItem", position: 2, name: "バレエ教室", item: "https://www.kodomo-navi.com/ballet" },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "何歳から始めるのがベストですか？", acceptedAnswer: { "@type": "Answer", text: "3〜4歳が最適です。多くのスクールで3歳から入会できる幼児クラスを設けています。" } },
    { "@type": "Question", name: "月謝相場は？", acceptedAnswer: { "@type": "Answer", text: "週1回で7,000〜15,000円。発表会費用別途。" } },
    { "@type": "Question", name: "男の子でもバレエを習えますか？", acceptedAnswer: { "@type": "Answer", text: "はい。体幹・バランス感覚が身につきます。" } },
    { "@type": "Question", name: "バレエの効果は？", acceptedAnswer: { "@type": "Answer", text: "姿勢・柔軟性・表現力・集中力が育ちます。" } },
  ],
};

const popularSchools = [
  { name: "Kバレエスクール", rating: 4.4, fee: 8800, age: "3歳〜", desc: "熊川哲也が主宰する本格バレエスクール。全国展開で質の高い指導。", emoji: "🩰" },
  { name: "チャコット バレエスタジオ", rating: 4.5, fee: 11000, age: "3歳〜", desc: "バレエ用品の老舗チャコットが運営。プロ講師による本格指導。", emoji: "🌸" },
  { name: "地元バレエアカデミー", rating: 4.3, fee: 9800, age: "3歳〜", desc: "地域に根ざした少人数制バレエスクール。経験豊富な講師が一人ひとり丁寧に指導。発表会も充実。", emoji: "🩰" },
  { name: "クラシックバレエスタジオ", rating: 4.2, fee: 9000, age: "3歳〜", desc: "クラシックバレエの基礎からコンクール対策まで幅広く対応。全国各地に教室展開。", emoji: "🌸" },
  { name: "キッズバレエスクール", rating: 4.1, fee: 8000, age: "3歳〜", desc: "子どもの発育に合わせたカリキュラムで楽しくバレエを学べる。初心者歓迎のフレンドリーなスクール。", emoji: "🩰" },
  { name: "ジュニアバレエアカデミー", rating: 4.2, fee: 10000, age: "3歳〜", desc: "ジュニアコンクール入賞者多数輩出の実績あるスクール。基礎をしっかり習得できる環境が整っている。", emoji: "🌸" },
];

const faqs = [
  { q: "何歳から始めるのがベストですか？", a: "3〜4歳が最適です。多くのスクールで3歳から入会できる幼児クラスを設けています。" },
  { q: "月謝相場は？", a: "週1回で7,000〜15,000円。発表会費用別途。" },
  { q: "男の子でもバレエを習えますか？", a: "はい。体幹・バランス感覚が身につきます。男の子向けクラスを設けているスクールもあります。" },
  { q: "バレエの効果は？", a: "姿勢・柔軟性・表現力・集中力が育ちます。幼少期からの習い事として非常におすすめです。" },
];

const blogs = [
  { href: "/blog/kids-ballet-guide", text: "子供のバレエ教室選び方" },
  { href: "/blog/kids-ballet-school-guide-2026", text: "子供バレエ教室おすすめ2026年版" },
  { href: "/blog/kids-ballet-benefits-guide", text: "子供がバレエを習う効果" },
  { href: "/blog/dance-vs-ballet-kids", text: "ダンスとバレエどちらを習わせる？" },
];

export default function BalletTopPage() {
  return (
    <div style={{ fontFamily: "'Noto Sans JP','Hiragino Sans',sans-serif", background: "#f4f7fc", minHeight: "100vh" }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Header */}
      <header style={{ background: "#fff", borderBottom: "1px solid #e8edf4", boxShadow: "0 2px 8px rgba(0,0,0,.05)", position: "sticky", top: 0, zIndex: 100 }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 24px", display: "flex", alignItems: "center", gap: 10, height: 56 }}>
          <Link href="/" style={{ display: "flex", alignItems: "center", gap: 8, textDecoration: "none" }}>
            <div style={{ width: 32, height: 32, borderRadius: 9, background: "linear-gradient(135deg, #880E4F, #C2185B)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 16 }}>🧒</div>
            <span style={{ fontSize: 15, fontWeight: 900, color: "#1B2A4A" }}>コドモならいごと</span>
          </Link>
          <span style={{ color: "#ddd" }}>›</span>
          <span style={{ fontSize: 13, color: "#888", fontWeight: 600 }}>バレエ</span>
        </div>
      </header>

      {/* Breadcrumb */}
      <nav aria-label="パンくず" style={{ maxWidth: 1100, margin: "0 auto", padding: "10px 24px" }}>
        <div style={{ fontSize: 12, color: "#888" }}>
          <Link href="/" style={{ color: "#E91E63", textDecoration: "none" }}>トップ</Link>
          {" › "}
          <span style={{ color: "#666" }}>バレエ教室</span>
        </div>
      </nav>

      {/* Hero */}
      <section style={{ background: "linear-gradient(135deg, #880E4F, #C2185B)", padding: "52px 24px 48px" }}>
        <div style={{ maxWidth: 800, margin: "0 auto", textAlign: "center" }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 6, background: "rgba(255,255,255,.2)", borderRadius: 20, padding: "4px 16px", marginBottom: 16, fontSize: 12, color: "#fff", fontWeight: 700 }}>
            🩰 全国47都道府県対応
          </div>
          <h1 style={{ fontSize: 30, fontWeight: 900, color: "#fff", marginBottom: 14, lineHeight: 1.4 }}>
            子供のバレエ教室<br />おすすめ比較【全国版】
          </h1>
          <p style={{ fontSize: 14, color: "rgba(255,255,255,.92)", lineHeight: 2, marginBottom: 24 }}>
            Kバレエスクール・チャコットなど人気スクールを都道府県別に比較。<br />
            月謝・対象年齢・口コミ・無料体験情報を掲載。
          </p>
          <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
            {["⭐ 口コミ多数掲載", "👶 3歳〜OK", "💰 月7,000円〜", "🌸 発表会あり"].map((b, i) => (
              <span key={i} style={{ fontSize: 13, color: "rgba(255,255,255,.9)", fontWeight: 700, background: "rgba(255,255,255,.15)", padding: "6px 14px", borderRadius: 20 }}>{b}</span>
            ))}
          </div>
        </div>
      </section>

      <div style={{ maxWidth: 1000, margin: "0 auto", padding: "36px 24px 60px" }}>

        {/* 都道府県グリッド */}
        <div style={{ background: "#fff", borderRadius: 18, padding: "28px 24px", marginBottom: 28, border: "1.5px solid #e8edf4", boxShadow: "0 2px 12px rgba(0,0,0,.05)" }}>
          <h2 style={{ fontSize: 18, fontWeight: 900, color: "#1B2A4A", marginBottom: 20, paddingBottom: 12, borderBottom: "2px solid #E91E6320" }}>
            🗾 都道府県からバレエ教室を探す
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(140px, 1fr))", gap: 8 }}>
            {ALL_PREFS_LIST.map((pref) => (
              <Link
                key={pref.slug}
                href={`/ballet/${pref.slug}`}
                style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "10px 14px", background: "#fff", border: "1.5px solid #e8edf4", borderRadius: 10, textDecoration: "none", color: "#1B2A4A", fontWeight: 700, fontSize: 13, boxShadow: "0 1px 4px rgba(0,0,0,.04)" }}
              >
                <span>{pref.name}</span>
                <span style={{ color: "#E91E63", fontSize: 14 }}>›</span>
              </Link>
            ))}
          </div>
        </div>

        {/* 人気スクール一覧 */}
        <div style={{ background: "#fff", borderRadius: 18, padding: "28px 24px", marginBottom: 28, border: "1.5px solid #e8edf4", boxShadow: "0 2px 12px rgba(0,0,0,.05)" }}>
          <h2 style={{ fontSize: 18, fontWeight: 900, color: "#1B2A4A", marginBottom: 20, paddingBottom: 12, borderBottom: "2px solid #E91E6320" }}>
            🏆 人気のバレエスクール
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: 14 }}>
            {popularSchools.map((s, i) => (
              <div key={i} style={{ background: "#fff", border: "1.5px solid #e8edf4", borderRadius: 14, padding: "20px 18px", boxShadow: "0 2px 8px rgba(0,0,0,.04)" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 10 }}>
                  <div style={{ width: 44, height: 44, borderRadius: 12, background: "linear-gradient(135deg, #E91E6320, #C2185B30)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 22 }}>{s.emoji}</div>
                  <div>
                    <div style={{ fontSize: 14, fontWeight: 800, color: "#1B2A4A" }}>{s.name}</div>
                    <div style={{ fontSize: 12, color: "#888", marginTop: 2 }}>対象: {s.age}</div>
                  </div>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 8 }}>
                  <span style={{ fontSize: 13, color: "#E91E63", fontWeight: 700 }}>★ {s.rating}</span>
                  <span style={{ fontSize: 12, color: "#888" }}>月額 ¥{s.fee.toLocaleString()}〜</span>
                </div>
                <p style={{ fontSize: 12, color: "#666", lineHeight: 1.7, margin: 0 }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ */}
        <div style={{ background: "#fff", borderRadius: 18, padding: "28px 24px", marginBottom: 28, border: "1.5px solid #e8edf4", boxShadow: "0 2px 12px rgba(0,0,0,.05)" }}>
          <h2 style={{ fontSize: 18, fontWeight: 900, color: "#1B2A4A", marginBottom: 18, paddingBottom: 12, borderBottom: "2px solid #E91E6320" }}>
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
          <h2 style={{ fontSize: 18, fontWeight: 900, color: "#1B2A4A", marginBottom: 16, paddingBottom: 12, borderBottom: "2px solid #E91E6320" }}>
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
          <Link href="/genre/ballet" style={{ display: "inline-flex", alignItems: "center", gap: 6, padding: "12px 24px", background: "#fff", border: "1.5px solid #F8BBD0", borderRadius: 20, color: "#E91E63", fontWeight: 700, fontSize: 14, textDecoration: "none" }}>
            🩰 バレエスクール一覧
          </Link>
          <Link href="/" style={{ display: "inline-flex", alignItems: "center", gap: 6, padding: "12px 24px", background: "linear-gradient(135deg, #880E4F, #C2185B)", borderRadius: 20, color: "#fff", fontWeight: 700, fontSize: 14, textDecoration: "none", boxShadow: "0 4px 16px rgba(233,30,99,.3)" }}>
            ← トップページへ戻る
          </Link>
        </div>
      </div>
    </div>
  );
}
