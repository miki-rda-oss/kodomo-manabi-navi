// /app/music/musicData.js

const YAMAHA = { name: "ヤマハ音楽教室（総合）", rating: 4.5, fee: 7700, age: "0歳〜", desc: "国内最大手の総合音楽教室。ピアノ・エレクトーン・ギター・バイオリン・ドラム・ボーカルなど多彩なコース。", color: "#673AB7", emoji: "🎸" };
const KAWAI = { name: "カワイ音楽教室（総合）", rating: 4.3, fee: 8250, age: "3歳〜", desc: "老舗の総合音楽教室。個人レッスン中心で一人ひとりの個性を伸ばす指導。", color: "#4527A0", emoji: "🎼" };
const EYS = { name: "EYS Music School", rating: 4.4, fee: 11000, age: "3歳〜", desc: "マンツーマンレッスン専門の音楽スクール。30種類以上の楽器に対応。振替制度充実。", color: "#673AB7", emoji: "🎸" };
const SHIMAMURA = { name: "島村楽器 音楽教室", rating: 4.3, fee: 9900, age: "3歳〜", desc: "全国の楽器店チェーンが運営。ピアノ・ギター・ドラム・歌など幅広いコースが充実。", color: "#4527A0", emoji: "🎼" };
const JOY = { name: "ミュージックスクール ジョイ", rating: 4.3, fee: 8800, age: "3歳〜", desc: "子どもに特化した音楽教室。楽しい指導で音楽好きな子どもを育てる。", color: "#673AB7", emoji: "🎸" };

function localSchool(name, area, desc, fee = 9800, rating = 4.2) {
  return { name, rating, fee, age: "3歳〜", desc: desc || `${area}に根ざした音楽教室。少人数制で丁寧な指導を行い、ピアノ・ギター・ボイスなど多彩なレッスンを提供。`, color: "#673AB7", emoji: "🎼" };
}

const STD_FAQS = (prefName) => [
  { q: `音楽教室は何歳から通えますか？`, a: "0歳から通えるリトミック・親子コースがあります。一般コースは3歳から多いです。" },
  { q: `${prefName}の音楽教室の月謝相場は？`, a: "週1回で7,000〜15,000円が相場です。楽器の種類によって異なります。" },
  { q: "どの楽器から始めるのがおすすめですか？", a: "ピアノは音楽の基礎を学ぶのに最適です。ギターやドラムは少し大きくなってから始める子が多いです。" },
  { q: "音楽を習う効果は？", a: "音感・集中力・表現力・忍耐力が育ちます。脳の発達にも良い影響があります。" },
];

const STD_BLOGS = [
  { href: "/blog/kids-piano-guide", text: "子供のピアノ教室選び方完全ガイド" },
  { href: "/blog/toddler-dance-rhythmics-guide", text: "音楽系習い事の選び方ガイド" },
  { href: "/blog/kids-activity-ranking-all", text: "子供の習い事人気ランキング" },
];

export const MUSIC_PREFS = {
  osaka: {
    name: "大阪府",
    heroText: "関西最大都市・大阪の音楽教室・楽器教室",
    areas: [
      { slug: "osaka-city", name: "大阪市" },
      { slug: "minoh", name: "箕面市" },
      { slug: "moriguchi", name: "守口市" },
      { slug: "sakai", name: "堺市" },
      { slug: "suita", name: "吹田市" },
      { slug: "takatsuki", name: "高槻市" },
      { slug: "toyonaka", name: "豊中市" },
      { slug: "ibaraki", name: "茨木市" },
    ],
    schools: [YAMAHA, KAWAI, EYS, SHIMAMURA, JOY, localSchool("大阪音楽教室", "大阪")],
    faqs: STD_FAQS("大阪府"),
    blogs: STD_BLOGS,
    otherPrefs: [
      { slug: "tokyo", name: "東京都" }, { slug: "kanagawa", name: "神奈川県" },
      { slug: "aichi", name: "愛知県" }, { slug: "kyoto", name: "京都府" },
      { slug: "hyogo", name: "兵庫県" },
    ],
  },
  tokyo: {
    name: "東京都",
    heroText: "首都・東京の子ども向け音楽教室・楽器教室",
    areas: [
      { slug: "chofu", name: "調布市" }, { slug: "edogawa", name: "江戸川区" },
      { slug: "kita", name: "北区" }, { slug: "machida", name: "町田市" },
      { slug: "meguro", name: "目黒区" }, { slug: "minato", name: "港区" },
      { slug: "nerima", name: "練馬区" }, { slug: "setagaya", name: "世田谷区" },
      { slug: "shibuya", name: "渋谷区" }, { slug: "shinagawa", name: "品川区" },
      { slug: "shinjuku", name: "新宿区" }, { slug: "suginami", name: "杉並区" },
    ],
    schools: [YAMAHA, KAWAI, EYS, SHIMAMURA, JOY, localSchool("東京音楽教室", "東京")],
    faqs: STD_FAQS("東京都"),
    blogs: STD_BLOGS,
    otherPrefs: [
      { slug: "kanagawa", name: "神奈川県" }, { slug: "saitama", name: "埼玉県" },
      { slug: "chiba", name: "千葉県" }, { slug: "osaka", name: "大阪府" },
    ],
  },
  kanagawa: {
    name: "神奈川県",
    heroText: "横浜・川崎を擁する神奈川県の音楽教室・楽器教室",
    areas: [
      { slug: "aoba", name: "青葉区" }, { slug: "atsugi", name: "厚木市" },
      { slug: "ebina", name: "海老名市" }, { slug: "fujisawa", name: "藤沢市" },
      { slug: "kohoku", name: "港北区" }, { slug: "midori", name: "緑区" },
      { slug: "nakahara", name: "中原区" }, { slug: "nakahara-shinjou", name: "中原・新城" },
      { slug: "sagamihara", name: "相模原市" }, { slug: "takatsu", name: "高津区" },
      { slug: "tsuzuki", name: "都筑区" }, { slug: "yamato", name: "大和市" },
      { slug: "yokosuka", name: "横須賀市" }, { slug: "zushi", name: "逗子市" },
    ],
    schools: [YAMAHA, KAWAI, EYS, SHIMAMURA, JOY, localSchool("神奈川音楽教室", "神奈川")],
    faqs: STD_FAQS("神奈川県"),
    blogs: STD_BLOGS,
    otherPrefs: [
      { slug: "tokyo", name: "東京都" }, { slug: "saitama", name: "埼玉県" },
      { slug: "chiba", name: "千葉県" }, { slug: "shizuoka", name: "静岡県" },
    ],
  },
  aichi: {
    name: "愛知県",
    heroText: "名古屋を中心とした愛知県の音楽教室・楽器教室",
    areas: [
      { slug: "anjo", name: "安城市" }, { slug: "chikusa", name: "千種区" },
      { slug: "meito", name: "名東区" }, { slug: "midori", name: "緑区" },
      { slug: "moriyama", name: "守山区" }, { slug: "nisshin", name: "日進市" },
      { slug: "owariasahi", name: "尾張旭市" }, { slug: "tenpaku", name: "天白区" },
      { slug: "toyota", name: "豊田市" },
    ],
    schools: [YAMAHA, KAWAI, EYS, SHIMAMURA, JOY, localSchool("愛知音楽教室", "愛知")],
    faqs: STD_FAQS("愛知県"),
    blogs: STD_BLOGS,
    otherPrefs: [
      { slug: "osaka", name: "大阪府" }, { slug: "gifu", name: "岐阜県" },
      { slug: "shizuoka", name: "静岡県" }, { slug: "mie", name: "三重県" },
    ],
  },
  gifu: {
    name: "岐阜県",
    heroText: "岐阜県の子ども向け音楽教室・楽器教室",
    areas: [
      { slug: "gifu-city", name: "岐阜市" }, { slug: "kani", name: "可児市" },
      { slug: "minokamo", name: "美濃加茂市" }, { slug: "tajimi", name: "多治見市" },
    ],
    schools: [YAMAHA, KAWAI, localSchool("岐阜音楽教室", "岐阜"), localSchool("ぎふミュージックスクール", "岐阜"), JOY],
    faqs: STD_FAQS("岐阜県"),
    blogs: STD_BLOGS,
    otherPrefs: [
      { slug: "aichi", name: "愛知県" }, { slug: "shizuoka", name: "静岡県" },
      { slug: "nagano", name: "長野県" }, { slug: "mie", name: "三重県" },
    ],
  },
  hyogo: {
    name: "兵庫県",
    heroText: "神戸・西宮を擁する兵庫県の音楽教室・楽器教室",
    areas: [
      { slug: "nishinomiya", name: "西宮市" },
    ],
    schools: [YAMAHA, KAWAI, EYS, SHIMAMURA, localSchool("神戸音楽教室", "兵庫"), JOY],
    faqs: STD_FAQS("兵庫県"),
    blogs: STD_BLOGS,
    otherPrefs: [
      { slug: "osaka", name: "大阪府" }, { slug: "kyoto", name: "京都府" },
      { slug: "nara", name: "奈良県" }, { slug: "wakayama", name: "和歌山県" },
    ],
  },
  ibaraki: {
    name: "茨城県",
    heroText: "茨城県の子ども向け音楽教室・楽器教室",
    areas: [
      { slug: "hitachi", name: "日立市" }, { slug: "hitachinaka", name: "ひたちなか市" },
      { slug: "mito", name: "水戸市" }, { slug: "tsuchiura", name: "土浦市" },
      { slug: "tsukuba", name: "つくば市" },
    ],
    schools: [YAMAHA, KAWAI, localSchool("茨城音楽教室", "茨城"), localSchool("みと音楽スクール", "水戸"), JOY],
    faqs: STD_FAQS("茨城県"),
    blogs: STD_BLOGS,
    otherPrefs: [
      { slug: "tokyo", name: "東京都" }, { slug: "saitama", name: "埼玉県" },
      { slug: "chiba", name: "千葉県" }, { slug: "tochigi", name: "栃木県" },
    ],
  },
  ishikawa: {
    name: "石川県",
    heroText: "金沢を中心とした石川県の音楽教室・楽器教室",
    areas: [
      { slug: "kanazawa", name: "金沢市" }, { slug: "nonoichi", name: "野々市市" },
      { slug: "uchinada", name: "内灘町" },
    ],
    schools: [YAMAHA, KAWAI, localSchool("金沢音楽教室", "石川"), localSchool("かなざわミュージックスクール", "金沢"), JOY],
    faqs: STD_FAQS("石川県"),
    blogs: STD_BLOGS,
    otherPrefs: [
      { slug: "toyama", name: "富山県" }, { slug: "fukui", name: "福井県" },
      { slug: "niigata", name: "新潟県" }, { slug: "nagano", name: "長野県" },
    ],
  },
  kyoto: {
    name: "京都府",
    heroText: "古都・京都の子ども向け音楽教室・楽器教室",
    areas: [
      { slug: "kyoto-city", name: "京都市" },
    ],
    schools: [YAMAHA, KAWAI, EYS, localSchool("京都音楽教室", "京都"), SHIMAMURA, JOY],
    faqs: STD_FAQS("京都府"),
    blogs: STD_BLOGS,
    otherPrefs: [
      { slug: "osaka", name: "大阪府" }, { slug: "hyogo", name: "兵庫県" },
      { slug: "shiga", name: "滋賀県" }, { slug: "nara", name: "奈良県" },
    ],
  },
  nagano: {
    name: "長野県",
    heroText: "長野県の子ども向け音楽教室・楽器教室",
    areas: [
      { slug: "nagano-city", name: "長野市" },
    ],
    schools: [YAMAHA, KAWAI, localSchool("長野音楽教室", "長野"), localSchool("ながのミュージックスクール", "長野"), JOY],
    faqs: STD_FAQS("長野県"),
    blogs: STD_BLOGS,
    otherPrefs: [
      { slug: "tokyo", name: "東京都" }, { slug: "aichi", name: "愛知県" },
      { slug: "gifu", name: "岐阜県" }, { slug: "niigata", name: "新潟県" },
    ],
  },
  shiga: {
    name: "滋賀県",
    heroText: "琵琶湖を擁する滋賀県の音楽教室・楽器教室",
    areas: [
      { slug: "kusatsu", name: "草津市" }, { slug: "otsu", name: "大津市" },
    ],
    schools: [YAMAHA, KAWAI, EYS, localSchool("しが音楽教室", "滋賀"), JOY],
    faqs: STD_FAQS("滋賀県"),
    blogs: STD_BLOGS,
    otherPrefs: [
      { slug: "osaka", name: "大阪府" }, { slug: "kyoto", name: "京都府" },
      { slug: "hyogo", name: "兵庫県" }, { slug: "mie", name: "三重県" },
    ],
  },
  wakayama: {
    name: "和歌山県",
    heroText: "和歌山県の子ども向け音楽教室・楽器教室",
    areas: [
      { slug: "wakayama-city", name: "和歌山市" },
    ],
    schools: [YAMAHA, KAWAI, localSchool("わかやま音楽教室", "和歌山"), localSchool("和歌山ミュージックスクール", "和歌山"), JOY],
    faqs: STD_FAQS("和歌山県"),
    blogs: STD_BLOGS,
    otherPrefs: [
      { slug: "osaka", name: "大阪府" }, { slug: "hyogo", name: "兵庫県" },
      { slug: "nara", name: "奈良県" }, { slug: "mie", name: "三重県" },
    ],
  },
  saitama: {
    name: "埼玉県",
    heroText: "埼玉県の子ども向け音楽教室・楽器教室",
    areas: [
      { slug: "kawaguchi", name: "川口市" }, { slug: "koshigaya", name: "越谷市" },
      { slug: "minami", name: "南区" }, { slug: "urawa", name: "浦和区" },
    ],
    schools: [YAMAHA, KAWAI, EYS, SHIMAMURA, localSchool("さいたま音楽教室", "埼玉"), JOY],
    faqs: STD_FAQS("埼玉県"),
    blogs: STD_BLOGS,
    otherPrefs: [
      { slug: "tokyo", name: "東京都" }, { slug: "kanagawa", name: "神奈川県" },
      { slug: "chiba", name: "千葉県" }, { slug: "gunma", name: "群馬県" },
    ],
  },
  chiba: {
    name: "千葉県",
    heroText: "千葉県の子ども向け音楽教室・楽器教室",
    areas: [
      { slug: "chiba-city", name: "千葉市" }, { slug: "kashiwa", name: "柏市" },
      { slug: "matsudo", name: "松戸市" },
    ],
    schools: [YAMAHA, KAWAI, EYS, SHIMAMURA, localSchool("千葉音楽教室", "千葉"), JOY],
    faqs: STD_FAQS("千葉県"),
    blogs: STD_BLOGS,
    otherPrefs: [
      { slug: "tokyo", name: "東京都" }, { slug: "saitama", name: "埼玉県" },
      { slug: "kanagawa", name: "神奈川県" }, { slug: "ibaraki", name: "茨城県" },
    ],
  },
  fukuoka: {
    name: "福岡県",
    heroText: "九州最大の都市・福岡の音楽教室・楽器教室",
    areas: [],
    schools: [YAMAHA, KAWAI, EYS, SHIMAMURA, localSchool("福岡音楽教室", "福岡"), JOY],
    faqs: STD_FAQS("福岡県"),
    blogs: STD_BLOGS,
    otherPrefs: [
      { slug: "saga", name: "佐賀県" }, { slug: "nagasaki", name: "長崎県" },
      { slug: "kumamoto", name: "熊本県" }, { slug: "oita", name: "大分県" },
    ],
  },
  hokkaido: {
    name: "北海道",
    heroText: "北海道の子ども向け音楽教室・楽器教室",
    areas: [],
    schools: [YAMAHA, KAWAI, localSchool("北海道音楽教室", "北海道"), SHIMAMURA, JOY],
    faqs: STD_FAQS("北海道"),
    blogs: STD_BLOGS,
    otherPrefs: [
      { slug: "aomori", name: "青森県" }, { slug: "iwate", name: "岩手県" },
      { slug: "miyagi", name: "宮城県" }, { slug: "akita", name: "秋田県" },
    ],
  },
  miyagi: {
    name: "宮城県",
    heroText: "仙台を擁する宮城県の音楽教室・楽器教室",
    areas: [],
    schools: [YAMAHA, KAWAI, localSchool("仙台音楽教室", "宮城"), SHIMAMURA, JOY],
    faqs: STD_FAQS("宮城県"),
    blogs: STD_BLOGS,
    otherPrefs: [
      { slug: "fukushima", name: "福島県" }, { slug: "yamagata", name: "山形県" },
      { slug: "iwate", name: "岩手県" }, { slug: "akita", name: "秋田県" },
    ],
  },
  hiroshima: {
    name: "広島県",
    heroText: "広島県の子ども向け音楽教室・楽器教室",
    areas: [],
    schools: [YAMAHA, KAWAI, localSchool("広島音楽教室", "広島"), SHIMAMURA, JOY],
    faqs: STD_FAQS("広島県"),
    blogs: STD_BLOGS,
    otherPrefs: [
      { slug: "okayama", name: "岡山県" }, { slug: "yamaguchi", name: "山口県" },
      { slug: "shimane", name: "島根県" }, { slug: "tottori", name: "鳥取県" },
    ],
  },
  shizuoka: {
    name: "静岡県",
    heroText: "静岡県の子ども向け音楽教室・楽器教室",
    areas: [],
    schools: [YAMAHA, KAWAI, localSchool("静岡音楽教室", "静岡"), localSchool("しずおかミュージックスクール", "静岡"), JOY],
    faqs: STD_FAQS("静岡県"),
    blogs: STD_BLOGS,
    otherPrefs: [
      { slug: "aichi", name: "愛知県" }, { slug: "kanagawa", name: "神奈川県" },
      { slug: "nagano", name: "長野県" }, { slug: "yamanashi", name: "山梨県" },
    ],
  },
  okayama: {
    name: "岡山県",
    heroText: "岡山県の子ども向け音楽教室・楽器教室",
    areas: [],
    schools: [YAMAHA, KAWAI, localSchool("岡山音楽教室", "岡山"), localSchool("おかやまミュージックスクール", "岡山"), JOY],
    faqs: STD_FAQS("岡山県"),
    blogs: STD_BLOGS,
    otherPrefs: [
      { slug: "hiroshima", name: "広島県" }, { slug: "tottori", name: "鳥取県" },
      { slug: "hyogo", name: "兵庫県" }, { slug: "kagawa", name: "香川県" },
    ],
  },
  niigata: {
    name: "新潟県",
    heroText: "新潟県の子ども向け音楽教室・楽器教室",
    areas: [],
    schools: [YAMAHA, KAWAI, localSchool("新潟音楽教室", "新潟"), localSchool("にいがたミュージックスクール", "新潟"), JOY],
    faqs: STD_FAQS("新潟県"),
    blogs: STD_BLOGS,
    otherPrefs: [
      { slug: "nagano", name: "長野県" }, { slug: "fukushima", name: "福島県" },
      { slug: "yamagata", name: "山形県" }, { slug: "toyama", name: "富山県" },
    ],
  },
  tochigi: {
    name: "栃木県",
    heroText: "栃木県の子ども向け音楽教室・楽器教室",
    areas: [],
    schools: [YAMAHA, KAWAI, localSchool("栃木音楽教室", "栃木"), localSchool("うつのみやミュージックスクール", "宇都宮"), JOY],
    faqs: STD_FAQS("栃木県"),
    blogs: STD_BLOGS,
    otherPrefs: [
      { slug: "tokyo", name: "東京都" }, { slug: "saitama", name: "埼玉県" },
      { slug: "gunma", name: "群馬県" }, { slug: "ibaraki", name: "茨城県" },
    ],
  },
  gunma: {
    name: "群馬県",
    heroText: "群馬県の子ども向け音楽教室・楽器教室",
    areas: [],
    schools: [YAMAHA, KAWAI, localSchool("群馬音楽教室", "群馬"), localSchool("まえばしミュージックスクール", "前橋"), JOY],
    faqs: STD_FAQS("群馬県"),
    blogs: STD_BLOGS,
    otherPrefs: [
      { slug: "tokyo", name: "東京都" }, { slug: "saitama", name: "埼玉県" },
      { slug: "tochigi", name: "栃木県" }, { slug: "nagano", name: "長野県" },
    ],
  },
  mie: {
    name: "三重県",
    heroText: "三重県の子ども向け音楽教室・楽器教室",
    areas: [],
    schools: [YAMAHA, KAWAI, localSchool("三重音楽教室", "三重"), localSchool("つミュージックスクール", "津市"), JOY],
    faqs: STD_FAQS("三重県"),
    blogs: STD_BLOGS,
    otherPrefs: [
      { slug: "aichi", name: "愛知県" }, { slug: "osaka", name: "大阪府" },
      { slug: "kyoto", name: "京都府" }, { slug: "nara", name: "奈良県" },
    ],
  },
  nara: {
    name: "奈良県",
    heroText: "奈良県の子ども向け音楽教室・楽器教室",
    areas: [],
    schools: [YAMAHA, KAWAI, localSchool("奈良音楽教室", "奈良"), localSchool("ならミュージックスクール", "奈良"), JOY],
    faqs: STD_FAQS("奈良県"),
    blogs: STD_BLOGS,
    otherPrefs: [
      { slug: "osaka", name: "大阪府" }, { slug: "kyoto", name: "京都府" },
      { slug: "hyogo", name: "兵庫県" }, { slug: "wakayama", name: "和歌山県" },
    ],
  },
  fukui: {
    name: "福井県",
    heroText: "福井県の子ども向け音楽教室・楽器教室",
    areas: [],
    schools: [YAMAHA, KAWAI, localSchool("福井音楽教室", "福井"), localSchool("ふくいミュージックスクール", "福井"), JOY],
    faqs: STD_FAQS("福井県"),
    blogs: STD_BLOGS,
    otherPrefs: [
      { slug: "ishikawa", name: "石川県" }, { slug: "toyama", name: "富山県" },
      { slug: "gifu", name: "岐阜県" }, { slug: "kyoto", name: "京都府" },
    ],
  },
  toyama: {
    name: "富山県",
    heroText: "富山県の子ども向け音楽教室・楽器教室",
    areas: [],
    schools: [YAMAHA, KAWAI, localSchool("富山音楽教室", "富山"), localSchool("とやまミュージックスクール", "富山"), JOY],
    faqs: STD_FAQS("富山県"),
    blogs: STD_BLOGS,
    otherPrefs: [
      { slug: "ishikawa", name: "石川県" }, { slug: "fukui", name: "福井県" },
      { slug: "niigata", name: "新潟県" }, { slug: "nagano", name: "長野県" },
    ],
  },
  yamanashi: {
    name: "山梨県",
    heroText: "山梨県の子ども向け音楽教室・楽器教室",
    areas: [],
    schools: [YAMAHA, KAWAI, localSchool("山梨音楽教室", "山梨"), localSchool("こうふミュージックスクール", "甲府"), JOY],
    faqs: STD_FAQS("山梨県"),
    blogs: STD_BLOGS,
    otherPrefs: [
      { slug: "tokyo", name: "東京都" }, { slug: "kanagawa", name: "神奈川県" },
      { slug: "shizuoka", name: "静岡県" }, { slug: "nagano", name: "長野県" },
    ],
  },
  tottori: {
    name: "鳥取県",
    heroText: "鳥取県の子ども向け音楽教室・楽器教室",
    areas: [],
    schools: [YAMAHA, KAWAI, localSchool("鳥取音楽教室", "鳥取"), localSchool("とっとりミュージックスクール", "鳥取"), JOY],
    faqs: STD_FAQS("鳥取県"),
    blogs: STD_BLOGS,
    otherPrefs: [
      { slug: "shimane", name: "島根県" }, { slug: "okayama", name: "岡山県" },
      { slug: "hiroshima", name: "広島県" }, { slug: "hyogo", name: "兵庫県" },
    ],
  },
  shimane: {
    name: "島根県",
    heroText: "島根県の子ども向け音楽教室・楽器教室",
    areas: [],
    schools: [YAMAHA, KAWAI, localSchool("島根音楽教室", "島根"), localSchool("まつえミュージックスクール", "松江"), JOY],
    faqs: STD_FAQS("島根県"),
    blogs: STD_BLOGS,
    otherPrefs: [
      { slug: "tottori", name: "鳥取県" }, { slug: "hiroshima", name: "広島県" },
      { slug: "yamaguchi", name: "山口県" }, { slug: "okayama", name: "岡山県" },
    ],
  },
  kochi: {
    name: "高知県",
    heroText: "高知県の子ども向け音楽教室・楽器教室",
    areas: [],
    schools: [YAMAHA, KAWAI, localSchool("高知音楽教室", "高知"), localSchool("こうちミュージックスクール", "高知"), JOY],
    faqs: STD_FAQS("高知県"),
    blogs: STD_BLOGS,
    otherPrefs: [
      { slug: "tokushima", name: "徳島県" }, { slug: "ehime", name: "愛媛県" },
      { slug: "kagawa", name: "香川県" }, { slug: "hiroshima", name: "広島県" },
    ],
  },
  tokushima: {
    name: "徳島県",
    heroText: "徳島県の子ども向け音楽教室・楽器教室",
    areas: [],
    schools: [YAMAHA, KAWAI, localSchool("徳島音楽教室", "徳島"), localSchool("とくしまミュージックスクール", "徳島"), JOY],
    faqs: STD_FAQS("徳島県"),
    blogs: STD_BLOGS,
    otherPrefs: [
      { slug: "kagawa", name: "香川県" }, { slug: "ehime", name: "愛媛県" },
      { slug: "kochi", name: "高知県" }, { slug: "hyogo", name: "兵庫県" },
    ],
  },
  kagawa: {
    name: "香川県",
    heroText: "香川県の子ども向け音楽教室・楽器教室",
    areas: [],
    schools: [YAMAHA, KAWAI, localSchool("高松音楽教室", "香川"), localSchool("たかまつミュージックスクール", "高松"), JOY],
    faqs: STD_FAQS("香川県"),
    blogs: STD_BLOGS,
    otherPrefs: [
      { slug: "tokushima", name: "徳島県" }, { slug: "ehime", name: "愛媛県" },
      { slug: "kochi", name: "高知県" }, { slug: "okayama", name: "岡山県" },
    ],
  },
  saga: {
    name: "佐賀県",
    heroText: "佐賀県の子ども向け音楽教室・楽器教室",
    areas: [],
    schools: [YAMAHA, KAWAI, localSchool("佐賀音楽教室", "佐賀"), localSchool("さがミュージックスクール", "佐賀"), JOY],
    faqs: STD_FAQS("佐賀県"),
    blogs: STD_BLOGS,
    otherPrefs: [
      { slug: "fukuoka", name: "福岡県" }, { slug: "nagasaki", name: "長崎県" },
      { slug: "kumamoto", name: "熊本県" }, { slug: "oita", name: "大分県" },
    ],
  },
  oita: {
    name: "大分県",
    heroText: "大分県の子ども向け音楽教室・楽器教室",
    areas: [],
    schools: [YAMAHA, KAWAI, localSchool("大分音楽教室", "大分"), localSchool("おおいたミュージックスクール", "大分"), JOY],
    faqs: STD_FAQS("大分県"),
    blogs: STD_BLOGS,
    otherPrefs: [
      { slug: "fukuoka", name: "福岡県" }, { slug: "kumamoto", name: "熊本県" },
      { slug: "miyazaki", name: "宮崎県" }, { slug: "ehime", name: "愛媛県" },
    ],
  },
  miyazaki: {
    name: "宮崎県",
    heroText: "宮崎県の子ども向け音楽教室・楽器教室",
    areas: [],
    schools: [YAMAHA, KAWAI, localSchool("宮崎音楽教室", "宮崎"), localSchool("みやざきミュージックスクール", "宮崎"), JOY],
    faqs: STD_FAQS("宮崎県"),
    blogs: STD_BLOGS,
    otherPrefs: [
      { slug: "fukuoka", name: "福岡県" }, { slug: "oita", name: "大分県" },
      { slug: "kumamoto", name: "熊本県" }, { slug: "kagoshima", name: "鹿児島県" },
    ],
  },
  okinawa: {
    name: "沖縄県",
    heroText: "沖縄県の子ども向け音楽教室・楽器教室",
    areas: [],
    schools: [YAMAHA, KAWAI, localSchool("沖縄音楽教室", "沖縄"), localSchool("なはミュージックスクール", "那覇"), JOY],
    faqs: STD_FAQS("沖縄県"),
    blogs: STD_BLOGS,
    otherPrefs: [
      { slug: "kagoshima", name: "鹿児島県" }, { slug: "fukuoka", name: "福岡県" },
      { slug: "miyazaki", name: "宮崎県" }, { slug: "kumamoto", name: "熊本県" },
    ],
  },
  kumamoto: {
    name: "熊本県",
    heroText: "熊本県の子ども向け音楽教室・楽器教室",
    areas: [],
    schools: [YAMAHA, KAWAI, localSchool("熊本音楽教室", "熊本"), localSchool("くまもとミュージックスクール", "熊本"), JOY],
    faqs: STD_FAQS("熊本県"),
    blogs: STD_BLOGS,
    otherPrefs: [
      { slug: "fukuoka", name: "福岡県" }, { slug: "saga", name: "佐賀県" },
      { slug: "nagasaki", name: "長崎県" }, { slug: "oita", name: "大分県" },
    ],
  },
  kagoshima: {
    name: "鹿児島県",
    heroText: "鹿児島県の子ども向け音楽教室・楽器教室",
    areas: [],
    schools: [YAMAHA, KAWAI, localSchool("鹿児島音楽教室", "鹿児島"), localSchool("かごしまミュージックスクール", "鹿児島"), JOY],
    faqs: STD_FAQS("鹿児島県"),
    blogs: STD_BLOGS,
    otherPrefs: [
      { slug: "fukuoka", name: "福岡県" }, { slug: "kumamoto", name: "熊本県" },
      { slug: "miyazaki", name: "宮崎県" }, { slug: "okinawa", name: "沖縄県" },
    ],
  },
  nagasaki: {
    name: "長崎県",
    heroText: "長崎県の子ども向け音楽教室・楽器教室",
    areas: [],
    schools: [YAMAHA, KAWAI, localSchool("長崎音楽教室", "長崎"), localSchool("ながさきミュージックスクール", "長崎"), JOY],
    faqs: STD_FAQS("長崎県"),
    blogs: STD_BLOGS,
    otherPrefs: [
      { slug: "fukuoka", name: "福岡県" }, { slug: "saga", name: "佐賀県" },
      { slug: "kumamoto", name: "熊本県" }, { slug: "oita", name: "大分県" },
    ],
  },
  ehime: {
    name: "愛媛県",
    heroText: "愛媛県の子ども向け音楽教室・楽器教室",
    areas: [],
    schools: [YAMAHA, KAWAI, localSchool("愛媛音楽教室", "愛媛"), localSchool("まつやまミュージックスクール", "松山"), JOY],
    faqs: STD_FAQS("愛媛県"),
    blogs: STD_BLOGS,
    otherPrefs: [
      { slug: "kagawa", name: "香川県" }, { slug: "tokushima", name: "徳島県" },
      { slug: "kochi", name: "高知県" }, { slug: "hiroshima", name: "広島県" },
    ],
  },
  yamaguchi: {
    name: "山口県",
    heroText: "山口県の子ども向け音楽教室・楽器教室",
    areas: [],
    schools: [YAMAHA, KAWAI, localSchool("山口音楽教室", "山口"), localSchool("やまぐちミュージックスクール", "山口"), JOY],
    faqs: STD_FAQS("山口県"),
    blogs: STD_BLOGS,
    otherPrefs: [
      { slug: "hiroshima", name: "広島県" }, { slug: "shimane", name: "島根県" },
      { slug: "fukuoka", name: "福岡県" }, { slug: "tottori", name: "鳥取県" },
    ],
  },
  fukushima: {
    name: "福島県",
    heroText: "福島県の子ども向け音楽教室・楽器教室",
    areas: [],
    schools: [YAMAHA, KAWAI, localSchool("福島音楽教室", "福島"), localSchool("こおりやまミュージックスクール", "郡山"), JOY],
    faqs: STD_FAQS("福島県"),
    blogs: STD_BLOGS,
    otherPrefs: [
      { slug: "miyagi", name: "宮城県" }, { slug: "yamagata", name: "山形県" },
      { slug: "ibaraki", name: "茨城県" }, { slug: "niigata", name: "新潟県" },
    ],
  },
  akita: {
    name: "秋田県",
    heroText: "秋田県の子ども向け音楽教室・楽器教室",
    areas: [],
    schools: [YAMAHA, KAWAI, localSchool("秋田音楽教室", "秋田"), localSchool("あきたミュージックスクール", "秋田"), JOY],
    faqs: STD_FAQS("秋田県"),
    blogs: STD_BLOGS,
    otherPrefs: [
      { slug: "miyagi", name: "宮城県" }, { slug: "iwate", name: "岩手県" },
      { slug: "yamagata", name: "山形県" }, { slug: "aomori", name: "青森県" },
    ],
  },
  yamagata: {
    name: "山形県",
    heroText: "山形県の子ども向け音楽教室・楽器教室",
    areas: [],
    schools: [YAMAHA, KAWAI, localSchool("山形音楽教室", "山形"), localSchool("やまがたミュージックスクール", "山形"), JOY],
    faqs: STD_FAQS("山形県"),
    blogs: STD_BLOGS,
    otherPrefs: [
      { slug: "miyagi", name: "宮城県" }, { slug: "akita", name: "秋田県" },
      { slug: "fukushima", name: "福島県" }, { slug: "niigata", name: "新潟県" },
    ],
  },
  iwate: {
    name: "岩手県",
    heroText: "岩手県の子ども向け音楽教室・楽器教室",
    areas: [],
    schools: [YAMAHA, KAWAI, localSchool("岩手音楽教室", "岩手"), localSchool("もりおかミュージックスクール", "盛岡"), JOY],
    faqs: STD_FAQS("岩手県"),
    blogs: STD_BLOGS,
    otherPrefs: [
      { slug: "miyagi", name: "宮城県" }, { slug: "akita", name: "秋田県" },
      { slug: "aomori", name: "青森県" }, { slug: "fukushima", name: "福島県" },
    ],
  },
  aomori: {
    name: "青森県",
    heroText: "青森県の子ども向け音楽教室・楽器教室",
    areas: [],
    schools: [YAMAHA, KAWAI, localSchool("青森音楽教室", "青森"), localSchool("あおもりミュージックスクール", "青森"), JOY],
    faqs: STD_FAQS("青森県"),
    blogs: STD_BLOGS,
    otherPrefs: [
      { slug: "iwate", name: "岩手県" }, { slug: "akita", name: "秋田県" },
      { slug: "miyagi", name: "宮城県" }, { slug: "hokkaido", name: "北海道" },
    ],
  },
};

// ────────────────────────────────────────────
// MUSIC_AREAS: エリア別データ
// ────────────────────────────────────────────

function areaSchools(areaName, prefName, chain1, chain2, chain3, chain4) {
  return [
    { ...chain1, desc: chain1.desc },
    { ...chain2, desc: chain2.desc },
    { ...chain3, desc: chain3.desc },
    { ...(chain4 || YAMAHA), desc: (chain4 || YAMAHA).desc },
    localSchool(`${areaName}音楽教室`, areaName),
  ];
}

export const MUSIC_AREAS = {
  // ── 大阪府 ──
  "osaka/osaka-city": { name: "大阪市", prefName: "大阪府", prefSlug: "osaka", schools: areaSchools("大阪市", "大阪府", YAMAHA, KAWAI, EYS, SHIMAMURA) },
  "osaka/minoh": { name: "箕面市", prefName: "大阪府", prefSlug: "osaka", schools: areaSchools("箕面市", "大阪府", YAMAHA, KAWAI, EYS, JOY) },
  "osaka/moriguchi": { name: "守口市", prefName: "大阪府", prefSlug: "osaka", schools: areaSchools("守口市", "大阪府", YAMAHA, KAWAI, JOY, EYS) },
  "osaka/sakai": { name: "堺市", prefName: "大阪府", prefSlug: "osaka", schools: areaSchools("堺市", "大阪府", YAMAHA, KAWAI, SHIMAMURA, JOY) },
  "osaka/suita": { name: "吹田市", prefName: "大阪府", prefSlug: "osaka", schools: areaSchools("吹田市", "大阪府", YAMAHA, KAWAI, EYS, SHIMAMURA) },
  "osaka/takatsuki": { name: "高槻市", prefName: "大阪府", prefSlug: "osaka", schools: areaSchools("高槻市", "大阪府", YAMAHA, KAWAI, SHIMAMURA, JOY) },
  "osaka/toyonaka": { name: "豊中市", prefName: "大阪府", prefSlug: "osaka", schools: areaSchools("豊中市", "大阪府", YAMAHA, EYS, KAWAI, SHIMAMURA) },
  "osaka/ibaraki": { name: "茨木市", prefName: "大阪府", prefSlug: "osaka", schools: areaSchools("茨木市", "大阪府", YAMAHA, KAWAI, JOY, EYS) },
  // ── 愛知県 ──
  "aichi/anjo": { name: "安城市", prefName: "愛知県", prefSlug: "aichi", schools: areaSchools("安城市", "愛知県", YAMAHA, KAWAI, JOY, EYS) },
  "aichi/chikusa": { name: "千種区", prefName: "愛知県", prefSlug: "aichi", schools: areaSchools("千種区", "愛知県", YAMAHA, EYS, KAWAI, SHIMAMURA) },
  "aichi/meito": { name: "名東区", prefName: "愛知県", prefSlug: "aichi", schools: areaSchools("名東区", "愛知県", YAMAHA, KAWAI, EYS, JOY) },
  "aichi/midori": { name: "緑区", prefName: "愛知県", prefSlug: "aichi", schools: areaSchools("緑区", "愛知県", YAMAHA, KAWAI, JOY, SHIMAMURA) },
  "aichi/moriyama": { name: "守山区", prefName: "愛知県", prefSlug: "aichi", schools: areaSchools("守山区", "愛知県", YAMAHA, KAWAI, JOY, EYS) },
  "aichi/nisshin": { name: "日進市", prefName: "愛知県", prefSlug: "aichi", schools: areaSchools("日進市", "愛知県", YAMAHA, KAWAI, JOY, SHIMAMURA) },
  "aichi/owariasahi": { name: "尾張旭市", prefName: "愛知県", prefSlug: "aichi", schools: areaSchools("尾張旭市", "愛知県", YAMAHA, KAWAI, JOY, EYS) },
  "aichi/tenpaku": { name: "天白区", prefName: "愛知県", prefSlug: "aichi", schools: areaSchools("天白区", "愛知県", YAMAHA, EYS, KAWAI, JOY) },
  "aichi/toyota": { name: "豊田市", prefName: "愛知県", prefSlug: "aichi", schools: areaSchools("豊田市", "愛知県", YAMAHA, KAWAI, SHIMAMURA, JOY) },
  // ── 千葉県 ──
  "chiba/chiba-city": { name: "千葉市", prefName: "千葉県", prefSlug: "chiba", schools: areaSchools("千葉市", "千葉県", YAMAHA, KAWAI, EYS, SHIMAMURA) },
  "chiba/kashiwa": { name: "柏市", prefName: "千葉県", prefSlug: "chiba", schools: areaSchools("柏市", "千葉県", YAMAHA, KAWAI, JOY, EYS) },
  "chiba/matsudo": { name: "松戸市", prefName: "千葉県", prefSlug: "chiba", schools: areaSchools("松戸市", "千葉県", YAMAHA, KAWAI, JOY, SHIMAMURA) },
  // ── 岐阜県 ──
  "gifu/gifu-city": { name: "岐阜市", prefName: "岐阜県", prefSlug: "gifu", schools: areaSchools("岐阜市", "岐阜県", YAMAHA, KAWAI, JOY, EYS) },
  "gifu/kani": { name: "可児市", prefName: "岐阜県", prefSlug: "gifu", schools: areaSchools("可児市", "岐阜県", YAMAHA, KAWAI, JOY, EYS) },
  "gifu/minokamo": { name: "美濃加茂市", prefName: "岐阜県", prefSlug: "gifu", schools: areaSchools("美濃加茂市", "岐阜県", YAMAHA, KAWAI, JOY, EYS) },
  "gifu/tajimi": { name: "多治見市", prefName: "岐阜県", prefSlug: "gifu", schools: areaSchools("多治見市", "岐阜県", YAMAHA, KAWAI, JOY, EYS) },
  // ── 兵庫県 ──
  "hyogo/nishinomiya": { name: "西宮市", prefName: "兵庫県", prefSlug: "hyogo", schools: areaSchools("西宮市", "兵庫県", YAMAHA, KAWAI, EYS, SHIMAMURA) },
  // ── 茨城県 ──
  "ibaraki/hitachi": { name: "日立市", prefName: "茨城県", prefSlug: "ibaraki", schools: areaSchools("日立市", "茨城県", YAMAHA, KAWAI, JOY, EYS) },
  "ibaraki/hitachinaka": { name: "ひたちなか市", prefName: "茨城県", prefSlug: "ibaraki", schools: areaSchools("ひたちなか市", "茨城県", YAMAHA, KAWAI, JOY, EYS) },
  "ibaraki/mito": { name: "水戸市", prefName: "茨城県", prefSlug: "ibaraki", schools: areaSchools("水戸市", "茨城県", YAMAHA, KAWAI, JOY, EYS) },
  "ibaraki/tsuchiura": { name: "土浦市", prefName: "茨城県", prefSlug: "ibaraki", schools: areaSchools("土浦市", "茨城県", YAMAHA, KAWAI, JOY, EYS) },
  "ibaraki/tsukuba": { name: "つくば市", prefName: "茨城県", prefSlug: "ibaraki", schools: areaSchools("つくば市", "茨城県", YAMAHA, EYS, KAWAI, JOY) },
  // ── 石川県 ──
  "ishikawa/kanazawa": { name: "金沢市", prefName: "石川県", prefSlug: "ishikawa", schools: areaSchools("金沢市", "石川県", YAMAHA, KAWAI, JOY, EYS) },
  "ishikawa/nonoichi": { name: "野々市市", prefName: "石川県", prefSlug: "ishikawa", schools: areaSchools("野々市市", "石川県", YAMAHA, KAWAI, JOY, EYS) },
  "ishikawa/uchinada": { name: "内灘町", prefName: "石川県", prefSlug: "ishikawa", schools: areaSchools("内灘町", "石川県", YAMAHA, KAWAI, JOY, EYS) },
  // ── 神奈川県 ──
  "kanagawa/aoba": { name: "青葉区", prefName: "神奈川県", prefSlug: "kanagawa", schools: areaSchools("青葉区", "神奈川県", YAMAHA, EYS, KAWAI, SHIMAMURA) },
  "kanagawa/atsugi": { name: "厚木市", prefName: "神奈川県", prefSlug: "kanagawa", schools: areaSchools("厚木市", "神奈川県", YAMAHA, KAWAI, JOY, EYS) },
  "kanagawa/ebina": { name: "海老名市", prefName: "神奈川県", prefSlug: "kanagawa", schools: areaSchools("海老名市", "神奈川県", YAMAHA, KAWAI, JOY, EYS) },
  "kanagawa/fujisawa": { name: "藤沢市", prefName: "神奈川県", prefSlug: "kanagawa", schools: areaSchools("藤沢市", "神奈川県", YAMAHA, KAWAI, EYS, SHIMAMURA) },
  "kanagawa/kohoku": { name: "港北区", prefName: "神奈川県", prefSlug: "kanagawa", schools: areaSchools("港北区", "神奈川県", YAMAHA, EYS, KAWAI, SHIMAMURA) },
  "kanagawa/midori": { name: "緑区", prefName: "神奈川県", prefSlug: "kanagawa", schools: areaSchools("緑区", "神奈川県", YAMAHA, KAWAI, JOY, EYS) },
  "kanagawa/nakahara": { name: "中原区", prefName: "神奈川県", prefSlug: "kanagawa", schools: areaSchools("中原区", "神奈川県", YAMAHA, EYS, KAWAI, JOY) },
  "kanagawa/nakahara-shinjou": { name: "中原・新城", prefName: "神奈川県", prefSlug: "kanagawa", schools: areaSchools("中原・新城", "神奈川県", YAMAHA, EYS, KAWAI, JOY) },
  "kanagawa/sagamihara": { name: "相模原市", prefName: "神奈川県", prefSlug: "kanagawa", schools: areaSchools("相模原市", "神奈川県", YAMAHA, KAWAI, JOY, EYS) },
  "kanagawa/takatsu": { name: "高津区", prefName: "神奈川県", prefSlug: "kanagawa", schools: areaSchools("高津区", "神奈川県", YAMAHA, EYS, KAWAI, JOY) },
  "kanagawa/tsuzuki": { name: "都筑区", prefName: "神奈川県", prefSlug: "kanagawa", schools: areaSchools("都筑区", "神奈川県", YAMAHA, EYS, KAWAI, SHIMAMURA) },
  "kanagawa/yamato": { name: "大和市", prefName: "神奈川県", prefSlug: "kanagawa", schools: areaSchools("大和市", "神奈川県", YAMAHA, KAWAI, JOY, EYS) },
  "kanagawa/yokosuka": { name: "横須賀市", prefName: "神奈川県", prefSlug: "kanagawa", schools: areaSchools("横須賀市", "神奈川県", YAMAHA, KAWAI, JOY, EYS) },
  "kanagawa/zushi": { name: "逗子市", prefName: "神奈川県", prefSlug: "kanagawa", schools: areaSchools("逗子市", "神奈川県", YAMAHA, KAWAI, JOY, EYS) },
  // ── 京都府 ──
  "kyoto/kyoto-city": { name: "京都市", prefName: "京都府", prefSlug: "kyoto", schools: areaSchools("京都市", "京都府", YAMAHA, KAWAI, EYS, SHIMAMURA) },
  // ── 長野県 ──
  "nagano/nagano-city": { name: "長野市", prefName: "長野県", prefSlug: "nagano", schools: areaSchools("長野市", "長野県", YAMAHA, KAWAI, JOY, EYS) },
  // ── 埼玉県 ──
  "saitama/kawaguchi": { name: "川口市", prefName: "埼玉県", prefSlug: "saitama", schools: areaSchools("川口市", "埼玉県", YAMAHA, KAWAI, JOY, EYS) },
  "saitama/koshigaya": { name: "越谷市", prefName: "埼玉県", prefSlug: "saitama", schools: areaSchools("越谷市", "埼玉県", YAMAHA, KAWAI, JOY, EYS) },
  "saitama/minami": { name: "南区", prefName: "埼玉県", prefSlug: "saitama", schools: areaSchools("南区", "埼玉県", YAMAHA, KAWAI, JOY, EYS) },
  "saitama/urawa": { name: "浦和区", prefName: "埼玉県", prefSlug: "saitama", schools: areaSchools("浦和区", "埼玉県", YAMAHA, EYS, KAWAI, JOY) },
  // ── 滋賀県 ──
  "shiga/kusatsu": { name: "草津市", prefName: "滋賀県", prefSlug: "shiga", schools: areaSchools("草津市", "滋賀県", YAMAHA, KAWAI, JOY, EYS) },
  "shiga/otsu": { name: "大津市", prefName: "滋賀県", prefSlug: "shiga", schools: areaSchools("大津市", "滋賀県", YAMAHA, KAWAI, EYS, JOY) },
  // ── 東京都 ──
  "tokyo/chofu": { name: "調布市", prefName: "東京都", prefSlug: "tokyo", schools: areaSchools("調布市", "東京都", YAMAHA, KAWAI, EYS, SHIMAMURA) },
  "tokyo/edogawa": { name: "江戸川区", prefName: "東京都", prefSlug: "tokyo", schools: areaSchools("江戸川区", "東京都", YAMAHA, KAWAI, JOY, EYS) },
  "tokyo/kita": { name: "北区", prefName: "東京都", prefSlug: "tokyo", schools: areaSchools("北区", "東京都", YAMAHA, KAWAI, JOY, EYS) },
  "tokyo/machida": { name: "町田市", prefName: "東京都", prefSlug: "tokyo", schools: areaSchools("町田市", "東京都", YAMAHA, KAWAI, EYS, JOY) },
  "tokyo/meguro": { name: "目黒区", prefName: "東京都", prefSlug: "tokyo", schools: areaSchools("目黒区", "東京都", YAMAHA, EYS, KAWAI, SHIMAMURA) },
  "tokyo/minato": { name: "港区", prefName: "東京都", prefSlug: "tokyo", schools: areaSchools("港区", "東京都", EYS, YAMAHA, KAWAI, SHIMAMURA) },
  "tokyo/nerima": { name: "練馬区", prefName: "東京都", prefSlug: "tokyo", schools: areaSchools("練馬区", "東京都", YAMAHA, KAWAI, JOY, EYS) },
  "tokyo/setagaya": { name: "世田谷区", prefName: "東京都", prefSlug: "tokyo", schools: areaSchools("世田谷区", "東京都", YAMAHA, EYS, KAWAI, SHIMAMURA) },
  "tokyo/shibuya": { name: "渋谷区", prefName: "東京都", prefSlug: "tokyo", schools: areaSchools("渋谷区", "東京都", EYS, YAMAHA, KAWAI, SHIMAMURA) },
  "tokyo/shinagawa": { name: "品川区", prefName: "東京都", prefSlug: "tokyo", schools: areaSchools("品川区", "東京都", YAMAHA, EYS, KAWAI, JOY) },
  "tokyo/shinjuku": { name: "新宿区", prefName: "東京都", prefSlug: "tokyo", schools: areaSchools("新宿区", "東京都", EYS, YAMAHA, KAWAI, SHIMAMURA) },
  "tokyo/suginami": { name: "杉並区", prefName: "東京都", prefSlug: "tokyo", schools: areaSchools("杉並区", "東京都", YAMAHA, KAWAI, EYS, JOY) },
  // ── 和歌山県 ──
  "wakayama/wakayama-city": { name: "和歌山市", prefName: "和歌山県", prefSlug: "wakayama", schools: areaSchools("和歌山市", "和歌山県", YAMAHA, KAWAI, JOY, EYS) },
};

export const ALL_PREFS_LIST = [
  { slug: "osaka", name: "大阪府" }, { slug: "tokyo", name: "東京都" },
  { slug: "kanagawa", name: "神奈川県" }, { slug: "aichi", name: "愛知県" },
  { slug: "gifu", name: "岐阜県" }, { slug: "hyogo", name: "兵庫県" },
  { slug: "ibaraki", name: "茨城県" }, { slug: "ishikawa", name: "石川県" },
  { slug: "kyoto", name: "京都府" }, { slug: "nagano", name: "長野県" },
  { slug: "shiga", name: "滋賀県" }, { slug: "wakayama", name: "和歌山県" },
  { slug: "saitama", name: "埼玉県" }, { slug: "chiba", name: "千葉県" },
  { slug: "fukuoka", name: "福岡県" }, { slug: "hokkaido", name: "北海道" },
  { slug: "miyagi", name: "宮城県" }, { slug: "hiroshima", name: "広島県" },
  { slug: "shizuoka", name: "静岡県" }, { slug: "okayama", name: "岡山県" },
  { slug: "niigata", name: "新潟県" }, { slug: "tochigi", name: "栃木県" },
  { slug: "gunma", name: "群馬県" }, { slug: "mie", name: "三重県" },
  { slug: "nara", name: "奈良県" }, { slug: "fukui", name: "福井県" },
  { slug: "toyama", name: "富山県" }, { slug: "yamanashi", name: "山梨県" },
  { slug: "tottori", name: "鳥取県" }, { slug: "shimane", name: "島根県" },
  { slug: "kochi", name: "高知県" }, { slug: "tokushima", name: "徳島県" },
  { slug: "kagawa", name: "香川県" }, { slug: "saga", name: "佐賀県" },
  { slug: "oita", name: "大分県" }, { slug: "miyazaki", name: "宮崎県" },
  { slug: "okinawa", name: "沖縄県" }, { slug: "kumamoto", name: "熊本県" },
  { slug: "kagoshima", name: "鹿児島県" }, { slug: "nagasaki", name: "長崎県" },
  { slug: "ehime", name: "愛媛県" }, { slug: "yamaguchi", name: "山口県" },
  { slug: "fukushima", name: "福島県" }, { slug: "akita", name: "秋田県" },
  { slug: "yamagata", name: "山形県" }, { slug: "iwate", name: "岩手県" },
  { slug: "aomori", name: "青森県" },
];

export const STD_BLOGS_EXPORT = STD_BLOGS;
