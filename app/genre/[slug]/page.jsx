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
      location: "全国100校以上（関東・関西・中部）",
      desc: "現役プロダンサー講師200名以上在籍。初心者クラスから本格コースまで充実。ヒップホップ・ジャズ・K-POP・ブレイクダンスなど多ジャンル対応。",
      tags: ["初心者OK", "無料体験あり", "全国100校以上", "プロ講師", "少人数制"],
      genres: ["ヒップホップ", "ジャズ", "K-POP", "ブレイクダンス", "ポップ"],
      badge: "人気No.1", badgeColor: "#FF8A00", url: "https://re-dia.jp/",
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
      location: "全国100校以上（関東・関西・中部）",
      desc: "K-POPダンスクラスが充実。最新の楽曲・振付を週替わりで取り入れ。プロ講師による丁寧な指導で初心者から上級者まで対応。",
      tags: ["初心者OK", "無料体験あり", "最新振付", "プロ講師", "全国100校以上"],
      genres: ["K-POP", "ヒップホップ", "ジャズ", "ポップ"],
      badge: "人気No.1", badgeColor: "#FF8A00", url: "https://re-dia.jp/",
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
  dance:       { name: "ダンス",        icon: "💃", color: "#FF6B6B", bg: "linear-gradient(135deg, #FF6B6B 0%, #FF8E53 100%)", desc: "リズム感・表現力・協調性を育む", count: "2,800+", longDesc: "K-POPブーム・中学校ダンス必修化・ブレイクダンスのオリンピック競技化を背景に、2026年にダンスが子供の習い事総合1位を獲得しました。脳科学研究でも海馬・前頭葉・小脳を同時に活性化する最も効果的な活動として注目されています。表現力・リズム感・自己肯定感を同時に育てられ、3歳から始められる間口の広さも人気の理由です。" },
  kpop:        { name: "K-POP",         icon: "💜", color: "#AB47BC", bg: "linear-gradient(135deg, #AB47BC 0%, #7B1FA2 100%)", desc: "リズム感・表現力・自信を育む",   count: "800+",   longDesc: "K-POPダンスは全身を使った表現力とリズム感を育みます。アイドルの振り付けを通じて目標を持ちながら練習する姿勢が自己肯定感アップにつながります。韓国文化への興味から語学学習へ発展するケースも多く、グローバルな感性を育てる習い事として人気が急増しています。" },
  swimming:    { name: "スイミング",     icon: "🏊", color: "#0288D1", bg: "linear-gradient(135deg, #0288D1 0%, #00BCD4 100%)", desc: "体力・心肺機能・水難防止を育む", count: "2,500+", longDesc: "スイミングは全身を使う有酸素運動のため、心肺機能の向上・体力増進に優れています。水難防止の観点からも「泳げること」は子どもの安全に直結します。喘息改善・姿勢矯正・集中力向上など、健康面での多彩なメリットが保護者から支持され、習い事の定番として長年高い人気を誇ります。" },
  programming: { name: "プログラミング", icon: "💻", color: "#00897B", bg: "linear-gradient(135deg, #00897B 0%, #00BCD4 100%)", desc: "論理的思考・創造力・問題解決力を育む", count: "1,800+", longDesc: "2020年の小学校必修化以降、プログラミング教育への関心が一気に高まりました。ScratchやPythonを通じてゲーム・アプリを自分で作る体験が、子どもの論理的思考力・問題解決力・創造力を鍛えます。AI時代に必須のデジタルリテラシーを幼少期から身につけられる点が、親世代から高く評価されています。" },
  soccer:      { name: "サッカー",       icon: "⚽", color: "#4CAF50", bg: "linear-gradient(135deg, #43A047 0%, #1B5E20 100%)", desc: "体力・判断力・チームワークを育む", count: "3,200+", longDesc: "サッカーは世界で最も人気のあるスポーツで、日本でも子供の習い事として根強い人気があります。瞬時の判断力・体力・チームワーク・コミュニケーション能力を同時に育てられます。Jリーグクラブが運営するスクールも全国に展開しており、夢を持ちながら本格的に学べる環境が整っています。" },
  english:     { name: "英語・英会話",   icon: "🌍", color: "#FF8A00", bg: "linear-gradient(135deg, #FF8A00 0%, #FFB347 100%)", desc: "リスニング・発音・異文化理解を育む", count: "4,500+", longDesc: "英語は幼少期に学ぶほど発音・リスニング力が自然に身につくといわれています。グローバル化が加速する現代では、英語力は将来の選択肢を大きく広げる重要スキルです。オンラインレッスンの普及で費用・通いやすさの面でも選びやすくなり、習い事の中でも特に需要が高まっています。" },
  piano:       { name: "ピアノ",         icon: "🎹", color: "#9C27B0", bg: "linear-gradient(135deg, #7B1FA2 0%, #AB47BC 100%)", desc: "音感・集中力・表現力を育む",     count: "3,800+", longDesc: "ピアノは両手を独立して動かす動作が脳の左右両半球を同時に刺激し、集中力・記憶力・表現力の向上に効果的とする研究が多くあります。幼少期からの音楽教育は感性を豊かにし、学習全般にもよい影響をもたらします。発表会に向けて努力する経験が達成感と自信につながる習い事です。" },
  ballet:      { name: "バレエ",         icon: "🩰", color: "#E91E63", bg: "linear-gradient(135deg, #E91E63 0%, #C2185B 100%)", desc: "柔軟性・姿勢・美的感覚を育む",   count: "1,600+", longDesc: "バレエは美しい姿勢・柔軟性・バランス感覚を育てるだけでなく、礼儀作法や集中力、音楽に合わせた表現力も磨かれます。幼少期からの訓練が身体の使い方を根本から変え、他のスポーツや日常生活にもプラスの影響をもたらします。衣装や発表会を通じた非日常体験が子どもの情操教育にも役立ちます。" },
  karate:      { name: "空手",           icon: "🥋", color: "#795548", bg: "linear-gradient(135deg, #795548 0%, #4E342E 100%)", desc: "礼儀・忍耐力・精神力を育む",     count: "1,200+", longDesc: "空手は「礼に始まり礼に終わる」武道の精神を通じて、礼儀・集中力・忍耐力・精神力を育てます。護身術としての側面もあり、子どもの安全意識を高める効果もあります。帯の色が上がるごとに成長を実感できる段階的な進級制度が、子どもの達成感とモチベーション維持につながります。" },
  rhythmics:   { name: "リトミック",     icon: "🎵", color: "#FF7043", bg: "linear-gradient(135deg, #FF7043 0%, #E64A19 100%)", desc: "リズム感・感性・社会性を育む",   count: "900+",   longDesc: "リトミックはスイスの音楽教育家ダルクローズが創案した音楽教育メソッドで、音楽に合わせて体を動かすことで音感・リズム感・感性・社会性を自然に育てます。0〜3歳の脳が最も柔軟な時期に音楽体験を積むことで、その後のピアノ・ダンス・スポーツ学習の土台となる豊かな感受性が培われます。" },
  preschool:   { name: "幼児教室",       icon: "🧒", color: "#FF8A65", bg: "linear-gradient(135deg, #FF8A65 0%, #FF7043 100%)", desc: "記憶力・思考力・言語力を育む",   count: "1,100+", longDesc: "幼児期（0〜6歳）は脳の神経回路が最も発達する黄金期です。この時期の適切な知的刺激が記憶力・思考力・言語力・集中力の発達に大きく寄与するとされています。七田式・モンテッソーリ・公文式など各種メソッドに基づいたカリキュラムで、小学校入学後の学習習慣の基礎を楽しみながら作れます。" },
  juku:        { name: "学習塾",         icon: "📝", color: "#1B2A4A", bg: "linear-gradient(135deg, #1B2A4A 0%, #243a60 100%)", desc: "基礎学力・思考力・受験対策",     count: "5,200+", longDesc: "学習塾は小学校の授業の補完から中学受験対策まで、目的に応じた幅広い選択肢があります。公文式・学研教室のような自学自習型から、難関校対策の進学塾まで多様です。早期から学習習慣をつけることで、基礎学力の定着・思考力の向上・受験対策における余裕が生まれます。" },
};

const GENRE_BLOG_LINKS = {
  dance: [
    { href: "/blog/osaka-kids-dance-school-ranking", text: "大阪のキッズダンス教室おすすめ10選" },
    { href: "/blog/kids-dance-age-guide", text: "何歳からダンスを習う？完全ガイド" },
    { href: "/blog/kids-hiphop-dance-guide", text: "ヒップホップダンス教室の選び方" },
    { href: "/blog/kanto-kids-dance-school-ranking", text: "関東のキッズダンス教室おすすめ10選" },
    { href: "/blog/lydia-dance-academy-review", text: "リディアダンスアカデミー口コミ・料金" },
    { href: "/blog/kids-dance-benefits-brain", text: "ダンスが子供の脳に与える7つのメリット" },
    { href: "/blog/dance-cost-breakdown", text: "ダンス教室の月謝・費用相場完全解説" },
    { href: "/blog/boys-dance-school-guide", text: "男の子のダンス教室選び方ガイド" },
    { href: "/blog/kids-dance-school-trial-guide", text: "体験レッスンで確認すべき10のポイント" },
  ],
  kpop: [
    { href: "/blog/kids-kpop-dance-school", text: "K-POPダンスを子供に習わせたい！選び方ガイド" },
    { href: "/blog/kids-dance-age-guide", text: "何歳からK-POPダンスを習う？" },
    { href: "/blog/osaka-kids-dance-school-ranking", text: "大阪のダンス教室ランキング" },
    { href: "/blog/kanto-kids-dance-school-ranking", text: "関東のダンス教室ランキング" },
  ],
  swimming: [
    { href: "/blog/kids-swimming-guide", text: "子供スイミング教室の選び方完全ガイド" },
    { href: "/blog/kids-multiple-activities-dance", text: "習い事を複数させるときのポイント" },
    { href: "/blog/kids-activities-how-many", text: "子供の習い事は何個まで？" },
  ],
  programming: [
    { href: "/blog/kids-activities-how-many", text: "子供の習い事は何個まで？" },
    { href: "/blog/kids-multiple-activities-dance", text: "習い事を複数させるときのポイント" },
  ],
  soccer: [
    { href: "/blog/kids-activities-how-many", text: "子供の習い事は何個まで？" },
    { href: "/blog/kids-dance-benefits-brain", text: "体を動かす習い事のメリット" },
    { href: "/blog/osaka-kids-activity-ranking", text: "大阪の子供習い事ランキング" },
  ],
  english: [
    { href: "/blog/kids-english-guide", text: "子供の英語教室の選び方完全ガイド" },
    { href: "/blog/kids-multiple-activities-dance", text: "習い事を複数させるときのポイント" },
    { href: "/blog/kids-activities-how-many", text: "子供の習い事は何個まで？" },
  ],
  piano: [
    { href: "/blog/kids-piano-guide", text: "子供のピアノ教室の選び方完全ガイド" },
    { href: "/blog/toddler-dance-rhythmics-guide", text: "リトミックとダンスどちらを選ぶ？" },
    { href: "/blog/kids-activities-how-many", text: "子供の習い事は何個まで？" },
  ],
  ballet: [
    { href: "/blog/dance-vs-ballet-kids", text: "ダンスとバレエどちらを習わせる？" },
    { href: "/blog/kids-karate-ballet-guide", text: "子供にバレエを習わせたい！選び方と費用" },
    { href: "/blog/kids-dance-age-guide", text: "何歳から習い事を始める？" },
  ],
  karate: [
    { href: "/blog/kids-karate-ballet-guide", text: "子供に空手を習わせたい！選び方と費用" },
    { href: "/blog/kids-dance-benefits-brain", text: "習い事が子供に与えるメリット" },
    { href: "/blog/kids-activities-how-many", text: "子供の習い事は何個まで？" },
  ],
  rhythmics: [
    { href: "/blog/toddler-dance-rhythmics-guide", text: "リトミックとダンス、幼児はどちらを選ぶ？" },
    { href: "/blog/kids-dance-age-guide", text: "何歳から習い事を始める？" },
    { href: "/blog/kids-piano-guide", text: "子供のピアノ教室の選び方" },
  ],
  preschool: [
    { href: "/blog/toddler-dance-rhythmics-guide", text: "幼児向け習い事の選び方ガイド" },
    { href: "/blog/kids-dance-age-guide", text: "何歳から習い事を始める？" },
    { href: "/blog/kids-activities-how-many", text: "子供の習い事は何個まで？" },
  ],
  juku: [
    { href: "/blog/kids-activities-how-many", text: "子供の習い事は何個まで？" },
    { href: "/blog/kids-multiple-activities-dance", text: "習い事を複数させるときのポイント" },
  ],
};

const GENRE_FAQ = {
  dance: [
    { q: "子どものダンス教室はいつから通えますか？", a: "多くの教室では2〜3歳から通えるリトルクラスを設けています。まずは無料体験レッスンで雰囲気を確認するのがおすすめです。" },
    { q: "ダンス教室の月謝の相場はいくらですか？", a: "子ども向けダンス教室の月謝は5,000〜12,000円程度が一般的です。週1回のクラスで5,500円〜、受け放題プランは20,000円台のところもあります。" },
    { q: "習い事にダンスを選ぶメリットは何ですか？", a: "リズム感・表現力・協調性が身につきます。また、身体を動かすことで体力・柔軟性も向上し、発表会などで自信もつきます。" },
    { q: "男の子でもダンスを習えますか？", a: "もちろんです。ヒップホップやブレイクダンスは特に男の子に人気が高く、多くの教室で男女問わず楽しめるクラスを用意しています。" },
  ],
  kpop: [
    { q: "K-POPダンスは何歳から習えますか？", a: "多くの教室では5歳頃から対応しています。K-POPの動きはリズム感が重要なため、ある程度の年齢からが理想ですが、教室によって異なります。" },
    { q: "K-POPダンス教室の費用はどのくらいですか？", a: "月謝は8,000〜15,000円程度が相場です。グループレッスンとプライベートレッスンで大きく異なります。" },
    { q: "K-POPダンスを習う効果は何ですか？", a: "リズム感・表現力・自信が身につきます。また、韓国文化への興味から語学学習につながるケースも多いです。" },
    { q: "発表会はありますか？", a: "多くの教室で年1〜2回の発表会を開催しています。舞台に立つ経験は子どもの自信と成長につながります。" },
  ],
  swimming: [
    { q: "スイミングは何歳から始められますか？", a: "ベビースイミングは生後6ヶ月頃から対応している教室もあります。一般的なキッズクラスは3〜4歳からが多いです。" },
    { q: "スイミングスクールの月謝はいくらですか？", a: "週1回で6,000〜10,000円程度が相場です。施設によってプール設備や指導レベルが異なります。" },
    { q: "スイミングを習うメリットは何ですか？", a: "全身運動で体力・心肺機能が向上します。水難防止の観点からも安全面で重要で、姿勢改善や喘息改善にも効果があるとされています。" },
    { q: "進級制度はありますか？", a: "ほとんどのスイミングスクールでは段階的な進級制度があります。バタ足→クロール→背泳ぎ→平泳ぎ→バタフライの順で上達を実感できます。" },
  ],
  programming: [
    { q: "プログラミング教室は何歳から通えますか？", a: "ビジュアルプログラミング（Scratchなど）を使う教室では5〜6歳から対応しています。本格的なテキストコーディングは小学校高学年〜が多いです。" },
    { q: "プログラミング教室の月謝はいくらですか？", a: "月謝は8,000〜20,000円程度と幅があります。週1回通塾タイプと、オンライン受講タイプで費用が異なります。" },
    { q: "プログラミングを習う意味はありますか？", a: "論理的思考力・問題解決力・創造力が育ちます。2020年から小学校でプログラミング教育が必修化されており、将来のデジタル社会への対応力が身につきます。" },
    { q: "パソコンを持っていなくても通えますか？", a: "多くの教室では教室内のパソコンを使用するため、自宅にパソコンがなくても問題ありません。オンライン教室の場合は自宅のPC・タブレットが必要です。" },
  ],
  soccer: [
    { q: "子どものサッカー教室は何歳から通えますか？", a: "3〜4歳から通えるキッズクラスを設けているスクールが多いです。Jリーグ系スクールも幼児コースを充実させています。" },
    { q: "サッカー教室の月謝はいくらですか？", a: "週1回で3,000〜8,000円程度が一般的です。Jリーグ系スクールは6,000〜8,000円台が多いです。" },
    { q: "サッカーを習うと子供にどんな効果がありますか？", a: "体力・瞬発力・判断力・協調性が育ちます。チームスポーツのため仲間と協力する精神も自然に身につきます。" },
    { q: "女の子もサッカーを習えますか？", a: "もちろんです。女子サッカーへの関心も高まっており、女の子向けクラスを設けているスクールも増えています。" },
  ],
  english: [
    { q: "英会話教室は何歳から通えますか？", a: "1歳半から通えるベビー・幼児クラスを設けているスクールがあります。本格的なコース学習は3〜4歳から始めるのが一般的です。" },
    { q: "英語教室の月謝はいくらですか？", a: "週1回で8,000〜15,000円が相場です。外国人ネイティブ講師のいる教室は高め、バイリンガル講師中心の教室は比較的リーズナブルです。" },
    { q: "英語を幼少期から習う効果は？", a: "発音・リスニング力は幼少期からの習得が効果的とされています。英語への抵抗感がなくなり、グローバル社会への自信につながります。" },
    { q: "英検対策もできますか？", a: "小学生対象の英検3〜5級対策コースを設けているスクールが多数あります。体験レッスン時に確認しましょう。" },
  ],
  piano: [
    { q: "ピアノは何歳から始めるのがいいですか？", a: "3〜4歳が始めどきとされています。ヤマハ・カワイは1歳から親子コースを設けています。" },
    { q: "ピアノ教室の月謝はいくらですか？", a: "個人レッスンで7,000〜12,000円、グループレッスンで5,000〜8,000円が相場です。" },
    { q: "家にピアノがないと習えませんか？", a: "最初は電子ピアノや61鍵キーボード（10,000〜30,000円程度）で十分です。上達してきたらアコースティックピアノへの買い替えを検討しましょう。" },
    { q: "ピアノを習うと頭が良くなりますか？", a: "両手を別々に動かすピアノは脳の左右両方を刺激します。集中力・記憶力・表現力の向上に効果的とする研究が多くあります。" },
  ],
  ballet: [
    { q: "バレエは何歳から習えますか？", a: "多くの教室は3歳から受け付けています。3〜4歳のクラスはプレバレエとして音楽に合わせて体を動かすことを中心に行います。" },
    { q: "バレエ教室の月謝はいくらですか？", a: "週1回で6,000〜12,000円が相場です。発表会費用（衣装代含む）が年間3〜10万円かかる場合があります。" },
    { q: "バレエを習うとどんな効果がありますか？", a: "美しい姿勢・柔軟性・バランス感覚が身につきます。礼儀作法・集中力・自己表現力も育まれます。" },
    { q: "男の子もバレエを習えますか？", a: "はい。男の子向けのバレエクラスも増えています。バレエで培った体幹・バランス感覚はスポーツ全般に活かせます。" },
  ],
  karate: [
    { q: "空手は何歳から習えますか？", a: "多くの道場は3〜4歳からの幼年部クラスを設けています。礼儀作法を学べるため、早い時期から始めることを推奨する道場が多いです。" },
    { q: "空手道場の月謝はいくらですか？", a: "週1〜2回で5,000〜8,000円が相場です。道着代が別途5,000〜10,000円ほどかかります。" },
    { q: "空手を習うと喧嘩っ早くなりますか？", a: "反対です。空手は礼儀・規律を最重視する武道です。「礼に始まり礼に終わる」精神が日常生活にも活かされます。" },
    { q: "女の子でも空手を習えますか？", a: "はい。護身術としての側面や、集中力・精神力を育む効果から女の子にも人気が高まっています。" },
  ],
  rhythmics: [
    { q: "リトミックは何歳から始められますか？", a: "0歳（生後3ヶ月〜）から通えるベビーリトミックを設けている教室もあります。最も多いのは1〜3歳から始めるケースです。" },
    { q: "リトミックの月謝はいくらですか？", a: "4,000〜7,000円程度が相場です。" },
    { q: "リトミックとダンスの違いは何ですか？", a: "リトミックは音楽教育メソッドの一つで、音楽に反応して体を動かすことで感性を育てます。ダンスは振り付けや技術の習得を目的とします。幼児はリトミックから始めてダンスに移行するケースが多いです。" },
    { q: "リトミックでどんな力が育ちますか？", a: "リズム感・音楽感覚・表現力が育ちます。後のダンス・ピアノ学習にも良い基礎となります。" },
  ],
  preschool: [
    { q: "幼児教室は何歳から通えますか？", a: "0歳（生後2ヶ月〜）から通えるベビーコースを設けているスクールがあります。七田式・ベビーパークが0〜1歳からのコースを充実させています。" },
    { q: "幼児教室の月謝はいくらですか？", a: "10,000〜20,000円程度が相場です。幼児教室は他の習い事と比べて月謝が高めです。" },
    { q: "幼児教室に通うと頭が良くなりますか？", a: "脳の発達が最も活発な0〜6歳に適切な刺激を与えることは、知的発達に効果的とされています。遊びを通じた自然な学びが大切です。" },
    { q: "保育園・幼稚園との両立はできますか？", a: "多くの幼児教室が週1回・45〜60分のクラスを設けており、保育園・幼稚園との両立が一般的です。" },
  ],
  juku: [
    { q: "学習塾は何歳から通えますか？", a: "公文式・学研教室は3歳から通えます。中学受験を目指す進学塾は小学1〜3年からの入塾が一般的です。" },
    { q: "学習塾の月謝はいくらですか？", a: "公文式・学研は7,000〜9,000円程度、中学受験対応の進学塾は20,000〜50,000円以上と幅があります。" },
    { q: "公文式と学研教室の違いは何ですか？", a: "公文式は自学自習でプリント学習で先取りを進めます。学研教室は理解を重視し、学校の授業に沿ったカリキュラムが特徴です。" },
    { q: "小学生から学習塾に通う必要がありますか？", a: "中学受験を考えているなら小学3〜4年から準備を始めるのが一般的です。まずは本人の学習への姿勢を確認してから検討しましょう。" },
  ],
  default: [
    { q: "子どもの習い事はいつから始めるのがいいですか？", a: "習い事の種類によりますが、一般的には3〜5歳頃から始める方が多いです。本人が興味を持ったタイミングが最適です。まずは無料体験で試してみましょう。" },
    { q: "習い事の月謝の相場はいくらですか？", a: "習い事の種類によって異なりますが、月5,000〜15,000円程度が一般的な相場です。入会金や教材費が別途かかる場合もあります。" },
    { q: "無料体験はできますか？", a: "掲載している多くの教室では無料体験レッスンを実施しています。入会前に雰囲気や指導スタイルを確認できるので、ぜひ体験してみてください。" },
    { q: "習い事は何個まで掛け持ちできますか？", a: "子どもの体力・集中力に合わせて週2〜3個程度が一般的です。本人の意欲を大切にしながら無理のないペースで進めましょう。" },
  ],
};

const BASE_URL = 'https://www.kodomo-navi.com';

export async function generateMetadata({ params }) {
  const { slug } = params;
  const genre = GENRE_META[slug];
  if (!genre) return {};
  if (slug === 'dance') {
    return {
      title: '【2026年習い事1位】子供のダンス教室おすすめ比較｜コドモならいごと',
      description: '2026年子供の習い事ランキング1位のダンス。キッズダンス教室の選び方・費用・年齢・おすすめ教室をエリア別に比較。リディア・EXPG・セイハなど全国人気教室を徹底比較します。',
      alternates: { canonical: `${BASE_URL}/genre/dance` },
      openGraph: {
        title: '【2026年習い事1位】子供のダンス教室おすすめ比較｜コドモならいごと',
        description: '2026年子供の習い事ランキング1位のダンス。キッズダンス教室の選び方・費用・年齢・おすすめ教室をエリア別に比較。',
        url: `${BASE_URL}/genre/dance`,
        siteName: 'コドモならいごと',
        type: 'website',
        locale: 'ja_JP',
      },
      twitter: {
        card: 'summary_large_image',
        title: '【2026年習い事1位】子供のダンス教室おすすめ比較｜コドモならいごと',
        description: '2026年子供の習い事ランキング1位のダンス。全国のキッズダンス教室を徹底比較。',
      },
    };
  }
  return {
    title: `子供の${genre.name}教室おすすめ${genre.count}件｜口コミ・料金比較【コドモならいごと】`,
    description: `全国の子ども向け${genre.name}教室を口コミ・料金・体験情報で比較。${genre.desc}。無料体験申込みも簡単。`,
    keywords: [`子供`, `${genre.name}`, `習い事`, `教室`, `おすすめ`, `比較`, `料金`, `口コミ`, `無料体験`],
    alternates: { canonical: `${BASE_URL}/genre/${slug}` },
    openGraph: {
      title: `子供の${genre.name}教室おすすめ${genre.count}件｜コドモならいごと`,
      description: `全国の子ども向け${genre.name}教室を口コミ・料金で比較。${genre.desc}。`,
      url: `${BASE_URL}/genre/${slug}`,
      siteName: 'コドモならいごと',
      type: 'website',
      locale: 'ja_JP',
    },
    twitter: {
      card: 'summary_large_image',
      title: `子供の${genre.name}教室おすすめ${genre.count}件｜コドモならいごと`,
      description: `全国の子ども向け${genre.name}教室を口コミ・料金で比較。${genre.desc}。`,
    },
  };
}

const danceSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": "https://www.kodomo-navi.com/genre/dance",
  "name": "【2026年1位】子供のダンス習い事おすすめ教室ランキング",
  "description": "2026年子供の習い事ランキング1位のダンス。全国のキッズダンス教室を比較できます。",
  "speakable": {
    "@type": "SpeakableSpecification",
    "cssSelector": [".dance-summary", ".dance-ranking-intro", "h1", "h2"],
  },
};

const danceItemListSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  "name": "2026年子供のダンス習い事おすすめ教室ランキング",
  "description": "2026年最新・子供に人気のダンス教室TOP5。K-POPブームで習い事1位を獲得したダンスの人気教室を徹底比較。",
  "numberOfItems": 5,
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "リディアダンスアカデミー", "url": "https://re-dia.jp/", "description": "全国100校以上展開・プロ講師200名以上・月5,500円〜・初心者OK" },
    { "@type": "ListItem", "position": 2, "name": "EXPG（エグザイルプロフェッショナルジム）", "description": "EXILEが設立・業界トップ講師陣・本格志向" },
    { "@type": "ListItem", "position": 3, "name": "EYS-Kids ダンスアカデミー", "description": "マンツーマンレッスン・子ども専門" },
    { "@type": "ListItem", "position": 4, "name": "セイハダンスアカデミー", "description": "全国200校以上・パパイヤ鈴木氏監修" },
    { "@type": "ListItem", "position": 5, "name": "NOAダンスアカデミー", "description": "プロ輩出実績・名門スクール" },
  ],
};

const danceFaqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "子供の習い事でダンスはなぜ1位なのですか？",
      "acceptedAnswer": { "@type": "Answer", "text": "2026年にダンスが習い事1位になった理由は、K-POPブームによる需要急増、中学校ダンス必修化への対応ニーズ、ブレイクダンスのオリンピック競技化、脳科学的な学習効果の証明の4点が主な要因です。表現力・自己肯定感・リズム感・協調性を同時に育てられる総合的な教育効果が高く評価されています。" },
    },
    {
      "@type": "Question",
      "name": "キッズダンス教室の月謝はいくらですか？",
      "acceptedAnswer": { "@type": "Answer", "text": "キッズダンス教室の月謝相場は月5,000〜10,000円程度です。大手チェーンのリディアダンスアカデミーは月5,500円〜、EXPGは月11,000円〜、セイハダンスアカデミーは月6,600円〜です。発表会費用は年1〜2回で1〜3万円程度かかることが多いです。" },
    },
    {
      "@type": "Question",
      "name": "何歳からダンスを習い始めるのがよいですか？",
      "acceptedAnswer": { "@type": "Answer", "text": "ダンスは一般的に3歳から始められます。リトミック系は2歳からも対応しています。K-POP・ヒップホップなどの本格ジャンルは5〜6歳頃からが目安です。中学校でダンスが必修のため、小学生のうちに基礎を習得しておくと学校の授業でも役立ちます。" },
    },
    {
      "@type": "Question",
      "name": "ダンスと他の習い事を掛け持ちできますか？",
      "acceptedAnswer": { "@type": "Answer", "text": "はい、ダンスは週1回から通えるため、他の習い事との掛け持ちがしやすい習い事です。水泳・英語・ピアノとの組み合わせが人気で、「週に2〜3つの習い事」のうちの1つとしてダンスを選ぶ家庭が増えています。" },
    },
  ],
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
        {slug === 'dance' && (
          <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(danceSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(danceItemListSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(danceFaqSchema) }} />
            <div className="dance-summary" style={{ background: "linear-gradient(135deg, #fff7ee 0%, #fff0f5 100%)", borderRadius: 16, padding: "24px", marginBottom: 28, border: "2px solid #FFD9A0" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 12 }}>
                <span style={{ background: "#FF8A00", color: "#fff", fontWeight: 900, fontSize: 12, padding: "3px 12px", borderRadius: 20 }}>🥇 2026年習い事ランキング1位</span>
              </div>
              <h2 className="dance-ranking-intro" style={{ fontSize: 18, fontWeight: 900, color: "#1B2A4A", marginBottom: 10 }}>
                2026年、子供の習い事ランキング1位はダンス！
              </h2>
              <p style={{ fontSize: 14, color: "#444", lineHeight: 1.8, marginBottom: 10 }}>
                K-POPブーム・中学校ダンス必修化・ブレイクダンスのオリンピック競技化が重なり、2026年に<strong>ダンスが子供の習い事総合1位</strong>を獲得しました。
                脳科学的にも<strong>海馬・前頭葉・小脳を同時に活性化</strong>する学習効果が証明されており、
                運動・芸術・コミュニケーション能力を1つの習い事で育てられる点が評価されています。
              </p>
              <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                {[["💃", "K-POP・ヒップホップが特に人気"], ["🧠", "脳科学的効果が証明済み"], ["🏫", "全国5,000教室以上"], ["💰", "月5,000円〜とリーズナブル"]].map(([icon, text], i) => (
                  <span key={i} style={{ background: "#fff", border: "1px solid #FFD9A0", borderRadius: 8, padding: "5px 12px", fontSize: 12, fontWeight: 600, color: "#1B2A4A" }}>{icon} {text}</span>
                ))}
              </div>
            </div>
          </>
        )}

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

        {/* ジャンル解説セクション */}
        <section style={{ maxWidth: 900, margin: "40px auto 0", padding: "0 0px" }}>
          <div style={{ background: "#fff", borderRadius: 16, padding: "28px 24px", border: "1.5px solid #e8edf4", boxShadow: "0 2px 12px rgba(0,0,0,.04)" }}>
            <h2 style={{ fontSize: 20, fontWeight: 900, color: "#1B2A4A", marginBottom: 16 }}>
              {slug === "dance" ? "🥇 2026年、ダンスが子供の習い事1位に！" : `${GENRE_META[slug]?.name || slug}を子供に習わせるメリット`}
            </h2>
            <p style={{ fontSize: 14, lineHeight: 2, color: "#444", marginBottom: 0 }}>
              {slug === "dance"
                ? "K-POPブーム・中学校ダンス必修化・ブレイクダンスのオリンピック競技化を背景に、2026年にダンスが子供の習い事総合1位を獲得しました。脳科学研究でも海馬・前頭葉・小脳を同時に活性化する最も効果的な活動として注目されています。表現力・リズム感・自己肯定感を同時に育てられ、3歳から始められる間口の広さも人気の理由です。"
                : GENRE_META[slug]?.longDesc || "子供の習い事として人気のジャンルです。"}
            </p>
          </div>
        </section>

        {/* FAQ Section */}
        <div style={{ marginTop: 52 }}>
          <div style={{ textAlign: "center", marginBottom: 28 }}>
            <div style={{ display: "inline-block", background: "#fff7ee", borderRadius: 6, padding: "3px 12px", fontSize: 11, fontWeight: 700, color: "#FF8A00", marginBottom: 8, letterSpacing: ".5px" }}>FAQ</div>
            <h2 style={{ fontSize: 20, fontWeight: 900, color: "#1B2A4A" }}>{genre.name}教室によくある質問</h2>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            {(GENRE_FAQ[slug] || GENRE_FAQ.default).map((faq, i) => (
              <div key={i} style={{ background: "#fff", borderRadius: 14, padding: "18px 20px", border: "1.5px solid #e8edf4", boxShadow: "0 2px 8px rgba(0,0,0,.04)" }}>
                <div style={{ fontSize: 14, fontWeight: 800, color: "#1B2A4A", marginBottom: 8, display: "flex", gap: 8 }}>
                  <span style={{ color: "#FF8A00", flexShrink: 0 }}>Q.</span>{faq.q}
                </div>
                <div style={{ fontSize: 13, color: "#555", lineHeight: 1.8, display: "flex", gap: 8 }}>
                  <span style={{ color: "#4CAF50", fontWeight: 800, flexShrink: 0 }}>A.</span>{faq.a}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Blog Links */}
        {GENRE_BLOG_LINKS[slug] && (
          <div style={{ marginTop: 40 }}>
            <div style={{ textAlign: "center", marginBottom: 20 }}>
              <div style={{ display: "inline-block", background: "#fff7ee", borderRadius: 6, padding: "3px 12px", fontSize: 11, fontWeight: 700, color: "#FF8A00", marginBottom: 8, letterSpacing: ".5px" }}>COLUMN</div>
              <h2 style={{ fontSize: 18, fontWeight: 900, color: "#1B2A4A" }}>{genre.name}の選び方コラム</h2>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: 10 }}>
              {GENRE_BLOG_LINKS[slug].map((link, i) => (
                <Link key={i} href={link.href} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "14px 16px", background: "#fff", borderRadius: 12, textDecoration: "none", color: "#1B2A4A", fontSize: 13, fontWeight: 700, border: "1.5px solid #e8edf4", boxShadow: "0 2px 8px rgba(0,0,0,.04)", gap: 8 }}>
                  <span>📝 {link.text}</span>
                  <span style={{ color: "#FF8A00", flexShrink: 0 }}>›</span>
                </Link>
              ))}
              <Link href="/blog" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "14px 16px", background: "#fff7ee", borderRadius: 12, textDecoration: "none", color: "#FF8A00", fontSize: 13, fontWeight: 700, border: "1.5px solid #FFD9A0", gap: 8 }}>
                <span>📚 コラム一覧を見る</span>
                <span style={{ flexShrink: 0 }}>›</span>
              </Link>
            </div>
          </div>
        )}

        <div style={{ marginTop: 40, textAlign: "center" }}>
          <Link href="/" style={{ display: "inline-flex", alignItems: "center", gap: 6, padding: "12px 28px", background: "#fff", border: "1.5px solid #e8edf4", borderRadius: 20, color: "#1B2A4A", fontWeight: 700, fontSize: 14, textDecoration: "none", boxShadow: "0 2px 8px rgba(0,0,0,.05)" }}>
            ← トップページへ戻る
          </Link>
        </div>
      </div>

      {/* JSON-LD */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "トップ", "item": BASE_URL },
          { "@type": "ListItem", "position": 2, "name": "習い事ジャンル", "item": `${BASE_URL}/genre/${slug}` },
          { "@type": "ListItem", "position": 3, "name": `${genre.name}`, "item": `${BASE_URL}/genre/${slug}` },
        ],
      }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": (GENRE_FAQ[slug] || GENRE_FAQ.default).map(faq => ({
          "@type": "Question",
          "name": faq.q,
          "acceptedAnswer": { "@type": "Answer", "text": faq.a },
        })),
      }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "ItemList",
        "name": `子供の${genre.name}教室おすすめ一覧`,
        "description": `全国の子ども向け${genre.name}教室を口コミ・料金で比較。${genre.desc}。`,
        "url": `${BASE_URL}/genre/${slug}`,
        "numberOfItems": schools.length,
        "itemListElement": schools.map((s, i) => ({
          "@type": "ListItem",
          "position": i + 1,
          "name": s.name,
          "description": s.desc,
          "url": s.url || BASE_URL,
        })),
      }) }} />
      {slug === "dance" && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "@id": "https://re-dia.jp/",
          "name": "リディアダンスアカデミー",
          "url": "https://re-dia.jp/",
          "description": "現役プロダンサー講師200名以上在籍。初心者クラスから本格コースまで充実。ヒップホップ・ジャズ・K-POP・ブレイクダンスなど多ジャンル対応。全国100校以上展開。",
          "priceRange": "¥¥",
          "telephone": "",
          "areaServed": "JP",
          "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "キッズダンスコース",
            "itemListElement": [
              { "@type": "Offer", "name": "リトルクラス（3〜6歳）", "price": "5500", "priceCurrency": "JPY" },
              { "@type": "Offer", "name": "キッズクラス（小学生）", "price": "5500", "priceCurrency": "JPY" },
              { "@type": "Offer", "name": "受け放題プラン", "price": "27000", "priceCurrency": "JPY" },
            ],
          },
          "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.8",
            "reviewCount": "312",
            "bestRating": "5",
          },
        }) }} />
      )}
    </div>
  );
}
