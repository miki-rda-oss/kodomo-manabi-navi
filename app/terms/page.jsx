import Link from "next/link";

export const metadata = {
  title: '利用規約｜コドモならいごと',
  description: 'コドモならいごとの利用規約です。サービスをご利用いただく前にお読みください。',
};

export default function TermsPage() {
  return (
    <div style={{ fontFamily: "'Noto Sans JP','Hiragino Sans',sans-serif", background: "#f4f7fc", minHeight: "100vh" }}>

      <header style={{ background: "#fff", borderBottom: "1px solid #e8edf4", boxShadow: "0 2px 8px rgba(0,0,0,.05)" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 24px", display: "flex", alignItems: "center", gap: 10, height: 56 }}>
          <Link href="/" style={{ display: "flex", alignItems: "center", gap: 8, textDecoration: "none" }}>
            <div style={{ width: 32, height: 32, borderRadius: 9, background: "linear-gradient(135deg, #FF8A00, #FFB347)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 16 }}>🧒</div>
            <span style={{ fontSize: 15, fontWeight: 900, color: "#1B2A4A" }}>コドモならいごと</span>
          </Link>
          <span style={{ color: "#ddd" }}>›</span>
          <span style={{ fontSize: 13, color: "#888", fontWeight: 600 }}>利用規約</span>
        </div>
      </header>

      <section style={{ background: "linear-gradient(135deg, #1B2A4A, #2a4070)", padding: "36px 24px" }}>
        <div style={{ maxWidth: 800, margin: "0 auto", textAlign: "center" }}>
          <h1 style={{ fontSize: 24, fontWeight: 900, color: "#fff" }}>利用規約</h1>
          <p style={{ fontSize: 13, color: "rgba(255,255,255,.7)", marginTop: 8 }}>最終更新日：2026年5月13日</p>
        </div>
      </section>

      <div style={{ maxWidth: 800, margin: "0 auto", padding: "44px 24px" }}>
        <div style={{ background: "#fff", borderRadius: 18, padding: "32px 28px", border: "1.5px solid #e8edf4", boxShadow: "0 2px 12px rgba(0,0,0,.05)", lineHeight: 1.9, fontSize: 14, color: "#444" }}>

          {[
            {
              title: "第1条（適用）",
              body: "本規約は、コドモならいごと（以下「当サービス」）の利用に関する条件を定めるものです。ユーザーは本規約に同意した上で当サービスをご利用ください。",
            },
            {
              title: "第2条（サービス内容）",
              body: "当サービスは、子ども向け習い事教室に関する情報の検索・比較・閲覧を提供する情報サービスです。掲載情報はあくまで参考情報であり、最新情報は各教室へ直接ご確認ください。",
            },
            {
              title: "第3条（禁止事項）",
              body: "ユーザーは以下の行為を行ってはなりません。\n・当サービスのコンテンツを無断で転載・複製する行為\n・当サービスの運営を妨害する行為\n・不正アクセスを試みる行為\n・法令または公序良俗に違反する行為",
            },
            {
              title: "第4条（免責事項）",
              body: "当サービスに掲載する情報の正確性・完全性について保証するものではありません。掲載情報を利用したことによって生じたいかなる損害についても、運営者は責任を負いかねます。また、予告なく情報を変更・削除する場合があります。",
            },
            {
              title: "第5条（知的財産権）",
              body: "当サービス上のコンテンツ（テキスト・画像・デザイン等）に関する知的財産権は、運営者または正当な権利者に帰属します。無断転載・複製・改変等はお断りします。",
            },
            {
              title: "第6条（サービスの変更・停止）",
              body: "運営者は、ユーザーへの事前通知なしに当サービスの内容変更・一時停止・終了を行うことができます。これによって生じた損害について、運営者は責任を負いません。",
            },
            {
              title: "第7条（準拠法・管轄裁判所）",
              body: "本規約の解釈にあたっては、日本法を準拠法とします。当サービスに関して紛争が生じた場合には、運営者の所在地を管轄する裁判所を専属的合意管轄とします。",
            },
            {
              title: "第8条（お問い合わせ）",
              body: "本規約に関するお問い合わせは、info@sl-i.co.jp までご連絡ください。",
            },
          ].map((section, i) => (
            <div key={i} style={{ marginBottom: 28 }}>
              <h2 style={{ fontSize: 15, fontWeight: 800, color: "#1B2A4A", marginBottom: 10, paddingLeft: 12, borderLeft: "3px solid #FF8A00" }}>{section.title}</h2>
              <p style={{ whiteSpace: "pre-line", paddingLeft: 12 }}>{section.body}</p>
            </div>
          ))}

        </div>

        <div style={{ textAlign: "center", marginTop: 32 }}>
          <Link href="/" style={{ display: "inline-flex", alignItems: "center", gap: 6, padding: "12px 28px", background: "linear-gradient(135deg, #FF8A00, #FFB347)", borderRadius: 20, color: "#fff", fontWeight: 700, fontSize: 14, textDecoration: "none", boxShadow: "0 4px 16px rgba(255,138,0,.3)" }}>
            ← トップページへ戻る
          </Link>
        </div>
      </div>
    </div>
  );
}
