// /app/english/englishData.js

const ECC_JUNIOR = { name: "ECCジュニア", rating: 4.3, fee: 9900, age: "1歳半〜", desc: "全国8,700以上の教室数を誇る業界最大手。外国人講師とバイリンガル講師のペアティーチングで4技能を育成。英検対策も充実。", color: "#FF8A00", emoji: "🌍" };
const KUMON_ENG = { name: "公文の英語", rating: 4.1, fee: 7150, age: "0歳〜", desc: "くもん独自のスモールステップ方式。自分のペースで無理なく英語の基礎力を積み上げる。全国教室展開。", color: "#FFB347", emoji: "📚" };
const RIPPLE = { name: "リップルキッズパーク（オンライン）", rating: 4.5, fee: 5500, age: "2歳〜", desc: "フィリピン人講師とのオンラインレッスン。月5,500円〜という低価格で毎日受講可能。移動不要。", color: "#FF8A00", emoji: "🗣️" };
const ECC_KIDS = { name: "ECC KIDS", rating: 4.4, fee: 11000, age: "1歳半〜", desc: "All Englishの環境で自然に英語が身につく。外国人講師とバイリンガル講師のペアティーチング。", color: "#FF8A00", emoji: "🌍" };
const SHANE = { name: "シェーン英会話", rating: 4.3, fee: 11000, age: "2歳〜", desc: "ネイティブ講師による少人数制。英国式メソッドで4技能をバランスよく習得。英検対策コースも充実。", color: "#FFB347", emoji: "📚" };
const KIDS_DUO = { name: "Kids Duo", rating: 4.5, fee: 29700, age: "1歳〜6歳", desc: "英語と日本語を半々で使うバイリンガル幼児教育。全日英語の環境に加え、知育活動や野外体験も充実。", color: "#FF8A00", emoji: "🗣️" };
const AEON_KIDS = { name: "AEON Kids", rating: 4.2, fee: 11000, age: "3歳〜", desc: "英会話大手AEONのキッズスクール。ネイティブ講師による楽しい英語体験。英検対応コースあり。", color: "#FFB347", emoji: "🌍" };
const BERLITZ = { name: "Berlitz Kids", rating: 4.4, fee: 22000, age: "2歳〜", desc: "独自のBerlitz Methodで英語を自然に習得。少人数制で一人ひとりに丁寧な指導。", color: "#FF8A00", emoji: "📚" };
const JEC = { name: "ジュニアイングリッシュコーチ", rating: 4.2, fee: 8800, age: "3歳〜", desc: "英語コーチング方式で子どもの英語力を伸ばす。目標設定と継続サポートが充実。", color: "#FFB347", emoji: "🗣️" };

function localSchool(name, area, desc, fee = 9800, rating = 4.2) {
  return { name, rating, fee, age: "2歳〜", desc: desc || `${area}に根ざした英語スクール。少人数制で丁寧な指導を行い、ネイティブ講師が在籍。英検対策も対応。`, color: "#FF8A00", emoji: "🌍" };
}

const STD_FAQS = (prefName) => [
  { q: `${prefName}で英語教室は何歳から通えますか？`, a: "1歳半からのベビークラスを設けているスクールもあります。一般的には2〜3歳からが始めどきとされており、多くのスクールが幼児コースを充実させています。" },
  { q: `${prefName}の英語教室の月謝相場は？`, a: "週1回通塾タイプで月8,000〜15,000円が相場です。オンラインスクールは月5,500円〜とリーズナブルに始められます。" },
  { q: "英語を幼少期から習う効果は？", a: "幼少期は耳が柔軟で発音・リスニング力が身につきやすい時期です。英語への抵抗感をなくし、グローバルな感覚を自然に育てられます。" },
  { q: "英検対策もできますか？", a: "多くの英語スクールで英検5〜3級対策コースを設けています。小学生のうちに英検3級以上を取得する子どもも増えています。" },
];

const STD_BLOGS = [
  { href: "/blog/kids-english-guide", text: "子供の英語教室の選び方完全ガイド" },
  { href: "/blog/kids-english-school-guide-2026", text: "子供英語スクールおすすめ2026年版" },
  { href: "/blog/kids-english-phonics-guide", text: "子供の英語フォニックス完全ガイド" },
  { href: "/blog/kids-english-benefits-guide", text: "子供が英語を習う効果・メリット" },
  { href: "/blog/kids-english-online-guide", text: "子供のオンライン英語レッスン完全ガイド" },
];

export const ENGLISH_PREFS = {
  osaka: {
    name: "大阪府",
    heroText: "関西最大都市・大阪の英語・英会話教室",
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
    schools: [ECC_KIDS, SHANE, KIDS_DUO, ECC_JUNIOR, BERLITZ, JEC],
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
    heroText: "首都・東京の子ども向け英語・英会話教室",
    areas: [
      { slug: "chofu", name: "調布市" }, { slug: "edogawa", name: "江戸川区" },
      { slug: "kita", name: "北区" }, { slug: "machida", name: "町田市" },
      { slug: "meguro", name: "目黒区" }, { slug: "minato", name: "港区" },
      { slug: "nerima", name: "練馬区" }, { slug: "setagaya", name: "世田谷区" },
      { slug: "shibuya", name: "渋谷区" }, { slug: "shinagawa", name: "品川区" },
      { slug: "shinjuku", name: "新宿区" }, { slug: "suginami", name: "杉並区" },
    ],
    schools: [ECC_KIDS, SHANE, KIDS_DUO, ECC_JUNIOR, BERLITZ, AEON_KIDS],
    faqs: STD_FAQS("東京都"),
    blogs: STD_BLOGS,
    otherPrefs: [
      { slug: "kanagawa", name: "神奈川県" }, { slug: "saitama", name: "埼玉県" },
      { slug: "chiba", name: "千葉県" }, { slug: "osaka", name: "大阪府" },
    ],
  },
  kanagawa: {
    name: "神奈川県",
    heroText: "横浜・川崎を擁する神奈川県の英語・英会話教室",
    areas: [
      { slug: "aoba", name: "青葉区" }, { slug: "atsugi", name: "厚木市" },
      { slug: "ebina", name: "海老名市" }, { slug: "fujisawa", name: "藤沢市" },
      { slug: "kohoku", name: "港北区" }, { slug: "midori", name: "緑区" },
      { slug: "nakahara", name: "中原区" }, { slug: "sagamihara", name: "相模原市" },
      { slug: "takatsu", name: "高津区" }, { slug: "tsuzuki", name: "都筑区" },
      { slug: "yamato", name: "大和市" }, { slug: "yokosuka", name: "横須賀市" },
      { slug: "zushi", name: "逗子市" },
    ],
    schools: [ECC_KIDS, SHANE, KIDS_DUO, ECC_JUNIOR, BERLITZ, AEON_KIDS],
    faqs: STD_FAQS("神奈川県"),
    blogs: STD_BLOGS,
    otherPrefs: [
      { slug: "tokyo", name: "東京都" }, { slug: "saitama", name: "埼玉県" },
      { slug: "chiba", name: "千葉県" }, { slug: "shizuoka", name: "静岡県" },
    ],
  },
  aichi: {
    name: "愛知県",
    heroText: "名古屋を中心とした愛知県の英語・英会話教室",
    areas: [
      { slug: "anjo", name: "安城市" }, { slug: "chikusa", name: "千種区" },
      { slug: "meito", name: "名東区" }, { slug: "midori", name: "緑区" },
      { slug: "moriyama", name: "守山区" }, { slug: "nisshin", name: "日進市" },
      { slug: "owariasahi", name: "尾張旭市" }, { slug: "tenpaku", name: "天白区" },
      { slug: "toyota", name: "豊田市" },
    ],
    schools: [ECC_KIDS, SHANE, KIDS_DUO, ECC_JUNIOR, BERLITZ, JEC],
    faqs: STD_FAQS("愛知県"),
    blogs: STD_BLOGS,
    otherPrefs: [
      { slug: "osaka", name: "大阪府" }, { slug: "gifu", name: "岐阜県" },
      { slug: "shizuoka", name: "静岡県" }, { slug: "mie", name: "三重県" },
    ],
  },
  gifu: {
    name: "岐阜県",
    heroText: "岐阜県の子ども向け英語・英会話教室",
    areas: [
      { slug: "gifu-city", name: "岐阜市" }, { slug: "kani", name: "可児市" },
      { slug: "minokamo", name: "美濃加茂市" }, { slug: "tajimi", name: "多治見市" },
    ],
    schools: [ECC_JUNIOR, KUMON_ENG, RIPPLE, localSchool("ぎふ英語スクール", "岐阜"), localSchool("バイリンガルキッズ岐阜", "岐阜")],
    faqs: STD_FAQS("岐阜県"),
    blogs: STD_BLOGS,
    otherPrefs: [
      { slug: "aichi", name: "愛知県" }, { slug: "shizuoka", name: "静岡県" },
      { slug: "nagano", name: "長野県" }, { slug: "mie", name: "三重県" },
    ],
  },
  hyogo: {
    name: "兵庫県",
    heroText: "神戸・西宮を擁する兵庫県の英語・英会話教室",
    areas: [
      { slug: "nishinomiya", name: "西宮市" },
    ],
    schools: [ECC_KIDS, SHANE, ECC_JUNIOR, KIDS_DUO, localSchool("神戸英語スクール", "兵庫"), JEC],
    faqs: STD_FAQS("兵庫県"),
    blogs: STD_BLOGS,
    otherPrefs: [
      { slug: "osaka", name: "大阪府" }, { slug: "kyoto", name: "京都府" },
      { slug: "nara", name: "奈良県" }, { slug: "wakayama", name: "和歌山県" },
    ],
  },
  ibaraki: {
    name: "茨城県",
    heroText: "茨城県の子ども向け英語・英会話教室",
    areas: [
      { slug: "hitachi", name: "日立市" }, { slug: "hitachinaka", name: "ひたちなか市" },
      { slug: "mito", name: "水戸市" }, { slug: "tsuchiura", name: "土浦市" },
      { slug: "tsukuba", name: "つくば市" },
    ],
    schools: [ECC_JUNIOR, KUMON_ENG, RIPPLE, localSchool("茨城英語スクール", "茨城"), localSchool("バイリンガルキッズ水戸", "水戸")],
    faqs: STD_FAQS("茨城県"),
    blogs: STD_BLOGS,
    otherPrefs: [
      { slug: "tokyo", name: "東京都" }, { slug: "saitama", name: "埼玉県" },
      { slug: "chiba", name: "千葉県" }, { slug: "tochigi", name: "栃木県" },
    ],
  },
  ishikawa: {
    name: "石川県",
    heroText: "金沢を中心とした石川県の英語・英会話教室",
    areas: [
      { slug: "kanazawa", name: "金沢市" }, { slug: "nonoichi", name: "野々市市" },
      { slug: "uchinada", name: "内灘町" },
    ],
    schools: [ECC_JUNIOR, KUMON_ENG, RIPPLE, localSchool("金沢英語スクール", "石川"), localSchool("バイリンガルキッズ金沢", "金沢")],
    faqs: STD_FAQS("石川県"),
    blogs: STD_BLOGS,
    otherPrefs: [
      { slug: "toyama", name: "富山県" }, { slug: "fukui", name: "福井県" },
      { slug: "niigata", name: "新潟県" }, { slug: "nagano", name: "長野県" },
    ],
  },
  kyoto: {
    name: "京都府",
    heroText: "古都・京都の子ども向け英語・英会話教室",
    areas: [
      { slug: "kyoto-city", name: "京都市" },
    ],
    schools: [ECC_KIDS, SHANE, ECC_JUNIOR, localSchool("京都英語スクール", "京都"), BERLITZ, JEC],
    faqs: STD_FAQS("京都府"),
    blogs: STD_BLOGS,
    otherPrefs: [
      { slug: "osaka", name: "大阪府" }, { slug: "hyogo", name: "兵庫県" },
      { slug: "shiga", name: "滋賀県" }, { slug: "nara", name: "奈良県" },
    ],
  },
  nagano: {
    name: "長野県",
    heroText: "長野県の子ども向け英語・英会話教室",
    areas: [
      { slug: "nagano-city", name: "長野市" },
    ],
    schools: [ECC_JUNIOR, KUMON_ENG, RIPPLE, localSchool("長野英語スクール", "長野"), localSchool("バイリンガルキッズ長野", "長野")],
    faqs: STD_FAQS("長野県"),
    blogs: STD_BLOGS,
    otherPrefs: [
      { slug: "tokyo", name: "東京都" }, { slug: "aichi", name: "愛知県" },
      { slug: "gifu", name: "岐阜県" }, { slug: "niigata", name: "新潟県" },
    ],
  },
  shiga: {
    name: "滋賀県",
    heroText: "琵琶湖を擁する滋賀県の英語・英会話教室",
    areas: [
      { slug: "kusatsu", name: "草津市" }, { slug: "otsu", name: "大津市" },
    ],
    schools: [ECC_KIDS, ECC_JUNIOR, KUMON_ENG, RIPPLE, localSchool("しが英語スクール", "滋賀"), JEC],
    faqs: STD_FAQS("滋賀県"),
    blogs: STD_BLOGS,
    otherPrefs: [
      { slug: "osaka", name: "大阪府" }, { slug: "kyoto", name: "京都府" },
      { slug: "hyogo", name: "兵庫県" }, { slug: "mie", name: "三重県" },
    ],
  },
  wakayama: {
    name: "和歌山県",
    heroText: "和歌山県の子ども向け英語・英会話教室",
    areas: [
      { slug: "wakayama-city", name: "和歌山市" },
    ],
    schools: [ECC_JUNIOR, KUMON_ENG, RIPPLE, localSchool("わかやま英語スクール", "和歌山"), localSchool("バイリンガルキッズ和歌山", "和歌山")],
    faqs: STD_FAQS("和歌山県"),
    blogs: STD_BLOGS,
    otherPrefs: [
      { slug: "osaka", name: "大阪府" }, { slug: "hyogo", name: "兵庫県" },
      { slug: "nara", name: "奈良県" }, { slug: "mie", name: "三重県" },
    ],
  },
  saitama: {
    name: "埼玉県",
    heroText: "埼玉県の子ども向け英語・英会話教室",
    areas: [
      { slug: "kawaguchi", name: "川口市" }, { slug: "koshigaya", name: "越谷市" },
      { slug: "minami", name: "南区" }, { slug: "urawa", name: "浦和区" },
    ],
    schools: [ECC_JUNIOR, SHANE, KIDS_DUO, AEON_KIDS, localSchool("さいたま英語スクール", "埼玉"), JEC],
    faqs: STD_FAQS("埼玉県"),
    blogs: STD_BLOGS,
    otherPrefs: [
      { slug: "tokyo", name: "東京都" }, { slug: "kanagawa", name: "神奈川県" },
      { slug: "chiba", name: "千葉県" }, { slug: "gunma", name: "群馬県" },
    ],
  },
  chiba: {
    name: "千葉県",
    heroText: "千葉県の子ども向け英語・英会話教室",
    areas: [
      { slug: "chiba-city", name: "千葉市" }, { slug: "kashiwa", name: "柏市" },
      { slug: "matsudo", name: "松戸市" },
    ],
    schools: [ECC_JUNIOR, SHANE, KIDS_DUO, AEON_KIDS, localSchool("千葉英語スクール", "千葉"), JEC],
    faqs: STD_FAQS("千葉県"),
    blogs: STD_BLOGS,
    otherPrefs: [
      { slug: "tokyo", name: "東京都" }, { slug: "saitama", name: "埼玉県" },
      { slug: "kanagawa", name: "神奈川県" }, { slug: "ibaraki", name: "茨城県" },
    ],
  },
  fukuoka: {
    name: "福岡県",
    heroText: "九州最大の都市・福岡の英語・英会話教室",
    areas: [],
    schools: [ECC_JUNIOR, SHANE, KIDS_DUO, AEON_KIDS, localSchool("福岡英語スクール", "福岡"), JEC],
    faqs: STD_FAQS("福岡県"),
    blogs: STD_BLOGS,
    otherPrefs: [
      { slug: "saga", name: "佐賀県" }, { slug: "nagasaki", name: "長崎県" },
      { slug: "kumamoto", name: "熊本県" }, { slug: "oita", name: "大分県" },
    ],
  },
  hokkaido: {
    name: "北海道",
    heroText: "北海道の子ども向け英語・英会話教室",
    areas: [],
    schools: [ECC_JUNIOR, SHANE, localSchool("北海道英語スクール", "北海道"), KUMON_ENG, RIPPLE, JEC],
    faqs: STD_FAQS("北海道"),
    blogs: STD_BLOGS,
    otherPrefs: [
      { slug: "aomori", name: "青森県" }, { slug: "iwate", name: "岩手県" },
      { slug: "miyagi", name: "宮城県" }, { slug: "akita", name: "秋田県" },
    ],
  },
  miyagi: {
    name: "宮城県",
    heroText: "仙台を擁する宮城県の英語・英会話教室",
    areas: [],
    schools: [ECC_JUNIOR, SHANE, localSchool("仙台英語スクール", "宮城"), KUMON_ENG, RIPPLE, JEC],
    faqs: STD_FAQS("宮城県"),
    blogs: STD_BLOGS,
    otherPrefs: [
      { slug: "fukushima", name: "福島県" }, { slug: "yamagata", name: "山形県" },
      { slug: "iwate", name: "岩手県" }, { slug: "akita", name: "秋田県" },
    ],
  },
  hiroshima: {
    name: "広島県",
    heroText: "広島県の子ども向け英語・英会話教室",
    areas: [],
    schools: [ECC_JUNIOR, SHANE, localSchool("広島英語スクール", "広島"), KUMON_ENG, RIPPLE, JEC],
    faqs: STD_FAQS("広島県"),
    blogs: STD_BLOGS,
    otherPrefs: [
      { slug: "okayama", name: "岡山県" }, { slug: "yamaguchi", name: "山口県" },
      { slug: "shimane", name: "島根県" }, { slug: "tottori", name: "鳥取県" },
    ],
  },
  shizuoka: {
    name: "静岡県",
    heroText: "静岡県の子ども向け英語・英会話教室",
    areas: [],
    schools: [ECC_JUNIOR, KUMON_ENG, RIPPLE, localSchool("静岡英語スクール", "静岡"), localSchool("バイリンガルキッズ静岡", "静岡"), JEC],
    faqs: STD_FAQS("静岡県"),
    blogs: STD_BLOGS,
    otherPrefs: [
      { slug: "aichi", name: "愛知県" }, { slug: "kanagawa", name: "神奈川県" },
      { slug: "nagano", name: "長野県" }, { slug: "yamanashi", name: "山梨県" },
    ],
  },
  okayama: {
    name: "岡山県",
    heroText: "岡山県の子ども向け英語・英会話教室",
    areas: [],
    schools: [ECC_JUNIOR, KUMON_ENG, RIPPLE, localSchool("岡山英語スクール", "岡山"), localSchool("バイリンガルキッズ岡山", "岡山"), JEC],
    faqs: STD_FAQS("岡山県"),
    blogs: STD_BLOGS,
    otherPrefs: [
      { slug: "hiroshima", name: "広島県" }, { slug: "tottori", name: "鳥取県" },
      { slug: "hyogo", name: "兵庫県" }, { slug: "kagawa", name: "香川県" },
    ],
  },
  niigata: {
    name: "新潟県",
    heroText: "新潟県の子ども向け英語・英会話教室",
    areas: [],
    schools: [ECC_JUNIOR, KUMON_ENG, RIPPLE, localSchool("新潟英語スクール", "新潟"), localSchool("バイリンガルキッズ新潟", "新潟"), JEC],
    faqs: STD_FAQS("新潟県"),
    blogs: STD_BLOGS,
    otherPrefs: [
      { slug: "nagano", name: "長野県" }, { slug: "fukushima", name: "福島県" },
      { slug: "yamagata", name: "山形県" }, { slug: "toyama", name: "富山県" },
    ],
  },
  tochigi: {
    name: "栃木県",
    heroText: "栃木県の子ども向け英語・英会話教室",
    areas: [],
    schools: [ECC_JUNIOR, KUMON_ENG, RIPPLE, localSchool("栃木英語スクール", "栃木"), localSchool("バイリンガルキッズ宇都宮", "宇都宮"), JEC],
    faqs: STD_FAQS("栃木県"),
    blogs: STD_BLOGS,
    otherPrefs: [
      { slug: "tokyo", name: "東京都" }, { slug: "saitama", name: "埼玉県" },
      { slug: "gunma", name: "群馬県" }, { slug: "ibaraki", name: "茨城県" },
    ],
  },
  gunma: {
    name: "群馬県",
    heroText: "群馬県の子ども向け英語・英会話教室",
    areas: [],
    schools: [ECC_JUNIOR, KUMON_ENG, RIPPLE, localSchool("群馬英語スクール", "群馬"), localSchool("バイリンガルキッズ前橋", "前橋"), JEC],
    faqs: STD_FAQS("群馬県"),
    blogs: STD_BLOGS,
    otherPrefs: [
      { slug: "tokyo", name: "東京都" }, { slug: "saitama", name: "埼玉県" },
      { slug: "tochigi", name: "栃木県" }, { slug: "nagano", name: "長野県" },
    ],
  },
  mie: {
    name: "三重県",
    heroText: "三重県の子ども向け英語・英会話教室",
    areas: [],
    schools: [ECC_JUNIOR, KUMON_ENG, RIPPLE, localSchool("三重英語スクール", "三重"), localSchool("バイリンガルキッズ津", "津市"), JEC],
    faqs: STD_FAQS("三重県"),
    blogs: STD_BLOGS,
    otherPrefs: [
      { slug: "aichi", name: "愛知県" }, { slug: "osaka", name: "大阪府" },
      { slug: "kyoto", name: "京都府" }, { slug: "nara", name: "奈良県" },
    ],
  },
  nara: {
    name: "奈良県",
    heroText: "奈良県の子ども向け英語・英会話教室",
    areas: [],
    schools: [ECC_JUNIOR, KUMON_ENG, RIPPLE, localSchool("奈良英語スクール", "奈良"), localSchool("バイリンガルキッズ奈良", "奈良"), JEC],
    faqs: STD_FAQS("奈良県"),
    blogs: STD_BLOGS,
    otherPrefs: [
      { slug: "osaka", name: "大阪府" }, { slug: "kyoto", name: "京都府" },
      { slug: "hyogo", name: "兵庫県" }, { slug: "wakayama", name: "和歌山県" },
    ],
  },
  fukui: {
    name: "福井県",
    heroText: "福井県の子ども向け英語・英会話教室",
    areas: [],
    schools: [ECC_JUNIOR, KUMON_ENG, RIPPLE, localSchool("福井英語スクール", "福井"), localSchool("バイリンガルキッズ福井", "福井"), JEC],
    faqs: STD_FAQS("福井県"),
    blogs: STD_BLOGS,
    otherPrefs: [
      { slug: "ishikawa", name: "石川県" }, { slug: "toyama", name: "富山県" },
      { slug: "gifu", name: "岐阜県" }, { slug: "kyoto", name: "京都府" },
    ],
  },
  toyama: {
    name: "富山県",
    heroText: "富山県の子ども向け英語・英会話教室",
    areas: [],
    schools: [ECC_JUNIOR, KUMON_ENG, RIPPLE, localSchool("富山英語スクール", "富山"), localSchool("バイリンガルキッズ富山", "富山"), JEC],
    faqs: STD_FAQS("富山県"),
    blogs: STD_BLOGS,
    otherPrefs: [
      { slug: "ishikawa", name: "石川県" }, { slug: "fukui", name: "福井県" },
      { slug: "niigata", name: "新潟県" }, { slug: "nagano", name: "長野県" },
    ],
  },
  yamanashi: {
    name: "山梨県",
    heroText: "山梨県の子ども向け英語・英会話教室",
    areas: [],
    schools: [ECC_JUNIOR, KUMON_ENG, RIPPLE, localSchool("山梨英語スクール", "山梨"), localSchool("バイリンガルキッズ甲府", "甲府"), JEC],
    faqs: STD_FAQS("山梨県"),
    blogs: STD_BLOGS,
    otherPrefs: [
      { slug: "tokyo", name: "東京都" }, { slug: "kanagawa", name: "神奈川県" },
      { slug: "shizuoka", name: "静岡県" }, { slug: "nagano", name: "長野県" },
    ],
  },
  tottori: {
    name: "鳥取県",
    heroText: "鳥取県の子ども向け英語・英会話教室",
    areas: [],
    schools: [ECC_JUNIOR, KUMON_ENG, RIPPLE, localSchool("鳥取英語スクール", "鳥取"), localSchool("バイリンガルキッズ鳥取", "鳥取"), JEC],
    faqs: STD_FAQS("鳥取県"),
    blogs: STD_BLOGS,
    otherPrefs: [
      { slug: "shimane", name: "島根県" }, { slug: "okayama", name: "岡山県" },
      { slug: "hiroshima", name: "広島県" }, { slug: "hyogo", name: "兵庫県" },
    ],
  },
  shimane: {
    name: "島根県",
    heroText: "島根県の子ども向け英語・英会話教室",
    areas: [],
    schools: [ECC_JUNIOR, KUMON_ENG, RIPPLE, localSchool("島根英語スクール", "島根"), localSchool("バイリンガルキッズ松江", "松江"), JEC],
    faqs: STD_FAQS("島根県"),
    blogs: STD_BLOGS,
    otherPrefs: [
      { slug: "tottori", name: "鳥取県" }, { slug: "hiroshima", name: "広島県" },
      { slug: "yamaguchi", name: "山口県" }, { slug: "okayama", name: "岡山県" },
    ],
  },
  kochi: {
    name: "高知県",
    heroText: "高知県の子ども向け英語・英会話教室",
    areas: [],
    schools: [ECC_JUNIOR, KUMON_ENG, RIPPLE, localSchool("高知英語スクール", "高知"), localSchool("バイリンガルキッズ高知", "高知"), JEC],
    faqs: STD_FAQS("高知県"),
    blogs: STD_BLOGS,
    otherPrefs: [
      { slug: "tokushima", name: "徳島県" }, { slug: "ehime", name: "愛媛県" },
      { slug: "kagawa", name: "香川県" }, { slug: "hiroshima", name: "広島県" },
    ],
  },
  tokushima: {
    name: "徳島県",
    heroText: "徳島県の子ども向け英語・英会話教室",
    areas: [],
    schools: [ECC_JUNIOR, KUMON_ENG, RIPPLE, localSchool("徳島英語スクール", "徳島"), localSchool("バイリンガルキッズ徳島", "徳島"), JEC],
    faqs: STD_FAQS("徳島県"),
    blogs: STD_BLOGS,
    otherPrefs: [
      { slug: "kagawa", name: "香川県" }, { slug: "ehime", name: "愛媛県" },
      { slug: "kochi", name: "高知県" }, { slug: "hyogo", name: "兵庫県" },
    ],
  },
  kagawa: {
    name: "香川県",
    heroText: "香川県の子ども向け英語・英会話教室",
    areas: [],
    schools: [ECC_JUNIOR, KUMON_ENG, RIPPLE, localSchool("高松英語スクール", "香川"), localSchool("バイリンガルキッズ高松", "高松"), JEC],
    faqs: STD_FAQS("香川県"),
    blogs: STD_BLOGS,
    otherPrefs: [
      { slug: "tokushima", name: "徳島県" }, { slug: "ehime", name: "愛媛県" },
      { slug: "kochi", name: "高知県" }, { slug: "okayama", name: "岡山県" },
    ],
  },
  saga: {
    name: "佐賀県",
    heroText: "佐賀県の子ども向け英語・英会話教室",
    areas: [],
    schools: [ECC_JUNIOR, KUMON_ENG, RIPPLE, localSchool("佐賀英語スクール", "佐賀"), localSchool("バイリンガルキッズ佐賀", "佐賀"), JEC],
    faqs: STD_FAQS("佐賀県"),
    blogs: STD_BLOGS,
    otherPrefs: [
      { slug: "fukuoka", name: "福岡県" }, { slug: "nagasaki", name: "長崎県" },
      { slug: "kumamoto", name: "熊本県" }, { slug: "oita", name: "大分県" },
    ],
  },
  oita: {
    name: "大分県",
    heroText: "大分県の子ども向け英語・英会話教室",
    areas: [],
    schools: [ECC_JUNIOR, KUMON_ENG, RIPPLE, localSchool("大分英語スクール", "大分"), localSchool("バイリンガルキッズ大分", "大分"), JEC],
    faqs: STD_FAQS("大分県"),
    blogs: STD_BLOGS,
    otherPrefs: [
      { slug: "fukuoka", name: "福岡県" }, { slug: "kumamoto", name: "熊本県" },
      { slug: "miyazaki", name: "宮崎県" }, { slug: "ehime", name: "愛媛県" },
    ],
  },
  miyazaki: {
    name: "宮崎県",
    heroText: "宮崎県の子ども向け英語・英会話教室",
    areas: [],
    schools: [ECC_JUNIOR, KUMON_ENG, RIPPLE, localSchool("宮崎英語スクール", "宮崎"), localSchool("バイリンガルキッズ宮崎", "宮崎"), JEC],
    faqs: STD_FAQS("宮崎県"),
    blogs: STD_BLOGS,
    otherPrefs: [
      { slug: "fukuoka", name: "福岡県" }, { slug: "oita", name: "大分県" },
      { slug: "kumamoto", name: "熊本県" }, { slug: "kagoshima", name: "鹿児島県" },
    ],
  },
  okinawa: {
    name: "沖縄県",
    heroText: "沖縄県の子ども向け英語・英会話教室",
    areas: [],
    schools: [ECC_JUNIOR, KUMON_ENG, RIPPLE, localSchool("沖縄英語スクール", "沖縄"), localSchool("バイリンガルキッズ那覇", "那覇"), JEC],
    faqs: STD_FAQS("沖縄県"),
    blogs: STD_BLOGS,
    otherPrefs: [
      { slug: "kagoshima", name: "鹿児島県" }, { slug: "fukuoka", name: "福岡県" },
      { slug: "miyazaki", name: "宮崎県" }, { slug: "kumamoto", name: "熊本県" },
    ],
  },
  kumamoto: {
    name: "熊本県",
    heroText: "熊本県の子ども向け英語・英会話教室",
    areas: [],
    schools: [ECC_JUNIOR, KUMON_ENG, RIPPLE, localSchool("熊本英語スクール", "熊本"), localSchool("バイリンガルキッズ熊本", "熊本"), JEC],
    faqs: STD_FAQS("熊本県"),
    blogs: STD_BLOGS,
    otherPrefs: [
      { slug: "fukuoka", name: "福岡県" }, { slug: "saga", name: "佐賀県" },
      { slug: "nagasaki", name: "長崎県" }, { slug: "oita", name: "大分県" },
    ],
  },
  kagoshima: {
    name: "鹿児島県",
    heroText: "鹿児島県の子ども向け英語・英会話教室",
    areas: [],
    schools: [ECC_JUNIOR, KUMON_ENG, RIPPLE, localSchool("鹿児島英語スクール", "鹿児島"), localSchool("バイリンガルキッズ鹿児島", "鹿児島"), JEC],
    faqs: STD_FAQS("鹿児島県"),
    blogs: STD_BLOGS,
    otherPrefs: [
      { slug: "fukuoka", name: "福岡県" }, { slug: "kumamoto", name: "熊本県" },
      { slug: "miyazaki", name: "宮崎県" }, { slug: "okinawa", name: "沖縄県" },
    ],
  },
  nagasaki: {
    name: "長崎県",
    heroText: "長崎県の子ども向け英語・英会話教室",
    areas: [],
    schools: [ECC_JUNIOR, KUMON_ENG, RIPPLE, localSchool("長崎英語スクール", "長崎"), localSchool("バイリンガルキッズ長崎", "長崎"), JEC],
    faqs: STD_FAQS("長崎県"),
    blogs: STD_BLOGS,
    otherPrefs: [
      { slug: "fukuoka", name: "福岡県" }, { slug: "saga", name: "佐賀県" },
      { slug: "kumamoto", name: "熊本県" }, { slug: "oita", name: "大分県" },
    ],
  },
  ehime: {
    name: "愛媛県",
    heroText: "愛媛県の子ども向け英語・英会話教室",
    areas: [],
    schools: [ECC_JUNIOR, KUMON_ENG, RIPPLE, localSchool("愛媛英語スクール", "愛媛"), localSchool("バイリンガルキッズ松山", "松山"), JEC],
    faqs: STD_FAQS("愛媛県"),
    blogs: STD_BLOGS,
    otherPrefs: [
      { slug: "kagawa", name: "香川県" }, { slug: "tokushima", name: "徳島県" },
      { slug: "kochi", name: "高知県" }, { slug: "hiroshima", name: "広島県" },
    ],
  },
  yamaguchi: {
    name: "山口県",
    heroText: "山口県の子ども向け英語・英会話教室",
    areas: [],
    schools: [ECC_JUNIOR, KUMON_ENG, RIPPLE, localSchool("山口英語スクール", "山口"), localSchool("バイリンガルキッズ山口", "山口"), JEC],
    faqs: STD_FAQS("山口県"),
    blogs: STD_BLOGS,
    otherPrefs: [
      { slug: "hiroshima", name: "広島県" }, { slug: "shimane", name: "島根県" },
      { slug: "fukuoka", name: "福岡県" }, { slug: "tottori", name: "鳥取県" },
    ],
  },
  fukushima: {
    name: "福島県",
    heroText: "福島県の子ども向け英語・英会話教室",
    areas: [],
    schools: [ECC_JUNIOR, KUMON_ENG, RIPPLE, localSchool("福島英語スクール", "福島"), localSchool("バイリンガルキッズ郡山", "郡山"), JEC],
    faqs: STD_FAQS("福島県"),
    blogs: STD_BLOGS,
    otherPrefs: [
      { slug: "miyagi", name: "宮城県" }, { slug: "yamagata", name: "山形県" },
      { slug: "ibaraki", name: "茨城県" }, { slug: "niigata", name: "新潟県" },
    ],
  },
  akita: {
    name: "秋田県",
    heroText: "秋田県の子ども向け英語・英会話教室",
    areas: [],
    schools: [ECC_JUNIOR, KUMON_ENG, RIPPLE, localSchool("秋田英語スクール", "秋田"), localSchool("バイリンガルキッズ秋田", "秋田"), JEC],
    faqs: STD_FAQS("秋田県"),
    blogs: STD_BLOGS,
    otherPrefs: [
      { slug: "miyagi", name: "宮城県" }, { slug: "iwate", name: "岩手県" },
      { slug: "yamagata", name: "山形県" }, { slug: "aomori", name: "青森県" },
    ],
  },
  yamagata: {
    name: "山形県",
    heroText: "山形県の子ども向け英語・英会話教室",
    areas: [],
    schools: [ECC_JUNIOR, KUMON_ENG, RIPPLE, localSchool("山形英語スクール", "山形"), localSchool("バイリンガルキッズ山形", "山形"), JEC],
    faqs: STD_FAQS("山形県"),
    blogs: STD_BLOGS,
    otherPrefs: [
      { slug: "miyagi", name: "宮城県" }, { slug: "akita", name: "秋田県" },
      { slug: "fukushima", name: "福島県" }, { slug: "niigata", name: "新潟県" },
    ],
  },
  iwate: {
    name: "岩手県",
    heroText: "岩手県の子ども向け英語・英会話教室",
    areas: [],
    schools: [ECC_JUNIOR, KUMON_ENG, RIPPLE, localSchool("岩手英語スクール", "岩手"), localSchool("バイリンガルキッズ盛岡", "盛岡"), JEC],
    faqs: STD_FAQS("岩手県"),
    blogs: STD_BLOGS,
    otherPrefs: [
      { slug: "miyagi", name: "宮城県" }, { slug: "akita", name: "秋田県" },
      { slug: "aomori", name: "青森県" }, { slug: "fukushima", name: "福島県" },
    ],
  },
  aomori: {
    name: "青森県",
    heroText: "青森県の子ども向け英語・英会話教室",
    areas: [],
    schools: [ECC_JUNIOR, KUMON_ENG, RIPPLE, localSchool("青森英語スクール", "青森"), localSchool("バイリンガルキッズ青森", "青森"), JEC],
    faqs: STD_FAQS("青森県"),
    blogs: STD_BLOGS,
    otherPrefs: [
      { slug: "iwate", name: "岩手県" }, { slug: "akita", name: "秋田県" },
      { slug: "miyagi", name: "宮城県" }, { slug: "hokkaido", name: "北海道" },
    ],
  },
};

// ────────────────────────────────────────────
// ENGLISH_AREAS: エリア別データ
// ────────────────────────────────────────────

function areaSchools(areaName, prefName, chain1, chain2, chain3, chain4) {
  return [
    { ...chain1, desc: chain1.desc },
    { ...chain2, desc: chain2.desc },
    { ...chain3, desc: chain3.desc },
    { ...(chain4 || ECC_JUNIOR), desc: (chain4 || ECC_JUNIOR).desc },
    localSchool(`${areaName}英語スクール`, areaName),
  ];
}

export const ENGLISH_AREAS = {
  // ── 大阪府 ──
  "osaka/osaka-city": { name: "大阪市", prefName: "大阪府", prefSlug: "osaka", schools: areaSchools("大阪市", "大阪府", ECC_KIDS, SHANE, KIDS_DUO, BERLITZ) },
  "osaka/minoh": { name: "箕面市", prefName: "大阪府", prefSlug: "osaka", schools: areaSchools("箕面市", "大阪府", ECC_KIDS, SHANE, ECC_JUNIOR, JEC) },
  "osaka/moriguchi": { name: "守口市", prefName: "大阪府", prefSlug: "osaka", schools: areaSchools("守口市", "大阪府", ECC_KIDS, ECC_JUNIOR, RIPPLE, JEC) },
  "osaka/sakai": { name: "堺市", prefName: "大阪府", prefSlug: "osaka", schools: areaSchools("堺市", "大阪府", ECC_KIDS, SHANE, ECC_JUNIOR, JEC) },
  "osaka/suita": { name: "吹田市", prefName: "大阪府", prefSlug: "osaka", schools: areaSchools("吹田市", "大阪府", ECC_KIDS, SHANE, KIDS_DUO, ECC_JUNIOR) },
  "osaka/takatsuki": { name: "高槻市", prefName: "大阪府", prefSlug: "osaka", schools: areaSchools("高槻市", "大阪府", ECC_KIDS, SHANE, ECC_JUNIOR, RIPPLE) },
  "osaka/toyonaka": { name: "豊中市", prefName: "大阪府", prefSlug: "osaka", schools: areaSchools("豊中市", "大阪府", ECC_KIDS, KIDS_DUO, SHANE, ECC_JUNIOR) },
  "osaka/ibaraki": { name: "茨木市", prefName: "大阪府", prefSlug: "osaka", schools: areaSchools("茨木市", "大阪府", ECC_KIDS, ECC_JUNIOR, SHANE, JEC) },
  // ── 愛知県 ──
  "aichi/anjo": { name: "安城市", prefName: "愛知県", prefSlug: "aichi", schools: areaSchools("安城市", "愛知県", ECC_KIDS, ECC_JUNIOR, RIPPLE, JEC) },
  "aichi/chikusa": { name: "千種区", prefName: "愛知県", prefSlug: "aichi", schools: areaSchools("千種区", "愛知県", ECC_KIDS, SHANE, KIDS_DUO, ECC_JUNIOR) },
  "aichi/meito": { name: "名東区", prefName: "愛知県", prefSlug: "aichi", schools: areaSchools("名東区", "愛知県", ECC_KIDS, BERLITZ, ECC_JUNIOR, RIPPLE) },
  "aichi/midori": { name: "緑区", prefName: "愛知県", prefSlug: "aichi", schools: areaSchools("緑区", "愛知県", ECC_KIDS, ECC_JUNIOR, KUMON_ENG, RIPPLE) },
  "aichi/moriyama": { name: "守山区", prefName: "愛知県", prefSlug: "aichi", schools: areaSchools("守山区", "愛知県", ECC_KIDS, ECC_JUNIOR, RIPPLE, JEC) },
  "aichi/nisshin": { name: "日進市", prefName: "愛知県", prefSlug: "aichi", schools: areaSchools("日進市", "愛知県", ECC_KIDS, ECC_JUNIOR, KUMON_ENG, RIPPLE) },
  "aichi/owariasahi": { name: "尾張旭市", prefName: "愛知県", prefSlug: "aichi", schools: areaSchools("尾張旭市", "愛知県", ECC_JUNIOR, KUMON_ENG, RIPPLE, JEC) },
  "aichi/tenpaku": { name: "天白区", prefName: "愛知県", prefSlug: "aichi", schools: areaSchools("天白区", "愛知県", ECC_KIDS, SHANE, ECC_JUNIOR, RIPPLE) },
  "aichi/toyota": { name: "豊田市", prefName: "愛知県", prefSlug: "aichi", schools: areaSchools("豊田市", "愛知県", ECC_KIDS, KIDS_DUO, ECC_JUNIOR, RIPPLE) },
  // ── 千葉県 ──
  "chiba/chiba-city": { name: "千葉市", prefName: "千葉県", prefSlug: "chiba", schools: areaSchools("千葉市", "千葉県", ECC_JUNIOR, SHANE, KIDS_DUO, AEON_KIDS) },
  "chiba/kashiwa": { name: "柏市", prefName: "千葉県", prefSlug: "chiba", schools: areaSchools("柏市", "千葉県", ECC_JUNIOR, AEON_KIDS, RIPPLE, JEC) },
  "chiba/matsudo": { name: "松戸市", prefName: "千葉県", prefSlug: "chiba", schools: areaSchools("松戸市", "千葉県", ECC_JUNIOR, KUMON_ENG, RIPPLE, JEC) },
  // ── 岐阜県 ──
  "gifu/gifu-city": { name: "岐阜市", prefName: "岐阜県", prefSlug: "gifu", schools: areaSchools("岐阜市", "岐阜県", ECC_JUNIOR, KUMON_ENG, RIPPLE, JEC) },
  "gifu/kani": { name: "可児市", prefName: "岐阜県", prefSlug: "gifu", schools: areaSchools("可児市", "岐阜県", ECC_JUNIOR, KUMON_ENG, RIPPLE, JEC) },
  "gifu/minokamo": { name: "美濃加茂市", prefName: "岐阜県", prefSlug: "gifu", schools: areaSchools("美濃加茂市", "岐阜県", ECC_JUNIOR, KUMON_ENG, RIPPLE, JEC) },
  "gifu/tajimi": { name: "多治見市", prefName: "岐阜県", prefSlug: "gifu", schools: areaSchools("多治見市", "岐阜県", ECC_JUNIOR, KUMON_ENG, RIPPLE, JEC) },
  // ── 兵庫県 ──
  "hyogo/nishinomiya": { name: "西宮市", prefName: "兵庫県", prefSlug: "hyogo", schools: areaSchools("西宮市", "兵庫県", ECC_KIDS, SHANE, ECC_JUNIOR, BERLITZ) },
  // ── 茨城県 ──
  "ibaraki/hitachi": { name: "日立市", prefName: "茨城県", prefSlug: "ibaraki", schools: areaSchools("日立市", "茨城県", ECC_JUNIOR, KUMON_ENG, RIPPLE, JEC) },
  "ibaraki/hitachinaka": { name: "ひたちなか市", prefName: "茨城県", prefSlug: "ibaraki", schools: areaSchools("ひたちなか市", "茨城県", ECC_JUNIOR, KUMON_ENG, RIPPLE, JEC) },
  "ibaraki/mito": { name: "水戸市", prefName: "茨城県", prefSlug: "ibaraki", schools: areaSchools("水戸市", "茨城県", ECC_JUNIOR, KUMON_ENG, RIPPLE, JEC) },
  "ibaraki/tsuchiura": { name: "土浦市", prefName: "茨城県", prefSlug: "ibaraki", schools: areaSchools("土浦市", "茨城県", ECC_JUNIOR, KUMON_ENG, RIPPLE, JEC) },
  "ibaraki/tsukuba": { name: "つくば市", prefName: "茨城県", prefSlug: "ibaraki", schools: areaSchools("つくば市", "茨城県", ECC_JUNIOR, BERLITZ, RIPPLE, JEC) },
  // ── 石川県 ──
  "ishikawa/kanazawa": { name: "金沢市", prefName: "石川県", prefSlug: "ishikawa", schools: areaSchools("金沢市", "石川県", ECC_JUNIOR, KUMON_ENG, RIPPLE, JEC) },
  "ishikawa/nonoichi": { name: "野々市市", prefName: "石川県", prefSlug: "ishikawa", schools: areaSchools("野々市市", "石川県", ECC_JUNIOR, KUMON_ENG, RIPPLE, JEC) },
  "ishikawa/uchinada": { name: "内灘町", prefName: "石川県", prefSlug: "ishikawa", schools: areaSchools("内灘町", "石川県", ECC_JUNIOR, KUMON_ENG, RIPPLE, JEC) },
  // ── 神奈川県 ──
  "kanagawa/aoba": { name: "青葉区", prefName: "神奈川県", prefSlug: "kanagawa", schools: areaSchools("青葉区", "神奈川県", ECC_KIDS, BERLITZ, KIDS_DUO, ECC_JUNIOR) },
  "kanagawa/atsugi": { name: "厚木市", prefName: "神奈川県", prefSlug: "kanagawa", schools: areaSchools("厚木市", "神奈川県", ECC_JUNIOR, SHANE, RIPPLE, JEC) },
  "kanagawa/ebina": { name: "海老名市", prefName: "神奈川県", prefSlug: "kanagawa", schools: areaSchools("海老名市", "神奈川県", ECC_JUNIOR, KUMON_ENG, RIPPLE, JEC) },
  "kanagawa/fujisawa": { name: "藤沢市", prefName: "神奈川県", prefSlug: "kanagawa", schools: areaSchools("藤沢市", "神奈川県", ECC_KIDS, SHANE, ECC_JUNIOR, AEON_KIDS) },
  "kanagawa/kohoku": { name: "港北区", prefName: "神奈川県", prefSlug: "kanagawa", schools: areaSchools("港北区", "神奈川県", ECC_KIDS, KIDS_DUO, BERLITZ, ECC_JUNIOR) },
  "kanagawa/midori": { name: "緑区", prefName: "神奈川県", prefSlug: "kanagawa", schools: areaSchools("緑区", "神奈川県", ECC_JUNIOR, KUMON_ENG, RIPPLE, JEC) },
  "kanagawa/nakahara": { name: "中原区", prefName: "神奈川県", prefSlug: "kanagawa", schools: areaSchools("中原区", "神奈川県", ECC_KIDS, SHANE, BERLITZ, ECC_JUNIOR) },
  "kanagawa/sagamihara": { name: "相模原市", prefName: "神奈川県", prefSlug: "kanagawa", schools: areaSchools("相模原市", "神奈川県", ECC_JUNIOR, KUMON_ENG, RIPPLE, JEC) },
  "kanagawa/takatsu": { name: "高津区", prefName: "神奈川県", prefSlug: "kanagawa", schools: areaSchools("高津区", "神奈川県", ECC_KIDS, BERLITZ, ECC_JUNIOR, RIPPLE) },
  "kanagawa/tsuzuki": { name: "都筑区", prefName: "神奈川県", prefSlug: "kanagawa", schools: areaSchools("都筑区", "神奈川県", ECC_KIDS, KIDS_DUO, BERLITZ, ECC_JUNIOR) },
  "kanagawa/yamato": { name: "大和市", prefName: "神奈川県", prefSlug: "kanagawa", schools: areaSchools("大和市", "神奈川県", ECC_JUNIOR, KUMON_ENG, RIPPLE, JEC) },
  "kanagawa/yokosuka": { name: "横須賀市", prefName: "神奈川県", prefSlug: "kanagawa", schools: areaSchools("横須賀市", "神奈川県", ECC_JUNIOR, SHANE, RIPPLE, JEC) },
  "kanagawa/zushi": { name: "逗子市", prefName: "神奈川県", prefSlug: "kanagawa", schools: areaSchools("逗子市", "神奈川県", ECC_JUNIOR, KUMON_ENG, RIPPLE, JEC) },
  // ── 京都府 ──
  "kyoto/kyoto-city": { name: "京都市", prefName: "京都府", prefSlug: "kyoto", schools: areaSchools("京都市", "京都府", ECC_KIDS, SHANE, BERLITZ, ECC_JUNIOR) },
  // ── 長野県 ──
  "nagano/nagano-city": { name: "長野市", prefName: "長野県", prefSlug: "nagano", schools: areaSchools("長野市", "長野県", ECC_JUNIOR, KUMON_ENG, RIPPLE, JEC) },
  // ── 埼玉県 ──
  "saitama/kawaguchi": { name: "川口市", prefName: "埼玉県", prefSlug: "saitama", schools: areaSchools("川口市", "埼玉県", ECC_JUNIOR, AEON_KIDS, RIPPLE, JEC) },
  "saitama/koshigaya": { name: "越谷市", prefName: "埼玉県", prefSlug: "saitama", schools: areaSchools("越谷市", "埼玉県", ECC_JUNIOR, KUMON_ENG, RIPPLE, JEC) },
  "saitama/minami": { name: "南区", prefName: "埼玉県", prefSlug: "saitama", schools: areaSchools("南区", "埼玉県", ECC_JUNIOR, KIDS_DUO, RIPPLE, JEC) },
  "saitama/urawa": { name: "浦和区", prefName: "埼玉県", prefSlug: "saitama", schools: areaSchools("浦和区", "埼玉県", ECC_JUNIOR, SHANE, BERLITZ, RIPPLE) },
  // ── 滋賀県 ──
  "shiga/kusatsu": { name: "草津市", prefName: "滋賀県", prefSlug: "shiga", schools: areaSchools("草津市", "滋賀県", ECC_KIDS, ECC_JUNIOR, RIPPLE, JEC) },
  "shiga/otsu": { name: "大津市", prefName: "滋賀県", prefSlug: "shiga", schools: areaSchools("大津市", "滋賀県", ECC_KIDS, ECC_JUNIOR, KUMON_ENG, RIPPLE) },
  // ── 東京都 ──
  "tokyo/chofu": { name: "調布市", prefName: "東京都", prefSlug: "tokyo", schools: areaSchools("調布市", "東京都", ECC_KIDS, SHANE, ECC_JUNIOR, BERLITZ) },
  "tokyo/edogawa": { name: "江戸川区", prefName: "東京都", prefSlug: "tokyo", schools: areaSchools("江戸川区", "東京都", ECC_KIDS, ECC_JUNIOR, AEON_KIDS, RIPPLE) },
  "tokyo/kita": { name: "北区", prefName: "東京都", prefSlug: "tokyo", schools: areaSchools("北区", "東京都", ECC_JUNIOR, KUMON_ENG, RIPPLE, JEC) },
  "tokyo/machida": { name: "町田市", prefName: "東京都", prefSlug: "tokyo", schools: areaSchools("町田市", "東京都", ECC_KIDS, SHANE, ECC_JUNIOR, RIPPLE) },
  "tokyo/meguro": { name: "目黒区", prefName: "東京都", prefSlug: "tokyo", schools: areaSchools("目黒区", "東京都", ECC_KIDS, BERLITZ, KIDS_DUO, SHANE) },
  "tokyo/minato": { name: "港区", prefName: "東京都", prefSlug: "tokyo", schools: areaSchools("港区", "東京都", BERLITZ, KIDS_DUO, SHANE, ECC_KIDS) },
  "tokyo/nerima": { name: "練馬区", prefName: "東京都", prefSlug: "tokyo", schools: areaSchools("練馬区", "東京都", ECC_JUNIOR, KUMON_ENG, RIPPLE, JEC) },
  "tokyo/setagaya": { name: "世田谷区", prefName: "東京都", prefSlug: "tokyo", schools: areaSchools("世田谷区", "東京都", ECC_KIDS, BERLITZ, KIDS_DUO, SHANE) },
  "tokyo/shibuya": { name: "渋谷区", prefName: "東京都", prefSlug: "tokyo", schools: areaSchools("渋谷区", "東京都", BERLITZ, KIDS_DUO, SHANE, ECC_KIDS) },
  "tokyo/shinagawa": { name: "品川区", prefName: "東京都", prefSlug: "tokyo", schools: areaSchools("品川区", "東京都", ECC_KIDS, BERLITZ, AEON_KIDS, ECC_JUNIOR) },
  "tokyo/shinjuku": { name: "新宿区", prefName: "東京都", prefSlug: "tokyo", schools: areaSchools("新宿区", "東京都", BERLITZ, KIDS_DUO, ECC_KIDS, SHANE) },
  "tokyo/suginami": { name: "杉並区", prefName: "東京都", prefSlug: "tokyo", schools: areaSchools("杉並区", "東京都", ECC_KIDS, SHANE, ECC_JUNIOR, RIPPLE) },
  // ── 和歌山県 ──
  "wakayama/wakayama-city": { name: "和歌山市", prefName: "和歌山県", prefSlug: "wakayama", schools: areaSchools("和歌山市", "和歌山県", ECC_JUNIOR, KUMON_ENG, RIPPLE, JEC) },
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
