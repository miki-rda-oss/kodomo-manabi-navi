import Link from "next/link";

const BASE_URL = 'https://www.kodomo-navi.com';

export const metadata = {
  title: 'コドモならいごととは｜編集方針・運営者情報・信頼性について',
  description: 'コドモならいごとは全国の子ども向け習い事教室を口コミ・料金・体験情報で比較できる無料サービスです。編集方針・運営者情報・掲載基準を詳しく解説します。',
  keywords: ['コドモならいごと', '運営者情報', '編集方針', '習い事', '子供', '信頼性'],
  alternates: { canonical: `${BASE_URL}/about` },
  openGraph: {
    title: 'コドモならいごととは｜編集方針・運営者情報',
    description: '全国5,000教室以上を掲載する子供の習い事比較サービス。編集方針・信頼性の根拠を公開。',
    url: `${BASE_URL}/about`,
    siteName: 'コドモならいごと',
  },
};

const orgSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${BASE_URL}/#organization`,
  "name": "コドモならいごと",
  "url": BASE_URL,
  "email": "info@sl-i.co.jp",
  "description": "子どもの習い事を検索・比較できる情報サービス。全国5,000教室以上を掲載。",
  "foundingDate": "2024",
  "areaServed": "JP",
  "knowsAbout": ["子供の習い事", "ダンス教室", "スイミング", "英語教室", "ピアノ教室", "プログラミング"],
};

const editorsSchema = [
  {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${BASE_URL}/#editor-tanaka`,
    "name": "田中 美咲",
    "jobTitle": "編集長",
    "worksFor": { "@id": `${BASE_URL}/#organization` },
    "description": "子育て経験10年以上を持つ習い事ライター。2人の子どもをダンス・スイミング・英語教室に通わせた保護者として、教室選びのリアルな視点で執筆。習い事業界取材歴7年。",
    "knowsAbout": ["子供の習い事", "ダンス教室選び", "習い事比較"],
  },
  {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${BASE_URL}/#editor-suzuki`,
    "name": "鈴木 健太",
    "jobTitle": "ダンス情報監修",
    "worksFor": { "@id": `${BASE_URL}/#organization` },
    "description": "元プロダンサー。HIP HOP・K-POPダンスを20年以上指導。子ども向けダンス教室の選び方・年齢別アドバイス・ジャンル解説を監修。",
    "knowsAbout": ["ダンス", "HIPHOPダンス", "K-POPダンス", "子供ダンス教育"],
  },
];

const aboutSchema = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  "name": "コドモならいごととは｜編集方針・運営者情報",
  "url": `${BASE_URL}/about`,
  "description": "子どもの習い事を検索・比較できる情報サービス「コドモならいごと」の運営者情報・編集方針・掲載基準ページです。",
  "dateModified": "2026-05-14",
  "publisher": { "@id": `${BASE_URL}/#organization` },
  "author": [
    { "@id": `${BASE_URL}/#editor-tanaka` },
    { "@id": `${BASE_URL}/#editor-suzuki` },
  ],
  "breadcrumb": {
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "トップ", "item": BASE_URL },
      { "@type": "ListItem", "position": 2, "name": "サービスについて", "item": `${BASE_URL}/about` },
    ],
  },
};

export default function AboutPage() {
  return (
    <div style={{ fontFamily: "'Noto Sans JP','Hiragino Sans',sans-serif", background: "#f4f7fc", minHeight: "100vh" }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutSchema) }} />
      {editorsSchema.map((s, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(s) }} />
      ))}

      {/* Header */}
      <header style={{ background: "#fff", borderBottom: "1px solid #e8edf4", boxShadow: "0 2px 8px rgba(0,0,0,.05)", position: "sticky", top: 0, zIndex: 100 }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 24px", display: "flex", alignItems: "center", gap: 10, height: 56 }}>
          <Link href="/" style={{ display: "flex", alignItems: "center", gap: 8, textDecoration: "none" }}>
            <div style={{ width: 32, height: 32, borderRadius: 9, background: "linear-gradient(135deg, #FF8A00, #FFB347)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 16 }}>🧒</div>
            <span style={{ fontSize: 15, fontWeight: 900, color: "#1B2A4A" }}>コドモならいごと</span>
          </Link>
          <span style={{ color: "#ddd" }}>›</span>
          <span style={{ fontSize: 13, color: "#888", fontWeight: 600 }}>サービスについて</span>
        </div>
      </header>

      {/* Breadcrumb */}
      <nav aria-label="パンくず" style={{ maxWidth: 1100, margin: "0 auto", padding: "10px 24px" }}>
        <div style={{ fontSize: 12, color: "#888" }}>
          <Link href="/" style={{ color: "#FF8A00", textDecoration: "none" }}>トップ</Link>
          {" › "}
          <span style={{ color: "#666" }}>サービスについて</span>
        </div>
      </nav>

      {/* Hero */}
      <section style={{ background: "linear-gradient(135deg, #1B2A4A, #2a4070)", padding: "44px 24px 40px" }}>
        <div style={{ maxWidth: 800, margin: "0 auto", textAlign: "center" }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 6, background: "rgba(255,255,255,.15)", borderRadius: 20, padding: "4px 14px", marginBottom: 14, fontSize: 12, color: "#fff", fontWeight: 700 }}>
            ABOUT
          </div>
          <h1 style={{ fontSize: 28, fontWeight: 900, color: "#fff", marginBottom: 12 }}>コドモならいごととは</h1>
          <p style={{ fontSize: 14, color: "rgba(255,255,255,.85)", lineHeight: 1.9 }}>
            お子さまに合った習い事教室を見つけるための、無料の検索・比較サービスです。<br />
            全国5,000教室以上・11カテゴリの習い事情報を掲載しています。
          </p>
        </div>
      </section>

      <div style={{ maxWidth: 800, margin: "0 auto", padding: "40px 24px 60px" }}>

        {/* Trust Badges */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))", gap: 12, marginBottom: 32 }}>
          {[
            { icon: "🏫", val: "5,000+", label: "掲載教室数" },
            { icon: "🗾", val: "全国", label: "47都道府県対応" },
            { icon: "📚", val: "11", label: "習い事カテゴリ" },
            { icon: "💬", val: "10,000+", label: "口コミ・体験情報" },
          ].map((s, i) => (
            <div key={i} style={{ background: "#fff", borderRadius: 14, padding: "16px 12px", textAlign: "center", border: "1.5px solid #e8edf4", boxShadow: "0 2px 8px rgba(0,0,0,.04)" }}>
              <div style={{ fontSize: 22, marginBottom: 4 }}>{s.icon}</div>
              <div style={{ fontSize: 20, fontWeight: 900, color: "#1B2A4A" }}>{s.val}</div>
              <div style={{ fontSize: 11, color: "#888", marginTop: 2 }}>{s.label}</div>
            </div>
          ))}
        </div>

        {/* サービス概要 */}
        <div style={{ background: "#fff", borderRadius: 18, padding: "28px 24px", marginBottom: 20, border: "1.5px solid #e8edf4", boxShadow: "0 2px 12px rgba(0,0,0,.05)" }}>
          <h2 style={{ fontSize: 18, fontWeight: 900, color: "#1B2A4A", marginBottom: 16, paddingBottom: 12, borderBottom: "2px solid #FF8A0020" }}>📋 サービス概要</h2>
          <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 14 }}>
            <tbody>
              {[
                ["サービス名", "コドモならいごと"],
                ["URL", "https://www.kodomo-navi.com"],
                ["サービス内容", "子ども向け習い事教室の検索・比較・口コミ情報の提供"],
                ["掲載教室数", "全国5,000教室以上（2026年5月時点）"],
                ["掲載ジャンル", "ダンス・スイミング・英語・ピアノ・プログラミング・サッカー・バレエ・空手・リトミック・幼児教室・学習塾"],
                ["対象エリア", "全国47都道府県（順次拡大中）"],
                ["利用料金", "完全無料"],
                ["開始年", "2024年"],
                ["お問い合わせ", "info@sl-i.co.jp"],
              ].map(([label, value], i) => (
                <tr key={i} style={{ borderBottom: "1px solid #f0f4f8" }}>
                  <td style={{ padding: "10px 12px", fontWeight: 700, color: "#555", whiteSpace: "nowrap", width: "35%", verticalAlign: "top" }}>{label}</td>
                  <td style={{ padding: "10px 12px", color: "#333", lineHeight: 1.7 }}>{value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* ミッション */}
        <div style={{ background: "#fff", borderRadius: 18, padding: "28px 24px", marginBottom: 20, border: "1.5px solid #e8edf4", boxShadow: "0 2px 12px rgba(0,0,0,.05)" }}>
          <h2 style={{ fontSize: 18, fontWeight: 900, color: "#1B2A4A", marginBottom: 16, paddingBottom: 12, borderBottom: "2px solid #FF8A0020" }}>🎯 ミッション</h2>
          <p style={{ fontSize: 15, fontWeight: 700, color: "#1B2A4A", lineHeight: 1.8, marginBottom: 12 }}>
            「すべての子どもが自分に合った習い事に出会える社会を目指す」
          </p>
          <p style={{ fontSize: 14, color: "#666", lineHeight: 1.9 }}>
            習い事は子どもの可能性を広げる大切な機会です。しかし、数多くの教室の中からお子さまに合った教室を見つけることは容易ではありません。コドモならいごとは、保護者の方が教室選びで後悔しないよう、正確で役立つ情報を提供し続けます。
          </p>
        </div>

        {/* 編集方針・E-A-T */}
        <div style={{ background: "#fff", borderRadius: 18, padding: "28px 24px", marginBottom: 20, border: "1.5px solid #e8edf4", boxShadow: "0 2px 12px rgba(0,0,0,.05)" }}>
          <h2 style={{ fontSize: 18, fontWeight: 900, color: "#1B2A4A", marginBottom: 16, paddingBottom: 12, borderBottom: "2px solid #FF8A0020" }}>📝 編集方針・コンテンツポリシー</h2>
          <p style={{ fontSize: 14, color: "#555", lineHeight: 1.9, marginBottom: 20 }}>
            コドモならいごとでは、保護者の方が安心して習い事選びを行えるよう、以下の編集方針に基づいてコンテンツを制作・管理しています。
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            {[
              {
                icon: "🔍",
                title: "一次情報に基づく正確な情報収集",
                desc: "各教室の公式ウェブサイト・公式SNS・直接取材をもとに掲載内容を作成しています。情報の正確性を最優先としています。",
              },
              {
                icon: "🔄",
                title: "定期的な情報の更新・検証",
                desc: "料金・コース内容・開講状況は定期的に確認・更新しています。変更が確認された際は速やかに修正を行います。最新情報は各教室への直接お問い合わせもご確認ください。",
              },
              {
                icon: "👥",
                title: "実際の利用者による口コミ掲載",
                desc: "実際にスクールに通った保護者・生徒のリアルな声を掲載しています。虚偽・誇張のない体験に基づく情報のみを掲載しています。",
              },
              {
                icon: "⚖️",
                title: "中立・公正な情報提供",
                desc: "特定の教室を不当に優遇・排除しない中立的な立場で情報を提供しています。掲載順位は口コミ評価・情報の充実度・ユーザー利便性を基準としています。",
              },
              {
                icon: "🎓",
                title: "専門的な知見に基づくコンテンツ",
                desc: "コラム・ガイド記事は、習い事に精通した編集チームが作成しています。医療・法律に関する情報は専門家への確認を推奨します。",
              },
              {
                icon: "🛡️",
                title: "子どもの安全を最優先",
                desc: "掲載スクールの安全基準・保険加入状況を重視した情報提供を行っています。不審な点がある教室は掲載を見直します。",
              },
            ].map((item, i) => (
              <div key={i} style={{ display: "flex", gap: 14, alignItems: "flex-start", padding: "14px 0", borderBottom: i < 5 ? "1px solid #f5f5f5" : "none" }}>
                <span style={{ fontSize: 22, flexShrink: 0 }}>{item.icon}</span>
                <div>
                  <div style={{ fontSize: 14, fontWeight: 800, color: "#1B2A4A", marginBottom: 6 }}>{item.title}</div>
                  <div style={{ fontSize: 13, color: "#666", lineHeight: 1.8 }}>{item.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 編集チーム */}
        <div style={{ background: "#fff", borderRadius: 18, padding: "28px 24px", marginBottom: 20, border: "1.5px solid #e8edf4", boxShadow: "0 2px 12px rgba(0,0,0,.05)" }}>
          <h2 style={{ fontSize: 18, fontWeight: 900, color: "#1B2A4A", marginBottom: 16, paddingBottom: 12, borderBottom: "2px solid #FF8A0020" }}>👥 編集チームについて</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            {/* Editor 1 */}
            <div style={{ display: "flex", gap: 14, alignItems: "flex-start", padding: "16px", background: "#f8f9fb", borderRadius: 12, border: "1px solid #eef1f6" }}>
              <div style={{ width: 56, height: 56, borderRadius: "50%", background: "linear-gradient(135deg, #FF8A00, #FFB347)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 26, flexShrink: 0 }}>✍️</div>
              <div style={{ flex: 1 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 8, flexWrap: "wrap", marginBottom: 4 }}>
                  <span style={{ fontSize: 15, fontWeight: 800, color: "#1B2A4A" }}>田中 美咲</span>
                  <span style={{ fontSize: 11, background: "#FF8A0015", color: "#E65100", borderRadius: 6, padding: "2px 8px", fontWeight: 700 }}>編集長</span>
                </div>
                <div style={{ fontSize: 12, color: "#888", marginBottom: 8 }}>子育て経験10年以上・習い事業界取材歴7年</div>
                <div style={{ fontSize: 13, color: "#555", lineHeight: 1.8 }}>
                  2人の子どもをダンス・スイミング・英語教室に通わせた保護者として、教室選びのリアルな視点で取材・執筆を担当。全国200校以上の習い事教室を直接取材し、保護者が本当に知りたい情報を届けることをモットーにしています。
                </div>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginTop: 10 }}>
                  {["子育て経験10年", "200校以上取材", "11カテゴリ担当"].map((t, i) => (
                    <span key={i} style={{ fontSize: 11, background: "#f0f4ff", color: "#3949AB", borderRadius: 20, padding: "2px 10px", fontWeight: 600 }}>{t}</span>
                  ))}
                </div>
              </div>
            </div>
            {/* Editor 2 */}
            <div style={{ display: "flex", gap: 14, alignItems: "flex-start", padding: "16px", background: "#f8f9fb", borderRadius: 12, border: "1px solid #eef1f6" }}>
              <div style={{ width: 56, height: 56, borderRadius: "50%", background: "linear-gradient(135deg, #7B1FA2, #AB47BC)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 26, flexShrink: 0 }}>🕺</div>
              <div style={{ flex: 1 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 8, flexWrap: "wrap", marginBottom: 4 }}>
                  <span style={{ fontSize: 15, fontWeight: 800, color: "#1B2A4A" }}>鈴木 健太</span>
                  <span style={{ fontSize: 11, background: "#7B1FA215", color: "#7B1FA2", borderRadius: 6, padding: "2px 8px", fontWeight: 700 }}>ダンス監修</span>
                </div>
                <div style={{ fontSize: 12, color: "#888", marginBottom: 8 }}>元プロダンサー・子どもダンス指導歴20年以上</div>
                <div style={{ fontSize: 13, color: "#555", lineHeight: 1.8 }}>
                  HIP HOP・K-POPダンスを専門とする元プロダンサー。子どもへのダンス指導歴20年以上。ダンス教室の選び方・年齢別の取り組み方・ジャンル解説を担当。「3〜4歳から始めるリトミックダンスの重要性」「小学生のHIPHOP入門」など多数のコンテンツを監修。
                </div>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginTop: 10 }}>
                  {["元プロダンサー", "HIPHOP/K-POP", "指導歴20年+"].map((t, i) => (
                    <span key={i} style={{ fontSize: 11, background: "#f5f0ff", color: "#7B1FA2", borderRadius: 20, padding: "2px 10px", fontWeight: 600 }}>{t}</span>
                  ))}
                </div>
              </div>
            </div>
            {/* Supervisor */}
            <div style={{ display: "flex", gap: 14, alignItems: "flex-start", padding: "16px", background: "#fff8f0", borderRadius: 12, border: "1.5px solid #FFE0B2" }}>
              <div style={{ width: 56, height: 56, borderRadius: "50%", background: "linear-gradient(135deg, #E53935, #C62828)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 26, flexShrink: 0 }}>💃</div>
              <div style={{ flex: 1 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 8, flexWrap: "wrap", marginBottom: 4 }}>
                  <span style={{ fontSize: 15, fontWeight: 800, color: "#1B2A4A" }}>リディアダンスアカデミー</span>
                  <span style={{ fontSize: 11, background: "#E5393515", color: "#C62828", borderRadius: 6, padding: "2px 8px", fontWeight: 700 }}>ダンス情報協力</span>
                </div>
                <div style={{ fontSize: 12, color: "#888", marginBottom: 8 }}>現役プロダンサー講師200名以上在籍・全国100校以上展開</div>
                <div style={{ fontSize: 13, color: "#555", lineHeight: 1.8 }}>
                  全国100校以上を展開する子ども向けダンス教室。大阪を中心に関西・関東・全国展開。ダンス教室の選び方・年齢別アドバイス・ジャンル解説についての情報提供・監修協力をいただいています。
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 掲載基準 */}
        <div style={{ background: "#fff", borderRadius: 18, padding: "28px 24px", marginBottom: 20, border: "1.5px solid #e8edf4", boxShadow: "0 2px 12px rgba(0,0,0,.05)" }}>
          <h2 style={{ fontSize: 18, fontWeight: 900, color: "#1B2A4A", marginBottom: 16, paddingBottom: 12, borderBottom: "2px solid #FF8A0020" }}>✅ 掲載基準</h2>
          <p style={{ fontSize: 14, color: "#555", lineHeight: 1.9, marginBottom: 16 }}>
            コドモならいごとに掲載している教室は、以下の基準を満たしていることを確認した上で掲載しています。
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 10 }}>
            {[
              "正規に運営されている教室・スクールであること",
              "子ども向けのクラス・コースを提供していること",
              "連絡先・所在地などの基本情報が明確であること",
              "保険加入など安全面での基準を満たしていること",
              "虚偽・誇大広告がないと判断できること",
            ].map((item, i) => (
              <div key={i} style={{ display: "flex", gap: 8, alignItems: "flex-start", padding: "10px 12px", background: "#f0f9f0", borderRadius: 10 }}>
                <span style={{ color: "#4CAF50", fontWeight: 900, flexShrink: 0, fontSize: 16 }}>✓</span>
                <span style={{ fontSize: 13, color: "#444", lineHeight: 1.7 }}>{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* 広告・収益化方針 */}
        <div style={{ background: "#fff", borderRadius: 18, padding: "28px 24px", marginBottom: 20, border: "1.5px solid #e8edf4", boxShadow: "0 2px 12px rgba(0,0,0,.05)" }}>
          <h2 style={{ fontSize: 18, fontWeight: 900, color: "#1B2A4A", marginBottom: 16, paddingBottom: 12, borderBottom: "2px solid #FF8A0020" }}>💡 収益化・広告方針</h2>
          <p style={{ fontSize: 14, color: "#555", lineHeight: 1.9 }}>
            コドモならいごとは、掲載教室への体験申込み・問い合わせの仲介を通じて運営費用を賄っています。収益が発生する掲載教室についても、口コミ評価・情報の充実度に基づいた中立的な掲載順位を維持しています。特定教室への誘導を目的とした恣意的なランキング操作は行いません。
          </p>
          <div style={{ marginTop: 14, padding: "12px 16px", background: "#FFF3E0", borderRadius: 10, border: "1px solid #FFE0B2" }}>
            <div style={{ fontSize: 13, color: "#E65100", fontWeight: 700 }}>
              ※ リディアダンスアカデミーはダンスカテゴリにおいて口コミ評価・掲載情報の充実度ともに最高評価を受けており、「おすすめNo.1」として掲載しています。
            </div>
          </div>
        </div>

        {/* 免責事項 */}
        <div style={{ background: "#f8fafd", borderRadius: 14, padding: "20px 24px", marginBottom: 28, border: "1.5px solid #e8edf4" }}>
          <h2 style={{ fontSize: 15, fontWeight: 800, color: "#1B2A4A", marginBottom: 12 }}>⚠️ 免責事項</h2>
          <p style={{ fontSize: 12, color: "#888", lineHeight: 1.9 }}>
            掲載情報は公開時点のものであり、最新情報と異なる場合があります。料金・コース内容・開講状況については、各教室へ直接ご確認ください。本サービスの利用により生じたいかなる損害についても、運営者は責任を負いかねます。当サービス内のコンテンツの無断転載・複製を禁じます。
          </p>
        </div>

        <div style={{ maxWidth: 900, margin: "0 auto", padding: "0 20px 44px" }}>
          <a href="https://lin.ee/v9q2QAX" target="_blank" rel="noopener noreferrer"
             style={{ display: "block", background: "linear-gradient(135deg,#06C755,#04A647)", color: "#fff", textAlign: "center", padding: "20px 24px", borderRadius: 16, fontWeight: 900, fontSize: 16, textDecoration: "none", boxShadow: "0 6px 20px rgba(6,199,85,.3)" }}>
            💬 LINEで気軽に相談・無料体験を予約する →
          </a>
        </div>

        {/* Related links */}
        <div style={{ background: "#fff", borderRadius: 14, padding: "20px 24px", marginBottom: 28, border: "1.5px solid #e8edf4" }}>
          <h2 style={{ fontSize: 15, fontWeight: 800, color: "#1B2A4A", marginBottom: 14 }}>🔗 関連ページ</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            {[
              { href: "/editors", text: "👥 編集部・監修者紹介" },
              { href: "/blog", text: "📝 習い事コラム・選び方ガイド" },
              { href: "/genre/dance", text: "💃 ダンス教室一覧" },
              { href: "/terms", text: "利用規約" },
              { href: "/privacy", text: "プライバシーポリシー" },
            ].map((item, i) => (
              <Link key={i} href={item.href} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "10px 14px", background: "#f8f9fb", borderRadius: 10, textDecoration: "none", color: "#1B2A4A", fontSize: 14, fontWeight: 600, border: "1px solid #e8edf4" }}>
                <span>{item.text}</span>
                <span style={{ color: "#ccc" }}>›</span>
              </Link>
            ))}
          </div>
        </div>

        <div style={{ textAlign: "center" }}>
          <Link href="/" style={{ display: "inline-flex", alignItems: "center", gap: 6, padding: "12px 28px", background: "linear-gradient(135deg, #FF8A00, #FFB347)", borderRadius: 20, color: "#fff", fontWeight: 700, fontSize: 14, textDecoration: "none", boxShadow: "0 4px 16px rgba(255,138,0,.3)" }}>
            ← トップページへ戻る
          </Link>
        </div>
      </div>
    </div>
  );
}
