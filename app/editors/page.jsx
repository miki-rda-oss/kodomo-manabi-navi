import Link from "next/link";

const BASE_URL = 'https://kodomo-manabi-navi.vercel.app';

export const metadata = {
  title: '編集部・監修者紹介｜コドモならいごと',
  description: 'コドモならいごとの編集部メンバーと監修者を紹介します。子育て経験者・ダンス専門家・教育ライターが子供の習い事情報を提供しています。',
  alternates: { canonical: `${BASE_URL}/editors` },
};

const editorsSchema = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  "name": "編集部・監修者紹介",
  "url": `${BASE_URL}/editors`,
  "author": [
    {
      "@type": "Person",
      "@id": `${BASE_URL}/#editor-tanaka`,
      "name": "田中 美咲",
      "jobTitle": "編集長・習い事アドバイザー",
      "description": "2児の母。子育て歴12年の経験を活かし、習い事選びのリアルな視点で情報発信。延べ200以上の教室を取材。",
      "knowsAbout": ["子供の習い事", "ダンス教室", "教育"],
      "worksFor": { "@id": `${BASE_URL}/#organization` },
    },
    {
      "@type": "Person",
      "@id": `${BASE_URL}/#editor-suzuki`,
      "name": "鈴木 健太",
      "jobTitle": "ダンス情報監修・元プロダンサー",
      "description": "元プロダンサー（活動歴15年）。現在は子供向けダンス教育の普及に取り組む。ダンス教室の質を専門家視点で評価。",
      "knowsAbout": ["ダンス", "K-POP", "子供のダンス教育"],
      "worksFor": { "@id": `${BASE_URL}/#organization` },
    },
    {
      "@type": "Person",
      "name": "山田 花子",
      "jobTitle": "教育ライター",
      "description": "教育学部卒。小学校教員経験5年後、教育ライターに転身。子供の習い事と学習効果の関係を専門に執筆。",
      "knowsAbout": ["教育", "習い事", "学習効果"],
    },
  ],
};

export default function EditorsPage() {
  const editors = [
    {
      name: "田中 美咲",
      role: "編集長・習い事アドバイザー",
      emoji: "👩",
      desc: "2児の母。子育て歴12年の経験を活かし、習い事選びのリアルな視点で情報発信。延べ200以上の教室を実際に取材・体験。「保護者目線」を大切にした記事を担当。",
      tags: ["子育て経験12年", "200+教室取材", "2児の母"],
    },
    {
      name: "鈴木 健太",
      role: "ダンス情報監修・元プロダンサー",
      emoji: "🕺",
      desc: "元プロダンサー（活動歴15年）。HIPHOPダンス全国大会出場経験あり。現在は子供向けダンス教育の普及に取り組む。教室の質を専門家視点で評価・監修。",
      tags: ["元プロダンサー", "全国大会出場", "ダンス歴15年"],
    },
    {
      name: "山田 花子",
      role: "教育ライター・元小学校教員",
      emoji: "📝",
      desc: "教育学部卒。小学校教員を5年経験後、教育ライターに転身。子供の習い事と学習効果・脳発達の関係を専門に執筆。脳科学と教育の橋渡し記事を担当。",
      tags: ["元小学校教員", "教育学部卒", "脳科学×教育"],
    },
  ];

  return (
    <div style={{ fontFamily: "'Noto Sans JP', sans-serif", background: "#f4f7fc", minHeight: "100vh" }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(editorsSchema) }} />

      <div style={{ maxWidth: 800, margin: "0 auto", padding: "40px 20px" }}>
        <Link href="/" style={{ fontSize: 13, color: "#888", textDecoration: "none" }}>← トップに戻る</Link>

        <h1 style={{ fontSize: 28, fontWeight: 900, color: "#1B2A4A", margin: "20px 0 8px" }}>
          編集部・監修者紹介
        </h1>
        <p style={{ fontSize: 14, color: "#666", lineHeight: 1.8, marginBottom: 40 }}>
          コドモならいごとは、子育て経験者・ダンス専門家・教育ライターで構成される編集部が
          実際の取材・体験をもとに情報を提供しています。
        </p>

        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          {editors.map((ed, i) => (
            <div key={i} style={{ background: "#fff", borderRadius: 16, padding: "24px 20px", border: "1.5px solid #e8edf4", boxShadow: "0 2px 10px rgba(0,0,0,.04)" }}>
              <div style={{ display: "flex", gap: 16, alignItems: "flex-start" }}>
                <div style={{ width: 60, height: 60, borderRadius: "50%", background: "linear-gradient(135deg, #FF8A00, #FFB347)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 28, flexShrink: 0 }}>{ed.emoji}</div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: 18, fontWeight: 900, color: "#1B2A4A" }}>{ed.name}</div>
                  <div style={{ fontSize: 12, color: "#FF8A00", fontWeight: 700, marginBottom: 8 }}>{ed.role}</div>
                  <p style={{ fontSize: 13, color: "#555", lineHeight: 1.8, marginBottom: 12 }}>{ed.desc}</p>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                    {ed.tags.map(t => (
                      <span key={t} style={{ fontSize: 11, background: "#f0f4ff", color: "#4527A0", padding: "3px 10px", borderRadius: 10, fontWeight: 600 }}>{t}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div style={{ marginTop: 40, padding: "20px", background: "#fff7ee", borderRadius: 12, border: "1px solid #FFD9A0" }}>
          <h2 style={{ fontSize: 16, fontWeight: 900, color: "#1B2A4A", marginBottom: 8 }}>編集方針</h2>
          <p style={{ fontSize: 13, color: "#555", lineHeight: 1.8 }}>
            コドモならいごとは、実際の取材・体験・保護者アンケートをもとに情報を作成しています。
            広告掲載はありますが、編集内容への影響はなく、客観的な情報提供を心がけています。
            情報の正確性を重視し、定期的な更新・見直しを行っています。
          </p>
        </div>
      </div>
    </div>
  );
}
