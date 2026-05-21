// /app/dance/danceData.js

const LYDIA = {
  name: "リディアダンスアカデミー",
  rating: 4.8, fee: 7700, age: "3歳〜15歳",
  featured: true,
  trialUrl: "https://re-dia.jp/contact/",
  url: "https://re-dia.jp/",
  desc: "全国100校以上展開のキッズダンススクール。現役プロダンサー講師200名以上在籍。3歳のリトルクラスから本格コースまで充実。ヒップホップ・ジャズ・K-POPなど多ジャンル対応。発表会・コンクールも充実。",
  color: "#E53935", emoji: "🏆",
  tags: ["全国100校以上", "初回体験無料", "3歳〜OK", "プロ講師200名+", "多ジャンル対応", "発表会充実"]
};

const EXPG = {
  name: "EXPG DANCE & VOCAL STUDIO",
  rating: 4.5, fee: 12100, age: "3歳〜",
  url: "https://expg.jp/",
  desc: "LDH系列のダンス・ボーカルスクール。プロを目指す本格派向け。月謝高めだが指導レベルは高い。",
  color: "#1A1A1A", emoji: "⭐",
  tags: ["LDH系列", "プロ志向", "ボーカルも学べる"]
};

const AVEX = {
  name: "エイベックス・ダンスマスター",
  rating: 4.4, fee: 11000, age: "年中〜高校生",
  url: "https://dancemaster.avex.jp/",
  desc: "エイベックス直営のキッズダンススクール。初心者が楽しめる環境を重視。ショッピングモール内が多く通いやすい。",
  color: "#1B2A4A", emoji: "💫",
  tags: ["エイベックス直営", "初心者歓迎", "ショッピングモール内"]
};

const BDC = {
  name: "ブレスダンスカンパニー",
  rating: 4.3, fee: 8800, age: "3歳〜",
  url: "https://www.bdc.jp/",
  desc: "全国展開のダンススクール。ヒップホップ・K-POP・バレエなど幅広いジャンルに対応。初心者歓迎。",
  color: "#6A1B9A", emoji: "💜",
  tags: ["全国展開", "多ジャンル", "初心者OK"]
};

const STD_DANCE_FAQS = (prefName) => [
  { q: `${prefName}のダンス教室は何歳から通えますか？`, a: "リディアダンスアカデミーをはじめ、多くのスクールは3歳から通えます。リトルクラス・幼児コースを充実させているスクールが増えています。" },
  { q: `${prefName}のダンスの月謝相場は？`, a: "週1回で月6,000〜12,000円が一般的です。リディアダンスアカデミーは月7,700円〜で、初回体験無料です。" },
  { q: "女の子だけでなく男の子もダンスを習えますか？", a: "もちろんです。ヒップホップやブレイクダンスは男の子にも大人気です。性別問わず歓迎しているスクールがほとんどです。" },
  { q: "ダンスを習うとどんな効果がありますか？", a: "リズム感・柔軟性・集中力・協調性・表現力が身につきます。発表会を通じて自己肯定感も高まります。" },
];

const STD_DANCE_BLOGS = [
  { href: "/blog/kids-dance-age-guide", text: "子供ダンスは何歳から始める？完全ガイド" },
  { href: "/blog/osaka-kids-dance-school-ranking", text: "大阪キッズダンス教室おすすめランキング" },
  { href: "/blog/kids-hiphop-dance-guide", text: "子供ヒップホップダンス教室の選び方" },
  { href: "/blog/kids-kpop-dance-school", text: "子供K-POPダンス教室おすすめ" },
  { href: "/blog/lydia-dance-academy-review", text: "リディアダンスアカデミーの評判・口コミ" },
];

export const DANCE_PREFS = {
  osaka: {
    name: "大阪府",
    heroText: "関西最大都市・大阪の子どもダンス教室",
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
    schools: [
      { ...LYDIA, desc: "全国100校以上展開のキッズダンススクール。牧落校・船場阪大前校など大阪各地に展開。現役プロダンサー講師200名以上在籍。3歳のリトルクラスから本格コースまで充実。ヒップホップ・ジャズ・K-POPなど多ジャンル対応。発表会・コンクールも充実。", tags: ["大阪府内多数展開", "初回体験無料", "3歳〜OK", "プロ講師200名+", "多ジャンル対応", "発表会充実"] },
      EXPG, AVEX, BDC
    ],
    faqs: STD_DANCE_FAQS("大阪府"),
    blogs: STD_DANCE_BLOGS,
    otherPrefs: [
      { slug: "tokyo", name: "東京都" }, { slug: "kanagawa", name: "神奈川県" },
      { slug: "aichi", name: "愛知県" }, { slug: "kyoto", name: "京都府" },
      { slug: "hyogo", name: "兵庫県" },
    ],
  },
  tokyo: {
    name: "東京都",
    heroText: "首都・東京の子ども向けダンス教室",
    areas: [
      { slug: "chofu", name: "調布市" }, { slug: "edogawa", name: "江戸川区" },
      { slug: "kita", name: "北区" }, { slug: "machida", name: "町田市" },
      { slug: "meguro", name: "目黒区" }, { slug: "minato", name: "港区" },
      { slug: "nerima", name: "練馬区" }, { slug: "setagaya", name: "世田谷区" },
      { slug: "shibuya", name: "渋谷区" }, { slug: "shinagawa", name: "品川区" },
      { slug: "shinjuku", name: "新宿区" }, { slug: "suginami", name: "杉並区" },
    ],
    schools: [LYDIA, EXPG, AVEX, BDC],
    faqs: STD_DANCE_FAQS("東京都"),
    blogs: STD_DANCE_BLOGS,
    otherPrefs: [
      { slug: "kanagawa", name: "神奈川県" }, { slug: "saitama", name: "埼玉県" },
      { slug: "chiba", name: "千葉県" }, { slug: "osaka", name: "大阪府" },
    ],
  },
  kanagawa: {
    name: "神奈川県",
    heroText: "横浜・川崎を擁する神奈川県の子どもダンス教室",
    areas: [
      { slug: "aoba", name: "青葉区" }, { slug: "atsugi", name: "厚木市" },
      { slug: "ebina", name: "海老名市" }, { slug: "fujisawa", name: "藤沢市" },
      { slug: "kohoku", name: "港北区" }, { slug: "midori", name: "緑区" },
      { slug: "nakahara", name: "中原区" }, { slug: "nakahara-shinjou", name: "中原区（新城）" },
      { slug: "sagamihara", name: "相模原市" }, { slug: "takatsu", name: "高津区" },
      { slug: "tsuzuki", name: "都筑区" }, { slug: "yamato", name: "大和市" },
      { slug: "yokosuka", name: "横須賀市" }, { slug: "zushi", name: "逗子市" },
    ],
    schools: [LYDIA, EXPG, AVEX, BDC],
    faqs: STD_DANCE_FAQS("神奈川県"),
    blogs: STD_DANCE_BLOGS,
    otherPrefs: [
      { slug: "tokyo", name: "東京都" }, { slug: "saitama", name: "埼玉県" },
      { slug: "chiba", name: "千葉県" }, { slug: "shizuoka", name: "静岡県" },
    ],
  },
  aichi: {
    name: "愛知県",
    heroText: "名古屋を中心とした愛知県の子どもダンス教室",
    areas: [
      { slug: "anjo", name: "安城市" }, { slug: "chikusa", name: "千種区" },
      { slug: "meito", name: "名東区" }, { slug: "midori", name: "緑区" },
      { slug: "moriyama", name: "守山区" }, { slug: "nisshin", name: "日進市" },
      { slug: "owariasahi", name: "尾張旭市" }, { slug: "tenpaku", name: "天白区" },
      { slug: "toyota", name: "豊田市" },
    ],
    schools: [LYDIA, EXPG, AVEX, BDC],
    faqs: STD_DANCE_FAQS("愛知県"),
    blogs: STD_DANCE_BLOGS,
    otherPrefs: [
      { slug: "osaka", name: "大阪府" }, { slug: "gifu", name: "岐阜県" },
      { slug: "shizuoka", name: "静岡県" }, { slug: "mie", name: "三重県" },
    ],
  },
  gifu: {
    name: "岐阜県",
    heroText: "岐阜県の子ども向けダンス教室",
    areas: [
      { slug: "gifu-city", name: "岐阜市" }, { slug: "kani", name: "可児市" },
      { slug: "minokamo", name: "美濃加茂市" }, { slug: "tajimi", name: "多治見市" },
    ],
    schools: [LYDIA, EXPG, AVEX, BDC],
    faqs: STD_DANCE_FAQS("岐阜県"),
    blogs: STD_DANCE_BLOGS,
    otherPrefs: [
      { slug: "aichi", name: "愛知県" }, { slug: "shizuoka", name: "静岡県" },
      { slug: "nagano", name: "長野県" }, { slug: "mie", name: "三重県" },
    ],
  },
  hyogo: {
    name: "兵庫県",
    heroText: "神戸・西宮を擁する兵庫県の子どもダンス教室",
    areas: [
      { slug: "nishinomiya", name: "西宮市" },
    ],
    schools: [LYDIA, EXPG, AVEX, BDC],
    faqs: STD_DANCE_FAQS("兵庫県"),
    blogs: STD_DANCE_BLOGS,
    otherPrefs: [
      { slug: "osaka", name: "大阪府" }, { slug: "kyoto", name: "京都府" },
      { slug: "nara", name: "奈良県" }, { slug: "wakayama", name: "和歌山県" },
    ],
  },
  ibaraki: {
    name: "茨城県",
    heroText: "茨城県の子ども向けダンス教室",
    areas: [
      { slug: "hitachi", name: "日立市" }, { slug: "hitachinaka", name: "ひたちなか市" },
      { slug: "mito", name: "水戸市" }, { slug: "tsuchiura", name: "土浦市" },
      { slug: "tsukuba", name: "つくば市" },
    ],
    schools: [LYDIA, EXPG, AVEX, BDC],
    faqs: STD_DANCE_FAQS("茨城県"),
    blogs: STD_DANCE_BLOGS,
    otherPrefs: [
      { slug: "tokyo", name: "東京都" }, { slug: "saitama", name: "埼玉県" },
      { slug: "chiba", name: "千葉県" }, { slug: "tochigi", name: "栃木県" },
    ],
  },
  ishikawa: {
    name: "石川県",
    heroText: "金沢を中心とした石川県の子どもダンス教室",
    areas: [
      { slug: "kanazawa", name: "金沢市" }, { slug: "nonoichi", name: "野々市市" },
      { slug: "uchinada", name: "内灘町" },
    ],
    schools: [LYDIA, EXPG, AVEX, BDC],
    faqs: STD_DANCE_FAQS("石川県"),
    blogs: STD_DANCE_BLOGS,
    otherPrefs: [
      { slug: "toyama", name: "富山県" }, { slug: "fukui", name: "福井県" },
      { slug: "niigata", name: "新潟県" }, { slug: "nagano", name: "長野県" },
    ],
  },
  kyoto: {
    name: "京都府",
    heroText: "古都・京都の子ども向けダンス教室",
    areas: [
      { slug: "kyoto-city", name: "京都市" },
    ],
    schools: [LYDIA, EXPG, AVEX, BDC],
    faqs: STD_DANCE_FAQS("京都府"),
    blogs: STD_DANCE_BLOGS,
    otherPrefs: [
      { slug: "osaka", name: "大阪府" }, { slug: "hyogo", name: "兵庫県" },
      { slug: "shiga", name: "滋賀県" }, { slug: "nara", name: "奈良県" },
    ],
  },
  nagano: {
    name: "長野県",
    heroText: "長野県の子ども向けダンス教室",
    areas: [
      { slug: "nagano-city", name: "長野市" },
    ],
    schools: [LYDIA, EXPG, AVEX, BDC],
    faqs: STD_DANCE_FAQS("長野県"),
    blogs: STD_DANCE_BLOGS,
    otherPrefs: [
      { slug: "tokyo", name: "東京都" }, { slug: "aichi", name: "愛知県" },
      { slug: "gifu", name: "岐阜県" }, { slug: "niigata", name: "新潟県" },
    ],
  },
  shiga: {
    name: "滋賀県",
    heroText: "琵琶湖を擁する滋賀県の子どもダンス教室",
    areas: [
      { slug: "kusatsu", name: "草津市" }, { slug: "otsu", name: "大津市" },
    ],
    schools: [LYDIA, EXPG, AVEX, BDC],
    faqs: STD_DANCE_FAQS("滋賀県"),
    blogs: STD_DANCE_BLOGS,
    otherPrefs: [
      { slug: "osaka", name: "大阪府" }, { slug: "kyoto", name: "京都府" },
      { slug: "hyogo", name: "兵庫県" }, { slug: "mie", name: "三重県" },
    ],
  },
  wakayama: {
    name: "和歌山県",
    heroText: "和歌山県の子ども向けダンス教室",
    areas: [
      { slug: "wakayama-city", name: "和歌山市" },
    ],
    schools: [LYDIA, EXPG, AVEX, BDC],
    faqs: STD_DANCE_FAQS("和歌山県"),
    blogs: STD_DANCE_BLOGS,
    otherPrefs: [
      { slug: "osaka", name: "大阪府" }, { slug: "hyogo", name: "兵庫県" },
      { slug: "nara", name: "奈良県" }, { slug: "mie", name: "三重県" },
    ],
  },
  saitama: {
    name: "埼玉県",
    heroText: "埼玉県の子ども向けダンス教室",
    areas: [
      { slug: "kawaguchi", name: "川口市" }, { slug: "koshigaya", name: "越谷市" },
      { slug: "minami", name: "南区" }, { slug: "urawa", name: "浦和区" },
    ],
    schools: [LYDIA, EXPG, AVEX, BDC],
    faqs: STD_DANCE_FAQS("埼玉県"),
    blogs: STD_DANCE_BLOGS,
    otherPrefs: [
      { slug: "tokyo", name: "東京都" }, { slug: "kanagawa", name: "神奈川県" },
      { slug: "chiba", name: "千葉県" }, { slug: "gunma", name: "群馬県" },
    ],
  },
  chiba: {
    name: "千葉県",
    heroText: "千葉県の子ども向けダンス教室",
    areas: [
      { slug: "chiba-city", name: "千葉市" }, { slug: "kashiwa", name: "柏市" },
      { slug: "matsudo", name: "松戸市" },
    ],
    schools: [LYDIA, EXPG, AVEX, BDC],
    faqs: STD_DANCE_FAQS("千葉県"),
    blogs: STD_DANCE_BLOGS,
    otherPrefs: [
      { slug: "tokyo", name: "東京都" }, { slug: "saitama", name: "埼玉県" },
      { slug: "kanagawa", name: "神奈川県" }, { slug: "ibaraki", name: "茨城県" },
    ],
  },
  fukuoka: {
    name: "福岡県",
    heroText: "九州最大の都市・福岡の子どもダンス教室",
    areas: [],
    schools: [LYDIA, EXPG, AVEX, BDC],
    faqs: STD_DANCE_FAQS("福岡県"),
    blogs: STD_DANCE_BLOGS,
    otherPrefs: [
      { slug: "saga", name: "佐賀県" }, { slug: "nagasaki", name: "長崎県" },
      { slug: "kumamoto", name: "熊本県" }, { slug: "oita", name: "大分県" },
    ],
  },
  hokkaido: {
    name: "北海道",
    heroText: "北海道の子ども向けダンス教室",
    areas: [],
    schools: [LYDIA, EXPG, AVEX, BDC],
    faqs: STD_DANCE_FAQS("北海道"),
    blogs: STD_DANCE_BLOGS,
    otherPrefs: [
      { slug: "aomori", name: "青森県" }, { slug: "iwate", name: "岩手県" },
      { slug: "miyagi", name: "宮城県" }, { slug: "akita", name: "秋田県" },
    ],
  },
  miyagi: {
    name: "宮城県",
    heroText: "仙台を擁する宮城県の子どもダンス教室",
    areas: [],
    schools: [LYDIA, EXPG, AVEX, BDC],
    faqs: STD_DANCE_FAQS("宮城県"),
    blogs: STD_DANCE_BLOGS,
    otherPrefs: [
      { slug: "fukushima", name: "福島県" }, { slug: "yamagata", name: "山形県" },
      { slug: "iwate", name: "岩手県" }, { slug: "akita", name: "秋田県" },
    ],
  },
  hiroshima: {
    name: "広島県",
    heroText: "広島県の子ども向けダンス教室",
    areas: [],
    schools: [LYDIA, EXPG, AVEX, BDC],
    faqs: STD_DANCE_FAQS("広島県"),
    blogs: STD_DANCE_BLOGS,
    otherPrefs: [
      { slug: "okayama", name: "岡山県" }, { slug: "yamaguchi", name: "山口県" },
      { slug: "shimane", name: "島根県" }, { slug: "tottori", name: "鳥取県" },
    ],
  },
  shizuoka: {
    name: "静岡県",
    heroText: "静岡県の子どもダンス教室",
    areas: [],
    schools: [LYDIA, EXPG, AVEX, BDC],
    faqs: STD_DANCE_FAQS("静岡県"),
    blogs: STD_DANCE_BLOGS,
    otherPrefs: [
      { slug: "aichi", name: "愛知県" }, { slug: "kanagawa", name: "神奈川県" },
      { slug: "nagano", name: "長野県" }, { slug: "yamanashi", name: "山梨県" },
    ],
  },
  okayama: {
    name: "岡山県",
    heroText: "岡山県の子ども向けダンス教室",
    areas: [],
    schools: [LYDIA, EXPG, AVEX, BDC],
    faqs: STD_DANCE_FAQS("岡山県"),
    blogs: STD_DANCE_BLOGS,
    otherPrefs: [
      { slug: "hiroshima", name: "広島県" }, { slug: "tottori", name: "鳥取県" },
      { slug: "hyogo", name: "兵庫県" }, { slug: "kagawa", name: "香川県" },
    ],
  },
  niigata: {
    name: "新潟県",
    heroText: "新潟県の子ども向けダンス教室",
    areas: [],
    schools: [LYDIA, EXPG, AVEX, BDC],
    faqs: STD_DANCE_FAQS("新潟県"),
    blogs: STD_DANCE_BLOGS,
    otherPrefs: [
      { slug: "nagano", name: "長野県" }, { slug: "fukushima", name: "福島県" },
      { slug: "yamagata", name: "山形県" }, { slug: "toyama", name: "富山県" },
    ],
  },
  tochigi: {
    name: "栃木県",
    heroText: "栃木県の子ども向けダンス教室",
    areas: [],
    schools: [LYDIA, EXPG, AVEX, BDC],
    faqs: STD_DANCE_FAQS("栃木県"),
    blogs: STD_DANCE_BLOGS,
    otherPrefs: [
      { slug: "tokyo", name: "東京都" }, { slug: "saitama", name: "埼玉県" },
      { slug: "gunma", name: "群馬県" }, { slug: "ibaraki", name: "茨城県" },
    ],
  },
  gunma: {
    name: "群馬県",
    heroText: "群馬県の子ども向けダンス教室",
    areas: [],
    schools: [LYDIA, EXPG, AVEX, BDC],
    faqs: STD_DANCE_FAQS("群馬県"),
    blogs: STD_DANCE_BLOGS,
    otherPrefs: [
      { slug: "tokyo", name: "東京都" }, { slug: "saitama", name: "埼玉県" },
      { slug: "tochigi", name: "栃木県" }, { slug: "nagano", name: "長野県" },
    ],
  },
  mie: {
    name: "三重県",
    heroText: "三重県の子ども向けダンス教室",
    areas: [],
    schools: [LYDIA, EXPG, AVEX, BDC],
    faqs: STD_DANCE_FAQS("三重県"),
    blogs: STD_DANCE_BLOGS,
    otherPrefs: [
      { slug: "aichi", name: "愛知県" }, { slug: "osaka", name: "大阪府" },
      { slug: "kyoto", name: "京都府" }, { slug: "nara", name: "奈良県" },
    ],
  },
  nara: {
    name: "奈良県",
    heroText: "奈良県の子ども向けダンス教室",
    areas: [],
    schools: [LYDIA, EXPG, AVEX, BDC],
    faqs: STD_DANCE_FAQS("奈良県"),
    blogs: STD_DANCE_BLOGS,
    otherPrefs: [
      { slug: "osaka", name: "大阪府" }, { slug: "kyoto", name: "京都府" },
      { slug: "hyogo", name: "兵庫県" }, { slug: "wakayama", name: "和歌山県" },
    ],
  },
  fukui: {
    name: "福井県",
    heroText: "福井県の子ども向けダンス教室",
    areas: [],
    schools: [LYDIA, EXPG, AVEX, BDC],
    faqs: STD_DANCE_FAQS("福井県"),
    blogs: STD_DANCE_BLOGS,
    otherPrefs: [
      { slug: "ishikawa", name: "石川県" }, { slug: "toyama", name: "富山県" },
      { slug: "gifu", name: "岐阜県" }, { slug: "kyoto", name: "京都府" },
    ],
  },
  toyama: {
    name: "富山県",
    heroText: "富山県の子ども向けダンス教室",
    areas: [],
    schools: [LYDIA, EXPG, AVEX, BDC],
    faqs: STD_DANCE_FAQS("富山県"),
    blogs: STD_DANCE_BLOGS,
    otherPrefs: [
      { slug: "ishikawa", name: "石川県" }, { slug: "fukui", name: "福井県" },
      { slug: "niigata", name: "新潟県" }, { slug: "nagano", name: "長野県" },
    ],
  },
  yamanashi: {
    name: "山梨県",
    heroText: "山梨県の子ども向けダンス教室",
    areas: [],
    schools: [LYDIA, EXPG, AVEX, BDC],
    faqs: STD_DANCE_FAQS("山梨県"),
    blogs: STD_DANCE_BLOGS,
    otherPrefs: [
      { slug: "tokyo", name: "東京都" }, { slug: "kanagawa", name: "神奈川県" },
      { slug: "shizuoka", name: "静岡県" }, { slug: "nagano", name: "長野県" },
    ],
  },
  tottori: {
    name: "鳥取県",
    heroText: "鳥取県の子ども向けダンス教室",
    areas: [],
    schools: [LYDIA, EXPG, AVEX, BDC],
    faqs: STD_DANCE_FAQS("鳥取県"),
    blogs: STD_DANCE_BLOGS,
    otherPrefs: [
      { slug: "shimane", name: "島根県" }, { slug: "okayama", name: "岡山県" },
      { slug: "hiroshima", name: "広島県" }, { slug: "hyogo", name: "兵庫県" },
    ],
  },
  shimane: {
    name: "島根県",
    heroText: "島根県の子ども向けダンス教室",
    areas: [],
    schools: [LYDIA, EXPG, AVEX, BDC],
    faqs: STD_DANCE_FAQS("島根県"),
    blogs: STD_DANCE_BLOGS,
    otherPrefs: [
      { slug: "tottori", name: "鳥取県" }, { slug: "hiroshima", name: "広島県" },
      { slug: "yamaguchi", name: "山口県" }, { slug: "okayama", name: "岡山県" },
    ],
  },
  kochi: {
    name: "高知県",
    heroText: "高知県の子ども向けダンス教室",
    areas: [],
    schools: [LYDIA, EXPG, AVEX, BDC],
    faqs: STD_DANCE_FAQS("高知県"),
    blogs: STD_DANCE_BLOGS,
    otherPrefs: [
      { slug: "tokushima", name: "徳島県" }, { slug: "ehime", name: "愛媛県" },
      { slug: "kagawa", name: "香川県" }, { slug: "hiroshima", name: "広島県" },
    ],
  },
  tokushima: {
    name: "徳島県",
    heroText: "徳島県の子ども向けダンス教室",
    areas: [],
    schools: [LYDIA, EXPG, AVEX, BDC],
    faqs: STD_DANCE_FAQS("徳島県"),
    blogs: STD_DANCE_BLOGS,
    otherPrefs: [
      { slug: "kagawa", name: "香川県" }, { slug: "ehime", name: "愛媛県" },
      { slug: "kochi", name: "高知県" }, { slug: "hyogo", name: "兵庫県" },
    ],
  },
  kagawa: {
    name: "香川県",
    heroText: "香川県の子ども向けダンス教室",
    areas: [],
    schools: [LYDIA, EXPG, AVEX, BDC],
    faqs: STD_DANCE_FAQS("香川県"),
    blogs: STD_DANCE_BLOGS,
    otherPrefs: [
      { slug: "tokushima", name: "徳島県" }, { slug: "ehime", name: "愛媛県" },
      { slug: "kochi", name: "高知県" }, { slug: "okayama", name: "岡山県" },
    ],
  },
  saga: {
    name: "佐賀県",
    heroText: "佐賀県の子ども向けダンス教室",
    areas: [],
    schools: [LYDIA, EXPG, AVEX, BDC],
    faqs: STD_DANCE_FAQS("佐賀県"),
    blogs: STD_DANCE_BLOGS,
    otherPrefs: [
      { slug: "fukuoka", name: "福岡県" }, { slug: "nagasaki", name: "長崎県" },
      { slug: "kumamoto", name: "熊本県" }, { slug: "oita", name: "大分県" },
    ],
  },
  oita: {
    name: "大分県",
    heroText: "大分県の子ども向けダンス教室",
    areas: [],
    schools: [LYDIA, EXPG, AVEX, BDC],
    faqs: STD_DANCE_FAQS("大分県"),
    blogs: STD_DANCE_BLOGS,
    otherPrefs: [
      { slug: "fukuoka", name: "福岡県" }, { slug: "kumamoto", name: "熊本県" },
      { slug: "miyazaki", name: "宮崎県" }, { slug: "ehime", name: "愛媛県" },
    ],
  },
  miyazaki: {
    name: "宮崎県",
    heroText: "宮崎県の子ども向けダンス教室",
    areas: [],
    schools: [LYDIA, EXPG, AVEX, BDC],
    faqs: STD_DANCE_FAQS("宮崎県"),
    blogs: STD_DANCE_BLOGS,
    otherPrefs: [
      { slug: "fukuoka", name: "福岡県" }, { slug: "oita", name: "大分県" },
      { slug: "kumamoto", name: "熊本県" }, { slug: "kagoshima", name: "鹿児島県" },
    ],
  },
  okinawa: {
    name: "沖縄県",
    heroText: "沖縄県の子ども向けダンス教室",
    areas: [],
    schools: [LYDIA, EXPG, AVEX, BDC],
    faqs: STD_DANCE_FAQS("沖縄県"),
    blogs: STD_DANCE_BLOGS,
    otherPrefs: [
      { slug: "kagoshima", name: "鹿児島県" }, { slug: "fukuoka", name: "福岡県" },
      { slug: "miyazaki", name: "宮崎県" }, { slug: "kumamoto", name: "熊本県" },
    ],
  },
  kumamoto: {
    name: "熊本県",
    heroText: "熊本県の子ども向けダンス教室",
    areas: [],
    schools: [LYDIA, EXPG, AVEX, BDC],
    faqs: STD_DANCE_FAQS("熊本県"),
    blogs: STD_DANCE_BLOGS,
    otherPrefs: [
      { slug: "fukuoka", name: "福岡県" }, { slug: "saga", name: "佐賀県" },
      { slug: "nagasaki", name: "長崎県" }, { slug: "oita", name: "大分県" },
    ],
  },
  kagoshima: {
    name: "鹿児島県",
    heroText: "鹿児島県の子ども向けダンス教室",
    areas: [],
    schools: [LYDIA, EXPG, AVEX, BDC],
    faqs: STD_DANCE_FAQS("鹿児島県"),
    blogs: STD_DANCE_BLOGS,
    otherPrefs: [
      { slug: "fukuoka", name: "福岡県" }, { slug: "kumamoto", name: "熊本県" },
      { slug: "miyazaki", name: "宮崎県" }, { slug: "okinawa", name: "沖縄県" },
    ],
  },
  nagasaki: {
    name: "長崎県",
    heroText: "長崎県の子ども向けダンス教室",
    areas: [],
    schools: [LYDIA, EXPG, AVEX, BDC],
    faqs: STD_DANCE_FAQS("長崎県"),
    blogs: STD_DANCE_BLOGS,
    otherPrefs: [
      { slug: "fukuoka", name: "福岡県" }, { slug: "saga", name: "佐賀県" },
      { slug: "kumamoto", name: "熊本県" }, { slug: "oita", name: "大分県" },
    ],
  },
  ehime: {
    name: "愛媛県",
    heroText: "愛媛県の子ども向けダンス教室",
    areas: [],
    schools: [LYDIA, EXPG, AVEX, BDC],
    faqs: STD_DANCE_FAQS("愛媛県"),
    blogs: STD_DANCE_BLOGS,
    otherPrefs: [
      { slug: "kagawa", name: "香川県" }, { slug: "tokushima", name: "徳島県" },
      { slug: "kochi", name: "高知県" }, { slug: "hiroshima", name: "広島県" },
    ],
  },
  yamaguchi: {
    name: "山口県",
    heroText: "山口県の子ども向けダンス教室",
    areas: [],
    schools: [LYDIA, EXPG, AVEX, BDC],
    faqs: STD_DANCE_FAQS("山口県"),
    blogs: STD_DANCE_BLOGS,
    otherPrefs: [
      { slug: "hiroshima", name: "広島県" }, { slug: "shimane", name: "島根県" },
      { slug: "fukuoka", name: "福岡県" }, { slug: "tottori", name: "鳥取県" },
    ],
  },
  fukushima: {
    name: "福島県",
    heroText: "福島県の子ども向けダンス教室",
    areas: [],
    schools: [LYDIA, EXPG, AVEX, BDC],
    faqs: STD_DANCE_FAQS("福島県"),
    blogs: STD_DANCE_BLOGS,
    otherPrefs: [
      { slug: "miyagi", name: "宮城県" }, { slug: "yamagata", name: "山形県" },
      { slug: "ibaraki", name: "茨城県" }, { slug: "niigata", name: "新潟県" },
    ],
  },
  akita: {
    name: "秋田県",
    heroText: "秋田県の子ども向けダンス教室",
    areas: [],
    schools: [LYDIA, EXPG, AVEX, BDC],
    faqs: STD_DANCE_FAQS("秋田県"),
    blogs: STD_DANCE_BLOGS,
    otherPrefs: [
      { slug: "miyagi", name: "宮城県" }, { slug: "iwate", name: "岩手県" },
      { slug: "yamagata", name: "山形県" }, { slug: "aomori", name: "青森県" },
    ],
  },
  yamagata: {
    name: "山形県",
    heroText: "山形県の子ども向けダンス教室",
    areas: [],
    schools: [LYDIA, EXPG, AVEX, BDC],
    faqs: STD_DANCE_FAQS("山形県"),
    blogs: STD_DANCE_BLOGS,
    otherPrefs: [
      { slug: "miyagi", name: "宮城県" }, { slug: "akita", name: "秋田県" },
      { slug: "fukushima", name: "福島県" }, { slug: "niigata", name: "新潟県" },
    ],
  },
  iwate: {
    name: "岩手県",
    heroText: "岩手県の子ども向けダンス教室",
    areas: [],
    schools: [LYDIA, EXPG, AVEX, BDC],
    faqs: STD_DANCE_FAQS("岩手県"),
    blogs: STD_DANCE_BLOGS,
    otherPrefs: [
      { slug: "miyagi", name: "宮城県" }, { slug: "akita", name: "秋田県" },
      { slug: "aomori", name: "青森県" }, { slug: "fukushima", name: "福島県" },
    ],
  },
  aomori: {
    name: "青森県",
    heroText: "青森県の子ども向けダンス教室",
    areas: [],
    schools: [LYDIA, EXPG, AVEX, BDC],
    faqs: STD_DANCE_FAQS("青森県"),
    blogs: STD_DANCE_BLOGS,
    otherPrefs: [
      { slug: "iwate", name: "岩手県" }, { slug: "akita", name: "秋田県" },
      { slug: "miyagi", name: "宮城県" }, { slug: "hokkaido", name: "北海道" },
    ],
  },
};

// ────────────────────────────────────────────
// DANCE_AREAS: エリア別データ（SOCCER_AREASと同じキー構造）
// ────────────────────────────────────────────

function areaDanceSchools(areaName, prefName) {
  return [
    { ...LYDIA, desc: `${prefName}${areaName}エリアに対応。全国100校以上展開のキッズダンススクール。現役プロダンサー講師200名以上在籍。3歳のリトルクラスから本格コースまで充実。ヒップホップ・ジャズ・K-POPなど多ジャンル対応。発表会・コンクールも充実。` },
    { ...EXPG },
    { ...AVEX },
    { ...BDC },
  ];
}

export const DANCE_AREAS = {
  // ── 大阪府 ──
  "osaka/osaka-city": { name: "大阪市", prefName: "大阪府", prefSlug: "osaka", schools: areaDanceSchools("大阪市", "大阪府") },
  "osaka/minoh": { name: "箕面市", prefName: "大阪府", prefSlug: "osaka", schools: [
    { ...LYDIA, desc: "箕面市内に6校展開する人気No.1ダンススクール。牧落校・船場阪大前校・桜井校・森町校・彩都西校など箕面市内に多数展開。現役プロダンサー講師200名以上在籍。3歳のリトルクラスから本格コースまで充実。ヒップホップ・ジャズ・K-POPなど多ジャンル対応。", tags: ["箕面市内6校展開", "初回体験無料", "3歳〜OK", "プロ講師200名+", "多ジャンル対応", "発表会充実"] },
    EXPG, AVEX, BDC,
  ]},
  "osaka/moriguchi": { name: "守口市", prefName: "大阪府", prefSlug: "osaka", schools: areaDanceSchools("守口市", "大阪府") },
  "osaka/sakai": { name: "堺市", prefName: "大阪府", prefSlug: "osaka", schools: areaDanceSchools("堺市", "大阪府") },
  "osaka/suita": { name: "吹田市", prefName: "大阪府", prefSlug: "osaka", schools: areaDanceSchools("吹田市", "大阪府") },
  "osaka/takatsuki": { name: "高槻市", prefName: "大阪府", prefSlug: "osaka", schools: areaDanceSchools("高槻市", "大阪府") },
  "osaka/toyonaka": { name: "豊中市", prefName: "大阪府", prefSlug: "osaka", schools: areaDanceSchools("豊中市", "大阪府") },
  "osaka/ibaraki": { name: "茨木市", prefName: "大阪府", prefSlug: "osaka", schools: areaDanceSchools("茨木市", "大阪府") },
  // ── 愛知県 ──
  "aichi/anjo": { name: "安城市", prefName: "愛知県", prefSlug: "aichi", schools: areaDanceSchools("安城市", "愛知県") },
  "aichi/chikusa": { name: "千種区", prefName: "愛知県", prefSlug: "aichi", schools: areaDanceSchools("千種区", "愛知県") },
  "aichi/meito": { name: "名東区", prefName: "愛知県", prefSlug: "aichi", schools: areaDanceSchools("名東区", "愛知県") },
  "aichi/midori": { name: "緑区", prefName: "愛知県", prefSlug: "aichi", schools: areaDanceSchools("緑区", "愛知県") },
  "aichi/moriyama": { name: "守山区", prefName: "愛知県", prefSlug: "aichi", schools: areaDanceSchools("守山区", "愛知県") },
  "aichi/nisshin": { name: "日進市", prefName: "愛知県", prefSlug: "aichi", schools: areaDanceSchools("日進市", "愛知県") },
  "aichi/owariasahi": { name: "尾張旭市", prefName: "愛知県", prefSlug: "aichi", schools: areaDanceSchools("尾張旭市", "愛知県") },
  "aichi/tenpaku": { name: "天白区", prefName: "愛知県", prefSlug: "aichi", schools: areaDanceSchools("天白区", "愛知県") },
  "aichi/toyota": { name: "豊田市", prefName: "愛知県", prefSlug: "aichi", schools: areaDanceSchools("豊田市", "愛知県") },
  // ── 千葉県 ──
  "chiba/chiba-city": { name: "千葉市", prefName: "千葉県", prefSlug: "chiba", schools: areaDanceSchools("千葉市", "千葉県") },
  "chiba/kashiwa": { name: "柏市", prefName: "千葉県", prefSlug: "chiba", schools: areaDanceSchools("柏市", "千葉県") },
  "chiba/matsudo": { name: "松戸市", prefName: "千葉県", prefSlug: "chiba", schools: areaDanceSchools("松戸市", "千葉県") },
  // ── 岐阜県 ──
  "gifu/gifu-city": { name: "岐阜市", prefName: "岐阜県", prefSlug: "gifu", schools: areaDanceSchools("岐阜市", "岐阜県") },
  "gifu/kani": { name: "可児市", prefName: "岐阜県", prefSlug: "gifu", schools: areaDanceSchools("可児市", "岐阜県") },
  "gifu/minokamo": { name: "美濃加茂市", prefName: "岐阜県", prefSlug: "gifu", schools: areaDanceSchools("美濃加茂市", "岐阜県") },
  "gifu/tajimi": { name: "多治見市", prefName: "岐阜県", prefSlug: "gifu", schools: areaDanceSchools("多治見市", "岐阜県") },
  // ── 兵庫県 ──
  "hyogo/nishinomiya": { name: "西宮市", prefName: "兵庫県", prefSlug: "hyogo", schools: areaDanceSchools("西宮市", "兵庫県") },
  // ── 茨城県 ──
  "ibaraki/hitachi": { name: "日立市", prefName: "茨城県", prefSlug: "ibaraki", schools: areaDanceSchools("日立市", "茨城県") },
  "ibaraki/hitachinaka": { name: "ひたちなか市", prefName: "茨城県", prefSlug: "ibaraki", schools: areaDanceSchools("ひたちなか市", "茨城県") },
  "ibaraki/mito": { name: "水戸市", prefName: "茨城県", prefSlug: "ibaraki", schools: areaDanceSchools("水戸市", "茨城県") },
  "ibaraki/tsuchiura": { name: "土浦市", prefName: "茨城県", prefSlug: "ibaraki", schools: areaDanceSchools("土浦市", "茨城県") },
  "ibaraki/tsukuba": { name: "つくば市", prefName: "茨城県", prefSlug: "ibaraki", schools: areaDanceSchools("つくば市", "茨城県") },
  // ── 石川県 ──
  "ishikawa/kanazawa": { name: "金沢市", prefName: "石川県", prefSlug: "ishikawa", schools: areaDanceSchools("金沢市", "石川県") },
  "ishikawa/nonoichi": { name: "野々市市", prefName: "石川県", prefSlug: "ishikawa", schools: areaDanceSchools("野々市市", "石川県") },
  "ishikawa/uchinada": { name: "内灘町", prefName: "石川県", prefSlug: "ishikawa", schools: areaDanceSchools("内灘町", "石川県") },
  // ── 神奈川県 ──
  "kanagawa/aoba": { name: "青葉区", prefName: "神奈川県", prefSlug: "kanagawa", schools: areaDanceSchools("青葉区", "神奈川県") },
  "kanagawa/atsugi": { name: "厚木市", prefName: "神奈川県", prefSlug: "kanagawa", schools: areaDanceSchools("厚木市", "神奈川県") },
  "kanagawa/ebina": { name: "海老名市", prefName: "神奈川県", prefSlug: "kanagawa", schools: areaDanceSchools("海老名市", "神奈川県") },
  "kanagawa/fujisawa": { name: "藤沢市", prefName: "神奈川県", prefSlug: "kanagawa", schools: areaDanceSchools("藤沢市", "神奈川県") },
  "kanagawa/kohoku": { name: "港北区", prefName: "神奈川県", prefSlug: "kanagawa", schools: areaDanceSchools("港北区", "神奈川県") },
  "kanagawa/midori": { name: "緑区", prefName: "神奈川県", prefSlug: "kanagawa", schools: areaDanceSchools("緑区", "神奈川県") },
  "kanagawa/nakahara": { name: "中原区", prefName: "神奈川県", prefSlug: "kanagawa", schools: areaDanceSchools("中原区", "神奈川県") },
  "kanagawa/nakahara-shinjou": { name: "中原区（新城）", prefName: "神奈川県", prefSlug: "kanagawa", schools: areaDanceSchools("新城", "神奈川県") },
  "kanagawa/sagamihara": { name: "相模原市", prefName: "神奈川県", prefSlug: "kanagawa", schools: areaDanceSchools("相模原市", "神奈川県") },
  "kanagawa/takatsu": { name: "高津区", prefName: "神奈川県", prefSlug: "kanagawa", schools: areaDanceSchools("高津区", "神奈川県") },
  "kanagawa/tsuzuki": { name: "都筑区", prefName: "神奈川県", prefSlug: "kanagawa", schools: areaDanceSchools("都筑区", "神奈川県") },
  "kanagawa/yamato": { name: "大和市", prefName: "神奈川県", prefSlug: "kanagawa", schools: areaDanceSchools("大和市", "神奈川県") },
  "kanagawa/yokosuka": { name: "横須賀市", prefName: "神奈川県", prefSlug: "kanagawa", schools: areaDanceSchools("横須賀市", "神奈川県") },
  "kanagawa/zushi": { name: "逗子市", prefName: "神奈川県", prefSlug: "kanagawa", schools: areaDanceSchools("逗子市", "神奈川県") },
  // ── 京都府 ──
  "kyoto/kyoto-city": { name: "京都市", prefName: "京都府", prefSlug: "kyoto", schools: areaDanceSchools("京都市", "京都府") },
  // ── 長野県 ──
  "nagano/nagano-city": { name: "長野市", prefName: "長野県", prefSlug: "nagano", schools: areaDanceSchools("長野市", "長野県") },
  // ── 埼玉県 ──
  "saitama/kawaguchi": { name: "川口市", prefName: "埼玉県", prefSlug: "saitama", schools: areaDanceSchools("川口市", "埼玉県") },
  "saitama/koshigaya": { name: "越谷市", prefName: "埼玉県", prefSlug: "saitama", schools: areaDanceSchools("越谷市", "埼玉県") },
  "saitama/minami": { name: "南区", prefName: "埼玉県", prefSlug: "saitama", schools: areaDanceSchools("南区", "埼玉県") },
  "saitama/urawa": { name: "浦和区", prefName: "埼玉県", prefSlug: "saitama", schools: areaDanceSchools("浦和区", "埼玉県") },
  // ── 滋賀県 ──
  "shiga/kusatsu": { name: "草津市", prefName: "滋賀県", prefSlug: "shiga", schools: areaDanceSchools("草津市", "滋賀県") },
  "shiga/otsu": { name: "大津市", prefName: "滋賀県", prefSlug: "shiga", schools: areaDanceSchools("大津市", "滋賀県") },
  // ── 東京都 ──
  "tokyo/chofu": { name: "調布市", prefName: "東京都", prefSlug: "tokyo", schools: areaDanceSchools("調布市", "東京都") },
  "tokyo/edogawa": { name: "江戸川区", prefName: "東京都", prefSlug: "tokyo", schools: areaDanceSchools("江戸川区", "東京都") },
  "tokyo/kita": { name: "北区", prefName: "東京都", prefSlug: "tokyo", schools: areaDanceSchools("北区", "東京都") },
  "tokyo/machida": { name: "町田市", prefName: "東京都", prefSlug: "tokyo", schools: areaDanceSchools("町田市", "東京都") },
  "tokyo/meguro": { name: "目黒区", prefName: "東京都", prefSlug: "tokyo", schools: areaDanceSchools("目黒区", "東京都") },
  "tokyo/minato": { name: "港区", prefName: "東京都", prefSlug: "tokyo", schools: areaDanceSchools("港区", "東京都") },
  "tokyo/nerima": { name: "練馬区", prefName: "東京都", prefSlug: "tokyo", schools: areaDanceSchools("練馬区", "東京都") },
  "tokyo/setagaya": { name: "世田谷区", prefName: "東京都", prefSlug: "tokyo", schools: areaDanceSchools("世田谷区", "東京都") },
  "tokyo/shibuya": { name: "渋谷区", prefName: "東京都", prefSlug: "tokyo", schools: areaDanceSchools("渋谷区", "東京都") },
  "tokyo/shinagawa": { name: "品川区", prefName: "東京都", prefSlug: "tokyo", schools: areaDanceSchools("品川区", "東京都") },
  "tokyo/shinjuku": { name: "新宿区", prefName: "東京都", prefSlug: "tokyo", schools: areaDanceSchools("新宿区", "東京都") },
  "tokyo/suginami": { name: "杉並区", prefName: "東京都", prefSlug: "tokyo", schools: areaDanceSchools("杉並区", "東京都") },
  // ── 和歌山県 ──
  "wakayama/wakayama-city": { name: "和歌山市", prefName: "和歌山県", prefSlug: "wakayama", schools: areaDanceSchools("和歌山市", "和歌山県") },
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
