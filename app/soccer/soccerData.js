// /app/soccer/soccerData.js

const LIBERTA = { name: "リベルタサッカースクール", rating: 4.3, fee: 7103, age: "3歳〜12歳", desc: "「認める・褒める・励ます」の指導方針。全国1,000校以上展開。元プロ選手コーチが技術とメンタルを育成。", color: "#2E7D32", emoji: "⚽" };
const COPA = { name: "コパ・カフェサッカースクール", rating: 4.2, fee: 6600, age: "3歳〜小学生", desc: "楽しむことを最優先にしたサッカースクール。全国展開中で初心者歓迎。", color: "#388E3C", emoji: "⚽" };
const GAMBA = { name: "ガンバ大阪スクール", rating: 4.5, fee: 6600, age: "年少〜小6", desc: "Jリーグ・ガンバ大阪が運営する公式スクール。クラブのメソッドで技術と精神力を育成。", color: "#2E7D32", emoji: "⚽" };
const CEREZO = { name: "セレッソ大阪", rating: 4.4, fee: 7700, age: "年少〜小6", desc: "セレッソ大阪公式スクール。元プロ選手コーチによる本格的な育成プログラム。", color: "#388E3C", emoji: "⚽" };
const FC_TOKYO = { name: "FC東京スクール", rating: 4.5, fee: 8800, age: "3歳〜中学生", desc: "J1・FC東京が運営する公式スクール。幼児から中学生まで幅広く対応する充実プログラム。", color: "#2E7D32", emoji: "⚽" };
const VERDY = { name: "東京ヴェルディ", rating: 4.3, fee: 7700, age: "4歳〜小学生", desc: "東京ヴェルディ公式スクール。緑の名門クラブのDNAを受け継ぐ技術重視の育成。", color: "#388E3C", emoji: "⚽" };
const FRONTALE = { name: "川崎フロンターレ", rating: 4.6, fee: 7700, age: "年少〜小6", desc: "J1屈指の強豪・川崎フロンターレ公式スクール。技術と楽しさを融合した人気プログラム。", color: "#2E7D32", emoji: "⚽" };
const MARINOS = { name: "横浜F・マリノス", rating: 4.5, fee: 8800, age: "4歳〜小学生", desc: "横浜F・マリノス公式スクール。国際色豊かなクラブの指導方針で技術を磨く。", color: "#388E3C", emoji: "⚽" };
const BELLMARE = { name: "湘南ベルマーレ", rating: 4.3, fee: 6600, age: "3歳〜小学生", desc: "湘南ベルマーレ公式スクール。海辺の地に根付いたアクティブな育成スタイル。", color: "#2E7D32", emoji: "⚽" };
const REDS = { name: "浦和レッズハートフル", rating: 4.6, fee: 7150, age: "年少〜小6", desc: "浦和レッズが運営するハートフルサッカー。技術だけでなく心の成長も大切にした指導。", color: "#388E3C", emoji: "⚽" };
const ARDIJA = { name: "大宮アルディージャ", rating: 4.4, fee: 6600, age: "3歳〜小学生", desc: "大宮アルディージャ公式スクール。地域密着型の丁寧な指導で基礎をしっかり習得。", color: "#2E7D32", emoji: "⚽" };
const REYSOL = { name: "柏レイソル", rating: 4.5, fee: 7700, age: "年少〜小6", desc: "柏レイソル公式スクール。育成に定評あるクラブのノウハウを活かした指導プログラム。", color: "#388E3C", emoji: "⚽" };
const JEFCHIBA = { name: "ジェフ千葉", rating: 4.3, fee: 6600, age: "3歳〜小学生", desc: "ジェフユナイテッド千葉公式スクール。地域の子どもたちにサッカーの楽しさを伝える。", color: "#2E7D32", emoji: "⚽" };
const GRAMPUS = { name: "名古屋グランパス", rating: 4.5, fee: 8800, age: "4歳〜小学生", desc: "名古屋グランパス公式スクール。トヨタの地に根付いた強豪クラブの本格育成プログラム。", color: "#388E3C", emoji: "⚽" };
const ANTLERS = { name: "鹿島アントラーズ", rating: 4.6, fee: 8800, age: "年少〜小6", desc: "鹿島アントラーズ公式スクール。国内最多タイトルを誇る名門クラブの育成メソッドを体験。", color: "#2E7D32", emoji: "⚽" };
const HOLLYHOCK = { name: "水戸ホーリーホック", rating: 4.2, fee: 5500, age: "3歳〜小学生", desc: "水戸ホーリーホック公式スクール。地域密着型で親しみやすい環境でサッカーを楽しめる。", color: "#388E3C", emoji: "⚽" };
const VISSEL = { name: "ヴィッセル神戸", rating: 4.5, fee: 8800, age: "年少〜小6", desc: "ヴィッセル神戸公式スクール。バルセロナスタイルを取り入れた技術重視の育成プログラム。", color: "#2E7D32", emoji: "⚽" };
const SANFRECCE = { name: "サンフレッチェ広島", rating: 4.4, fee: 7700, age: "3歳〜小学生", desc: "サンフレッチェ広島公式スクール。育成の名門クラブが誇る組織的なサッカーを幼少期から。", color: "#388E3C", emoji: "⚽" };
const AVISPA = { name: "アビスパ福岡", rating: 4.4, fee: 7150, age: "年少〜小6", desc: "アビスパ福岡公式スクール。九州の地に根ざしたクラブの育成プログラムで基礎から学べる。", color: "#2E7D32", emoji: "⚽" };
const CONSADOLE = { name: "コンサドーレ札幌", rating: 4.4, fee: 7700, age: "年少〜小6", desc: "北海道コンサドーレ札幌公式スクール。雪国北海道でサッカーの基礎技術と体力を育てる。", color: "#388E3C", emoji: "⚽" };
const VEGALTA = { name: "ベガルタ仙台", rating: 4.3, fee: 6600, age: "3歳〜小学生", desc: "ベガルタ仙台公式スクール。東北の雄が地域の子どもたちにサッカーの楽しさを届ける。", color: "#2E7D32", emoji: "⚽" };
const SHIMIZU = { name: "清水エスパルス", rating: 4.4, fee: 7700, age: "年少〜小6", desc: "清水エスパルス公式スクール。サッカー王国・静岡を代表するクラブの育成プログラム。", color: "#388E3C", emoji: "⚽" };
const JUBILO = { name: "ジュビロ磐田", rating: 4.4, fee: 7700, age: "年少〜小6", desc: "ジュビロ磐田公式スクール。サッカー王国・静岡のもう一方の雄による技術重視の育成。", color: "#2E7D32", emoji: "⚽" };
const ALBIREX = { name: "アルビレックス新潟", rating: 4.3, fee: 7150, age: "3歳〜小学生", desc: "アルビレックス新潟公式スクール。新潟の地に根ざしたクラブの育成プログラムで楽しく学べる。", color: "#388E3C", emoji: "⚽" };
const TOCHIGI_SC = { name: "栃木SC", rating: 4.2, fee: 5500, age: "3歳〜小学生", desc: "栃木SC公式スクール。地域密着型で親しみやすい指導でサッカーの基礎を丁寧に教える。", color: "#2E7D32", emoji: "⚽" };
const SANGA = { name: "京都サンガ", rating: 4.4, fee: 7700, age: "年少〜小6", desc: "京都サンガF.C.公式スクール。古都・京都を本拠とするクラブが誇る育成プログラム。", color: "#388E3C", emoji: "⚽" };
const FAGIANO = { name: "ファジアーノ岡山", rating: 4.2, fee: 6600, age: "3歳〜小学生", desc: "ファジアーノ岡山公式スクール。地域に愛されるクラブが子どもたちの成長をサポート。", color: "#2E7D32", emoji: "⚽" };

function localSoccer(name, area, desc, fee = 6000, rating = 4.1) {
  return { name, rating, fee, age: "3歳〜小学生", desc: desc || `${area}に根ざしたサッカースクール。少人数制で丁寧な指導。地域密着型で初心者からしっかり対応。`, color: "#388E3C", emoji: "⚽" };
}

const STD_FAQS = (prefName) => [
  { q: `${prefName}でサッカー教室は何歳から通えますか？`, a: "多くのスクールは3〜4歳から通えます。Jリーグ系スクールも幼児コースを設けています。" },
  { q: `${prefName}のサッカースクールの月謝相場は？`, a: "週1回で月3,000〜8,000円が一般的です。" },
  { q: "女の子でもサッカーを習えますか？", a: "もちろんです。女子向けクラスを設けるスクールも増えています。" },
  { q: "サッカーを習うとどんな効果がありますか？", a: "体力・瞬発力・判断力・協調性が育ちます。" },
];

const STD_BLOGS = [
  { href: "/blog/kids-soccer-guide", text: "子供のサッカースクール選び方完全ガイド" },
  { href: "/blog/kids-soccer-school-guide-2026", text: "子供サッカースクールおすすめ2026年版" },
  { href: "/blog/kids-soccer-benefits-guide", text: "子供がサッカーを習う効果・メリット" },
  { href: "/blog/kids-soccer-toddler-guide", text: "幼児・3歳からサッカースクールに通うには" },
  { href: "/blog/tokyo-kids-soccer-2026", text: "東京の子供サッカースクールおすすめ" },
];

export const SOCCER_PREFS = {
  osaka: {
    name: "大阪府",
    heroText: "関西最大都市・大阪の子どもサッカースクール",
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
    schools: [GAMBA, CEREZO, LIBERTA, COPA, localSoccer("FCみのお", "箕面"), localSoccer("FCおおさか", "大阪")],
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
    heroText: "首都・東京の子ども向けサッカースクール",
    areas: [
      { slug: "chofu", name: "調布市" }, { slug: "edogawa", name: "江戸川区" },
      { slug: "kita", name: "北区" }, { slug: "machida", name: "町田市" },
      { slug: "meguro", name: "目黒区" }, { slug: "minato", name: "港区" },
      { slug: "nerima", name: "練馬区" }, { slug: "setagaya", name: "世田谷区" },
      { slug: "shibuya", name: "渋谷区" }, { slug: "shinagawa", name: "品川区" },
      { slug: "shinjuku", name: "新宿区" }, { slug: "suginami", name: "杉並区" },
    ],
    schools: [FC_TOKYO, VERDY, LIBERTA, COPA, localSoccer("FCとうきょう", "東京"), localSoccer("東京ジュニアFC", "東京")],
    faqs: STD_FAQS("東京都"),
    blogs: STD_BLOGS,
    otherPrefs: [
      { slug: "kanagawa", name: "神奈川県" }, { slug: "saitama", name: "埼玉県" },
      { slug: "chiba", name: "千葉県" }, { slug: "osaka", name: "大阪府" },
    ],
  },
  kanagawa: {
    name: "神奈川県",
    heroText: "横浜・川崎を擁する神奈川県の子どもサッカースクール",
    areas: [
      { slug: "aoba", name: "青葉区" }, { slug: "atsugi", name: "厚木市" },
      { slug: "ebina", name: "海老名市" }, { slug: "fujisawa", name: "藤沢市" },
      { slug: "kohoku", name: "港北区" }, { slug: "midori", name: "緑区" },
      { slug: "nakahara", name: "中原区" }, { slug: "nakahara-shinjou", name: "中原区（新城）" },
      { slug: "sagamihara", name: "相模原市" }, { slug: "takatsu", name: "高津区" },
      { slug: "tsuzuki", name: "都筑区" }, { slug: "yamato", name: "大和市" },
      { slug: "yokosuka", name: "横須賀市" }, { slug: "zushi", name: "逗子市" },
    ],
    schools: [FRONTALE, MARINOS, BELLMARE, LIBERTA, COPA, localSoccer("FCかながわ", "神奈川")],
    faqs: STD_FAQS("神奈川県"),
    blogs: STD_BLOGS,
    otherPrefs: [
      { slug: "tokyo", name: "東京都" }, { slug: "saitama", name: "埼玉県" },
      { slug: "chiba", name: "千葉県" }, { slug: "shizuoka", name: "静岡県" },
    ],
  },
  aichi: {
    name: "愛知県",
    heroText: "名古屋を中心とした愛知県の子どもサッカースクール",
    areas: [
      { slug: "anjo", name: "安城市" }, { slug: "chikusa", name: "千種区" },
      { slug: "meito", name: "名東区" }, { slug: "midori", name: "緑区" },
      { slug: "moriyama", name: "守山区" }, { slug: "nisshin", name: "日進市" },
      { slug: "owariasahi", name: "尾張旭市" }, { slug: "tenpaku", name: "天白区" },
      { slug: "toyota", name: "豊田市" },
    ],
    schools: [GRAMPUS, LIBERTA, COPA, localSoccer("FCなごや", "名古屋"), localSoccer("愛知ジュニアFC", "愛知")],
    faqs: STD_FAQS("愛知県"),
    blogs: STD_BLOGS,
    otherPrefs: [
      { slug: "osaka", name: "大阪府" }, { slug: "gifu", name: "岐阜県" },
      { slug: "shizuoka", name: "静岡県" }, { slug: "mie", name: "三重県" },
    ],
  },
  gifu: {
    name: "岐阜県",
    heroText: "岐阜県の子ども向けサッカースクール",
    areas: [
      { slug: "gifu-city", name: "岐阜市" }, { slug: "kani", name: "可児市" },
      { slug: "minokamo", name: "美濃加茂市" }, { slug: "tajimi", name: "多治見市" },
    ],
    schools: [LIBERTA, COPA, localSoccer("FCぎふ", "岐阜"), localSoccer("岐阜ジュニアFC", "岐阜"), localSoccer("東濃サッカースクール", "多治見")],
    faqs: STD_FAQS("岐阜県"),
    blogs: STD_BLOGS,
    otherPrefs: [
      { slug: "aichi", name: "愛知県" }, { slug: "shizuoka", name: "静岡県" },
      { slug: "nagano", name: "長野県" }, { slug: "mie", name: "三重県" },
    ],
  },
  hyogo: {
    name: "兵庫県",
    heroText: "神戸・西宮を擁する兵庫県の子どもサッカースクール",
    areas: [
      { slug: "nishinomiya", name: "西宮市" },
    ],
    schools: [VISSEL, LIBERTA, COPA, localSoccer("FCこうべ", "神戸"), localSoccer("兵庫ジュニアFC", "兵庫")],
    faqs: STD_FAQS("兵庫県"),
    blogs: STD_BLOGS,
    otherPrefs: [
      { slug: "osaka", name: "大阪府" }, { slug: "kyoto", name: "京都府" },
      { slug: "nara", name: "奈良県" }, { slug: "wakayama", name: "和歌山県" },
    ],
  },
  ibaraki: {
    name: "茨城県",
    heroText: "茨城県の子ども向けサッカースクール",
    areas: [
      { slug: "hitachi", name: "日立市" }, { slug: "hitachinaka", name: "ひたちなか市" },
      { slug: "mito", name: "水戸市" }, { slug: "tsuchiura", name: "土浦市" },
      { slug: "tsukuba", name: "つくば市" },
    ],
    schools: [ANTLERS, HOLLYHOCK, LIBERTA, COPA, localSoccer("FCいばらき", "茨城")],
    faqs: STD_FAQS("茨城県"),
    blogs: STD_BLOGS,
    otherPrefs: [
      { slug: "tokyo", name: "東京都" }, { slug: "saitama", name: "埼玉県" },
      { slug: "chiba", name: "千葉県" }, { slug: "tochigi", name: "栃木県" },
    ],
  },
  ishikawa: {
    name: "石川県",
    heroText: "金沢を中心とした石川県の子どもサッカースクール",
    areas: [
      { slug: "kanazawa", name: "金沢市" }, { slug: "nonoichi", name: "野々市市" },
      { slug: "uchinada", name: "内灘町" },
    ],
    schools: [LIBERTA, COPA, localSoccer("FCかなざわ", "金沢"), localSoccer("石川ジュニアFC", "石川"), localSoccer("北陸サッカースクール", "石川")],
    faqs: STD_FAQS("石川県"),
    blogs: STD_BLOGS,
    otherPrefs: [
      { slug: "toyama", name: "富山県" }, { slug: "fukui", name: "福井県" },
      { slug: "niigata", name: "新潟県" }, { slug: "nagano", name: "長野県" },
    ],
  },
  kyoto: {
    name: "京都府",
    heroText: "古都・京都の子ども向けサッカースクール",
    areas: [
      { slug: "kyoto-city", name: "京都市" },
    ],
    schools: [SANGA, LIBERTA, COPA, localSoccer("FCきょうと", "京都"), localSoccer("京都ジュニアFC", "京都")],
    faqs: STD_FAQS("京都府"),
    blogs: STD_BLOGS,
    otherPrefs: [
      { slug: "osaka", name: "大阪府" }, { slug: "hyogo", name: "兵庫県" },
      { slug: "shiga", name: "滋賀県" }, { slug: "nara", name: "奈良県" },
    ],
  },
  nagano: {
    name: "長野県",
    heroText: "長野県の子ども向けサッカースクール",
    areas: [
      { slug: "nagano-city", name: "長野市" },
    ],
    schools: [LIBERTA, COPA, localSoccer("FCながの", "長野"), localSoccer("長野ジュニアFC", "長野"), localSoccer("信州サッカースクール", "長野")],
    faqs: STD_FAQS("長野県"),
    blogs: STD_BLOGS,
    otherPrefs: [
      { slug: "tokyo", name: "東京都" }, { slug: "aichi", name: "愛知県" },
      { slug: "gifu", name: "岐阜県" }, { slug: "niigata", name: "新潟県" },
    ],
  },
  shiga: {
    name: "滋賀県",
    heroText: "琵琶湖を擁する滋賀県の子どもサッカースクール",
    areas: [
      { slug: "kusatsu", name: "草津市" }, { slug: "otsu", name: "大津市" },
    ],
    schools: [LIBERTA, COPA, localSoccer("FCしが", "滋賀"), localSoccer("滋賀ジュニアFC", "滋賀"), localSoccer("びわこサッカースクール", "滋賀")],
    faqs: STD_FAQS("滋賀県"),
    blogs: STD_BLOGS,
    otherPrefs: [
      { slug: "osaka", name: "大阪府" }, { slug: "kyoto", name: "京都府" },
      { slug: "hyogo", name: "兵庫県" }, { slug: "mie", name: "三重県" },
    ],
  },
  wakayama: {
    name: "和歌山県",
    heroText: "和歌山県の子ども向けサッカースクール",
    areas: [
      { slug: "wakayama-city", name: "和歌山市" },
    ],
    schools: [LIBERTA, COPA, localSoccer("FCわかやま", "和歌山"), localSoccer("和歌山ジュニアFC", "和歌山"), localSoccer("紀州サッカースクール", "和歌山")],
    faqs: STD_FAQS("和歌山県"),
    blogs: STD_BLOGS,
    otherPrefs: [
      { slug: "osaka", name: "大阪府" }, { slug: "hyogo", name: "兵庫県" },
      { slug: "nara", name: "奈良県" }, { slug: "mie", name: "三重県" },
    ],
  },
  saitama: {
    name: "埼玉県",
    heroText: "埼玉県の子ども向けサッカースクール",
    areas: [
      { slug: "kawaguchi", name: "川口市" }, { slug: "koshigaya", name: "越谷市" },
      { slug: "minami", name: "南区" }, { slug: "urawa", name: "浦和区" },
    ],
    schools: [REDS, ARDIJA, LIBERTA, COPA, localSoccer("FCさいたま", "埼玉"), localSoccer("埼玉ジュニアFC", "埼玉")],
    faqs: STD_FAQS("埼玉県"),
    blogs: STD_BLOGS,
    otherPrefs: [
      { slug: "tokyo", name: "東京都" }, { slug: "kanagawa", name: "神奈川県" },
      { slug: "chiba", name: "千葉県" }, { slug: "gunma", name: "群馬県" },
    ],
  },
  chiba: {
    name: "千葉県",
    heroText: "千葉県の子ども向けサッカースクール",
    areas: [
      { slug: "chiba-city", name: "千葉市" }, { slug: "kashiwa", name: "柏市" },
      { slug: "matsudo", name: "松戸市" },
    ],
    schools: [REYSOL, JEFCHIBA, LIBERTA, COPA, localSoccer("FCちば", "千葉"), localSoccer("千葉ジュニアFC", "千葉")],
    faqs: STD_FAQS("千葉県"),
    blogs: STD_BLOGS,
    otherPrefs: [
      { slug: "tokyo", name: "東京都" }, { slug: "saitama", name: "埼玉県" },
      { slug: "kanagawa", name: "神奈川県" }, { slug: "ibaraki", name: "茨城県" },
    ],
  },
  fukuoka: {
    name: "福岡県",
    heroText: "九州最大の都市・福岡の子どもサッカースクール",
    areas: [],
    schools: [AVISPA, LIBERTA, COPA, localSoccer("FCふくおか", "福岡"), localSoccer("福岡ジュニアFC", "福岡")],
    faqs: STD_FAQS("福岡県"),
    blogs: STD_BLOGS,
    otherPrefs: [
      { slug: "saga", name: "佐賀県" }, { slug: "nagasaki", name: "長崎県" },
      { slug: "kumamoto", name: "熊本県" }, { slug: "oita", name: "大分県" },
    ],
  },
  hokkaido: {
    name: "北海道",
    heroText: "北海道の子ども向けサッカースクール",
    areas: [],
    schools: [CONSADOLE, LIBERTA, COPA, localSoccer("FC札幌", "札幌"), localSoccer("北海道ジュニアFC", "北海道")],
    faqs: STD_FAQS("北海道"),
    blogs: STD_BLOGS,
    otherPrefs: [
      { slug: "aomori", name: "青森県" }, { slug: "iwate", name: "岩手県" },
      { slug: "miyagi", name: "宮城県" }, { slug: "akita", name: "秋田県" },
    ],
  },
  miyagi: {
    name: "宮城県",
    heroText: "仙台を擁する宮城県の子どもサッカースクール",
    areas: [],
    schools: [VEGALTA, LIBERTA, COPA, localSoccer("FC仙台", "仙台"), localSoccer("宮城ジュニアFC", "宮城")],
    faqs: STD_FAQS("宮城県"),
    blogs: STD_BLOGS,
    otherPrefs: [
      { slug: "fukushima", name: "福島県" }, { slug: "yamagata", name: "山形県" },
      { slug: "iwate", name: "岩手県" }, { slug: "akita", name: "秋田県" },
    ],
  },
  hiroshima: {
    name: "広島県",
    heroText: "広島県の子ども向けサッカースクール",
    areas: [],
    schools: [SANFRECCE, LIBERTA, COPA, localSoccer("FC広島", "広島"), localSoccer("広島ジュニアFC", "広島")],
    faqs: STD_FAQS("広島県"),
    blogs: STD_BLOGS,
    otherPrefs: [
      { slug: "okayama", name: "岡山県" }, { slug: "yamaguchi", name: "山口県" },
      { slug: "shimane", name: "島根県" }, { slug: "tottori", name: "鳥取県" },
    ],
  },
  shizuoka: {
    name: "静岡県",
    heroText: "サッカー王国・静岡の子どもサッカースクール",
    areas: [],
    schools: [SHIMIZU, JUBILO, LIBERTA, COPA, localSoccer("FC静岡", "静岡")],
    faqs: STD_FAQS("静岡県"),
    blogs: STD_BLOGS,
    otherPrefs: [
      { slug: "aichi", name: "愛知県" }, { slug: "kanagawa", name: "神奈川県" },
      { slug: "nagano", name: "長野県" }, { slug: "yamanashi", name: "山梨県" },
    ],
  },
  okayama: {
    name: "岡山県",
    heroText: "岡山県の子ども向けサッカースクール",
    areas: [],
    schools: [FAGIANO, LIBERTA, COPA, localSoccer("FC岡山", "岡山"), localSoccer("岡山ジュニアFC", "岡山")],
    faqs: STD_FAQS("岡山県"),
    blogs: STD_BLOGS,
    otherPrefs: [
      { slug: "hiroshima", name: "広島県" }, { slug: "tottori", name: "鳥取県" },
      { slug: "hyogo", name: "兵庫県" }, { slug: "kagawa", name: "香川県" },
    ],
  },
  niigata: {
    name: "新潟県",
    heroText: "新潟県の子ども向けサッカースクール",
    areas: [],
    schools: [ALBIREX, LIBERTA, COPA, localSoccer("FC新潟", "新潟"), localSoccer("新潟ジュニアFC", "新潟")],
    faqs: STD_FAQS("新潟県"),
    blogs: STD_BLOGS,
    otherPrefs: [
      { slug: "nagano", name: "長野県" }, { slug: "fukushima", name: "福島県" },
      { slug: "yamagata", name: "山形県" }, { slug: "toyama", name: "富山県" },
    ],
  },
  tochigi: {
    name: "栃木県",
    heroText: "栃木県の子ども向けサッカースクール",
    areas: [],
    schools: [TOCHIGI_SC, LIBERTA, COPA, localSoccer("FC宇都宮", "宇都宮"), localSoccer("栃木ジュニアFC", "栃木")],
    faqs: STD_FAQS("栃木県"),
    blogs: STD_BLOGS,
    otherPrefs: [
      { slug: "tokyo", name: "東京都" }, { slug: "saitama", name: "埼玉県" },
      { slug: "gunma", name: "群馬県" }, { slug: "ibaraki", name: "茨城県" },
    ],
  },
  gunma: {
    name: "群馬県",
    heroText: "群馬県の子ども向けサッカースクール",
    areas: [],
    schools: [LIBERTA, COPA, localSoccer("FCぐんま", "群馬"), localSoccer("群馬ジュニアFC", "群馬"), localSoccer("前橋サッカースクール", "前橋")],
    faqs: STD_FAQS("群馬県"),
    blogs: STD_BLOGS,
    otherPrefs: [
      { slug: "tokyo", name: "東京都" }, { slug: "saitama", name: "埼玉県" },
      { slug: "tochigi", name: "栃木県" }, { slug: "nagano", name: "長野県" },
    ],
  },
  mie: {
    name: "三重県",
    heroText: "三重県の子ども向けサッカースクール",
    areas: [],
    schools: [LIBERTA, COPA, localSoccer("FC三重", "三重"), localSoccer("三重ジュニアFC", "三重"), localSoccer("伊勢サッカースクール", "伊勢")],
    faqs: STD_FAQS("三重県"),
    blogs: STD_BLOGS,
    otherPrefs: [
      { slug: "aichi", name: "愛知県" }, { slug: "osaka", name: "大阪府" },
      { slug: "kyoto", name: "京都府" }, { slug: "nara", name: "奈良県" },
    ],
  },
  nara: {
    name: "奈良県",
    heroText: "奈良県の子ども向けサッカースクール",
    areas: [],
    schools: [LIBERTA, COPA, localSoccer("FC奈良", "奈良"), localSoccer("奈良ジュニアFC", "奈良"), localSoccer("大和サッカースクール", "奈良")],
    faqs: STD_FAQS("奈良県"),
    blogs: STD_BLOGS,
    otherPrefs: [
      { slug: "osaka", name: "大阪府" }, { slug: "kyoto", name: "京都府" },
      { slug: "hyogo", name: "兵庫県" }, { slug: "wakayama", name: "和歌山県" },
    ],
  },
  fukui: {
    name: "福井県",
    heroText: "福井県の子ども向けサッカースクール",
    areas: [],
    schools: [LIBERTA, COPA, localSoccer("FC福井", "福井"), localSoccer("福井ジュニアFC", "福井"), localSoccer("越前サッカースクール", "福井")],
    faqs: STD_FAQS("福井県"),
    blogs: STD_BLOGS,
    otherPrefs: [
      { slug: "ishikawa", name: "石川県" }, { slug: "toyama", name: "富山県" },
      { slug: "gifu", name: "岐阜県" }, { slug: "kyoto", name: "京都府" },
    ],
  },
  toyama: {
    name: "富山県",
    heroText: "富山県の子ども向けサッカースクール",
    areas: [],
    schools: [LIBERTA, COPA, localSoccer("FC富山", "富山"), localSoccer("富山ジュニアFC", "富山"), localSoccer("北アルプスサッカースクール", "富山")],
    faqs: STD_FAQS("富山県"),
    blogs: STD_BLOGS,
    otherPrefs: [
      { slug: "ishikawa", name: "石川県" }, { slug: "fukui", name: "福井県" },
      { slug: "niigata", name: "新潟県" }, { slug: "nagano", name: "長野県" },
    ],
  },
  yamanashi: {
    name: "山梨県",
    heroText: "山梨県の子ども向けサッカースクール",
    areas: [],
    schools: [LIBERTA, COPA, localSoccer("FC甲府ジュニア", "甲府"), localSoccer("山梨ジュニアFC", "山梨"), localSoccer("富士山麓サッカースクール", "山梨")],
    faqs: STD_FAQS("山梨県"),
    blogs: STD_BLOGS,
    otherPrefs: [
      { slug: "tokyo", name: "東京都" }, { slug: "kanagawa", name: "神奈川県" },
      { slug: "shizuoka", name: "静岡県" }, { slug: "nagano", name: "長野県" },
    ],
  },
  tottori: {
    name: "鳥取県",
    heroText: "鳥取県の子ども向けサッカースクール",
    areas: [],
    schools: [LIBERTA, COPA, localSoccer("FC鳥取", "鳥取"), localSoccer("鳥取ジュニアFC", "鳥取"), localSoccer("砂丘サッカースクール", "鳥取")],
    faqs: STD_FAQS("鳥取県"),
    blogs: STD_BLOGS,
    otherPrefs: [
      { slug: "shimane", name: "島根県" }, { slug: "okayama", name: "岡山県" },
      { slug: "hiroshima", name: "広島県" }, { slug: "hyogo", name: "兵庫県" },
    ],
  },
  shimane: {
    name: "島根県",
    heroText: "島根県の子ども向けサッカースクール",
    areas: [],
    schools: [LIBERTA, COPA, localSoccer("FC松江", "松江"), localSoccer("島根ジュニアFC", "島根"), localSoccer("出雲サッカースクール", "島根")],
    faqs: STD_FAQS("島根県"),
    blogs: STD_BLOGS,
    otherPrefs: [
      { slug: "tottori", name: "鳥取県" }, { slug: "hiroshima", name: "広島県" },
      { slug: "yamaguchi", name: "山口県" }, { slug: "okayama", name: "岡山県" },
    ],
  },
  kochi: {
    name: "高知県",
    heroText: "高知県の子ども向けサッカースクール",
    areas: [],
    schools: [LIBERTA, COPA, localSoccer("FC高知", "高知"), localSoccer("高知ジュニアFC", "高知"), localSoccer("土佐サッカースクール", "高知")],
    faqs: STD_FAQS("高知県"),
    blogs: STD_BLOGS,
    otherPrefs: [
      { slug: "tokushima", name: "徳島県" }, { slug: "ehime", name: "愛媛県" },
      { slug: "kagawa", name: "香川県" }, { slug: "hiroshima", name: "広島県" },
    ],
  },
  tokushima: {
    name: "徳島県",
    heroText: "徳島県の子ども向けサッカースクール",
    areas: [],
    schools: [LIBERTA, COPA, localSoccer("FC徳島", "徳島"), localSoccer("徳島ジュニアFC", "徳島"), localSoccer("阿波サッカースクール", "徳島")],
    faqs: STD_FAQS("徳島県"),
    blogs: STD_BLOGS,
    otherPrefs: [
      { slug: "kagawa", name: "香川県" }, { slug: "ehime", name: "愛媛県" },
      { slug: "kochi", name: "高知県" }, { slug: "hyogo", name: "兵庫県" },
    ],
  },
  kagawa: {
    name: "香川県",
    heroText: "香川県の子ども向けサッカースクール",
    areas: [],
    schools: [LIBERTA, COPA, localSoccer("FC高松", "高松"), localSoccer("香川ジュニアFC", "香川"), localSoccer("さぬきサッカースクール", "香川")],
    faqs: STD_FAQS("香川県"),
    blogs: STD_BLOGS,
    otherPrefs: [
      { slug: "tokushima", name: "徳島県" }, { slug: "ehime", name: "愛媛県" },
      { slug: "kochi", name: "高知県" }, { slug: "okayama", name: "岡山県" },
    ],
  },
  saga: {
    name: "佐賀県",
    heroText: "佐賀県の子ども向けサッカースクール",
    areas: [],
    schools: [LIBERTA, COPA, localSoccer("FC佐賀", "佐賀"), localSoccer("佐賀ジュニアFC", "佐賀"), localSoccer("有明サッカースクール", "佐賀")],
    faqs: STD_FAQS("佐賀県"),
    blogs: STD_BLOGS,
    otherPrefs: [
      { slug: "fukuoka", name: "福岡県" }, { slug: "nagasaki", name: "長崎県" },
      { slug: "kumamoto", name: "熊本県" }, { slug: "oita", name: "大分県" },
    ],
  },
  oita: {
    name: "大分県",
    heroText: "大分県の子ども向けサッカースクール",
    areas: [],
    schools: [LIBERTA, COPA, localSoccer("FC大分", "大分"), localSoccer("大分ジュニアFC", "大分"), localSoccer("豊後サッカースクール", "大分")],
    faqs: STD_FAQS("大分県"),
    blogs: STD_BLOGS,
    otherPrefs: [
      { slug: "fukuoka", name: "福岡県" }, { slug: "kumamoto", name: "熊本県" },
      { slug: "miyazaki", name: "宮崎県" }, { slug: "ehime", name: "愛媛県" },
    ],
  },
  miyazaki: {
    name: "宮崎県",
    heroText: "宮崎県の子ども向けサッカースクール",
    areas: [],
    schools: [LIBERTA, COPA, localSoccer("FC宮崎", "宮崎"), localSoccer("宮崎ジュニアFC", "宮崎"), localSoccer("日向サッカースクール", "宮崎")],
    faqs: STD_FAQS("宮崎県"),
    blogs: STD_BLOGS,
    otherPrefs: [
      { slug: "fukuoka", name: "福岡県" }, { slug: "oita", name: "大分県" },
      { slug: "kumamoto", name: "熊本県" }, { slug: "kagoshima", name: "鹿児島県" },
    ],
  },
  okinawa: {
    name: "沖縄県",
    heroText: "沖縄県の子ども向けサッカースクール",
    areas: [],
    schools: [LIBERTA, COPA, localSoccer("FC那覇", "那覇"), localSoccer("沖縄ジュニアFC", "沖縄"), localSoccer("琉球サッカースクール", "沖縄")],
    faqs: STD_FAQS("沖縄県"),
    blogs: STD_BLOGS,
    otherPrefs: [
      { slug: "kagoshima", name: "鹿児島県" }, { slug: "fukuoka", name: "福岡県" },
      { slug: "miyazaki", name: "宮崎県" }, { slug: "kumamoto", name: "熊本県" },
    ],
  },
  kumamoto: {
    name: "熊本県",
    heroText: "熊本県の子ども向けサッカースクール",
    areas: [],
    schools: [LIBERTA, COPA, localSoccer("FC熊本", "熊本"), localSoccer("熊本ジュニアFC", "熊本"), localSoccer("火の国サッカースクール", "熊本")],
    faqs: STD_FAQS("熊本県"),
    blogs: STD_BLOGS,
    otherPrefs: [
      { slug: "fukuoka", name: "福岡県" }, { slug: "saga", name: "佐賀県" },
      { slug: "nagasaki", name: "長崎県" }, { slug: "oita", name: "大分県" },
    ],
  },
  kagoshima: {
    name: "鹿児島県",
    heroText: "鹿児島県の子ども向けサッカースクール",
    areas: [],
    schools: [LIBERTA, COPA, localSoccer("FC鹿児島", "鹿児島"), localSoccer("鹿児島ジュニアFC", "鹿児島"), localSoccer("薩摩サッカースクール", "鹿児島")],
    faqs: STD_FAQS("鹿児島県"),
    blogs: STD_BLOGS,
    otherPrefs: [
      { slug: "fukuoka", name: "福岡県" }, { slug: "kumamoto", name: "熊本県" },
      { slug: "miyazaki", name: "宮崎県" }, { slug: "okinawa", name: "沖縄県" },
    ],
  },
  nagasaki: {
    name: "長崎県",
    heroText: "長崎県の子ども向けサッカースクール",
    areas: [],
    schools: [LIBERTA, COPA, localSoccer("FC長崎", "長崎"), localSoccer("長崎ジュニアFC", "長崎"), localSoccer("西海サッカースクール", "長崎")],
    faqs: STD_FAQS("長崎県"),
    blogs: STD_BLOGS,
    otherPrefs: [
      { slug: "fukuoka", name: "福岡県" }, { slug: "saga", name: "佐賀県" },
      { slug: "kumamoto", name: "熊本県" }, { slug: "oita", name: "大分県" },
    ],
  },
  ehime: {
    name: "愛媛県",
    heroText: "愛媛県の子ども向けサッカースクール",
    areas: [],
    schools: [LIBERTA, COPA, localSoccer("FC松山", "松山"), localSoccer("愛媛ジュニアFC", "愛媛"), localSoccer("みかんサッカースクール", "愛媛")],
    faqs: STD_FAQS("愛媛県"),
    blogs: STD_BLOGS,
    otherPrefs: [
      { slug: "kagawa", name: "香川県" }, { slug: "tokushima", name: "徳島県" },
      { slug: "kochi", name: "高知県" }, { slug: "hiroshima", name: "広島県" },
    ],
  },
  yamaguchi: {
    name: "山口県",
    heroText: "山口県の子ども向けサッカースクール",
    areas: [],
    schools: [LIBERTA, COPA, localSoccer("FC山口", "山口"), localSoccer("山口ジュニアFC", "山口"), localSoccer("西の京サッカースクール", "山口")],
    faqs: STD_FAQS("山口県"),
    blogs: STD_BLOGS,
    otherPrefs: [
      { slug: "hiroshima", name: "広島県" }, { slug: "shimane", name: "島根県" },
      { slug: "fukuoka", name: "福岡県" }, { slug: "tottori", name: "鳥取県" },
    ],
  },
  fukushima: {
    name: "福島県",
    heroText: "福島県の子ども向けサッカースクール",
    areas: [],
    schools: [LIBERTA, COPA, localSoccer("FC郡山", "郡山"), localSoccer("福島ジュニアFC", "福島"), localSoccer("会津サッカースクール", "福島")],
    faqs: STD_FAQS("福島県"),
    blogs: STD_BLOGS,
    otherPrefs: [
      { slug: "miyagi", name: "宮城県" }, { slug: "yamagata", name: "山形県" },
      { slug: "ibaraki", name: "茨城県" }, { slug: "niigata", name: "新潟県" },
    ],
  },
  akita: {
    name: "秋田県",
    heroText: "秋田県の子ども向けサッカースクール",
    areas: [],
    schools: [LIBERTA, COPA, localSoccer("FC秋田", "秋田"), localSoccer("秋田ジュニアFC", "秋田"), localSoccer("なまはげサッカースクール", "秋田")],
    faqs: STD_FAQS("秋田県"),
    blogs: STD_BLOGS,
    otherPrefs: [
      { slug: "miyagi", name: "宮城県" }, { slug: "iwate", name: "岩手県" },
      { slug: "yamagata", name: "山形県" }, { slug: "aomori", name: "青森県" },
    ],
  },
  yamagata: {
    name: "山形県",
    heroText: "山形県の子ども向けサッカースクール",
    areas: [],
    schools: [LIBERTA, COPA, localSoccer("FC山形", "山形"), localSoccer("山形ジュニアFC", "山形"), localSoccer("最上川サッカースクール", "山形")],
    faqs: STD_FAQS("山形県"),
    blogs: STD_BLOGS,
    otherPrefs: [
      { slug: "miyagi", name: "宮城県" }, { slug: "akita", name: "秋田県" },
      { slug: "fukushima", name: "福島県" }, { slug: "niigata", name: "新潟県" },
    ],
  },
  iwate: {
    name: "岩手県",
    heroText: "岩手県の子ども向けサッカースクール",
    areas: [],
    schools: [LIBERTA, COPA, localSoccer("FC盛岡", "盛岡"), localSoccer("岩手ジュニアFC", "岩手"), localSoccer("南部サッカースクール", "岩手")],
    faqs: STD_FAQS("岩手県"),
    blogs: STD_BLOGS,
    otherPrefs: [
      { slug: "miyagi", name: "宮城県" }, { slug: "akita", name: "秋田県" },
      { slug: "aomori", name: "青森県" }, { slug: "fukushima", name: "福島県" },
    ],
  },
  aomori: {
    name: "青森県",
    heroText: "青森県の子ども向けサッカースクール",
    areas: [],
    schools: [LIBERTA, COPA, localSoccer("FC青森", "青森"), localSoccer("青森ジュニアFC", "青森"), localSoccer("津軽サッカースクール", "青森")],
    faqs: STD_FAQS("青森県"),
    blogs: STD_BLOGS,
    otherPrefs: [
      { slug: "iwate", name: "岩手県" }, { slug: "akita", name: "秋田県" },
      { slug: "miyagi", name: "宮城県" }, { slug: "hokkaido", name: "北海道" },
    ],
  },
};

// ────────────────────────────────────────────
// SOCCER_AREAS: エリア別データ
// ────────────────────────────────────────────

function areaSchools(areaName, prefName, s1, s2, s3, s4) {
  return [
    { ...s1, desc: s1.desc },
    { ...s2, desc: s2.desc },
    { ...s3, desc: s3.desc },
    { ...(s4 || LIBERTA), desc: (s4 || LIBERTA).desc },
    localSoccer(`FC${areaName}`, areaName),
  ];
}

export const SOCCER_AREAS = {
  // ── 大阪府 ──
  "osaka/osaka-city": { name: "大阪市", prefName: "大阪府", prefSlug: "osaka", schools: areaSchools("大阪市", "大阪府", GAMBA, CEREZO, LIBERTA, COPA) },
  "osaka/minoh": { name: "箕面市", prefName: "大阪府", prefSlug: "osaka", schools: areaSchools("箕面市", "大阪府", GAMBA, LIBERTA, COPA, localSoccer("FCみのお", "箕面")) },
  "osaka/moriguchi": { name: "守口市", prefName: "大阪府", prefSlug: "osaka", schools: areaSchools("守口市", "大阪府", CEREZO, LIBERTA, COPA, localSoccer("FC守口", "守口")) },
  "osaka/sakai": { name: "堺市", prefName: "大阪府", prefSlug: "osaka", schools: areaSchools("堺市", "大阪府", GAMBA, CEREZO, LIBERTA, COPA) },
  "osaka/suita": { name: "吹田市", prefName: "大阪府", prefSlug: "osaka", schools: areaSchools("吹田市", "大阪府", GAMBA, CEREZO, LIBERTA, COPA) },
  "osaka/takatsuki": { name: "高槻市", prefName: "大阪府", prefSlug: "osaka", schools: areaSchools("高槻市", "大阪府", GAMBA, LIBERTA, COPA, localSoccer("FC高槻", "高槻")) },
  "osaka/toyonaka": { name: "豊中市", prefName: "大阪府", prefSlug: "osaka", schools: areaSchools("豊中市", "大阪府", GAMBA, CEREZO, LIBERTA, COPA) },
  "osaka/ibaraki": { name: "茨木市", prefName: "大阪府", prefSlug: "osaka", schools: areaSchools("茨木市", "大阪府", GAMBA, LIBERTA, COPA, localSoccer("FC茨木", "茨木")) },
  // ── 愛知県 ──
  "aichi/anjo": { name: "安城市", prefName: "愛知県", prefSlug: "aichi", schools: areaSchools("安城市", "愛知県", GRAMPUS, LIBERTA, COPA, localSoccer("FC安城", "安城")) },
  "aichi/chikusa": { name: "千種区", prefName: "愛知県", prefSlug: "aichi", schools: areaSchools("千種区", "愛知県", GRAMPUS, LIBERTA, COPA, localSoccer("FC千種", "千種")) },
  "aichi/meito": { name: "名東区", prefName: "愛知県", prefSlug: "aichi", schools: areaSchools("名東区", "愛知県", GRAMPUS, LIBERTA, COPA, localSoccer("FC名東", "名東")) },
  "aichi/midori": { name: "緑区", prefName: "愛知県", prefSlug: "aichi", schools: areaSchools("緑区", "愛知県", GRAMPUS, LIBERTA, COPA, localSoccer("FC緑", "緑区")) },
  "aichi/moriyama": { name: "守山区", prefName: "愛知県", prefSlug: "aichi", schools: areaSchools("守山区", "愛知県", GRAMPUS, LIBERTA, COPA, localSoccer("FC守山", "守山")) },
  "aichi/nisshin": { name: "日進市", prefName: "愛知県", prefSlug: "aichi", schools: areaSchools("日進市", "愛知県", GRAMPUS, LIBERTA, COPA, localSoccer("FC日進", "日進")) },
  "aichi/owariasahi": { name: "尾張旭市", prefName: "愛知県", prefSlug: "aichi", schools: areaSchools("尾張旭市", "愛知県", LIBERTA, COPA, localSoccer("FC尾張旭", "尾張旭"), localSoccer("尾張サッカースクール", "尾張旭")) },
  "aichi/tenpaku": { name: "天白区", prefName: "愛知県", prefSlug: "aichi", schools: areaSchools("天白区", "愛知県", GRAMPUS, LIBERTA, COPA, localSoccer("FC天白", "天白")) },
  "aichi/toyota": { name: "豊田市", prefName: "愛知県", prefSlug: "aichi", schools: areaSchools("豊田市", "愛知県", GRAMPUS, LIBERTA, COPA, localSoccer("FC豊田", "豊田")) },
  // ── 千葉県 ──
  "chiba/chiba-city": { name: "千葉市", prefName: "千葉県", prefSlug: "chiba", schools: areaSchools("千葉市", "千葉県", REYSOL, JEFCHIBA, LIBERTA, COPA) },
  "chiba/kashiwa": { name: "柏市", prefName: "千葉県", prefSlug: "chiba", schools: areaSchools("柏市", "千葉県", REYSOL, LIBERTA, COPA, localSoccer("FC柏", "柏")) },
  "chiba/matsudo": { name: "松戸市", prefName: "千葉県", prefSlug: "chiba", schools: areaSchools("松戸市", "千葉県", JEFCHIBA, LIBERTA, COPA, localSoccer("FC松戸", "松戸")) },
  // ── 岐阜県 ──
  "gifu/gifu-city": { name: "岐阜市", prefName: "岐阜県", prefSlug: "gifu", schools: areaSchools("岐阜市", "岐阜県", LIBERTA, COPA, localSoccer("FCぎふ", "岐阜"), localSoccer("岐阜ジュニアFC", "岐阜")) },
  "gifu/kani": { name: "可児市", prefName: "岐阜県", prefSlug: "gifu", schools: areaSchools("可児市", "岐阜県", LIBERTA, COPA, localSoccer("FC可児", "可児"), localSoccer("東濃サッカースクール", "多治見")) },
  "gifu/minokamo": { name: "美濃加茂市", prefName: "岐阜県", prefSlug: "gifu", schools: areaSchools("美濃加茂市", "岐阜県", LIBERTA, COPA, localSoccer("FC美濃加茂", "美濃加茂"), localSoccer("岐阜ジュニアFC", "岐阜")) },
  "gifu/tajimi": { name: "多治見市", prefName: "岐阜県", prefSlug: "gifu", schools: areaSchools("多治見市", "岐阜県", LIBERTA, COPA, localSoccer("FC多治見", "多治見"), localSoccer("東濃サッカースクール", "多治見")) },
  // ── 兵庫県 ──
  "hyogo/nishinomiya": { name: "西宮市", prefName: "兵庫県", prefSlug: "hyogo", schools: areaSchools("西宮市", "兵庫県", VISSEL, LIBERTA, COPA, localSoccer("FC西宮", "西宮")) },
  // ── 茨城県 ──
  "ibaraki/hitachi": { name: "日立市", prefName: "茨城県", prefSlug: "ibaraki", schools: areaSchools("日立市", "茨城県", HOLLYHOCK, LIBERTA, COPA, localSoccer("FC日立", "日立")) },
  "ibaraki/hitachinaka": { name: "ひたちなか市", prefName: "茨城県", prefSlug: "ibaraki", schools: areaSchools("ひたちなか市", "茨城県", HOLLYHOCK, LIBERTA, COPA, localSoccer("FCひたちなか", "ひたちなか")) },
  "ibaraki/mito": { name: "水戸市", prefName: "茨城県", prefSlug: "ibaraki", schools: areaSchools("水戸市", "茨城県", ANTLERS, HOLLYHOCK, LIBERTA, COPA) },
  "ibaraki/tsuchiura": { name: "土浦市", prefName: "茨城県", prefSlug: "ibaraki", schools: areaSchools("土浦市", "茨城県", LIBERTA, COPA, localSoccer("FC土浦", "土浦"), localSoccer("常磐サッカースクール", "茨城")) },
  "ibaraki/tsukuba": { name: "つくば市", prefName: "茨城県", prefSlug: "ibaraki", schools: areaSchools("つくば市", "茨城県", ANTLERS, LIBERTA, COPA, localSoccer("FCつくば", "つくば")) },
  // ── 石川県 ──
  "ishikawa/kanazawa": { name: "金沢市", prefName: "石川県", prefSlug: "ishikawa", schools: areaSchools("金沢市", "石川県", LIBERTA, COPA, localSoccer("FCかなざわ", "金沢"), localSoccer("石川ジュニアFC", "石川")) },
  "ishikawa/nonoichi": { name: "野々市市", prefName: "石川県", prefSlug: "ishikawa", schools: areaSchools("野々市市", "石川県", LIBERTA, COPA, localSoccer("FC野々市", "野々市"), localSoccer("石川ジュニアFC", "石川")) },
  "ishikawa/uchinada": { name: "内灘町", prefName: "石川県", prefSlug: "ishikawa", schools: areaSchools("内灘町", "石川県", LIBERTA, COPA, localSoccer("FC内灘", "内灘"), localSoccer("北陸サッカースクール", "石川")) },
  // ── 神奈川県 ──
  "kanagawa/aoba": { name: "青葉区", prefName: "神奈川県", prefSlug: "kanagawa", schools: areaSchools("青葉区", "神奈川県", FRONTALE, MARINOS, LIBERTA, COPA) },
  "kanagawa/atsugi": { name: "厚木市", prefName: "神奈川県", prefSlug: "kanagawa", schools: areaSchools("厚木市", "神奈川県", BELLMARE, LIBERTA, COPA, localSoccer("FC厚木", "厚木")) },
  "kanagawa/ebina": { name: "海老名市", prefName: "神奈川県", prefSlug: "kanagawa", schools: areaSchools("海老名市", "神奈川県", BELLMARE, LIBERTA, COPA, localSoccer("FC海老名", "海老名")) },
  "kanagawa/fujisawa": { name: "藤沢市", prefName: "神奈川県", prefSlug: "kanagawa", schools: areaSchools("藤沢市", "神奈川県", BELLMARE, MARINOS, LIBERTA, COPA) },
  "kanagawa/kohoku": { name: "港北区", prefName: "神奈川県", prefSlug: "kanagawa", schools: areaSchools("港北区", "神奈川県", FRONTALE, MARINOS, LIBERTA, COPA) },
  "kanagawa/midori": { name: "緑区", prefName: "神奈川県", prefSlug: "kanagawa", schools: areaSchools("緑区", "神奈川県", FRONTALE, LIBERTA, COPA, localSoccer("FC緑区", "緑区")) },
  "kanagawa/nakahara": { name: "中原区", prefName: "神奈川県", prefSlug: "kanagawa", schools: areaSchools("中原区", "神奈川県", FRONTALE, LIBERTA, COPA, localSoccer("FC中原", "中原")) },
  "kanagawa/nakahara-shinjou": { name: "中原区（新城）", prefName: "神奈川県", prefSlug: "kanagawa", schools: areaSchools("新城", "神奈川県", FRONTALE, LIBERTA, COPA, localSoccer("FC新城", "新城")) },
  "kanagawa/sagamihara": { name: "相模原市", prefName: "神奈川県", prefSlug: "kanagawa", schools: areaSchools("相模原市", "神奈川県", BELLMARE, LIBERTA, COPA, localSoccer("FC相模原", "相模原")) },
  "kanagawa/takatsu": { name: "高津区", prefName: "神奈川県", prefSlug: "kanagawa", schools: areaSchools("高津区", "神奈川県", FRONTALE, LIBERTA, COPA, localSoccer("FC高津", "高津")) },
  "kanagawa/tsuzuki": { name: "都筑区", prefName: "神奈川県", prefSlug: "kanagawa", schools: areaSchools("都筑区", "神奈川県", MARINOS, LIBERTA, COPA, localSoccer("FC都筑", "都筑")) },
  "kanagawa/yamato": { name: "大和市", prefName: "神奈川県", prefSlug: "kanagawa", schools: areaSchools("大和市", "神奈川県", BELLMARE, LIBERTA, COPA, localSoccer("FC大和", "大和")) },
  "kanagawa/yokosuka": { name: "横須賀市", prefName: "神奈川県", prefSlug: "kanagawa", schools: areaSchools("横須賀市", "神奈川県", MARINOS, LIBERTA, COPA, localSoccer("FC横須賀", "横須賀")) },
  "kanagawa/zushi": { name: "逗子市", prefName: "神奈川県", prefSlug: "kanagawa", schools: areaSchools("逗子市", "神奈川県", LIBERTA, COPA, localSoccer("FC逗子", "逗子"), localSoccer("湘南ジュニアFC", "逗子")) },
  // ── 京都府 ──
  "kyoto/kyoto-city": { name: "京都市", prefName: "京都府", prefSlug: "kyoto", schools: areaSchools("京都市", "京都府", SANGA, LIBERTA, COPA, localSoccer("FCきょうと", "京都")) },
  // ── 長野県 ──
  "nagano/nagano-city": { name: "長野市", prefName: "長野県", prefSlug: "nagano", schools: areaSchools("長野市", "長野県", LIBERTA, COPA, localSoccer("FCながの", "長野"), localSoccer("信州サッカースクール", "長野")) },
  // ── 大阪府（続き） ──
  // ── 埼玉県 ──
  "saitama/kawaguchi": { name: "川口市", prefName: "埼玉県", prefSlug: "saitama", schools: areaSchools("川口市", "埼玉県", REDS, ARDIJA, LIBERTA, COPA) },
  "saitama/koshigaya": { name: "越谷市", prefName: "埼玉県", prefSlug: "saitama", schools: areaSchools("越谷市", "埼玉県", ARDIJA, LIBERTA, COPA, localSoccer("FC越谷", "越谷")) },
  "saitama/minami": { name: "南区", prefName: "埼玉県", prefSlug: "saitama", schools: areaSchools("南区", "埼玉県", REDS, LIBERTA, COPA, localSoccer("FC南区", "南区")) },
  "saitama/urawa": { name: "浦和区", prefName: "埼玉県", prefSlug: "saitama", schools: areaSchools("浦和区", "埼玉県", REDS, ARDIJA, LIBERTA, COPA) },
  // ── 滋賀県 ──
  "shiga/kusatsu": { name: "草津市", prefName: "滋賀県", prefSlug: "shiga", schools: areaSchools("草津市", "滋賀県", LIBERTA, COPA, localSoccer("FC草津", "草津"), localSoccer("びわこサッカースクール", "滋賀")) },
  "shiga/otsu": { name: "大津市", prefName: "滋賀県", prefSlug: "shiga", schools: areaSchools("大津市", "滋賀県", LIBERTA, COPA, localSoccer("FC大津", "大津"), localSoccer("滋賀ジュニアFC", "滋賀")) },
  // ── 東京都 ──
  "tokyo/chofu": { name: "調布市", prefName: "東京都", prefSlug: "tokyo", schools: areaSchools("調布市", "東京都", FC_TOKYO, VERDY, LIBERTA, COPA) },
  "tokyo/edogawa": { name: "江戸川区", prefName: "東京都", prefSlug: "tokyo", schools: areaSchools("江戸川区", "東京都", FC_TOKYO, LIBERTA, COPA, localSoccer("FC江戸川", "江戸川")) },
  "tokyo/kita": { name: "北区", prefName: "東京都", prefSlug: "tokyo", schools: areaSchools("北区", "東京都", LIBERTA, COPA, localSoccer("FC北区", "北区"), localSoccer("東京ジュニアFC", "東京")) },
  "tokyo/machida": { name: "町田市", prefName: "東京都", prefSlug: "tokyo", schools: areaSchools("町田市", "東京都", VERDY, LIBERTA, COPA, localSoccer("FC町田", "町田")) },
  "tokyo/meguro": { name: "目黒区", prefName: "東京都", prefSlug: "tokyo", schools: areaSchools("目黒区", "東京都", FC_TOKYO, LIBERTA, COPA, localSoccer("FC目黒", "目黒")) },
  "tokyo/minato": { name: "港区", prefName: "東京都", prefSlug: "tokyo", schools: areaSchools("港区", "東京都", FC_TOKYO, LIBERTA, COPA, localSoccer("FC港区", "港区")) },
  "tokyo/nerima": { name: "練馬区", prefName: "東京都", prefSlug: "tokyo", schools: areaSchools("練馬区", "東京都", VERDY, LIBERTA, COPA, localSoccer("FC練馬", "練馬")) },
  "tokyo/setagaya": { name: "世田谷区", prefName: "東京都", prefSlug: "tokyo", schools: areaSchools("世田谷区", "東京都", FC_TOKYO, VERDY, LIBERTA, COPA) },
  "tokyo/shibuya": { name: "渋谷区", prefName: "東京都", prefSlug: "tokyo", schools: areaSchools("渋谷区", "東京都", FC_TOKYO, LIBERTA, COPA, localSoccer("FC渋谷", "渋谷")) },
  "tokyo/shinagawa": { name: "品川区", prefName: "東京都", prefSlug: "tokyo", schools: areaSchools("品川区", "東京都", FC_TOKYO, LIBERTA, COPA, localSoccer("FC品川", "品川")) },
  "tokyo/shinjuku": { name: "新宿区", prefName: "東京都", prefSlug: "tokyo", schools: areaSchools("新宿区", "東京都", FC_TOKYO, VERDY, LIBERTA, COPA) },
  "tokyo/suginami": { name: "杉並区", prefName: "東京都", prefSlug: "tokyo", schools: areaSchools("杉並区", "東京都", VERDY, LIBERTA, COPA, localSoccer("FC杉並", "杉並")) },
  // ── 和歌山県 ──
  "wakayama/wakayama-city": { name: "和歌山市", prefName: "和歌山県", prefSlug: "wakayama", schools: areaSchools("和歌山市", "和歌山県", LIBERTA, COPA, localSoccer("FCわかやま", "和歌山"), localSoccer("紀州サッカースクール", "和歌山")) },
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
