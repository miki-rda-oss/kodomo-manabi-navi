import Link from "next/link";

const BASE_URL = "https://www.kodomo-navi.com";

export const metadata = {
  title: "掲載をご希望のスクール様へ｜コドモならいごと",
  description: "子どもの習い事情報サイト「コドモならいごと」への教室掲載のご案内。基本掲載は無料。月間の閲覧・送客レポート付き優先掲載プランも準備中です。",
  alternates: { canonical: `${BASE_URL}/for-schools` },
};

const sectionCard = { background: "#fff", borderRadius: 18, padding: "28px 24px", marginBottom: 20, border: "1.5px solid #e8edf4", boxShadow: "0 2px 12px rgba(0,0,0,.05)" };
const h2Style = { fontSize: 18, fontWeight: 900, color: "#1B2A4A", marginBottom: 14, paddingBottom: 12, borderBottom: "2px solid #FF8A0020" };

export default function ForSchoolsPage() {
  return (
    <div style={{ fontFamily: "'Noto Sans JP','Hiragino Sans',sans-serif", background: "#f4f7fc", minHeight: "100vh" }}>
      {/* Header */}
      <header style={{ background: "#fff", borderBottom: "1px solid #e8edf4", boxShadow: "0 2px 8px rgba(0,0,0,.05)", position: "sticky", top: 0, zIndex: 100 }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 24px", display: "flex", alignItems: "center", gap: 10, height: 56 }}>
          <Link href="/" style={{ display: "flex", alignItems: "center", gap: 8, textDecoration: "none" }}>
            <div style={{ width: 32, height: 32, borderRadius: 9, background: "linear-gradient(135deg, #FF8A00, #FFB347)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 16 }}>🧒</div>
            <span style={{ fontSize: 15, fontWeight: 900, color: "#1B2A4A" }}>コドモならいごと</span>
          </Link>
        </div>
      </header>

      {/* Hero */}
      <section style={{ background: "linear-gradient(135deg, #1B2A4A, #2c4373)", padding: "44px 24px 40px" }}>
        <div style={{ maxWidth: 760, margin: "0 auto", textAlign: "center" }}>
          <h1 style={{ fontSize: 26, fontWeight: 900, color: "#fff", marginBottom: 12, lineHeight: 1.5 }}>
            掲載をご希望のスクール様へ
          </h1>
          <p style={{ fontSize: 14, color: "rgba(255,255,255,.88)", lineHeight: 1.9 }}>
            コドモならいごとは、全国の保護者の方が子どもの習い事を探す情報サイトです。<br />
            お子さん向けの教室・スクールを運営されている事業者様の掲載を受け付けています。
          </p>
        </div>
      </section>

      <div style={{ maxWidth: 760, margin: "0 auto", padding: "32px 24px 60px" }}>
        {/* 無料掲載 */}
        <div style={sectionCard}>
          <h2 style={h2Style}>🆓 基本掲載（無料）</h2>
          <p style={{ fontSize: 14, color: "#555", lineHeight: 1.9, marginBottom: 14 }}>
            エリアページ・ジャンルページへの基本情報（教室名・対象年齢・月謝目安・特徴）の掲載は無料です。
            掲載中の情報の修正・削除のご依頼も無料で承ります。
          </p>
          <ul style={{ fontSize: 13.5, color: "#555", lineHeight: 2.0, paddingLeft: 20, margin: 0 }}>
            <li>掲載対象：3歳〜中学生向けの習い事教室・スクール</li>
            <li>掲載内容は編集部で確認のうえ反映します（反映まで1〜2週間）</li>
            <li>情報の正確性確保のため、公式サイト等の確認をさせていただきます</li>
          </ul>
        </div>

        {/* 優先掲載プラン */}
        <div style={{ ...sectionCard, border: "2px solid #FF8A0044", background: "linear-gradient(135deg, #FFFDF8, #FFF8EE)" }}>
          <h2 style={h2Style}>⭐ 優先掲載プラン（準備中）</h2>
          <p style={{ fontSize: 14, color: "#555", lineHeight: 1.9, marginBottom: 14 }}>
            エリアページでの優先表示・紹介枠の拡大・体験申込リンクの設置に対応した有料プランを準備しています。
          </p>
          <div style={{ background: "#fff", borderRadius: 12, padding: "16px 18px", border: "1.5px solid #e8edf4", marginBottom: 14 }}>
            <div style={{ fontSize: 13, fontWeight: 800, color: "#1B2A4A", marginBottom: 8 }}>📊 月間実績レポート付き</div>
            <p style={{ fontSize: 13, color: "#555", lineHeight: 1.9, margin: 0 }}>
              掲載ページの閲覧状況・貴スクールへのリンククリック数（送客数）を毎月レポートでお届けします。
              「掲載して終わり」ではなく、効果が数字で見える掲載です。
            </p>
          </div>
          <p style={{ fontSize: 12.5, color: "#888", lineHeight: 1.8, margin: 0 }}>
            ※優先掲載・広告掲載の枠には「PR」表記を行います。料金・開始時期はお問い合わせください。
          </p>
        </div>

        {/* 問い合わせ */}
        <div style={sectionCard}>
          <h2 style={h2Style}>✉️ お問い合わせ</h2>
          <p style={{ fontSize: 14, color: "#555", lineHeight: 1.9, marginBottom: 16 }}>
            掲載のお申し込み・掲載情報の修正・優先掲載プランのご相談は、メールで受け付けています。
            教室名・所在地・公式サイトURL・ご担当者名を添えてご連絡ください。
          </p>
          <a href="mailto:info@sl-i.co.jp?subject=%E3%82%B3%E3%83%89%E3%83%A2%E3%81%AA%E3%82%89%E3%81%84%E3%81%94%E3%81%A8%20%E6%8E%B2%E8%BC%89%E5%95%8F%E3%81%84%E5%90%88%E3%82%8F%E3%81%9B"
            style={{ display: "block", textAlign: "center", background: "#1B2A4A", color: "#fff", padding: "14px", borderRadius: 10, fontWeight: 800, fontSize: 15, textDecoration: "none" }}>
            メールで問い合わせる
          </a>
          <p style={{ fontSize: 12, color: "#999", marginTop: 10, textAlign: "center" }}>info@sl-i.co.jp（平日3営業日以内に返信します）</p>
        </div>

        <div style={{ textAlign: "center" }}>
          <Link href="/about" style={{ fontSize: 13, color: "#888" }}>サービスについて・編集方針はこちら →</Link>
        </div>
      </div>
    </div>
  );
}
