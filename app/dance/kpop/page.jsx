import Link from "next/link";

export function generateMetadata() {
  return {
    title: "子供のK-POPダンス教室ガイド｜何歳から・選び方・月謝【コドモならいごと】",
    description: "子ども向けK-POPダンス教室を徹底解説。K-POPダンスは何歳から始められるか、キッズK-POPクラスの選び方、月謝相場、よくある質問まで。リディアダンスアカデミーなど人気スクールの無料体験情報も掲載。",
    keywords: ["子供 K-POPダンス", "キッズ KPOP ダンス教室", "K-POPダンス 何歳から", "子ども ケーポップ ダンス", "リディアダンスアカデミー"],
    alternates: { canonical: "https://www.kodomo-navi.com/dance/kpop" },
  };
}

const KPOP_FAQS = [
  { q: "子どものK-POPダンスは何歳から始められますか？", a: "多くのスクールでは3歳から通えるリトルクラスでリズムの基礎を身につけ、振り付けを覚えられるようになる小学生からK-POPの楽曲に本格的に取り組むのが一般的です。リディアダンスアカデミーは3歳から通え、K-POPを含む多ジャンルに対応しています。" },
  { q: "K-POPダンスのクラスの月謝相場は？", a: "週1回で月6,000〜12,000円が一般的です。リディアダンスアカデミーは月7,700円〜で、初回体験は無料です。" },
  { q: "男の子もK-POPダンスを習えますか？", a: "もちろんです。K-POPは男性グループの楽曲も多く、男の子の受講者も増えています。性別を問わず歓迎しているスクールがほとんどです。" },
  { q: "K-POPダンスとヒップホップの違いは？", a: "ヒップホップは即興性や個性を重視するストリートダンスで、K-POPはアーティストの振り付けを正確に揃えて踊ることを重視します。K-POPの振り付けにはヒップホップやジャズの要素が含まれるため、基礎としてヒップホップを併習すると上達が早くなります。" },
  { q: "ダンス未経験の子どもでも大丈夫ですか？", a: "問題ありません。キッズ向けクラスは未経験からのスタートが大半です。年齢・レベル別にクラスが分かれているスクールを選べば、無理なく基礎から学べます。" },
];

const POINTS = [
  { h: "① 年齢・レベルでクラスが分かれているか", p: "K-POPの振り付けはテンポが速く複雑なものも多いため、年齢とレベルに合わせた段階的なカリキュラムがあるスクールを選ぶと挫折しにくくなります。3歳〜の幼児はまずリズム遊び中心のクラスから始めるのがおすすめです。" },
  { h: "② K-POP専門か、多ジャンル対応か", p: "K-POP専門スタジオは曲の流行に強い一方、ヒップホップ・ジャズなど基礎ジャンルも学べる多ジャンル対応のスクールは、土台となるリズム取り・体の使い方から育ててくれます。長く続けるなら基礎も学べるスクールが有利です。" },
  { h: "③ 発表会・イベント出演の機会があるか", p: "覚えた振り付けを舞台で披露する経験は、子どもの自信と継続のモチベーションになります。発表会の頻度と参加費用も事前に確認しましょう。" },
  { h: "④ 通いやすさ（駅近・送迎のしやすさ）", p: "週1回を長く続けるには、自宅や学校から無理なく通えることが重要です。駅から徒歩圏か、車での送迎がしやすいか、振替制度があるかをチェックしましょう。" },
];

export default function KpopDancePage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "トップ", item: "https://www.kodomo-navi.com" },
      { "@type": "ListItem", position: 2, name: "ダンス教室", item: "https://www.kodomo-navi.com/dance" },
      { "@type": "ListItem", position: 3, name: "子どものK-POPダンス", item: "https://www.kodomo-navi.com/dance/kpop" },
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: KPOP_FAQS.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: { "@type": "Answer", text: faq.a },
    })),
  };

  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": "https://www.kodomo-navi.com/dance/kpop",
    name: "子供のK-POPダンス教室ガイド｜何歳から・選び方・月謝",
    description: "子ども向けK-POPダンス教室の始めどき・選び方・月謝相場を解説。",
    url: "https://www.kodomo-navi.com/dance/kpop",
    inLanguage: "ja",
    isPartOf: { "@id": "https://www.kodomo-navi.com/#website" },
    speakable: { "@type": "SpeakableSpecification", cssSelector: ["h1", "h2"] },
  };

  const blogs = [
    { href: "/blog/kids-kpop-dance-school", text: "子供K-POPダンス教室おすすめ" },
    { href: "/blog/dance-hip-hop-kpop-diff", text: "ヒップホップとK-POPダンスの違い" },
    { href: "/blog/kids-kpop-hiphop-difference-guide", text: "K-POPとヒップホップどっちを習う？比較ガイド" },
    { href: "/blog/kids-dance-age-guide", text: "子供ダンスは何歳から始める？完全ガイド" },
    { href: "/blog/lydia-dance-academy-review", text: "リディアダンスアカデミーの評判・口コミ" },
  ];

  return (
    <div style={{ fontFamily: "'Noto Sans JP','Hiragino Sans',sans-serif", background: "#f4f7fc", minHeight: "100vh" }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }} />

      {/* Header */}
      <header style={{ background: "#fff", borderBottom: "1px solid #e8edf4", boxShadow: "0 2px 8px rgba(0,0,0,.05)", position: "sticky", top: 0, zIndex: 100 }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 24px", display: "flex", alignItems: "center", gap: 10, height: 56 }}>
          <Link href="/" style={{ display: "flex", alignItems: "center", gap: 8, textDecoration: "none" }}>
            <div style={{ width: 32, height: 32, borderRadius: 9, background: "linear-gradient(135deg, #E53935, #B71C1C)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 16 }}>🧒</div>
            <span style={{ fontSize: 15, fontWeight: 900, color: "#1B2A4A" }}>コドモならいごと</span>
          </Link>
          <span style={{ color: "#ddd" }}>›</span>
          <Link href="/dance" style={{ fontSize: 13, color: "#E53935", fontWeight: 600, textDecoration: "none" }}>ダンス教室</Link>
          <span style={{ color: "#ddd" }}>›</span>
          <span style={{ fontSize: 13, color: "#888", fontWeight: 600 }}>K-POPダンス</span>
        </div>
      </header>

      {/* Breadcrumb */}
      <nav aria-label="パンくず" style={{ maxWidth: 1100, margin: "0 auto", padding: "10px 24px" }}>
        <div style={{ fontSize: 12, color: "#888" }}>
          <Link href="/" style={{ color: "#E53935", textDecoration: "none" }}>トップ</Link>
          {" › "}
          <Link href="/dance" style={{ color: "#E53935", textDecoration: "none" }}>ダンス教室</Link>
          {" › "}
          <span style={{ color: "#666" }}>子どものK-POPダンス</span>
        </div>
      </nav>

      {/* Hero */}
      <section style={{ background: "linear-gradient(135deg, #B71C1C, #E53935)", padding: "52px 24px 48px" }}>
        <div style={{ maxWidth: 800, margin: "0 auto", textAlign: "center" }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 6, background: "rgba(255,255,255,.2)", borderRadius: 20, padding: "4px 16px", marginBottom: 16, fontSize: 12, color: "#fff", fontWeight: 700 }}>
            🎤 K-POPダンス完全ガイド
          </div>
          <h1 style={{ fontSize: 28, fontWeight: 900, color: "#fff", marginBottom: 14, lineHeight: 1.4 }}>
            子どものK-POPダンス教室ガイド<br />何歳から？選び方・月謝まで解説
          </h1>
          <p style={{ fontSize: 14, color: "rgba(255,255,255,.92)", lineHeight: 2, marginBottom: 24 }}>
            「好きなアーティストみたいに踊りたい」が、子どもがダンスを始める一番のきっかけになっています。K-POPダンスの始めどき・キッズクラスの選び方・月謝相場をまとめました。
          </p>
          <a href="https://lin.ee/v9q2QAX" target="_blank" rel="noopener noreferrer" style={{
            display: 'inline-block', background: '#fff', color: '#E53935',
            textAlign: 'center', padding: '16px 32px', borderRadius: '12px',
            fontWeight: '900', fontSize: '1.1rem', textDecoration: 'none',
            boxShadow: '0 4px 16px rgba(0,0,0,.2)'
          }}>
            🎵 K-POPクラスの無料体験を相談する →
          </a>
        </div>
      </section>

      <div style={{ maxWidth: 900, margin: "0 auto", padding: "36px 24px 60px" }}>

        {/* K-POPダンスとは */}
        <div style={{ background: "#fff", borderRadius: 18, padding: "28px 24px", marginBottom: 28, border: "1.5px solid #e8edf4", boxShadow: "0 2px 12px rgba(0,0,0,.05)" }}>
          <h2 style={{ fontSize: 18, fontWeight: 900, color: "#1B2A4A", marginBottom: 16, paddingBottom: 12, borderBottom: "2px solid #E5393520" }}>
            🎤 K-POPダンスとは
          </h2>
          <p style={{ fontSize: 14, color: "#555", lineHeight: 1.95, marginBottom: 14 }}>
            K-POPダンスは、K-POPアーティストの楽曲に合わせて振り付けを踊るジャンルです。ヒップホップ・ジャズ・ガールズなど複数のスタイルの要素を取り入れた振り付けが特徴で、メンバー全員で動きを揃える「シンクロ」の美しさが魅力です。
          </p>
          <p style={{ fontSize: 14, color: "#555", lineHeight: 1.95, margin: 0 }}>
            子どもにとっては「好きな曲で踊れる」ことがモチベーションになりやすく、リズム感・表現力・体力に加えて、仲間と動きを揃える協調性も育ちます。学校のダンス授業（中学校で必修化）への自信にもつながります。
          </p>
          <div style={{ marginTop: 16, display: "flex", flexWrap: "wrap", gap: 8 }}>
            {["好きな曲で楽しく続く", "リズム感・表現力が育つ", "仲間と揃える協調性", "学校のダンス授業に自信"].map((p, i) => (
              <span key={i} style={{ background: "linear-gradient(135deg, #FFF5F5, #FFEBEE)", border: "1.5px solid #E5393530", color: "#E53935", padding: "6px 14px", borderRadius: 20, fontSize: 12, fontWeight: 700 }}>✓ {p}</span>
            ))}
          </div>
        </div>

        {/* 何歳から */}
        <div style={{ background: "#fff", borderRadius: 18, padding: "28px 24px", marginBottom: 28, border: "1.5px solid #e8edf4", boxShadow: "0 2px 12px rgba(0,0,0,.05)" }}>
          <h2 style={{ fontSize: 18, fontWeight: 900, color: "#1B2A4A", marginBottom: 16, paddingBottom: 12, borderBottom: "2px solid #E5393520" }}>
            👶 K-POPダンスは何歳から始められる？
          </h2>
          <p style={{ fontSize: 14, color: "#555", lineHeight: 1.95, marginBottom: 14 }}>
            ダンス自体は3歳から始められます。3〜6歳のうちは音楽に合わせて楽しく体を動かすリトルクラスでリズム感の土台をつくり、振り付けを覚える力がつく小学生からK-POPの楽曲に本格的に取り組む流れが一般的です。
          </p>
          <p style={{ fontSize: 14, color: "#555", lineHeight: 1.95, margin: 0 }}>
            小学生からのスタートでも遅くありません。「この曲を踊りたい」という明確な動機がある子は上達が速く、高学年からでも1年程度で発表会の舞台に立てるケースが多くあります。
          </p>
          <div style={{ marginTop: 16, display: "flex", flexWrap: "wrap", gap: 8 }}>
            {[
              { age: "3〜6歳", label: "リトルクラスでリズムの土台" },
              { age: "小学生", label: "K-POP楽曲に本格挑戦" },
              { age: "高学年〜", label: "動機が明確で上達が速い" },
            ].map((s, i) => (
              <div key={i} style={{ flex: "1 1 200px", background: "#f8f9fb", border: "1.5px solid #e8edf4", borderRadius: 12, padding: "14px 16px" }}>
                <div style={{ fontSize: 14, fontWeight: 900, color: "#E53935", marginBottom: 4 }}>{s.age}</div>
                <div style={{ fontSize: 12, color: "#555" }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* 選び方 */}
        <div style={{ background: "#fff", borderRadius: 18, padding: "28px 24px", marginBottom: 28, border: "1.5px solid #e8edf4", boxShadow: "0 2px 12px rgba(0,0,0,.05)" }}>
          <h2 style={{ fontSize: 18, fontWeight: 900, color: "#1B2A4A", marginBottom: 16, paddingBottom: 12, borderBottom: "2px solid #E5393520" }}>
            ✅ キッズK-POPクラスの選び方 4つのポイント
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            {POINTS.map((pt, i) => (
              <div key={i}>
                <h3 style={{ fontSize: 15, fontWeight: 800, color: "#1B2A4A", marginBottom: 6 }}>{pt.h}</h3>
                <p style={{ fontSize: 14, color: "#555", lineHeight: 1.9, margin: 0 }}>{pt.p}</p>
              </div>
            ))}
          </div>
        </div>

        {/* リディア紹介ブロック */}
        <div style={{ background: "linear-gradient(135deg, #FFF5F5, #FFEBEE)", borderRadius: 20, padding: "28px 24px", marginBottom: 28, border: "2px solid #E5393522", boxShadow: "0 4px 24px rgba(229,57,53,.1)" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 14 }}>
            <div style={{ width: 48, height: 48, borderRadius: 12, background: "linear-gradient(135deg, #E53935, #B71C1C)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 24 }}>🏆</div>
            <div>
              <div style={{ fontSize: 11, fontWeight: 700, color: "#E53935", marginBottom: 2 }}>K-POPも学べる全国スクール</div>
              <h2 style={{ fontSize: 18, fontWeight: 900, color: "#1B2A4A", margin: 0 }}>リディアダンスアカデミー</h2>
            </div>
          </div>
          <p style={{ fontSize: 13, color: "#555", lineHeight: 1.8, marginBottom: 14 }}>
            全国100校以上展開のキッズダンススクール。K-POP・ガールズ・ヒップホップ・ジャズなど多ジャンルに対応し、現役プロダンサー講師200名以上が在籍。3歳のリトルクラスから始めて、小学生からK-POP・ガールズ系のクラスに進む流れで無理なくステップアップできます。発表会・コンクールの機会も充実しています。
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginBottom: 16 }}>
            {["K-POP・ガールズ系クラス対応", "全国100校以上", "初回体験無料", "3歳〜OK", "プロ講師200名+", "発表会充実"].map((tag, i) => (
              <span key={i} style={{ background: "#fff", border: "1.5px solid #E5393544", color: "#E53935", padding: "3px 10px", borderRadius: 20, fontSize: 11, fontWeight: 700 }}>✓ {tag}</span>
            ))}
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            <a href="https://lin.ee/v9q2QAX" target="_blank" rel="noopener noreferrer" style={{ display: "block", background: "#E53935", color: "#fff", textAlign: "center", padding: "14px 24px", borderRadius: 10, fontWeight: 900, fontSize: 16, textDecoration: "none", boxShadow: "0 6px 20px rgba(229,57,53,.4)" }}>
              🎵 無料体験を申し込む →
            </a>
            <Link href="/dance/redia" style={{ display: "block", background: "#fff", color: "#E53935", textAlign: "center", padding: "12px 24px", borderRadius: 10, fontWeight: 800, fontSize: 14, textDecoration: "none", border: "2px solid #E53935" }}>
              🏆 リディアダンスアカデミー完全ガイドを見る
            </Link>
          </div>
        </div>

        {/* FAQ */}
        <div style={{ background: "#fff", borderRadius: 18, padding: "28px 24px", marginBottom: 28, border: "1.5px solid #e8edf4", boxShadow: "0 2px 12px rgba(0,0,0,.05)" }}>
          <h2 style={{ fontSize: 18, fontWeight: 900, color: "#1B2A4A", marginBottom: 18, paddingBottom: 12, borderBottom: "2px solid #E5393520" }}>
            ❓ 子どものK-POPダンス よくある質問
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            {KPOP_FAQS.map((faq, i) => (
              <details key={i} style={{ background: "#f8f9fb", borderRadius: 12, border: "1.5px solid #e8edf4", overflow: "hidden" }}>
                <summary style={{ padding: "16px 20px", fontSize: 14, fontWeight: 800, color: "#1B2A4A", cursor: "pointer", listStyle: "none", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                  <span>Q. {faq.q}</span>
                  <span style={{ color: "#E53935", fontSize: 18, flexShrink: 0, marginLeft: 8 }}>＋</span>
                </summary>
                <div style={{ padding: "0 20px 16px", fontSize: 13, color: "#555", lineHeight: 1.8, borderTop: "1px solid #e8edf4" }}>
                  A. {faq.a}
                </div>
              </details>
            ))}
          </div>
        </div>

        {/* 関連記事 */}
        <div style={{ background: "#fff", borderRadius: 18, padding: "28px 24px", marginBottom: 28, border: "1.5px solid #e8edf4", boxShadow: "0 2px 12px rgba(0,0,0,.05)" }}>
          <h2 style={{ fontSize: 18, fontWeight: 900, color: "#1B2A4A", marginBottom: 16, paddingBottom: 12, borderBottom: "2px solid #E5393520" }}>
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

        {/* エリアから探す導線 */}
        <div style={{ background: "linear-gradient(135deg, #FFF5F5, #FFEBEE)", borderRadius: 18, padding: "22px 24px", marginBottom: 28, border: "1.5px solid #E5393520" }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 12 }}>
            <div>
              <div style={{ fontSize: 14, fontWeight: 800, color: "#1B2A4A", marginBottom: 4 }}>📍 お住まいの地域からダンス教室を探す</div>
              <div style={{ fontSize: 13, color: "#888" }}>全国47都道府県・エリア別にK-POPも学べる教室を比較できます</div>
            </div>
            <Link href="/dance" style={{ display: "inline-flex", alignItems: "center", gap: 6, padding: "10px 20px", background: "linear-gradient(135deg, #E53935, #B71C1C)", borderRadius: 16, color: "#fff", fontWeight: 700, fontSize: 13, textDecoration: "none" }}>
              エリアから探す →
            </Link>
          </div>
        </div>

        <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
          <Link href="/dance" style={{ display: "inline-flex", alignItems: "center", gap: 6, padding: "12px 24px", background: "#fff", border: "1.5px solid #FFCDD2", borderRadius: 20, color: "#E53935", fontWeight: 700, fontSize: 14, textDecoration: "none" }}>
            ← ダンス教室一覧
          </Link>
          <Link href="/dance/redia" style={{ display: "inline-flex", alignItems: "center", gap: 6, padding: "12px 24px", background: "linear-gradient(135deg, #E53935, #B71C1C)", borderRadius: 20, color: "#fff", fontWeight: 700, fontSize: 14, textDecoration: "none", boxShadow: "0 4px 16px rgba(229,57,53,.3)" }}>
            🏆 リディア完全ガイドを見る
          </Link>
        </div>
      </div>
    </div>
  );
}
