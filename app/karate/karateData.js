// /app/karate/karateData.js

const KYOKUSHIN = { name: "極真会館加盟道場", rating: 4.4, fee: 7700, age: "4歳〜", desc: "世界最大の空手団体・極真会館加盟道場。礼儀作法・精神力・忍耐力を鍛える本格空手指導。", color: "#795548", emoji: "🥋" };
const SEIDO = { name: "正道会館加盟道場", rating: 4.3, fee: 6600, age: "4歳〜", desc: "総合格闘技団体としても知名度高い正道会館。子どもの精神面と技術面を同時に育成。", color: "#795548", emoji: "🥋" };
const ZENKOKU = { name: "全国空手道場連盟加盟", rating: 4.2, fee: 5500, age: "3歳〜", desc: "全国展開の空手道場。礼節を重んじる伝統的な指導で子どもの人格形成に寄与。", color: "#795548", emoji: "🥋" };
const SHOTOKAN = { name: "国際松濤館加盟道場", rating: 4.3, fee: 6600, age: "4歳〜", desc: "松濤館流の伝統を受け継ぐ空手道場。型・組手をバランスよく指導。", color: "#795548", emoji: "🥋" };
const SHITORYU = { name: "糸東流空手道加盟道場", rating: 4.2, fee: 5500, age: "3歳〜", desc: "糸東流の伝統空手を学べる道場。礼儀・型・組手を丁寧に指導。", color: "#795548", emoji: "🥋" };

function localKarate(name, area, desc, fee = 5500, rating = 4.1) {
  return { name, rating, fee, age: "3歳〜小学生", desc: desc || `${area}に根ざした空手道場。少人数制で丁寧な指導。礼儀・型・組手を楽しく学べる地域密着型道場。`, color: "#795548", emoji: "🥋" };
}

const STD_FAQS = (prefName) => [
  { q: `${prefName}で空手教室は何歳から通えますか？`, a: "3〜4歳から少年部クラスに通える道場が多いです。" },
  { q: `${prefName}の空手道場の月謝相場は？`, a: "週1〜2回で5,000〜8,000円が相場。道着代別途5,000〜10,000円。" },
  { q: "空手を習うと喧嘩っ早くなりますか？", a: "反対です。礼儀・規律を重んじる武道です。「礼に始まり礼に終わる」精神が日常にも活かされます。" },
  { q: "女の子でも空手を習えますか？", a: "護身術・精神力・集中力を育て女の子にも人気があります。" },
];

const STD_BLOGS = [
  { href: "/blog/kids-karate-guide", text: "子供の空手教室選び方完全ガイド" },
  { href: "/blog/kids-karate-school-guide-2026", text: "子供空手教室おすすめ2026年版" },
  { href: "/blog/kids-karate-benefits-complete", text: "子供が空手を習う効果・メリット" },
  { href: "/blog/kids-karate-ballet-guide", text: "子供に空手・武道を習わせたい！選び方と費用" },
];

export const KARATE_PREFS = {
  osaka: {
    name: "大阪府",
    heroText: "関西最大都市・大阪の子ども空手教室・道場",
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
    schools: [KYOKUSHIN, SEIDO, ZENKOKU, SHOTOKAN, localKarate("大阪空手道場", "大阪"), localKarate("浪速道場", "大阪")],
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
    heroText: "首都・東京の子ども向け空手教室・道場",
    areas: [
      { slug: "chofu", name: "調布市" }, { slug: "edogawa", name: "江戸川区" },
      { slug: "kita", name: "北区" }, { slug: "machida", name: "町田市" },
      { slug: "meguro", name: "目黒区" }, { slug: "minato", name: "港区" },
      { slug: "nerima", name: "練馬区" }, { slug: "setagaya", name: "世田谷区" },
      { slug: "shibuya", name: "渋谷区" }, { slug: "shinagawa", name: "品川区" },
      { slug: "shinjuku", name: "新宿区" }, { slug: "suginami", name: "杉並区" },
    ],
    schools: [KYOKUSHIN, SHOTOKAN, SEIDO, ZENKOKU, localKarate("東京武道館空手", "東京"), localKarate("首都圏空手道場", "東京")],
    faqs: STD_FAQS("東京都"),
    blogs: STD_BLOGS,
    otherPrefs: [
      { slug: "kanagawa", name: "神奈川県" }, { slug: "saitama", name: "埼玉県" },
      { slug: "chiba", name: "千葉県" }, { slug: "osaka", name: "大阪府" },
    ],
  },
  kanagawa: {
    name: "神奈川県",
    heroText: "横浜・川崎を擁する神奈川県の子ども空手教室・道場",
    areas: [
      { slug: "aoba", name: "青葉区" }, { slug: "atsugi", name: "厚木市" },
      { slug: "ebina", name: "海老名市" }, { slug: "fujisawa", name: "藤沢市" },
      { slug: "kohoku", name: "港北区" }, { slug: "midori", name: "緑区" },
      { slug: "nakahara", name: "中原区" }, { slug: "nakahara-shinjou", name: "中原区（新城）" },
      { slug: "sagamihara", name: "相模原市" }, { slug: "takatsu", name: "高津区" },
      { slug: "tsuzuki", name: "都筑区" }, { slug: "yamato", name: "大和市" },
      { slug: "yokosuka", name: "横須賀市" }, { slug: "zushi", name: "逗子市" },
    ],
    schools: [KYOKUSHIN, SHOTOKAN, SEIDO, ZENKOKU, localKarate("神奈川空手道場", "神奈川"), localKarate("湘南道場", "神奈川")],
    faqs: STD_FAQS("神奈川県"),
    blogs: STD_BLOGS,
    otherPrefs: [
      { slug: "tokyo", name: "東京都" }, { slug: "saitama", name: "埼玉県" },
      { slug: "chiba", name: "千葉県" }, { slug: "shizuoka", name: "静岡県" },
    ],
  },
  aichi: {
    name: "愛知県",
    heroText: "名古屋を中心とした愛知県の子ども空手教室・道場",
    areas: [
      { slug: "anjo", name: "安城市" }, { slug: "chikusa", name: "千種区" },
      { slug: "meito", name: "名東区" }, { slug: "midori", name: "緑区" },
      { slug: "moriyama", name: "守山区" }, { slug: "nisshin", name: "日進市" },
      { slug: "owariasahi", name: "尾張旭市" }, { slug: "tenpaku", name: "天白区" },
      { slug: "toyota", name: "豊田市" },
    ],
    schools: [KYOKUSHIN, SHOTOKAN, SEIDO, ZENKOKU, localKarate("名古屋空手道場", "名古屋"), localKarate("愛知武道館", "愛知")],
    faqs: STD_FAQS("愛知県"),
    blogs: STD_BLOGS,
    otherPrefs: [
      { slug: "osaka", name: "大阪府" }, { slug: "gifu", name: "岐阜県" },
      { slug: "shizuoka", name: "静岡県" }, { slug: "mie", name: "三重県" },
    ],
  },
  gifu: {
    name: "岐阜県",
    heroText: "岐阜県の子ども向け空手教室・道場",
    areas: [
      { slug: "gifu-city", name: "岐阜市" }, { slug: "kani", name: "可児市" },
      { slug: "minokamo", name: "美濃加茂市" }, { slug: "tajimi", name: "多治見市" },
    ],
    schools: [KYOKUSHIN, SHOTOKAN, ZENKOKU, localKarate("岐阜空手道場", "岐阜"), localKarate("美濃道場", "岐阜")],
    faqs: STD_FAQS("岐阜県"),
    blogs: STD_BLOGS,
    otherPrefs: [
      { slug: "aichi", name: "愛知県" }, { slug: "shizuoka", name: "静岡県" },
      { slug: "nagano", name: "長野県" }, { slug: "mie", name: "三重県" },
    ],
  },
  hyogo: {
    name: "兵庫県",
    heroText: "神戸・西宮を擁する兵庫県の子ども空手教室・道場",
    areas: [
      { slug: "nishinomiya", name: "西宮市" },
    ],
    schools: [KYOKUSHIN, SHOTOKAN, SEIDO, ZENKOKU, localKarate("神戸空手道場", "神戸"), localKarate("兵庫武道館", "兵庫")],
    faqs: STD_FAQS("兵庫県"),
    blogs: STD_BLOGS,
    otherPrefs: [
      { slug: "osaka", name: "大阪府" }, { slug: "kyoto", name: "京都府" },
      { slug: "nara", name: "奈良県" }, { slug: "wakayama", name: "和歌山県" },
    ],
  },
  ibaraki: {
    name: "茨城県",
    heroText: "茨城県の子ども向け空手教室・道場",
    areas: [
      { slug: "hitachi", name: "日立市" }, { slug: "hitachinaka", name: "ひたちなか市" },
      { slug: "mito", name: "水戸市" }, { slug: "tsuchiura", name: "土浦市" },
      { slug: "tsukuba", name: "つくば市" },
    ],
    schools: [KYOKUSHIN, SHOTOKAN, ZENKOKU, localKarate("茨城空手道場", "茨城"), localKarate("水戸道場", "茨城")],
    faqs: STD_FAQS("茨城県"),
    blogs: STD_BLOGS,
    otherPrefs: [
      { slug: "tokyo", name: "東京都" }, { slug: "saitama", name: "埼玉県" },
      { slug: "chiba", name: "千葉県" }, { slug: "tochigi", name: "栃木県" },
    ],
  },
  ishikawa: {
    name: "石川県",
    heroText: "金沢を中心とした石川県の子ども空手教室・道場",
    areas: [
      { slug: "kanazawa", name: "金沢市" }, { slug: "nonoichi", name: "野々市市" },
      { slug: "uchinada", name: "内灘町" },
    ],
    schools: [KYOKUSHIN, SHOTOKAN, ZENKOKU, localKarate("金沢空手道場", "金沢"), localKarate("石川武道館", "石川")],
    faqs: STD_FAQS("石川県"),
    blogs: STD_BLOGS,
    otherPrefs: [
      { slug: "toyama", name: "富山県" }, { slug: "fukui", name: "福井県" },
      { slug: "niigata", name: "新潟県" }, { slug: "nagano", name: "長野県" },
    ],
  },
  kyoto: {
    name: "京都府",
    heroText: "古都・京都の子ども向け空手教室・道場",
    areas: [
      { slug: "kyoto-city", name: "京都市" },
    ],
    schools: [KYOKUSHIN, SHOTOKAN, SEIDO, ZENKOKU, localKarate("京都空手道場", "京都"), localKarate("古都武道館", "京都")],
    faqs: STD_FAQS("京都府"),
    blogs: STD_BLOGS,
    otherPrefs: [
      { slug: "osaka", name: "大阪府" }, { slug: "hyogo", name: "兵庫県" },
      { slug: "shiga", name: "滋賀県" }, { slug: "nara", name: "奈良県" },
    ],
  },
  nagano: {
    name: "長野県",
    heroText: "長野県の子ども向け空手教室・道場",
    areas: [
      { slug: "nagano-city", name: "長野市" },
    ],
    schools: [KYOKUSHIN, SHOTOKAN, ZENKOKU, localKarate("長野空手道場", "長野"), localKarate("信州道場", "長野")],
    faqs: STD_FAQS("長野県"),
    blogs: STD_BLOGS,
    otherPrefs: [
      { slug: "tokyo", name: "東京都" }, { slug: "aichi", name: "愛知県" },
      { slug: "gifu", name: "岐阜県" }, { slug: "niigata", name: "新潟県" },
    ],
  },
  shiga: {
    name: "滋賀県",
    heroText: "琵琶湖を擁する滋賀県の子ども空手教室・道場",
    areas: [
      { slug: "kusatsu", name: "草津市" }, { slug: "otsu", name: "大津市" },
    ],
    schools: [KYOKUSHIN, SHOTOKAN, ZENKOKU, localKarate("滋賀空手道場", "滋賀"), localKarate("びわこ道場", "滋賀")],
    faqs: STD_FAQS("滋賀県"),
    blogs: STD_BLOGS,
    otherPrefs: [
      { slug: "osaka", name: "大阪府" }, { slug: "kyoto", name: "京都府" },
      { slug: "hyogo", name: "兵庫県" }, { slug: "mie", name: "三重県" },
    ],
  },
  wakayama: {
    name: "和歌山県",
    heroText: "和歌山県の子ども向け空手教室・道場",
    areas: [
      { slug: "wakayama-city", name: "和歌山市" },
    ],
    schools: [KYOKUSHIN, SHOTOKAN, ZENKOKU, localKarate("和歌山空手道場", "和歌山"), localKarate("紀州道場", "和歌山")],
    faqs: STD_FAQS("和歌山県"),
    blogs: STD_BLOGS,
    otherPrefs: [
      { slug: "osaka", name: "大阪府" }, { slug: "hyogo", name: "兵庫県" },
      { slug: "nara", name: "奈良県" }, { slug: "mie", name: "三重県" },
    ],
  },
  saitama: {
    name: "埼玉県",
    heroText: "埼玉県の子ども向け空手教室・道場",
    areas: [
      { slug: "kawaguchi", name: "川口市" }, { slug: "koshigaya", name: "越谷市" },
      { slug: "minami", name: "南区" }, { slug: "urawa", name: "浦和区" },
    ],
    schools: [KYOKUSHIN, SHOTOKAN, SEIDO, ZENKOKU, localKarate("埼玉空手道場", "埼玉"), localKarate("武蔵道場", "埼玉")],
    faqs: STD_FAQS("埼玉県"),
    blogs: STD_BLOGS,
    otherPrefs: [
      { slug: "tokyo", name: "東京都" }, { slug: "kanagawa", name: "神奈川県" },
      { slug: "chiba", name: "千葉県" }, { slug: "gunma", name: "群馬県" },
    ],
  },
  chiba: {
    name: "千葉県",
    heroText: "千葉県の子ども向け空手教室・道場",
    areas: [
      { slug: "chiba-city", name: "千葉市" }, { slug: "kashiwa", name: "柏市" },
      { slug: "matsudo", name: "松戸市" },
    ],
    schools: [KYOKUSHIN, SHOTOKAN, SEIDO, ZENKOKU, localKarate("千葉空手道場", "千葉"), localKarate("房総道場", "千葉")],
    faqs: STD_FAQS("千葉県"),
    blogs: STD_BLOGS,
    otherPrefs: [
      { slug: "tokyo", name: "東京都" }, { slug: "saitama", name: "埼玉県" },
      { slug: "kanagawa", name: "神奈川県" }, { slug: "ibaraki", name: "茨城県" },
    ],
  },
  fukuoka: {
    name: "福岡県",
    heroText: "九州最大の都市・福岡の子ども空手教室・道場",
    areas: [],
    schools: [KYOKUSHIN, SHOTOKAN, SEIDO, ZENKOKU, localKarate("福岡空手道場", "福岡"), localKarate("九州道場", "福岡")],
    faqs: STD_FAQS("福岡県"),
    blogs: STD_BLOGS,
    otherPrefs: [
      { slug: "saga", name: "佐賀県" }, { slug: "nagasaki", name: "長崎県" },
      { slug: "kumamoto", name: "熊本県" }, { slug: "oita", name: "大分県" },
    ],
  },
  hokkaido: {
    name: "北海道",
    heroText: "北海道の子ども向け空手教室・道場",
    areas: [],
    schools: [KYOKUSHIN, SHOTOKAN, ZENKOKU, localKarate("札幌空手道場", "札幌"), localKarate("北海道武道館", "北海道")],
    faqs: STD_FAQS("北海道"),
    blogs: STD_BLOGS,
    otherPrefs: [
      { slug: "aomori", name: "青森県" }, { slug: "iwate", name: "岩手県" },
      { slug: "miyagi", name: "宮城県" }, { slug: "akita", name: "秋田県" },
    ],
  },
  miyagi: {
    name: "宮城県",
    heroText: "仙台を擁する宮城県の子ども空手教室・道場",
    areas: [],
    schools: [KYOKUSHIN, SHOTOKAN, ZENKOKU, localKarate("仙台空手道場", "仙台"), localKarate("宮城武道館", "宮城")],
    faqs: STD_FAQS("宮城県"),
    blogs: STD_BLOGS,
    otherPrefs: [
      { slug: "fukushima", name: "福島県" }, { slug: "yamagata", name: "山形県" },
      { slug: "iwate", name: "岩手県" }, { slug: "akita", name: "秋田県" },
    ],
  },
  hiroshima: {
    name: "広島県",
    heroText: "広島県の子ども向け空手教室・道場",
    areas: [],
    schools: [KYOKUSHIN, SHOTOKAN, ZENKOKU, localKarate("広島空手道場", "広島"), localKarate("中国武道館", "広島")],
    faqs: STD_FAQS("広島県"),
    blogs: STD_BLOGS,
    otherPrefs: [
      { slug: "okayama", name: "岡山県" }, { slug: "yamaguchi", name: "山口県" },
      { slug: "shimane", name: "島根県" }, { slug: "tottori", name: "鳥取県" },
    ],
  },
  shizuoka: {
    name: "静岡県",
    heroText: "静岡県の子ども向け空手教室・道場",
    areas: [],
    schools: [KYOKUSHIN, SHOTOKAN, ZENKOKU, localKarate("静岡空手道場", "静岡"), localKarate("富士道場", "静岡")],
    faqs: STD_FAQS("静岡県"),
    blogs: STD_BLOGS,
    otherPrefs: [
      { slug: "aichi", name: "愛知県" }, { slug: "kanagawa", name: "神奈川県" },
      { slug: "nagano", name: "長野県" }, { slug: "yamanashi", name: "山梨県" },
    ],
  },
  okayama: {
    name: "岡山県",
    heroText: "岡山県の子ども向け空手教室・道場",
    areas: [],
    schools: [KYOKUSHIN, SHOTOKAN, ZENKOKU, localKarate("岡山空手道場", "岡山"), localKarate("吉備道場", "岡山")],
    faqs: STD_FAQS("岡山県"),
    blogs: STD_BLOGS,
    otherPrefs: [
      { slug: "hiroshima", name: "広島県" }, { slug: "tottori", name: "鳥取県" },
      { slug: "hyogo", name: "兵庫県" }, { slug: "kagawa", name: "香川県" },
    ],
  },
  niigata: {
    name: "新潟県",
    heroText: "新潟県の子ども向け空手教室・道場",
    areas: [],
    schools: [KYOKUSHIN, SHOTOKAN, ZENKOKU, localKarate("新潟空手道場", "新潟"), localKarate("越後道場", "新潟")],
    faqs: STD_FAQS("新潟県"),
    blogs: STD_BLOGS,
    otherPrefs: [
      { slug: "nagano", name: "長野県" }, { slug: "fukushima", name: "福島県" },
      { slug: "yamagata", name: "山形県" }, { slug: "toyama", name: "富山県" },
    ],
  },
  tochigi: {
    name: "栃木県",
    heroText: "栃木県の子ども向け空手教室・道場",
    areas: [],
    schools: [KYOKUSHIN, SHOTOKAN, ZENKOKU, localKarate("宇都宮空手道場", "宇都宮"), localKarate("栃木武道館", "栃木")],
    faqs: STD_FAQS("栃木県"),
    blogs: STD_BLOGS,
    otherPrefs: [
      { slug: "tokyo", name: "東京都" }, { slug: "saitama", name: "埼玉県" },
      { slug: "gunma", name: "群馬県" }, { slug: "ibaraki", name: "茨城県" },
    ],
  },
  gunma: {
    name: "群馬県",
    heroText: "群馬県の子ども向け空手教室・道場",
    areas: [],
    schools: [KYOKUSHIN, SHOTOKAN, ZENKOKU, localKarate("前橋空手道場", "前橋"), localKarate("群馬武道館", "群馬")],
    faqs: STD_FAQS("群馬県"),
    blogs: STD_BLOGS,
    otherPrefs: [
      { slug: "tokyo", name: "東京都" }, { slug: "saitama", name: "埼玉県" },
      { slug: "tochigi", name: "栃木県" }, { slug: "nagano", name: "長野県" },
    ],
  },
  mie: {
    name: "三重県",
    heroText: "三重県の子ども向け空手教室・道場",
    areas: [],
    schools: [KYOKUSHIN, SHOTOKAN, ZENKOKU, localKarate("三重空手道場", "三重"), localKarate("伊勢道場", "伊勢")],
    faqs: STD_FAQS("三重県"),
    blogs: STD_BLOGS,
    otherPrefs: [
      { slug: "aichi", name: "愛知県" }, { slug: "osaka", name: "大阪府" },
      { slug: "kyoto", name: "京都府" }, { slug: "nara", name: "奈良県" },
    ],
  },
  nara: {
    name: "奈良県",
    heroText: "奈良県の子ども向け空手教室・道場",
    areas: [],
    schools: [KYOKUSHIN, SHOTOKAN, ZENKOKU, localKarate("奈良空手道場", "奈良"), localKarate("大和道場", "奈良")],
    faqs: STD_FAQS("奈良県"),
    blogs: STD_BLOGS,
    otherPrefs: [
      { slug: "osaka", name: "大阪府" }, { slug: "kyoto", name: "京都府" },
      { slug: "hyogo", name: "兵庫県" }, { slug: "wakayama", name: "和歌山県" },
    ],
  },
  fukui: {
    name: "福井県",
    heroText: "福井県の子ども向け空手教室・道場",
    areas: [],
    schools: [KYOKUSHIN, SHOTOKAN, ZENKOKU, localKarate("福井空手道場", "福井"), localKarate("越前道場", "福井")],
    faqs: STD_FAQS("福井県"),
    blogs: STD_BLOGS,
    otherPrefs: [
      { slug: "ishikawa", name: "石川県" }, { slug: "toyama", name: "富山県" },
      { slug: "gifu", name: "岐阜県" }, { slug: "kyoto", name: "京都府" },
    ],
  },
  toyama: {
    name: "富山県",
    heroText: "富山県の子ども向け空手教室・道場",
    areas: [],
    schools: [KYOKUSHIN, SHOTOKAN, ZENKOKU, localKarate("富山空手道場", "富山"), localKarate("立山道場", "富山")],
    faqs: STD_FAQS("富山県"),
    blogs: STD_BLOGS,
    otherPrefs: [
      { slug: "ishikawa", name: "石川県" }, { slug: "fukui", name: "福井県" },
      { slug: "niigata", name: "新潟県" }, { slug: "nagano", name: "長野県" },
    ],
  },
  yamanashi: {
    name: "山梨県",
    heroText: "山梨県の子ども向け空手教室・道場",
    areas: [],
    schools: [KYOKUSHIN, SHOTOKAN, ZENKOKU, localKarate("甲府空手道場", "甲府"), localKarate("富士山麓道場", "山梨")],
    faqs: STD_FAQS("山梨県"),
    blogs: STD_BLOGS,
    otherPrefs: [
      { slug: "tokyo", name: "東京都" }, { slug: "kanagawa", name: "神奈川県" },
      { slug: "shizuoka", name: "静岡県" }, { slug: "nagano", name: "長野県" },
    ],
  },
  tottori: {
    name: "鳥取県",
    heroText: "鳥取県の子ども向け空手教室・道場",
    areas: [],
    schools: [KYOKUSHIN, SHOTOKAN, ZENKOKU, localKarate("鳥取空手道場", "鳥取"), localKarate("因幡道場", "鳥取")],
    faqs: STD_FAQS("鳥取県"),
    blogs: STD_BLOGS,
    otherPrefs: [
      { slug: "shimane", name: "島根県" }, { slug: "okayama", name: "岡山県" },
      { slug: "hiroshima", name: "広島県" }, { slug: "hyogo", name: "兵庫県" },
    ],
  },
  shimane: {
    name: "島根県",
    heroText: "島根県の子ども向け空手教室・道場",
    areas: [],
    schools: [KYOKUSHIN, SHOTOKAN, ZENKOKU, localKarate("松江空手道場", "松江"), localKarate("出雲道場", "島根")],
    faqs: STD_FAQS("島根県"),
    blogs: STD_BLOGS,
    otherPrefs: [
      { slug: "tottori", name: "鳥取県" }, { slug: "hiroshima", name: "広島県" },
      { slug: "yamaguchi", name: "山口県" }, { slug: "okayama", name: "岡山県" },
    ],
  },
  kochi: {
    name: "高知県",
    heroText: "高知県の子ども向け空手教室・道場",
    areas: [],
    schools: [KYOKUSHIN, SHOTOKAN, ZENKOKU, localKarate("高知空手道場", "高知"), localKarate("土佐道場", "高知")],
    faqs: STD_FAQS("高知県"),
    blogs: STD_BLOGS,
    otherPrefs: [
      { slug: "tokushima", name: "徳島県" }, { slug: "ehime", name: "愛媛県" },
      { slug: "kagawa", name: "香川県" }, { slug: "hiroshima", name: "広島県" },
    ],
  },
  tokushima: {
    name: "徳島県",
    heroText: "徳島県の子ども向け空手教室・道場",
    areas: [],
    schools: [KYOKUSHIN, SHOTOKAN, ZENKOKU, localKarate("徳島空手道場", "徳島"), localKarate("阿波道場", "徳島")],
    faqs: STD_FAQS("徳島県"),
    blogs: STD_BLOGS,
    otherPrefs: [
      { slug: "kagawa", name: "香川県" }, { slug: "ehime", name: "愛媛県" },
      { slug: "kochi", name: "高知県" }, { slug: "hyogo", name: "兵庫県" },
    ],
  },
  kagawa: {
    name: "香川県",
    heroText: "香川県の子ども向け空手教室・道場",
    areas: [],
    schools: [KYOKUSHIN, SHOTOKAN, ZENKOKU, localKarate("高松空手道場", "高松"), localKarate("さぬき道場", "香川")],
    faqs: STD_FAQS("香川県"),
    blogs: STD_BLOGS,
    otherPrefs: [
      { slug: "tokushima", name: "徳島県" }, { slug: "ehime", name: "愛媛県" },
      { slug: "kochi", name: "高知県" }, { slug: "okayama", name: "岡山県" },
    ],
  },
  saga: {
    name: "佐賀県",
    heroText: "佐賀県の子ども向け空手教室・道場",
    areas: [],
    schools: [KYOKUSHIN, SHOTOKAN, ZENKOKU, localKarate("佐賀空手道場", "佐賀"), localKarate("有明道場", "佐賀")],
    faqs: STD_FAQS("佐賀県"),
    blogs: STD_BLOGS,
    otherPrefs: [
      { slug: "fukuoka", name: "福岡県" }, { slug: "nagasaki", name: "長崎県" },
      { slug: "kumamoto", name: "熊本県" }, { slug: "oita", name: "大分県" },
    ],
  },
  oita: {
    name: "大分県",
    heroText: "大分県の子ども向け空手教室・道場",
    areas: [],
    schools: [KYOKUSHIN, SHOTOKAN, ZENKOKU, localKarate("大分空手道場", "大分"), localKarate("豊後道場", "大分")],
    faqs: STD_FAQS("大分県"),
    blogs: STD_BLOGS,
    otherPrefs: [
      { slug: "fukuoka", name: "福岡県" }, { slug: "kumamoto", name: "熊本県" },
      { slug: "miyazaki", name: "宮崎県" }, { slug: "ehime", name: "愛媛県" },
    ],
  },
  miyazaki: {
    name: "宮崎県",
    heroText: "宮崎県の子ども向け空手教室・道場",
    areas: [],
    schools: [KYOKUSHIN, SHOTOKAN, ZENKOKU, localKarate("宮崎空手道場", "宮崎"), localKarate("日向道場", "宮崎")],
    faqs: STD_FAQS("宮崎県"),
    blogs: STD_BLOGS,
    otherPrefs: [
      { slug: "fukuoka", name: "福岡県" }, { slug: "oita", name: "大分県" },
      { slug: "kumamoto", name: "熊本県" }, { slug: "kagoshima", name: "鹿児島県" },
    ],
  },
  okinawa: {
    name: "沖縄県",
    heroText: "空手発祥の地・沖縄の子ども空手教室・道場",
    areas: [],
    schools: [KYOKUSHIN, SHOTOKAN, SEIDO, SHITORYU, localKarate("那覇空手道場", "那覇"), localKarate("琉球武道館", "沖縄")],
    faqs: STD_FAQS("沖縄県"),
    blogs: STD_BLOGS,
    otherPrefs: [
      { slug: "kagoshima", name: "鹿児島県" }, { slug: "fukuoka", name: "福岡県" },
      { slug: "miyazaki", name: "宮崎県" }, { slug: "kumamoto", name: "熊本県" },
    ],
  },
  kumamoto: {
    name: "熊本県",
    heroText: "熊本県の子ども向け空手教室・道場",
    areas: [],
    schools: [KYOKUSHIN, SHOTOKAN, ZENKOKU, localKarate("熊本空手道場", "熊本"), localKarate("火の国道場", "熊本")],
    faqs: STD_FAQS("熊本県"),
    blogs: STD_BLOGS,
    otherPrefs: [
      { slug: "fukuoka", name: "福岡県" }, { slug: "saga", name: "佐賀県" },
      { slug: "nagasaki", name: "長崎県" }, { slug: "oita", name: "大分県" },
    ],
  },
  kagoshima: {
    name: "鹿児島県",
    heroText: "鹿児島県の子ども向け空手教室・道場",
    areas: [],
    schools: [KYOKUSHIN, SHOTOKAN, ZENKOKU, localKarate("鹿児島空手道場", "鹿児島"), localKarate("薩摩道場", "鹿児島")],
    faqs: STD_FAQS("鹿児島県"),
    blogs: STD_BLOGS,
    otherPrefs: [
      { slug: "fukuoka", name: "福岡県" }, { slug: "kumamoto", name: "熊本県" },
      { slug: "miyazaki", name: "宮崎県" }, { slug: "okinawa", name: "沖縄県" },
    ],
  },
  nagasaki: {
    name: "長崎県",
    heroText: "長崎県の子ども向け空手教室・道場",
    areas: [],
    schools: [KYOKUSHIN, SHOTOKAN, ZENKOKU, localKarate("長崎空手道場", "長崎"), localKarate("西海道場", "長崎")],
    faqs: STD_FAQS("長崎県"),
    blogs: STD_BLOGS,
    otherPrefs: [
      { slug: "fukuoka", name: "福岡県" }, { slug: "saga", name: "佐賀県" },
      { slug: "kumamoto", name: "熊本県" }, { slug: "oita", name: "大分県" },
    ],
  },
  ehime: {
    name: "愛媛県",
    heroText: "愛媛県の子ども向け空手教室・道場",
    areas: [],
    schools: [KYOKUSHIN, SHOTOKAN, ZENKOKU, localKarate("松山空手道場", "松山"), localKarate("伊予道場", "愛媛")],
    faqs: STD_FAQS("愛媛県"),
    blogs: STD_BLOGS,
    otherPrefs: [
      { slug: "kagawa", name: "香川県" }, { slug: "tokushima", name: "徳島県" },
      { slug: "kochi", name: "高知県" }, { slug: "hiroshima", name: "広島県" },
    ],
  },
  yamaguchi: {
    name: "山口県",
    heroText: "山口県の子ども向け空手教室・道場",
    areas: [],
    schools: [KYOKUSHIN, SHOTOKAN, ZENKOKU, localKarate("山口空手道場", "山口"), localKarate("長門道場", "山口")],
    faqs: STD_FAQS("山口県"),
    blogs: STD_BLOGS,
    otherPrefs: [
      { slug: "hiroshima", name: "広島県" }, { slug: "shimane", name: "島根県" },
      { slug: "fukuoka", name: "福岡県" }, { slug: "tottori", name: "鳥取県" },
    ],
  },
  fukushima: {
    name: "福島県",
    heroText: "福島県の子ども向け空手教室・道場",
    areas: [],
    schools: [KYOKUSHIN, SHOTOKAN, ZENKOKU, localKarate("郡山空手道場", "郡山"), localKarate("会津道場", "福島")],
    faqs: STD_FAQS("福島県"),
    blogs: STD_BLOGS,
    otherPrefs: [
      { slug: "miyagi", name: "宮城県" }, { slug: "yamagata", name: "山形県" },
      { slug: "ibaraki", name: "茨城県" }, { slug: "niigata", name: "新潟県" },
    ],
  },
  akita: {
    name: "秋田県",
    heroText: "秋田県の子ども向け空手教室・道場",
    areas: [],
    schools: [KYOKUSHIN, SHOTOKAN, ZENKOKU, localKarate("秋田空手道場", "秋田"), localKarate("なまはげ道場", "秋田")],
    faqs: STD_FAQS("秋田県"),
    blogs: STD_BLOGS,
    otherPrefs: [
      { slug: "miyagi", name: "宮城県" }, { slug: "iwate", name: "岩手県" },
      { slug: "yamagata", name: "山形県" }, { slug: "aomori", name: "青森県" },
    ],
  },
  yamagata: {
    name: "山形県",
    heroText: "山形県の子ども向け空手教室・道場",
    areas: [],
    schools: [KYOKUSHIN, SHOTOKAN, ZENKOKU, localKarate("山形空手道場", "山形"), localKarate("最上川道場", "山形")],
    faqs: STD_FAQS("山形県"),
    blogs: STD_BLOGS,
    otherPrefs: [
      { slug: "miyagi", name: "宮城県" }, { slug: "akita", name: "秋田県" },
      { slug: "fukushima", name: "福島県" }, { slug: "niigata", name: "新潟県" },
    ],
  },
  iwate: {
    name: "岩手県",
    heroText: "岩手県の子ども向け空手教室・道場",
    areas: [],
    schools: [KYOKUSHIN, SHOTOKAN, ZENKOKU, localKarate("盛岡空手道場", "盛岡"), localKarate("南部道場", "岩手")],
    faqs: STD_FAQS("岩手県"),
    blogs: STD_BLOGS,
    otherPrefs: [
      { slug: "miyagi", name: "宮城県" }, { slug: "akita", name: "秋田県" },
      { slug: "aomori", name: "青森県" }, { slug: "fukushima", name: "福島県" },
    ],
  },
  aomori: {
    name: "青森県",
    heroText: "青森県の子ども向け空手教室・道場",
    areas: [],
    schools: [KYOKUSHIN, SHOTOKAN, ZENKOKU, localKarate("青森空手道場", "青森"), localKarate("津軽道場", "青森")],
    faqs: STD_FAQS("青森県"),
    blogs: STD_BLOGS,
    otherPrefs: [
      { slug: "iwate", name: "岩手県" }, { slug: "akita", name: "秋田県" },
      { slug: "miyagi", name: "宮城県" }, { slug: "hokkaido", name: "北海道" },
    ],
  },
};

// ────────────────────────────────────────────
// KARATE_AREAS: エリア別データ
// ────────────────────────────────────────────

function areaSchools(areaName, prefName, s1, s2, s3, s4) {
  return [
    { ...s1, desc: s1.desc },
    { ...s2, desc: s2.desc },
    { ...s3, desc: s3.desc },
    { ...(s4 || KYOKUSHIN), desc: (s4 || KYOKUSHIN).desc },
    localKarate(`${areaName}空手道場`, areaName),
  ];
}

export const KARATE_AREAS = {
  // ── 大阪府 ──
  "osaka/osaka-city": { name: "大阪市", prefName: "大阪府", prefSlug: "osaka", schools: areaSchools("大阪市", "大阪府", KYOKUSHIN, SEIDO, SHOTOKAN, ZENKOKU) },
  "osaka/minoh": { name: "箕面市", prefName: "大阪府", prefSlug: "osaka", schools: areaSchools("箕面市", "大阪府", KYOKUSHIN, SHOTOKAN, ZENKOKU, localKarate("みのお道場", "箕面")) },
  "osaka/moriguchi": { name: "守口市", prefName: "大阪府", prefSlug: "osaka", schools: areaSchools("守口市", "大阪府", KYOKUSHIN, SHOTOKAN, ZENKOKU, localKarate("守口道場", "守口")) },
  "osaka/sakai": { name: "堺市", prefName: "大阪府", prefSlug: "osaka", schools: areaSchools("堺市", "大阪府", KYOKUSHIN, SEIDO, SHOTOKAN, ZENKOKU) },
  "osaka/suita": { name: "吹田市", prefName: "大阪府", prefSlug: "osaka", schools: areaSchools("吹田市", "大阪府", KYOKUSHIN, SHOTOKAN, SEIDO, ZENKOKU) },
  "osaka/takatsuki": { name: "高槻市", prefName: "大阪府", prefSlug: "osaka", schools: areaSchools("高槻市", "大阪府", KYOKUSHIN, SHOTOKAN, ZENKOKU, localKarate("高槻道場", "高槻")) },
  "osaka/toyonaka": { name: "豊中市", prefName: "大阪府", prefSlug: "osaka", schools: areaSchools("豊中市", "大阪府", KYOKUSHIN, SEIDO, SHOTOKAN, ZENKOKU) },
  "osaka/ibaraki": { name: "茨木市", prefName: "大阪府", prefSlug: "osaka", schools: areaSchools("茨木市", "大阪府", KYOKUSHIN, SHOTOKAN, ZENKOKU, localKarate("茨木道場", "茨木")) },
  // ── 愛知県 ──
  "aichi/anjo": { name: "安城市", prefName: "愛知県", prefSlug: "aichi", schools: areaSchools("安城市", "愛知県", KYOKUSHIN, SHOTOKAN, ZENKOKU, localKarate("安城道場", "安城")) },
  "aichi/chikusa": { name: "千種区", prefName: "愛知県", prefSlug: "aichi", schools: areaSchools("千種区", "愛知県", KYOKUSHIN, SHOTOKAN, ZENKOKU, localKarate("千種道場", "千種")) },
  "aichi/meito": { name: "名東区", prefName: "愛知県", prefSlug: "aichi", schools: areaSchools("名東区", "愛知県", KYOKUSHIN, SHOTOKAN, ZENKOKU, localKarate("名東道場", "名東")) },
  "aichi/midori": { name: "緑区", prefName: "愛知県", prefSlug: "aichi", schools: areaSchools("緑区", "愛知県", KYOKUSHIN, SHOTOKAN, ZENKOKU, localKarate("緑道場", "緑区")) },
  "aichi/moriyama": { name: "守山区", prefName: "愛知県", prefSlug: "aichi", schools: areaSchools("守山区", "愛知県", KYOKUSHIN, SHOTOKAN, ZENKOKU, localKarate("守山道場", "守山")) },
  "aichi/nisshin": { name: "日進市", prefName: "愛知県", prefSlug: "aichi", schools: areaSchools("日進市", "愛知県", KYOKUSHIN, SHOTOKAN, ZENKOKU, localKarate("日進道場", "日進")) },
  "aichi/owariasahi": { name: "尾張旭市", prefName: "愛知県", prefSlug: "aichi", schools: areaSchools("尾張旭市", "愛知県", KYOKUSHIN, SHOTOKAN, ZENKOKU, localKarate("尾張旭道場", "尾張旭")) },
  "aichi/tenpaku": { name: "天白区", prefName: "愛知県", prefSlug: "aichi", schools: areaSchools("天白区", "愛知県", KYOKUSHIN, SHOTOKAN, ZENKOKU, localKarate("天白道場", "天白")) },
  "aichi/toyota": { name: "豊田市", prefName: "愛知県", prefSlug: "aichi", schools: areaSchools("豊田市", "愛知県", KYOKUSHIN, SHOTOKAN, ZENKOKU, localKarate("豊田道場", "豊田")) },
  // ── 千葉県 ──
  "chiba/chiba-city": { name: "千葉市", prefName: "千葉県", prefSlug: "chiba", schools: areaSchools("千葉市", "千葉県", KYOKUSHIN, SHOTOKAN, SEIDO, ZENKOKU) },
  "chiba/kashiwa": { name: "柏市", prefName: "千葉県", prefSlug: "chiba", schools: areaSchools("柏市", "千葉県", KYOKUSHIN, SHOTOKAN, ZENKOKU, localKarate("柏道場", "柏")) },
  "chiba/matsudo": { name: "松戸市", prefName: "千葉県", prefSlug: "chiba", schools: areaSchools("松戸市", "千葉県", KYOKUSHIN, SHOTOKAN, ZENKOKU, localKarate("松戸道場", "松戸")) },
  // ── 岐阜県 ──
  "gifu/gifu-city": { name: "岐阜市", prefName: "岐阜県", prefSlug: "gifu", schools: areaSchools("岐阜市", "岐阜県", KYOKUSHIN, SHOTOKAN, ZENKOKU, localKarate("岐阜道場", "岐阜")) },
  "gifu/kani": { name: "可児市", prefName: "岐阜県", prefSlug: "gifu", schools: areaSchools("可児市", "岐阜県", KYOKUSHIN, SHOTOKAN, ZENKOKU, localKarate("可児道場", "可児")) },
  "gifu/minokamo": { name: "美濃加茂市", prefName: "岐阜県", prefSlug: "gifu", schools: areaSchools("美濃加茂市", "岐阜県", KYOKUSHIN, SHOTOKAN, ZENKOKU, localKarate("美濃加茂道場", "美濃加茂")) },
  "gifu/tajimi": { name: "多治見市", prefName: "岐阜県", prefSlug: "gifu", schools: areaSchools("多治見市", "岐阜県", KYOKUSHIN, SHOTOKAN, ZENKOKU, localKarate("多治見道場", "多治見")) },
  // ── 兵庫県 ──
  "hyogo/nishinomiya": { name: "西宮市", prefName: "兵庫県", prefSlug: "hyogo", schools: areaSchools("西宮市", "兵庫県", KYOKUSHIN, SHOTOKAN, SEIDO, ZENKOKU) },
  // ── 茨城県 ──
  "ibaraki/hitachi": { name: "日立市", prefName: "茨城県", prefSlug: "ibaraki", schools: areaSchools("日立市", "茨城県", KYOKUSHIN, SHOTOKAN, ZENKOKU, localKarate("日立道場", "日立")) },
  "ibaraki/hitachinaka": { name: "ひたちなか市", prefName: "茨城県", prefSlug: "ibaraki", schools: areaSchools("ひたちなか市", "茨城県", KYOKUSHIN, SHOTOKAN, ZENKOKU, localKarate("ひたちなか道場", "ひたちなか")) },
  "ibaraki/mito": { name: "水戸市", prefName: "茨城県", prefSlug: "ibaraki", schools: areaSchools("水戸市", "茨城県", KYOKUSHIN, SHOTOKAN, SEIDO, ZENKOKU) },
  "ibaraki/tsuchiura": { name: "土浦市", prefName: "茨城県", prefSlug: "ibaraki", schools: areaSchools("土浦市", "茨城県", KYOKUSHIN, SHOTOKAN, ZENKOKU, localKarate("土浦道場", "土浦")) },
  "ibaraki/tsukuba": { name: "つくば市", prefName: "茨城県", prefSlug: "ibaraki", schools: areaSchools("つくば市", "茨城県", KYOKUSHIN, SHOTOKAN, ZENKOKU, localKarate("つくば道場", "つくば")) },
  // ── 石川県 ──
  "ishikawa/kanazawa": { name: "金沢市", prefName: "石川県", prefSlug: "ishikawa", schools: areaSchools("金沢市", "石川県", KYOKUSHIN, SHOTOKAN, ZENKOKU, localKarate("金沢道場", "金沢")) },
  "ishikawa/nonoichi": { name: "野々市市", prefName: "石川県", prefSlug: "ishikawa", schools: areaSchools("野々市市", "石川県", KYOKUSHIN, SHOTOKAN, ZENKOKU, localKarate("野々市道場", "野々市")) },
  "ishikawa/uchinada": { name: "内灘町", prefName: "石川県", prefSlug: "ishikawa", schools: areaSchools("内灘町", "石川県", KYOKUSHIN, SHOTOKAN, ZENKOKU, localKarate("内灘道場", "内灘")) },
  // ── 神奈川県 ──
  "kanagawa/aoba": { name: "青葉区", prefName: "神奈川県", prefSlug: "kanagawa", schools: areaSchools("青葉区", "神奈川県", KYOKUSHIN, SHOTOKAN, SEIDO, ZENKOKU) },
  "kanagawa/atsugi": { name: "厚木市", prefName: "神奈川県", prefSlug: "kanagawa", schools: areaSchools("厚木市", "神奈川県", KYOKUSHIN, SHOTOKAN, ZENKOKU, localKarate("厚木道場", "厚木")) },
  "kanagawa/ebina": { name: "海老名市", prefName: "神奈川県", prefSlug: "kanagawa", schools: areaSchools("海老名市", "神奈川県", KYOKUSHIN, SHOTOKAN, ZENKOKU, localKarate("海老名道場", "海老名")) },
  "kanagawa/fujisawa": { name: "藤沢市", prefName: "神奈川県", prefSlug: "kanagawa", schools: areaSchools("藤沢市", "神奈川県", KYOKUSHIN, SHOTOKAN, SEIDO, ZENKOKU) },
  "kanagawa/kohoku": { name: "港北区", prefName: "神奈川県", prefSlug: "kanagawa", schools: areaSchools("港北区", "神奈川県", KYOKUSHIN, SHOTOKAN, SEIDO, ZENKOKU) },
  "kanagawa/midori": { name: "緑区", prefName: "神奈川県", prefSlug: "kanagawa", schools: areaSchools("緑区", "神奈川県", KYOKUSHIN, SHOTOKAN, ZENKOKU, localKarate("緑区道場", "緑区")) },
  "kanagawa/nakahara": { name: "中原区", prefName: "神奈川県", prefSlug: "kanagawa", schools: areaSchools("中原区", "神奈川県", KYOKUSHIN, SHOTOKAN, ZENKOKU, localKarate("中原道場", "中原")) },
  "kanagawa/nakahara-shinjou": { name: "中原区（新城）", prefName: "神奈川県", prefSlug: "kanagawa", schools: areaSchools("新城", "神奈川県", KYOKUSHIN, SHOTOKAN, ZENKOKU, localKarate("新城道場", "新城")) },
  "kanagawa/sagamihara": { name: "相模原市", prefName: "神奈川県", prefSlug: "kanagawa", schools: areaSchools("相模原市", "神奈川県", KYOKUSHIN, SHOTOKAN, ZENKOKU, localKarate("相模原道場", "相模原")) },
  "kanagawa/takatsu": { name: "高津区", prefName: "神奈川県", prefSlug: "kanagawa", schools: areaSchools("高津区", "神奈川県", KYOKUSHIN, SHOTOKAN, ZENKOKU, localKarate("高津道場", "高津")) },
  "kanagawa/tsuzuki": { name: "都筑区", prefName: "神奈川県", prefSlug: "kanagawa", schools: areaSchools("都筑区", "神奈川県", KYOKUSHIN, SHOTOKAN, ZENKOKU, localKarate("都筑道場", "都筑")) },
  "kanagawa/yamato": { name: "大和市", prefName: "神奈川県", prefSlug: "kanagawa", schools: areaSchools("大和市", "神奈川県", KYOKUSHIN, SHOTOKAN, ZENKOKU, localKarate("大和道場", "大和")) },
  "kanagawa/yokosuka": { name: "横須賀市", prefName: "神奈川県", prefSlug: "kanagawa", schools: areaSchools("横須賀市", "神奈川県", KYOKUSHIN, SHOTOKAN, ZENKOKU, localKarate("横須賀道場", "横須賀")) },
  "kanagawa/zushi": { name: "逗子市", prefName: "神奈川県", prefSlug: "kanagawa", schools: areaSchools("逗子市", "神奈川県", KYOKUSHIN, SHOTOKAN, ZENKOKU, localKarate("逗子道場", "逗子")) },
  // ── 京都府 ──
  "kyoto/kyoto-city": { name: "京都市", prefName: "京都府", prefSlug: "kyoto", schools: areaSchools("京都市", "京都府", KYOKUSHIN, SHOTOKAN, SEIDO, ZENKOKU) },
  // ── 長野県 ──
  "nagano/nagano-city": { name: "長野市", prefName: "長野県", prefSlug: "nagano", schools: areaSchools("長野市", "長野県", KYOKUSHIN, SHOTOKAN, ZENKOKU, localKarate("長野道場", "長野")) },
  // ── 埼玉県 ──
  "saitama/kawaguchi": { name: "川口市", prefName: "埼玉県", prefSlug: "saitama", schools: areaSchools("川口市", "埼玉県", KYOKUSHIN, SHOTOKAN, SEIDO, ZENKOKU) },
  "saitama/koshigaya": { name: "越谷市", prefName: "埼玉県", prefSlug: "saitama", schools: areaSchools("越谷市", "埼玉県", KYOKUSHIN, SHOTOKAN, ZENKOKU, localKarate("越谷道場", "越谷")) },
  "saitama/minami": { name: "南区", prefName: "埼玉県", prefSlug: "saitama", schools: areaSchools("南区", "埼玉県", KYOKUSHIN, SHOTOKAN, ZENKOKU, localKarate("南区道場", "南区")) },
  "saitama/urawa": { name: "浦和区", prefName: "埼玉県", prefSlug: "saitama", schools: areaSchools("浦和区", "埼玉県", KYOKUSHIN, SHOTOKAN, SEIDO, ZENKOKU) },
  // ── 滋賀県 ──
  "shiga/kusatsu": { name: "草津市", prefName: "滋賀県", prefSlug: "shiga", schools: areaSchools("草津市", "滋賀県", KYOKUSHIN, SHOTOKAN, ZENKOKU, localKarate("草津道場", "草津")) },
  "shiga/otsu": { name: "大津市", prefName: "滋賀県", prefSlug: "shiga", schools: areaSchools("大津市", "滋賀県", KYOKUSHIN, SHOTOKAN, ZENKOKU, localKarate("大津道場", "大津")) },
  // ── 東京都 ──
  "tokyo/chofu": { name: "調布市", prefName: "東京都", prefSlug: "tokyo", schools: areaSchools("調布市", "東京都", KYOKUSHIN, SHOTOKAN, SEIDO, ZENKOKU) },
  "tokyo/edogawa": { name: "江戸川区", prefName: "東京都", prefSlug: "tokyo", schools: areaSchools("江戸川区", "東京都", KYOKUSHIN, SHOTOKAN, ZENKOKU, localKarate("江戸川道場", "江戸川")) },
  "tokyo/kita": { name: "北区", prefName: "東京都", prefSlug: "tokyo", schools: areaSchools("北区", "東京都", KYOKUSHIN, SHOTOKAN, ZENKOKU, localKarate("北区道場", "北区")) },
  "tokyo/machida": { name: "町田市", prefName: "東京都", prefSlug: "tokyo", schools: areaSchools("町田市", "東京都", KYOKUSHIN, SHOTOKAN, ZENKOKU, localKarate("町田道場", "町田")) },
  "tokyo/meguro": { name: "目黒区", prefName: "東京都", prefSlug: "tokyo", schools: areaSchools("目黒区", "東京都", KYOKUSHIN, SHOTOKAN, ZENKOKU, localKarate("目黒道場", "目黒")) },
  "tokyo/minato": { name: "港区", prefName: "東京都", prefSlug: "tokyo", schools: areaSchools("港区", "東京都", KYOKUSHIN, SHOTOKAN, SEIDO, ZENKOKU) },
  "tokyo/nerima": { name: "練馬区", prefName: "東京都", prefSlug: "tokyo", schools: areaSchools("練馬区", "東京都", KYOKUSHIN, SHOTOKAN, ZENKOKU, localKarate("練馬道場", "練馬")) },
  "tokyo/setagaya": { name: "世田谷区", prefName: "東京都", prefSlug: "tokyo", schools: areaSchools("世田谷区", "東京都", KYOKUSHIN, SHOTOKAN, SEIDO, ZENKOKU) },
  "tokyo/shibuya": { name: "渋谷区", prefName: "東京都", prefSlug: "tokyo", schools: areaSchools("渋谷区", "東京都", KYOKUSHIN, SHOTOKAN, ZENKOKU, localKarate("渋谷道場", "渋谷")) },
  "tokyo/shinagawa": { name: "品川区", prefName: "東京都", prefSlug: "tokyo", schools: areaSchools("品川区", "東京都", KYOKUSHIN, SHOTOKAN, ZENKOKU, localKarate("品川道場", "品川")) },
  "tokyo/shinjuku": { name: "新宿区", prefName: "東京都", prefSlug: "tokyo", schools: areaSchools("新宿区", "東京都", KYOKUSHIN, SHOTOKAN, SEIDO, ZENKOKU) },
  "tokyo/suginami": { name: "杉並区", prefName: "東京都", prefSlug: "tokyo", schools: areaSchools("杉並区", "東京都", KYOKUSHIN, SHOTOKAN, ZENKOKU, localKarate("杉並道場", "杉並")) },
  // ── 和歌山県 ──
  "wakayama/wakayama-city": { name: "和歌山市", prefName: "和歌山県", prefSlug: "wakayama", schools: areaSchools("和歌山市", "和歌山県", KYOKUSHIN, SHOTOKAN, ZENKOKU, localKarate("和歌山道場", "和歌山")) },
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
