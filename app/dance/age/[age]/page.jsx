import Link from "next/link";

export function generateStaticParams() {
  return [3, 4, 5, 6, 7, 8, 9, 10].map((age) => ({ age: String(age) }));
}

export function generateMetadata({ params }) {
  const age = params.age;
  return {
    title: `${age}歳からのダンス教室おすすめ｜リディアダンスアカデミーほか比較【コドモならいごと】`,
    description: `${age}歳向けのキッズダンス教室を徹底比較。${age}歳のお子さんに最適なダンススクールの選び方・月謝・無料体験情報を掲載。リディアダンスアカデミー1位。`,
    alternates: {
      canonical: `https://www.kodomo-navi.com/dance/age/${age}`,
    },
  };
}

const AGE_DATA = {
  "3": {
    stage: "幼児期前半（3歳）",
    stageDesc: "3歳は言語・運動能力が急速に発達する時期です。音楽に合わせて体を動かすことで、リズム感・集中力・感情表現の基礎が育ちます。「自分でできた！」という体験が自己肯定感を高める大切な時期です。",
    ageDesc: "3歳からダンスを始めるのは決して早すぎません。多くのスクールが3歳からのリトルクラスを設けており、振り付けを覚えることよりも「音楽に合わせて楽しく動く」ことを重視した内容です。",
    courseInfo: "リトルクラス（3〜6歳）",
    courseDesc: "音楽とリズムに親しむ幼児向けクラス。振り付けよりも楽しく体を動かすことを重視。",
    points: ["親子で楽しめるプログラムあり", "音楽への親しみが生まれる", "少人数で先生の目が届く", "無理なく通える週1回から"],
    faqs: [
      { q: "3歳はダンス始めるのに適切？", a: "とても良い時期です。3歳は音楽への感受性が高く、体を動かすことが大好きな時期。ダンスを通じてリズム感・表現力・集中力の基礎が育ちます。難しい振り付けよりも「楽しく動く」ことを重視したリトルクラスが最適です。" },
      { q: "3歳向けのクラスは何がある？", a: "リディアダンスアカデミーの「リトルクラス」は3〜6歳対象で、月謝6,600円〜。音楽に合わせてのリズム運動・簡単な振り付け・コミュニケーション遊びを組み合わせた内容です。" },
    ],
  },
  "4": {
    stage: "幼児期（4歳）",
    stageDesc: "4歳は「やってみたい」という意欲が旺盛になる時期です。簡単な振り付けを覚えることができるようになり、友達と一緒に踊る喜びを感じ始めます。",
    ageDesc: "4歳から始めると、幼稚園・保育園の年少〜年中に当たります。記憶力が発達し、簡単な振り付けを覚えられる年齢。友達と一緒に踊る楽しさも理解できるようになります。",
    courseInfo: "リトルクラス（3〜6歳）",
    courseDesc: "4歳対象の幼児向けクラス。楽しい音楽に合わせて体を動かしながら、基本的なステップを習います。",
    points: ["友達と一緒に楽しめる", "簡単な振り付けが覚えられる年齢", "発表会という目標ができる", "協調性・礼儀も自然に身につく"],
    faqs: [
      { q: "4歳はダンス始めるのに適切？", a: "4歳はダンスを始める理想的な年齢のひとつです。記憶力・集中力が向上し、簡単な振り付けを覚えることが可能になります。友達とのグループレッスンも楽しめるようになる時期です。" },
      { q: "4歳向けのクラスは何がある？", a: "リディアダンスアカデミーの「リトルクラス」は3〜6歳対象で月謝6,600円〜。年齢に合わせたリズム運動・簡単なヒップホップ・ジャズの基礎を学びます。初回体験は無料です。" },
    ],
  },
  "5": {
    stage: "幼児期後半（5歳）",
    stageDesc: "5歳は幼稚園・保育園の年長に当たり、体のコントロール力が大きく向上します。振り付けの記憶・友達との連携・発表会という目標に向けた努力ができる充実した時期です。",
    ageDesc: "5歳から始める子が最も多い年齢のひとつです。記憶力・集中力が揃い、本格的なダンスの基礎を楽しく習得できます。発表会に向けた練習を通じて「やり遂げる力」が育ちます。",
    courseInfo: "リトルクラス（3〜6歳）〜 キッズクラス（小学生）",
    courseDesc: "5歳は年長として幼児クラスの充実期。来年小学校入学を見据えたカリキュラムも用意されています。",
    points: ["ダンスを始める子が最も多い年齢", "発表会での達成感を経験できる", "体の柔軟性がある時期に習得", "小学校入学前に自信がつく"],
    faqs: [
      { q: "5歳はダンス始めるのに適切？", a: "5歳はダンスを始めるのに非常に良い時期です。体の柔軟性がまだ高く、記憶力・集中力が向上しているため、基礎技術の習得がスムーズです。この年齢から始める子が最も多いです。" },
      { q: "5歳向けのクラスは何がある？", a: "リディアダンスアカデミーでは3〜6歳対象の「リトルクラス」（月謝6,600円〜）と小学生向け「キッズクラス」（月謝7,700円〜）の両方が選べます。5歳の場合は年長として来年の小学校進学を見据えたコース選択も可能です。" },
    ],
  },
  "6": {
    stage: "幼児期後半〜小学校低学年（6歳）",
    stageDesc: "6歳は幼稚園卒園〜小学校入学の節目の年齢。体のコントロール力が高まり、本格的な技術習得の土台ができます。友達と競い合う楽しさも理解できる時期です。",
    ageDesc: "6歳（幼稚園年長〜小学1年生）からダンスを始めるのは全く遅くありません。むしろ集中力・記憶力・体のコントロールが揃い始める理想的な時期です。",
    courseInfo: "リトルクラス〜 キッズクラス（小学1年生）",
    courseDesc: "6歳は幼児クラスから小学生クラスへの移行期。お子さんの発達に合わせてクラスを選択します。",
    points: ["集中力・記憶力・体のコントロールが揃う", "小学校の授業（ダンス必修）への備えにもなる", "友達と切磋琢磨できる", "幼児期から身についたリズム感を活かせる"],
    faqs: [
      { q: "6歳はダンス始めるのに適切？", a: "6歳は集中力・記憶力・体のコントロールが揃い、本格的なダンスの習得に最適な時期です。中学校のダンス必修化に備える意味でも、小学校に入学するこの時期からのスタートをおすすめします。" },
      { q: "6歳向けのクラスは何がある？", a: "リディアダンスアカデミーでは6歳が「リトルクラス」（〜6歳）か「キッズクラス」（小学生〜）かの節目。月謝は7,700円〜。ヒップホップ・ジャズ・K-POPなど多ジャンルから選べます。" },
    ],
  },
  "7": {
    stage: "小学校低学年（7歳）",
    stageDesc: "7歳（小学1〜2年生）は学習・運動能力が大きく向上する時期です。振り付けを覚える記憶力・体の使い方が格段に向上し、上達スピードも早くなります。",
    ageDesc: "小学1〜2年生に当たる7歳からのスタートは、非常に多いパターンです。友達に誘われて、学校のダンス授業がきっかけで、または自分から「やりたい！」と言い出すケースが多いです。",
    courseInfo: "キッズクラス（小学生対象）",
    courseDesc: "小学1〜2年生対象のキッズクラス。ヒップホップ・ジャズ・K-POPなど好みのジャンルを選べます。",
    points: ["上達が早い時期", "好きなジャンルを自分で選べる", "友達と一緒に始めやすい", "学校のダンス授業への自信がつく"],
    faqs: [
      { q: "7歳はダンス始めるのに適切？", a: "7歳は記憶力・体のコントロールが向上し、本格的なダンスを習得するのに非常に適した時期です。「好きなアーティストの踊りを踊りたい」「友達と一緒に始めたい」という動機を持つ子も多く、モチベーション維持がしやすいです。" },
      { q: "7歳向けのクラスは何がある？", a: "リディアダンスアカデミーの「キッズクラス」は小学生対象で月謝7,700円〜。ヒップホップ・ジャズ・K-POPなど7ジャンル以上から好みのクラスを選べます。" },
    ],
  },
  "8": {
    stage: "小学校低学年〜中学年（8歳）",
    stageDesc: "8歳（小学2〜3年生）は身体的・認知的に大きく成長する時期。複雑な振り付けの習得・グループでのパフォーマンスへの参加・発表会での本格デビューが可能になります。",
    ageDesc: "8歳から始める子の多くは「好きなアーティストの踊りがしたい」「K-POPが好き」「友達が通っている」というきっかけです。この年齢からでも十分な上達が見込めます。",
    courseInfo: "キッズクラス（小学生対象）",
    courseDesc: "小学2〜3年生対象クラス。複雑な振り付けにもチャレンジできる年齢。コンテストへの参加機会も増えます。",
    points: ["複雑な振り付けも覚えられる", "K-POPブームに乗りやすい年齢", "コンテスト参加の機会も", "自分のスタイル・好みが出てくる"],
    faqs: [
      { q: "8歳はダンス始めるのに適切？", a: "8歳は体・頭・精神のバランスが整い、本格的なダンス習得が加速する時期です。K-POPやヒップホップなど好きなジャンルへの強いこだわりが生まれ、モチベーション高く続けられます。" },
      { q: "8歳向けのクラスは何がある？", a: "リディアダンスアカデミーのキッズクラス（小学生対象、月謝7,700円〜）。ヒップホップ・K-POP・ジャズなど7ジャンル以上から選択可能。発表会・コンテストの機会も充実しています。" },
    ],
  },
  "9": {
    stage: "小学校中学年（9歳）",
    stageDesc: "9歳（小学3〜4年生）は自己表現への強い欲求が生まれる時期。好きなアーティストへの憧れがダンスへのモチベーションになります。友達との競争・発表会への本格取り組みも始まります。",
    ageDesc: "9歳からのスタートでも全く問題ありません。「好きなグループの振り付けが踊りたい」「友達が通っているから」など明確な動機を持つ子が多く、上達スピードが速いです。",
    courseInfo: "キッズクラス（小学生対象）",
    courseDesc: "小学3〜4年生対象クラス。本人の強いモチベーションを活かし、技術面での本格習得が可能な時期。",
    points: ["明確な動機があり上達が速い", "K-POP・ヒップホップへの強い関心", "友達と一緒に切磋琢磨", "中学校のダンス必修化への最適な備え"],
    faqs: [
      { q: "9歳はダンス始めるのに適切？", a: "9歳からのスタートは決して遅くありません。本人に強い動機があるため上達スピードが速く、1年以内に発表会レベルになる子も多いです。中学校のダンス必修化に備える意味でも今が始め時です。" },
      { q: "9歳向けのクラスは何がある？", a: "リディアダンスアカデミーのキッズクラス（小学生対象、月謝7,700円〜）。ヒップホップ・K-POPを中心に、本格的なストリートダンスの基礎から習得できます。" },
    ],
  },
  "10": {
    stage: "小学校高学年（10歳）",
    stageDesc: "10歳（小学4〜5年生）は体の発達とともに高度な技術習得が可能になる時期。本格的なコンテスト参加・グループパフォーマンスへの取り組みができます。中学進学を見据えた準備にも最適です。",
    ageDesc: "10歳からでも十分に上達できます。むしろ「好きなアーティストのようになりたい」という強い動機を持つ子が多く、短期間での急成長が期待できます。中学校のダンス必修化対策としても最適な時期です。",
    courseInfo: "キッズクラス〜ジュニアクラス（小学生・中学生対象）",
    courseDesc: "小学4〜5年生対象クラス。本格的な技術習得・コンテスト挑戦・グループパフォーマンスに力を入れる時期。",
    points: ["短期間での急成長が期待できる", "コンテスト・発表会で活躍のチャンス", "中学進学後のダンス必修化への備え", "本格的なストリートダンス技術の習得"],
    faqs: [
      { q: "10歳はダンス始めるのに適切？", a: "10歳からのスタートでも全く問題ありません。この年齢の子は「本当にやりたい」という強い動機を持っているため、習得スピードが非常に速いです。中学校入学までに基礎を固めることを目標に頑張りましょう。" },
      { q: "10歳向けのクラスは何がある？", a: "リディアダンスアカデミーのキッズクラス（小学生対象、月謝7,700円〜）。本格的なヒップホップ・K-POP・ジャズダンスを習得できます。コンテスト挑戦クラスも用意されています。" },
    ],
  },
};

const popularSchools = [
  {
    rank: 1,
    name: "リディアダンスアカデミー（REDIA DANCE ACADEMY）",
    rating: 4.8,
    fee: "7,700円〜（月会員）",
    featured: true,
    trialUrl: "https://re-dia.jp/contact/",
    points: ["現役プロダンサー講師200名以上", "全国100校以上展開", "多ジャンル対応", "発表会充実"],
  },
  {
    rank: 2,
    name: "EXPG DANCE & VOCAL STUDIO",
    rating: 4.5,
    fee: "12,100円〜",
    featured: false,
    points: ["LDH系列", "プロ志向向け"],
  },
  {
    rank: 3,
    name: "エイベックス・ダンスマスター",
    rating: 4.4,
    fee: "要問い合わせ",
    featured: false,
    points: ["エイベックス直営", "初心者歓迎"],
  },
];

export default function AgeDancePage({ params }) {
  const age = params.age;
  const data = AGE_DATA[age] || AGE_DATA["3"];

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "トップ", item: "https://www.kodomo-navi.com" },
      { "@type": "ListItem", position: 2, name: "ダンス教室", item: "https://www.kodomo-navi.com/dance" },
      { "@type": "ListItem", position: 3, name: `${age}歳のダンス教室`, item: `https://www.kodomo-navi.com/dance/age/${age}` },
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: data.faqs.map(f => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <div style={{ fontFamily: "'Noto Sans JP','Hiragino Sans',sans-serif", background: "#f4f7fc", minHeight: "100vh" }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

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
          <span style={{ fontSize: 13, color: "#888", fontWeight: 600 }}>{age}歳向け</span>
        </div>
      </header>

      {/* Breadcrumb */}
      <nav aria-label="パンくず" style={{ maxWidth: 1100, margin: "0 auto", padding: "10px 24px" }}>
        <div style={{ fontSize: 12, color: "#888" }}>
          <Link href="/" style={{ color: "#E53935", textDecoration: "none" }}>トップ</Link>
          {" › "}
          <Link href="/dance" style={{ color: "#E53935", textDecoration: "none" }}>ダンス教室</Link>
          {" › "}
          <span style={{ color: "#666" }}>{age}歳のダンス教室</span>
        </div>
      </nav>

      {/* Hero */}
      <section style={{ background: "linear-gradient(135deg, #B71C1C, #E53935)", padding: "52px 24px 48px" }}>
        <div style={{ maxWidth: 800, margin: "0 auto", textAlign: "center" }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 6, background: "rgba(255,255,255,.2)", borderRadius: 20, padding: "4px 16px", marginBottom: 16, fontSize: 12, color: "#fff", fontWeight: 700 }}>
            💃 {data.stage}
          </div>
          <h1 style={{ fontSize: 28, fontWeight: 900, color: "#fff", marginBottom: 14, lineHeight: 1.4 }}>
            {age}歳からのダンス教室おすすめ<br />選び方・月謝・体験申込ガイド
          </h1>
          <p style={{ fontSize: 14, color: "rgba(255,255,255,.92)", lineHeight: 2, marginBottom: 24 }}>
            {data.ageDesc}
          </p>
          <a href="https://re-dia.jp/contact/" target="_blank" rel="noopener noreferrer" style={{
            display: 'inline-block', background: '#fff', color: '#E53935',
            textAlign: 'center', padding: '16px 32px', borderRadius: '12px',
            fontWeight: '900', fontSize: '1.1rem', textDecoration: 'none',
            boxShadow: '0 4px 16px rgba(0,0,0,.2)'
          }}>
            🎵 {age}歳向け無料体験を申し込む →
          </a>
        </div>
      </section>

      <div style={{ maxWidth: 900, margin: "0 auto", padding: "36px 24px 60px" }}>

        {/* 発達段階説明 */}
        <div style={{ background: "#fff", borderRadius: 18, padding: "28px 24px", marginBottom: 28, border: "1.5px solid #e8edf4", boxShadow: "0 2px 12px rgba(0,0,0,.05)" }}>
          <h2 style={{ fontSize: 18, fontWeight: 900, color: "#1B2A4A", marginBottom: 16, paddingBottom: 12, borderBottom: "2px solid #E5393520" }}>
            🌱 {age}歳の発達段階とダンス
          </h2>
          <p style={{ fontSize: 14, color: "#555", lineHeight: 1.8 }}>{data.stageDesc}</p>
          <div style={{ marginTop: 16, display: "flex", flexWrap: "wrap", gap: 8 }}>
            {data.points.map((p, i) => (
              <span key={i} style={{ background: "linear-gradient(135deg, #FFF5F5, #FFEBEE)", border: "1.5px solid #E5393530", color: "#E53935", padding: "6px 14px", borderRadius: 20, fontSize: 12, fontWeight: 700 }}>✓ {p}</span>
            ))}
          </div>
        </div>

        {/* おすすめスクール */}
        <div style={{ background: "#fff", borderRadius: 18, padding: "28px 24px", marginBottom: 28, border: "1.5px solid #e8edf4", boxShadow: "0 2px 12px rgba(0,0,0,.05)" }}>
          <h2 style={{ fontSize: 18, fontWeight: 900, color: "#1B2A4A", marginBottom: 20, paddingBottom: 12, borderBottom: "2px solid #E5393520" }}>
            🏆 {age}歳向けおすすめダンス教室ランキング
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            {popularSchools.map((school, i) => (
              <div key={i} style={{
                background: school.featured ? "linear-gradient(135deg, #FFF5F5, #FFEBEE)" : "#f8f9fb",
                border: school.featured ? "2px solid #E5393530" : "1.5px solid #e8edf4",
                borderRadius: 14, padding: "20px 20px", position: "relative"
              }}>
                {school.featured && (
                  <div style={{ position: "absolute", top: 0, left: 16, background: "linear-gradient(135deg, #E53935, #B71C1C)", color: "#fff", fontWeight: 900, fontSize: 11, padding: "4px 10px 6px", borderRadius: "0 0 8px 8px" }}>
                    🥇 {age}歳向けNo.1
                  </div>
                )}
                <div style={{ display: "flex", alignItems: "center", gap: 12, marginTop: school.featured ? 14 : 0, marginBottom: 10 }}>
                  <div style={{ width: 36, height: 36, borderRadius: 10, background: school.featured ? "#E53935" : "#e8edf4", display: "flex", alignItems: "center", justifyContent: "center", color: school.featured ? "#fff" : "#888", fontWeight: 900, fontSize: 16 }}>
                    {school.rank}
                  </div>
                  <div>
                    <div style={{ fontSize: 15, fontWeight: 800, color: "#1B2A4A" }}>{school.name}</div>
                    <div style={{ fontSize: 12, color: "#888", marginTop: 2 }}>★ {school.rating} | 月謝: {school.fee}</div>
                  </div>
                </div>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginBottom: school.featured ? 14 : 0 }}>
                  {school.points.map((p, j) => (
                    <span key={j} style={{ background: "#fff", border: "1px solid #e8edf4", color: "#666", padding: "3px 10px", borderRadius: 12, fontSize: 12 }}>{p}</span>
                  ))}
                </div>
                {school.featured && (
                  <a href={school.trialUrl} target="_blank" rel="noopener noreferrer" style={{
                    display: 'block', background: '#E53935', color: '#fff',
                    textAlign: 'center', padding: '14px 20px', borderRadius: '10px',
                    fontWeight: '900', fontSize: '14px', textDecoration: 'none',
                    boxShadow: '0 4px 16px rgba(229,57,53,.35)'
                  }}>
                    🎵 {age}歳向け無料体験を申し込む →
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* コース情報 */}
        <div style={{ background: "linear-gradient(135deg, #FFF5F5, #FFEBEE)", borderRadius: 18, padding: "28px 24px", marginBottom: 28, border: "2px solid #E5393520" }}>
          <h2 style={{ fontSize: 18, fontWeight: 900, color: "#E53935", marginBottom: 16 }}>
            📚 リディアダンスアカデミー {age}歳向けコース情報
          </h2>
          <div style={{ background: "#fff", borderRadius: 12, padding: "16px 20px", marginBottom: 16 }}>
            <div style={{ fontSize: 15, fontWeight: 800, color: "#1B2A4A", marginBottom: 8 }}>{data.courseInfo}</div>
            <p style={{ fontSize: 14, color: "#666", lineHeight: 1.7, margin: 0 }}>{data.courseDesc}</p>
          </div>
          <a href="https://re-dia.jp/contact/" target="_blank" rel="noopener noreferrer" style={{
            display: 'block', background: '#E53935', color: '#fff',
            textAlign: 'center', padding: '16px 24px', borderRadius: '10px',
            fontWeight: '900', fontSize: '15px', textDecoration: 'none',
            boxShadow: '0 4px 16px rgba(229,57,53,.4)'
          }}>
            🎵 無料体験レッスンを申し込む →
          </a>
        </div>

        {/* FAQ */}
        <div style={{ background: "#fff", borderRadius: 18, padding: "28px 24px", marginBottom: 28, border: "1.5px solid #e8edf4", boxShadow: "0 2px 12px rgba(0,0,0,.05)" }}>
          <h2 style={{ fontSize: 18, fontWeight: 900, color: "#1B2A4A", marginBottom: 18, paddingBottom: 12, borderBottom: "2px solid #E5393520" }}>
            ❓ {age}歳のダンス習い事 よくある質問
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            {data.faqs.map((faq, i) => (
              <div key={i} style={{ background: "#f8f9fb", borderRadius: 12, padding: "18px 20px", border: "1.5px solid #e8edf4" }}>
                <div style={{ fontSize: 14, fontWeight: 800, color: "#E53935", marginBottom: 8 }}>Q. {faq.q}</div>
                <div style={{ fontSize: 13, color: "#555", lineHeight: 1.8 }}>A. {faq.a}</div>
              </div>
            ))}
          </div>
        </div>

        {/* 他の年齢へのリンク */}
        <div style={{ background: "#fff", borderRadius: 18, padding: "28px 24px", marginBottom: 28, border: "1.5px solid #e8edf4", boxShadow: "0 2px 12px rgba(0,0,0,.05)" }}>
          <h2 style={{ fontSize: 16, fontWeight: 900, color: "#1B2A4A", marginBottom: 14 }}>他の年齢のダンス教室も見る</h2>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
            {[3, 4, 5, 6, 7, 8, 9, 10].map((a) => (
              <Link key={a} href={`/dance/age/${a}`} style={{
                padding: "8px 16px", borderRadius: 20,
                background: String(a) === String(age) ? "#E53935" : "#f8f9fb",
                color: String(a) === String(age) ? "#fff" : "#1B2A4A",
                border: String(a) === String(age) ? "none" : "1.5px solid #e8edf4",
                fontWeight: 700, fontSize: 13, textDecoration: "none"
              }}>
                {a}歳
              </Link>
            ))}
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
