import Link from "next/link";

export const metadata = {
  title: 'コドモならいごととは｜運営者情報・サービス概要',
  description: 'コドモならいごとは全国の子ども向け習い事教室を口コミ・料金・体験情報で比較できる無料サービスです。運営者情報・サービス概要をご紹介します。',
};

const aboutSchema = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  "name": "コドモならいごととは",
  "url": "https://www.kodomo-navi.com/about",
  "description": "子どもの習い事を検索・比較できる情報サービス「コドモならいごと」の運営者情報・サービス概要ページです。",
  "publisher": {
    "@type": "Organization",
    "name": "コドモならいごと",
    "url": "https://www.kodomo-navi.com",
    "email": "info@sl-i.co.jp",
  },
};

export default function AboutPage() {
  return (
    <div style={{ fontFamily: "'Noto Sans JP','Hiragino Sans',sans-serif", background: "#f4f7fc", minHeight: "100vh" }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutSchema) }} />

      {/* Header */}
      <header style={{ background: "#fff", borderBottom: "1px solid #e8edf4", boxShadow: "0 2px 8px rgba(0,0,0,.05)" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 24px", display: "flex", alignItems: "center", gap: 10, height: 56 }}>
          <Link href="/" style={{ display: "flex", alignItems: "center", gap: 8, textDecoration: "none" }}>
            <div style={{ width: 32, height: 32, borderRadius: 9, background: "linear-gradient(135deg, #FF8A00, #FFB347)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 16 }}>🧒</div>
            <span style={{ fontSize: 15, fontWeight: 900, color: "#1B2A4A" }}>コドモならいごと</span>
          </Link>
          <span style={{ color: "#ddd" }}>›</span>
          <span style={{ fontSize: 13, color: "#888", fontWeight: 600 }}>サービスについて</span>
        </div>
      </header>

      {/* Hero */}
      <section style={{ background: "linear-gradient(135deg, #1B2A4A, #2a4070)", padding: "44px 24px 40px" }}>
        <div style={{ maxWidth: 800, margin: "0 auto", textAlign: "center" }}>
          <h1 style={{ fontSize: 28, fontWeight: 900, color: "#fff", marginBottom: 12 }}>コドモならいごととは</h1>
          <p style={{ fontSize: 14, color: "rgba(255,255,255,.8)", lineHeight: 1.8 }}>
            お子さまに合った習い事教室を見つけるための、<br />無料の検索・比較サービスです。
          </p>
        </div>
      </section>

      <div style={{ maxWidth: 800, margin: "0 auto", padding: "44px 24px" }}>

        {/* サービス概要 */}
        <div style={{ background: "#fff", borderRadius: 18, padding: "28px 24px", marginBottom: 20, border: "1.5px solid #e8edf4", boxShadow: "0 2px 12px rgba(0,0,0,.05)" }}>
          <h2 style={{ fontSize: 18, fontWeight: 900, color: "#1B2A4A", marginBottom: 16, paddingBottom: 12, borderBottom: "2px solid #FF8A0020" }}>📋 サービス概要</h2>
          <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 14 }}>
            {[
              ["サービス名", "コドモならいごと"],
              ["URL", "https://www.kodomo-navi.com"],
              ["サービス内容", "子ども向け習い事教室の検索・比較・口コミ情報の提供"],
              ["掲載教室数", "全国5,000教室以上"],
              ["掲載ジャンル", "ダンス・スイミング・英語・ピアノ・プログラミングなど11カテゴリ"],
              ["対象エリア", "全国47都道府県"],
              ["利用料金", "無料"],
              ["お問い合わせ", "info@sl-i.co.jp"],
            ].map(([label, value], i) => (
              <tr key={i} style={{ borderBottom: "1px solid #f0f4f8" }}>
                <td style={{ padding: "10px 12px", fontWeight: 700, color: "#555", whiteSpace: "nowrap", width: "35%", verticalAlign: "top" }}>{label}</td>
                <td style={{ padding: "10px 12px", color: "#333", lineHeight: 1.7 }}>{value}</td>
              </tr>
            ))}
          </table>
        </div>

        {/* ミッション */}
        <div style={{ background: "#fff", borderRadius: 18, padding: "28px 24px", marginBottom: 20, border: "1.5px solid #e8edf4", boxShadow: "0 2px 12px rgba(0,0,0,.05)" }}>
          <h2 style={{ fontSize: 18, fontWeight: 900, color: "#1B2A4A", marginBottom: 16, paddingBottom: 12, borderBottom: "2px solid #FF8A0020" }}>🎯 ミッション</h2>
          <p style={{ fontSize: 14, color: "#555", lineHeight: 1.9 }}>
            「すべての子どもが自分に合った習い事に出会える社会を目指す」
          </p>
          <p style={{ fontSize: 14, color: "#666", lineHeight: 1.9, marginTop: 12 }}>
            習い事は子どもの可能性を広げる大切な機会です。しかし、数多くの教室の中からお子さまに合った教室を見つけることは容易ではありません。コドモならいごとは、保護者の方が教室選びで後悔しないよう、正確で役立つ情報を提供し続けます。
          </p>
        </div>

        {/* 掲載基準・信頼性 */}
        <div style={{ background: "#fff", borderRadius: 18, padding: "28px 24px", marginBottom: 20, border: "1.5px solid #e8edf4", boxShadow: "0 2px 12px rgba(0,0,0,.05)" }}>
          <h2 style={{ fontSize: 18, fontWeight: 900, color: "#1B2A4A", marginBottom: 16, paddingBottom: 12, borderBottom: "2px solid #FF8A0020" }}>✅ 掲載基準・信頼性について</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            {[
              { icon: "🔍", title: "正確な情報収集", desc: "各教室の公式情報をもとに掲載内容を作成しています。" },
              { icon: "🔄", title: "定期的な情報更新", desc: "料金・コース情報は随時更新しています。最新情報は各教室への直接お問い合わせを推奨します。" },
              { icon: "💬", title: "口コミの信頼性", desc: "実際に通った保護者・生徒のリアルな声を掲載しています。" },
              { icon: "🛡️", title: "中立的な情報提供", desc: "特定の教室を優遇せず、中立的な立場で情報を提供することを方針としています。" },
            ].map((item, i) => (
              <div key={i} style={{ display: "flex", gap: 14, alignItems: "flex-start" }}>
                <span style={{ fontSize: 20, flexShrink: 0 }}>{item.icon}</span>
                <div>
                  <div style={{ fontSize: 14, fontWeight: 800, color: "#1B2A4A", marginBottom: 4 }}>{item.title}</div>
                  <div style={{ fontSize: 13, color: "#666", lineHeight: 1.7 }}>{item.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 免責事項 */}
        <div style={{ background: "#f8fafd", borderRadius: 14, padding: "20px 24px", marginBottom: 28, border: "1.5px solid #e8edf4" }}>
          <h2 style={{ fontSize: 15, fontWeight: 800, color: "#1B2A4A", marginBottom: 12 }}>⚠️ 免責事項</h2>
          <p style={{ fontSize: 12, color: "#888", lineHeight: 1.9 }}>
            掲載情報は公開時点のものであり、最新情報と異なる場合があります。料金・コース内容・開講状況については、各教室へ直接ご確認ください。本サービスの利用により生じたいかなる損害についても、運営者は責任を負いかねます。
          </p>
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
