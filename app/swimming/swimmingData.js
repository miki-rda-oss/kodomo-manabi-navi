// /app/swimming/swimmingData.js

const KONAMI = { name: "コナミスポーツクラブ", rating: 4.3, fee: 8250, age: "6ヶ月〜15歳", desc: "段階的な進級制度で着実にステップアップ。ベビーから選手コースまで幅広く対応。", color: "#0288D1", emoji: "🏊" };
const RENAISSANCE = { name: "ルネサンス スイミング", rating: 4.2, fee: 7150, age: "6ヶ月〜", desc: "楽しく安全に水に親しめるプログラム。コーチの質の高さに定評あり。", color: "#01579B", emoji: "🌊" };
const CENTRAL = { name: "セントラルスポーツ", rating: 4.3, fee: 8800, age: "3歳〜", desc: "全国展開のスポーツクラブ。専門コーチによる指導で確実に上達。", color: "#0288D1", emoji: "🏊" };
const JAXXA = { name: "ジャクサスイミングスクール", rating: 4.4, fee: 7700, age: "3歳〜", desc: "水泳専門スクール。進級テストで目標を持って通える。", color: "#01579B", emoji: "🌊" };
const TIPNESS = { name: "ティップネス", rating: 4.2, fee: 8800, age: "3歳〜", desc: "全国展開のフィットネスクラブのスイミングスクール。", color: "#0288D1", emoji: "🏊" };

function localSchool(name, area, desc, fee = 7700, rating = 4.2) {
  return { name, rating, fee, age: "3歳〜", desc: desc || `${area}に根ざしたスイミングスクール。少人数制で丁寧な指導を行い、専門コーチが在籍。進級制度で目標を持って通える。`, color: "#0288D1", emoji: "🏊" };
}

const STD_FAQS = (prefName) => [
  { q: `${prefName}でスイミングスクールは何歳から通えますか？`, a: "ベビースイミングは生後6ヶ月から。一般的なキッズクラスは3〜4歳からが多いです。" },
  { q: `${prefName}のスイミングスクールの月謝相場は？`, a: "週1回で6,000〜10,000円程度が相場です。" },
  { q: "水が苦手でも通えますか？", a: "水慣れクラスから始められます。専門コーチが丁寧に指導します。" },
  { q: "スイミングを習う効果は？", a: "全身運動で体力・心肺機能が向上。水難防止にも効果的です。" },
];

const STD_BLOGS = [
  { href: "/blog/kids-swimming-guide", text: "子供のスイミングスクール選び方完全ガイド" },
  { href: "/blog/kids-swimming-school-guide-2026", text: "子供スイミングスクールおすすめ2026年版" },
  { href: "/blog/kids-swimming-benefits-complete", text: "子供がスイミングを習う効果・メリット" },
  { href: "/blog/kids-swimming-fear-guide", text: "水が苦手な子供のスイミング入門ガイド" },
];

export const SWIMMING_PREFS = {
  osaka: {
    name: "大阪府",
    heroText: "関西最大都市・大阪のスイミングスクール・水泳教室",
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
    schools: [KONAMI, RENAISSANCE, CENTRAL, JAXXA, TIPNESS],
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
    heroText: "首都・東京の子ども向けスイミングスクール・水泳教室",
    areas: [
      { slug: "chofu", name: "調布市" }, { slug: "edogawa", name: "江戸川区" },
      { slug: "kita", name: "北区" }, { slug: "machida", name: "町田市" },
      { slug: "meguro", name: "目黒区" }, { slug: "minato", name: "港区" },
      { slug: "nerima", name: "練馬区" }, { slug: "setagaya", name: "世田谷区" },
      { slug: "shibuya", name: "渋谷区" }, { slug: "shinagawa", name: "品川区" },
      { slug: "shinjuku", name: "新宿区" }, { slug: "suginami", name: "杉並区" },
    ],
    schools: [KONAMI, RENAISSANCE, CENTRAL, JAXXA, TIPNESS],
    faqs: STD_FAQS("東京都"),
    blogs: STD_BLOGS,
    otherPrefs: [
      { slug: "kanagawa", name: "神奈川県" }, { slug: "saitama", name: "埼玉県" },
      { slug: "chiba", name: "千葉県" }, { slug: "osaka", name: "大阪府" },
    ],
  },
  kanagawa: {
    name: "神奈川県",
    heroText: "横浜・川崎を擁する神奈川県のスイミングスクール・水泳教室",
    areas: [
      { slug: "aoba", name: "青葉区" }, { slug: "atsugi", name: "厚木市" },
      { slug: "ebina", name: "海老名市" }, { slug: "fujisawa", name: "藤沢市" },
      { slug: "kohoku", name: "港北区" }, { slug: "midori", name: "緑区" },
      { slug: "nakahara", name: "中原区" }, { slug: "sagamihara", name: "相模原市" },
      { slug: "takatsu", name: "高津区" }, { slug: "tsuzuki", name: "都筑区" },
      { slug: "yamato", name: "大和市" }, { slug: "yokosuka", name: "横須賀市" },
      { slug: "zushi", name: "逗子市" },
    ],
    schools: [KONAMI, RENAISSANCE, CENTRAL, JAXXA, TIPNESS],
    faqs: STD_FAQS("神奈川県"),
    blogs: STD_BLOGS,
    otherPrefs: [
      { slug: "tokyo", name: "東京都" }, { slug: "saitama", name: "埼玉県" },
      { slug: "chiba", name: "千葉県" }, { slug: "shizuoka", name: "静岡県" },
    ],
  },
  aichi: {
    name: "愛知県",
    heroText: "名古屋を中心とした愛知県のスイミングスクール・水泳教室",
    areas: [
      { slug: "anjo", name: "安城市" }, { slug: "chikusa", name: "千種区" },
      { slug: "meito", name: "名東区" }, { slug: "midori", name: "緑区" },
      { slug: "moriyama", name: "守山区" }, { slug: "nisshin", name: "日進市" },
      { slug: "owariasahi", name: "尾張旭市" }, { slug: "tenpaku", name: "天白区" },
      { slug: "toyota", name: "豊田市" },
    ],
    schools: [KONAMI, RENAISSANCE, CENTRAL, JAXXA, localSchool("ナゴヤスイミングスクール", "愛知")],
    faqs: STD_FAQS("愛知県"),
    blogs: STD_BLOGS,
    otherPrefs: [
      { slug: "osaka", name: "大阪府" }, { slug: "gifu", name: "岐阜県" },
      { slug: "shizuoka", name: "静岡県" }, { slug: "mie", name: "三重県" },
    ],
  },
  gifu: {
    name: "岐阜県",
    heroText: "岐阜県の子ども向けスイミングスクール・水泳教室",
    areas: [
      { slug: "gifu-city", name: "岐阜市" }, { slug: "kani", name: "可児市" },
      { slug: "minokamo", name: "美濃加茂市" }, { slug: "tajimi", name: "多治見市" },
    ],
    schools: [KONAMI, RENAISSANCE, CENTRAL, localSchool("ぎふスイミングスクール", "岐阜"), localSchool("岐阜水泳クラブ", "岐阜")],
    faqs: STD_FAQS("岐阜県"),
    blogs: STD_BLOGS,
    otherPrefs: [
      { slug: "aichi", name: "愛知県" }, { slug: "shizuoka", name: "静岡県" },
      { slug: "nagano", name: "長野県" }, { slug: "mie", name: "三重県" },
    ],
  },
  hyogo: {
    name: "兵庫県",
    heroText: "神戸・西宮を擁する兵庫県のスイミングスクール・水泳教室",
    areas: [
      { slug: "nishinomiya", name: "西宮市" },
    ],
    schools: [KONAMI, RENAISSANCE, CENTRAL, JAXXA, localSchool("神戸スイミングスクール", "兵庫")],
    faqs: STD_FAQS("兵庫県"),
    blogs: STD_BLOGS,
    otherPrefs: [
      { slug: "osaka", name: "大阪府" }, { slug: "kyoto", name: "京都府" },
      { slug: "nara", name: "奈良県" }, { slug: "wakayama", name: "和歌山県" },
    ],
  },
  ibaraki: {
    name: "茨城県",
    heroText: "茨城県の子ども向けスイミングスクール・水泳教室",
    areas: [
      { slug: "hitachi", name: "日立市" }, { slug: "hitachinaka", name: "ひたちなか市" },
      { slug: "mito", name: "水戸市" }, { slug: "tsuchiura", name: "土浦市" },
      { slug: "tsukuba", name: "つくば市" },
    ],
    schools: [KONAMI, RENAISSANCE, CENTRAL, localSchool("茨城スイミングスクール", "茨城"), localSchool("水戸スイミングクラブ", "水戸")],
    faqs: STD_FAQS("茨城県"),
    blogs: STD_BLOGS,
    otherPrefs: [
      { slug: "tokyo", name: "東京都" }, { slug: "saitama", name: "埼玉県" },
      { slug: "chiba", name: "千葉県" }, { slug: "tochigi", name: "栃木県" },
    ],
  },
  ishikawa: {
    name: "石川県",
    heroText: "金沢を中心とした石川県のスイミングスクール・水泳教室",
    areas: [
      { slug: "kanazawa", name: "金沢市" }, { slug: "nonoichi", name: "野々市市" },
      { slug: "uchinada", name: "内灘町" },
    ],
    schools: [KONAMI, RENAISSANCE, CENTRAL, localSchool("金沢スイミングスクール", "石川"), localSchool("石川水泳クラブ", "石川")],
    faqs: STD_FAQS("石川県"),
    blogs: STD_BLOGS,
    otherPrefs: [
      { slug: "toyama", name: "富山県" }, { slug: "fukui", name: "福井県" },
      { slug: "niigata", name: "新潟県" }, { slug: "nagano", name: "長野県" },
    ],
  },
  kyoto: {
    name: "京都府",
    heroText: "古都・京都の子ども向けスイミングスクール・水泳教室",
    areas: [
      { slug: "kyoto-city", name: "京都市" },
    ],
    schools: [KONAMI, RENAISSANCE, CENTRAL, JAXXA, localSchool("京都スイミングスクール", "京都")],
    faqs: STD_FAQS("京都府"),
    blogs: STD_BLOGS,
    otherPrefs: [
      { slug: "osaka", name: "大阪府" }, { slug: "hyogo", name: "兵庫県" },
      { slug: "shiga", name: "滋賀県" }, { slug: "nara", name: "奈良県" },
    ],
  },
  nagano: {
    name: "長野県",
    heroText: "長野県の子ども向けスイミングスクール・水泳教室",
    areas: [
      { slug: "nagano-city", name: "長野市" },
    ],
    schools: [KONAMI, RENAISSANCE, CENTRAL, localSchool("長野スイミングスクール", "長野"), localSchool("長野水泳クラブ", "長野")],
    faqs: STD_FAQS("長野県"),
    blogs: STD_BLOGS,
    otherPrefs: [
      { slug: "tokyo", name: "東京都" }, { slug: "aichi", name: "愛知県" },
      { slug: "gifu", name: "岐阜県" }, { slug: "niigata", name: "新潟県" },
    ],
  },
  shiga: {
    name: "滋賀県",
    heroText: "琵琶湖を擁する滋賀県のスイミングスクール・水泳教室",
    areas: [
      { slug: "kusatsu", name: "草津市" }, { slug: "otsu", name: "大津市" },
    ],
    schools: [KONAMI, RENAISSANCE, CENTRAL, localSchool("しがスイミングスクール", "滋賀"), localSchool("大津スイミングクラブ", "滋賀")],
    faqs: STD_FAQS("滋賀県"),
    blogs: STD_BLOGS,
    otherPrefs: [
      { slug: "osaka", name: "大阪府" }, { slug: "kyoto", name: "京都府" },
      { slug: "hyogo", name: "兵庫県" }, { slug: "mie", name: "三重県" },
    ],
  },
  wakayama: {
    name: "和歌山県",
    heroText: "和歌山県の子ども向けスイミングスクール・水泳教室",
    areas: [
      { slug: "wakayama-city", name: "和歌山市" },
    ],
    schools: [KONAMI, RENAISSANCE, CENTRAL, localSchool("わかやまスイミングスクール", "和歌山"), localSchool("和歌山水泳クラブ", "和歌山")],
    faqs: STD_FAQS("和歌山県"),
    blogs: STD_BLOGS,
    otherPrefs: [
      { slug: "osaka", name: "大阪府" }, { slug: "hyogo", name: "兵庫県" },
      { slug: "nara", name: "奈良県" }, { slug: "mie", name: "三重県" },
    ],
  },
  saitama: {
    name: "埼玉県",
    heroText: "埼玉県の子ども向けスイミングスクール・水泳教室",
    areas: [
      { slug: "kawaguchi", name: "川口市" }, { slug: "koshigaya", name: "越谷市" },
      { slug: "minami", name: "南区" }, { slug: "urawa", name: "浦和区" },
    ],
    schools: [KONAMI, RENAISSANCE, CENTRAL, JAXXA, localSchool("さいたまスイミングスクール", "埼玉")],
    faqs: STD_FAQS("埼玉県"),
    blogs: STD_BLOGS,
    otherPrefs: [
      { slug: "tokyo", name: "東京都" }, { slug: "kanagawa", name: "神奈川県" },
      { slug: "chiba", name: "千葉県" }, { slug: "gunma", name: "群馬県" },
    ],
  },
  chiba: {
    name: "千葉県",
    heroText: "千葉県の子ども向けスイミングスクール・水泳教室",
    areas: [
      { slug: "chiba-city", name: "千葉市" }, { slug: "kashiwa", name: "柏市" },
      { slug: "matsudo", name: "松戸市" },
    ],
    schools: [KONAMI, RENAISSANCE, CENTRAL, JAXXA, localSchool("千葉スイミングスクール", "千葉")],
    faqs: STD_FAQS("千葉県"),
    blogs: STD_BLOGS,
    otherPrefs: [
      { slug: "tokyo", name: "東京都" }, { slug: "saitama", name: "埼玉県" },
      { slug: "kanagawa", name: "神奈川県" }, { slug: "ibaraki", name: "茨城県" },
    ],
  },
  fukuoka: {
    name: "福岡県",
    heroText: "九州最大の都市・福岡のスイミングスクール・水泳教室",
    areas: [],
    schools: [KONAMI, RENAISSANCE, CENTRAL, JAXXA, localSchool("福岡スイミングスクール", "福岡")],
    faqs: STD_FAQS("福岡県"),
    blogs: STD_BLOGS,
    otherPrefs: [
      { slug: "saga", name: "佐賀県" }, { slug: "nagasaki", name: "長崎県" },
      { slug: "kumamoto", name: "熊本県" }, { slug: "oita", name: "大分県" },
    ],
  },
  hokkaido: {
    name: "北海道",
    heroText: "北海道の子ども向けスイミングスクール・水泳教室",
    areas: [],
    schools: [KONAMI, RENAISSANCE, CENTRAL, localSchool("北海道スイミングスクール", "北海道"), localSchool("札幌スイミングクラブ", "札幌")],
    faqs: STD_FAQS("北海道"),
    blogs: STD_BLOGS,
    otherPrefs: [
      { slug: "aomori", name: "青森県" }, { slug: "iwate", name: "岩手県" },
      { slug: "miyagi", name: "宮城県" }, { slug: "akita", name: "秋田県" },
    ],
  },
  miyagi: {
    name: "宮城県",
    heroText: "仙台を擁する宮城県のスイミングスクール・水泳教室",
    areas: [],
    schools: [KONAMI, RENAISSANCE, CENTRAL, localSchool("仙台スイミングスクール", "宮城"), localSchool("宮城水泳クラブ", "宮城")],
    faqs: STD_FAQS("宮城県"),
    blogs: STD_BLOGS,
    otherPrefs: [
      { slug: "fukushima", name: "福島県" }, { slug: "yamagata", name: "山形県" },
      { slug: "iwate", name: "岩手県" }, { slug: "akita", name: "秋田県" },
    ],
  },
  hiroshima: {
    name: "広島県",
    heroText: "広島県の子ども向けスイミングスクール・水泳教室",
    areas: [],
    schools: [KONAMI, RENAISSANCE, CENTRAL, localSchool("広島スイミングスクール", "広島"), localSchool("広島水泳クラブ", "広島")],
    faqs: STD_FAQS("広島県"),
    blogs: STD_BLOGS,
    otherPrefs: [
      { slug: "okayama", name: "岡山県" }, { slug: "yamaguchi", name: "山口県" },
      { slug: "shimane", name: "島根県" }, { slug: "tottori", name: "鳥取県" },
    ],
  },
  shizuoka: {
    name: "静岡県",
    heroText: "静岡県の子ども向けスイミングスクール・水泳教室",
    areas: [],
    schools: [KONAMI, RENAISSANCE, CENTRAL, localSchool("静岡スイミングスクール", "静岡"), localSchool("静岡水泳クラブ", "静岡")],
    faqs: STD_FAQS("静岡県"),
    blogs: STD_BLOGS,
    otherPrefs: [
      { slug: "aichi", name: "愛知県" }, { slug: "kanagawa", name: "神奈川県" },
      { slug: "nagano", name: "長野県" }, { slug: "yamanashi", name: "山梨県" },
    ],
  },
  okayama: {
    name: "岡山県",
    heroText: "岡山県の子ども向けスイミングスクール・水泳教室",
    areas: [],
    schools: [KONAMI, RENAISSANCE, CENTRAL, localSchool("岡山スイミングスクール", "岡山"), localSchool("岡山水泳クラブ", "岡山")],
    faqs: STD_FAQS("岡山県"),
    blogs: STD_BLOGS,
    otherPrefs: [
      { slug: "hiroshima", name: "広島県" }, { slug: "tottori", name: "鳥取県" },
      { slug: "hyogo", name: "兵庫県" }, { slug: "kagawa", name: "香川県" },
    ],
  },
  niigata: {
    name: "新潟県",
    heroText: "新潟県の子ども向けスイミングスクール・水泳教室",
    areas: [],
    schools: [KONAMI, RENAISSANCE, CENTRAL, localSchool("新潟スイミングスクール", "新潟"), localSchool("新潟水泳クラブ", "新潟")],
    faqs: STD_FAQS("新潟県"),
    blogs: STD_BLOGS,
    otherPrefs: [
      { slug: "nagano", name: "長野県" }, { slug: "fukushima", name: "福島県" },
      { slug: "yamagata", name: "山形県" }, { slug: "toyama", name: "富山県" },
    ],
  },
  tochigi: {
    name: "栃木県",
    heroText: "栃木県の子ども向けスイミングスクール・水泳教室",
    areas: [],
    schools: [KONAMI, RENAISSANCE, CENTRAL, localSchool("栃木スイミングスクール", "栃木"), localSchool("宇都宮スイミングクラブ", "宇都宮")],
    faqs: STD_FAQS("栃木県"),
    blogs: STD_BLOGS,
    otherPrefs: [
      { slug: "tokyo", name: "東京都" }, { slug: "saitama", name: "埼玉県" },
      { slug: "gunma", name: "群馬県" }, { slug: "ibaraki", name: "茨城県" },
    ],
  },
  gunma: {
    name: "群馬県",
    heroText: "群馬県の子ども向けスイミングスクール・水泳教室",
    areas: [],
    schools: [KONAMI, RENAISSANCE, CENTRAL, localSchool("群馬スイミングスクール", "群馬"), localSchool("前橋スイミングクラブ", "前橋")],
    faqs: STD_FAQS("群馬県"),
    blogs: STD_BLOGS,
    otherPrefs: [
      { slug: "tokyo", name: "東京都" }, { slug: "saitama", name: "埼玉県" },
      { slug: "tochigi", name: "栃木県" }, { slug: "nagano", name: "長野県" },
    ],
  },
  mie: {
    name: "三重県",
    heroText: "三重県の子ども向けスイミングスクール・水泳教室",
    areas: [],
    schools: [KONAMI, RENAISSANCE, CENTRAL, localSchool("三重スイミングスクール", "三重"), localSchool("津スイミングクラブ", "津市")],
    faqs: STD_FAQS("三重県"),
    blogs: STD_BLOGS,
    otherPrefs: [
      { slug: "aichi", name: "愛知県" }, { slug: "osaka", name: "大阪府" },
      { slug: "kyoto", name: "京都府" }, { slug: "nara", name: "奈良県" },
    ],
  },
  nara: {
    name: "奈良県",
    heroText: "奈良県の子ども向けスイミングスクール・水泳教室",
    areas: [],
    schools: [KONAMI, RENAISSANCE, CENTRAL, localSchool("奈良スイミングスクール", "奈良"), localSchool("奈良水泳クラブ", "奈良")],
    faqs: STD_FAQS("奈良県"),
    blogs: STD_BLOGS,
    otherPrefs: [
      { slug: "osaka", name: "大阪府" }, { slug: "kyoto", name: "京都府" },
      { slug: "hyogo", name: "兵庫県" }, { slug: "wakayama", name: "和歌山県" },
    ],
  },
  fukui: {
    name: "福井県",
    heroText: "福井県の子ども向けスイミングスクール・水泳教室",
    areas: [],
    schools: [KONAMI, RENAISSANCE, CENTRAL, localSchool("福井スイミングスクール", "福井"), localSchool("福井水泳クラブ", "福井")],
    faqs: STD_FAQS("福井県"),
    blogs: STD_BLOGS,
    otherPrefs: [
      { slug: "ishikawa", name: "石川県" }, { slug: "toyama", name: "富山県" },
      { slug: "gifu", name: "岐阜県" }, { slug: "kyoto", name: "京都府" },
    ],
  },
  toyama: {
    name: "富山県",
    heroText: "富山県の子ども向けスイミングスクール・水泳教室",
    areas: [],
    schools: [KONAMI, RENAISSANCE, CENTRAL, localSchool("富山スイミングスクール", "富山"), localSchool("富山水泳クラブ", "富山")],
    faqs: STD_FAQS("富山県"),
    blogs: STD_BLOGS,
    otherPrefs: [
      { slug: "ishikawa", name: "石川県" }, { slug: "fukui", name: "福井県" },
      { slug: "niigata", name: "新潟県" }, { slug: "nagano", name: "長野県" },
    ],
  },
  yamanashi: {
    name: "山梨県",
    heroText: "山梨県の子ども向けスイミングスクール・水泳教室",
    areas: [],
    schools: [KONAMI, RENAISSANCE, CENTRAL, localSchool("山梨スイミングスクール", "山梨"), localSchool("甲府スイミングクラブ", "甲府")],
    faqs: STD_FAQS("山梨県"),
    blogs: STD_BLOGS,
    otherPrefs: [
      { slug: "tokyo", name: "東京都" }, { slug: "kanagawa", name: "神奈川県" },
      { slug: "shizuoka", name: "静岡県" }, { slug: "nagano", name: "長野県" },
    ],
  },
  tottori: {
    name: "鳥取県",
    heroText: "鳥取県の子ども向けスイミングスクール・水泳教室",
    areas: [],
    schools: [KONAMI, RENAISSANCE, CENTRAL, localSchool("鳥取スイミングスクール", "鳥取"), localSchool("鳥取水泳クラブ", "鳥取")],
    faqs: STD_FAQS("鳥取県"),
    blogs: STD_BLOGS,
    otherPrefs: [
      { slug: "shimane", name: "島根県" }, { slug: "okayama", name: "岡山県" },
      { slug: "hiroshima", name: "広島県" }, { slug: "hyogo", name: "兵庫県" },
    ],
  },
  shimane: {
    name: "島根県",
    heroText: "島根県の子ども向けスイミングスクール・水泳教室",
    areas: [],
    schools: [KONAMI, RENAISSANCE, CENTRAL, localSchool("島根スイミングスクール", "島根"), localSchool("松江スイミングクラブ", "松江")],
    faqs: STD_FAQS("島根県"),
    blogs: STD_BLOGS,
    otherPrefs: [
      { slug: "tottori", name: "鳥取県" }, { slug: "hiroshima", name: "広島県" },
      { slug: "yamaguchi", name: "山口県" }, { slug: "okayama", name: "岡山県" },
    ],
  },
  kochi: {
    name: "高知県",
    heroText: "高知県の子ども向けスイミングスクール・水泳教室",
    areas: [],
    schools: [KONAMI, RENAISSANCE, CENTRAL, localSchool("高知スイミングスクール", "高知"), localSchool("高知水泳クラブ", "高知")],
    faqs: STD_FAQS("高知県"),
    blogs: STD_BLOGS,
    otherPrefs: [
      { slug: "tokushima", name: "徳島県" }, { slug: "ehime", name: "愛媛県" },
      { slug: "kagawa", name: "香川県" }, { slug: "hiroshima", name: "広島県" },
    ],
  },
  tokushima: {
    name: "徳島県",
    heroText: "徳島県の子ども向けスイミングスクール・水泳教室",
    areas: [],
    schools: [KONAMI, RENAISSANCE, CENTRAL, localSchool("徳島スイミングスクール", "徳島"), localSchool("徳島水泳クラブ", "徳島")],
    faqs: STD_FAQS("徳島県"),
    blogs: STD_BLOGS,
    otherPrefs: [
      { slug: "kagawa", name: "香川県" }, { slug: "ehime", name: "愛媛県" },
      { slug: "kochi", name: "高知県" }, { slug: "hyogo", name: "兵庫県" },
    ],
  },
  kagawa: {
    name: "香川県",
    heroText: "香川県の子ども向けスイミングスクール・水泳教室",
    areas: [],
    schools: [KONAMI, RENAISSANCE, CENTRAL, localSchool("高松スイミングスクール", "香川"), localSchool("香川水泳クラブ", "高松")],
    faqs: STD_FAQS("香川県"),
    blogs: STD_BLOGS,
    otherPrefs: [
      { slug: "tokushima", name: "徳島県" }, { slug: "ehime", name: "愛媛県" },
      { slug: "kochi", name: "高知県" }, { slug: "okayama", name: "岡山県" },
    ],
  },
  saga: {
    name: "佐賀県",
    heroText: "佐賀県の子ども向けスイミングスクール・水泳教室",
    areas: [],
    schools: [KONAMI, RENAISSANCE, CENTRAL, localSchool("佐賀スイミングスクール", "佐賀"), localSchool("佐賀水泳クラブ", "佐賀")],
    faqs: STD_FAQS("佐賀県"),
    blogs: STD_BLOGS,
    otherPrefs: [
      { slug: "fukuoka", name: "福岡県" }, { slug: "nagasaki", name: "長崎県" },
      { slug: "kumamoto", name: "熊本県" }, { slug: "oita", name: "大分県" },
    ],
  },
  oita: {
    name: "大分県",
    heroText: "大分県の子ども向けスイミングスクール・水泳教室",
    areas: [],
    schools: [KONAMI, RENAISSANCE, CENTRAL, localSchool("大分スイミングスクール", "大分"), localSchool("大分水泳クラブ", "大分")],
    faqs: STD_FAQS("大分県"),
    blogs: STD_BLOGS,
    otherPrefs: [
      { slug: "fukuoka", name: "福岡県" }, { slug: "kumamoto", name: "熊本県" },
      { slug: "miyazaki", name: "宮崎県" }, { slug: "ehime", name: "愛媛県" },
    ],
  },
  miyazaki: {
    name: "宮崎県",
    heroText: "宮崎県の子ども向けスイミングスクール・水泳教室",
    areas: [],
    schools: [KONAMI, RENAISSANCE, CENTRAL, localSchool("宮崎スイミングスクール", "宮崎"), localSchool("宮崎水泳クラブ", "宮崎")],
    faqs: STD_FAQS("宮崎県"),
    blogs: STD_BLOGS,
    otherPrefs: [
      { slug: "fukuoka", name: "福岡県" }, { slug: "oita", name: "大分県" },
      { slug: "kumamoto", name: "熊本県" }, { slug: "kagoshima", name: "鹿児島県" },
    ],
  },
  okinawa: {
    name: "沖縄県",
    heroText: "沖縄県の子ども向けスイミングスクール・水泳教室",
    areas: [],
    schools: [KONAMI, RENAISSANCE, CENTRAL, localSchool("沖縄スイミングスクール", "沖縄"), localSchool("那覇スイミングクラブ", "那覇")],
    faqs: STD_FAQS("沖縄県"),
    blogs: STD_BLOGS,
    otherPrefs: [
      { slug: "kagoshima", name: "鹿児島県" }, { slug: "fukuoka", name: "福岡県" },
      { slug: "miyazaki", name: "宮崎県" }, { slug: "kumamoto", name: "熊本県" },
    ],
  },
  kumamoto: {
    name: "熊本県",
    heroText: "熊本県の子ども向けスイミングスクール・水泳教室",
    areas: [],
    schools: [KONAMI, RENAISSANCE, CENTRAL, localSchool("熊本スイミングスクール", "熊本"), localSchool("熊本水泳クラブ", "熊本")],
    faqs: STD_FAQS("熊本県"),
    blogs: STD_BLOGS,
    otherPrefs: [
      { slug: "fukuoka", name: "福岡県" }, { slug: "saga", name: "佐賀県" },
      { slug: "nagasaki", name: "長崎県" }, { slug: "oita", name: "大分県" },
    ],
  },
  kagoshima: {
    name: "鹿児島県",
    heroText: "鹿児島県の子ども向けスイミングスクール・水泳教室",
    areas: [],
    schools: [KONAMI, RENAISSANCE, CENTRAL, localSchool("鹿児島スイミングスクール", "鹿児島"), localSchool("鹿児島水泳クラブ", "鹿児島")],
    faqs: STD_FAQS("鹿児島県"),
    blogs: STD_BLOGS,
    otherPrefs: [
      { slug: "fukuoka", name: "福岡県" }, { slug: "kumamoto", name: "熊本県" },
      { slug: "miyazaki", name: "宮崎県" }, { slug: "okinawa", name: "沖縄県" },
    ],
  },
  nagasaki: {
    name: "長崎県",
    heroText: "長崎県の子ども向けスイミングスクール・水泳教室",
    areas: [],
    schools: [KONAMI, RENAISSANCE, CENTRAL, localSchool("長崎スイミングスクール", "長崎"), localSchool("長崎水泳クラブ", "長崎")],
    faqs: STD_FAQS("長崎県"),
    blogs: STD_BLOGS,
    otherPrefs: [
      { slug: "fukuoka", name: "福岡県" }, { slug: "saga", name: "佐賀県" },
      { slug: "kumamoto", name: "熊本県" }, { slug: "oita", name: "大分県" },
    ],
  },
  ehime: {
    name: "愛媛県",
    heroText: "愛媛県の子ども向けスイミングスクール・水泳教室",
    areas: [],
    schools: [KONAMI, RENAISSANCE, CENTRAL, localSchool("愛媛スイミングスクール", "愛媛"), localSchool("松山スイミングクラブ", "松山")],
    faqs: STD_FAQS("愛媛県"),
    blogs: STD_BLOGS,
    otherPrefs: [
      { slug: "kagawa", name: "香川県" }, { slug: "tokushima", name: "徳島県" },
      { slug: "kochi", name: "高知県" }, { slug: "hiroshima", name: "広島県" },
    ],
  },
  yamaguchi: {
    name: "山口県",
    heroText: "山口県の子ども向けスイミングスクール・水泳教室",
    areas: [],
    schools: [KONAMI, RENAISSANCE, CENTRAL, localSchool("山口スイミングスクール", "山口"), localSchool("山口水泳クラブ", "山口")],
    faqs: STD_FAQS("山口県"),
    blogs: STD_BLOGS,
    otherPrefs: [
      { slug: "hiroshima", name: "広島県" }, { slug: "shimane", name: "島根県" },
      { slug: "fukuoka", name: "福岡県" }, { slug: "tottori", name: "鳥取県" },
    ],
  },
  fukushima: {
    name: "福島県",
    heroText: "福島県の子ども向けスイミングスクール・水泳教室",
    areas: [],
    schools: [KONAMI, RENAISSANCE, CENTRAL, localSchool("福島スイミングスクール", "福島"), localSchool("郡山スイミングクラブ", "郡山")],
    faqs: STD_FAQS("福島県"),
    blogs: STD_BLOGS,
    otherPrefs: [
      { slug: "miyagi", name: "宮城県" }, { slug: "yamagata", name: "山形県" },
      { slug: "ibaraki", name: "茨城県" }, { slug: "niigata", name: "新潟県" },
    ],
  },
  akita: {
    name: "秋田県",
    heroText: "秋田県の子ども向けスイミングスクール・水泳教室",
    areas: [],
    schools: [KONAMI, RENAISSANCE, CENTRAL, localSchool("秋田スイミングスクール", "秋田"), localSchool("秋田水泳クラブ", "秋田")],
    faqs: STD_FAQS("秋田県"),
    blogs: STD_BLOGS,
    otherPrefs: [
      { slug: "miyagi", name: "宮城県" }, { slug: "iwate", name: "岩手県" },
      { slug: "yamagata", name: "山形県" }, { slug: "aomori", name: "青森県" },
    ],
  },
  yamagata: {
    name: "山形県",
    heroText: "山形県の子ども向けスイミングスクール・水泳教室",
    areas: [],
    schools: [KONAMI, RENAISSANCE, CENTRAL, localSchool("山形スイミングスクール", "山形"), localSchool("山形水泳クラブ", "山形")],
    faqs: STD_FAQS("山形県"),
    blogs: STD_BLOGS,
    otherPrefs: [
      { slug: "miyagi", name: "宮城県" }, { slug: "akita", name: "秋田県" },
      { slug: "fukushima", name: "福島県" }, { slug: "niigata", name: "新潟県" },
    ],
  },
  iwate: {
    name: "岩手県",
    heroText: "岩手県の子ども向けスイミングスクール・水泳教室",
    areas: [],
    schools: [KONAMI, RENAISSANCE, CENTRAL, localSchool("岩手スイミングスクール", "岩手"), localSchool("盛岡スイミングクラブ", "盛岡")],
    faqs: STD_FAQS("岩手県"),
    blogs: STD_BLOGS,
    otherPrefs: [
      { slug: "miyagi", name: "宮城県" }, { slug: "akita", name: "秋田県" },
      { slug: "aomori", name: "青森県" }, { slug: "fukushima", name: "福島県" },
    ],
  },
  aomori: {
    name: "青森県",
    heroText: "青森県の子ども向けスイミングスクール・水泳教室",
    areas: [],
    schools: [KONAMI, RENAISSANCE, CENTRAL, localSchool("青森スイミングスクール", "青森"), localSchool("青森水泳クラブ", "青森")],
    faqs: STD_FAQS("青森県"),
    blogs: STD_BLOGS,
    otherPrefs: [
      { slug: "iwate", name: "岩手県" }, { slug: "akita", name: "秋田県" },
      { slug: "miyagi", name: "宮城県" }, { slug: "hokkaido", name: "北海道" },
    ],
  },
};

// ────────────────────────────────────────────
// SWIMMING_AREAS: エリア別データ
// ────────────────────────────────────────────

function areaSchools(areaName, prefName, chain1, chain2, chain3, chain4) {
  return [
    { ...chain1, desc: chain1.desc },
    { ...chain2, desc: chain2.desc },
    { ...chain3, desc: chain3.desc },
    { ...(chain4 || KONAMI), desc: (chain4 || KONAMI).desc },
    localSchool(`${areaName}スイミングスクール`, areaName),
  ];
}

export const SWIMMING_AREAS = {
  // ── 大阪府 ──
  "osaka/osaka-city": { name: "大阪市", prefName: "大阪府", prefSlug: "osaka", schools: areaSchools("大阪市", "大阪府", KONAMI, RENAISSANCE, CENTRAL, JAXXA) },
  "osaka/minoh": { name: "箕面市", prefName: "大阪府", prefSlug: "osaka", schools: areaSchools("箕面市", "大阪府", KONAMI, RENAISSANCE, CENTRAL, TIPNESS) },
  "osaka/moriguchi": { name: "守口市", prefName: "大阪府", prefSlug: "osaka", schools: areaSchools("守口市", "大阪府", KONAMI, RENAISSANCE, CENTRAL, JAXXA) },
  "osaka/sakai": { name: "堺市", prefName: "大阪府", prefSlug: "osaka", schools: areaSchools("堺市", "大阪府", KONAMI, RENAISSANCE, CENTRAL, TIPNESS) },
  "osaka/suita": { name: "吹田市", prefName: "大阪府", prefSlug: "osaka", schools: areaSchools("吹田市", "大阪府", KONAMI, RENAISSANCE, CENTRAL, JAXXA) },
  "osaka/takatsuki": { name: "高槻市", prefName: "大阪府", prefSlug: "osaka", schools: areaSchools("高槻市", "大阪府", KONAMI, RENAISSANCE, CENTRAL, TIPNESS) },
  "osaka/toyonaka": { name: "豊中市", prefName: "大阪府", prefSlug: "osaka", schools: areaSchools("豊中市", "大阪府", KONAMI, RENAISSANCE, CENTRAL, JAXXA) },
  "osaka/ibaraki": { name: "茨木市", prefName: "大阪府", prefSlug: "osaka", schools: areaSchools("茨木市", "大阪府", KONAMI, RENAISSANCE, CENTRAL, TIPNESS) },
  // ── 愛知県 ──
  "aichi/anjo": { name: "安城市", prefName: "愛知県", prefSlug: "aichi", schools: areaSchools("安城市", "愛知県", KONAMI, RENAISSANCE, CENTRAL, JAXXA) },
  "aichi/chikusa": { name: "千種区", prefName: "愛知県", prefSlug: "aichi", schools: areaSchools("千種区", "愛知県", KONAMI, RENAISSANCE, CENTRAL, TIPNESS) },
  "aichi/meito": { name: "名東区", prefName: "愛知県", prefSlug: "aichi", schools: areaSchools("名東区", "愛知県", KONAMI, RENAISSANCE, CENTRAL, JAXXA) },
  "aichi/midori": { name: "緑区", prefName: "愛知県", prefSlug: "aichi", schools: areaSchools("緑区", "愛知県", KONAMI, RENAISSANCE, CENTRAL, TIPNESS) },
  "aichi/moriyama": { name: "守山区", prefName: "愛知県", prefSlug: "aichi", schools: areaSchools("守山区", "愛知県", KONAMI, RENAISSANCE, CENTRAL, JAXXA) },
  "aichi/nisshin": { name: "日進市", prefName: "愛知県", prefSlug: "aichi", schools: areaSchools("日進市", "愛知県", KONAMI, RENAISSANCE, CENTRAL, TIPNESS) },
  "aichi/owariasahi": { name: "尾張旭市", prefName: "愛知県", prefSlug: "aichi", schools: areaSchools("尾張旭市", "愛知県", KONAMI, RENAISSANCE, CENTRAL, JAXXA) },
  "aichi/tenpaku": { name: "天白区", prefName: "愛知県", prefSlug: "aichi", schools: areaSchools("天白区", "愛知県", KONAMI, RENAISSANCE, CENTRAL, TIPNESS) },
  "aichi/toyota": { name: "豊田市", prefName: "愛知県", prefSlug: "aichi", schools: areaSchools("豊田市", "愛知県", KONAMI, RENAISSANCE, CENTRAL, JAXXA) },
  // ── 千葉県 ──
  "chiba/chiba-city": { name: "千葉市", prefName: "千葉県", prefSlug: "chiba", schools: areaSchools("千葉市", "千葉県", KONAMI, RENAISSANCE, CENTRAL, JAXXA) },
  "chiba/kashiwa": { name: "柏市", prefName: "千葉県", prefSlug: "chiba", schools: areaSchools("柏市", "千葉県", KONAMI, RENAISSANCE, CENTRAL, TIPNESS) },
  "chiba/matsudo": { name: "松戸市", prefName: "千葉県", prefSlug: "chiba", schools: areaSchools("松戸市", "千葉県", KONAMI, RENAISSANCE, CENTRAL, JAXXA) },
  // ── 岐阜県 ──
  "gifu/gifu-city": { name: "岐阜市", prefName: "岐阜県", prefSlug: "gifu", schools: areaSchools("岐阜市", "岐阜県", KONAMI, RENAISSANCE, CENTRAL, JAXXA) },
  "gifu/kani": { name: "可児市", prefName: "岐阜県", prefSlug: "gifu", schools: areaSchools("可児市", "岐阜県", KONAMI, RENAISSANCE, CENTRAL, TIPNESS) },
  "gifu/minokamo": { name: "美濃加茂市", prefName: "岐阜県", prefSlug: "gifu", schools: areaSchools("美濃加茂市", "岐阜県", KONAMI, RENAISSANCE, CENTRAL, JAXXA) },
  "gifu/tajimi": { name: "多治見市", prefName: "岐阜県", prefSlug: "gifu", schools: areaSchools("多治見市", "岐阜県", KONAMI, RENAISSANCE, CENTRAL, TIPNESS) },
  // ── 兵庫県 ──
  "hyogo/nishinomiya": { name: "西宮市", prefName: "兵庫県", prefSlug: "hyogo", schools: areaSchools("西宮市", "兵庫県", KONAMI, RENAISSANCE, CENTRAL, JAXXA) },
  // ── 茨城県 ──
  "ibaraki/hitachi": { name: "日立市", prefName: "茨城県", prefSlug: "ibaraki", schools: areaSchools("日立市", "茨城県", KONAMI, RENAISSANCE, CENTRAL, TIPNESS) },
  "ibaraki/hitachinaka": { name: "ひたちなか市", prefName: "茨城県", prefSlug: "ibaraki", schools: areaSchools("ひたちなか市", "茨城県", KONAMI, RENAISSANCE, CENTRAL, JAXXA) },
  "ibaraki/mito": { name: "水戸市", prefName: "茨城県", prefSlug: "ibaraki", schools: areaSchools("水戸市", "茨城県", KONAMI, RENAISSANCE, CENTRAL, TIPNESS) },
  "ibaraki/tsuchiura": { name: "土浦市", prefName: "茨城県", prefSlug: "ibaraki", schools: areaSchools("土浦市", "茨城県", KONAMI, RENAISSANCE, CENTRAL, JAXXA) },
  "ibaraki/tsukuba": { name: "つくば市", prefName: "茨城県", prefSlug: "ibaraki", schools: areaSchools("つくば市", "茨城県", KONAMI, RENAISSANCE, CENTRAL, TIPNESS) },
  // ── 石川県 ──
  "ishikawa/kanazawa": { name: "金沢市", prefName: "石川県", prefSlug: "ishikawa", schools: areaSchools("金沢市", "石川県", KONAMI, RENAISSANCE, CENTRAL, JAXXA) },
  "ishikawa/nonoichi": { name: "野々市市", prefName: "石川県", prefSlug: "ishikawa", schools: areaSchools("野々市市", "石川県", KONAMI, RENAISSANCE, CENTRAL, TIPNESS) },
  "ishikawa/uchinada": { name: "内灘町", prefName: "石川県", prefSlug: "ishikawa", schools: areaSchools("内灘町", "石川県", KONAMI, RENAISSANCE, CENTRAL, JAXXA) },
  // ── 神奈川県 ──
  "kanagawa/aoba": { name: "青葉区", prefName: "神奈川県", prefSlug: "kanagawa", schools: areaSchools("青葉区", "神奈川県", KONAMI, RENAISSANCE, CENTRAL, JAXXA) },
  "kanagawa/atsugi": { name: "厚木市", prefName: "神奈川県", prefSlug: "kanagawa", schools: areaSchools("厚木市", "神奈川県", KONAMI, RENAISSANCE, CENTRAL, TIPNESS) },
  "kanagawa/ebina": { name: "海老名市", prefName: "神奈川県", prefSlug: "kanagawa", schools: areaSchools("海老名市", "神奈川県", KONAMI, RENAISSANCE, CENTRAL, JAXXA) },
  "kanagawa/fujisawa": { name: "藤沢市", prefName: "神奈川県", prefSlug: "kanagawa", schools: areaSchools("藤沢市", "神奈川県", KONAMI, RENAISSANCE, CENTRAL, TIPNESS) },
  "kanagawa/kohoku": { name: "港北区", prefName: "神奈川県", prefSlug: "kanagawa", schools: areaSchools("港北区", "神奈川県", KONAMI, RENAISSANCE, CENTRAL, JAXXA) },
  "kanagawa/midori": { name: "緑区", prefName: "神奈川県", prefSlug: "kanagawa", schools: areaSchools("緑区", "神奈川県", KONAMI, RENAISSANCE, CENTRAL, TIPNESS) },
  "kanagawa/nakahara": { name: "中原区", prefName: "神奈川県", prefSlug: "kanagawa", schools: areaSchools("中原区", "神奈川県", KONAMI, RENAISSANCE, CENTRAL, JAXXA) },
  "kanagawa/sagamihara": { name: "相模原市", prefName: "神奈川県", prefSlug: "kanagawa", schools: areaSchools("相模原市", "神奈川県", KONAMI, RENAISSANCE, CENTRAL, TIPNESS) },
  "kanagawa/takatsu": { name: "高津区", prefName: "神奈川県", prefSlug: "kanagawa", schools: areaSchools("高津区", "神奈川県", KONAMI, RENAISSANCE, CENTRAL, JAXXA) },
  "kanagawa/tsuzuki": { name: "都筑区", prefName: "神奈川県", prefSlug: "kanagawa", schools: areaSchools("都筑区", "神奈川県", KONAMI, RENAISSANCE, CENTRAL, TIPNESS) },
  "kanagawa/yamato": { name: "大和市", prefName: "神奈川県", prefSlug: "kanagawa", schools: areaSchools("大和市", "神奈川県", KONAMI, RENAISSANCE, CENTRAL, JAXXA) },
  "kanagawa/yokosuka": { name: "横須賀市", prefName: "神奈川県", prefSlug: "kanagawa", schools: areaSchools("横須賀市", "神奈川県", KONAMI, RENAISSANCE, CENTRAL, TIPNESS) },
  "kanagawa/zushi": { name: "逗子市", prefName: "神奈川県", prefSlug: "kanagawa", schools: areaSchools("逗子市", "神奈川県", KONAMI, RENAISSANCE, CENTRAL, JAXXA) },
  // ── 京都府 ──
  "kyoto/kyoto-city": { name: "京都市", prefName: "京都府", prefSlug: "kyoto", schools: areaSchools("京都市", "京都府", KONAMI, RENAISSANCE, CENTRAL, JAXXA) },
  // ── 長野県 ──
  "nagano/nagano-city": { name: "長野市", prefName: "長野県", prefSlug: "nagano", schools: areaSchools("長野市", "長野県", KONAMI, RENAISSANCE, CENTRAL, TIPNESS) },
  // ── 埼玉県 ──
  "saitama/kawaguchi": { name: "川口市", prefName: "埼玉県", prefSlug: "saitama", schools: areaSchools("川口市", "埼玉県", KONAMI, RENAISSANCE, CENTRAL, JAXXA) },
  "saitama/koshigaya": { name: "越谷市", prefName: "埼玉県", prefSlug: "saitama", schools: areaSchools("越谷市", "埼玉県", KONAMI, RENAISSANCE, CENTRAL, TIPNESS) },
  "saitama/minami": { name: "南区", prefName: "埼玉県", prefSlug: "saitama", schools: areaSchools("南区", "埼玉県", KONAMI, RENAISSANCE, CENTRAL, JAXXA) },
  "saitama/urawa": { name: "浦和区", prefName: "埼玉県", prefSlug: "saitama", schools: areaSchools("浦和区", "埼玉県", KONAMI, RENAISSANCE, CENTRAL, TIPNESS) },
  // ── 滋賀県 ──
  "shiga/kusatsu": { name: "草津市", prefName: "滋賀県", prefSlug: "shiga", schools: areaSchools("草津市", "滋賀県", KONAMI, RENAISSANCE, CENTRAL, JAXXA) },
  "shiga/otsu": { name: "大津市", prefName: "滋賀県", prefSlug: "shiga", schools: areaSchools("大津市", "滋賀県", KONAMI, RENAISSANCE, CENTRAL, TIPNESS) },
  // ── 東京都 ──
  "tokyo/chofu": { name: "調布市", prefName: "東京都", prefSlug: "tokyo", schools: areaSchools("調布市", "東京都", KONAMI, RENAISSANCE, CENTRAL, JAXXA) },
  "tokyo/edogawa": { name: "江戸川区", prefName: "東京都", prefSlug: "tokyo", schools: areaSchools("江戸川区", "東京都", KONAMI, RENAISSANCE, CENTRAL, TIPNESS) },
  "tokyo/kita": { name: "北区", prefName: "東京都", prefSlug: "tokyo", schools: areaSchools("北区", "東京都", KONAMI, RENAISSANCE, CENTRAL, JAXXA) },
  "tokyo/machida": { name: "町田市", prefName: "東京都", prefSlug: "tokyo", schools: areaSchools("町田市", "東京都", KONAMI, RENAISSANCE, CENTRAL, TIPNESS) },
  "tokyo/meguro": { name: "目黒区", prefName: "東京都", prefSlug: "tokyo", schools: areaSchools("目黒区", "東京都", KONAMI, RENAISSANCE, CENTRAL, JAXXA) },
  "tokyo/minato": { name: "港区", prefName: "東京都", prefSlug: "tokyo", schools: areaSchools("港区", "東京都", KONAMI, RENAISSANCE, CENTRAL, TIPNESS) },
  "tokyo/nerima": { name: "練馬区", prefName: "東京都", prefSlug: "tokyo", schools: areaSchools("練馬区", "東京都", KONAMI, RENAISSANCE, CENTRAL, JAXXA) },
  "tokyo/setagaya": { name: "世田谷区", prefName: "東京都", prefSlug: "tokyo", schools: areaSchools("世田谷区", "東京都", KONAMI, RENAISSANCE, CENTRAL, TIPNESS) },
  "tokyo/shibuya": { name: "渋谷区", prefName: "東京都", prefSlug: "tokyo", schools: areaSchools("渋谷区", "東京都", KONAMI, RENAISSANCE, CENTRAL, JAXXA) },
  "tokyo/shinagawa": { name: "品川区", prefName: "東京都", prefSlug: "tokyo", schools: areaSchools("品川区", "東京都", KONAMI, RENAISSANCE, CENTRAL, TIPNESS) },
  "tokyo/shinjuku": { name: "新宿区", prefName: "東京都", prefSlug: "tokyo", schools: areaSchools("新宿区", "東京都", KONAMI, RENAISSANCE, CENTRAL, JAXXA) },
  "tokyo/suginami": { name: "杉並区", prefName: "東京都", prefSlug: "tokyo", schools: areaSchools("杉並区", "東京都", KONAMI, RENAISSANCE, CENTRAL, TIPNESS) },
  // ── 和歌山県 ──
  "wakayama/wakayama-city": { name: "和歌山市", prefName: "和歌山県", prefSlug: "wakayama", schools: areaSchools("和歌山市", "和歌山県", KONAMI, RENAISSANCE, CENTRAL, JAXXA) },
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
