import Link from "next/link";
import { GYMNASTICS_AREAS, GYMNASTICS_PREFS } from "../../gymnasticsData";

export function generateStaticParams() {
  return Object.keys(GYMNASTICS_AREAS).map((key) => {
    const [pref, area] = key.split("/");
    return { pref, area };
  });
}

export async function generateMetadata({ params }) {
  const key = `${params.pref}/${params.area}`;
  const data = GYMNASTICS_AREAS[key];
  if (!data) return { title: "体操教室 | コドモならいごと" };
  return {
    title: `${data.prefName}${data.name}の子供体操教室おすすめ｜料金・口コミ比較【コドモならいごと】`,
    description: `${data.prefName}${data.name}の子ども向け体操教室・体操スクールを比較。コナミスポーツ・忍者ナイン・セントラルスポーツなど人気スクールの月謝・コース・口コミを掲載。無料体験情報も。`,
    keywords: [`${data.name} 体操教室`, `${data.name} 体操 子供`, `${data.prefName} ${data.name} キッズ体操`],
    alternates: { canonical: `https://www.kodomo-navi.com/gymnastics/${params.pref}/${params.area}` },
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

export default function GymnasticsAreaPage({ params }) {
  const { pref, area } = params;
  const key = `${pref}/${area}`;
  const data = GYMNASTICS_AREAS[key];
  const prefData = GYMNASTICS_PREFS[pref];

  if (!data) return <div style={{ padding: 40, textAlign: "center" }}>データが見つかりませんでした。</div>;

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "トップ", item: "https://www.kodomo-navi.com" },
      { "@type": "ListItem", position: 2, name: "体操教室・体操スクール", item: "https://www.kodomo-navi.com/gymnastics" },
      { "@type": "ListItem", position: 3, name: `${data.prefName}の体操教室`, item: `https://www.kodomo-navi.com/gymnastics/${pref}` },
      { "@type": "ListItem", position: 4, name: `${data.name}の体操教室`, item: `https://www.kodomo-navi.com/gymnastics/${pref}/${area}` },
    ],
  };

  const areaFaqs = [
    { q: `${data.name}で体操教室は何歳から通えますか？`, a: "2〜3歳から通えます。幼児向けクラスを設けているスクールが多く、早い時期から体幹・柔軟性・バランス感覚を育てられます。" },
    { q: `${data.name}の体操教室の月謝相場は？`, a: "週1回で4,000〜8,000円が一般的です。スポーツクラブ運営のスクールは7,000〜9,000円程度、地域の体操クラブは4,000〜6,000円程度が相場です。" },
    { q: "体操を習う効果は？", a: "体幹・柔軟性・バランス感覚・運動神経が育ちます。姿勢の改善や転倒予防にも効果的で、他のスポーツへの基礎能力向上にもつながります。" },
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
    { href: "/blog/kids-activity-ranking-all", text: "子供の習い事人気ランキング" },
    { href: "/blog/kids-activity-cost-annual", text: "子供の習い事年間費用" },
  ];

  return (
    <div style={{ fontFamily: "'Noto Sans JP','Hiragino Sans',sans-serif", background: "#f4f7fc", minHeight: "100vh" }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Header */}
      <header style={{ background: "#fff", borderBottom: "1px solid #e8edf4", boxShadow: "0 2px 8px rgba(0,0,0,.05)", position: "sticky", top: 0, zIndex: 100 }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 24px", display: "flex", alignItems: "center", gap: 8, height: 56, flexWrap: "wrap" }}>
          <Link href="/" style={{ display: "flex", alignItems: "center", gap: 8, textDecoration: "none" }}>
            <div style={{ width: 32, height: 32, borderRadius: 9, background: "linear-gradient(135deg, #FF6F00, #E65100)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 16 }}>🧒</div>
            <span style={{ fontSize: 15, fontWeight: 900, color: "#1B2A4A" }}>コドモならいごと</span>
          </Link>
          <span style={{ color: "#ddd" }}>›</span>
          <Link href="/gymnastics" style={{ fontSize: 13, color: "#FF6F00", textDecoration: "none", fontWeight: 600 }}>体操</Link>
          <span style={{ color: "#ddd" }}>›</span>
          <Link href={`/gymnastics/${pref}`} style={{ fontSize: 13, color: "#FF6F00", textDecoration: "none", fontWeight: 600 }}>{data.prefName}</Link>
          <span style={{ color: "#ddd" }}>›</span>
          <span style={{ fontSize: 13, color: "#888", fontWeight: 600 }}>{data.name}</span>
        </div>
      </header>

      {/* Breadcrumb */}
      <nav aria-label="パンくず" style={{ maxWidth: 1100, margin: "0 auto", padding: "10px 24px" }}>
        <div style={{ fontSize: 12, color: "#888" }}>
          <Link href="/" style={{ color: "#FF6F00", textDecoration: "none" }}>トップ</Link>
          {" › "}
          <Link href="/gymnastics" style={{ color: "#FF6F00", textDecoration: "none" }}>体操教室</Link>
          {" › "}
          <Link href={`/gymnastics/${pref}`} style={{ color: "#FF6F00", textDecoration: "none" }}>{data.prefName}</Link>
          {" › "}
          <span style={{ color: "#666" }}>{data.name}</span>
        </div>
      </nav>

      {/* Hero */}
      <section style={{ background: "linear-gradient(135deg, #BF360C, #E64A19)", padding: "44px 24px 40px" }}>
        <div style={{ maxWidth: 800, margin: "0 auto", textAlign: "center" }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 6, background: "rgba(255,255,255,.2)", borderRadius: 20, padding: "4px 14px", marginBottom: 14, fontSize: 12, color: "#fff", fontWeight: 700 }}>
            🤸 {data.prefName} {data.name} 体操教室情報
          </div>
          <h1 style={{ fontSize: 26, fontWeight: 900, color: "#fff", marginBottom: 12, lineHeight: 1.4 }}>
            {data.name}の子供向け<br />体操教室・体操スクール
          </h1>
          <p style={{ fontSize: 14, color: "rgba(255,255,255,.9)", lineHeight: 1.9 }}>
            {data.prefName}{data.name}エリアの子ども向け体操教室・体操スクールを比較。<br />
            月謝・口コミ・無料体験情報を掲載しています。
          </p>
        </div>
      </section>

      <div style={{ maxWidth: 900, margin: "0 auto", padding: "32px 24px 60px" }}>

        {/* スクール一覧 */}
        <div style={{ background: "#fff", borderRadius: 18, padding: "28px 24px", marginBottom: 24, border: "1.5px solid #e8edf4", boxShadow: "0 2px 12px rgba(0,0,0,.05)" }}>
          <h2 style={{ fontSize: 18, fontWeight: 900, color: "#1B2A4A", marginBottom: 18, paddingBottom: 12, borderBottom: "2px solid #FF6F0020" }}>
            🏆 {data.name}の体操教室・体操スクール一覧
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            {data.schools.map((s, i) => (
              <div key={i} style={{ background: i === 0 ? "linear-gradient(135deg, #FFF8F0, #FFF3E0)" : "#f8f9fb", borderRadius: 14, padding: "20px 22px", border: i === 0 ? "2px solid #FF6F0030" : "1.5px solid #e8edf4", position: "relative" }}>
                {i === 0 && (
                  <div style={{ position: "absolute", top: 0, left: 20, background: "linear-gradient(135deg, #FF6F00, #E65100)", color: "#fff", fontWeight: 900, fontSize: 11, padding: "4px 10px 6px", borderRadius: "0 0 8px 8px" }}>
                    👑 おすすめNo.1
                  </div>
                )}
                <div style={{ display: "flex", alignItems: "flex-start", gap: 14, marginTop: i === 0 ? 14 : 0 }}>
                  <div style={{ width: 50, height: 50, borderRadius: 12, background: "linear-gradient(135deg, #FF6F0020, #E6510030)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 24, flexShrink: 0 }}>{s.emoji}</div>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontSize: 16, fontWeight: 900, color: "#1B2A4A", marginBottom: 4 }}>{s.name}</div>
                    <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 8, flexWrap: "wrap" }}>
                      <Stars r={s.rating} />
                      <span style={{ fontSize: 12, color: "#888" }}>対象: {s.age}</span>
                      <span style={{ fontSize: 12, fontWeight: 700, color: "#FF6F00" }}>月額 ¥{s.fee.toLocaleString()}〜</span>
                    </div>
                    <p style={{ fontSize: 13, color: "#555", lineHeight: 1.8, margin: 0 }}>{s.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 都道府県ページへ戻る */}
        <div style={{ background: "linear-gradient(135deg, #FFF8F0, #FFF3E0)", borderRadius: 18, padding: "22px 24px", marginBottom: 24, border: "1.5px solid #FF6F0020" }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 12 }}>
            <div>
              <div style={{ fontSize: 14, fontWeight: 800, color: "#1B2A4A", marginBottom: 4 }}>📍 {data.prefName}の他のエリアも見る</div>
              <div style={{ fontSize: 13, color: "#888" }}>{data.prefName}全体の体操教室情報はこちら</div>
            </div>
            <Link href={`/gymnastics/${pref}`} style={{ display: "inline-flex", alignItems: "center", gap: 6, padding: "10px 20px", background: "linear-gradient(135deg, #FF6F00, #E65100)", borderRadius: 16, color: "#fff", fontWeight: 700, fontSize: 13, textDecoration: "none" }}>
              {data.prefName}の体操教室一覧 →
            </Link>
          </div>
        </div>

        {/* FAQ */}
        <div style={{ background: "#fff", borderRadius: 18, padding: "28px 24px", marginBottom: 24, border: "1.5px solid #e8edf4", boxShadow: "0 2px 12px rgba(0,0,0,.05)" }}>
          <h2 style={{ fontSize: 18, fontWeight: 900, color: "#1B2A4A", marginBottom: 18, paddingBottom: 12, borderBottom: "2px solid #FF6F0020" }}>
            ❓ よくある質問（{data.name}の体操教室）
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

        {/* 同じ都道府県内の他エリアリンク */}
        {prefData && prefData.areas && prefData.areas.length > 1 && (
          <div style={{ background: "#fff", borderRadius: 18, padding: "28px 24px", marginBottom: 24, border: "1.5px solid #e8edf4", boxShadow: "0 2px 12px rgba(0,0,0,.05)" }}>
            <h2 style={{ fontSize: 16, fontWeight: 900, color: "#1B2A4A", marginBottom: 14, paddingBottom: 10, borderBottom: "2px solid #FF6F0020" }}>
              📍 {data.prefName}の他のエリア
            </h2>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
              {prefData.areas.filter(a => a.slug !== area).map((a, i) => (
                <Link key={i} href={`/gymnastics/${pref}/${a.slug}`} style={{ display: "inline-flex", alignItems: "center", gap: 4, padding: "8px 16px", background: "#fff", border: "1.5px solid #e8edf4", borderRadius: 20, textDecoration: "none", color: "#1B2A4A", fontSize: 13, fontWeight: 600 }}>
                  📍 {a.name}
                </Link>
              ))}
            </div>
          </div>
        )}

        <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
          <Link href={`/gymnastics/${pref}`} style={{ display: "inline-flex", alignItems: "center", gap: 6, padding: "12px 24px", background: "#fff", borderRadius: 20, color: "#FF6F00", fontWeight: 700, fontSize: 14, textDecoration: "none", border: "2px solid #FF6F00" }}>
            ← {data.prefName}の体操教室
          </Link>
          <Link href="/gymnastics" style={{ display: "inline-flex", alignItems: "center", gap: 6, padding: "12px 24px", background: "linear-gradient(135deg, #FF6F00, #E65100)", borderRadius: 20, color: "#fff", fontWeight: 700, fontSize: 14, textDecoration: "none", boxShadow: "0 4px 16px rgba(255,111,0,.3)" }}>
            体操教室トップへ
          </Link>
        </div>
      </div>
    </div>
  );
}
