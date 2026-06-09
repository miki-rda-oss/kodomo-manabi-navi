import Link from "next/link";

export const metadata = {
  title: "保護者169名が回答｜ダンス教室で子どもが変わった？満足度アンケート調査2026【コドモならいごと】",
  description: "ダンス教室に通う子どもを持つ保護者169名に「通わせてよかったか」を調査。満足度平均8.7点、44%が10点満点。自信がついた・友達が増えた・毎週楽しみになったなど変化を数字で公開。",
  keywords: [
    "ダンス教室 保護者 口コミ",
    "キッズダンス 効果 アンケート",
    "子供 ダンス習い事 変化",
    "ダンス教室 満足度 調査",
    "リディアダンスアカデミー 口コミ",
    "子ども ダンス 自信 効果",
    "習い事 ダンス 保護者の声",
  ],
  alternates: {
    canonical: "https://www.kodomo-navi.com/dance/survey",
  },
  openGraph: {
    title: "保護者169名が回答｜ダンス教室で子どもが変わった？満足度調査2026",
    description: "満足度平均8.7点、44%が10点満点。自信がついた41%・友達が増えた41%・毎週楽しみになった66%。保護者169名のリアルな声を公開。",
    url: "https://www.kodomo-navi.com/dance/survey",
    type: "article",
  },
};

const TRIAL_URL = "https://lin.ee/v9q2QAX";

// Schema: BreadcrumbList
const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "トップ", item: "https://www.kodomo-navi.com" },
    { "@type": "ListItem", position: 2, name: "ダンス教室", item: "https://www.kodomo-navi.com/dance" },
    { "@type": "ListItem", position: 3, name: "保護者満足度調査2026", item: "https://www.kodomo-navi.com/dance/survey" },
  ],
};

// Schema: Dataset（調査データ）
const datasetSchema = {
  "@context": "https://schema.org",
  "@type": "Dataset",
  name: "ダンス教室保護者満足度調査2026",
  description: "リディアダンスアカデミー在籍生徒の保護者169名を対象に実施した「ダンスが子どもに与える変化」に関する調査データ。満足度・変化・入会前の悩み等を集計。",
  url: "https://www.kodomo-navi.com/dance/survey",
  creator: {
    "@type": "Organization",
    name: "株式会社スポーツ＆ライフ・イノベーション",
    url: "https://sl-i.co.jp/",
  },
  datePublished: "2026-05-27",
  temporalCoverage: "2026-05-23/2026-05-27",
  measurementTechnique: "インターネット調査（Googleフォーム）",
  variableMeasured: ["保護者満足度", "子どもの変化", "入会前の悩み"],
};

// Schema: AggregateRating
const aggregateRatingSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "リディアダンスアカデミー",
  url: "https://re-dia.jp/",
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "8.7",
    bestRating: "10",
    worstRating: "1",
    ratingCount: "169",
    reviewCount: "144",
  },
};

// Schema: FAQPage
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "ダンス教室に通わせると子どもに どんな変化がある？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "保護者169名の調査では、66%が「毎週楽しみにしていることができた」、41%が「自信がついた・積極的になった」、41%が「友達が増えた」と回答。体力・表現力・集中力など複数の面で変化が見られます。",
      },
    },
    {
      "@type": "Question",
      name: "ダンス教室の保護者満足度は？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "リディアダンスアカデミーの保護者169名への調査では、満足度平均8.7点（10点満点）、44%が10点満点と回答。9点以上は58%に達しています。",
      },
    },
    {
      "@type": "Question",
      name: "内向的・引っ込み思案の子でもダンスで変われる？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "調査では入会前に「引っ込み思案・内向的」と答えた保護者が22%いましたが、入会後は41%が「自信がついた・積極的になった」と回答。内向的な子の変化を示す保護者の声も多数集まっています。",
      },
    },
    {
      "@type": "Question",
      name: "ダンス教室は何歳から始めるのがいい？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "今回の調査では3〜4歳（7%）から中学生以上（12%）まで幅広い年齢が回答。最多は11〜12歳（28%）ですが、3歳から通えるリトルクラスを設けているスクールもあります。",
      },
    },
  ],
};

const changeRanking = [
  { rank: 1, text: "毎週楽しみにしていることができた", pct: 66, num: 111 },
  { rank: 2, text: "自信がついた・積極的になった", pct: 41, num: 70 },
  { rank: 2, text: "友達が増えた", pct: 41, num: 69 },
  { rank: 4, text: "表現力・感情表現が豊かになった", pct: 40, num: 67 },
  { rank: 5, text: "体力・体幹がついた", pct: 39, num: 66 },
  { rank: 6, text: "集中力が上がった", pct: 18, num: 30 },
  { rank: 7, text: "家族の会話が増えた", pct: 13, num: 22 },
  { rank: 8, text: "挨拶・礼儀がよくなった", pct: 12, num: 20 },
  { rank: 9, text: "学校（勉強・行事）に前向きになった", pct: 9, num: 15 },
];

const beforeWorries = [
  { text: "運動不足・体力が心配", pct: 30, num: 51 },
  { text: "自信がなさそう", pct: 25, num: 43 },
  { text: "引っ込み思案・内向的", pct: 22, num: 37 },
  { text: "集中力がない", pct: 21, num: 36 },
  { text: "友達が少ない・人見知り", pct: 17, num: 29 },
  { text: "表現力が乏しい", pct: 10, num: 17 },
];

const voices = [
  {
    cat: "自信・自己表現",
    text: "学校のイベント等で、大勢の人前でもひるまず積極的にダンスをしたり、英語のスピーチをしたりと、ダンスで自分に自信がついたおかげで度胸が身に付いた！",
  },
  {
    cat: "自主性・継続力",
    text: "とても飽き性で継続が苦手だった娘が、ダンスの体験に行ったその日から毎日かかさずストレッチとその日のダンスの復習を自らするようになった！",
  },
  {
    cat: "居場所・メンタル",
    text: "発表会に出ることが大きな自信になり、大切な仲間もできて、学校で嫌なことがあっても違う居場所が心の支えになっている。",
  },
  {
    cat: "友達・メンタル安定",
    text: "学校以外にも仲間がいると思えることができたからか、メンタルが安定して少々嫌なことがあっても気にしない性格になった。",
  },
  {
    cat: "感動エピソード",
    text: "登校拒否をしている中で、ダンスを始めたいと言った事がきっかけで通い始めました。少しずつですが学校に行く時間が増え、今では毎日学校に遅刻もせず通えるようになりました。",
    highlight: true,
  },
  {
    cat: "体力・楽しみ",
    text: "ダンスを始めて毎日が楽しくなった♡ かけっこが学年1位になった！",
  },
];

const ageData = [
  { label: "11〜12歳（小5〜6年）", pct: 28, num: 48 },
  { label: "7〜8歳（小1〜2年）", pct: 21, num: 36 },
  { label: "9〜10歳（小3〜4年）", pct: 18, num: 31 },
  { label: "5〜6歳", pct: 13, num: 22 },
  { label: "中学生以上", pct: 12, num: 21 },
  { label: "3〜4歳", pct: 7, num: 11 },
];

const faqs = [
  {
    q: "ダンス教室に通わせると子どもにどんな変化がある？",
    a: "保護者169名の調査では、66%が「毎週楽しみにしていることができた」、41%が「自信がついた・積極的になった」、41%が「友達が増えた」と回答。体力・表現力・集中力など複数の面で変化が見られます。",
  },
  {
    q: "内向的・引っ込み思案の子でも変わることができる？",
    a: "入会前に「引っ込み思案・内向的」と答えた保護者は22%（37名）いましたが、入会後は41%が「自信がついた・積極的になった」と回答。内向的な子の変化を示す実際の保護者の声も多数集まっています。",
  },
  {
    q: "ダンス教室は体力がない子でも大丈夫？",
    a: "「運動不足・体力が心配」は入会前の悩みTOP（30%）でしたが、入会後に「体力・体幹がついた」と答えた保護者は39%。体力に自信がない子も通いながら体力をつけているケースが多いです。",
  },
  {
    q: "ダンス教室の保護者の満足度は高い？",
    a: "今回の調査では満足度平均8.7点（10点満点）、44%が10点満点と回答。9点以上は全体の58%に達しており、習い事の中でも高い満足度の結果となっています。",
  },
];

// BarChart component
function Bar({ pct, color = "#E8003D" }) {
  return (
    <div style={{ background: "#eee", borderRadius: 4, height: 10, margin: "4px 0 0", overflow: "hidden" }}>
      <div style={{ width: `${pct}%`, background: color, height: "100%", borderRadius: 4, transition: "width 0.3s" }} />
    </div>
  );
}

export default function DanceSurveyPage() {
  return (
    <div style={{ fontFamily: "'Noto Sans JP','Hiragino Sans',sans-serif", background: "#f4f7fc", minHeight: "100vh", color: "#1a1a2e" }}>
      {/* Schema */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(datasetSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(aggregateRatingSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* パンくず */}
      <div style={{ maxWidth: 800, margin: "0 auto", padding: "12px 20px", fontSize: 12, color: "#888" }}>
        <Link href="/" style={{ color: "#888" }}>トップ</Link> &gt;{" "}
        <Link href="/dance" style={{ color: "#888" }}>ダンス教室</Link> &gt;{" "}
        <span>保護者満足度調査2026</span>
      </div>

      {/* Hero */}
      <div style={{ background: "linear-gradient(135deg,#1a1a2e 0%,#2d2d4e 100%)", color: "#fff", padding: "48px 20px 40px", textAlign: "center" }}>
        <div style={{ maxWidth: 700, margin: "0 auto" }}>
          <div style={{ display: "inline-block", background: "#E8003D", color: "#fff", fontSize: 12, fontWeight: 700, padding: "4px 14px", borderRadius: 20, marginBottom: 16, letterSpacing: "0.08em" }}>
            保護者アンケート調査 2026年5月
          </div>
          <h1 style={{ fontSize: "clamp(20px,5vw,32px)", fontWeight: 900, lineHeight: 1.35, marginBottom: 8 }}>
            ダンス教室で子どもは変わる？<br />
            <span style={{ color: "#FF6B35" }}>保護者169名</span>のリアルな声を公開
          </h1>
          <p style={{ fontSize: 14, color: "#aaa", marginBottom: 32 }}>
            株式会社スポーツ＆ライフ・イノベーション調査｜2026年5月23日〜27日実施
          </p>

          {/* 3指標 */}
          <div style={{ display: "flex", justifyContent: "center", gap: 12, flexWrap: "wrap", marginBottom: 32 }}>
            {[
              { num: "8.7点", label: "満足度平均（10点満点）" },
              { num: "44%", label: "10点満点の割合" },
              { num: "66%", label: "「毎週楽しみ」ができた" },
            ].map((item) => (
              <div key={item.label} style={{ background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.15)", borderRadius: 12, padding: "16px 20px", textAlign: "center", minWidth: 110 }}>
                <div style={{ fontSize: "clamp(28px,7vw,44px)", fontWeight: 900, color: "#FF6B35", lineHeight: 1 }}>{item.num}</div>
                <div style={{ fontSize: 11, color: "#bbb", marginTop: 4 }}>{item.label}</div>
              </div>
            ))}
          </div>

          <Link href={TRIAL_URL} target="_blank" rel="noopener noreferrer"
            style={{ display: "inline-block", background: "#E8003D", color: "#fff", fontWeight: 800, fontSize: 15, padding: "14px 32px", borderRadius: 8, boxShadow: "0 4px 20px rgba(232,0,61,0.5)", textDecoration: "none" }}>
            リディアダンスアカデミー 無料体験を申し込む
          </Link>
          <p style={{ fontSize: 11, color: "#888", marginTop: 8 }}>体験レッスン無料・入会の強制なし</p>
        </div>
      </div>

      <div style={{ maxWidth: 800, margin: "0 auto", padding: "0 20px 60px" }}>

        {/* 調査概要 */}
        <section style={{ background: "#fff", borderRadius: 12, padding: "28px 24px", margin: "24px 0", boxShadow: "0 2px 8px rgba(0,0,0,0.06)" }}>
          <h2 style={{ fontSize: 18, fontWeight: 800, marginBottom: 16, borderLeft: "4px solid #E8003D", paddingLeft: 12 }}>調査概要</h2>
          <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 14 }}>
            <tbody>
              {[
                ["調査テーマ", "ダンスが子どもに与える変化に関する調査"],
                ["調査対象", "リディアダンスアカデミー在籍生徒の保護者"],
                ["有効回答数", "169名"],
                ["調査方法", "インターネット調査（Googleフォーム）"],
                ["調査期間", "2026年5月23日〜2026年5月27日"],
                ["掲載許可取得率", "85%（144名）"],
              ].map(([k, v]) => (
                <tr key={k} style={{ borderBottom: "1px solid #f0f0f0" }}>
                  <td style={{ padding: "8px 12px", color: "#666", fontWeight: 600, width: "38%", background: "#fafafa" }}>{k}</td>
                  <td style={{ padding: "8px 12px" }}>{v}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>

        {/* 満足度スコア */}
        <section style={{ background: "#fff", borderRadius: 12, padding: "28px 24px", margin: "24px 0", boxShadow: "0 2px 8px rgba(0,0,0,0.06)" }}>
          <h2 style={{ fontSize: 18, fontWeight: 800, marginBottom: 8, borderLeft: "4px solid #E8003D", paddingLeft: 12 }}>通わせてよかった？保護者の満足度スコア</h2>
          <p style={{ fontSize: 13, color: "#666", marginBottom: 20 }}>「総合的に通わせてよかったと思いますか？」（1〜10点）への回答</p>

          <div style={{ display: "flex", gap: 16, flexWrap: "wrap", marginBottom: 20 }}>
            {[
              { num: "8.7点", label: "満足度平均", sub: "10点満点中" },
              { num: "44%", label: "10点満点", sub: "75名が最高評価" },
              { num: "58%", label: "9点以上", sub: "98名" },
            ].map((item) => (
              <div key={item.label} style={{ flex: "1 1 120px", textAlign: "center", padding: "16px 12px", background: "#fff5f7", borderRadius: 10, border: "2px solid #E8003D" }}>
                <div style={{ fontSize: 32, fontWeight: 900, color: "#E8003D", lineHeight: 1 }}>{item.num}</div>
                <div style={{ fontSize: 13, fontWeight: 700, marginTop: 4 }}>{item.label}</div>
                <div style={{ fontSize: 11, color: "#888", marginTop: 2 }}>{item.sub}</div>
              </div>
            ))}
          </div>
          <p style={{ fontSize: 13, color: "#555", background: "#f8f9fa", padding: "12px 16px", borderRadius: 8, lineHeight: 1.7 }}>
            回答者の<strong>85%（144名）</strong>がコメントの掲載を許可。数字だけでなく、実名に近い形で声を公開している保護者が多いことが、この満足度の信頼性を裏付けています。
          </p>
        </section>

        {/* 変化ランキング */}
        <section style={{ background: "#fff", borderRadius: 12, padding: "28px 24px", margin: "24px 0", boxShadow: "0 2px 8px rgba(0,0,0,0.06)" }}>
          <h2 style={{ fontSize: 18, fontWeight: 800, marginBottom: 8, borderLeft: "4px solid #E8003D", paddingLeft: 12 }}>ダンスを始めてから変わったこと（複数回答）</h2>
          <p style={{ fontSize: 13, color: "#666", marginBottom: 20 }}>「ダンスを始めてから子どもに変化がありましたか？」への回答（169名・複数回答）</p>

          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            {changeRanking.map((item, i) => (
              <div key={i}>
                <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 2 }}>
                  <span style={{
                    display: "inline-flex", alignItems: "center", justifyContent: "center",
                    width: 24, height: 24, borderRadius: "50%",
                    background: i < 3 ? "#E8003D" : "#ddd",
                    color: i < 3 ? "#fff" : "#666",
                    fontSize: 12, fontWeight: 700, flexShrink: 0
                  }}>{item.rank}</span>
                  <span style={{ flex: 1, fontSize: 14 }}>{item.text}</span>
                  <span style={{ fontSize: 14, fontWeight: 800, color: "#E8003D", minWidth: 36, textAlign: "right" }}>{item.pct}%</span>
                  <span style={{ fontSize: 12, color: "#888", minWidth: 40, textAlign: "right" }}>（{item.num}名）</span>
                </div>
                <Bar pct={item.pct} color={i < 3 ? "#E8003D" : "#FF6B35"} />
              </div>
            ))}
          </div>
        </section>

        {/* Before/After */}
        <section style={{ background: "#fff", borderRadius: 12, padding: "28px 24px", margin: "24px 0", boxShadow: "0 2px 8px rgba(0,0,0,0.06)" }}>
          <h2 style={{ fontSize: 18, fontWeight: 800, marginBottom: 8, borderLeft: "4px solid #E8003D", paddingLeft: 12 }}>通う前の悩み → 入会後の変化</h2>
          <p style={{ fontSize: 13, color: "#666", marginBottom: 20 }}>入会前の悩みと、入会後に実際に起きた変化の対応関係</p>

          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            {[
              { before: "運動不足・体力が心配（30%）", after: "体力・体幹がついた（39%）" },
              { before: "自信がなさそう（25%）", after: "自信がついた・積極的になった（41%）" },
              { before: "引っ込み思案・内向的（22%）", after: "積極的になった（41%）" },
              { before: "友達が少ない・人見知り（17%）", after: "友達が増えた（41%）" },
              { before: "集中力がない（21%）", after: "集中力が上がった（18%）" },
            ].map((row, i) => (
              <div key={i} style={{ display: "flex", alignItems: "center", gap: 8, flexWrap: "wrap" }}>
                <div style={{ flex: 1, minWidth: 160, background: "#f4f7fc", borderRadius: 8, padding: "8px 12px", fontSize: 13, color: "#666" }}>
                  😟 {row.before}
                </div>
                <div style={{ color: "#E8003D", fontWeight: 800, fontSize: 16, padding: "0 4px" }}>→</div>
                <div style={{ flex: 1, minWidth: 160, background: "#fff0f3", borderRadius: 8, padding: "8px 12px", fontSize: 13, color: "#E8003D", fontWeight: 600 }}>
                  😊 {row.after}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 保護者の声 */}
        <section style={{ background: "#fff", borderRadius: 12, padding: "28px 24px", margin: "24px 0", boxShadow: "0 2px 8px rgba(0,0,0,0.06)" }}>
          <h2 style={{ fontSize: 18, fontWeight: 800, marginBottom: 6, borderLeft: "4px solid #E8003D", paddingLeft: 12 }}>保護者の声（掲載許可取得済み）</h2>
          <p style={{ fontSize: 13, color: "#666", marginBottom: 20 }}>掲載許可を取得した144名の声から抜粋。そのまま掲載しています。</p>

          <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            {voices.map((v, i) => (
              <div key={i} style={{
                background: v.highlight ? "#fff5f7" : "#f8f9fa",
                border: v.highlight ? "2px solid #E8003D" : "1px solid #eee",
                borderRadius: 10, padding: "16px 18px",
                position: "relative",
              }}>
                {v.highlight && (
                  <div style={{ position: "absolute", top: -10, left: 14, background: "#E8003D", color: "#fff", fontSize: 10, fontWeight: 700, padding: "2px 10px", borderRadius: 10 }}>
                    注目の声
                  </div>
                )}
                <div style={{ fontSize: 10, color: "#E8003D", fontWeight: 700, marginBottom: 6, letterSpacing: "0.05em" }}>
                  【{v.cat}】
                </div>
                <p style={{ fontSize: 14, lineHeight: 1.75, margin: 0, color: "#333" }}>「{v.text}」</p>
                <p style={{ fontSize: 11, color: "#888", margin: "8px 0 0", textAlign: "right" }}>
                  — リディアダンスアカデミー 保護者より
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* 年齢・期間 */}
        <section style={{ background: "#fff", borderRadius: 12, padding: "28px 24px", margin: "24px 0", boxShadow: "0 2px 8px rgba(0,0,0,0.06)" }}>
          <h2 style={{ fontSize: 18, fontWeight: 800, marginBottom: 20, borderLeft: "4px solid #E8003D", paddingLeft: 12 }}>回答者のお子さんの年齢構成</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            {ageData.map((item, i) => (
              <div key={i}>
                <div style={{ display: "flex", justifyContent: "space-between", fontSize: 13, marginBottom: 2 }}>
                  <span>{item.label}</span>
                  <span style={{ fontWeight: 700 }}>{item.pct}%（{item.num}名）</span>
                </div>
                <Bar pct={item.pct} color="#2d2d4e" />
              </div>
            ))}
          </div>
          <p style={{ fontSize: 12, color: "#888", marginTop: 12 }}>
            ※ 小学生（7〜12歳）が全体の67%を占めますが、3歳から中学生以上まで幅広い年齢層が回答しています。
          </p>
        </section>

        {/* FAQ */}
        <section style={{ background: "#fff", borderRadius: 12, padding: "28px 24px", margin: "24px 0", boxShadow: "0 2px 8px rgba(0,0,0,0.06)" }}>
          <h2 style={{ fontSize: 18, fontWeight: 800, marginBottom: 20, borderLeft: "4px solid #E8003D", paddingLeft: 12 }}>よくある質問</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            {faqs.map((faq, i) => (
              <div key={i} style={{ borderBottom: "1px solid #f0f0f0", paddingBottom: 16 }}>
                <p style={{ fontWeight: 700, fontSize: 14, marginBottom: 8, display: "flex", gap: 8 }}>
                  <span style={{ color: "#E8003D", flexShrink: 0 }}>Q.</span>{faq.q}
                </p>
                <p style={{ fontSize: 14, color: "#555", lineHeight: 1.75, margin: 0, display: "flex", gap: 8 }}>
                  <span style={{ color: "#2d2d4e", fontWeight: 700, flexShrink: 0 }}>A.</span>{faq.a}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section style={{ background: "linear-gradient(135deg,#1a1a2e 0%,#2d2d4e 100%)", borderRadius: 12, padding: "36px 24px", margin: "24px 0", textAlign: "center", color: "#fff" }}>
          <h2 style={{ fontSize: 20, fontWeight: 900, marginBottom: 8, lineHeight: 1.4 }}>
            まず、体験してみてください。
          </h2>
          <p style={{ fontSize: 14, color: "#bbb", marginBottom: 8, lineHeight: 1.75 }}>
            体験レッスンは無料です。入会の強制はありません。<br />
            169名の保護者の多くが、体験レッスンの帰り道に入会を決めました。
          </p>
          <p style={{ fontSize: 13, color: "#aaa", marginBottom: 24 }}>
            満足度8.7点・44%が10点満点と答えたスクールを、まず体験で確認してください。
          </p>
          <Link href={TRIAL_URL} target="_blank" rel="noopener noreferrer"
            style={{ display: "inline-block", background: "#E8003D", color: "#fff", fontWeight: 800, fontSize: 16, padding: "16px 40px", borderRadius: 8, boxShadow: "0 4px 20px rgba(232,0,61,0.5)", textDecoration: "none" }}>
            リディアダンスアカデミー<br />無料体験レッスンを申し込む
          </Link>
          <p style={{ fontSize: 11, color: "#888", marginTop: 10 }}>体験料：無料 ／ 所要時間：約60分 ／ 対象：3歳〜中学生</p>
        </section>

        {/* 関連リンク */}
        <section style={{ background: "#fff", borderRadius: 12, padding: "24px", margin: "24px 0", boxShadow: "0 2px 8px rgba(0,0,0,0.06)" }}>
          <h2 style={{ fontSize: 16, fontWeight: 800, marginBottom: 14 }}>関連ページ</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            <Link href="/dance/redia" style={{ color: "#E8003D", fontSize: 14, textDecoration: "none" }}>▶ リディアダンスアカデミー 詳細ページ（料金・コース・体験情報）</Link>
            <Link href="/dance" style={{ color: "#E8003D", fontSize: 14, textDecoration: "none" }}>▶ 子供のダンス教室おすすめ比較（全国版）</Link>
            <Link href="/blog/kids-dance-age-guide" style={{ color: "#E8003D", fontSize: 14, textDecoration: "none" }}>▶ 子供のダンスは何歳から始める？完全ガイド</Link>
          </div>
        </section>

        {/* 注記 */}
        <p style={{ fontSize: 11, color: "#aaa", lineHeight: 1.7, padding: "0 4px" }}>
          ※ 本調査はリディアダンスアカデミー在籍生徒の保護者を対象に実施しました。回答者の85%（144名）よりコメント掲載許可を取得しています。調査実施：株式会社スポーツ＆ライフ・イノベーション（2026年5月）。
        </p>
      </div>
    </div>
  );
}
