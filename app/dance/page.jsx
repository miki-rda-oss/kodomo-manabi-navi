import Link from "next/link";
import { ALL_PREFS_LIST } from "./danceData";

export const metadata = {
  title: "子供のダンス教室おすすめ比較2026｜月謝・口コミ・無料体験【コドモならいごと】",
  description: "子供のダンス教室を全国エリア別に徹底比較。月謝・口コミ・対象年齢・無料体験で選べる人気キッズダンススクールを厳選。3歳から通える教室の探し方も解説します。",
  keywords: ["子供 ダンス教室", "キッズダンス", "ダンス教室 比較", "リディアダンスアカデミー", "子ども ダンス おすすめ"],
  alternates: {
    canonical: "https://www.kodomo-navi.com/dance",
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "トップ", item: "https://www.kodomo-navi.com" },
    { "@type": "ListItem", position: 2, name: "ダンス教室", item: "https://www.kodomo-navi.com/dance" },
  ],
};


const popularSchools = [
  { name: "リディアダンスアカデミー", rating: 4.8, fee: 7700, age: "3歳〜15歳", desc: "全国100校以上展開のキッズダンススクール。現役プロダンサー講師200名以上在籍。3歳のリトルクラスから本格コースまで充実。ヒップホップ・ジャズ・K-POPなど多ジャンル対応。", emoji: "🏆", trialUrl: "https://re-dia.jp/contact", featured: true },
  { name: "EXPG DANCE & VOCAL STUDIO", rating: 4.5, fee: 12100, age: "3歳〜", desc: "LDH系列のダンス・ボーカルスクール。プロを目指す本格派向け。", emoji: "⭐" },
  { name: "エイベックス・ダンスマスター", rating: 4.4, fee: 11000, age: "年中〜高校生", desc: "エイベックス直営のキッズダンススクール。初心者が楽しめる環境を重視。ショッピングモール内が多く通いやすい。", emoji: "💫" },
  { name: "ブレスダンスカンパニー", rating: 4.3, fee: 8800, age: "3歳〜", desc: "全国展開のダンススクール。ヒップホップ・K-POP・バレエなど幅広いジャンルに対応。初心者歓迎。", emoji: "💜" },
];

const faqs = [
  { q: "子供のダンス教室は何歳から始めるべき？", a: "3歳からのリトルクラスを設けているスクールも多いです。リディアダンスアカデミーは3歳から通えます。体の柔軟性があるうちに始めるのがおすすめです。" },
  { q: "子供のダンス教室の月謝相場は？", a: "週1回で月6,000〜12,000円が相場です。リディアダンスアカデミーは月7,700円〜で初回体験無料です。" },
  { q: "ダンスを幼少期から習う効果は？", a: "リズム感・柔軟性・表現力・集中力・協調性が育ちます。中学校の必修化にも対応できるよう、早めのスタートが有利です。" },
  { q: "全国展開のキッズダンススクールはありますか？", a: "リディアダンスアカデミーは全国100校以上展開しています。お近くの教室で初回体験無料で参加できます。" },
];

const blogs = [
  { href: "/dance/kpop", text: "子どものK-POPダンス完全ガイド（何歳から・選び方・月謝）" },
  { href: "/blog/kids-dance-age-guide", text: "子供ダンスは何歳から始める？完全ガイド" },
  { href: "/blog/osaka-kids-dance-school-ranking", text: "大阪キッズダンス教室おすすめランキング" },
  { href: "/blog/kids-hiphop-dance-guide", text: "子供ヒップホップダンス教室の選び方" },
  { href: "/blog/kids-kpop-dance-school", text: "子供K-POPダンス教室おすすめ" },
  { href: "/blog/lydia-dance-academy-review", text: "リディアダンスアカデミーの評判・口コミ" },
];

export default function DanceTopPage() {
  return (
    <div style={{ fontFamily: "'Noto Sans JP','Hiragino Sans',sans-serif", background: "#f4f7fc", minHeight: "100vh" }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "WebPage",
        "@id": "https://www.kodomo-navi.com/dance",
        "name": "子供のダンス教室おすすめ｜全国都道府県別比較",
        "description": "全国の子ども向けダンス教室を都道府県・エリア別に比較。リディアダンスアカデミー・EXPG・エイベックスの月謝・コース・無料体験情報を掲載。",
        "url": "https://www.kodomo-navi.com/dance",
        "inLanguage": "ja",
        "isPartOf": { "@id": "https://www.kodomo-navi.com/#website" },
        "speakable": { "@type": "SpeakableSpecification", "cssSelector": ["h1", "h2"] },
      }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "ItemList",
        "name": "子供ダンス教室おすすめ人気スクール一覧",
        "description": "全国の子ども向けダンス教室を比較。月謝・口コミ・無料体験情報を掲載。",
        "url": "https://www.kodomo-navi.com/dance",
        "numberOfItems": popularSchools.length,
        "itemListElement": popularSchools.map((s, i) => ({
          "@type": "ListItem",
          "position": i + 1,
          "name": s.name,
          "description": s.desc,
          "url": s.trialUrl || "https://re-dia.jp/",
        })),
      }) }} />

      {/* Header */}
      <header style={{ background: "#fff", borderBottom: "1px solid #e8edf4", boxShadow: "0 2px 8px rgba(0,0,0,.05)", position: "sticky", top: 0, zIndex: 100 }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 24px", display: "flex", alignItems: "center", gap: 10, height: 56 }}>
          <Link href="/" style={{ display: "flex", alignItems: "center", gap: 8, textDecoration: "none" }}>
            <div style={{ width: 32, height: 32, borderRadius: 9, background: "linear-gradient(135deg, #E53935, #B71C1C)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 16 }}>🧒</div>
            <span style={{ fontSize: 15, fontWeight: 900, color: "#1B2A4A" }}>コドモならいごと</span>
          </Link>
          <span style={{ color: "#ddd" }}>›</span>
          <span style={{ fontSize: 13, color: "#888", fontWeight: 600 }}>ダンス教室</span>
        </div>
      </header>

      {/* Breadcrumb */}
      <nav aria-label="パンくず" style={{ maxWidth: 1100, margin: "0 auto", padding: "10px 24px" }}>
        <div style={{ fontSize: 12, color: "#888" }}>
          <Link href="/" style={{ color: "#E53935", textDecoration: "none" }}>トップ</Link>
          {" › "}
          <span style={{ color: "#666" }}>ダンス教室</span>
        </div>
      </nav>

      {/* Hero */}
      <section style={{ background: "linear-gradient(135deg, #B71C1C, #E53935)", padding: "52px 24px 48px" }}>
        <div style={{ maxWidth: 800, margin: "0 auto", textAlign: "center" }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 6, background: "rgba(255,255,255,.2)", borderRadius: 20, padding: "4px 16px", marginBottom: 16, fontSize: 12, color: "#fff", fontWeight: 700 }}>
            💃 全国47都道府県対応
          </div>
          <h1 style={{ fontSize: 30, fontWeight: 900, color: "#fff", marginBottom: 14, lineHeight: 1.4 }}>
            子供のダンス教室おすすめ<br />全国エリア別に徹底比較
          </h1>
          <p style={{ fontSize: 14, color: "rgba(255,255,255,.92)", lineHeight: 2, marginBottom: 24 }}>
            お近くのダンス教室を探そう。全国100校以上のリディアダンスアカデミーをはじめ人気スクールを比較できます。
          </p>
          <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
            {["🏆 全国100校以上", "👶 3歳〜OK", "💰 月7,700円〜", "🎵 初回体験無料"].map((b, i) => (
              <span key={i} style={{ fontSize: 13, color: "rgba(255,255,255,.9)", fontWeight: 700, background: "rgba(255,255,255,.15)", padding: "6px 14px", borderRadius: 20 }}>{b}</span>
            ))}
          </div>
        </div>
      </section>

      <div style={{ maxWidth: 1000, margin: "0 auto", padding: "36px 24px 60px" }}>

        {/* リディアダンスアカデミー特集ブロック */}
        <div style={{ background: "linear-gradient(135deg, #FFF5F5, #FFEBEE)", borderRadius: 20, padding: "28px 24px", marginBottom: 32, border: "2px solid #E5393522", boxShadow: "0 4px 24px rgba(229,57,53,.1)" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 16 }}>
            <div style={{ width: 52, height: 52, borderRadius: 14, background: "linear-gradient(135deg, #E53935, #B71C1C)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 26 }}>🏆</div>
            <div>
              <div style={{ fontSize: 12, fontWeight: 700, color: "#E53935", marginBottom: 4 }}>全国No.1キッズダンススクール</div>
              <h2 style={{ fontSize: 20, fontWeight: 900, color: "#1B2A4A", margin: 0 }}>リディアダンスアカデミー</h2>
            </div>
          </div>
          <p style={{ fontSize: 14, color: "#555", lineHeight: 1.8, marginBottom: 16 }}>
            全国100校以上展開のキッズダンススクール。現役プロダンサー講師200名以上在籍。3歳のリトルクラスから本格コースまで充実。ヒップホップ・ジャズ・K-POPなど多ジャンル対応。発表会・コンクールも充実。
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginBottom: 20 }}>
            {["全国100校以上", "初回体験無料", "3歳〜OK", "プロ講師200名+", "多ジャンル対応", "発表会充実"].map((tag, i) => (
              <span key={i} style={{ background: "#fff", border: "1.5px solid #E5393544", color: "#E53935", padding: "4px 12px", borderRadius: 20, fontSize: 12, fontWeight: 700 }}>✓ {tag}</span>
            ))}
          </div>
          <a
            href="https://lin.ee/v9q2QAX"
            target="_blank"
            rel="noopener noreferrer"
            style={{ display: "block", background: "#E53935", color: "#fff", textAlign: "center", padding: "16px 24px", borderRadius: 12, fontWeight: 900, fontSize: 16, textDecoration: "none", boxShadow: "0 6px 20px rgba(229,57,53,.4)" }}
          >
            🎵 無料体験を申し込む →
          </a>
        </div>

        {/* 保護者満足度調査バナー */}
        <Link href="/dance/survey" style={{ display: "block", textDecoration: "none", marginBottom: 28 }}>
          <div style={{ background: "linear-gradient(135deg,#1a1a2e 0%,#2d2d4e 100%)", borderRadius: 16, padding: "20px 24px", display: "flex", alignItems: "center", gap: 16, flexWrap: "wrap", boxShadow: "0 4px 20px rgba(0,0,0,0.2)" }}>
            <div style={{ flex: 1, minWidth: 200 }}>
              <div style={{ fontSize: 11, color: "#FF6B35", fontWeight: 700, marginBottom: 4, letterSpacing: "0.06em" }}>📊 保護者アンケート調査 2026年5月</div>
              <div style={{ fontSize: 17, fontWeight: 900, color: "#fff", lineHeight: 1.4 }}>ダンスで子どもは変わる？保護者169名が回答</div>
              <div style={{ fontSize: 13, color: "#bbb", marginTop: 4 }}>満足度平均8.7点・44%が10点満点・自信がついた41%</div>
            </div>
            <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
              <div style={{ textAlign: "center" }}>
                <div style={{ fontSize: 28, fontWeight: 900, color: "#FF6B35", lineHeight: 1 }}>44%</div>
                <div style={{ fontSize: 10, color: "#888" }}>10点満点</div>
              </div>
              <div style={{ background: "#E8003D", color: "#fff", fontSize: 12, fontWeight: 700, padding: "8px 16px", borderRadius: 8, whiteSpace: "nowrap" }}>調査結果を見る →</div>
            </div>
          </div>
        </Link>

        {/* 都道府県グリッド */}
        <div style={{ background: "#fff", borderRadius: 18, padding: "28px 24px", marginBottom: 28, border: "1.5px solid #e8edf4", boxShadow: "0 2px 12px rgba(0,0,0,.05)" }}>
          <h2 style={{ fontSize: 18, fontWeight: 900, color: "#1B2A4A", marginBottom: 20, paddingBottom: 12, borderBottom: "2px solid #E5393520" }}>
            🗾 都道府県からダンス教室を探す
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(140px, 1fr))", gap: 8 }}>
            {ALL_PREFS_LIST.map((pref) => (
              <Link
                key={pref.slug}
                href={`/dance/${pref.slug}`}
                style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "10px 14px", background: "#fff", border: "1.5px solid #e8edf4", borderRadius: 10, textDecoration: "none", color: "#1B2A4A", fontWeight: 700, fontSize: 13, boxShadow: "0 1px 4px rgba(0,0,0,.04)" }}
              >
                <span>{pref.name}</span>
                <span style={{ color: "#E53935", fontSize: 14 }}>›</span>
              </Link>
            ))}
          </div>
        </div>

        {/* 人気スクール一覧 */}
        <div style={{ background: "#fff", borderRadius: 18, padding: "28px 24px", marginBottom: 28, border: "1.5px solid #e8edf4", boxShadow: "0 2px 12px rgba(0,0,0,.05)" }}>
          <h2 style={{ fontSize: 18, fontWeight: 900, color: "#1B2A4A", marginBottom: 20, paddingBottom: 12, borderBottom: "2px solid #E5393520" }}>
            🏆 人気のダンス教室
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: 14 }}>
            {popularSchools.map((s, i) => (
              <div key={i} style={{ background: s.featured ? "linear-gradient(135deg, #FFF5F5, #FFEBEE)" : "#fff", border: s.featured ? "2px solid #E5393530" : "1.5px solid #e8edf4", borderRadius: 14, padding: "20px 18px", boxShadow: "0 2px 8px rgba(0,0,0,.04)", position: "relative" }}>
                {s.featured && (
                  <div style={{ position: "absolute", top: 0, left: 16, background: "linear-gradient(135deg, #E53935, #B71C1C)", color: "#fff", fontWeight: 900, fontSize: 11, padding: "4px 10px 6px", borderRadius: "0 0 8px 8px" }}>
                    👑 全国No.1
                  </div>
                )}
                <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 10, marginTop: s.featured ? 14 : 0 }}>
                  <div style={{ width: 44, height: 44, borderRadius: 12, background: s.featured ? "linear-gradient(135deg, #E5393520, #B71C1C30)" : "linear-gradient(135deg, #f0f0f020, #e0e0e030)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 22 }}>{s.emoji}</div>
                  <div>
                    <div style={{ fontSize: 14, fontWeight: 800, color: "#1B2A4A" }}>{s.name}</div>
                    <div style={{ fontSize: 12, color: "#888", marginTop: 2 }}>対象: {s.age}</div>
                  </div>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 8 }}>
                  <span style={{ fontSize: 13, color: "#E53935", fontWeight: 700 }}>★ {s.rating}</span>
                  <span style={{ fontSize: 12, color: "#888" }}>月額 ¥{s.fee.toLocaleString()}〜</span>
                </div>
                <p style={{ fontSize: 12, color: "#666", lineHeight: 1.7, margin: 0, marginBottom: s.featured ? 12 : 0 }}>{s.desc}</p>
                {s.featured && (
                  <a
                    href={s.trialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ display: "block", background: "#E53935", color: "#fff", textAlign: "center", padding: "12px 24px", borderRadius: 8, fontWeight: 900, fontSize: 14, textDecoration: "none", marginTop: 12 }}
                  >
                    🎵 無料体験を申し込む →
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* FAQ */}
        <div style={{ background: "#fff", borderRadius: 18, padding: "28px 24px", marginBottom: 28, border: "1.5px solid #e8edf4", boxShadow: "0 2px 12px rgba(0,0,0,.05)" }}>
          <h2 style={{ fontSize: 18, fontWeight: 900, color: "#1B2A4A", marginBottom: 18, paddingBottom: 12, borderBottom: "2px solid #E5393520" }}>
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
          <h2 style={{ fontSize: 18, fontWeight: 900, color: "#1B2A4A", marginBottom: 16, paddingBottom: 12, borderBottom: "2px solid #E5393520" }}>
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
          <Link href="/genre/dance" style={{ display: "inline-flex", alignItems: "center", gap: 6, padding: "12px 24px", background: "#fff", border: "1.5px solid #FFCDD2", borderRadius: 20, color: "#E53935", fontWeight: 700, fontSize: 14, textDecoration: "none" }}>
            💃 ダンス教室一覧
          </Link>
          <Link href="/" style={{ display: "inline-flex", alignItems: "center", gap: 6, padding: "12px 24px", background: "linear-gradient(135deg, #E53935, #B71C1C)", borderRadius: 20, color: "#fff", fontWeight: 700, fontSize: 14, textDecoration: "none", boxShadow: "0 4px 16px rgba(229,57,53,.3)" }}>
            ← トップページへ戻る
          </Link>
        </div>
      </div>
    </div>
  );
}
