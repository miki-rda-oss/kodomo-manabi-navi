import Link from "next/link";

export const metadata = {
  title: '兵庫県の子供向けダンス教室・習い事一覧｜コドモならいごと',
  description: '兵庫県内のキッズダンス教室・子ども向け習い事を市別に比較。西宮市など阪神エリアの教室情報を掲載。',
  keywords: ['兵庫', '子供', 'ダンス教室', '習い事', 'キッズ', '兵庫県', '神戸', '比較'],
  alternates: {
    canonical: 'https://kodomo-manabi-navi.vercel.app/hyogo',
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "トップ", "item": "https://kodomo-manabi-navi.vercel.app" },
    { "@type": "ListItem", "position": 2, "name": "兵庫県の習い事", "item": "https://kodomo-manabi-navi.vercel.app/hyogo" },
  ],
};

const collectionSchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "name": "兵庫県の子供向け習い事・ダンス教室一覧",
  "url": "https://kodomo-manabi-navi.vercel.app/hyogo",
  "description": "兵庫県内のキッズダンス教室・子ども向け習い事を市別に比較。西宮市など阪神エリアの教室情報を掲載。",
  "breadcrumb": {
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "トップ", "item": "https://kodomo-manabi-navi.vercel.app" },
      { "@type": "ListItem", "position": 2, "name": "兵庫県の習い事", "item": "https://kodomo-manabi-navi.vercel.app/hyogo" },
    ],
  },
};

const areas = [
  { slug: 'nishinomiya', name: '西宮市' },
];

const faqs = [
  { q: '兵庫県内の子供ダンス教室の月謝相場は？', a: '兵庫県の子供ダンス教室は月5,000円〜8,000円程度が相場です。阪神エリアは大阪にも近く、教室の選択肢が豊富です。' },
  { q: '西宮市でおすすめの子供ダンス教室は？', a: '西宮市はリディアダンスアカデミーが展開しています。阪急・阪神沿線の駅近に教室が多く通いやすいのが特徴です。' },
  { q: '兵庫県でダンス以外の習い事情報はありますか？', a: 'はい。スイミング・英語・ピアノ・サッカーなど幅広い習い事情報を兵庫各エリアで掲載しています。' },
  { q: '神戸市内の習い事情報はいつ掲載予定ですか？', a: '神戸市エリアの情報は順次追加予定です。現在は西宮市エリアの情報を掲載中です。情報追加をお待ちください。' },
];

const blogs = [
  { href: '/blog/hyogo-kids-dance-school-ranking', text: '兵庫・西宮で子供のダンス教室おすすめランキング【2026年版】' },
  { href: '/blog/kids-dance-school-trial-guide', text: '子供のダンス教室の選び方｜体験レッスンの活用法' },
  { href: '/blog/dance-cost-breakdown', text: 'ダンス教室の月謝・費用を徹底解説【相場と節約法】' },
];

const otherPrefs = [
  { href: '/osaka', name: '大阪府' },
  { href: '/kyoto', name: '京都府' },
  { href: '/wakayama', name: '和歌山県' },
  { href: '/shiga', name: '滋賀県' },
];

const faqSchema = {"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"兵庫県内の子供ダンス教室の月謝相場は？","acceptedAnswer":{"@type":"Answer","text":"兵庫県の子供ダンス教室は月5,000円〜8,000円程度が相場です。阪神エリアは大阪にも近く、教室の選択肢が豊富です。"}},{"@type":"Question","name":"西宮市でおすすめの子供ダンス教室は？","acceptedAnswer":{"@type":"Answer","text":"西宮市はリディアダンスアカデミーが展開しています。阪急・阪神沿線の駅近に教室が多く通いやすいのが特徴です。"}},{"@type":"Question","name":"兵庫県でダンス以外の習い事情報はありますか？","acceptedAnswer":{"@type":"Answer","text":"はい。スイミング・英語・ピアノ・サッカーなど幅広い習い事情報を兵庫各エリアで掲載しています。"}},{"@type":"Question","name":"神戸市内の習い事情報はいつ掲載予定ですか？","acceptedAnswer":{"@type":"Answer","text":"神戸市エリアの情報は順次追加予定です。現在は西宮市エリアの情報を掲載中です。情報追加をお待ちください。"}}]};

export default function HyogoPrefPage() {
  return (
    <div style={{ fontFamily: "'Noto Sans JP','Hiragino Sans',sans-serif", background: "#f4f7fc", minHeight: "100vh" }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <header style={{ background: "#fff", borderBottom: "1px solid #e8edf4", boxShadow: "0 2px 8px rgba(0,0,0,.05)", position: "sticky", top: 0, zIndex: 100 }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 24px", display: "flex", alignItems: "center", gap: 10, height: 56 }}>
          <Link href="/" style={{ display: "flex", alignItems: "center", gap: 8, textDecoration: "none" }}>
            <div style={{ width: 32, height: 32, borderRadius: 9, background: "linear-gradient(135deg, #FF8A00, #FFB347)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 16 }}>🧒</div>
            <span style={{ fontSize: 15, fontWeight: 900, color: "#1B2A4A" }}>コドモならいごと</span>
          </Link>
          <span style={{ color: "#ddd" }}>›</span>
          <span style={{ fontSize: 13, color: "#888", fontWeight: 600 }}>兵庫県</span>
        </div>
      </header>

      <nav aria-label="パンくず" style={{ maxWidth: 1100, margin: "0 auto", padding: "10px 24px" }}>
        <div style={{ fontSize: 12, color: "#888" }}>
          <Link href="/" style={{ color: "#FF8A00", textDecoration: "none" }}>トップ</Link>
          {" › "}
          <span style={{ color: "#666" }}>兵庫県</span>
        </div>
      </nav>

      <section style={{ background: "linear-gradient(135deg, #1B2A4A, #2a4070)", padding: "44px 24px 40px" }}>
        <div style={{ maxWidth: 800, margin: "0 auto", textAlign: "center" }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 6, background: "rgba(255,255,255,.15)", borderRadius: 20, padding: "4px 14px", marginBottom: 14, fontSize: 12, color: "#fff", fontWeight: 700 }}>
            兵庫県 エリア情報
          </div>
          <h1 style={{ fontSize: 28, fontWeight: 900, color: "#fff", marginBottom: 12 }}>兵庫県の子供向け<br />ダンス教室・習い事</h1>
          <p style={{ fontSize: 14, color: "rgba(255,255,255,.85)", lineHeight: 1.9 }}>
            神戸・阪神エリアを含む兵庫でお子さまの習い事を探そう<br />
            市を選んで、お近くの教室情報をチェックしよう。
          </p>
        </div>
      </section>

      <div style={{ maxWidth: 900, margin: "0 auto", padding: "32px 24px 60px" }}>
        <div style={{ background: "#fff", borderRadius: 18, padding: "28px 24px", marginBottom: 24, border: "1.5px solid #e8edf4", boxShadow: "0 2px 12px rgba(0,0,0,.05)" }}>
          <h2 style={{ fontSize: 18, fontWeight: 900, color: "#1B2A4A", marginBottom: 18, paddingBottom: 12, borderBottom: "2px solid #FF8A0020" }}>📍 兵庫県のエリアを選ぶ</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))", gap: 12 }}>
            {areas.map((area) => (
              <Link key={area.slug} href={`/hyogo/${area.slug}`} style={{ display: "block", background: "#fff", border: "1.5px solid #e8edf4", borderRadius: 12, padding: "16px 18px", textDecoration: "none", color: "#1B2A4A", fontWeight: 700, fontSize: 15, boxShadow: "0 2px 8px rgba(0,0,0,.04)" }}>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                  <span>📍 {area.name}</span>
                  <span style={{ color: "#FF8A00", fontSize: 18 }}>›</span>
                </div>
                <div style={{ fontSize: 12, color: "#888", marginTop: 4, fontWeight: 400 }}>ダンス教室・習い事を見る</div>
              </Link>
            ))}
          </div>
        </div>

        <div style={{ background: "linear-gradient(135deg, #1B2A4A, #2a4070)", borderRadius: 18, padding: "28px 24px", marginBottom: 24, textAlign: "center" }}>
          <div style={{ fontSize: 12, color: "rgba(255,255,255,.7)", marginBottom: 8 }}>おすすめNo.1ダンス教室</div>
          <h2 style={{ fontSize: 20, fontWeight: 900, color: "#fff", marginBottom: 8 }}>リディアダンスアカデミー</h2>
          <p style={{ fontSize: 13, color: "rgba(255,255,255,.85)", lineHeight: 1.8, marginBottom: 20 }}>全国46校展開・現役プロダンサー講師100名以上在籍。3歳から通えるリトルクラスから小学生向けキッズクラスまで充実。初回体験レッスン無料！</p>
          <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
            <a href="https://lydia-dance.com/" target="_blank" rel="noopener noreferrer" style={{ display: "inline-flex", alignItems: "center", gap: 6, padding: "12px 24px", background: "linear-gradient(135deg, #FF8A00, #FFB347)", borderRadius: 24, color: "#fff", fontWeight: 700, fontSize: 14, textDecoration: "none", boxShadow: "0 4px 16px rgba(255,138,0,.4)" }}>💃 無料体験を予約する</a>
            <a href="https://lydia-dance.com/" target="_blank" rel="noopener noreferrer" style={{ display: "inline-flex", alignItems: "center", gap: 6, padding: "12px 24px", background: "rgba(255,255,255,.15)", borderRadius: 24, color: "#fff", fontWeight: 700, fontSize: 14, textDecoration: "none", border: "1.5px solid rgba(255,255,255,.3)" }}>🏫 校舎・コース一覧</a>
          </div>
          <div style={{ marginTop: 16, display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
            {["⭐ 口コミ評価4.8", "👶 3歳〜OK", "💰 月5,500円〜", "🎯 初回無料体験"].map((badge, i) => (
              <span key={i} style={{ fontSize: 12, color: "rgba(255,255,255,.8)", fontWeight: 600 }}>{badge}</span>
            ))}
          </div>
        </div>

        <div style={{ background: "#fff", borderRadius: 18, padding: "28px 24px", marginBottom: 24, border: "1.5px solid #e8edf4", boxShadow: "0 2px 12px rgba(0,0,0,.05)" }}>
          <h2 style={{ fontSize: 18, fontWeight: 900, color: "#1B2A4A", marginBottom: 18, paddingBottom: 12, borderBottom: "2px solid #FF8A0020" }}>❓ よくある質問（兵庫の習い事）</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            {faqs.map((faq, i) => (
              <div key={i} style={{ background: "#f8f9fb", borderRadius: 14, padding: "20px 22px", border: "1.5px solid #e8edf4" }}>
                <div style={{ fontSize: 15, fontWeight: 800, color: "#1B2A4A", marginBottom: 10 }}>Q. {faq.q}</div>
                <div style={{ fontSize: 14, color: "#555", lineHeight: 1.8 }}>A. {faq.a}</div>
              </div>
            ))}
          </div>
        </div>

        <div style={{ background: "#fff", borderRadius: 18, padding: "28px 24px", marginBottom: 24, border: "1.5px solid #e8edf4", boxShadow: "0 2px 12px rgba(0,0,0,.05)" }}>
          <h2 style={{ fontSize: 18, fontWeight: 900, color: "#1B2A4A", marginBottom: 16, paddingBottom: 12, borderBottom: "2px solid #FF8A0020" }}>📝 関連記事・ガイド</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            {blogs.map((blog, i) => (
              <Link key={i} href={blog.href} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "12px 16px", background: "#f8f9fb", borderRadius: 10, textDecoration: "none", color: "#1B2A4A", fontSize: 14, fontWeight: 600, border: "1px solid #e8edf4" }}>
                <span>📝 {blog.text}</span>
                <span style={{ color: "#ccc" }}>›</span>
              </Link>
            ))}
          </div>
        </div>

        <div style={{ background: "#fff", borderRadius: 18, padding: "28px 24px", marginBottom: 24, border: "1.5px solid #e8edf4", boxShadow: "0 2px 12px rgba(0,0,0,.05)" }}>
          <h2 style={{ fontSize: 18, fontWeight: 900, color: "#1B2A4A", marginBottom: 16, paddingBottom: 12, borderBottom: "2px solid #FF8A0020" }}>🗾 他の都道府県の習い事情報</h2>
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
              🥇 兵庫の習い事トレンド2026：ダンスが1位
            </h2>
            <p style={{ fontSize: 14, lineHeight: 1.9, color: "#444", marginBottom: 16 }}>
              兵庫・西宮でダンス習い事が人気上昇。K-POPブームと中学校ダンス必修化の影響で、兵庫でも子供のダンス習い事への需要が急増しています。
              2026年の習い事人気ランキングでダンスが1位を獲得し、スイミングや英語を上回る勢いです。
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
              {[
                { slug: "kansai-kids-dance-kyoto-hyogo-shiga", title: "関西キッズダンス（京都・兵庫・滋賀）ガイド" },
              ].map(({ slug, title }) => (
                <a key={slug} href={`/blog/${slug}`}
                  style={{ fontSize: 12, color: "#4527A0", background: "#f3f0ff", padding: "4px 10px", borderRadius: 12, textDecoration: "none", fontWeight: 600 }}>
                  📝 {title}
                </a>
              ))}
            </div>
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
