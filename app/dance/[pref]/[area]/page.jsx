import Link from "next/link";
import { DANCE_AREAS, DANCE_PREFS } from "../../danceData";

export function generateStaticParams() {
  return Object.keys(DANCE_AREAS).map((key) => {
    const [pref, area] = key.split("/");
    return { pref, area };
  });
}

export async function generateMetadata({ params }) {
  const key = `${params.pref}/${params.area}`;
  const data = DANCE_AREAS[key];
  if (!data) return { title: "ダンス教室 | コドモならいごと" };
  return {
    title: `${data.prefName}${data.name}のダンス教室おすすめ｜料金・口コミ比較【コドモならいごと】`,
    description: `${data.prefName}${data.name}の子ども向けダンス教室を比較。リディアダンスアカデミー・EXPG・エイベックスの月謝・コース・無料体験情報を掲載。`,
    keywords: [`${data.name} ダンス教室`, `${data.name} ダンス 子供`, `${data.prefName} ${data.name} キッズダンス`, "リディアダンスアカデミー"],
    alternates: { canonical: `https://www.kodomo-navi.com/dance/${params.pref}/${params.area}` },
  };
}

function Stars({ r }) {
  if (!r) return null;
  return (
    <span style={{ display: "inline-flex", alignItems: "center", gap: 2 }}>
      {[...Array(5)].map((_, i) => (
        <span key={i} style={{ color: i < Math.round(r) ? "#FFB300" : "#ddd", fontSize: 13 }}>{i < Math.round(r) ? "★" : "☆"}</span>
      ))}
      <b style={{ color: "#333", fontSize: 13, marginLeft: 3 }}>{r}</b>
    </span>
  );
}

export default function DanceAreaPage({ params }) {
  const { pref, area } = params;
  const key = `${pref}/${area}`;
  const data = DANCE_AREAS[key];
  const prefData = DANCE_PREFS[pref];

  if (!data) return <div style={{ padding: 40, textAlign: "center" }}>データが見つかりませんでした。</div>;

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "トップ", item: "https://www.kodomo-navi.com" },
      { "@type": "ListItem", position: 2, name: "ダンス教室", item: "https://www.kodomo-navi.com/dance" },
      { "@type": "ListItem", position: 3, name: `${data.prefName}のダンス教室`, item: `https://www.kodomo-navi.com/dance/${pref}` },
      { "@type": "ListItem", position: 4, name: `${data.name}のダンス教室`, item: `https://www.kodomo-navi.com/dance/${pref}/${area}` },
    ],
  };

  const areaFaqs = [
    { q: `${data.name}でダンス教室は何歳から通えますか？`, a: "リディアダンスアカデミーをはじめ、多くのスクールは3歳から通えます。リトルクラス・幼児コースを充実させているスクールが増えています。" },
    { q: `${data.name}のダンス教室の月謝相場は？`, a: "週1回で月6,000〜12,000円が相場です。リディアダンスアカデミーは月7,700円〜で、初回体験無料です。" },
    { q: `${data.name}のダンス教室はどのジャンルがありますか？`, a: "ヒップホップ・ジャズ・K-POP・バレエ・ブレイクダンスなど多ジャンル対応しています。リディアダンスアカデミーは7ジャンル以上対応しています。" },
  ];

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: areaFaqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  const blogs = [
    { href: "/blog/kids-dance-age-guide", text: "子供ダンスは何歳から始める？完全ガイド" },
    { href: "/blog/osaka-kids-dance-school-ranking", text: "大阪キッズダンス教室おすすめランキング" },
    { href: "/blog/kids-hiphop-dance-guide", text: "子供ヒップホップダンス教室の選び方" },
    { href: "/blog/kids-kpop-dance-school", text: "子供K-POPダンス教室おすすめ" },
    { href: "/blog/lydia-dance-academy-review", text: "リディアダンスアカデミーの評判・口コミ" },
  ];

  const featuredSchool = data.schools[0];

  return (
    <div style={{ fontFamily: "'Noto Sans JP','Hiragino Sans',sans-serif", background: "#f4f7fc", minHeight: "100vh" }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Header */}
      <header style={{ background: "#fff", borderBottom: "1px solid #e8edf4", boxShadow: "0 2px 8px rgba(0,0,0,.05)", position: "sticky", top: 0, zIndex: 100 }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 24px", display: "flex", alignItems: "center", gap: 8, height: 56, flexWrap: "wrap" }}>
          <Link href="/" style={{ display: "flex", alignItems: "center", gap: 8, textDecoration: "none" }}>
            <div style={{ width: 32, height: 32, borderRadius: 9, background: "linear-gradient(135deg, #E53935, #B71C1C)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 16 }}>🧒</div>
            <span style={{ fontSize: 15, fontWeight: 900, color: "#1B2A4A" }}>コドモならいごと</span>
          </Link>
          <span style={{ color: "#ddd" }}>›</span>
          <Link href="/dance" style={{ fontSize: 13, color: "#E53935", textDecoration: "none", fontWeight: 600 }}>ダンス</Link>
          <span style={{ color: "#ddd" }}>›</span>
          <Link href={`/dance/${pref}`} style={{ fontSize: 13, color: "#E53935", textDecoration: "none", fontWeight: 600 }}>{data.prefName}</Link>
          <span style={{ color: "#ddd" }}>›</span>
          <span style={{ fontSize: 13, color: "#888", fontWeight: 600 }}>{data.name}</span>
        </div>
      </header>

      {/* Breadcrumb */}
      <nav aria-label="パンくず" style={{ maxWidth: 1100, margin: "0 auto", padding: "10px 24px" }}>
        <div style={{ fontSize: 12, color: "#888" }}>
          <Link href="/" style={{ color: "#E53935", textDecoration: "none" }}>トップ</Link>
          {" › "}
          <Link href="/dance" style={{ color: "#E53935", textDecoration: "none" }}>ダンス教室</Link>
          {" › "}
          <Link href={`/dance/${pref}`} style={{ color: "#E53935", textDecoration: "none" }}>{data.prefName}</Link>
          {" › "}
          <span style={{ color: "#666" }}>{data.name}</span>
        </div>
      </nav>

      {/* Hero */}
      <section style={{ background: "linear-gradient(135deg, #B71C1C, #E53935)", padding: "44px 24px 40px" }}>
        <div style={{ maxWidth: 800, margin: "0 auto", textAlign: "center" }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 6, background: "rgba(255,255,255,.2)", borderRadius: 20, padding: "4px 14px", marginBottom: 14, fontSize: 12, color: "#fff", fontWeight: 700 }}>
            💃 {data.prefName} {data.name} ダンス教室情報
          </div>
          <h1 style={{ fontSize: 26, fontWeight: 900, color: "#fff", marginBottom: 12, lineHeight: 1.4 }}>
            {data.name}のダンス教室おすすめ<br />比較ランキング
          </h1>
          <p style={{ fontSize: 14, color: "rgba(255,255,255,.9)", lineHeight: 1.9 }}>
            {data.prefName}{data.name}エリアの子ども向けダンス教室を比較。<br />
            月謝・無料体験情報を掲載しています。
          </p>
        </div>
      </section>

      <div style={{ maxWidth: 900, margin: "0 auto", padding: "32px 24px 60px" }}>

        {/* リディア特集CTAブロック */}
        {featuredSchool && featuredSchool.featured && (
          <div style={{ background: "linear-gradient(135deg, #FFF5F5, #FFEBEE)", borderRadius: 20, padding: "24px 24px", marginBottom: 28, border: "2px solid #E5393522", boxShadow: "0 4px 24px rgba(229,57,53,.1)" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 14 }}>
              <div style={{ width: 48, height: 48, borderRadius: 12, background: "linear-gradient(135deg, #E53935, #B71C1C)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 24 }}>🏆</div>
              <div>
                <div style={{ fontSize: 11, fontWeight: 700, color: "#E53935", marginBottom: 2 }}>{data.name}エリア・おすすめNo.1</div>
                <h2 style={{ fontSize: 18, fontWeight: 900, color: "#1B2A4A", margin: 0 }}>{featuredSchool.name}</h2>
              </div>
            </div>
            <p style={{ fontSize: 13, color: "#555", lineHeight: 1.8, marginBottom: 14 }}>{featuredSchool.desc}</p>
            {featuredSchool.tags && (
              <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginBottom: 16 }}>
                {featuredSchool.tags.map((tag, i) => (
                  <span key={i} style={{ background: "#fff", border: "1.5px solid #E5393544", color: "#E53935", padding: "3px 10px", borderRadius: 20, fontSize: 11, fontWeight: 700 }}>✓ {tag}</span>
                ))}
              </div>
            )}
            <a
              href={featuredSchool.trialUrl || featuredSchool.url}
              target="_blank"
              rel="noopener noreferrer"
              style={{ display: "block", background: "#E53935", color: "#fff", textAlign: "center", padding: "14px 24px", borderRadius: 10, fontWeight: 900, fontSize: 16, textDecoration: "none", boxShadow: "0 6px 20px rgba(229,57,53,.4)" }}
            >
              🎵 無料体験を申し込む →
            </a>
          </div>
        )}

        {/* スクール一覧 */}
        <div style={{ background: "#fff", borderRadius: 18, padding: "28px 24px", marginBottom: 24, border: "1.5px solid #e8edf4", boxShadow: "0 2px 12px rgba(0,0,0,.05)" }}>
          <h2 style={{ fontSize: 18, fontWeight: 900, color: "#1B2A4A", marginBottom: 18, paddingBottom: 12, borderBottom: "2px solid #E5393520" }}>
            🏆 {data.name}のダンス教室一覧
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            {data.schools.map((s, i) => (
              <div key={i} style={{ background: i === 0 ? "linear-gradient(135deg, #FFF5F5, #FFEBEE)" : "#f8f9fb", borderRadius: 14, padding: "20px 22px", border: i === 0 ? "2px solid #E5393530" : "1.5px solid #e8edf4", position: "relative" }}>
                {i === 0 && (
                  <div style={{ position: "absolute", top: 0, left: 20, background: "linear-gradient(135deg, #E53935, #B71C1C)", color: "#fff", fontWeight: 900, fontSize: 11, padding: "4px 10px 6px", borderRadius: "0 0 8px 8px" }}>
                    👑 おすすめNo.1
                  </div>
                )}
                <div style={{ display: "flex", alignItems: "flex-start", gap: 14, marginTop: i === 0 ? 14 : 0 }}>
                  <div style={{ width: 50, height: 50, borderRadius: 12, background: i === 0 ? "linear-gradient(135deg, #E5393520, #B71C1C30)" : "linear-gradient(135deg, #f0f0f020, #e0e0e030)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 24, flexShrink: 0 }}>{s.emoji}</div>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontSize: 16, fontWeight: 900, color: "#1B2A4A", marginBottom: 4 }}>{s.name}</div>
                    <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 8, flexWrap: "wrap" }}>
                      <Stars r={s.rating} />
                      <span style={{ fontSize: 12, color: "#888" }}>対象: {s.age}</span>
                      <span style={{ fontSize: 12, fontWeight: 700, color: "#E53935" }}>月額 ¥{s.fee.toLocaleString()}〜</span>
                    </div>
                    <p style={{ fontSize: 13, color: "#555", lineHeight: 1.8, margin: 0 }}>{s.desc}</p>
                    {s.featured && (s.trialUrl || s.url) && (
                      <a
                        href={s.trialUrl || s.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ display: "block", background: "#E53935", color: "#fff", textAlign: "center", padding: "12px 24px", borderRadius: 8, fontWeight: 900, fontSize: 14, textDecoration: "none", marginTop: 12 }}
                      >
                        🎵 無料体験を申し込む →
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 都道府県ページへ戻る */}
        <div style={{ background: "linear-gradient(135deg, #FFF5F5, #FFEBEE)", borderRadius: 18, padding: "22px 24px", marginBottom: 24, border: "1.5px solid #E5393520" }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 12 }}>
            <div>
              <div style={{ fontSize: 14, fontWeight: 800, color: "#1B2A4A", marginBottom: 4 }}>📍 {data.prefName}の他のエリアも見る</div>
              <div style={{ fontSize: 13, color: "#888" }}>{data.prefName}全体のダンス教室情報はこちら</div>
            </div>
            <Link href={`/dance/${pref}`} style={{ display: "inline-flex", alignItems: "center", gap: 6, padding: "10px 20px", background: "linear-gradient(135deg, #E53935, #B71C1C)", borderRadius: 16, color: "#fff", fontWeight: 700, fontSize: 13, textDecoration: "none" }}>
              {data.prefName}のダンス教室一覧 →
            </Link>
          </div>
        </div>

        {/* FAQ */}
        <div style={{ background: "#fff", borderRadius: 18, padding: "28px 24px", marginBottom: 24, border: "1.5px solid #e8edf4", boxShadow: "0 2px 12px rgba(0,0,0,.05)" }}>
          <h2 style={{ fontSize: 18, fontWeight: 900, color: "#1B2A4A", marginBottom: 18, paddingBottom: 12, borderBottom: "2px solid #E5393520" }}>
            ❓ よくある質問（{data.name}のダンス教室）
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            {areaFaqs.map((faq, i) => (
              <div key={i} style={{ background: "#f8f9fb", borderRadius: 12, padding: "18px 20px", border: "1.5px solid #e8edf4" }}>
                <div style={{ fontSize: 14, fontWeight: 800, color: "#1B2A4A", marginBottom: 8 }}>Q. {faq.q}</div>
                <div style={{ fontSize: 13, color: "#555", lineHeight: 1.8 }}>A. {faq.a}</div>
              </div>
            ))}
          </div>
        </div>

        {/* 関連ブログ */}
        <div style={{ background: "#fff", borderRadius: 18, padding: "28px 24px", marginBottom: 24, border: "1.5px solid #e8edf4", boxShadow: "0 2px 12px rgba(0,0,0,.05)" }}>
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

        {/* 同じ都道府県内の他エリアリンク */}
        {prefData && prefData.areas && prefData.areas.length > 1 && (
          <div style={{ background: "#fff", borderRadius: 18, padding: "28px 24px", marginBottom: 24, border: "1.5px solid #e8edf4", boxShadow: "0 2px 12px rgba(0,0,0,.05)" }}>
            <h2 style={{ fontSize: 16, fontWeight: 900, color: "#1B2A4A", marginBottom: 14, paddingBottom: 10, borderBottom: "2px solid #E5393520" }}>
              📍 {data.prefName}の他のエリア
            </h2>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
              {prefData.areas.filter(a => a.slug !== area).map((a, i) => (
                <Link key={i} href={`/dance/${pref}/${a.slug}`} style={{ display: "inline-flex", alignItems: "center", gap: 4, padding: "8px 16px", background: "#fff", border: "1.5px solid #e8edf4", borderRadius: 20, textDecoration: "none", color: "#1B2A4A", fontSize: 13, fontWeight: 600 }}>
                  📍 {a.name}
                </Link>
              ))}
            </div>
          </div>
        )}

        <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
          <Link href={`/dance/${pref}`} style={{ display: "inline-flex", alignItems: "center", gap: 6, padding: "12px 24px", background: "#fff", borderRadius: 20, color: "#E53935", fontWeight: 700, fontSize: 14, textDecoration: "none", border: "2px solid #E53935" }}>
            ← {data.prefName}のダンス教室
          </Link>
          <Link href="/dance" style={{ display: "inline-flex", alignItems: "center", gap: 6, padding: "12px 24px", background: "linear-gradient(135deg, #E53935, #B71C1C)", borderRadius: 20, color: "#fff", fontWeight: 700, fontSize: 14, textDecoration: "none", boxShadow: "0 4px 16px rgba(229,57,53,.3)" }}>
            ダンス教室トップへ
          </Link>
        </div>
      </div>
    </div>
  );
}
