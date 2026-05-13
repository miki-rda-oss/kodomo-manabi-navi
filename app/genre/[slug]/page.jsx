import Link from "next/link";
import { SchoolCard } from "./SchoolCard";

export function generateStaticParams() {
  return [
    { slug: "dance" }, { slug: "kpop" }, { slug: "swimming" }, { slug: "programming" },
    { slug: "soccer" }, { slug: "english" }, { slug: "piano" }, { slug: "ballet" },
    { slug: "karate" }, { slug: "rhythmics" }, { slug: "preschool" }, { slug: "juku" },
  ];
}

const SCHOOLS = {
  dance: [
    {
      id: "d1", name: "リディアダンスアカデミー", featured: true,
      rating: 4.8, reviews: 312, age: "3歳〜15歳", fee: "5,500円〜",
      location: "全国46校（関東・関西・中部）",
      desc: "現役プロダンサー講師100名以上在籍。初心者クラスから本格コースまで充実。ヒップホップ・ジャズ・K-POP・ブレイクダンスなど多ジャンル対応。",
      tags: ["初心者OK", "無料体験あり", "全国46校", "プロ講師", "少人数制"],
      genres: ["ヒップホップ", "ジャズ", "K-POP", "ブレイクダンス", "ポップ"],
      badge: "人気No.1", badgeColor: "#FF8A00",
    },
    {
      id: "d2", name: "EXPG（エグザイルプロフェッショナルジム）",
      rating: 4.7, reviews: 188, age: "4歳〜18歳", fee: "11,000円〜",
      location: "東京・大阪・名古屋・福岡など主要都市",
      desc: "EXILEが設立したプロフェッショナルダンススクール。業界トップレベルの講師陣が指導。オーディション対応コースあり。",
      tags: ["本格志向", "無料体験あり", "オーディション対応", "プロ講師"],
      genres: ["ヒップホップ", "ロック", "ハウス", "ワック", "クランプ"],
      badge: "本格派", badgeColor: "#E53935",
    },
    {
      id: "d3", name: "EYS-Kids ダンスアカデミー",
      rating: 4.5, reviews: 94, age: "2歳〜12歳", fee: "8,800円〜",
      location: "東京・神奈川・埼玉・大阪",
      desc: "子ども専門の音楽・ダンス教室。マンツーマンレッスンで一人ひとりのペースに合わせた指導。",
      tags: ["マンツーマン", "無料体験あり", "子ども専門", "振替制度充実"],
      genres: ["ヒップホップ", "チアダンス", "バレエジャズ"],
      badge: "マンツーマン", badgeColor: "#9C27B0",
    },
    {
      id: "d4", name: "セイハダンスアカデミー",
      rating: 4.4, reviews: 215, age: "2歳〜15歳", fee: "6,600円〜",
      location: "全国200校以上",
      desc: "パパイヤ鈴木氏監修のカリキュラム。発表会・コンクール実績豊富。少人数制で丁寧な指導。",
      tags: ["全国200校", "発表会あり", "少人数制", "初心者OK"],
      genres: ["ヒップホップ", "ジャズ", "チアダンス"],
      badge: "全国展開", badgeColor: "#4CAF50",
    },
    {
      id: "d5", name: "NOAダンスアカデミー",
      rating: 4.5, reviews: 127, age: "3歳〜18歳", fee: "7,700円〜",
      location: "東京・大阪・名古屋・仙台・札幌",
      desc: "プロダンサーへの登竜門として知られる名門スクール。振付師・アーティストを多数輩出。",
      tags: ["プロ輩出実績", "無料体験あり", "コンクール対応"],
      genres: ["ヒップホップ", "ジャズ", "K-POP", "ブレイクダンス"],
      badge: "実績豊富", badgeColor: "#1B2A4A",
    },
  ],
  kpop: [
    {
      id: "k1", name: "リディアダンスアカデミー", featured: true,
      rating: 4.8, reviews: 198, age: "3歳〜15歳", fee: "5,500円〜",
      location: "全国46校（関東・関西・中部）",
      desc: "K-POPダンスクラスが充実。最新の楽曲・振付を週替わりで取り入れ。プロ講師による丁寧な指導で初心者から上級者まで対応。",
      tags: ["初心者OK", "無料体験あり", "最新振付", "プロ講師", "全国46校"],
      genres: ["K-POP", "ヒップホップ", "ジャズ", "ポップ"],
      badge: "人気No.1", badgeColor: "#FF8A00",
    },
    {
      id: "k2", name: "NOAダンスアカデミー K-POPクラス",
      rating: 4.6, reviews: 143, age: "4歳〜18歳", fee: "8,800円〜",
      location: "東京・大阪・名古屋・仙台・札幌",
      desc: "K-POPに特化したクラスが充実。アイドルオーディション対策コースあり。最新曲をいち早くレッスンに導入。",
      tags: ["オーディション対応", "無料体験あり", "最新振付"],
      genres: ["K-POP", "アイドル振付"],
      badge: "オーディション対応", badgeColor: "#AB47BC",
    },
    {
      id: "k3", name: "K-STAGE ダンススタジオ",
      rating: 4.5, reviews: 76, age: "6歳〜20歳", fee: "9,900円〜",
      location: "東京・大阪・福岡",
      desc: "K-POP専門スタジオ。韓国人講師が在籍し、本場の雰囲気でレッスン。ガールズグループ・ボーイズグループ別クラスあり。",
      tags: ["韓国人講師", "無料体験あり", "グループ別クラス"],
      genres: ["K-POP", "ガールズグループ", "ボーイズグループ"],
      badge: "韓国人講師在籍", badgeColor: "#E91E63",
    },
    {
      id: "k4", name: "KPOP KIDS スタジオ",
      rating: 4.4, reviews: 52, age: "5歳〜12歳", fee: "7,700円〜",
      location: "東京・神奈川・大阪",
      desc: "子ども向けK-POPダンス専門教室。人気アイドルの振付を楽しく学べる。発表会・YouTube撮影会などイベント充実。",
      tags: ["子ども専門", "無料体験あり", "発表会あり", "撮影会"],
      genres: ["K-POP", "キッズアイドル"],
      badge: "子ども専門", badgeColor: "#0288D1",
    },
    {
      id: "k5", name: "J-POP・K-POP ダンスクラブ",
      rating: 4.3, reviews: 38, age: "8歳〜15歳", fee: "6,600円〜",
      location: "埼玉・千葉・神奈川",
      desc: "J-POPとK-POPの振付を幅広く学べる教室。仲間と一緒に楽しく踊ることを重視したアットホームな雰囲気。",
      tags: ["初心者OK", "アットホーム", "仲間づくり"],
      genres: ["K-POP", "J-POP"],
      badge: "アットホーム", badgeColor: "#4CAF50",
    },
  ],
  swimming: [
    {
      id: "s1", name: "コナミスポーツクラブ スイミング",
      rating: 4.5, reviews: 423, age: "6ヶ月〜15歳", fee: "7,700円〜",
      location: "全国250店舗以上",
      desc: "段階的な進級制度で着実にステップアップ。ベビースイミングから選手コースまで幅広く対応。安全・清潔な施設が人気。",
      tags: ["全国250店舗", "進級制度", "ベビーから対応", "清潔な施設"],
      genres: ["クロール", "背泳ぎ", "平泳ぎ", "バタフライ"],
      badge: "全国展開", badgeColor: "#0288D1",
    },
    {
      id: "s2", name: "セントラルスポーツ スイミング",
      rating: 4.4, reviews: 318, age: "4ヶ月〜15歳", fee: "7,150円〜",
      location: "全国180店舗以上",
      desc: "オリンピック選手を多数輩出した実績あるスクール。きめ細かい進級テストで泳力を着実に伸ばす。",
      tags: ["オリンピック実績", "進級テスト", "全国180店舗"],
      genres: ["4泳法", "個人メドレー", "選手育成"],
      badge: "オリンピック実績", badgeColor: "#FF8A00",
    },
    {
      id: "s3", name: "ルネサンス スイミング",
      rating: 4.4, reviews: 267, age: "6ヶ月〜", fee: "7,700円〜",
      location: "全国80店舗以上",
      desc: "楽しく安全に水に親しめるプログラム。コーチの質の高さに定評あり。親子でのビート板遊びから本格的な泳ぎ方まで。",
      tags: ["コーチの質", "無料体験あり", "親子クラス"],
      genres: ["クロール", "背泳ぎ", "平泳ぎ"],
      badge: "コーチの質◎", badgeColor: "#00897B",
    },
    {
      id: "s4", name: "イトマンスイミングスクール",
      rating: 4.5, reviews: 189, age: "3ヶ月〜", fee: "6,600円〜",
      location: "関東・関西・中部を中心に展開",
      desc: "水泳の基礎から応用まで丁寧に指導。チームワークを大切にした指導方針。選手コースでは全国大会出場者も輩出。",
      tags: ["選手育成実績", "チームワーク重視", "無料体験あり"],
      genres: ["4泳法", "スタート・ターン", "選手育成"],
      badge: "選手育成◎", badgeColor: "#E91E63",
    },
    {
      id: "s5", name: "ルネサンス ベビースイミング",
      rating: 4.3, reviews: 134, age: "6ヶ月〜3歳", fee: "5,500円〜",
      location: "全国80店舗以上",
      desc: "0歳から始められるベビースイミング専門クラス。親子で水に慣れることを重視。水難防止・運動機能の発達に効果的。",
      tags: ["ベビー専門", "親子参加", "水難防止", "無料体験あり"],
      genres: ["ベビースイミング", "親子スイミング"],
      badge: "ベビー特化", badgeColor: "#9C27B0",
    },
  ],
  programming: [
    {
      id: "p1", name: "LITALICOワンダー", featured: true,
      rating: 4.7, reviews: 284, age: "5歳〜15歳", fee: "15,400円〜",
      location: "東京・神奈川・大阪・愛知など全国展開",
      desc: "ITやものづくりを通じて創造力・論理的思考を育む。Scratch・Python・Unityなど多彩なカリキュラム。個性を大切にした少人数制指導。",
      tags: ["少人数制", "無料体験あり", "Scratch", "Python", "ゲーム制作"],
      genres: ["Scratch", "Python", "Unity", "ゲーム制作", "ロボット"],
      badge: "人気No.1", badgeColor: "#FF8A00",
    },
    {
      id: "p2", name: "Tech Kids School（CyberAgent）",
      rating: 4.6, reviews: 176, age: "小学1年〜中学3年", fee: "16,500円〜",
      location: "東京・大阪・名古屋・福岡・オンライン",
      desc: "サイバーエージェントが運営するプログラミングスクール。ゲーム・アプリ・Webサービス開発を実践的に学べる。",
      tags: ["IT企業直営", "ゲーム制作", "アプリ開発", "無料体験あり"],
      genres: ["Scratch", "Swift", "Unity", "HTML/CSS"],
      badge: "IT企業直営", badgeColor: "#1B2A4A",
    },
    {
      id: "p3", name: "D-SCHOOL キッズ",
      rating: 4.4, reviews: 118, age: "7歳〜15歳", fee: "9,900円〜",
      location: "全国100校以上・オンライン対応",
      desc: "Minecraftを使ったプログラミング学習が人気。楽しみながら自然にプログラミング的思考が身につく。",
      tags: ["Minecraft", "無料体験あり", "オンライン対応", "全国100校"],
      genres: ["Scratch", "Minecraft", "Python"],
      badge: "Minecraft使用", badgeColor: "#4CAF50",
    },
    {
      id: "p4", name: "プロクラ（Procla）",
      rating: 4.4, reviews: 92, age: "小学1年〜中学3年", fee: "11,000円〜",
      location: "全国150校以上・オンライン対応",
      desc: "マインクラフトを教材に使うプログラミング教室。自分でゲームを作る楽しさを通じて主体性と思考力を育む。",
      tags: ["Minecraft教材", "無料体験あり", "主体性重視", "オンライン対応"],
      genres: ["Scratch", "Minecraft", "プログラミング思考"],
      badge: "全国150校", badgeColor: "#9C27B0",
    },
    {
      id: "p5", name: "コードキャンプ KIDS",
      rating: 4.3, reviews: 67, age: "小学3年〜中学3年", fee: "13,200円〜",
      location: "オンライン完結（全国対応）",
      desc: "完全オンラインで全国どこからでも受講可能。マンツーマンレッスンで個人のペースで学べる。自由研究や学校の課題にも対応。",
      tags: ["完全オンライン", "マンツーマン", "無料体験あり", "自由研究対応"],
      genres: ["Scratch", "Python", "HTML/CSS", "JavaScript"],
      badge: "完全オンライン", badgeColor: "#0288D1",
    },
  ],
};

const GENRE_META = {
  dance:       { name: "ダンス",        icon: "💃", color: "#FF6B6B", bg: "linear-gradient(135deg, #FF6B6B 0%, #FF8E53 100%)", desc: "リズム感・表現力・協調性を育む", count: "2,800+" },
  kpop:        { name: "K-POP",         icon: "💜", color: "#AB47BC", bg: "linear-gradient(135deg, #AB47BC 0%, #7B1FA2 100%)", desc: "リズム感・表現力・自信を育む",   count: "800+" },
  swimming:    { name: "スイミング",     icon: "🏊", color: "#0288D1", bg: "linear-gradient(135deg, #0288D1 0%, #00BCD4 100%)", desc: "体力・心肺機能・水難防止を育む", count: "2,500+" },
  programming: { name: "プログラミング", icon: "💻", color: "#00897B", bg: "linear-gradient(135deg, #00897B 0%, #00BCD4 100%)", desc: "論理的思考・創造力・問題解決力を育む", count: "1,800+" },
  soccer:      { name: "サッカー",       icon: "⚽", color: "#4CAF50", bg: "linear-gradient(135deg, #43A047 0%, #1B5E20 100%)", desc: "体力・判断力・チームワークを育む", count: "3,200+" },
  english:     { name: "英語・英会話",   icon: "🌍", color: "#FF8A00", bg: "linear-gradient(135deg, #FF8A00 0%, #FFB347 100%)", desc: "リスニング・発音・異文化理解を育む", count: "4,500+" },
  piano:       { name: "ピアノ",         icon: "🎹", color: "#9C27B0", bg: "linear-gradient(135deg, #7B1FA2 0%, #AB47BC 100%)", desc: "音感・集中力・表現力を育む",     count: "3,800+" },
  ballet:      { name: "バレエ",         icon: "🩰", color: "#E91E63", bg: "linear-gradient(135deg, #E91E63 0%, #C2185B 100%)", desc: "柔軟性・姿勢・美的感覚を育む",   count: "1,600+" },
  karate:      { name: "空手",           icon: "🥋", color: "#795548", bg: "linear-gradient(135deg, #795548 0%, #4E342E 100%)", desc: "礼儀・忍耐力・精神力を育む",     count: "1,200+" },
  rhythmics:   { name: "リトミック",     icon: "🎵", color: "#FF7043", bg: "linear-gradient(135deg, #FF7043 0%, #E64A19 100%)", desc: "リズム感・感性・社会性を育む",   count: "900+" },
  preschool:   { name: "幼児教室",       icon: "🧒", color: "#FF8A65", bg: "linear-gradient(135deg, #FF8A65 0%, #FF7043 100%)", desc: "記憶力・思考力・言語力を育む",   count: "1,100+" },
  juku:        { name: "学習塾",         icon: "📝", color: "#1B2A4A", bg: "linear-gradient(135deg, #1B2A4A 0%, #243a60 100%)", desc: "基礎学力・思考力・受験対策",     count: "5,200+" },
};

export default function GenrePage({ params }) {
  const { slug } = params;
  const genre = GENRE_META[slug];
  const schools = SCHOOLS[slug] || [];

  if (!genre) {
    return (
      <div style={{ fontFamily: "'Noto Sans JP',sans-serif", minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column", gap: 16 }}>
        <div style={{ fontSize: 48 }}>🔍</div>
        <div style={{ fontSize: 18, fontWeight: 700, color: "#1B2A4A" }}>ページが見つかりません</div>
        <Link href="/" style={{ color: "#FF8A00", fontWeight: 700 }}>← トップへ戻る</Link>
      </div>
    );
  }

  return (
    <div style={{ fontFamily: "'Noto Sans JP','Hiragino Sans',sans-serif", background: "#f4f7fc", minHeight: "100vh" }}>

      {/* Header */}
      <header style={{ background: "#fff", borderBottom: "1px solid #e8edf4", position: "sticky", top: 0, zIndex: 100, boxShadow: "0 2px 8px rgba(0,0,0,.05)" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 24px", display: "flex", alignItems: "center", gap: 10, height: 56 }}>
          <Link href="/" style={{ display: "flex", alignItems: "center", gap: 8, textDecoration: "none" }}>
            <div style={{ width: 32, height: 32, borderRadius: 9, background: "linear-gradient(135deg, #FF8A00, #FFB347)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 16 }}>🧒</div>
            <span style={{ fontSize: 15, fontWeight: 900, color: "#1B2A4A" }}>コドモならいごと</span>
          </Link>
          <span style={{ color: "#ddd" }}>›</span>
          <span style={{ fontSize: 13, color: "#888", fontWeight: 600 }}>{genre.name}</span>
        </div>
      </header>

      {/* Hero */}
      <section style={{ background: genre.bg, padding: "44px 24px 40px", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", top: -20, right: -20, fontSize: 160, opacity: .07, lineHeight: 1 }}>{genre.icon}</div>
        <div style={{ maxWidth: 1100, margin: "0 auto", position: "relative", zIndex: 1 }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 6, background: "rgba(255,255,255,.2)", borderRadius: 20, padding: "4px 14px", marginBottom: 14, fontSize: 12, color: "#fff", fontWeight: 700 }}>
            習い事ジャンル
          </div>
          <h1 style={{ fontSize: 28, fontWeight: 900, color: "#fff", marginBottom: 8, textShadow: "0 2px 12px rgba(0,0,0,.15)" }}>
            {genre.icon} {genre.name}教室を探す
          </h1>
          <p style={{ fontSize: 13, color: "rgba(255,255,255,.9)", marginBottom: 20 }}>{genre.desc}</p>
          <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
            {[
              { val: genre.count, label: "全国の教室数" },
              { val: `${schools.length}件`, label: "掲載中" },
              { val: "無料体験", label: "申込受付中" },
            ].map((s, i) => (
              <div key={i} style={{ background: "rgba(255,255,255,.2)", backdropFilter: "blur(8px)", borderRadius: 12, padding: "8px 16px", border: "1px solid rgba(255,255,255,.3)" }}>
                <div style={{ fontSize: 16, fontWeight: 900, color: "#fff" }}>{s.val}</div>
                <div style={{ fontSize: 10, color: "rgba(255,255,255,.8)" }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Content */}
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "36px 24px" }}>
        {schools.length > 0 ? (
          <>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 20, flexWrap: "wrap", gap: 10 }}>
              <div>
                <div style={{ display: "inline-block", background: "#fff7ee", borderRadius: 6, padding: "3px 12px", fontSize: 11, fontWeight: 700, color: "#FF8A00", marginBottom: 6, letterSpacing: ".5px" }}>SCHOOLS</div>
                <h2 style={{ fontSize: 20, fontWeight: 900, color: "#1B2A4A" }}>{genre.name}教室 一覧（{schools.length}件）</h2>
              </div>
              <div style={{ fontSize: 12, color: "#888" }}>※ 掲載情報は順次更新しています</div>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))", gap: 16 }}>
              {schools.map(s => (
                <SchoolCard key={s.id} school={s} color={genre.color} />
              ))}
            </div>
          </>
        ) : (
          <div style={{ background: "#fff", borderRadius: 18, padding: "40px 24px", textAlign: "center", border: "1.5px dashed #e0eaf4" }}>
            <div style={{ fontSize: 40, marginBottom: 12 }}>🚧</div>
            <div style={{ fontSize: 16, fontWeight: 800, color: "#1B2A4A", marginBottom: 6 }}>教室情報を準備中です</div>
            <p style={{ fontSize: 13, color: "#888", lineHeight: 1.8 }}>
              {genre.name}教室の詳細情報・口コミ・料金比較ページを順次公開予定です。
            </p>
          </div>
        )}

        <div style={{ marginTop: 40, textAlign: "center" }}>
          <Link href="/" style={{ display: "inline-flex", alignItems: "center", gap: 6, padding: "12px 28px", background: "#fff", border: "1.5px solid #e8edf4", borderRadius: 20, color: "#1B2A4A", fontWeight: 700, fontSize: 14, textDecoration: "none", boxShadow: "0 2px 8px rgba(0,0,0,.05)" }}>
            ← トップページへ戻る
          </Link>
        </div>
      </div>
    </div>
  );
}
