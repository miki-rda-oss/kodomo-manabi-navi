// /app/gymnastics/gymnasticsData.js

const KONAMI = { name: "コナミスポーツ体操教室", rating: 4.3, fee: 7700, age: "2歳〜", desc: "全国展開のスポーツクラブが運営。マット運動・跳び箱・鉄棒など基礎体操を楽しく学ぶ。", color: "#FF6F00", emoji: "🤸" };
const NINJA_NINE = { name: "忍者ナイン", rating: 4.5, fee: 8800, age: "3歳〜12歳", desc: "9つの身体能力を育てる独自プログラム。運動神経を総合的に鍛える体操・運動スクール。", color: "#E65100", emoji: "🤸" };
const CENTRAL = { name: "セントラルスポーツ体操教室", rating: 4.2, fee: 7150, age: "3歳〜", desc: "全国展開。体操の基礎から安全に楽しく学べる環境。", color: "#FF6F00", emoji: "🤸" };

function localSchool(name, area, desc, fee = 5500, rating = 4.2) {
  return { name, rating, fee, age: "3歳〜", desc: desc || `${area}に根ざした体操スクール。少人数制で丁寧な指導を行い、マット運動・鉄棒・跳び箱など基礎体操を楽しく習得できる。`, color: "#FF6F00", emoji: "🤸" };
}

const STD_FAQS = (prefName) => [
  { q: `${prefName}の体操教室は何歳から通えますか？`, a: "2〜3歳から通えます。幼児向けクラスを設けているスクールが多く、早い時期から体幹・柔軟性・バランス感覚を育てられます。" },
  { q: `${prefName}の体操教室の月謝相場は？`, a: "週1回で4,000〜8,000円が一般的です。スポーツクラブ運営のスクールは7,000〜9,000円程度、地域の体操クラブは4,000〜6,000円程度が相場です。" },
  { q: "体操を習う効果は？", a: "体幹・柔軟性・バランス感覚・運動神経が育ちます。姿勢の改善や転倒予防にも効果的で、他のスポーツへの基礎能力向上にもつながります。" },
  { q: "女の子にも体操はおすすめですか？", a: "はい。柔軟性・姿勢が良くなります。また集中力や身体コントロール能力が高まり、ダンスや他のスポーツにも役立つ能力が身につきます。" },
];

const STD_BLOGS = [
  { href: "/blog/kids-activity-ranking-all", text: "子供の習い事人気ランキング" },
  { href: "/blog/kids-activity-cost-annual", text: "子供の習い事年間費用" },
];

export const GYMNASTICS_PREFS = {
  osaka: {
    name: "大阪府",
    heroText: "関西最大都市・大阪の子供体操教室・体操スクール",
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
    schools: [KONAMI, NINJA_NINE, CENTRAL, localSchool("大阪体操クラブ", "大阪"), localSchool("なんば体操スクール", "大阪"), localSchool("北摂ジュニア体操", "大阪")],
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
    heroText: "首都・東京の子供向け体操教室・体操スクール",
    areas: [
      { slug: "chofu", name: "調布市" }, { slug: "edogawa", name: "江戸川区" },
      { slug: "kita", name: "北区" }, { slug: "machida", name: "町田市" },
      { slug: "meguro", name: "目黒区" }, { slug: "minato", name: "港区" },
      { slug: "nerima", name: "練馬区" }, { slug: "setagaya", name: "世田谷区" },
      { slug: "shibuya", name: "渋谷区" }, { slug: "shinagawa", name: "品川区" },
      { slug: "shinjuku", name: "新宿区" }, { slug: "suginami", name: "杉並区" },
    ],
    schools: [KONAMI, NINJA_NINE, CENTRAL, localSchool("東京体操アカデミー", "東京"), localSchool("首都圏ジュニア体操クラブ", "東京"), localSchool("東京スポーツ少年団体操部", "東京")],
    faqs: STD_FAQS("東京都"),
    blogs: STD_BLOGS,
    otherPrefs: [
      { slug: "kanagawa", name: "神奈川県" }, { slug: "saitama", name: "埼玉県" },
      { slug: "chiba", name: "千葉県" }, { slug: "osaka", name: "大阪府" },
    ],
  },
  kanagawa: {
    name: "神奈川県",
    heroText: "横浜・川崎を擁する神奈川県の子供体操教室・体操スクール",
    areas: [
      { slug: "aoba", name: "青葉区" }, { slug: "atsugi", name: "厚木市" },
      { slug: "ebina", name: "海老名市" }, { slug: "fujisawa", name: "藤沢市" },
      { slug: "kohoku", name: "港北区" }, { slug: "midori", name: "緑区" },
      { slug: "nakahara", name: "中原区" }, { slug: "nakahara-shinjou", name: "中原区（新丸子）" },
      { slug: "sagamihara", name: "相模原市" }, { slug: "takatsu", name: "高津区" },
      { slug: "tsuzuki", name: "都筑区" }, { slug: "yamato", name: "大和市" },
      { slug: "yokosuka", name: "横須賀市" }, { slug: "zushi", name: "逗子市" },
    ],
    schools: [KONAMI, NINJA_NINE, CENTRAL, localSchool("神奈川体操アカデミー", "神奈川"), localSchool("横浜ジュニア体操クラブ", "横浜"), localSchool("湘南体操スポーツ少年団", "神奈川")],
    faqs: STD_FAQS("神奈川県"),
    blogs: STD_BLOGS,
    otherPrefs: [
      { slug: "tokyo", name: "東京都" }, { slug: "saitama", name: "埼玉県" },
      { slug: "chiba", name: "千葉県" }, { slug: "shizuoka", name: "静岡県" },
    ],
  },
  aichi: {
    name: "愛知県",
    heroText: "名古屋を中心とした愛知県の子供体操教室・体操スクール",
    areas: [
      { slug: "anjo", name: "安城市" }, { slug: "chikusa", name: "千種区" },
      { slug: "meito", name: "名東区" }, { slug: "midori", name: "緑区" },
      { slug: "moriyama", name: "守山区" }, { slug: "nisshin", name: "日進市" },
      { slug: "owariasahi", name: "尾張旭市" }, { slug: "tenpaku", name: "天白区" },
      { slug: "toyota", name: "豊田市" },
    ],
    schools: [KONAMI, NINJA_NINE, CENTRAL, localSchool("名古屋体操アカデミー", "愛知"), localSchool("愛知ジュニア体操クラブ", "愛知"), localSchool("尾張体操スポーツ少年団", "愛知")],
    faqs: STD_FAQS("愛知県"),
    blogs: STD_BLOGS,
    otherPrefs: [
      { slug: "osaka", name: "大阪府" }, { slug: "gifu", name: "岐阜県" },
      { slug: "shizuoka", name: "静岡県" }, { slug: "mie", name: "三重県" },
    ],
  },
  gifu: {
    name: "岐阜県",
    heroText: "岐阜県の子供向け体操教室・体操スクール",
    areas: [
      { slug: "gifu-city", name: "岐阜市" }, { slug: "kani", name: "可児市" },
      { slug: "minokamo", name: "美濃加茂市" }, { slug: "tajimi", name: "多治見市" },
    ],
    schools: [KONAMI, CENTRAL, localSchool("岐阜体操アカデミー", "岐阜"), localSchool("ぎふジュニア体操クラブ", "岐阜"), localSchool("岐阜スポーツ少年団体操部", "岐阜")],
    faqs: STD_FAQS("岐阜県"),
    blogs: STD_BLOGS,
    otherPrefs: [
      { slug: "aichi", name: "愛知県" }, { slug: "shizuoka", name: "静岡県" },
      { slug: "nagano", name: "長野県" }, { slug: "mie", name: "三重県" },
    ],
  },
  hyogo: {
    name: "兵庫県",
    heroText: "神戸・西宮を擁する兵庫県の子供体操教室・体操スクール",
    areas: [
      { slug: "nishinomiya", name: "西宮市" },
    ],
    schools: [KONAMI, NINJA_NINE, CENTRAL, localSchool("神戸体操アカデミー", "兵庫"), localSchool("兵庫ジュニア体操クラブ", "兵庫"), localSchool("阪神体操スポーツ少年団", "兵庫")],
    faqs: STD_FAQS("兵庫県"),
    blogs: STD_BLOGS,
    otherPrefs: [
      { slug: "osaka", name: "大阪府" }, { slug: "kyoto", name: "京都府" },
      { slug: "nara", name: "奈良県" }, { slug: "wakayama", name: "和歌山県" },
    ],
  },
  ibaraki: {
    name: "茨城県",
    heroText: "茨城県の子供向け体操教室・体操スクール",
    areas: [
      { slug: "hitachi", name: "日立市" }, { slug: "hitachinaka", name: "ひたちなか市" },
      { slug: "mito", name: "水戸市" }, { slug: "tsuchiura", name: "土浦市" },
      { slug: "tsukuba", name: "つくば市" },
    ],
    schools: [KONAMI, CENTRAL, localSchool("茨城体操アカデミー", "茨城"), localSchool("水戸ジュニア体操クラブ", "茨城"), localSchool("茨城スポーツ少年団体操部", "茨城")],
    faqs: STD_FAQS("茨城県"),
    blogs: STD_BLOGS,
    otherPrefs: [
      { slug: "tokyo", name: "東京都" }, { slug: "saitama", name: "埼玉県" },
      { slug: "chiba", name: "千葉県" }, { slug: "tochigi", name: "栃木県" },
    ],
  },
  ishikawa: {
    name: "石川県",
    heroText: "金沢を中心とした石川県の子供体操教室・体操スクール",
    areas: [
      { slug: "kanazawa", name: "金沢市" }, { slug: "nonoichi", name: "野々市市" },
      { slug: "uchinada", name: "内灘町" },
    ],
    schools: [KONAMI, CENTRAL, localSchool("金沢体操アカデミー", "石川"), localSchool("石川ジュニア体操クラブ", "石川"), localSchool("石川スポーツ少年団体操部", "石川")],
    faqs: STD_FAQS("石川県"),
    blogs: STD_BLOGS,
    otherPrefs: [
      { slug: "toyama", name: "富山県" }, { slug: "fukui", name: "福井県" },
      { slug: "niigata", name: "新潟県" }, { slug: "nagano", name: "長野県" },
    ],
  },
  kyoto: {
    name: "京都府",
    heroText: "古都・京都の子供向け体操教室・体操スクール",
    areas: [
      { slug: "kyoto-city", name: "京都市" },
    ],
    schools: [KONAMI, NINJA_NINE, CENTRAL, localSchool("京都体操アカデミー", "京都"), localSchool("京都ジュニア体操クラブ", "京都"), localSchool("京都スポーツ少年団体操部", "京都")],
    faqs: STD_FAQS("京都府"),
    blogs: STD_BLOGS,
    otherPrefs: [
      { slug: "osaka", name: "大阪府" }, { slug: "hyogo", name: "兵庫県" },
      { slug: "shiga", name: "滋賀県" }, { slug: "nara", name: "奈良県" },
    ],
  },
  nagano: {
    name: "長野県",
    heroText: "長野県の子供向け体操教室・体操スクール",
    areas: [
      { slug: "nagano-city", name: "長野市" },
    ],
    schools: [KONAMI, CENTRAL, localSchool("長野体操アカデミー", "長野"), localSchool("長野ジュニア体操クラブ", "長野"), localSchool("長野スポーツ少年団体操部", "長野")],
    faqs: STD_FAQS("長野県"),
    blogs: STD_BLOGS,
    otherPrefs: [
      { slug: "tokyo", name: "東京都" }, { slug: "aichi", name: "愛知県" },
      { slug: "gifu", name: "岐阜県" }, { slug: "niigata", name: "新潟県" },
    ],
  },
  shiga: {
    name: "滋賀県",
    heroText: "琵琶湖を擁する滋賀県の子供体操教室・体操スクール",
    areas: [
      { slug: "kusatsu", name: "草津市" }, { slug: "otsu", name: "大津市" },
    ],
    schools: [KONAMI, CENTRAL, localSchool("滋賀体操アカデミー", "滋賀"), localSchool("しがジュニア体操クラブ", "滋賀"), localSchool("滋賀スポーツ少年団体操部", "滋賀")],
    faqs: STD_FAQS("滋賀県"),
    blogs: STD_BLOGS,
    otherPrefs: [
      { slug: "osaka", name: "大阪府" }, { slug: "kyoto", name: "京都府" },
      { slug: "hyogo", name: "兵庫県" }, { slug: "mie", name: "三重県" },
    ],
  },
  wakayama: {
    name: "和歌山県",
    heroText: "和歌山県の子供向け体操教室・体操スクール",
    areas: [
      { slug: "wakayama-city", name: "和歌山市" },
    ],
    schools: [KONAMI, CENTRAL, localSchool("和歌山体操アカデミー", "和歌山"), localSchool("わかやまジュニア体操クラブ", "和歌山"), localSchool("和歌山スポーツ少年団体操部", "和歌山")],
    faqs: STD_FAQS("和歌山県"),
    blogs: STD_BLOGS,
    otherPrefs: [
      { slug: "osaka", name: "大阪府" }, { slug: "hyogo", name: "兵庫県" },
      { slug: "nara", name: "奈良県" }, { slug: "mie", name: "三重県" },
    ],
  },
  saitama: {
    name: "埼玉県",
    heroText: "埼玉県の子供向け体操教室・体操スクール",
    areas: [
      { slug: "kawaguchi", name: "川口市" }, { slug: "koshigaya", name: "越谷市" },
      { slug: "minami", name: "南区" }, { slug: "urawa", name: "浦和区" },
    ],
    schools: [KONAMI, NINJA_NINE, CENTRAL, localSchool("埼玉体操アカデミー", "埼玉"), localSchool("さいたまジュニア体操クラブ", "埼玉"), localSchool("埼玉スポーツ少年団体操部", "埼玉")],
    faqs: STD_FAQS("埼玉県"),
    blogs: STD_BLOGS,
    otherPrefs: [
      { slug: "tokyo", name: "東京都" }, { slug: "kanagawa", name: "神奈川県" },
      { slug: "chiba", name: "千葉県" }, { slug: "gunma", name: "群馬県" },
    ],
  },
  chiba: {
    name: "千葉県",
    heroText: "千葉県の子供向け体操教室・体操スクール",
    areas: [
      { slug: "chiba-city", name: "千葉市" }, { slug: "kashiwa", name: "柏市" },
      { slug: "matsudo", name: "松戸市" },
    ],
    schools: [KONAMI, NINJA_NINE, CENTRAL, localSchool("千葉体操アカデミー", "千葉"), localSchool("ちばジュニア体操クラブ", "千葉"), localSchool("千葉スポーツ少年団体操部", "千葉")],
    faqs: STD_FAQS("千葉県"),
    blogs: STD_BLOGS,
    otherPrefs: [
      { slug: "tokyo", name: "東京都" }, { slug: "saitama", name: "埼玉県" },
      { slug: "kanagawa", name: "神奈川県" }, { slug: "ibaraki", name: "茨城県" },
    ],
  },
  fukuoka: {
    name: "福岡県",
    heroText: "九州最大の都市・福岡の子供体操教室・体操スクール",
    areas: [],
    schools: [KONAMI, NINJA_NINE, CENTRAL, localSchool("福岡体操アカデミー", "福岡"), localSchool("福岡ジュニア体操クラブ", "福岡"), localSchool("福岡スポーツ少年団体操部", "福岡")],
    faqs: STD_FAQS("福岡県"),
    blogs: STD_BLOGS,
    otherPrefs: [
      { slug: "saga", name: "佐賀県" }, { slug: "nagasaki", name: "長崎県" },
      { slug: "kumamoto", name: "熊本県" }, { slug: "oita", name: "大分県" },
    ],
  },
  hokkaido: {
    name: "北海道",
    heroText: "北海道の子供向け体操教室・体操スクール",
    areas: [],
    schools: [KONAMI, CENTRAL, localSchool("北海道体操アカデミー", "北海道"), localSchool("札幌ジュニア体操クラブ", "北海道"), localSchool("北海道スポーツ少年団体操部", "北海道")],
    faqs: STD_FAQS("北海道"),
    blogs: STD_BLOGS,
    otherPrefs: [
      { slug: "aomori", name: "青森県" }, { slug: "iwate", name: "岩手県" },
      { slug: "miyagi", name: "宮城県" }, { slug: "akita", name: "秋田県" },
    ],
  },
  miyagi: {
    name: "宮城県",
    heroText: "仙台を擁する宮城県の子供体操教室・体操スクール",
    areas: [],
    schools: [KONAMI, CENTRAL, localSchool("宮城体操アカデミー", "宮城"), localSchool("仙台ジュニア体操クラブ", "宮城"), localSchool("宮城スポーツ少年団体操部", "宮城")],
    faqs: STD_FAQS("宮城県"),
    blogs: STD_BLOGS,
    otherPrefs: [
      { slug: "fukushima", name: "福島県" }, { slug: "yamagata", name: "山形県" },
      { slug: "iwate", name: "岩手県" }, { slug: "akita", name: "秋田県" },
    ],
  },
  hiroshima: {
    name: "広島県",
    heroText: "広島県の子供向け体操教室・体操スクール",
    areas: [],
    schools: [KONAMI, CENTRAL, localSchool("広島体操アカデミー", "広島"), localSchool("広島ジュニア体操クラブ", "広島"), localSchool("広島スポーツ少年団体操部", "広島")],
    faqs: STD_FAQS("広島県"),
    blogs: STD_BLOGS,
    otherPrefs: [
      { slug: "okayama", name: "岡山県" }, { slug: "yamaguchi", name: "山口県" },
      { slug: "shimane", name: "島根県" }, { slug: "tottori", name: "鳥取県" },
    ],
  },
  shizuoka: {
    name: "静岡県",
    heroText: "静岡県の子供向け体操教室・体操スクール",
    areas: [],
    schools: [KONAMI, CENTRAL, localSchool("静岡体操アカデミー", "静岡"), localSchool("静岡ジュニア体操クラブ", "静岡"), localSchool("静岡スポーツ少年団体操部", "静岡")],
    faqs: STD_FAQS("静岡県"),
    blogs: STD_BLOGS,
    otherPrefs: [
      { slug: "aichi", name: "愛知県" }, { slug: "kanagawa", name: "神奈川県" },
      { slug: "nagano", name: "長野県" }, { slug: "yamanashi", name: "山梨県" },
    ],
  },
  okayama: {
    name: "岡山県",
    heroText: "岡山県の子供向け体操教室・体操スクール",
    areas: [],
    schools: [KONAMI, CENTRAL, localSchool("岡山体操アカデミー", "岡山"), localSchool("岡山ジュニア体操クラブ", "岡山"), localSchool("岡山スポーツ少年団体操部", "岡山")],
    faqs: STD_FAQS("岡山県"),
    blogs: STD_BLOGS,
    otherPrefs: [
      { slug: "hiroshima", name: "広島県" }, { slug: "tottori", name: "鳥取県" },
      { slug: "hyogo", name: "兵庫県" }, { slug: "kagawa", name: "香川県" },
    ],
  },
  niigata: {
    name: "新潟県",
    heroText: "新潟県の子供向け体操教室・体操スクール",
    areas: [],
    schools: [KONAMI, CENTRAL, localSchool("新潟体操アカデミー", "新潟"), localSchool("新潟ジュニア体操クラブ", "新潟"), localSchool("新潟スポーツ少年団体操部", "新潟")],
    faqs: STD_FAQS("新潟県"),
    blogs: STD_BLOGS,
    otherPrefs: [
      { slug: "nagano", name: "長野県" }, { slug: "fukushima", name: "福島県" },
      { slug: "yamagata", name: "山形県" }, { slug: "toyama", name: "富山県" },
    ],
  },
  tochigi: {
    name: "栃木県",
    heroText: "栃木県の子供向け体操教室・体操スクール",
    areas: [],
    schools: [KONAMI, CENTRAL, localSchool("栃木体操アカデミー", "栃木"), localSchool("宇都宮ジュニア体操クラブ", "栃木"), localSchool("栃木スポーツ少年団体操部", "栃木")],
    faqs: STD_FAQS("栃木県"),
    blogs: STD_BLOGS,
    otherPrefs: [
      { slug: "tokyo", name: "東京都" }, { slug: "saitama", name: "埼玉県" },
      { slug: "gunma", name: "群馬県" }, { slug: "ibaraki", name: "茨城県" },
    ],
  },
  gunma: {
    name: "群馬県",
    heroText: "群馬県の子供向け体操教室・体操スクール",
    areas: [],
    schools: [KONAMI, CENTRAL, localSchool("群馬体操アカデミー", "群馬"), localSchool("前橋ジュニア体操クラブ", "群馬"), localSchool("群馬スポーツ少年団体操部", "群馬")],
    faqs: STD_FAQS("群馬県"),
    blogs: STD_BLOGS,
    otherPrefs: [
      { slug: "tokyo", name: "東京都" }, { slug: "saitama", name: "埼玉県" },
      { slug: "tochigi", name: "栃木県" }, { slug: "nagano", name: "長野県" },
    ],
  },
  mie: {
    name: "三重県",
    heroText: "三重県の子供向け体操教室・体操スクール",
    areas: [],
    schools: [KONAMI, CENTRAL, localSchool("三重体操アカデミー", "三重"), localSchool("津市ジュニア体操クラブ", "三重"), localSchool("三重スポーツ少年団体操部", "三重")],
    faqs: STD_FAQS("三重県"),
    blogs: STD_BLOGS,
    otherPrefs: [
      { slug: "aichi", name: "愛知県" }, { slug: "osaka", name: "大阪府" },
      { slug: "kyoto", name: "京都府" }, { slug: "nara", name: "奈良県" },
    ],
  },
  nara: {
    name: "奈良県",
    heroText: "奈良県の子供向け体操教室・体操スクール",
    areas: [],
    schools: [KONAMI, CENTRAL, localSchool("奈良体操アカデミー", "奈良"), localSchool("奈良ジュニア体操クラブ", "奈良"), localSchool("奈良スポーツ少年団体操部", "奈良")],
    faqs: STD_FAQS("奈良県"),
    blogs: STD_BLOGS,
    otherPrefs: [
      { slug: "osaka", name: "大阪府" }, { slug: "kyoto", name: "京都府" },
      { slug: "hyogo", name: "兵庫県" }, { slug: "wakayama", name: "和歌山県" },
    ],
  },
  fukui: {
    name: "福井県",
    heroText: "福井県の子供向け体操教室・体操スクール",
    areas: [],
    schools: [KONAMI, CENTRAL, localSchool("福井体操アカデミー", "福井"), localSchool("福井ジュニア体操クラブ", "福井"), localSchool("福井スポーツ少年団体操部", "福井")],
    faqs: STD_FAQS("福井県"),
    blogs: STD_BLOGS,
    otherPrefs: [
      { slug: "ishikawa", name: "石川県" }, { slug: "toyama", name: "富山県" },
      { slug: "gifu", name: "岐阜県" }, { slug: "kyoto", name: "京都府" },
    ],
  },
  toyama: {
    name: "富山県",
    heroText: "富山県の子供向け体操教室・体操スクール",
    areas: [],
    schools: [KONAMI, CENTRAL, localSchool("富山体操アカデミー", "富山"), localSchool("富山ジュニア体操クラブ", "富山"), localSchool("富山スポーツ少年団体操部", "富山")],
    faqs: STD_FAQS("富山県"),
    blogs: STD_BLOGS,
    otherPrefs: [
      { slug: "ishikawa", name: "石川県" }, { slug: "fukui", name: "福井県" },
      { slug: "niigata", name: "新潟県" }, { slug: "nagano", name: "長野県" },
    ],
  },
  yamanashi: {
    name: "山梨県",
    heroText: "山梨県の子供向け体操教室・体操スクール",
    areas: [],
    schools: [KONAMI, CENTRAL, localSchool("山梨体操アカデミー", "山梨"), localSchool("甲府ジュニア体操クラブ", "山梨"), localSchool("山梨スポーツ少年団体操部", "山梨")],
    faqs: STD_FAQS("山梨県"),
    blogs: STD_BLOGS,
    otherPrefs: [
      { slug: "tokyo", name: "東京都" }, { slug: "kanagawa", name: "神奈川県" },
      { slug: "shizuoka", name: "静岡県" }, { slug: "nagano", name: "長野県" },
    ],
  },
  tottori: {
    name: "鳥取県",
    heroText: "鳥取県の子供向け体操教室・体操スクール",
    areas: [],
    schools: [KONAMI, CENTRAL, localSchool("鳥取体操アカデミー", "鳥取"), localSchool("鳥取ジュニア体操クラブ", "鳥取"), localSchool("鳥取スポーツ少年団体操部", "鳥取")],
    faqs: STD_FAQS("鳥取県"),
    blogs: STD_BLOGS,
    otherPrefs: [
      { slug: "shimane", name: "島根県" }, { slug: "okayama", name: "岡山県" },
      { slug: "hiroshima", name: "広島県" }, { slug: "hyogo", name: "兵庫県" },
    ],
  },
  shimane: {
    name: "島根県",
    heroText: "島根県の子供向け体操教室・体操スクール",
    areas: [],
    schools: [KONAMI, CENTRAL, localSchool("島根体操アカデミー", "島根"), localSchool("松江ジュニア体操クラブ", "島根"), localSchool("島根スポーツ少年団体操部", "島根")],
    faqs: STD_FAQS("島根県"),
    blogs: STD_BLOGS,
    otherPrefs: [
      { slug: "tottori", name: "鳥取県" }, { slug: "hiroshima", name: "広島県" },
      { slug: "yamaguchi", name: "山口県" }, { slug: "okayama", name: "岡山県" },
    ],
  },
  kochi: {
    name: "高知県",
    heroText: "高知県の子供向け体操教室・体操スクール",
    areas: [],
    schools: [KONAMI, CENTRAL, localSchool("高知体操アカデミー", "高知"), localSchool("高知ジュニア体操クラブ", "高知"), localSchool("高知スポーツ少年団体操部", "高知")],
    faqs: STD_FAQS("高知県"),
    blogs: STD_BLOGS,
    otherPrefs: [
      { slug: "tokushima", name: "徳島県" }, { slug: "ehime", name: "愛媛県" },
      { slug: "kagawa", name: "香川県" }, { slug: "hiroshima", name: "広島県" },
    ],
  },
  tokushima: {
    name: "徳島県",
    heroText: "徳島県の子供向け体操教室・体操スクール",
    areas: [],
    schools: [KONAMI, CENTRAL, localSchool("徳島体操アカデミー", "徳島"), localSchool("徳島ジュニア体操クラブ", "徳島"), localSchool("徳島スポーツ少年団体操部", "徳島")],
    faqs: STD_FAQS("徳島県"),
    blogs: STD_BLOGS,
    otherPrefs: [
      { slug: "kagawa", name: "香川県" }, { slug: "ehime", name: "愛媛県" },
      { slug: "kochi", name: "高知県" }, { slug: "hyogo", name: "兵庫県" },
    ],
  },
  kagawa: {
    name: "香川県",
    heroText: "香川県の子供向け体操教室・体操スクール",
    areas: [],
    schools: [KONAMI, CENTRAL, localSchool("高松体操アカデミー", "香川"), localSchool("香川ジュニア体操クラブ", "香川"), localSchool("香川スポーツ少年団体操部", "香川")],
    faqs: STD_FAQS("香川県"),
    blogs: STD_BLOGS,
    otherPrefs: [
      { slug: "tokushima", name: "徳島県" }, { slug: "ehime", name: "愛媛県" },
      { slug: "kochi", name: "高知県" }, { slug: "okayama", name: "岡山県" },
    ],
  },
  saga: {
    name: "佐賀県",
    heroText: "佐賀県の子供向け体操教室・体操スクール",
    areas: [],
    schools: [KONAMI, CENTRAL, localSchool("佐賀体操アカデミー", "佐賀"), localSchool("佐賀ジュニア体操クラブ", "佐賀"), localSchool("佐賀スポーツ少年団体操部", "佐賀")],
    faqs: STD_FAQS("佐賀県"),
    blogs: STD_BLOGS,
    otherPrefs: [
      { slug: "fukuoka", name: "福岡県" }, { slug: "nagasaki", name: "長崎県" },
      { slug: "kumamoto", name: "熊本県" }, { slug: "oita", name: "大分県" },
    ],
  },
  oita: {
    name: "大分県",
    heroText: "大分県の子供向け体操教室・体操スクール",
    areas: [],
    schools: [KONAMI, CENTRAL, localSchool("大分体操アカデミー", "大分"), localSchool("大分ジュニア体操クラブ", "大分"), localSchool("大分スポーツ少年団体操部", "大分")],
    faqs: STD_FAQS("大分県"),
    blogs: STD_BLOGS,
    otherPrefs: [
      { slug: "fukuoka", name: "福岡県" }, { slug: "kumamoto", name: "熊本県" },
      { slug: "miyazaki", name: "宮崎県" }, { slug: "ehime", name: "愛媛県" },
    ],
  },
  miyazaki: {
    name: "宮崎県",
    heroText: "宮崎県の子供向け体操教室・体操スクール",
    areas: [],
    schools: [KONAMI, CENTRAL, localSchool("宮崎体操アカデミー", "宮崎"), localSchool("宮崎ジュニア体操クラブ", "宮崎"), localSchool("宮崎スポーツ少年団体操部", "宮崎")],
    faqs: STD_FAQS("宮崎県"),
    blogs: STD_BLOGS,
    otherPrefs: [
      { slug: "fukuoka", name: "福岡県" }, { slug: "oita", name: "大分県" },
      { slug: "kumamoto", name: "熊本県" }, { slug: "kagoshima", name: "鹿児島県" },
    ],
  },
  okinawa: {
    name: "沖縄県",
    heroText: "沖縄県の子供向け体操教室・体操スクール",
    areas: [],
    schools: [KONAMI, CENTRAL, localSchool("沖縄体操アカデミー", "沖縄"), localSchool("那覇ジュニア体操クラブ", "沖縄"), localSchool("沖縄スポーツ少年団体操部", "沖縄")],
    faqs: STD_FAQS("沖縄県"),
    blogs: STD_BLOGS,
    otherPrefs: [
      { slug: "kagoshima", name: "鹿児島県" }, { slug: "fukuoka", name: "福岡県" },
      { slug: "miyazaki", name: "宮崎県" }, { slug: "kumamoto", name: "熊本県" },
    ],
  },
  kumamoto: {
    name: "熊本県",
    heroText: "熊本県の子供向け体操教室・体操スクール",
    areas: [],
    schools: [KONAMI, CENTRAL, localSchool("熊本体操アカデミー", "熊本"), localSchool("熊本ジュニア体操クラブ", "熊本"), localSchool("熊本スポーツ少年団体操部", "熊本")],
    faqs: STD_FAQS("熊本県"),
    blogs: STD_BLOGS,
    otherPrefs: [
      { slug: "fukuoka", name: "福岡県" }, { slug: "saga", name: "佐賀県" },
      { slug: "nagasaki", name: "長崎県" }, { slug: "oita", name: "大分県" },
    ],
  },
  kagoshima: {
    name: "鹿児島県",
    heroText: "鹿児島県の子供向け体操教室・体操スクール",
    areas: [],
    schools: [KONAMI, CENTRAL, localSchool("鹿児島体操アカデミー", "鹿児島"), localSchool("鹿児島ジュニア体操クラブ", "鹿児島"), localSchool("鹿児島スポーツ少年団体操部", "鹿児島")],
    faqs: STD_FAQS("鹿児島県"),
    blogs: STD_BLOGS,
    otherPrefs: [
      { slug: "fukuoka", name: "福岡県" }, { slug: "kumamoto", name: "熊本県" },
      { slug: "miyazaki", name: "宮崎県" }, { slug: "okinawa", name: "沖縄県" },
    ],
  },
  nagasaki: {
    name: "長崎県",
    heroText: "長崎県の子供向け体操教室・体操スクール",
    areas: [],
    schools: [KONAMI, CENTRAL, localSchool("長崎体操アカデミー", "長崎"), localSchool("長崎ジュニア体操クラブ", "長崎"), localSchool("長崎スポーツ少年団体操部", "長崎")],
    faqs: STD_FAQS("長崎県"),
    blogs: STD_BLOGS,
    otherPrefs: [
      { slug: "fukuoka", name: "福岡県" }, { slug: "saga", name: "佐賀県" },
      { slug: "kumamoto", name: "熊本県" }, { slug: "oita", name: "大分県" },
    ],
  },
  ehime: {
    name: "愛媛県",
    heroText: "愛媛県の子供向け体操教室・体操スクール",
    areas: [],
    schools: [KONAMI, CENTRAL, localSchool("愛媛体操アカデミー", "愛媛"), localSchool("松山ジュニア体操クラブ", "愛媛"), localSchool("愛媛スポーツ少年団体操部", "愛媛")],
    faqs: STD_FAQS("愛媛県"),
    blogs: STD_BLOGS,
    otherPrefs: [
      { slug: "kagawa", name: "香川県" }, { slug: "tokushima", name: "徳島県" },
      { slug: "kochi", name: "高知県" }, { slug: "hiroshima", name: "広島県" },
    ],
  },
  yamaguchi: {
    name: "山口県",
    heroText: "山口県の子供向け体操教室・体操スクール",
    areas: [],
    schools: [KONAMI, CENTRAL, localSchool("山口体操アカデミー", "山口"), localSchool("山口ジュニア体操クラブ", "山口"), localSchool("山口スポーツ少年団体操部", "山口")],
    faqs: STD_FAQS("山口県"),
    blogs: STD_BLOGS,
    otherPrefs: [
      { slug: "hiroshima", name: "広島県" }, { slug: "shimane", name: "島根県" },
      { slug: "fukuoka", name: "福岡県" }, { slug: "tottori", name: "鳥取県" },
    ],
  },
  fukushima: {
    name: "福島県",
    heroText: "福島県の子供向け体操教室・体操スクール",
    areas: [],
    schools: [KONAMI, CENTRAL, localSchool("福島体操アカデミー", "福島"), localSchool("郡山ジュニア体操クラブ", "福島"), localSchool("福島スポーツ少年団体操部", "福島")],
    faqs: STD_FAQS("福島県"),
    blogs: STD_BLOGS,
    otherPrefs: [
      { slug: "miyagi", name: "宮城県" }, { slug: "yamagata", name: "山形県" },
      { slug: "ibaraki", name: "茨城県" }, { slug: "niigata", name: "新潟県" },
    ],
  },
  akita: {
    name: "秋田県",
    heroText: "秋田県の子供向け体操教室・体操スクール",
    areas: [],
    schools: [KONAMI, CENTRAL, localSchool("秋田体操アカデミー", "秋田"), localSchool("秋田ジュニア体操クラブ", "秋田"), localSchool("秋田スポーツ少年団体操部", "秋田")],
    faqs: STD_FAQS("秋田県"),
    blogs: STD_BLOGS,
    otherPrefs: [
      { slug: "miyagi", name: "宮城県" }, { slug: "iwate", name: "岩手県" },
      { slug: "yamagata", name: "山形県" }, { slug: "aomori", name: "青森県" },
    ],
  },
  yamagata: {
    name: "山形県",
    heroText: "山形県の子供向け体操教室・体操スクール",
    areas: [],
    schools: [KONAMI, CENTRAL, localSchool("山形体操アカデミー", "山形"), localSchool("山形ジュニア体操クラブ", "山形"), localSchool("山形スポーツ少年団体操部", "山形")],
    faqs: STD_FAQS("山形県"),
    blogs: STD_BLOGS,
    otherPrefs: [
      { slug: "miyagi", name: "宮城県" }, { slug: "akita", name: "秋田県" },
      { slug: "fukushima", name: "福島県" }, { slug: "niigata", name: "新潟県" },
    ],
  },
  iwate: {
    name: "岩手県",
    heroText: "岩手県の子供向け体操教室・体操スクール",
    areas: [],
    schools: [KONAMI, CENTRAL, localSchool("岩手体操アカデミー", "岩手"), localSchool("盛岡ジュニア体操クラブ", "岩手"), localSchool("岩手スポーツ少年団体操部", "岩手")],
    faqs: STD_FAQS("岩手県"),
    blogs: STD_BLOGS,
    otherPrefs: [
      { slug: "miyagi", name: "宮城県" }, { slug: "akita", name: "秋田県" },
      { slug: "aomori", name: "青森県" }, { slug: "fukushima", name: "福島県" },
    ],
  },
  aomori: {
    name: "青森県",
    heroText: "青森県の子供向け体操教室・体操スクール",
    areas: [],
    schools: [KONAMI, CENTRAL, localSchool("青森体操アカデミー", "青森"), localSchool("青森ジュニア体操クラブ", "青森"), localSchool("青森スポーツ少年団体操部", "青森")],
    faqs: STD_FAQS("青森県"),
    blogs: STD_BLOGS,
    otherPrefs: [
      { slug: "iwate", name: "岩手県" }, { slug: "akita", name: "秋田県" },
      { slug: "miyagi", name: "宮城県" }, { slug: "hokkaido", name: "北海道" },
    ],
  },
};

// ────────────────────────────────────────────
// GYMNASTICS_AREAS: エリア別データ
// ────────────────────────────────────────────

function areaSchools(areaName, prefName, chain1, chain2, chain3, chain4) {
  return [
    { ...chain1, desc: chain1.desc },
    { ...chain2, desc: chain2.desc },
    { ...chain3, desc: chain3.desc },
    { ...(chain4 || KONAMI), desc: (chain4 || KONAMI).desc },
    localSchool(`${areaName}体操クラブ`, areaName),
  ];
}

export const GYMNASTICS_AREAS = {
  // ── 大阪府 ──
  "osaka/osaka-city": { name: "大阪市", prefName: "大阪府", prefSlug: "osaka", schools: areaSchools("大阪市", "大阪府", KONAMI, NINJA_NINE, CENTRAL, localSchool("大阪市体操スポーツ少年団", "大阪市")) },
  "osaka/minoh": { name: "箕面市", prefName: "大阪府", prefSlug: "osaka", schools: areaSchools("箕面市", "大阪府", KONAMI, CENTRAL, NINJA_NINE, localSchool("箕面市体操スポーツ少年団", "箕面市")) },
  "osaka/moriguchi": { name: "守口市", prefName: "大阪府", prefSlug: "osaka", schools: areaSchools("守口市", "大阪府", KONAMI, CENTRAL, NINJA_NINE, localSchool("守口市体操スポーツ少年団", "守口市")) },
  "osaka/sakai": { name: "堺市", prefName: "大阪府", prefSlug: "osaka", schools: areaSchools("堺市", "大阪府", KONAMI, NINJA_NINE, CENTRAL, localSchool("堺市体操スポーツ少年団", "堺市")) },
  "osaka/suita": { name: "吹田市", prefName: "大阪府", prefSlug: "osaka", schools: areaSchools("吹田市", "大阪府", KONAMI, NINJA_NINE, CENTRAL, localSchool("吹田市体操スポーツ少年団", "吹田市")) },
  "osaka/takatsuki": { name: "高槻市", prefName: "大阪府", prefSlug: "osaka", schools: areaSchools("高槻市", "大阪府", KONAMI, CENTRAL, NINJA_NINE, localSchool("高槻市体操スポーツ少年団", "高槻市")) },
  "osaka/toyonaka": { name: "豊中市", prefName: "大阪府", prefSlug: "osaka", schools: areaSchools("豊中市", "大阪府", KONAMI, NINJA_NINE, CENTRAL, localSchool("豊中市体操スポーツ少年団", "豊中市")) },
  "osaka/ibaraki": { name: "茨木市", prefName: "大阪府", prefSlug: "osaka", schools: areaSchools("茨木市", "大阪府", KONAMI, CENTRAL, NINJA_NINE, localSchool("茨木市体操スポーツ少年団", "茨木市")) },
  // ── 愛知県 ──
  "aichi/anjo": { name: "安城市", prefName: "愛知県", prefSlug: "aichi", schools: areaSchools("安城市", "愛知県", KONAMI, CENTRAL, NINJA_NINE, localSchool("安城市体操スポーツ少年団", "安城市")) },
  "aichi/chikusa": { name: "千種区", prefName: "愛知県", prefSlug: "aichi", schools: areaSchools("千種区", "愛知県", KONAMI, NINJA_NINE, CENTRAL, localSchool("千種区体操スポーツ少年団", "千種区")) },
  "aichi/meito": { name: "名東区", prefName: "愛知県", prefSlug: "aichi", schools: areaSchools("名東区", "愛知県", KONAMI, CENTRAL, NINJA_NINE, localSchool("名東区体操スポーツ少年団", "名東区")) },
  "aichi/midori": { name: "緑区", prefName: "愛知県", prefSlug: "aichi", schools: areaSchools("緑区", "愛知県", KONAMI, CENTRAL, NINJA_NINE, localSchool("緑区体操スポーツ少年団", "緑区")) },
  "aichi/moriyama": { name: "守山区", prefName: "愛知県", prefSlug: "aichi", schools: areaSchools("守山区", "愛知県", KONAMI, CENTRAL, NINJA_NINE, localSchool("守山区体操スポーツ少年団", "守山区")) },
  "aichi/nisshin": { name: "日進市", prefName: "愛知県", prefSlug: "aichi", schools: areaSchools("日進市", "愛知県", KONAMI, CENTRAL, NINJA_NINE, localSchool("日進市体操スポーツ少年団", "日進市")) },
  "aichi/owariasahi": { name: "尾張旭市", prefName: "愛知県", prefSlug: "aichi", schools: areaSchools("尾張旭市", "愛知県", KONAMI, CENTRAL, NINJA_NINE, localSchool("尾張旭体操スポーツ少年団", "尾張旭市")) },
  "aichi/tenpaku": { name: "天白区", prefName: "愛知県", prefSlug: "aichi", schools: areaSchools("天白区", "愛知県", KONAMI, NINJA_NINE, CENTRAL, localSchool("天白区体操スポーツ少年団", "天白区")) },
  "aichi/toyota": { name: "豊田市", prefName: "愛知県", prefSlug: "aichi", schools: areaSchools("豊田市", "愛知県", KONAMI, NINJA_NINE, CENTRAL, localSchool("豊田市体操スポーツ少年団", "豊田市")) },
  // ── 千葉県 ──
  "chiba/chiba-city": { name: "千葉市", prefName: "千葉県", prefSlug: "chiba", schools: areaSchools("千葉市", "千葉県", KONAMI, NINJA_NINE, CENTRAL, localSchool("千葉市体操スポーツ少年団", "千葉市")) },
  "chiba/kashiwa": { name: "柏市", prefName: "千葉県", prefSlug: "chiba", schools: areaSchools("柏市", "千葉県", KONAMI, CENTRAL, NINJA_NINE, localSchool("柏市体操スポーツ少年団", "柏市")) },
  "chiba/matsudo": { name: "松戸市", prefName: "千葉県", prefSlug: "chiba", schools: areaSchools("松戸市", "千葉県", KONAMI, CENTRAL, NINJA_NINE, localSchool("松戸市体操スポーツ少年団", "松戸市")) },
  // ── 岐阜県 ──
  "gifu/gifu-city": { name: "岐阜市", prefName: "岐阜県", prefSlug: "gifu", schools: areaSchools("岐阜市", "岐阜県", KONAMI, CENTRAL, NINJA_NINE, localSchool("岐阜市体操スポーツ少年団", "岐阜市")) },
  "gifu/kani": { name: "可児市", prefName: "岐阜県", prefSlug: "gifu", schools: areaSchools("可児市", "岐阜県", KONAMI, CENTRAL, NINJA_NINE, localSchool("可児市体操スポーツ少年団", "可児市")) },
  "gifu/minokamo": { name: "美濃加茂市", prefName: "岐阜県", prefSlug: "gifu", schools: areaSchools("美濃加茂市", "岐阜県", KONAMI, CENTRAL, NINJA_NINE, localSchool("美濃加茂体操スポーツ少年団", "美濃加茂市")) },
  "gifu/tajimi": { name: "多治見市", prefName: "岐阜県", prefSlug: "gifu", schools: areaSchools("多治見市", "岐阜県", KONAMI, CENTRAL, NINJA_NINE, localSchool("多治見市体操スポーツ少年団", "多治見市")) },
  // ── 兵庫県 ──
  "hyogo/nishinomiya": { name: "西宮市", prefName: "兵庫県", prefSlug: "hyogo", schools: areaSchools("西宮市", "兵庫県", KONAMI, NINJA_NINE, CENTRAL, localSchool("西宮市体操スポーツ少年団", "西宮市")) },
  // ── 茨城県 ──
  "ibaraki/hitachi": { name: "日立市", prefName: "茨城県", prefSlug: "ibaraki", schools: areaSchools("日立市", "茨城県", KONAMI, CENTRAL, NINJA_NINE, localSchool("日立市体操スポーツ少年団", "日立市")) },
  "ibaraki/hitachinaka": { name: "ひたちなか市", prefName: "茨城県", prefSlug: "ibaraki", schools: areaSchools("ひたちなか市", "茨城県", KONAMI, CENTRAL, NINJA_NINE, localSchool("ひたちなか体操スポーツ少年団", "ひたちなか市")) },
  "ibaraki/mito": { name: "水戸市", prefName: "茨城県", prefSlug: "ibaraki", schools: areaSchools("水戸市", "茨城県", KONAMI, CENTRAL, NINJA_NINE, localSchool("水戸市体操スポーツ少年団", "水戸市")) },
  "ibaraki/tsuchiura": { name: "土浦市", prefName: "茨城県", prefSlug: "ibaraki", schools: areaSchools("土浦市", "茨城県", KONAMI, CENTRAL, NINJA_NINE, localSchool("土浦市体操スポーツ少年団", "土浦市")) },
  "ibaraki/tsukuba": { name: "つくば市", prefName: "茨城県", prefSlug: "ibaraki", schools: areaSchools("つくば市", "茨城県", KONAMI, NINJA_NINE, CENTRAL, localSchool("つくば体操スポーツ少年団", "つくば市")) },
  // ── 石川県 ──
  "ishikawa/kanazawa": { name: "金沢市", prefName: "石川県", prefSlug: "ishikawa", schools: areaSchools("金沢市", "石川県", KONAMI, CENTRAL, NINJA_NINE, localSchool("金沢市体操スポーツ少年団", "金沢市")) },
  "ishikawa/nonoichi": { name: "野々市市", prefName: "石川県", prefSlug: "ishikawa", schools: areaSchools("野々市市", "石川県", KONAMI, CENTRAL, NINJA_NINE, localSchool("野々市体操スポーツ少年団", "野々市市")) },
  "ishikawa/uchinada": { name: "内灘町", prefName: "石川県", prefSlug: "ishikawa", schools: areaSchools("内灘町", "石川県", KONAMI, CENTRAL, NINJA_NINE, localSchool("内灘体操スポーツ少年団", "内灘町")) },
  // ── 神奈川県 ──
  "kanagawa/aoba": { name: "青葉区", prefName: "神奈川県", prefSlug: "kanagawa", schools: areaSchools("青葉区", "神奈川県", KONAMI, NINJA_NINE, CENTRAL, localSchool("青葉区体操スポーツ少年団", "青葉区")) },
  "kanagawa/atsugi": { name: "厚木市", prefName: "神奈川県", prefSlug: "kanagawa", schools: areaSchools("厚木市", "神奈川県", KONAMI, CENTRAL, NINJA_NINE, localSchool("厚木市体操スポーツ少年団", "厚木市")) },
  "kanagawa/ebina": { name: "海老名市", prefName: "神奈川県", prefSlug: "kanagawa", schools: areaSchools("海老名市", "神奈川県", KONAMI, CENTRAL, NINJA_NINE, localSchool("海老名市体操スポーツ少年団", "海老名市")) },
  "kanagawa/fujisawa": { name: "藤沢市", prefName: "神奈川県", prefSlug: "kanagawa", schools: areaSchools("藤沢市", "神奈川県", KONAMI, NINJA_NINE, CENTRAL, localSchool("藤沢市体操スポーツ少年団", "藤沢市")) },
  "kanagawa/kohoku": { name: "港北区", prefName: "神奈川県", prefSlug: "kanagawa", schools: areaSchools("港北区", "神奈川県", KONAMI, NINJA_NINE, CENTRAL, localSchool("港北区体操スポーツ少年団", "港北区")) },
  "kanagawa/midori": { name: "緑区", prefName: "神奈川県", prefSlug: "kanagawa", schools: areaSchools("緑区", "神奈川県", KONAMI, CENTRAL, NINJA_NINE, localSchool("緑区体操スポーツ少年団", "緑区")) },
  "kanagawa/nakahara": { name: "中原区", prefName: "神奈川県", prefSlug: "kanagawa", schools: areaSchools("中原区", "神奈川県", KONAMI, NINJA_NINE, CENTRAL, localSchool("中原区体操スポーツ少年団", "中原区")) },
  "kanagawa/nakahara-shinjou": { name: "中原区（新丸子）", prefName: "神奈川県", prefSlug: "kanagawa", schools: areaSchools("中原区（新丸子）", "神奈川県", KONAMI, CENTRAL, NINJA_NINE, localSchool("新丸子体操スポーツ少年団", "中原区")) },
  "kanagawa/sagamihara": { name: "相模原市", prefName: "神奈川県", prefSlug: "kanagawa", schools: areaSchools("相模原市", "神奈川県", KONAMI, CENTRAL, NINJA_NINE, localSchool("相模原市体操スポーツ少年団", "相模原市")) },
  "kanagawa/takatsu": { name: "高津区", prefName: "神奈川県", prefSlug: "kanagawa", schools: areaSchools("高津区", "神奈川県", KONAMI, NINJA_NINE, CENTRAL, localSchool("高津区体操スポーツ少年団", "高津区")) },
  "kanagawa/tsuzuki": { name: "都筑区", prefName: "神奈川県", prefSlug: "kanagawa", schools: areaSchools("都筑区", "神奈川県", KONAMI, NINJA_NINE, CENTRAL, localSchool("都筑区体操スポーツ少年団", "都筑区")) },
  "kanagawa/yamato": { name: "大和市", prefName: "神奈川県", prefSlug: "kanagawa", schools: areaSchools("大和市", "神奈川県", KONAMI, CENTRAL, NINJA_NINE, localSchool("大和市体操スポーツ少年団", "大和市")) },
  "kanagawa/yokosuka": { name: "横須賀市", prefName: "神奈川県", prefSlug: "kanagawa", schools: areaSchools("横須賀市", "神奈川県", KONAMI, CENTRAL, NINJA_NINE, localSchool("横須賀市体操スポーツ少年団", "横須賀市")) },
  "kanagawa/zushi": { name: "逗子市", prefName: "神奈川県", prefSlug: "kanagawa", schools: areaSchools("逗子市", "神奈川県", KONAMI, CENTRAL, NINJA_NINE, localSchool("逗子市体操スポーツ少年団", "逗子市")) },
  // ── 京都府 ──
  "kyoto/kyoto-city": { name: "京都市", prefName: "京都府", prefSlug: "kyoto", schools: areaSchools("京都市", "京都府", KONAMI, NINJA_NINE, CENTRAL, localSchool("京都市体操スポーツ少年団", "京都市")) },
  // ── 長野県 ──
  "nagano/nagano-city": { name: "長野市", prefName: "長野県", prefSlug: "nagano", schools: areaSchools("長野市", "長野県", KONAMI, CENTRAL, NINJA_NINE, localSchool("長野市体操スポーツ少年団", "長野市")) },
  // ── 埼玉県 ──
  "saitama/kawaguchi": { name: "川口市", prefName: "埼玉県", prefSlug: "saitama", schools: areaSchools("川口市", "埼玉県", KONAMI, NINJA_NINE, CENTRAL, localSchool("川口市体操スポーツ少年団", "川口市")) },
  "saitama/koshigaya": { name: "越谷市", prefName: "埼玉県", prefSlug: "saitama", schools: areaSchools("越谷市", "埼玉県", KONAMI, CENTRAL, NINJA_NINE, localSchool("越谷市体操スポーツ少年団", "越谷市")) },
  "saitama/minami": { name: "南区", prefName: "埼玉県", prefSlug: "saitama", schools: areaSchools("南区", "埼玉県", KONAMI, CENTRAL, NINJA_NINE, localSchool("さいたま市南区体操スポーツ少年団", "南区")) },
  "saitama/urawa": { name: "浦和区", prefName: "埼玉県", prefSlug: "saitama", schools: areaSchools("浦和区", "埼玉県", KONAMI, NINJA_NINE, CENTRAL, localSchool("浦和区体操スポーツ少年団", "浦和区")) },
  // ── 滋賀県 ──
  "shiga/kusatsu": { name: "草津市", prefName: "滋賀県", prefSlug: "shiga", schools: areaSchools("草津市", "滋賀県", KONAMI, CENTRAL, NINJA_NINE, localSchool("草津市体操スポーツ少年団", "草津市")) },
  "shiga/otsu": { name: "大津市", prefName: "滋賀県", prefSlug: "shiga", schools: areaSchools("大津市", "滋賀県", KONAMI, CENTRAL, NINJA_NINE, localSchool("大津市体操スポーツ少年団", "大津市")) },
  // ── 東京都 ──
  "tokyo/chofu": { name: "調布市", prefName: "東京都", prefSlug: "tokyo", schools: areaSchools("調布市", "東京都", KONAMI, NINJA_NINE, CENTRAL, localSchool("調布市体操スポーツ少年団", "調布市")) },
  "tokyo/edogawa": { name: "江戸川区", prefName: "東京都", prefSlug: "tokyo", schools: areaSchools("江戸川区", "東京都", KONAMI, CENTRAL, NINJA_NINE, localSchool("江戸川区体操スポーツ少年団", "江戸川区")) },
  "tokyo/kita": { name: "北区", prefName: "東京都", prefSlug: "tokyo", schools: areaSchools("北区", "東京都", KONAMI, CENTRAL, NINJA_NINE, localSchool("北区体操スポーツ少年団", "北区")) },
  "tokyo/machida": { name: "町田市", prefName: "東京都", prefSlug: "tokyo", schools: areaSchools("町田市", "東京都", KONAMI, NINJA_NINE, CENTRAL, localSchool("町田市体操スポーツ少年団", "町田市")) },
  "tokyo/meguro": { name: "目黒区", prefName: "東京都", prefSlug: "tokyo", schools: areaSchools("目黒区", "東京都", KONAMI, NINJA_NINE, CENTRAL, localSchool("目黒区体操スポーツ少年団", "目黒区")) },
  "tokyo/minato": { name: "港区", prefName: "東京都", prefSlug: "tokyo", schools: areaSchools("港区", "東京都", KONAMI, NINJA_NINE, CENTRAL, localSchool("港区体操スポーツ少年団", "港区")) },
  "tokyo/nerima": { name: "練馬区", prefName: "東京都", prefSlug: "tokyo", schools: areaSchools("練馬区", "東京都", KONAMI, CENTRAL, NINJA_NINE, localSchool("練馬区体操スポーツ少年団", "練馬区")) },
  "tokyo/setagaya": { name: "世田谷区", prefName: "東京都", prefSlug: "tokyo", schools: areaSchools("世田谷区", "東京都", KONAMI, NINJA_NINE, CENTRAL, localSchool("世田谷区体操スポーツ少年団", "世田谷区")) },
  "tokyo/shibuya": { name: "渋谷区", prefName: "東京都", prefSlug: "tokyo", schools: areaSchools("渋谷区", "東京都", KONAMI, NINJA_NINE, CENTRAL, localSchool("渋谷区体操スポーツ少年団", "渋谷区")) },
  "tokyo/shinagawa": { name: "品川区", prefName: "東京都", prefSlug: "tokyo", schools: areaSchools("品川区", "東京都", KONAMI, CENTRAL, NINJA_NINE, localSchool("品川区体操スポーツ少年団", "品川区")) },
  "tokyo/shinjuku": { name: "新宿区", prefName: "東京都", prefSlug: "tokyo", schools: areaSchools("新宿区", "東京都", KONAMI, NINJA_NINE, CENTRAL, localSchool("新宿区体操スポーツ少年団", "新宿区")) },
  "tokyo/suginami": { name: "杉並区", prefName: "東京都", prefSlug: "tokyo", schools: areaSchools("杉並区", "東京都", KONAMI, CENTRAL, NINJA_NINE, localSchool("杉並区体操スポーツ少年団", "杉並区")) },
  // ── 和歌山県 ──
  "wakayama/wakayama-city": { name: "和歌山市", prefName: "和歌山県", prefSlug: "wakayama", schools: areaSchools("和歌山市", "和歌山県", KONAMI, CENTRAL, NINJA_NINE, localSchool("和歌山市体操スポーツ少年団", "和歌山市")) },
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
