import Link from "next/link";

const BASE_URL = 'https://kodomo-manabi-navi.vercel.app';
const PREF_SLUG = 'kagoshima';
const PREF_NAME = '鹿児島県';
const PREF_NAME_SHORT = '鹿児島';
const PREF_CITY = '鹿児島市';

export const metadata = {
  title: `${PREF_NAME}の子供向けダンス教室・習い事一覧｜コドモならいごと`,
  description: `${PREF_NAME}内のキッズダンス教室・子ども向け習い事を比較。${PREF_CITY}など主要エリアの教室情報を掲載。`,
  keywords: [PREF_NAME_SHORT, '子供', 'ダンス教室', '習い事', 'キッズ'],
  alternates: { canonical: `${BASE_URL}/${PREF_SLUG}` },
};

const breadcrumbSchema = {"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"トップ","item":"https://kodomo-manabi-navi.vercel.app"},{"@type":"ListItem","position":2,"name":"鹿児島県の習い事","item":"https://kodomo-manabi-navi.vercel.app/kagoshima"}]};
const faqSchema = {"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"鹿児島県内の子供ダンス教室の月謝相場は？","acceptedAnswer":{"@type":"Answer","text":"鹿児島県の子供ダンス教室は月5,000円〜8,000円程度が相場です。"}},{"@type":"Question","name":"鹿児島県で3歳から通えるダンス教室はありますか？","acceptedAnswer":{"@type":"Answer","text":"はい。鹿児島県内のダンス教室の多くが3歳から入会できるリトルクラスを設けています。"}},{"@type":"Question","name":"鹿児島県の有名なダンス教室はどこですか？","acceptedAnswer":{"@type":"Answer","text":"リディアダンスアカデミーをはじめ、鹿児島県には人気のダンス教室が多数あります。口コミ評価も高く、体験レッスンも随時受付中です。"}}]};

const blogs = [
  { href: '/blog/kids-dance-brain-development-science', text: '子供のダンスが脳発達に効果的な科学的理由' },
  { href: '/blog/kids-dance-start-age-guide-2026', text: '子供のダンスを始める年齢ガイド2026' },
];

const otherPrefs = [
  { href: '/osaka', name: '大阪府' },
  { href: '/tokyo', name: '東京都' },
  { href: '/kanagawa', name: '神奈川県' },
  { href: '/aichi', name: '愛知県' },
];

export default function PrefPage() {
  return (
    <div style={{ fontFamily: "'Noto Sans JP','Hiragino Sans',sans-serif", background: "#f4f7fc", minHeight: "100vh" }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <header style={{ background: "#fff", borderBottom: "1px solid #e8edf4", boxShadow: "0 2px 8px rgba(0,0,0,.05)", position: "sticky", top: 0, zIndex: 100 }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 24px", display: "flex", alignItems: "center", gap: 10, height: 56 }}>
          <Link href="/" style={{ display: "flex", alignItems: "center", gap: 8, textDecoration: "none" }}>
            <div style={{ width: 32, height: 32, borderRadius: 9, background: "linear-gradient(135deg, #FF8A00, #FFB347)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 16 }}>🧒</div>
            <span style={{ fontSize: 15, fontWeight: 900, color: "#1B2A4A" }}>コドモならいごと</span>
          </Link>
          <span style={{ color: "#ddd" }}>›</span>
          <span style={{ fontSize: 13, color: "#888", fontWeight: 600 }}>{PREF_NAME}</span>
        </div>
      </header>
      <nav aria-label="パンくず" style={{ maxWidth: 1100, margin: "0 auto", padding: "10px 24px" }}>
        <div style={{ fontSize: 12, color: "#888" }}>
          <Link href="/" style={{ color: "#FF8A00", textDecoration: "none" }}>トップ</Link>{" › "}<span>{PREF_NAME}</span>
        </div>
      </nav>
      <section style={{ background: "linear-gradient(135deg, #1B2A4A, #2a4070)", padding: "44px 24px 40px" }}>
        <div style={{ maxWidth: 800, margin: "0 auto", textAlign: "center" }}>
          <h1 style={{ fontSize: 28, fontWeight: 900, color: "#fff", marginBottom: 12 }}>{PREF_NAME}の子供向け<br />ダンス教室・習い事</h1>
          <p style={{ fontSize: 14, color: "rgba(255,255,255,.85)", lineHeight: 1.9 }}>{PREF_CITY}を中心に{PREF_NAME}全域の習い事情報を掲載。<br />お子さまにぴったりの教室を見つけよう。</p>
        </div>
      </section>
      <div style={{ maxWidth: 900, margin: "0 auto", padding: "32px 24px 60px" }}>
        <div style={{ background: "#fff", borderRadius: 18, padding: "28px 24px", marginBottom: 24, border: "1.5px solid #e8edf4", boxShadow: "0 2px 12px rgba(0,0,0,.05)" }}>
          <h2 style={{ fontSize: 18, fontWeight: 900, color: "#1B2A4A", marginBottom: 16 }}>📍 {PREF_NAME}のエリアを選ぶ</h2>
          <p style={{ fontSize: 14, color: "#666", lineHeight: 1.9 }}>{PREF_NAME}内の市区町村別の習い事情報を準備中です。まずはリディアダンスアカデミーの無料体験をお試しください。</p>
        </div>
        <div style={{ background: "linear-gradient(135deg, #1B2A4A, #2a4070)", borderRadius: 18, padding: "28px 24px", marginBottom: 24, textAlign: "center" }}>
          <div style={{ fontSize: 12, color: "rgba(255,255,255,.7)", marginBottom: 8 }}>おすすめNo.1ダンス教室</div>
          <h2 style={{ fontSize: 20, fontWeight: 900, color: "#fff", marginBottom: 8 }}>リディアダンスアカデミー</h2>
          <p style={{ fontSize: 13, color: "rgba(255,255,255,.85)", lineHeight: 1.8, marginBottom: 20 }}>全国100校以上展開・現役プロダンサー講師200名以上在籍。3歳から通えるリトルクラス充実。初回体験レッスン無料！</p>
          <a href="https://lydia-dance.com/" target="_blank" rel="noopener noreferrer" style={{ display: "inline-flex", alignItems: "center", gap: 6, padding: "12px 24px", background: "linear-gradient(135deg, #FF8A00, #FFB347)", borderRadius: 24, color: "#fff", fontWeight: 700, fontSize: 14, textDecoration: "none" }}>💃 無料体験を予約する</a>
        </div>
        <div style={{ background: "#fff", borderRadius: 18, padding: "28px 24px", marginBottom: 24, border: "1.5px solid #e8edf4" }}>
          <h2 style={{ fontSize: 18, fontWeight: 900, color: "#1B2A4A", marginBottom: 16 }}>📝 {PREF_NAME}の習い事コラム</h2>
          {blogs.map((b, i) => <Link key={i} href={b.href} style={{ display: "block", padding: "10px 0", borderBottom: "1px solid #f0f0f0", color: "#1B2A4A", textDecoration: "none", fontSize: 14 }}>{b.text}</Link>)}
        </div>
        <section style={{ maxWidth: 900, margin: "0 auto 40px" }}>
          <div style={{ background: "linear-gradient(135deg, #fff7ee, #fff0f5)", borderRadius: 16, padding: "24px 20px", border: "1.5px solid #FFD9A0" }}>
            <h2 style={{ fontSize: 18, fontWeight: 900, color: "#1B2A4A", marginBottom: 12 }}>🥇 {PREF_NAME}の習い事トレンド2026：ダンスが1位</h2>
            <p style={{ fontSize: 14, lineHeight: 1.9, color: "#444" }}>K-POPブームと中学校ダンス必修化の影響で、{PREF_NAME}でも子供のダンス習い事への需要が急増。2026年の習い事人気ランキングでダンスが1位を獲得しました。</p>
          </div>
        </section>
        <div style={{ background: "#fff", borderRadius: 18, padding: "28px 24px", marginBottom: 24, border: "1.5px solid #e8edf4" }}>
          <h2 style={{ fontSize: 18, fontWeight: 900, color: "#1B2A4A", marginBottom: 16 }}>🗾 他の都道府県の習い事情報</h2>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
            {otherPrefs.map((p, i) => <Link key={i} href={p.href} style={{ display: "inline-flex", alignItems: "center", gap: 4, padding: "8px 16px", background: "#fff", border: "1.5px solid #e8edf4", borderRadius: 20, textDecoration: "none", color: "#1B2A4A", fontSize: 13, fontWeight: 600 }}>{p.name}</Link>)}
          </div>
        </div>
        <div style={{ textAlign: "center" }}>
          <Link href="/" style={{ display: "inline-flex", alignItems: "center", gap: 6, padding: "12px 28px", background: "linear-gradient(135deg, #FF8A00, #FFB347)", borderRadius: 20, color: "#fff", fontWeight: 700, fontSize: 14, textDecoration: "none" }}>← トップページへ戻る</Link>
        </div>
      </div>
    </div>
  );
}
