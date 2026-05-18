import Link from "next/link";
import { PRESCHOOL_AREAS, PRESCHOOL_PREFS } from "../../preschoolData";

export function generateStaticParams() {
  return Object.keys(PRESCHOOL_AREAS).map((key) => {
    const [pref, area] = key.split("/");
    return { pref, area };
  });
}

export async function generateMetadata({ params }) {
  const key = `${params.pref}/${params.area}`;
  const data = PRESCHOOL_AREAS[key];
  if (!data) return { title: "幼児教室 | コドモならいごと" };
  return {
    title: `${data.prefName}${data.name}の幼児教室・知育教室おすすめ｜料金・口コミ比較【コドモならいごと】`,
    description: `${data.prefName}${data.name}の子ども向け幼児教室・知育教室を比較。七田式・ベビーパーク・公文・ヤマハなど人気教室の月謝・コース・口コミを掲載。無料体験情報も。`,
    keywords: [`${data.name} 幼児教室`, `${data.name} 知育 子供`, `${data.prefName} ${data.name} 幼児教育`],
    alternates: { canonical: `https://www.kodomo-navi.com/preschool/${params.pref}/${params.area}` },
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

export default function PreschoolAreaPage({ params }) {
  const { pref, area } = params;
  const key = `${pref}/${area}`;
  const data = PRESCHOOL_AREAS[key];
  const prefData = PRESCHOOL_PREFS[pref];

  if (!data) return <div style={{ padding: 40, textAlign: "center" }}>データが見つかりませんでした。</div>;

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "トップ", item: "https://www.kodomo-navi.com" },
      { "@type": "ListItem", position: 2, name: "幼児教室・知育教室", item: "https://www.kodomo-navi.com/preschool" },
      { "@type": "ListItem", position: 3, name: `${data.prefName}の幼児教室`, item: `https://www.kodomo-navi.com/preschool/${pref}` },
      { "@type": "ListItem", position: 4, name: `${data.name}の幼児教室`, item: `https://www.kodomo-navi.com/preschool/${pref}/${area}` },
    ],
  };

  const areaFaqs = [
    { q: `${data.name}で幼児教室は何歳から通えますか？`, a: "0〜1歳から通えるベビークラスがあります。" },
    { q: `${data.name}の幼児教室の月謝相場は？`, a: "7,000〜20,000円が相場です。" },
    { q: "幼児教室の効果は？", a: "集中力・記憶力・想像力・社会性が育ちます。" },
    { q: "保育園・幼稚園と併用できますか？", a: "はい。週1回から通える教室がほとんどです。" },
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
    { href: "/blog/preschool-activity-ranking-2026", text: "幼児の習い事人気ランキング2026" },
    { href: "/blog/kids-activity-ranking-all", text: "子供の習い事人気ランキング" },
    { href: "/blog/toddler-dance-rhythmics-guide", text: "幼児の習い事選び方ガイド" },
  ];

  return (
    <div style={{ fontFamily: "'Noto Sans JP','Hiragino Sans',sans-serif", background: "#f4f7fc", minHeight: "100vh" }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Header */}
      <header style={{ background: "#fff", borderBottom: "1px solid #e8edf4", boxShadow: "0 2px 8px rgba(0,0,0,.05)", position: "sticky", top: 0, zIndex: 100 }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 24px", display: "flex", alignItems: "center", gap: 8, height: 56, flexWrap: "wrap" }}>
          <Link href="/" style={{ display: "flex", alignItems: "center", gap: 8, textDecoration: "none" }}>
            <div style={{ width: 32, height: 32, borderRadius: 9, background: "linear-gradient(135deg, #E65100, #FF8F00)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 16 }}>🧒</div>
            <span style={{ fontSize: 15, fontWeight: 900, color: "#1B2A4A" }}>コドモならいごと</span>
          </Link>
          <span style={{ color: "#ddd" }}>›</span>
          <Link href="/preschool" style={{ fontSize: 13, color: "#FF8F00", textDecoration: "none", fontWeight: 600 }}>幼児教室</Link>
          <span style={{ color: "#ddd" }}>›</span>
          <Link href={`/preschool/${pref}`} style={{ fontSize: 13, color: "#FF8F00", textDecoration: "none", fontWeight: 600 }}>{data.prefName}</Link>
          <span style={{ color: "#ddd" }}>›</span>
          <span style={{ fontSize: 13, color: "#888", fontWeight: 600 }}>{data.name}</span>
        </div>
      </header>

      {/* Breadcrumb */}
      <nav aria-label="パンくず" style={{ maxWidth: 1100, margin: "0 auto", padding: "10px 24px" }}>
        <div style={{ fontSize: 12, color: "#888" }}>
          <Link href="/" style={{ color: "#FF8F00", textDecoration: "none" }}>トップ</Link>
          {" › "}
          <Link href="/preschool" style={{ color: "#FF8F00", textDecoration: "none" }}>幼児教室・知育教室</Link>
          {" › "}
          <Link href={`/preschool/${pref}`} style={{ color: "#FF8F00", textDecoration: "none" }}>{data.prefName}</Link>
          {" › "}
          <span style={{ color: "#666" }}>{data.name}</span>
        </div>
      </nav>

      {/* Hero */}
      <section style={{ background: "linear-gradient(135deg, #E65100, #FF8F00)", padding: "44px 24px 40px" }}>
        <div style={{ maxWidth: 800, margin: "0 auto", textAlign: "center" }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 6, background: "rgba(255,255,255,.2)", borderRadius: 20, padding: "4px 14px", marginBottom: 14, fontSize: 12, color: "#fff", fontWeight: 700 }}>
            🧒 {data.prefName} {data.name} 幼児教室情報
          </div>
          <h1 style={{ fontSize: 26, fontWeight: 900, color: "#fff", marginBottom: 12, lineHeight: 1.4 }}>
            {data.name}の子供向け<br />幼児教室・知育教室
          </h1>
          <p style={{ fontSize: 14, color: "rgba(255,255,255,.9)", lineHeight: 1.9 }}>
            {data.prefName}{data.name}エリアの子ども向け幼児教室・知育教室を比較。<br />
            月謝・口コミ・無料体験情報を掲載しています。
          </p>
        </div>
      </section>

      <div style={{ maxWidth: 900, margin: "0 auto", padding: "32px 24px 60px" }}>

        {/* スクール一覧 */}
        <div style={{ background: "#fff", borderRadius: 18, padding: "28px 24px", marginBottom: 24, border: "1.5px solid #e8edf4", boxShadow: "0 2px 12px rgba(0,0,0,.05)" }}>
          <h2 style={{ fontSize: 18, fontWeight: 900, color: "#1B2A4A", marginBottom: 18, paddingBottom: 12, borderBottom: "2px solid #FFC10720" }}>
            🏆 {data.name}の幼児教室・知育教室一覧
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            {data.schools.map((s, i) => (
              <div key={i} style={{ background: i === 0 ? "linear-gradient(135deg, #FFF8F0, #FFF3E0)" : "#f8f9fb", borderRadius: 14, padding: "20px 22px", border: i === 0 ? "2px solid #FFC10730" : "1.5px solid #e8edf4", position: "relative" }}>
                {i === 0 && (
                  <div style={{ position: "absolute", top: 0, left: 20, background: "linear-gradient(135deg, #E65100, #FF8F00)", color: "#fff", fontWeight: 900, fontSize: 11, padding: "4px 10px 6px", borderRadius: "0 0 8px 8px" }}>
                    👑 おすすめNo.1
                  </div>
                )}
                <div style={{ display: "flex", alignItems: "flex-start", gap: 14, marginTop: i === 0 ? 14 : 0 }}>
                  <div style={{ width: 50, height: 50, borderRadius: 12, background: "linear-gradient(135deg, #FFC10720, #FF8F0030)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 24, flexShrink: 0 }}>{s.emoji}</div>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontSize: 16, fontWeight: 900, color: "#1B2A4A", marginBottom: 4 }}>{s.name}</div>
                    <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 8, flexWrap: "wrap" }}>
                      <Stars r={s.rating} />
                      <span style={{ fontSize: 12, color: "#888" }}>対象: {s.age}</span>
                      <span style={{ fontSize: 12, fontWeight: 700, color: "#FF8F00" }}>月額 ¥{s.fee.toLocaleString()}〜</span>
                    </div>
                    <p style={{ fontSize: 13, color: "#555", lineHeight: 1.8, margin: 0 }}>{s.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 都道府県ページへ戻る */}
        <div style={{ background: "linear-gradient(135deg, #FFF8F0, #FFF3E0)", borderRadius: 18, padding: "22px 24px", marginBottom: 24, border: "1.5px solid #FFC10720" }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 12 }}>
            <div>
              <div style={{ fontSize: 14, fontWeight: 800, color: "#1B2A4A", marginBottom: 4 }}>📍 {data.prefName}の他のエリアも見る</div>
              <div style={{ fontSize: 13, color: "#888" }}>{data.prefName}全体の幼児教室情報はこちら</div>
            </div>
            <Link href={`/preschool/${pref}`} style={{ display: "inline-flex", alignItems: "center", gap: 6, padding: "10px 20px", background: "linear-gradient(135deg, #E65100, #FF8F00)", borderRadius: 16, color: "#fff", fontWeight: 700, fontSize: 13, textDecoration: "none" }}>
              {data.prefName}の幼児教室一覧 →
            </Link>
          </div>
        </div>

        {/* FAQ */}
        <div style={{ background: "#fff", borderRadius: 18, padding: "28px 24px", marginBottom: 24, border: "1.5px solid #e8edf4", boxShadow: "0 2px 12px rgba(0,0,0,.05)" }}>
          <h2 style={{ fontSize: 18, fontWeight: 900, color: "#1B2A4A", marginBottom: 18, paddingBottom: 12, borderBottom: "2px solid #FFC10720" }}>
            ❓ よくある質問（{data.name}の幼児教室）
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

        {/* 同じエリア内の他エリアリンク */}
        {prefData && prefData.areas && prefData.areas.length > 1 && (
          <div style={{ background: "#fff", borderRadius: 18, padding: "28px 24px", marginBottom: 24, border: "1.5px solid #e8edf4", boxShadow: "0 2px 12px rgba(0,0,0,.05)" }}>
            <h2 style={{ fontSize: 16, fontWeight: 900, color: "#1B2A4A", marginBottom: 14, paddingBottom: 10, borderBottom: "2px solid #FFC10720" }}>
              📍 {data.prefName}の他のエリア
            </h2>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
              {prefData.areas.filter(a => a.slug !== area).map((a, i) => (
                <Link key={i} href={`/preschool/${pref}/${a.slug}`} style={{ display: "inline-flex", alignItems: "center", gap: 4, padding: "8px 16px", background: "#fff", border: "1.5px solid #e8edf4", borderRadius: 20, textDecoration: "none", color: "#1B2A4A", fontSize: 13, fontWeight: 600 }}>
                  📍 {a.name}
                </Link>
              ))}
            </div>
          </div>
        )}

        <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
          <Link href={`/preschool/${pref}`} style={{ display: "inline-flex", alignItems: "center", gap: 6, padding: "12px 24px", background: "#fff", borderRadius: 20, color: "#FF8F00", fontWeight: 700, fontSize: 14, textDecoration: "none", border: "2px solid #FF8F00" }}>
            ← {data.prefName}の幼児教室
          </Link>
          <Link href="/preschool" style={{ display: "inline-flex", alignItems: "center", gap: 6, padding: "12px 24px", background: "linear-gradient(135deg, #E65100, #FF8F00)", borderRadius: 20, color: "#fff", fontWeight: 700, fontSize: 14, textDecoration: "none", boxShadow: "0 4px 16px rgba(230,81,0,.3)" }}>
            幼児教室・知育トップへ
          </Link>
        </div>
      </div>
    </div>
  );
}
