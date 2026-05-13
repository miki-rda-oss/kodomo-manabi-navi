import Link from "next/link";

export const metadata = {
  title: 'プライバシーポリシー｜コドモならいごと',
  description: 'コドモならいごとのプライバシーポリシーです。個人情報の取り扱いについてご確認ください。',
};

export default function PrivacyPage() {
  return (
    <div style={{ fontFamily: "'Noto Sans JP','Hiragino Sans',sans-serif", background: "#f4f7fc", minHeight: "100vh" }}>

      <header style={{ background: "#fff", borderBottom: "1px solid #e8edf4", boxShadow: "0 2px 8px rgba(0,0,0,.05)" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 24px", display: "flex", alignItems: "center", gap: 10, height: 56 }}>
          <Link href="/" style={{ display: "flex", alignItems: "center", gap: 8, textDecoration: "none" }}>
            <div style={{ width: 32, height: 32, borderRadius: 9, background: "linear-gradient(135deg, #FF8A00, #FFB347)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 16 }}>🧒</div>
            <span style={{ fontSize: 15, fontWeight: 900, color: "#1B2A4A" }}>コドモならいごと</span>
          </Link>
          <span style={{ color: "#ddd" }}>›</span>
          <span style={{ fontSize: 13, color: "#888", fontWeight: 600 }}>プライバシーポリシー</span>
        </div>
      </header>

      <section style={{ background: "linear-gradient(135deg, #1B2A4A, #2a4070)", padding: "36px 24px" }}>
        <div style={{ maxWidth: 800, margin: "0 auto", textAlign: "center" }}>
          <h1 style={{ fontSize: 24, fontWeight: 900, color: "#fff" }}>プライバシーポリシー</h1>
          <p style={{ fontSize: 13, color: "rgba(255,255,255,.7)", marginTop: 8 }}>最終更新日：2026年5月13日</p>
        </div>
      </section>

      <div style={{ maxWidth: 800, margin: "0 auto", padding: "44px 24px" }}>
        <div style={{ background: "#fff", borderRadius: 18, padding: "32px 28px", border: "1.5px solid #e8edf4", boxShadow: "0 2px 12px rgba(0,0,0,.05)", lineHeight: 1.9, fontSize: 14, color: "#444" }}>

          <p style={{ marginBottom: 28, paddingBottom: 20, borderBottom: "1px solid #f0f4f8" }}>
            コドモならいごと（以下「当サービス」）は、ユーザーの個人情報の保護を重要と考え、以下のとおりプライバシーポリシーを定めます。
          </p>

          {[
            {
              title: "第1条（収集する情報）",
              body: "当サービスでは、以下の情報を収集する場合があります。\n・お問い合わせ時にご入力いただいた氏名・メールアドレス等\n・アクセスログ（IPアドレス・ブラウザ種別・アクセス日時等）\n・Cookieを通じた利用状況に関する情報",
            },
            {
              title: "第2条（情報の利用目的）",
              body: "収集した情報は、以下の目的のために使用します。\n・お問い合わせへの返答\n・サービスの改善・新機能開発\n・利用状況の分析（Google Analytics等のアクセス解析ツール利用）\n・不正利用の防止",
            },
            {
              title: "第3条（第三者提供）",
              body: "当サービスは、以下の場合を除き、収集した個人情報を第三者に提供しません。\n・ユーザーの同意がある場合\n・法令に基づく場合\n・人の生命・身体・財産の保護のために必要な場合",
            },
            {
              title: "第4条（Cookieの使用）",
              body: "当サービスは、利用状況の分析・サービス向上のためCookieを使用しています。ブラウザの設定によりCookieを無効にすることも可能ですが、一部機能が利用できなくなる場合があります。",
            },
            {
              title: "第5条（Google Analyticsについて）",
              body: "当サービスは、Googleが提供するアクセス解析ツール「Google Analytics」を使用しています。Google Analyticsはトラフィックデータ収集のためにCookieを使用します。このトラフィックデータは匿名で収集されており、個人を特定するものではありません。",
            },
            {
              title: "第6条（個人情報の管理）",
              body: "当サービスは、収集した個人情報の漏洩・紛失・改ざん等を防ぐため、適切な安全管理措置を講じます。",
            },
            {
              title: "第7条（個人情報の開示・訂正・削除）",
              body: "ユーザーは、当サービスが保有する自己の個人情報について、開示・訂正・削除を請求することができます。ご希望の場合は info@sl-i.co.jp までご連絡ください。",
            },
            {
              title: "第8条（プライバシーポリシーの変更）",
              body: "当サービスは、必要に応じて本ポリシーを変更することがあります。変更後のポリシーは本ページに掲載した時点より効力を生じます。",
            },
            {
              title: "第9条（お問い合わせ）",
              body: "本ポリシーに関するお問い合わせは、info@sl-i.co.jp までご連絡ください。",
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
