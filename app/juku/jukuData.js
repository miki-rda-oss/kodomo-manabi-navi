// app/juku/jukuData.js

const KUMON = { name:"公文式（くもん）", rating:4.2, fee:7150, age:"2歳〜", desc:"自学自習で考える力を育てる公文式。国語・算数・英語の基礎力を無理なく積み上げる。全国16,000教室以上展開。", color:"#E53935", emoji:"📝" };
const GAKKEN = { name:"学研教室", rating:4.3, fee:8800, age:"3歳〜", desc:"学習習慣を早期から育成。国語・算数の基礎を丁寧に指導。少人数グループ形式で全国展開。", color:"#43A047", emoji:"✏️" };
const TRY = { name:"個別教室のトライ", rating:4.4, fee:11000, age:"小学生〜", desc:"マンツーマン指導で苦手科目を克服。子どものペースに合わせたカリキュラムで確実に伸ばす。", color:"#1B2A4A", emoji:"🎓" };
const SAPIX = { name:"SAPIXキッズ", rating:4.6, fee:16500, age:"小学生〜", desc:"中学受験専門塾。最難関校への合格実績多数。東京・大阪中心展開。", color:"#1565C0", emoji:"🏆" };
const MEIKO = { name:"明光義塾", rating:4.2, fee:9900, age:"小学生〜", desc:"「わかった！」を大切にする対話式学習塾。全国2,000教室以上。", color:"#FF8A00", emoji:"💡" };

function localJuku(name, area, fee=7700, rating=4.1) {
  return { name, rating, fee, age:"小学生〜", desc:`${area}の地域密着型学習塾。少人数制で丁寧な個別指導。`, color:"#1565C0", emoji:"📚" };
}

const STD_FAQS = (prefName) => [
  { q:`${prefName}の学習塾は何歳から通えますか？`, a:"公文式は2歳から。一般的な学習塾は5〜6歳から対応するところが多いです。" },
  { q:`${prefName}の学習塾の月謝相場は？`, a:"週1〜2回で月7,000〜16,000円が目安。個別指導は高め、グループ指導は安い傾向です。" },
  { q:"公文式と学研教室の違いは？", a:"公文式はプリント学習中心の自学自習方式。学研は先生が丁寧に指導する少人数グループ形式。" },
  { q:"中学受験対策はいつから？", a:"小学3〜4年生から始めるのが一般的。SAPIXなどの難関受験塾は早めがおすすめです。" },
];

const STD_BLOGS = [
  { href:"/blog/kumon-vs-gakken-complete-comparison", text:"公文式 vs 学研教室 徹底比較2026" },
  { href:"/blog/kids-activity-ranking-all", text:"子供の習い事人気ランキング" },
  { href:"/blog/kids-activity-cost-annual", text:"子供の習い事 年間費用の相場" },
];

export const JUKU_PREFS = {
  osaka: {
    name: "大阪府",
    heroText: "関西最大都市・大阪の子ども学習塾・学習教室",
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
    schools: [KUMON, GAKKEN, TRY, SAPIX, MEIKO, localJuku("馬渕教室","大阪",16500,4.5)],
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
    heroText: "首都・東京の子ども向け学習塾・学習教室",
    areas: [
      { slug: "chofu", name: "調布市" }, { slug: "edogawa", name: "江戸川区" },
      { slug: "kita", name: "北区" }, { slug: "machida", name: "町田市" },
      { slug: "meguro", name: "目黒区" }, { slug: "minato", name: "港区" },
      { slug: "nerima", name: "練馬区" }, { slug: "setagaya", name: "世田谷区" },
      { slug: "shibuya", name: "渋谷区" }, { slug: "shinagawa", name: "品川区" },
      { slug: "shinjuku", name: "新宿区" }, { slug: "suginami", name: "杉並区" },
    ],
    schools: [KUMON, GAKKEN, TRY, SAPIX, MEIKO, localJuku("早稲田アカデミー","東京",14300,4.5)],
    faqs: STD_FAQS("東京都"),
    blogs: STD_BLOGS,
    otherPrefs: [
      { slug: "kanagawa", name: "神奈川県" }, { slug: "saitama", name: "埼玉県" },
      { slug: "chiba", name: "千葉県" }, { slug: "osaka", name: "大阪府" },
    ],
  },
  kanagawa: {
    name: "神奈川県",
    heroText: "横浜・川崎を擁する神奈川県の子ども学習塾・学習教室",
    areas: [
      { slug: "aoba", name: "青葉区" }, { slug: "atsugi", name: "厚木市" },
      { slug: "ebina", name: "海老名市" }, { slug: "fujisawa", name: "藤沢市" },
      { slug: "kohoku", name: "港北区" }, { slug: "midori", name: "緑区" },
      { slug: "nakahara", name: "中原区" }, { slug: "nakahara-shinjou", name: "中原区（新城）" },
      { slug: "sagamihara", name: "相模原市" }, { slug: "takatsu", name: "高津区" },
      { slug: "tsuzuki", name: "都筑区" }, { slug: "yamato", name: "大和市" },
      { slug: "yokosuka", name: "横須賀市" }, { slug: "zushi", name: "逗子市" },
    ],
    schools: [KUMON, GAKKEN, TRY, MEIKO, localJuku("臨海セミナー","神奈川",9900,4.3)],
    faqs: STD_FAQS("神奈川県"),
    blogs: STD_BLOGS,
    otherPrefs: [
      { slug: "tokyo", name: "東京都" }, { slug: "saitama", name: "埼玉県" },
      { slug: "chiba", name: "千葉県" }, { slug: "shizuoka", name: "静岡県" },
    ],
  },
  aichi: {
    name: "愛知県",
    heroText: "名古屋を中心とした愛知県の子ども学習塾・学習教室",
    areas: [
      { slug: "anjo", name: "安城市" }, { slug: "chikusa", name: "千種区" },
      { slug: "meito", name: "名東区" }, { slug: "midori", name: "緑区" },
      { slug: "moriyama", name: "守山区" }, { slug: "nisshin", name: "日進市" },
      { slug: "owariasahi", name: "尾張旭市" }, { slug: "tenpaku", name: "天白区" },
      { slug: "toyota", name: "豊田市" },
    ],
    schools: [KUMON, GAKKEN, TRY, MEIKO, localJuku("名進研","愛知",13200,4.4)],
    faqs: STD_FAQS("愛知県"),
    blogs: STD_BLOGS,
    otherPrefs: [
      { slug: "osaka", name: "大阪府" }, { slug: "gifu", name: "岐阜県" },
      { slug: "shizuoka", name: "静岡県" }, { slug: "mie", name: "三重県" },
    ],
  },
  gifu: {
    name: "岐阜県",
    heroText: "岐阜県の子ども向け学習塾・学習教室",
    areas: [
      { slug: "gifu-city", name: "岐阜市" }, { slug: "kani", name: "可児市" },
      { slug: "minokamo", name: "美濃加茂市" }, { slug: "tajimi", name: "多治見市" },
    ],
    schools: [KUMON, GAKKEN, TRY, MEIKO, localJuku("岐阜地域学習塾","岐阜")],
    faqs: STD_FAQS("岐阜県"),
    blogs: STD_BLOGS,
    otherPrefs: [
      { slug: "aichi", name: "愛知県" }, { slug: "shizuoka", name: "静岡県" },
      { slug: "nagano", name: "長野県" }, { slug: "mie", name: "三重県" },
    ],
  },
  hyogo: {
    name: "兵庫県",
    heroText: "神戸・西宮を擁する兵庫県の子ども学習塾・学習教室",
    areas: [
      { slug: "nishinomiya", name: "西宮市" },
    ],
    schools: [KUMON, GAKKEN, TRY, MEIKO, localJuku("兵庫地域学習塾","兵庫")],
    faqs: STD_FAQS("兵庫県"),
    blogs: STD_BLOGS,
    otherPrefs: [
      { slug: "osaka", name: "大阪府" }, { slug: "kyoto", name: "京都府" },
      { slug: "nara", name: "奈良県" }, { slug: "wakayama", name: "和歌山県" },
    ],
  },
  ibaraki: {
    name: "茨城県",
    heroText: "茨城県の子ども向け学習塾・学習教室",
    areas: [
      { slug: "hitachi", name: "日立市" }, { slug: "hitachinaka", name: "ひたちなか市" },
      { slug: "mito", name: "水戸市" }, { slug: "tsuchiura", name: "土浦市" },
      { slug: "tsukuba", name: "つくば市" },
    ],
    schools: [KUMON, GAKKEN, TRY, MEIKO, localJuku("茨城地域学習塾","茨城")],
    faqs: STD_FAQS("茨城県"),
    blogs: STD_BLOGS,
    otherPrefs: [
      { slug: "tokyo", name: "東京都" }, { slug: "saitama", name: "埼玉県" },
      { slug: "chiba", name: "千葉県" }, { slug: "tochigi", name: "栃木県" },
    ],
  },
  ishikawa: {
    name: "石川県",
    heroText: "金沢を中心とした石川県の子ども学習塾・学習教室",
    areas: [
      { slug: "kanazawa", name: "金沢市" }, { slug: "nonoichi", name: "野々市市" },
      { slug: "uchinada", name: "内灘町" },
    ],
    schools: [KUMON, GAKKEN, TRY, MEIKO, localJuku("石川地域学習塾","石川")],
    faqs: STD_FAQS("石川県"),
    blogs: STD_BLOGS,
    otherPrefs: [
      { slug: "toyama", name: "富山県" }, { slug: "fukui", name: "福井県" },
      { slug: "niigata", name: "新潟県" }, { slug: "nagano", name: "長野県" },
    ],
  },
  kyoto: {
    name: "京都府",
    heroText: "古都・京都の子ども向け学習塾・学習教室",
    areas: [
      { slug: "kyoto-city", name: "京都市" },
    ],
    schools: [KUMON, GAKKEN, TRY, MEIKO, localJuku("京都地域学習塾","京都")],
    faqs: STD_FAQS("京都府"),
    blogs: STD_BLOGS,
    otherPrefs: [
      { slug: "osaka", name: "大阪府" }, { slug: "hyogo", name: "兵庫県" },
      { slug: "shiga", name: "滋賀県" }, { slug: "nara", name: "奈良県" },
    ],
  },
  nagano: {
    name: "長野県",
    heroText: "長野県の子ども向け学習塾・学習教室",
    areas: [
      { slug: "nagano-city", name: "長野市" },
    ],
    schools: [KUMON, GAKKEN, TRY, MEIKO, localJuku("長野地域学習塾","長野")],
    faqs: STD_FAQS("長野県"),
    blogs: STD_BLOGS,
    otherPrefs: [
      { slug: "tokyo", name: "東京都" }, { slug: "aichi", name: "愛知県" },
      { slug: "gifu", name: "岐阜県" }, { slug: "niigata", name: "新潟県" },
    ],
  },
  shiga: {
    name: "滋賀県",
    heroText: "琵琶湖を擁する滋賀県の子ども学習塾・学習教室",
    areas: [
      { slug: "kusatsu", name: "草津市" }, { slug: "otsu", name: "大津市" },
    ],
    schools: [KUMON, GAKKEN, TRY, MEIKO, localJuku("滋賀地域学習塾","滋賀")],
    faqs: STD_FAQS("滋賀県"),
    blogs: STD_BLOGS,
    otherPrefs: [
      { slug: "osaka", name: "大阪府" }, { slug: "kyoto", name: "京都府" },
      { slug: "hyogo", name: "兵庫県" }, { slug: "mie", name: "三重県" },
    ],
  },
  wakayama: {
    name: "和歌山県",
    heroText: "和歌山県の子ども向け学習塾・学習教室",
    areas: [
      { slug: "wakayama-city", name: "和歌山市" },
    ],
    schools: [KUMON, GAKKEN, TRY, MEIKO, localJuku("和歌山地域学習塾","和歌山")],
    faqs: STD_FAQS("和歌山県"),
    blogs: STD_BLOGS,
    otherPrefs: [
      { slug: "osaka", name: "大阪府" }, { slug: "hyogo", name: "兵庫県" },
      { slug: "nara", name: "奈良県" }, { slug: "mie", name: "三重県" },
    ],
  },
  saitama: {
    name: "埼玉県",
    heroText: "埼玉県の子ども向け学習塾・学習教室",
    areas: [
      { slug: "kawaguchi", name: "川口市" }, { slug: "koshigaya", name: "越谷市" },
      { slug: "minami", name: "南区" }, { slug: "urawa", name: "浦和区" },
    ],
    schools: [KUMON, GAKKEN, TRY, MEIKO, localJuku("埼玉地域学習塾","埼玉")],
    faqs: STD_FAQS("埼玉県"),
    blogs: STD_BLOGS,
    otherPrefs: [
      { slug: "tokyo", name: "東京都" }, { slug: "kanagawa", name: "神奈川県" },
      { slug: "chiba", name: "千葉県" }, { slug: "gunma", name: "群馬県" },
    ],
  },
  chiba: {
    name: "千葉県",
    heroText: "千葉県の子ども向け学習塾・学習教室",
    areas: [
      { slug: "chiba-city", name: "千葉市" }, { slug: "kashiwa", name: "柏市" },
      { slug: "matsudo", name: "松戸市" },
    ],
    schools: [KUMON, GAKKEN, TRY, MEIKO, localJuku("千葉地域学習塾","千葉")],
    faqs: STD_FAQS("千葉県"),
    blogs: STD_BLOGS,
    otherPrefs: [
      { slug: "tokyo", name: "東京都" }, { slug: "saitama", name: "埼玉県" },
      { slug: "kanagawa", name: "神奈川県" }, { slug: "ibaraki", name: "茨城県" },
    ],
  },
  fukuoka: {
    name: "福岡県",
    heroText: "九州最大の都市・福岡の子ども学習塾・学習教室",
    areas: [],
    schools: [KUMON, GAKKEN, TRY, MEIKO, localJuku("福岡地域学習塾","福岡")],
    faqs: STD_FAQS("福岡県"),
    blogs: STD_BLOGS,
    otherPrefs: [
      { slug: "saga", name: "佐賀県" }, { slug: "nagasaki", name: "長崎県" },
      { slug: "kumamoto", name: "熊本県" }, { slug: "oita", name: "大分県" },
    ],
  },
  hokkaido: {
    name: "北海道",
    heroText: "北海道の子ども向け学習塾・学習教室",
    areas: [],
    schools: [KUMON, GAKKEN, TRY, MEIKO, localJuku("北海道地域学習塾","北海道")],
    faqs: STD_FAQS("北海道"),
    blogs: STD_BLOGS,
    otherPrefs: [
      { slug: "aomori", name: "青森県" }, { slug: "iwate", name: "岩手県" },
      { slug: "miyagi", name: "宮城県" }, { slug: "akita", name: "秋田県" },
    ],
  },
  miyagi: {
    name: "宮城県",
    heroText: "仙台を擁する宮城県の子ども学習塾・学習教室",
    areas: [],
    schools: [KUMON, GAKKEN, TRY, MEIKO, localJuku("宮城地域学習塾","宮城")],
    faqs: STD_FAQS("宮城県"),
    blogs: STD_BLOGS,
    otherPrefs: [
      { slug: "fukushima", name: "福島県" }, { slug: "yamagata", name: "山形県" },
      { slug: "iwate", name: "岩手県" }, { slug: "akita", name: "秋田県" },
    ],
  },
  hiroshima: {
    name: "広島県",
    heroText: "広島県の子ども向け学習塾・学習教室",
    areas: [],
    schools: [KUMON, GAKKEN, TRY, MEIKO, localJuku("広島地域学習塾","広島")],
    faqs: STD_FAQS("広島県"),
    blogs: STD_BLOGS,
    otherPrefs: [
      { slug: "okayama", name: "岡山県" }, { slug: "yamaguchi", name: "山口県" },
      { slug: "shimane", name: "島根県" }, { slug: "tottori", name: "鳥取県" },
    ],
  },
  shizuoka: {
    name: "静岡県",
    heroText: "静岡県の子ども向け学習塾・学習教室",
    areas: [],
    schools: [KUMON, GAKKEN, TRY, MEIKO, localJuku("静岡地域学習塾","静岡")],
    faqs: STD_FAQS("静岡県"),
    blogs: STD_BLOGS,
    otherPrefs: [
      { slug: "aichi", name: "愛知県" }, { slug: "kanagawa", name: "神奈川県" },
      { slug: "nagano", name: "長野県" }, { slug: "yamanashi", name: "山梨県" },
    ],
  },
  okayama: {
    name: "岡山県",
    heroText: "岡山県の子ども向け学習塾・学習教室",
    areas: [],
    schools: [KUMON, GAKKEN, TRY, MEIKO, localJuku("岡山地域学習塾","岡山")],
    faqs: STD_FAQS("岡山県"),
    blogs: STD_BLOGS,
    otherPrefs: [
      { slug: "hiroshima", name: "広島県" }, { slug: "tottori", name: "鳥取県" },
      { slug: "hyogo", name: "兵庫県" }, { slug: "kagawa", name: "香川県" },
    ],
  },
  niigata: {
    name: "新潟県",
    heroText: "新潟県の子ども向け学習塾・学習教室",
    areas: [],
    schools: [KUMON, GAKKEN, TRY, MEIKO, localJuku("新潟地域学習塾","新潟")],
    faqs: STD_FAQS("新潟県"),
    blogs: STD_BLOGS,
    otherPrefs: [
      { slug: "nagano", name: "長野県" }, { slug: "fukushima", name: "福島県" },
      { slug: "yamagata", name: "山形県" }, { slug: "toyama", name: "富山県" },
    ],
  },
  tochigi: {
    name: "栃木県",
    heroText: "栃木県の子ども向け学習塾・学習教室",
    areas: [],
    schools: [KUMON, GAKKEN, TRY, MEIKO, localJuku("栃木地域学習塾","栃木")],
    faqs: STD_FAQS("栃木県"),
    blogs: STD_BLOGS,
    otherPrefs: [
      { slug: "tokyo", name: "東京都" }, { slug: "saitama", name: "埼玉県" },
      { slug: "gunma", name: "群馬県" }, { slug: "ibaraki", name: "茨城県" },
    ],
  },
  gunma: {
    name: "群馬県",
    heroText: "群馬県の子ども向け学習塾・学習教室",
    areas: [],
    schools: [KUMON, GAKKEN, TRY, MEIKO, localJuku("群馬地域学習塾","群馬")],
    faqs: STD_FAQS("群馬県"),
    blogs: STD_BLOGS,
    otherPrefs: [
      { slug: "tokyo", name: "東京都" }, { slug: "saitama", name: "埼玉県" },
      { slug: "tochigi", name: "栃木県" }, { slug: "nagano", name: "長野県" },
    ],
  },
  mie: {
    name: "三重県",
    heroText: "三重県の子ども向け学習塾・学習教室",
    areas: [],
    schools: [KUMON, GAKKEN, TRY, MEIKO, localJuku("三重地域学習塾","三重")],
    faqs: STD_FAQS("三重県"),
    blogs: STD_BLOGS,
    otherPrefs: [
      { slug: "aichi", name: "愛知県" }, { slug: "osaka", name: "大阪府" },
      { slug: "kyoto", name: "京都府" }, { slug: "nara", name: "奈良県" },
    ],
  },
  nara: {
    name: "奈良県",
    heroText: "奈良県の子ども向け学習塾・学習教室",
    areas: [],
    schools: [KUMON, GAKKEN, TRY, MEIKO, localJuku("奈良地域学習塾","奈良")],
    faqs: STD_FAQS("奈良県"),
    blogs: STD_BLOGS,
    otherPrefs: [
      { slug: "osaka", name: "大阪府" }, { slug: "kyoto", name: "京都府" },
      { slug: "hyogo", name: "兵庫県" }, { slug: "wakayama", name: "和歌山県" },
    ],
  },
  fukui: {
    name: "福井県",
    heroText: "福井県の子ども向け学習塾・学習教室",
    areas: [],
    schools: [KUMON, GAKKEN, TRY, MEIKO, localJuku("福井地域学習塾","福井")],
    faqs: STD_FAQS("福井県"),
    blogs: STD_BLOGS,
    otherPrefs: [
      { slug: "ishikawa", name: "石川県" }, { slug: "toyama", name: "富山県" },
      { slug: "gifu", name: "岐阜県" }, { slug: "kyoto", name: "京都府" },
    ],
  },
  toyama: {
    name: "富山県",
    heroText: "富山県の子ども向け学習塾・学習教室",
    areas: [],
    schools: [KUMON, GAKKEN, TRY, MEIKO, localJuku("富山地域学習塾","富山")],
    faqs: STD_FAQS("富山県"),
    blogs: STD_BLOGS,
    otherPrefs: [
      { slug: "ishikawa", name: "石川県" }, { slug: "fukui", name: "福井県" },
      { slug: "niigata", name: "新潟県" }, { slug: "nagano", name: "長野県" },
    ],
  },
  yamanashi: {
    name: "山梨県",
    heroText: "山梨県の子ども向け学習塾・学習教室",
    areas: [],
    schools: [KUMON, GAKKEN, TRY, MEIKO, localJuku("山梨地域学習塾","山梨")],
    faqs: STD_FAQS("山梨県"),
    blogs: STD_BLOGS,
    otherPrefs: [
      { slug: "tokyo", name: "東京都" }, { slug: "kanagawa", name: "神奈川県" },
      { slug: "shizuoka", name: "静岡県" }, { slug: "nagano", name: "長野県" },
    ],
  },
  tottori: {
    name: "鳥取県",
    heroText: "鳥取県の子ども向け学習塾・学習教室",
    areas: [],
    schools: [KUMON, GAKKEN, TRY, MEIKO, localJuku("鳥取地域学習塾","鳥取")],
    faqs: STD_FAQS("鳥取県"),
    blogs: STD_BLOGS,
    otherPrefs: [
      { slug: "shimane", name: "島根県" }, { slug: "okayama", name: "岡山県" },
      { slug: "hiroshima", name: "広島県" }, { slug: "hyogo", name: "兵庫県" },
    ],
  },
  shimane: {
    name: "島根県",
    heroText: "島根県の子ども向け学習塾・学習教室",
    areas: [],
    schools: [KUMON, GAKKEN, TRY, MEIKO, localJuku("島根地域学習塾","島根")],
    faqs: STD_FAQS("島根県"),
    blogs: STD_BLOGS,
    otherPrefs: [
      { slug: "tottori", name: "鳥取県" }, { slug: "hiroshima", name: "広島県" },
      { slug: "yamaguchi", name: "山口県" }, { slug: "okayama", name: "岡山県" },
    ],
  },
  kochi: {
    name: "高知県",
    heroText: "高知県の子ども向け学習塾・学習教室",
    areas: [],
    schools: [KUMON, GAKKEN, TRY, MEIKO, localJuku("高知地域学習塾","高知")],
    faqs: STD_FAQS("高知県"),
    blogs: STD_BLOGS,
    otherPrefs: [
      { slug: "tokushima", name: "徳島県" }, { slug: "ehime", name: "愛媛県" },
      { slug: "kagawa", name: "香川県" }, { slug: "hiroshima", name: "広島県" },
    ],
  },
  tokushima: {
    name: "徳島県",
    heroText: "徳島県の子ども向け学習塾・学習教室",
    areas: [],
    schools: [KUMON, GAKKEN, TRY, MEIKO, localJuku("徳島地域学習塾","徳島")],
    faqs: STD_FAQS("徳島県"),
    blogs: STD_BLOGS,
    otherPrefs: [
      { slug: "kagawa", name: "香川県" }, { slug: "ehime", name: "愛媛県" },
      { slug: "kochi", name: "高知県" }, { slug: "hyogo", name: "兵庫県" },
    ],
  },
  kagawa: {
    name: "香川県",
    heroText: "香川県の子ども向け学習塾・学習教室",
    areas: [],
    schools: [KUMON, GAKKEN, TRY, MEIKO, localJuku("香川地域学習塾","香川")],
    faqs: STD_FAQS("香川県"),
    blogs: STD_BLOGS,
    otherPrefs: [
      { slug: "tokushima", name: "徳島県" }, { slug: "ehime", name: "愛媛県" },
      { slug: "kochi", name: "高知県" }, { slug: "okayama", name: "岡山県" },
    ],
  },
  saga: {
    name: "佐賀県",
    heroText: "佐賀県の子ども向け学習塾・学習教室",
    areas: [],
    schools: [KUMON, GAKKEN, TRY, MEIKO, localJuku("佐賀地域学習塾","佐賀")],
    faqs: STD_FAQS("佐賀県"),
    blogs: STD_BLOGS,
    otherPrefs: [
      { slug: "fukuoka", name: "福岡県" }, { slug: "nagasaki", name: "長崎県" },
      { slug: "kumamoto", name: "熊本県" }, { slug: "oita", name: "大分県" },
    ],
  },
  oita: {
    name: "大分県",
    heroText: "大分県の子ども向け学習塾・学習教室",
    areas: [],
    schools: [KUMON, GAKKEN, TRY, MEIKO, localJuku("大分地域学習塾","大分")],
    faqs: STD_FAQS("大分県"),
    blogs: STD_BLOGS,
    otherPrefs: [
      { slug: "fukuoka", name: "福岡県" }, { slug: "kumamoto", name: "熊本県" },
      { slug: "miyazaki", name: "宮崎県" }, { slug: "ehime", name: "愛媛県" },
    ],
  },
  miyazaki: {
    name: "宮崎県",
    heroText: "宮崎県の子ども向け学習塾・学習教室",
    areas: [],
    schools: [KUMON, GAKKEN, TRY, MEIKO, localJuku("宮崎地域学習塾","宮崎")],
    faqs: STD_FAQS("宮崎県"),
    blogs: STD_BLOGS,
    otherPrefs: [
      { slug: "fukuoka", name: "福岡県" }, { slug: "oita", name: "大分県" },
      { slug: "kumamoto", name: "熊本県" }, { slug: "kagoshima", name: "鹿児島県" },
    ],
  },
  okinawa: {
    name: "沖縄県",
    heroText: "沖縄県の子ども向け学習塾・学習教室",
    areas: [],
    schools: [KUMON, GAKKEN, TRY, MEIKO, localJuku("沖縄地域学習塾","沖縄")],
    faqs: STD_FAQS("沖縄県"),
    blogs: STD_BLOGS,
    otherPrefs: [
      { slug: "kagoshima", name: "鹿児島県" }, { slug: "fukuoka", name: "福岡県" },
      { slug: "miyazaki", name: "宮崎県" }, { slug: "kumamoto", name: "熊本県" },
    ],
  },
  kumamoto: {
    name: "熊本県",
    heroText: "熊本県の子ども向け学習塾・学習教室",
    areas: [],
    schools: [KUMON, GAKKEN, TRY, MEIKO, localJuku("熊本地域学習塾","熊本")],
    faqs: STD_FAQS("熊本県"),
    blogs: STD_BLOGS,
    otherPrefs: [
      { slug: "fukuoka", name: "福岡県" }, { slug: "saga", name: "佐賀県" },
      { slug: "nagasaki", name: "長崎県" }, { slug: "oita", name: "大分県" },
    ],
  },
  kagoshima: {
    name: "鹿児島県",
    heroText: "鹿児島県の子ども向け学習塾・学習教室",
    areas: [],
    schools: [KUMON, GAKKEN, TRY, MEIKO, localJuku("鹿児島地域学習塾","鹿児島")],
    faqs: STD_FAQS("鹿児島県"),
    blogs: STD_BLOGS,
    otherPrefs: [
      { slug: "fukuoka", name: "福岡県" }, { slug: "kumamoto", name: "熊本県" },
      { slug: "miyazaki", name: "宮崎県" }, { slug: "okinawa", name: "沖縄県" },
    ],
  },
  nagasaki: {
    name: "長崎県",
    heroText: "長崎県の子ども向け学習塾・学習教室",
    areas: [],
    schools: [KUMON, GAKKEN, TRY, MEIKO, localJuku("長崎地域学習塾","長崎")],
    faqs: STD_FAQS("長崎県"),
    blogs: STD_BLOGS,
    otherPrefs: [
      { slug: "fukuoka", name: "福岡県" }, { slug: "saga", name: "佐賀県" },
      { slug: "kumamoto", name: "熊本県" }, { slug: "oita", name: "大分県" },
    ],
  },
  ehime: {
    name: "愛媛県",
    heroText: "愛媛県の子ども向け学習塾・学習教室",
    areas: [],
    schools: [KUMON, GAKKEN, TRY, MEIKO, localJuku("愛媛地域学習塾","愛媛")],
    faqs: STD_FAQS("愛媛県"),
    blogs: STD_BLOGS,
    otherPrefs: [
      { slug: "kagawa", name: "香川県" }, { slug: "tokushima", name: "徳島県" },
      { slug: "kochi", name: "高知県" }, { slug: "hiroshima", name: "広島県" },
    ],
  },
  yamaguchi: {
    name: "山口県",
    heroText: "山口県の子ども向け学習塾・学習教室",
    areas: [],
    schools: [KUMON, GAKKEN, TRY, MEIKO, localJuku("山口地域学習塾","山口")],
    faqs: STD_FAQS("山口県"),
    blogs: STD_BLOGS,
    otherPrefs: [
      { slug: "hiroshima", name: "広島県" }, { slug: "shimane", name: "島根県" },
      { slug: "fukuoka", name: "福岡県" }, { slug: "tottori", name: "鳥取県" },
    ],
  },
  fukushima: {
    name: "福島県",
    heroText: "福島県の子ども向け学習塾・学習教室",
    areas: [],
    schools: [KUMON, GAKKEN, TRY, MEIKO, localJuku("福島地域学習塾","福島")],
    faqs: STD_FAQS("福島県"),
    blogs: STD_BLOGS,
    otherPrefs: [
      { slug: "miyagi", name: "宮城県" }, { slug: "yamagata", name: "山形県" },
      { slug: "ibaraki", name: "茨城県" }, { slug: "niigata", name: "新潟県" },
    ],
  },
  akita: {
    name: "秋田県",
    heroText: "秋田県の子ども向け学習塾・学習教室",
    areas: [],
    schools: [KUMON, GAKKEN, TRY, MEIKO, localJuku("秋田地域学習塾","秋田")],
    faqs: STD_FAQS("秋田県"),
    blogs: STD_BLOGS,
    otherPrefs: [
      { slug: "miyagi", name: "宮城県" }, { slug: "iwate", name: "岩手県" },
      { slug: "yamagata", name: "山形県" }, { slug: "aomori", name: "青森県" },
    ],
  },
  yamagata: {
    name: "山形県",
    heroText: "山形県の子ども向け学習塾・学習教室",
    areas: [],
    schools: [KUMON, GAKKEN, TRY, MEIKO, localJuku("山形地域学習塾","山形")],
    faqs: STD_FAQS("山形県"),
    blogs: STD_BLOGS,
    otherPrefs: [
      { slug: "miyagi", name: "宮城県" }, { slug: "akita", name: "秋田県" },
      { slug: "fukushima", name: "福島県" }, { slug: "niigata", name: "新潟県" },
    ],
  },
  iwate: {
    name: "岩手県",
    heroText: "岩手県の子ども向け学習塾・学習教室",
    areas: [],
    schools: [KUMON, GAKKEN, TRY, MEIKO, localJuku("岩手地域学習塾","岩手")],
    faqs: STD_FAQS("岩手県"),
    blogs: STD_BLOGS,
    otherPrefs: [
      { slug: "miyagi", name: "宮城県" }, { slug: "akita", name: "秋田県" },
      { slug: "aomori", name: "青森県" }, { slug: "fukushima", name: "福島県" },
    ],
  },
  aomori: {
    name: "青森県",
    heroText: "青森県の子ども向け学習塾・学習教室",
    areas: [],
    schools: [KUMON, GAKKEN, TRY, MEIKO, localJuku("青森地域学習塾","青森")],
    faqs: STD_FAQS("青森県"),
    blogs: STD_BLOGS,
    otherPrefs: [
      { slug: "iwate", name: "岩手県" }, { slug: "akita", name: "秋田県" },
      { slug: "miyagi", name: "宮城県" }, { slug: "hokkaido", name: "北海道" },
    ],
  },
};

// ────────────────────────────────────────────
// JUKU_AREAS: エリア別データ
// ────────────────────────────────────────────

function areaJuku(areaName, prefName, s1, s2, s3, s4) {
  return [
    { ...s1, desc: s1.desc },
    { ...s2, desc: s2.desc },
    { ...s3, desc: s3.desc },
    { ...(s4 || KUMON), desc: (s4 || KUMON).desc },
    localJuku(`${areaName}地域学習塾`, areaName),
  ];
}

export const JUKU_AREAS = {
  // ── 大阪府 ──
  "osaka/osaka-city": { name: "大阪市", prefName: "大阪府", prefSlug: "osaka", schools: areaJuku("大阪市", "大阪府", KUMON, GAKKEN, TRY, SAPIX) },
  "osaka/minoh": { name: "箕面市", prefName: "大阪府", prefSlug: "osaka", schools: areaJuku("箕面市", "大阪府", KUMON, GAKKEN, TRY, MEIKO) },
  "osaka/moriguchi": { name: "守口市", prefName: "大阪府", prefSlug: "osaka", schools: areaJuku("守口市", "大阪府", KUMON, GAKKEN, TRY, MEIKO) },
  "osaka/sakai": { name: "堺市", prefName: "大阪府", prefSlug: "osaka", schools: areaJuku("堺市", "大阪府", KUMON, GAKKEN, TRY, MEIKO) },
  "osaka/suita": { name: "吹田市", prefName: "大阪府", prefSlug: "osaka", schools: areaJuku("吹田市", "大阪府", KUMON, GAKKEN, TRY, MEIKO) },
  "osaka/takatsuki": { name: "高槻市", prefName: "大阪府", prefSlug: "osaka", schools: areaJuku("高槻市", "大阪府", KUMON, GAKKEN, TRY, MEIKO) },
  "osaka/toyonaka": { name: "豊中市", prefName: "大阪府", prefSlug: "osaka", schools: areaJuku("豊中市", "大阪府", KUMON, GAKKEN, TRY, MEIKO) },
  "osaka/ibaraki": { name: "茨木市", prefName: "大阪府", prefSlug: "osaka", schools: areaJuku("茨木市", "大阪府", KUMON, GAKKEN, TRY, MEIKO) },
  // ── 愛知県 ──
  "aichi/anjo": { name: "安城市", prefName: "愛知県", prefSlug: "aichi", schools: areaJuku("安城市", "愛知県", KUMON, GAKKEN, TRY, MEIKO) },
  "aichi/chikusa": { name: "千種区", prefName: "愛知県", prefSlug: "aichi", schools: areaJuku("千種区", "愛知県", KUMON, GAKKEN, TRY, MEIKO) },
  "aichi/meito": { name: "名東区", prefName: "愛知県", prefSlug: "aichi", schools: areaJuku("名東区", "愛知県", KUMON, GAKKEN, TRY, MEIKO) },
  "aichi/midori": { name: "緑区", prefName: "愛知県", prefSlug: "aichi", schools: areaJuku("緑区", "愛知県", KUMON, GAKKEN, TRY, MEIKO) },
  "aichi/moriyama": { name: "守山区", prefName: "愛知県", prefSlug: "aichi", schools: areaJuku("守山区", "愛知県", KUMON, GAKKEN, TRY, MEIKO) },
  "aichi/nisshin": { name: "日進市", prefName: "愛知県", prefSlug: "aichi", schools: areaJuku("日進市", "愛知県", KUMON, GAKKEN, TRY, MEIKO) },
  "aichi/owariasahi": { name: "尾張旭市", prefName: "愛知県", prefSlug: "aichi", schools: areaJuku("尾張旭市", "愛知県", KUMON, GAKKEN, TRY, MEIKO) },
  "aichi/tenpaku": { name: "天白区", prefName: "愛知県", prefSlug: "aichi", schools: areaJuku("天白区", "愛知県", KUMON, GAKKEN, TRY, MEIKO) },
  "aichi/toyota": { name: "豊田市", prefName: "愛知県", prefSlug: "aichi", schools: areaJuku("豊田市", "愛知県", KUMON, GAKKEN, TRY, MEIKO) },
  // ── 千葉県 ──
  "chiba/chiba-city": { name: "千葉市", prefName: "千葉県", prefSlug: "chiba", schools: areaJuku("千葉市", "千葉県", KUMON, GAKKEN, TRY, MEIKO) },
  "chiba/kashiwa": { name: "柏市", prefName: "千葉県", prefSlug: "chiba", schools: areaJuku("柏市", "千葉県", KUMON, GAKKEN, TRY, MEIKO) },
  "chiba/matsudo": { name: "松戸市", prefName: "千葉県", prefSlug: "chiba", schools: areaJuku("松戸市", "千葉県", KUMON, GAKKEN, TRY, MEIKO) },
  // ── 岐阜県 ──
  "gifu/gifu-city": { name: "岐阜市", prefName: "岐阜県", prefSlug: "gifu", schools: areaJuku("岐阜市", "岐阜県", KUMON, GAKKEN, TRY, MEIKO) },
  "gifu/kani": { name: "可児市", prefName: "岐阜県", prefSlug: "gifu", schools: areaJuku("可児市", "岐阜県", KUMON, GAKKEN, TRY, MEIKO) },
  "gifu/minokamo": { name: "美濃加茂市", prefName: "岐阜県", prefSlug: "gifu", schools: areaJuku("美濃加茂市", "岐阜県", KUMON, GAKKEN, TRY, MEIKO) },
  "gifu/tajimi": { name: "多治見市", prefName: "岐阜県", prefSlug: "gifu", schools: areaJuku("多治見市", "岐阜県", KUMON, GAKKEN, TRY, MEIKO) },
  // ── 兵庫県 ──
  "hyogo/nishinomiya": { name: "西宮市", prefName: "兵庫県", prefSlug: "hyogo", schools: areaJuku("西宮市", "兵庫県", KUMON, GAKKEN, TRY, MEIKO) },
  // ── 茨城県 ──
  "ibaraki/hitachi": { name: "日立市", prefName: "茨城県", prefSlug: "ibaraki", schools: areaJuku("日立市", "茨城県", KUMON, GAKKEN, TRY, MEIKO) },
  "ibaraki/hitachinaka": { name: "ひたちなか市", prefName: "茨城県", prefSlug: "ibaraki", schools: areaJuku("ひたちなか市", "茨城県", KUMON, GAKKEN, TRY, MEIKO) },
  "ibaraki/mito": { name: "水戸市", prefName: "茨城県", prefSlug: "ibaraki", schools: areaJuku("水戸市", "茨城県", KUMON, GAKKEN, TRY, MEIKO) },
  "ibaraki/tsuchiura": { name: "土浦市", prefName: "茨城県", prefSlug: "ibaraki", schools: areaJuku("土浦市", "茨城県", KUMON, GAKKEN, TRY, MEIKO) },
  "ibaraki/tsukuba": { name: "つくば市", prefName: "茨城県", prefSlug: "ibaraki", schools: areaJuku("つくば市", "茨城県", KUMON, GAKKEN, TRY, MEIKO) },
  // ── 石川県 ──
  "ishikawa/kanazawa": { name: "金沢市", prefName: "石川県", prefSlug: "ishikawa", schools: areaJuku("金沢市", "石川県", KUMON, GAKKEN, TRY, MEIKO) },
  "ishikawa/nonoichi": { name: "野々市市", prefName: "石川県", prefSlug: "ishikawa", schools: areaJuku("野々市市", "石川県", KUMON, GAKKEN, TRY, MEIKO) },
  "ishikawa/uchinada": { name: "内灘町", prefName: "石川県", prefSlug: "ishikawa", schools: areaJuku("内灘町", "石川県", KUMON, GAKKEN, TRY, MEIKO) },
  // ── 神奈川県 ──
  "kanagawa/aoba": { name: "青葉区", prefName: "神奈川県", prefSlug: "kanagawa", schools: areaJuku("青葉区", "神奈川県", KUMON, GAKKEN, TRY, MEIKO) },
  "kanagawa/atsugi": { name: "厚木市", prefName: "神奈川県", prefSlug: "kanagawa", schools: areaJuku("厚木市", "神奈川県", KUMON, GAKKEN, TRY, MEIKO) },
  "kanagawa/ebina": { name: "海老名市", prefName: "神奈川県", prefSlug: "kanagawa", schools: areaJuku("海老名市", "神奈川県", KUMON, GAKKEN, TRY, MEIKO) },
  "kanagawa/fujisawa": { name: "藤沢市", prefName: "神奈川県", prefSlug: "kanagawa", schools: areaJuku("藤沢市", "神奈川県", KUMON, GAKKEN, TRY, MEIKO) },
  "kanagawa/kohoku": { name: "港北区", prefName: "神奈川県", prefSlug: "kanagawa", schools: areaJuku("港北区", "神奈川県", KUMON, GAKKEN, TRY, MEIKO) },
  "kanagawa/midori": { name: "緑区", prefName: "神奈川県", prefSlug: "kanagawa", schools: areaJuku("緑区", "神奈川県", KUMON, GAKKEN, TRY, MEIKO) },
  "kanagawa/nakahara": { name: "中原区", prefName: "神奈川県", prefSlug: "kanagawa", schools: areaJuku("中原区", "神奈川県", KUMON, GAKKEN, TRY, MEIKO) },
  "kanagawa/nakahara-shinjou": { name: "中原区（新城）", prefName: "神奈川県", prefSlug: "kanagawa", schools: areaJuku("新城", "神奈川県", KUMON, GAKKEN, TRY, MEIKO) },
  "kanagawa/sagamihara": { name: "相模原市", prefName: "神奈川県", prefSlug: "kanagawa", schools: areaJuku("相模原市", "神奈川県", KUMON, GAKKEN, TRY, MEIKO) },
  "kanagawa/takatsu": { name: "高津区", prefName: "神奈川県", prefSlug: "kanagawa", schools: areaJuku("高津区", "神奈川県", KUMON, GAKKEN, TRY, MEIKO) },
  "kanagawa/tsuzuki": { name: "都筑区", prefName: "神奈川県", prefSlug: "kanagawa", schools: areaJuku("都筑区", "神奈川県", KUMON, GAKKEN, TRY, MEIKO) },
  "kanagawa/yamato": { name: "大和市", prefName: "神奈川県", prefSlug: "kanagawa", schools: areaJuku("大和市", "神奈川県", KUMON, GAKKEN, TRY, MEIKO) },
  "kanagawa/yokosuka": { name: "横須賀市", prefName: "神奈川県", prefSlug: "kanagawa", schools: areaJuku("横須賀市", "神奈川県", KUMON, GAKKEN, TRY, MEIKO) },
  "kanagawa/zushi": { name: "逗子市", prefName: "神奈川県", prefSlug: "kanagawa", schools: areaJuku("逗子市", "神奈川県", KUMON, GAKKEN, TRY, MEIKO) },
  // ── 京都府 ──
  "kyoto/kyoto-city": { name: "京都市", prefName: "京都府", prefSlug: "kyoto", schools: areaJuku("京都市", "京都府", KUMON, GAKKEN, TRY, MEIKO) },
  // ── 長野県 ──
  "nagano/nagano-city": { name: "長野市", prefName: "長野県", prefSlug: "nagano", schools: areaJuku("長野市", "長野県", KUMON, GAKKEN, TRY, MEIKO) },
  // ── 埼玉県 ──
  "saitama/kawaguchi": { name: "川口市", prefName: "埼玉県", prefSlug: "saitama", schools: areaJuku("川口市", "埼玉県", KUMON, GAKKEN, TRY, MEIKO) },
  "saitama/koshigaya": { name: "越谷市", prefName: "埼玉県", prefSlug: "saitama", schools: areaJuku("越谷市", "埼玉県", KUMON, GAKKEN, TRY, MEIKO) },
  "saitama/minami": { name: "南区", prefName: "埼玉県", prefSlug: "saitama", schools: areaJuku("南区", "埼玉県", KUMON, GAKKEN, TRY, MEIKO) },
  "saitama/urawa": { name: "浦和区", prefName: "埼玉県", prefSlug: "saitama", schools: areaJuku("浦和区", "埼玉県", KUMON, GAKKEN, TRY, MEIKO) },
  // ── 滋賀県 ──
  "shiga/kusatsu": { name: "草津市", prefName: "滋賀県", prefSlug: "shiga", schools: areaJuku("草津市", "滋賀県", KUMON, GAKKEN, TRY, MEIKO) },
  "shiga/otsu": { name: "大津市", prefName: "滋賀県", prefSlug: "shiga", schools: areaJuku("大津市", "滋賀県", KUMON, GAKKEN, TRY, MEIKO) },
  // ── 東京都 ──
  "tokyo/chofu": { name: "調布市", prefName: "東京都", prefSlug: "tokyo", schools: areaJuku("調布市", "東京都", KUMON, GAKKEN, TRY, SAPIX) },
  "tokyo/edogawa": { name: "江戸川区", prefName: "東京都", prefSlug: "tokyo", schools: areaJuku("江戸川区", "東京都", KUMON, GAKKEN, TRY, MEIKO) },
  "tokyo/kita": { name: "北区", prefName: "東京都", prefSlug: "tokyo", schools: areaJuku("北区", "東京都", KUMON, GAKKEN, TRY, MEIKO) },
  "tokyo/machida": { name: "町田市", prefName: "東京都", prefSlug: "tokyo", schools: areaJuku("町田市", "東京都", KUMON, GAKKEN, TRY, MEIKO) },
  "tokyo/meguro": { name: "目黒区", prefName: "東京都", prefSlug: "tokyo", schools: areaJuku("目黒区", "東京都", KUMON, GAKKEN, TRY, SAPIX) },
  "tokyo/minato": { name: "港区", prefName: "東京都", prefSlug: "tokyo", schools: areaJuku("港区", "東京都", KUMON, GAKKEN, TRY, SAPIX) },
  "tokyo/nerima": { name: "練馬区", prefName: "東京都", prefSlug: "tokyo", schools: areaJuku("練馬区", "東京都", KUMON, GAKKEN, TRY, MEIKO) },
  "tokyo/setagaya": { name: "世田谷区", prefName: "東京都", prefSlug: "tokyo", schools: areaJuku("世田谷区", "東京都", KUMON, GAKKEN, TRY, SAPIX) },
  "tokyo/shibuya": { name: "渋谷区", prefName: "東京都", prefSlug: "tokyo", schools: areaJuku("渋谷区", "東京都", KUMON, GAKKEN, TRY, SAPIX) },
  "tokyo/shinagawa": { name: "品川区", prefName: "東京都", prefSlug: "tokyo", schools: areaJuku("品川区", "東京都", KUMON, GAKKEN, TRY, MEIKO) },
  "tokyo/shinjuku": { name: "新宿区", prefName: "東京都", prefSlug: "tokyo", schools: areaJuku("新宿区", "東京都", KUMON, GAKKEN, TRY, SAPIX) },
  "tokyo/suginami": { name: "杉並区", prefName: "東京都", prefSlug: "tokyo", schools: areaJuku("杉並区", "東京都", KUMON, GAKKEN, TRY, MEIKO) },
  // ── 和歌山県 ──
  "wakayama/wakayama-city": { name: "和歌山市", prefName: "和歌山県", prefSlug: "wakayama", schools: areaJuku("和歌山市", "和歌山県", KUMON, GAKKEN, TRY, MEIKO) },
};
