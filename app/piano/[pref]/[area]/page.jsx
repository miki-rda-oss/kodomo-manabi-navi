import Link from "next/link";
import { PIANO_AREAS, PIANO_PREFS } from "../../pianoData";

export function generateStaticParams() {
  return Object.keys(PIANO_AREAS).map((key) => {
    const [pref, area] = key.split("/");
    return { pref, area };
  });
}

export async function generateMetadata({ params }) {
  const key = `${params.pref}/${params.area}`;
  const data = PIANO_AREAS[key];
  if (!data) return { title: "ピアノ教室 | コドモならいごと" };
  return {
    title: `${data.prefName}${data.name}の子供ピアノ教室おすすめ｜料金・口コミ比較【コドモならいごと】`,
    description: `${data.prefName}${data.name}の子ども向けピアノ教室を比較。ヤマハ・カワイ・EYS Music Schoolなど人気スクールの月謝・コース・口コミを掲載。無料体験情報も。`,
    keywords: [`${data.name} ピアノ教室`, `${data.name} ピアノ 子供`, `${data.prefName} ${data.name} キッズ ピアノ`],
    alternates: { canonical: `https://www.kodomo-navi.com/piano/${params.pref}/${params.area}` },
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

export default function PianoAreaPage({ params }) {
  const { pref, area } = params;
  const key = `${pref}/${area}`;
  const data = PIANO_AREAS[key];
  const prefData = PIANO_PREFS[pref];

  if (!data) return <div style={{ padding: 40, textAlign: "center" }}>データが見つかりませんでした。</div>;

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "トップ", item: "https://www.kodomo-navi.com" },
      { "@type": "ListItem", position: 2, name: "ピアノ教室", item: "https://www.kodomo-navi.com/piano" },
      { "@type": "ListItem", position: 3, name: `${data.prefName}のピアノ教室`, item: `https://www.kodomo-navi.com/piano/${pref}` },
      { "@type": "ListItem", position: 4, name: `${data.name}のピアノ教室`, item: `https://www.kodomo-navi.com/piano/${pref}/${area}` },
    ],
  };

  const areaFaqs = [
    { q: `${data.name}でピアノ教室は何歳から通えますか？`, a: "多くの教室は3歳から対応しています。ヤマハ・カワイは1歳からの親子コースも設けています。" },
    { q: `${data.name}のピアノ教室の月謝相場は？`, a: "週1回で7,000〜12,000円が相場です。グループレッスンは比較的リーズナブルです。" },
    { q: "家にピアノがないと習えませんか？", a: "最初は電子ピアノや61鍵キーボードで十分です。教室に確認しましょう。" },
    { q: "ピアノを習うと脳の発達に良いですか？", a: "両手を独立して動かすことで脳の左右を刺激。集中力・記憶力向上に効果的です。" },
  ];

  
  const blogs = [
    { href: "/blog/kids-piano-guide", text: "子供のピアノ教室の選び方完全ガイド" },
    { href: "/blog/kids-piano-school-guide-2026", text: "子供ピアノ教室おすすめ2026年版" },
    { href: "/blog/kids-piano-benefits-complete", text: "子供がピアノを習う効果・メリット" },
    { href: "/blog/kids-piano-practice-guide", text: "子供のピアノ練習方法ガイド" },
  ];

  return (
    <div style={{ fontFamily: "'Noto Sans JP','Hiragino Sans',sans-serif", background: "#f4f7fc", minHeight: "100vh" }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      {/* Header */}
      <header style={{ background: "#fff", borderBottom: "1px solid #e8edf4", boxShadow: "0 2px 8px rgba(0,0,0,.05)", position: "sticky", top: 0, zIndex: 100 }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 24px", display: "flex", alignItems: "center", gap: 8, height: 56, flexWrap: "wrap" }}>
          <Link href="/" style={{ display: "flex", alignItems: "center", gap: 8, textDecoration: "none" }}>
            <div style={{ width: 32, height: 32, borderRadius: 9, background: "linear-gradient(135deg, #FF8A00, #FFB347)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 16 }}>🧒</div>
            <span style={{ fontSize: 15, fontWeight: 900, color: "#1B2A4A" }}>コドモならいごと</span>
          </Link>
          <span style={{ color: "#ddd" }}>›</span>
          <Link href="/piano" style={{ fontSize: 13, color: "#9C27B0", textDecoration: "none", fontWeight: 600 }}>ピアノ</Link>
          <span style={{ color: "#ddd" }}>›</span>
          <Link href={`/piano/${pref}`} style={{ fontSize: 13, color: "#9C27B0", textDecoration: "none", fontWeight: 600 }}>{data.prefName}</Link>
          <span style={{ color: "#ddd" }}>›</span>
          <span style={{ fontSize: 13, color: "#888", fontWeight: 600 }}>{data.name}</span>
        </div>
      </header>

      {/* Breadcrumb */}
      <nav aria-label="パンくず" style={{ maxWidth: 1100, margin: "0 auto", padding: "10px 24px" }}>
        <div style={{ fontSize: 12, color: "#888" }}>
          <Link href="/" style={{ color: "#9C27B0", textDecoration: "none" }}>トップ</Link>
          {" › "}
          <Link href="/piano" style={{ color: "#9C27B0", textDecoration: "none" }}>ピアノ教室</Link>
          {" › "}
          <Link href={`/piano/${pref}`} style={{ color: "#9C27B0", textDecoration: "none" }}>{data.prefName}</Link>
          {" › "}
          <span style={{ color: "#666" }}>{data.name}</span>
        </div>
      </nav>

      {/* Hero */}
      <section style={{ background: "linear-gradient(135deg, #4A148C, #7B1FA2)", padding: "44px 24px 40px" }}>
        <div style={{ maxWidth: 800, margin: "0 auto", textAlign: "center" }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 6, background: "rgba(255,255,255,.2)", borderRadius: 20, padding: "4px 14px", marginBottom: 14, fontSize: 12, color: "#fff", fontWeight: 700 }}>
            🎹 {data.prefName} {data.name} ピアノ教室情報
          </div>
          <h1 style={{ fontSize: 26, fontWeight: 900, color: "#fff", marginBottom: 12, lineHeight: 1.4 }}>
            {data.name}の子供向け<br />ピアノ教室
          </h1>
          <p style={{ fontSize: 14, color: "rgba(255,255,255,.9)", lineHeight: 1.9 }}>
            {data.prefName}{data.name}エリアの子ども向けピアノ教室を比較。<br />
            月謝・口コミ・無料体験情報を掲載しています。
          </p>
        </div>
      </section>

      <div style={{ maxWidth: 900, margin: "0 auto", padding: "32px 24px 60px" }}>

        {/* スクール一覧 */}
        <div style={{ background: "#fff", borderRadius: 18, padding: "28px 24px", marginBottom: 24, border: "1.5px solid #e8edf4", boxShadow: "0 2px 12px rgba(0,0,0,.05)" }}>
          <h2 style={{ fontSize: 18, fontWeight: 900, color: "#1B2A4A", marginBottom: 18, paddingBottom: 12, borderBottom: "2px solid #9C27B020" }}>
            🏆 {data.name}のピアノ教室スクール一覧
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            {data.schools.map((s, i) => (
              <div key={i} style={{ background: i === 0 ? "linear-gradient(135deg, #F3E5F5, #EDE7F6)" : "#f8f9fb", borderRadius: 14, padding: "20px 22px", border: i === 0 ? "2px solid #9C27B030" : "1.5px solid #e8edf4", position: "relative" }}>
                {i === 0 && (
                  <div style={{ position: "absolute", top: 0, left: 20, background: "linear-gradient(135deg, #7B1FA2, #9C27B0)", color: "#fff", fontWeight: 900, fontSize: 11, padding: "4px 10px 6px", borderRadius: "0 0 8px 8px" }}>
                    👑 おすすめNo.1
                  </div>
                )}
                <div style={{ display: "flex", alignItems: "flex-start", gap: 14, marginTop: i === 0 ? 14 : 0 }}>
                  <div style={{ width: 50, height: 50, borderRadius: 12, background: "linear-gradient(135deg, #9C27B020, #7B1FA230)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 24, flexShrink: 0 }}>{s.emoji}</div>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontSize: 16, fontWeight: 900, color: "#1B2A4A", marginBottom: 4 }}>{s.name}</div>
                    <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 8, flexWrap: "wrap" }}>
                      <Stars r={s.rating} />
                      <span style={{ fontSize: 12, color: "#888" }}>対象: {s.age}</span>
                      <span style={{ fontSize: 12, fontWeight: 700, color: "#9C27B0" }}>月額 ¥{s.fee.toLocaleString()}〜</span>
                    </div>
                    <p style={{ fontSize: 13, color: "#555", lineHeight: 1.8, margin: 0 }}>{s.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 都道府県ページへ戻る */}
        <div style={{ background: "linear-gradient(135deg, #F3E5F5, #EDE7F6)", borderRadius: 18, padding: "22px 24px", marginBottom: 24, border: "1.5px solid #9C27B020" }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 12 }}>
            <div>
              <div style={{ fontSize: 14, fontWeight: 800, color: "#1B2A4A", marginBottom: 4 }}>📍 {data.prefName}の他のエリアも見る</div>
              <div style={{ fontSize: 13, color: "#888" }}>{data.prefName}全体のピアノ教室情報はこちら</div>
            </div>
            <Link href={`/piano/${pref}`} style={{ display: "inline-flex", alignItems: "center", gap: 6, padding: "10px 20px", background: "linear-gradient(135deg, #7B1FA2, #9C27B0)", borderRadius: 16, color: "#fff", fontWeight: 700, fontSize: 13, textDecoration: "none" }}>
              {data.prefName}のピアノ教室一覧 →
            </Link>
          </div>
        </div>

        {/* FAQ */}
        <div style={{ background: "#fff", borderRadius: 18, padding: "28px 24px", marginBottom: 24, border: "1.5px solid #e8edf4", boxShadow: "0 2px 12px rgba(0,0,0,.05)" }}>
          <h2 style={{ fontSize: 18, fontWeight: 900, color: "#1B2A4A", marginBottom: 18, paddingBottom: 12, borderBottom: "2px solid #9C27B020" }}>
            ❓ よくある質問（{data.name}のピアノ教室）
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
          <h2 style={{ fontSize: 18, fontWeight: 900, color: "#1B2A4A", marginBottom: 16, paddingBottom: 12, borderBottom: "2px solid #9C27B020" }}>
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

        {/* 同じ都道府県の他エリアリンク */}
        {prefData && prefData.areas && prefData.areas.length > 1 && (
          <div style={{ background: "#fff", borderRadius: 18, padding: "28px 24px", marginBottom: 24, border: "1.5px solid #e8edf4", boxShadow: "0 2px 12px rgba(0,0,0,.05)" }}>
            <h2 style={{ fontSize: 16, fontWeight: 900, color: "#1B2A4A", marginBottom: 14, paddingBottom: 10, borderBottom: "2px solid #9C27B020" }}>
              📍 {data.prefName}の他のエリア
            </h2>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
              {prefData.areas.filter(a => a.slug !== area).map((a, i) => (
                <Link key={i} href={`/piano/${pref}/${a.slug}`} style={{ display: "inline-flex", alignItems: "center", gap: 4, padding: "8px 16px", background: "#fff", border: "1.5px solid #e8edf4", borderRadius: 20, textDecoration: "none", color: "#1B2A4A", fontSize: 13, fontWeight: 600 }}>
                  📍 {a.name}
                </Link>
              ))}
            </div>
          </div>
        )}

        <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
          <Link href={`/piano/${pref}`} style={{ display: "inline-flex", alignItems: "center", gap: 6, padding: "12px 24px", background: "#fff", borderRadius: 20, color: "#9C27B0", fontWeight: 700, fontSize: 14, textDecoration: "none", border: "2px solid #9C27B0" }}>
            ← {data.prefName}のピアノ教室
          </Link>
          <Link href="/piano" style={{ display: "inline-flex", alignItems: "center", gap: 6, padding: "12px 24px", background: "linear-gradient(135deg, #7B1FA2, #9C27B0)", borderRadius: 20, color: "#fff", fontWeight: 700, fontSize: 14, textDecoration: "none", boxShadow: "0 4px 16px rgba(123,31,162,.3)" }}>
            ピアノ教室トップへ
          </Link>
        </div>

        <div style={{ maxWidth: 900, margin: "0 auto", padding: "0 20px 44px" }}>
          <a href="https://lin.ee/v9q2QAX" target="_blank" rel="noopener noreferrer"
             style={{ display: "block", background: "linear-gradient(135deg,#06C755,#04A647)", color: "#fff", textAlign: "center", padding: "20px 24px", borderRadius: 16, fontWeight: 900, fontSize: 16, textDecoration: "none", boxShadow: "0 6px 20px rgba(6,199,85,.3)" }}>
            💬 LINEで気軽に相談・無料体験を予約する →
          </a>
        </div>
      </div>
    </div>
  );
}
