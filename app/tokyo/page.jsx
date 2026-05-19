import Link from "next/link";

export const metadata = {
  title: '東京都の子供向けダンス教室・習い事一覧｜コドモならいごと',
  description: '東京都内のキッズダンス教室・子ども向け習い事を区市別に比較。世田谷・目黒・江戸川など各エリアの教室情報を掲載。',
  keywords: ['東京', '子供', 'ダンス教室', '習い事', 'キッズ', '東京都', '比較'],
  alternates: {
    canonical: 'https://www.kodomo-navi.com/tokyo',
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "トップ", "item": "https://www.kodomo-navi.com" },
    { "@type": "ListItem", "position": 2, "name": "東京都の習い事", "item": "https://www.kodomo-navi.com/tokyo" },
  ],
};

const collectionSchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "name": "東京都の子供向け習い事・ダンス教室一覧",
  "url": "https://www.kodomo-navi.com/tokyo",
  "description": "東京都内のキッズダンス教室・子ども向け習い事を区市別に比較。世田谷・目黒・江戸川など各エリアの教室情報を掲載。",
  "breadcrumb": {
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "トップ", "item": "https://www.kodomo-navi.com" },
      { "@type": "ListItem", "position": 2, "name": "東京都の習い事", "item": "https://www.kodomo-navi.com/tokyo" },
    ],
  },
};

const areas = [
  { slug: 'chofu', name: '調布市' },
  { slug: 'edogawa', name: '江戸川区' },
  { slug: 'kita', name: '北区' },
  { slug: 'machida', name: '町田市' },
  { slug: 'meguro', name: '目黒区' },
  { slug: 'minato', name: '港区' },
  { slug: 'setagaya', name: '世田谷区' },
  { slug: 'shinagawa', name: '品川区' },
];

const faqs = [
  { q: '東京都内の子供ダンス教室の月謝相場は？', a: '東京都の子供ダンス教室は月6,000円〜10,000円程度が相場です。都内は全国的に見ても教室数が多く、料金・スタイルも多様です。' },
  { q: '東京で3歳から通えるダンス教室はありますか？', a: 'はい。リディアダンスアカデミーをはじめ多くの教室が3歳から対応しています。都内は駅近教室が多く、通いやすいのも特徴です。' },
  { q: '東京都内の人気ダンス教室はどこですか？', a: 'リディアダンスアカデミー（東京都内複数校展開）のほか、EYS-KIDSダンスアカデミー、タンスアレ等が人気です。口コミ・体験情報をあわせてご確認ください。' },
  { q: '東京の区部と市部でおすすめエリアは違いますか？', a: '区部は世田谷・目黒・品川・江戸川・北区など、多摩地区は調布・町田が人気です。駅アクセスや送迎のしやすさでエリアを絞るのがおすすめです。' },
];

const blogs = [
  { href: '/blog/tokyo-kids-dance-school-ranking', text: '東京で子供のダンス教室おすすめ10選【2026年版】' },
  { href: '/blog/kids-dance-school-trial-guide', text: '子供のダンス教室の選び方｜体験レッスンの活用法' },
  { href: '/blog/dance-cost-breakdown', text: 'ダンス教室の月謝・費用を徹底解説【相場と節約法】' },
];

const otherPrefs = [
  { href: '/osaka', name: '大阪府' },
  { href: '/kanagawa', name: '神奈川県' },
  { href: '/saitama', name: '埼玉県' },
  { href: '/chiba', name: '千葉県' },
];

const faqSchema = {"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"東京都内の子供ダンス教室の月謝相場は？","acceptedAnswer":{"@type":"Answer","text":"東京都の子供ダンス教室は月6,000円〜10,000円程度が相場です。都内は全国的に見ても教室数が多く、料金・スタイルも多様です。"}},{"@type":"Question","name":"東京で3歳から通えるダンス教室はありますか？","acceptedAnswer":{"@type":"Answer","text":"はい。リディアダンスアカデミーをはじめ多くの教室が3歳から対応しています。都内は駅近教室が多く、通いやすいのも特徴です。"}},{"@type":"Question","name":"東京都内の人気ダンス教室はどこですか？","acceptedAnswer":{"@type":"Answer","text":"リディアダンスアカデミー（東京都内複数校展開）のほか、EYS-KIDSダンスアカデミー、タンスアレ等が人気です。口コミ・体験情報をあわせてご確認ください。"}},{"@type":"Question","name":"東京の区部と市部でおすすめエリアは違いますか？","acceptedAnswer":{"@type":"Answer","text":"区部は世田谷・目黒・品川・江戸川・北区など、多摩地区は調布・町田が人気です。駅アクセスや送迎のしやすさでエリアを絞るのがおすすめです。"}}]};

export default function TokyoPrefPage() {
  return (
    <div style={{ fontFamily: "'Noto Sans JP','Hiragino Sans',sans-serif", background: "#f4f7fc", minHeight: "100vh" }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Header */}
      <header style={{ background: "#fff", borderBottom: "1px solid #e8edf4", boxShadow: "0 2px 8px rgba(0,0,0,.05)", position: "sticky", top: 0, zIndex: 100 }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 24px", display: "flex", alignItems: "center", gap: 10, height: 56 }}>
          <Link href="/" style={{ display: "flex", alignItems: "center", gap: 8, textDecoration: "none" }}>
            <div style={{ width: 32, height: 32, borderRadius: 9, background: "linear-gradient(135deg, #FF8A00, #FFB347)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 16 }}>🧒</div>
            <span style={{ fontSize: 15, fontWeight: 900, color: "#1B2A4A" }}>コドモならいごと</span>
          </Link>
          <span style={{ color: "#ddd" }}>›</span>
          <span style={{ fontSize: 13, color: "#888", fontWeight: 600 }}>東京都</span>
        </div>
      </header>

      {/* Breadcrumb */}
      <nav aria-label="パンくず" style={{ maxWidth: 1100, margin: "0 auto", padding: "10px 24px" }}>
        <div style={{ fontSize: 12, color: "#888" }}>
          <Link href="/" style={{ color: "#FF8A00", textDecoration: "none" }}>トップ</Link>
          {" › "}
          <span style={{ color: "#666" }}>東京都</span>
        </div>
      </nav>

      {/* Hero */}
      <section style={{ background: "linear-gradient(135deg, #1B2A4A, #2a4070)", padding: "44px 24px 40px" }}>
        <div style={{ maxWidth: 800, margin: "0 auto", textAlign: "center" }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 6, background: "rgba(255,255,255,.15)", borderRadius: 20, padding: "4px 14px", marginBottom: 14, fontSize: 12, color: "#fff", fontWeight: 700 }}>
            東京都 エリア情報
          </div>
          <h1 style={{ fontSize: 28, fontWeight: 900, color: "#fff", marginBottom: 12 }}>東京都の子供向け<br />ダンス教室・習い事</h1>
          <p style={{ fontSize: 14, color: "rgba(255,255,255,.85)", lineHeight: 1.9 }}>
            首都・東京でお子さまの習い事を地域別に探そう<br />
            区・市を選んで、お近くの教室情報をチェックしよう。
          </p>
        </div>
      </section>

      <div style={{ maxWidth: 900, margin: "0 auto", padding: "32px 24px 60px" }}>

        {/* エリア一覧 */}
        <div style={{ background: "#fff", borderRadius: 18, padding: "28px 24px", marginBottom: 24, border: "1.5px solid #e8edf4", boxShadow: "0 2px 12px rgba(0,0,0,.05)" }}>
          <h2 style={{ fontSize: 18, fontWeight: 900, color: "#1B2A4A", marginBottom: 18, paddingBottom: 12, borderBottom: "2px solid #FF8A0020" }}>
            📍 東京都のエリアを選ぶ
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))", gap: 12 }}>
            {areas.map((area) => (
              <Link key={area.slug} href={`/tokyo/${area.slug}`} style={{ display: "block", background: "#fff", border: "1.5px solid #e8edf4", borderRadius: 12, padding: "16px 18px", textDecoration: "none", color: "#1B2A4A", fontWeight: 700, fontSize: 15, boxShadow: "0 2px 8px rgba(0,0,0,.04)" }}>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                  <span>📍 {area.name}</span>
                  <span style={{ color: "#FF8A00", fontSize: 18 }}>›</span>
                </div>
                <div style={{ fontSize: 12, color: "#888", marginTop: 4, fontWeight: 400 }}>ダンス教室・習い事を見る</div>
              </Link>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div style={{ background: "linear-gradient(135deg, #1B2A4A, #2a4070)", borderRadius: 18, padding: "28px 24px", marginBottom: 24, textAlign: "center" }}>
          <div style={{ fontSize: 12, color: "rgba(255,255,255,.7)", marginBottom: 8 }}>おすすめNo.1ダンス教室</div>
          <h2 style={{ fontSize: 20, fontWeight: 900, color: "#fff", marginBottom: 8 }}>リディアダンスアカデミー</h2>
          <p style={{ fontSize: 13, color: "rgba(255,255,255,.85)", lineHeight: 1.8, marginBottom: 20 }}>
            全国100校以上展開・現役プロダンサー講師200名以上在籍。<br />
            3歳から通えるリトルクラスから小学生向けキッズクラスまで充実。<br />
            初回体験レッスン無料！
          </p>
          <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
            <a href="https://lydia-dance.com/" target="_blank" rel="noopener noreferrer" style={{ display: "inline-flex", alignItems: "center", gap: 6, padding: "12px 24px", background: "linear-gradient(135deg, #FF8A00, #FFB347)", borderRadius: 24, color: "#fff", fontWeight: 700, fontSize: 14, textDecoration: "none", boxShadow: "0 4px 16px rgba(255,138,0,.4)" }}>
              💃 無料体験を予約する
            </a>
            <a href="https://lydia-dance.com/" target="_blank" rel="noopener noreferrer" style={{ display: "inline-flex", alignItems: "center", gap: 6, padding: "12px 24px", background: "rgba(255,255,255,.15)", borderRadius: 24, color: "#fff", fontWeight: 700, fontSize: 14, textDecoration: "none", border: "1.5px solid rgba(255,255,255,.3)" }}>
              🏫 校舎・コース一覧
            </a>
          </div>
          <div style={{ marginTop: 16, display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
            {["⭐ 口コミ評価4.8", "👶 3歳〜OK", "💰 月5,500円〜", "🎯 初回無料体験"].map((badge, i) => (
              <span key={i} style={{ fontSize: 12, color: "rgba(255,255,255,.8)", fontWeight: 600 }}>{badge}</span>
            ))}
          </div>
        </div>

        {/* FAQ */}
        <div style={{ background: "#fff", borderRadius: 18, padding: "28px 24px", marginBottom: 24, border: "1.5px solid #e8edf4", boxShadow: "0 2px 12px rgba(0,0,0,.05)" }}>
          <h2 style={{ fontSize: 18, fontWeight: 900, color: "#1B2A4A", marginBottom: 18, paddingBottom: 12, borderBottom: "2px solid #FF8A0020" }}>
            ❓ よくある質問（東京の習い事）
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            {faqs.map((faq, i) => (
              <div key={i} style={{ background: "#f8f9fb", borderRadius: 14, padding: "20px 22px", border: "1.5px solid #e8edf4" }}>
                <div style={{ fontSize: 15, fontWeight: 800, color: "#1B2A4A", marginBottom: 10 }}>Q. {faq.q}</div>
                <div style={{ fontSize: 14, color: "#555", lineHeight: 1.8 }}>A. {faq.a}</div>
              </div>
            ))}
          </div>
        </div>

        {/* 関連ブログ */}
        <div style={{ background: "#fff", borderRadius: 18, padding: "28px 24px", marginBottom: 24, border: "1.5px solid #e8edf4", boxShadow: "0 2px 12px rgba(0,0,0,.05)" }}>
          <h2 style={{ fontSize: 18, fontWeight: 900, color: "#1B2A4A", marginBottom: 16, paddingBottom: 12, borderBottom: "2px solid #FF8A0020" }}>
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

        {/* 他エリアへのリンク */}
        <div style={{ background: "#fff", borderRadius: 18, padding: "28px 24px", marginBottom: 24, border: "1.5px solid #e8edf4", boxShadow: "0 2px 12px rgba(0,0,0,.05)" }}>
          <h2 style={{ fontSize: 18, fontWeight: 900, color: "#1B2A4A", marginBottom: 16, paddingBottom: 12, borderBottom: "2px solid #FF8A0020" }}>
            🗾 他の都道府県の習い事情報
          </h2>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
            {otherPrefs.map((pref, i) => (
              <Link key={i} href={pref.href} style={{ display: "inline-flex", alignItems: "center", gap: 4, padding: "8px 16px", background: "#fff", border: "1.5px solid #e8edf4", borderRadius: 20, textDecoration: "none", color: "#1B2A4A", fontSize: 13, fontWeight: 600 }}>
                {pref.name}
              </Link>
            ))}
          </div>
        </div>

        {/* ===== 地域ダンストレンド ===== */}
        <section style={{ maxWidth: 900, margin: "0 auto 40px", padding: "0 0px" }}>
          <div style={{ background: "linear-gradient(135deg, #fff7ee, #fff0f5)", borderRadius: 16, padding: "24px 20px", border: "1.5px solid #FFD9A0" }}>
            <h2 style={{ fontSize: 18, fontWeight: 900, color: "#1B2A4A", marginBottom: 12 }}>
              🥇 東京の習い事トレンド2026：ダンスが1位
            </h2>
            <p style={{ fontSize: 14, lineHeight: 1.9, color: "#444", marginBottom: 16 }}>
              東京・関東でK-POPダンス需要急増。K-POPブームと中学校ダンス必修化の影響で、東京でも子供のダンス習い事への需要が急増しています。
              2026年の習い事人気ランキングでダンスが1位を獲得し、スイミングや英語を上回る勢いです。
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
              {[
                { slug: "tokyo-kids-dance-2026-complete", title: "東京キッズダンス2026年完全ガイド" },
                { slug: "tokyo-kids-dance-school-ranking", title: "東京おすすめダンス教室ランキング" },
              ].map(({ slug, title }) => (
                <a key={slug} href={`/blog/${slug}`}
                  style={{ fontSize: 12, color: "#4527A0", background: "#f3f0ff", padding: "4px 10px", borderRadius: 12, textDecoration: "none", fontWeight: 600 }}>
                  📝 {title}
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* ジャンル別に探す */}
        <section style={{ background: '#fff', borderRadius: 16, padding: '24px 20px', border: '1.5px solid #e8edf4', marginTop: 32 }}>
          <div style={{ fontSize: 11, fontWeight: 700, color: '#FF8A00', marginBottom: 8, letterSpacing: '.5px' }}>GENRE</div>
          <h2 style={{ fontSize: 16, fontWeight: 900, color: '#1B2A4A', marginBottom: 14 }}>ジャンル別に探す</h2>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
            {[
              ['/soccer/tokyo', '⚽', 'サッカー'],
              ['/piano/tokyo', '🎹', 'ピアノ'],
              ['/swimming/tokyo', '🏊', 'スイミング'],
              ['/english/tokyo', '🌍', '英語'],
              ['/ballet/tokyo', '🩰', 'バレエ'],
              ['/gymnastics/tokyo', '🤸', '体操'],
              ['/basketball/tokyo', '🏀', 'バスケット'],
              ['/preschool/tokyo', '🧒', '幼児教室'],
              ['/soroban/tokyo', '🧮', 'そろばん'],
              ['/programming/tokyo', '💻', 'プログラミング'],
              ['/rhythmics/tokyo', '🎵', 'リトミック'],
              ['/music/tokyo', '🎸', '音楽'],
              ['/karate/tokyo', '🥋', '空手'],
            ].map(([href, emoji, label]) => (
              <Link key={href} href={href} style={{ display: 'inline-flex', alignItems: 'center', gap: 4, padding: '7px 14px', background: '#f8f9fb', border: '1.5px solid #e8edf4', borderRadius: 20, textDecoration: 'none', color: '#1B2A4A', fontSize: 12, fontWeight: 600 }}>
                {emoji} {label}
              </Link>
            ))}
          </div>
        </section>

        <div style={{ textAlign: "center" }}>
          <Link href="/" style={{ display: "inline-flex", alignItems: "center", gap: 6, padding: "12px 28px", background: "linear-gradient(135deg, #FF8A00, #FFB347)", borderRadius: 20, color: "#fff", fontWeight: 700, fontSize: 14, textDecoration: "none", boxShadow: "0 4px 16px rgba(255,138,0,.3)" }}>
            ← トップページへ戻る
          </Link>
        </div>
      </div>
    </div>
  );
}
