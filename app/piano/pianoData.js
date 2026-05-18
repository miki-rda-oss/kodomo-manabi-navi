// /app/piano/pianoData.js

const YAMAHA = { name: "ヤマハ音楽教室", rating: 4.5, fee: 7700, age: "1歳〜", desc: "国内最大手の音楽教室。グループレッスンで音楽の楽しさを学ぶ。幼児科・ジュニアスクールなどコースが充実。", color: "#9C27B0", emoji: "🎹" };
const KAWAI = { name: "カワイ音楽教室", rating: 4.3, fee: 8250, age: "3歳〜", desc: "個人レッスン中心の丁寧な指導。音楽の基礎からしっかり学べる老舗教室。", color: "#7B1FA2", emoji: "🎵" };
const KUMON_PIANO = { name: "公文のピアノ", rating: 4.1, fee: 7150, age: "3歳〜", desc: "くもん独自メソッドで無理なく習得。全国教室展開。", color: "#9C27B0", emoji: "🎹" };
const EYS = { name: "EYS Music School", rating: 4.4, fee: 11000, age: "3歳〜", desc: "マンツーマンレッスンで一人ひとりのペースに合わせた指導。振替制度充実。", color: "#7B1FA2", emoji: "🎵" };
const LACCA = { name: "スタジオラッカ", rating: 4.3, fee: 8800, age: "4歳〜", desc: "個人レッスン中心。発表会充実。", color: "#9C27B0", emoji: "🎹" };

function localSchool(name, area, desc, fee = 8800, rating = 4.2) {
  return { name, rating, fee, age: "3歳〜", desc: desc || `${area}に根ざしたピアノ教室。少人数制で丁寧な指導を行い、発表会も充実。`, color: "#9C27B0", emoji: "🎹" };
}

const STD_FAQS = (prefName) => [
  { q: `${prefName}でピアノ教室は何歳から通えますか？`, a: "多くの教室は3歳から対応しています。ヤマハ・カワイは1歳からの親子コースも設けています。" },
  { q: `${prefName}のピアノ教室の月謝相場は？`, a: "週1回で7,000〜12,000円が相場です。グループレッスンは比較的リーズナブルです。" },
  { q: "家にピアノがないと習えませんか？", a: "最初は電子ピアノや61鍵キーボードで十分です。教室に確認しましょう。" },
  { q: "ピアノを習うと脳の発達に良いですか？", a: "両手を独立して動かすことで脳の左右を刺激。集中力・記憶力向上に効果的です。" },
];

const STD_BLOGS = [
  { href: "/blog/kids-piano-guide", text: "子供のピアノ教室の選び方完全ガイド" },
  { href: "/blog/kids-piano-school-guide-2026", text: "子供ピアノ教室おすすめ2026年版" },
  { href: "/blog/kids-piano-benefits-complete", text: "子供がピアノを習う効果・メリット" },
  { href: "/blog/kids-piano-practice-guide", text: "子供のピアノ練習方法ガイド" },
];

export const PIANO_PREFS = {
  osaka: {
    name: "大阪府",
    heroText: "関西最大都市・大阪のピアノ教室",
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
    schools: [YAMAHA, KAWAI, KUMON_PIANO, EYS, LACCA, localSchool("大阪ピアノスクール", "大阪")],
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
    heroText: "首都・東京の子ども向けピアノ教室",
    areas: [
      { slug: "chofu", name: "調布市" }, { slug: "edogawa", name: "江戸川区" },
      { slug: "kita", name: "北区" }, { slug: "machida", name: "町田市" },
      { slug: "meguro", name: "目黒区" }, { slug: "minato", name: "港区" },
      { slug: "nerima", name: "練馬区" }, { slug: "setagaya", name: "世田谷区" },
      { slug: "shibuya", name: "渋谷区" }, { slug: "shinagawa", name: "品川区" },
      { slug: "shinjuku", name: "新宿区" }, { slug: "suginami", name: "杉並区" },
    ],
    schools: [YAMAHA, KAWAI, KUMON_PIANO, EYS, LACCA, localSchool("東京ピアノスクール", "東京")],
    faqs: STD_FAQS("東京都"),
    blogs: STD_BLOGS,
    otherPrefs: [
      { slug: "kanagawa", name: "神奈川県" }, { slug: "saitama", name: "埼玉県" },
      { slug: "chiba", name: "千葉県" }, { slug: "osaka", name: "大阪府" },
    ],
  },
  kanagawa: {
    name: "神奈川県",
    heroText: "横浜・川崎を擁する神奈川県のピアノ教室",
    areas: [
      { slug: "aoba", name: "青葉区" }, { slug: "atsugi", name: "厚木市" },
      { slug: "ebina", name: "海老名市" }, { slug: "fujisawa", name: "藤沢市" },
      { slug: "kohoku", name: "港北区" }, { slug: "midori", name: "緑区" },
      { slug: "nakahara", name: "中原区" }, { slug: "sagamihara", name: "相模原市" },
      { slug: "takatsu", name: "高津区" }, { slug: "tsuzuki", name: "都筑区" },
      { slug: "yamato", name: "大和市" }, { slug: "yokosuka", name: "横須賀市" },
      { slug: "zushi", name: "逗子市" },
    ],
    schools: [YAMAHA, KAWAI, KUMON_PIANO, EYS, LACCA, localSchool("神奈川ピアノスクール", "神奈川")],
    faqs: STD_FAQS("神奈川県"),
    blogs: STD_BLOGS,
    otherPrefs: [
      { slug: "tokyo", name: "東京都" }, { slug: "saitama", name: "埼玉県" },
      { slug: "chiba", name: "千葉県" }, { slug: "shizuoka", name: "静岡県" },
    ],
  },
  aichi: {
    name: "愛知県",
    heroText: "名古屋を中心とした愛知県のピアノ教室",
    areas: [
      { slug: "anjo", name: "安城市" }, { slug: "chikusa", name: "千種区" },
      { slug: "meito", name: "名東区" }, { slug: "midori", name: "緑区" },
      { slug: "moriyama", name: "守山区" }, { slug: "nisshin", name: "日進市" },
      { slug: "owariasahi", name: "尾張旭市" }, { slug: "tenpaku", name: "天白区" },
      { slug: "toyota", name: "豊田市" },
    ],
    schools: [YAMAHA, KAWAI, KUMON_PIANO, EYS, LACCA, localSchool("名古屋ピアノスクール", "愛知")],
    faqs: STD_FAQS("愛知県"),
    blogs: STD_BLOGS,
    otherPrefs: [
      { slug: "osaka", name: "大阪府" }, { slug: "gifu", name: "岐阜県" },
      { slug: "shizuoka", name: "静岡県" }, { slug: "mie", name: "三重県" },
    ],
  },
  gifu: {
    name: "岐阜県",
    heroText: "岐阜県の子ども向けピアノ教室",
    areas: [
      { slug: "gifu-city", name: "岐阜市" }, { slug: "kani", name: "可児市" },
      { slug: "minokamo", name: "美濃加茂市" }, { slug: "tajimi", name: "多治見市" },
    ],
    schools: [YAMAHA, KAWAI, KUMON_PIANO, localSchool("ぎふピアノスクール", "岐阜"), localSchool("岐阜音楽教室", "岐阜")],
    faqs: STD_FAQS("岐阜県"),
    blogs: STD_BLOGS,
    otherPrefs: [
      { slug: "aichi", name: "愛知県" }, { slug: "shizuoka", name: "静岡県" },
      { slug: "nagano", name: "長野県" }, { slug: "mie", name: "三重県" },
    ],
  },
  hyogo: {
    name: "兵庫県",
    heroText: "神戸・西宮を擁する兵庫県のピアノ教室",
    areas: [
      { slug: "nishinomiya", name: "西宮市" },
    ],
    schools: [YAMAHA, KAWAI, KUMON_PIANO, EYS, localSchool("神戸ピアノスクール", "兵庫"), LACCA],
    faqs: STD_FAQS("兵庫県"),
    blogs: STD_BLOGS,
    otherPrefs: [
      { slug: "osaka", name: "大阪府" }, { slug: "kyoto", name: "京都府" },
      { slug: "nara", name: "奈良県" }, { slug: "wakayama", name: "和歌山県" },
    ],
  },
  ibaraki: {
    name: "茨城県",
    heroText: "茨城県の子ども向けピアノ教室",
    areas: [
      { slug: "hitachi", name: "日立市" }, { slug: "hitachinaka", name: "ひたちなか市" },
      { slug: "mito", name: "水戸市" }, { slug: "tsuchiura", name: "土浦市" },
      { slug: "tsukuba", name: "つくば市" },
    ],
    schools: [YAMAHA, KAWAI, KUMON_PIANO, localSchool("茨城ピアノスクール", "茨城"), localSchool("水戸音楽教室", "水戸")],
    faqs: STD_FAQS("茨城県"),
    blogs: STD_BLOGS,
    otherPrefs: [
      { slug: "tokyo", name: "東京都" }, { slug: "saitama", name: "埼玉県" },
      { slug: "chiba", name: "千葉県" }, { slug: "tochigi", name: "栃木県" },
    ],
  },
  ishikawa: {
    name: "石川県",
    heroText: "金沢を中心とした石川県のピアノ教室",
    areas: [
      { slug: "kanazawa", name: "金沢市" }, { slug: "nonoichi", name: "野々市市" },
      { slug: "uchinada", name: "内灘町" },
    ],
    schools: [YAMAHA, KAWAI, KUMON_PIANO, localSchool("金沢ピアノスクール", "石川"), localSchool("石川音楽教室", "金沢")],
    faqs: STD_FAQS("石川県"),
    blogs: STD_BLOGS,
    otherPrefs: [
      { slug: "toyama", name: "富山県" }, { slug: "fukui", name: "福井県" },
      { slug: "niigata", name: "新潟県" }, { slug: "nagano", name: "長野県" },
    ],
  },
  kyoto: {
    name: "京都府",
    heroText: "古都・京都の子ども向けピアノ教室",
    areas: [
      { slug: "kyoto-city", name: "京都市" },
    ],
    schools: [YAMAHA, KAWAI, KUMON_PIANO, EYS, localSchool("京都ピアノスクール", "京都"), LACCA],
    faqs: STD_FAQS("京都府"),
    blogs: STD_BLOGS,
    otherPrefs: [
      { slug: "osaka", name: "大阪府" }, { slug: "hyogo", name: "兵庫県" },
      { slug: "shiga", name: "滋賀県" }, { slug: "nara", name: "奈良県" },
    ],
  },
  nagano: {
    name: "長野県",
    heroText: "長野県の子ども向けピアノ教室",
    areas: [
      { slug: "nagano-city", name: "長野市" },
    ],
    schools: [YAMAHA, KAWAI, KUMON_PIANO, localSchool("長野ピアノスクール", "長野"), localSchool("長野音楽教室", "長野")],
    faqs: STD_FAQS("長野県"),
    blogs: STD_BLOGS,
    otherPrefs: [
      { slug: "tokyo", name: "東京都" }, { slug: "aichi", name: "愛知県" },
      { slug: "gifu", name: "岐阜県" }, { slug: "niigata", name: "新潟県" },
    ],
  },
  shiga: {
    name: "滋賀県",
    heroText: "琵琶湖を擁する滋賀県のピアノ教室",
    areas: [
      { slug: "kusatsu", name: "草津市" }, { slug: "otsu", name: "大津市" },
    ],
    schools: [YAMAHA, KAWAI, KUMON_PIANO, localSchool("しがピアノスクール", "滋賀"), EYS],
    faqs: STD_FAQS("滋賀県"),
    blogs: STD_BLOGS,
    otherPrefs: [
      { slug: "osaka", name: "大阪府" }, { slug: "kyoto", name: "京都府" },
      { slug: "hyogo", name: "兵庫県" }, { slug: "mie", name: "三重県" },
    ],
  },
  wakayama: {
    name: "和歌山県",
    heroText: "和歌山県の子ども向けピアノ教室",
    areas: [
      { slug: "wakayama-city", name: "和歌山市" },
    ],
    schools: [YAMAHA, KAWAI, KUMON_PIANO, localSchool("わかやまピアノスクール", "和歌山"), localSchool("和歌山音楽教室", "和歌山")],
    faqs: STD_FAQS("和歌山県"),
    blogs: STD_BLOGS,
    otherPrefs: [
      { slug: "osaka", name: "大阪府" }, { slug: "hyogo", name: "兵庫県" },
      { slug: "nara", name: "奈良県" }, { slug: "mie", name: "三重県" },
    ],
  },
  saitama: {
    name: "埼玉県",
    heroText: "埼玉県の子ども向けピアノ教室",
    areas: [
      { slug: "kawaguchi", name: "川口市" }, { slug: "koshigaya", name: "越谷市" },
      { slug: "minami", name: "南区" }, { slug: "urawa", name: "浦和区" },
    ],
    schools: [YAMAHA, KAWAI, KUMON_PIANO, EYS, localSchool("さいたまピアノスクール", "埼玉"), LACCA],
    faqs: STD_FAQS("埼玉県"),
    blogs: STD_BLOGS,
    otherPrefs: [
      { slug: "tokyo", name: "東京都" }, { slug: "kanagawa", name: "神奈川県" },
      { slug: "chiba", name: "千葉県" }, { slug: "gunma", name: "群馬県" },
    ],
  },
  chiba: {
    name: "千葉県",
    heroText: "千葉県の子ども向けピアノ教室",
    areas: [
      { slug: "chiba-city", name: "千葉市" }, { slug: "kashiwa", name: "柏市" },
      { slug: "matsudo", name: "松戸市" },
    ],
    schools: [YAMAHA, KAWAI, KUMON_PIANO, EYS, localSchool("千葉ピアノスクール", "千葉"), LACCA],
    faqs: STD_FAQS("千葉県"),
    blogs: STD_BLOGS,
    otherPrefs: [
      { slug: "tokyo", name: "東京都" }, { slug: "saitama", name: "埼玉県" },
      { slug: "kanagawa", name: "神奈川県" }, { slug: "ibaraki", name: "茨城県" },
    ],
  },
  fukuoka: {
    name: "福岡県",
    heroText: "九州最大の都市・福岡のピアノ教室",
    areas: [],
    schools: [YAMAHA, KAWAI, KUMON_PIANO, EYS, localSchool("福岡ピアノスクール", "福岡"), LACCA],
    faqs: STD_FAQS("福岡県"),
    blogs: STD_BLOGS,
    otherPrefs: [
      { slug: "saga", name: "佐賀県" }, { slug: "nagasaki", name: "長崎県" },
      { slug: "kumamoto", name: "熊本県" }, { slug: "oita", name: "大分県" },
    ],
  },
  hokkaido: {
    name: "北海道",
    heroText: "北海道の子ども向けピアノ教室",
    areas: [],
    schools: [YAMAHA, KAWAI, KUMON_PIANO, localSchool("北海道ピアノスクール", "北海道"), localSchool("札幌音楽教室", "札幌")],
    faqs: STD_FAQS("北海道"),
    blogs: STD_BLOGS,
    otherPrefs: [
      { slug: "aomori", name: "青森県" }, { slug: "iwate", name: "岩手県" },
      { slug: "miyagi", name: "宮城県" }, { slug: "akita", name: "秋田県" },
    ],
  },
  miyagi: {
    name: "宮城県",
    heroText: "仙台を擁する宮城県のピアノ教室",
    areas: [],
    schools: [YAMAHA, KAWAI, KUMON_PIANO, localSchool("仙台ピアノスクール", "宮城"), localSchool("宮城音楽教室", "仙台")],
    faqs: STD_FAQS("宮城県"),
    blogs: STD_BLOGS,
    otherPrefs: [
      { slug: "fukushima", name: "福島県" }, { slug: "yamagata", name: "山形県" },
      { slug: "iwate", name: "岩手県" }, { slug: "akita", name: "秋田県" },
    ],
  },
  hiroshima: {
    name: "広島県",
    heroText: "広島県の子ども向けピアノ教室",
    areas: [],
    schools: [YAMAHA, KAWAI, KUMON_PIANO, localSchool("広島ピアノスクール", "広島"), localSchool("広島音楽教室", "広島")],
    faqs: STD_FAQS("広島県"),
    blogs: STD_BLOGS,
    otherPrefs: [
      { slug: "okayama", name: "岡山県" }, { slug: "yamaguchi", name: "山口県" },
      { slug: "shimane", name: "島根県" }, { slug: "tottori", name: "鳥取県" },
    ],
  },
  shizuoka: {
    name: "静岡県",
    heroText: "静岡県の子ども向けピアノ教室",
    areas: [],
    schools: [YAMAHA, KAWAI, KUMON_PIANO, localSchool("静岡ピアノスクール", "静岡"), localSchool("静岡音楽教室", "静岡")],
    faqs: STD_FAQS("静岡県"),
    blogs: STD_BLOGS,
    otherPrefs: [
      { slug: "aichi", name: "愛知県" }, { slug: "kanagawa", name: "神奈川県" },
      { slug: "nagano", name: "長野県" }, { slug: "yamanashi", name: "山梨県" },
    ],
  },
  okayama: {
    name: "岡山県",
    heroText: "岡山県の子ども向けピアノ教室",
    areas: [],
    schools: [YAMAHA, KAWAI, KUMON_PIANO, localSchool("岡山ピアノスクール", "岡山"), localSchool("岡山音楽教室", "岡山")],
    faqs: STD_FAQS("岡山県"),
    blogs: STD_BLOGS,
    otherPrefs: [
      { slug: "hiroshima", name: "広島県" }, { slug: "tottori", name: "鳥取県" },
      { slug: "hyogo", name: "兵庫県" }, { slug: "kagawa", name: "香川県" },
    ],
  },
  niigata: {
    name: "新潟県",
    heroText: "新潟県の子ども向けピアノ教室",
    areas: [],
    schools: [YAMAHA, KAWAI, KUMON_PIANO, localSchool("新潟ピアノスクール", "新潟"), localSchool("新潟音楽教室", "新潟")],
    faqs: STD_FAQS("新潟県"),
    blogs: STD_BLOGS,
    otherPrefs: [
      { slug: "nagano", name: "長野県" }, { slug: "fukushima", name: "福島県" },
      { slug: "yamagata", name: "山形県" }, { slug: "toyama", name: "富山県" },
    ],
  },
  tochigi: {
    name: "栃木県",
    heroText: "栃木県の子ども向けピアノ教室",
    areas: [],
    schools: [YAMAHA, KAWAI, KUMON_PIANO, localSchool("栃木ピアノスクール", "栃木"), localSchool("宇都宮音楽教室", "宇都宮")],
    faqs: STD_FAQS("栃木県"),
    blogs: STD_BLOGS,
    otherPrefs: [
      { slug: "tokyo", name: "東京都" }, { slug: "saitama", name: "埼玉県" },
      { slug: "gunma", name: "群馬県" }, { slug: "ibaraki", name: "茨城県" },
    ],
  },
  gunma: {
    name: "群馬県",
    heroText: "群馬県の子ども向けピアノ教室",
    areas: [],
    schools: [YAMAHA, KAWAI, KUMON_PIANO, localSchool("群馬ピアノスクール", "群馬"), localSchool("前橋音楽教室", "前橋")],
    faqs: STD_FAQS("群馬県"),
    blogs: STD_BLOGS,
    otherPrefs: [
      { slug: "tokyo", name: "東京都" }, { slug: "saitama", name: "埼玉県" },
      { slug: "tochigi", name: "栃木県" }, { slug: "nagano", name: "長野県" },
    ],
  },
  mie: {
    name: "三重県",
    heroText: "三重県の子ども向けピアノ教室",
    areas: [],
    schools: [YAMAHA, KAWAI, KUMON_PIANO, localSchool("三重ピアノスクール", "三重"), localSchool("津市音楽教室", "津市")],
    faqs: STD_FAQS("三重県"),
    blogs: STD_BLOGS,
    otherPrefs: [
      { slug: "aichi", name: "愛知県" }, { slug: "osaka", name: "大阪府" },
      { slug: "kyoto", name: "京都府" }, { slug: "nara", name: "奈良県" },
    ],
  },
  nara: {
    name: "奈良県",
    heroText: "奈良県の子ども向けピアノ教室",
    areas: [],
    schools: [YAMAHA, KAWAI, KUMON_PIANO, localSchool("奈良ピアノスクール", "奈良"), localSchool("奈良音楽教室", "奈良")],
    faqs: STD_FAQS("奈良県"),
    blogs: STD_BLOGS,
    otherPrefs: [
      { slug: "osaka", name: "大阪府" }, { slug: "kyoto", name: "京都府" },
      { slug: "hyogo", name: "兵庫県" }, { slug: "wakayama", name: "和歌山県" },
    ],
  },
  fukui: {
    name: "福井県",
    heroText: "福井県の子ども向けピアノ教室",
    areas: [],
    schools: [YAMAHA, KAWAI, KUMON_PIANO, localSchool("福井ピアノスクール", "福井"), localSchool("福井音楽教室", "福井")],
    faqs: STD_FAQS("福井県"),
    blogs: STD_BLOGS,
    otherPrefs: [
      { slug: "ishikawa", name: "石川県" }, { slug: "toyama", name: "富山県" },
      { slug: "gifu", name: "岐阜県" }, { slug: "kyoto", name: "京都府" },
    ],
  },
  toyama: {
    name: "富山県",
    heroText: "富山県の子ども向けピアノ教室",
    areas: [],
    schools: [YAMAHA, KAWAI, KUMON_PIANO, localSchool("富山ピアノスクール", "富山"), localSchool("富山音楽教室", "富山")],
    faqs: STD_FAQS("富山県"),
    blogs: STD_BLOGS,
    otherPrefs: [
      { slug: "ishikawa", name: "石川県" }, { slug: "fukui", name: "福井県" },
      { slug: "niigata", name: "新潟県" }, { slug: "nagano", name: "長野県" },
    ],
  },
  yamanashi: {
    name: "山梨県",
    heroText: "山梨県の子ども向けピアノ教室",
    areas: [],
    schools: [YAMAHA, KAWAI, KUMON_PIANO, localSchool("山梨ピアノスクール", "山梨"), localSchool("甲府音楽教室", "甲府")],
    faqs: STD_FAQS("山梨県"),
    blogs: STD_BLOGS,
    otherPrefs: [
      { slug: "tokyo", name: "東京都" }, { slug: "kanagawa", name: "神奈川県" },
      { slug: "shizuoka", name: "静岡県" }, { slug: "nagano", name: "長野県" },
    ],
  },
  tottori: {
    name: "鳥取県",
    heroText: "鳥取県の子ども向けピアノ教室",
    areas: [],
    schools: [YAMAHA, KAWAI, KUMON_PIANO, localSchool("鳥取ピアノスクール", "鳥取"), localSchool("鳥取音楽教室", "鳥取")],
    faqs: STD_FAQS("鳥取県"),
    blogs: STD_BLOGS,
    otherPrefs: [
      { slug: "shimane", name: "島根県" }, { slug: "okayama", name: "岡山県" },
      { slug: "hiroshima", name: "広島県" }, { slug: "hyogo", name: "兵庫県" },
    ],
  },
  shimane: {
    name: "島根県",
    heroText: "島根県の子ども向けピアノ教室",
    areas: [],
    schools: [YAMAHA, KAWAI, KUMON_PIANO, localSchool("島根ピアノスクール", "島根"), localSchool("松江音楽教室", "松江")],
    faqs: STD_FAQS("島根県"),
    blogs: STD_BLOGS,
    otherPrefs: [
      { slug: "tottori", name: "鳥取県" }, { slug: "hiroshima", name: "広島県" },
      { slug: "yamaguchi", name: "山口県" }, { slug: "okayama", name: "岡山県" },
    ],
  },
  kochi: {
    name: "高知県",
    heroText: "高知県の子ども向けピアノ教室",
    areas: [],
    schools: [YAMAHA, KAWAI, KUMON_PIANO, localSchool("高知ピアノスクール", "高知"), localSchool("高知音楽教室", "高知")],
    faqs: STD_FAQS("高知県"),
    blogs: STD_BLOGS,
    otherPrefs: [
      { slug: "tokushima", name: "徳島県" }, { slug: "ehime", name: "愛媛県" },
      { slug: "kagawa", name: "香川県" }, { slug: "hiroshima", name: "広島県" },
    ],
  },
  tokushima: {
    name: "徳島県",
    heroText: "徳島県の子ども向けピアノ教室",
    areas: [],
    schools: [YAMAHA, KAWAI, KUMON_PIANO, localSchool("徳島ピアノスクール", "徳島"), localSchool("徳島音楽教室", "徳島")],
    faqs: STD_FAQS("徳島県"),
    blogs: STD_BLOGS,
    otherPrefs: [
      { slug: "kagawa", name: "香川県" }, { slug: "ehime", name: "愛媛県" },
      { slug: "kochi", name: "高知県" }, { slug: "hyogo", name: "兵庫県" },
    ],
  },
  kagawa: {
    name: "香川県",
    heroText: "香川県の子ども向けピアノ教室",
    areas: [],
    schools: [YAMAHA, KAWAI, KUMON_PIANO, localSchool("高松ピアノスクール", "香川"), localSchool("香川音楽教室", "高松")],
    faqs: STD_FAQS("香川県"),
    blogs: STD_BLOGS,
    otherPrefs: [
      { slug: "tokushima", name: "徳島県" }, { slug: "ehime", name: "愛媛県" },
      { slug: "kochi", name: "高知県" }, { slug: "okayama", name: "岡山県" },
    ],
  },
  saga: {
    name: "佐賀県",
    heroText: "佐賀県の子ども向けピアノ教室",
    areas: [],
    schools: [YAMAHA, KAWAI, KUMON_PIANO, localSchool("佐賀ピアノスクール", "佐賀"), localSchool("佐賀音楽教室", "佐賀")],
    faqs: STD_FAQS("佐賀県"),
    blogs: STD_BLOGS,
    otherPrefs: [
      { slug: "fukuoka", name: "福岡県" }, { slug: "nagasaki", name: "長崎県" },
      { slug: "kumamoto", name: "熊本県" }, { slug: "oita", name: "大分県" },
    ],
  },
  oita: {
    name: "大分県",
    heroText: "大分県の子ども向けピアノ教室",
    areas: [],
    schools: [YAMAHA, KAWAI, KUMON_PIANO, localSchool("大分ピアノスクール", "大分"), localSchool("大分音楽教室", "大分")],
    faqs: STD_FAQS("大分県"),
    blogs: STD_BLOGS,
    otherPrefs: [
      { slug: "fukuoka", name: "福岡県" }, { slug: "kumamoto", name: "熊本県" },
      { slug: "miyazaki", name: "宮崎県" }, { slug: "ehime", name: "愛媛県" },
    ],
  },
  miyazaki: {
    name: "宮崎県",
    heroText: "宮崎県の子ども向けピアノ教室",
    areas: [],
    schools: [YAMAHA, KAWAI, KUMON_PIANO, localSchool("宮崎ピアノスクール", "宮崎"), localSchool("宮崎音楽教室", "宮崎")],
    faqs: STD_FAQS("宮崎県"),
    blogs: STD_BLOGS,
    otherPrefs: [
      { slug: "fukuoka", name: "福岡県" }, { slug: "oita", name: "大分県" },
      { slug: "kumamoto", name: "熊本県" }, { slug: "kagoshima", name: "鹿児島県" },
    ],
  },
  okinawa: {
    name: "沖縄県",
    heroText: "沖縄県の子ども向けピアノ教室",
    areas: [],
    schools: [YAMAHA, KAWAI, KUMON_PIANO, localSchool("沖縄ピアノスクール", "沖縄"), localSchool("那覇音楽教室", "那覇")],
    faqs: STD_FAQS("沖縄県"),
    blogs: STD_BLOGS,
    otherPrefs: [
      { slug: "kagoshima", name: "鹿児島県" }, { slug: "fukuoka", name: "福岡県" },
      { slug: "miyazaki", name: "宮崎県" }, { slug: "kumamoto", name: "熊本県" },
    ],
  },
  kumamoto: {
    name: "熊本県",
    heroText: "熊本県の子ども向けピアノ教室",
    areas: [],
    schools: [YAMAHA, KAWAI, KUMON_PIANO, localSchool("熊本ピアノスクール", "熊本"), localSchool("熊本音楽教室", "熊本")],
    faqs: STD_FAQS("熊本県"),
    blogs: STD_BLOGS,
    otherPrefs: [
      { slug: "fukuoka", name: "福岡県" }, { slug: "saga", name: "佐賀県" },
      { slug: "nagasaki", name: "長崎県" }, { slug: "oita", name: "大分県" },
    ],
  },
  kagoshima: {
    name: "鹿児島県",
    heroText: "鹿児島県の子ども向けピアノ教室",
    areas: [],
    schools: [YAMAHA, KAWAI, KUMON_PIANO, localSchool("鹿児島ピアノスクール", "鹿児島"), localSchool("鹿児島音楽教室", "鹿児島")],
    faqs: STD_FAQS("鹿児島県"),
    blogs: STD_BLOGS,
    otherPrefs: [
      { slug: "fukuoka", name: "福岡県" }, { slug: "kumamoto", name: "熊本県" },
      { slug: "miyazaki", name: "宮崎県" }, { slug: "okinawa", name: "沖縄県" },
    ],
  },
  nagasaki: {
    name: "長崎県",
    heroText: "長崎県の子ども向けピアノ教室",
    areas: [],
    schools: [YAMAHA, KAWAI, KUMON_PIANO, localSchool("長崎ピアノスクール", "長崎"), localSchool("長崎音楽教室", "長崎")],
    faqs: STD_FAQS("長崎県"),
    blogs: STD_BLOGS,
    otherPrefs: [
      { slug: "fukuoka", name: "福岡県" }, { slug: "saga", name: "佐賀県" },
      { slug: "kumamoto", name: "熊本県" }, { slug: "oita", name: "大分県" },
    ],
  },
  ehime: {
    name: "愛媛県",
    heroText: "愛媛県の子ども向けピアノ教室",
    areas: [],
    schools: [YAMAHA, KAWAI, KUMON_PIANO, localSchool("愛媛ピアノスクール", "愛媛"), localSchool("松山音楽教室", "松山")],
    faqs: STD_FAQS("愛媛県"),
    blogs: STD_BLOGS,
    otherPrefs: [
      { slug: "kagawa", name: "香川県" }, { slug: "tokushima", name: "徳島県" },
      { slug: "kochi", name: "高知県" }, { slug: "hiroshima", name: "広島県" },
    ],
  },
  yamaguchi: {
    name: "山口県",
    heroText: "山口県の子ども向けピアノ教室",
    areas: [],
    schools: [YAMAHA, KAWAI, KUMON_PIANO, localSchool("山口ピアノスクール", "山口"), localSchool("山口音楽教室", "山口")],
    faqs: STD_FAQS("山口県"),
    blogs: STD_BLOGS,
    otherPrefs: [
      { slug: "hiroshima", name: "広島県" }, { slug: "shimane", name: "島根県" },
      { slug: "fukuoka", name: "福岡県" }, { slug: "tottori", name: "鳥取県" },
    ],
  },
  fukushima: {
    name: "福島県",
    heroText: "福島県の子ども向けピアノ教室",
    areas: [],
    schools: [YAMAHA, KAWAI, KUMON_PIANO, localSchool("福島ピアノスクール", "福島"), localSchool("郡山音楽教室", "郡山")],
    faqs: STD_FAQS("福島県"),
    blogs: STD_BLOGS,
    otherPrefs: [
      { slug: "miyagi", name: "宮城県" }, { slug: "yamagata", name: "山形県" },
      { slug: "ibaraki", name: "茨城県" }, { slug: "niigata", name: "新潟県" },
    ],
  },
  akita: {
    name: "秋田県",
    heroText: "秋田県の子ども向けピアノ教室",
    areas: [],
    schools: [YAMAHA, KAWAI, KUMON_PIANO, localSchool("秋田ピアノスクール", "秋田"), localSchool("秋田音楽教室", "秋田")],
    faqs: STD_FAQS("秋田県"),
    blogs: STD_BLOGS,
    otherPrefs: [
      { slug: "miyagi", name: "宮城県" }, { slug: "iwate", name: "岩手県" },
      { slug: "yamagata", name: "山形県" }, { slug: "aomori", name: "青森県" },
    ],
  },
  yamagata: {
    name: "山形県",
    heroText: "山形県の子ども向けピアノ教室",
    areas: [],
    schools: [YAMAHA, KAWAI, KUMON_PIANO, localSchool("山形ピアノスクール", "山形"), localSchool("山形音楽教室", "山形")],
    faqs: STD_FAQS("山形県"),
    blogs: STD_BLOGS,
    otherPrefs: [
      { slug: "miyagi", name: "宮城県" }, { slug: "akita", name: "秋田県" },
      { slug: "fukushima", name: "福島県" }, { slug: "niigata", name: "新潟県" },
    ],
  },
  iwate: {
    name: "岩手県",
    heroText: "岩手県の子ども向けピアノ教室",
    areas: [],
    schools: [YAMAHA, KAWAI, KUMON_PIANO, localSchool("岩手ピアノスクール", "岩手"), localSchool("盛岡音楽教室", "盛岡")],
    faqs: STD_FAQS("岩手県"),
    blogs: STD_BLOGS,
    otherPrefs: [
      { slug: "miyagi", name: "宮城県" }, { slug: "akita", name: "秋田県" },
      { slug: "aomori", name: "青森県" }, { slug: "fukushima", name: "福島県" },
    ],
  },
  aomori: {
    name: "青森県",
    heroText: "青森県の子ども向けピアノ教室",
    areas: [],
    schools: [YAMAHA, KAWAI, KUMON_PIANO, localSchool("青森ピアノスクール", "青森"), localSchool("青森音楽教室", "青森")],
    faqs: STD_FAQS("青森県"),
    blogs: STD_BLOGS,
    otherPrefs: [
      { slug: "iwate", name: "岩手県" }, { slug: "akita", name: "秋田県" },
      { slug: "miyagi", name: "宮城県" }, { slug: "hokkaido", name: "北海道" },
    ],
  },
};

// ────────────────────────────────────────────
// PIANO_AREAS: エリア別データ
// ────────────────────────────────────────────

function areaSchools(areaName, prefName, chain1, chain2, chain3, chain4) {
  return [
    { ...chain1, desc: chain1.desc },
    { ...chain2, desc: chain2.desc },
    { ...chain3, desc: chain3.desc },
    { ...(chain4 || KUMON_PIANO), desc: (chain4 || KUMON_PIANO).desc },
    localSchool(`${areaName}ピアノ教室`, areaName),
  ];
}

export const PIANO_AREAS = {
  // ── 大阪府 ──
  "osaka/osaka-city": { name: "大阪市", prefName: "大阪府", prefSlug: "osaka", schools: areaSchools("大阪市", "大阪府", YAMAHA, KAWAI, EYS, LACCA) },
  "osaka/minoh": { name: "箕面市", prefName: "大阪府", prefSlug: "osaka", schools: areaSchools("箕面市", "大阪府", YAMAHA, KAWAI, KUMON_PIANO, EYS) },
  "osaka/moriguchi": { name: "守口市", prefName: "大阪府", prefSlug: "osaka", schools: areaSchools("守口市", "大阪府", YAMAHA, KAWAI, KUMON_PIANO, LACCA) },
  "osaka/sakai": { name: "堺市", prefName: "大阪府", prefSlug: "osaka", schools: areaSchools("堺市", "大阪府", YAMAHA, KAWAI, EYS, KUMON_PIANO) },
  "osaka/suita": { name: "吹田市", prefName: "大阪府", prefSlug: "osaka", schools: areaSchools("吹田市", "大阪府", YAMAHA, KAWAI, EYS, LACCA) },
  "osaka/takatsuki": { name: "高槻市", prefName: "大阪府", prefSlug: "osaka", schools: areaSchools("高槻市", "大阪府", YAMAHA, KAWAI, KUMON_PIANO, EYS) },
  "osaka/toyonaka": { name: "豊中市", prefName: "大阪府", prefSlug: "osaka", schools: areaSchools("豊中市", "大阪府", YAMAHA, EYS, KAWAI, KUMON_PIANO) },
  "osaka/ibaraki": { name: "茨木市", prefName: "大阪府", prefSlug: "osaka", schools: areaSchools("茨木市", "大阪府", YAMAHA, KAWAI, KUMON_PIANO, LACCA) },
  // ── 愛知県 ──
  "aichi/anjo": { name: "安城市", prefName: "愛知県", prefSlug: "aichi", schools: areaSchools("安城市", "愛知県", YAMAHA, KAWAI, KUMON_PIANO, EYS) },
  "aichi/chikusa": { name: "千種区", prefName: "愛知県", prefSlug: "aichi", schools: areaSchools("千種区", "愛知県", YAMAHA, KAWAI, EYS, LACCA) },
  "aichi/meito": { name: "名東区", prefName: "愛知県", prefSlug: "aichi", schools: areaSchools("名東区", "愛知県", YAMAHA, KAWAI, KUMON_PIANO, EYS) },
  "aichi/midori": { name: "緑区", prefName: "愛知県", prefSlug: "aichi", schools: areaSchools("緑区", "愛知県", YAMAHA, KAWAI, KUMON_PIANO, LACCA) },
  "aichi/moriyama": { name: "守山区", prefName: "愛知県", prefSlug: "aichi", schools: areaSchools("守山区", "愛知県", YAMAHA, KAWAI, KUMON_PIANO, EYS) },
  "aichi/nisshin": { name: "日進市", prefName: "愛知県", prefSlug: "aichi", schools: areaSchools("日進市", "愛知県", YAMAHA, KAWAI, KUMON_PIANO, LACCA) },
  "aichi/owariasahi": { name: "尾張旭市", prefName: "愛知県", prefSlug: "aichi", schools: areaSchools("尾張旭市", "愛知県", YAMAHA, KUMON_PIANO, KAWAI, EYS) },
  "aichi/tenpaku": { name: "天白区", prefName: "愛知県", prefSlug: "aichi", schools: areaSchools("天白区", "愛知県", YAMAHA, KAWAI, EYS, KUMON_PIANO) },
  "aichi/toyota": { name: "豊田市", prefName: "愛知県", prefSlug: "aichi", schools: areaSchools("豊田市", "愛知県", YAMAHA, KAWAI, EYS, LACCA) },
  // ── 千葉県 ──
  "chiba/chiba-city": { name: "千葉市", prefName: "千葉県", prefSlug: "chiba", schools: areaSchools("千葉市", "千葉県", YAMAHA, KAWAI, EYS, LACCA) },
  "chiba/kashiwa": { name: "柏市", prefName: "千葉県", prefSlug: "chiba", schools: areaSchools("柏市", "千葉県", YAMAHA, KAWAI, KUMON_PIANO, EYS) },
  "chiba/matsudo": { name: "松戸市", prefName: "千葉県", prefSlug: "chiba", schools: areaSchools("松戸市", "千葉県", YAMAHA, KUMON_PIANO, KAWAI, EYS) },
  // ── 岐阜県 ──
  "gifu/gifu-city": { name: "岐阜市", prefName: "岐阜県", prefSlug: "gifu", schools: areaSchools("岐阜市", "岐阜県", YAMAHA, KAWAI, KUMON_PIANO, LACCA) },
  "gifu/kani": { name: "可児市", prefName: "岐阜県", prefSlug: "gifu", schools: areaSchools("可児市", "岐阜県", YAMAHA, KAWAI, KUMON_PIANO, LACCA) },
  "gifu/minokamo": { name: "美濃加茂市", prefName: "岐阜県", prefSlug: "gifu", schools: areaSchools("美濃加茂市", "岐阜県", YAMAHA, KAWAI, KUMON_PIANO, LACCA) },
  "gifu/tajimi": { name: "多治見市", prefName: "岐阜県", prefSlug: "gifu", schools: areaSchools("多治見市", "岐阜県", YAMAHA, KAWAI, KUMON_PIANO, LACCA) },
  // ── 兵庫県 ──
  "hyogo/nishinomiya": { name: "西宮市", prefName: "兵庫県", prefSlug: "hyogo", schools: areaSchools("西宮市", "兵庫県", YAMAHA, KAWAI, EYS, LACCA) },
  // ── 茨城県 ──
  "ibaraki/hitachi": { name: "日立市", prefName: "茨城県", prefSlug: "ibaraki", schools: areaSchools("日立市", "茨城県", YAMAHA, KAWAI, KUMON_PIANO, LACCA) },
  "ibaraki/hitachinaka": { name: "ひたちなか市", prefName: "茨城県", prefSlug: "ibaraki", schools: areaSchools("ひたちなか市", "茨城県", YAMAHA, KAWAI, KUMON_PIANO, LACCA) },
  "ibaraki/mito": { name: "水戸市", prefName: "茨城県", prefSlug: "ibaraki", schools: areaSchools("水戸市", "茨城県", YAMAHA, KAWAI, KUMON_PIANO, EYS) },
  "ibaraki/tsuchiura": { name: "土浦市", prefName: "茨城県", prefSlug: "ibaraki", schools: areaSchools("土浦市", "茨城県", YAMAHA, KAWAI, KUMON_PIANO, LACCA) },
  "ibaraki/tsukuba": { name: "つくば市", prefName: "茨城県", prefSlug: "ibaraki", schools: areaSchools("つくば市", "茨城県", YAMAHA, KAWAI, EYS, KUMON_PIANO) },
  // ── 石川県 ──
  "ishikawa/kanazawa": { name: "金沢市", prefName: "石川県", prefSlug: "ishikawa", schools: areaSchools("金沢市", "石川県", YAMAHA, KAWAI, KUMON_PIANO, LACCA) },
  "ishikawa/nonoichi": { name: "野々市市", prefName: "石川県", prefSlug: "ishikawa", schools: areaSchools("野々市市", "石川県", YAMAHA, KAWAI, KUMON_PIANO, LACCA) },
  "ishikawa/uchinada": { name: "内灘町", prefName: "石川県", prefSlug: "ishikawa", schools: areaSchools("内灘町", "石川県", YAMAHA, KAWAI, KUMON_PIANO, LACCA) },
  // ── 神奈川県 ──
  "kanagawa/aoba": { name: "青葉区", prefName: "神奈川県", prefSlug: "kanagawa", schools: areaSchools("青葉区", "神奈川県", YAMAHA, KAWAI, EYS, LACCA) },
  "kanagawa/atsugi": { name: "厚木市", prefName: "神奈川県", prefSlug: "kanagawa", schools: areaSchools("厚木市", "神奈川県", YAMAHA, KAWAI, KUMON_PIANO, EYS) },
  "kanagawa/ebina": { name: "海老名市", prefName: "神奈川県", prefSlug: "kanagawa", schools: areaSchools("海老名市", "神奈川県", YAMAHA, KAWAI, KUMON_PIANO, LACCA) },
  "kanagawa/fujisawa": { name: "藤沢市", prefName: "神奈川県", prefSlug: "kanagawa", schools: areaSchools("藤沢市", "神奈川県", YAMAHA, KAWAI, EYS, LACCA) },
  "kanagawa/kohoku": { name: "港北区", prefName: "神奈川県", prefSlug: "kanagawa", schools: areaSchools("港北区", "神奈川県", YAMAHA, EYS, KAWAI, LACCA) },
  "kanagawa/midori": { name: "緑区", prefName: "神奈川県", prefSlug: "kanagawa", schools: areaSchools("緑区", "神奈川県", YAMAHA, KAWAI, KUMON_PIANO, LACCA) },
  "kanagawa/nakahara": { name: "中原区", prefName: "神奈川県", prefSlug: "kanagawa", schools: areaSchools("中原区", "神奈川県", YAMAHA, KAWAI, EYS, LACCA) },
  "kanagawa/sagamihara": { name: "相模原市", prefName: "神奈川県", prefSlug: "kanagawa", schools: areaSchools("相模原市", "神奈川県", YAMAHA, KAWAI, KUMON_PIANO, LACCA) },
  "kanagawa/takatsu": { name: "高津区", prefName: "神奈川県", prefSlug: "kanagawa", schools: areaSchools("高津区", "神奈川県", YAMAHA, KAWAI, EYS, KUMON_PIANO) },
  "kanagawa/tsuzuki": { name: "都筑区", prefName: "神奈川県", prefSlug: "kanagawa", schools: areaSchools("都筑区", "神奈川県", YAMAHA, EYS, KAWAI, LACCA) },
  "kanagawa/yamato": { name: "大和市", prefName: "神奈川県", prefSlug: "kanagawa", schools: areaSchools("大和市", "神奈川県", YAMAHA, KAWAI, KUMON_PIANO, LACCA) },
  "kanagawa/yokosuka": { name: "横須賀市", prefName: "神奈川県", prefSlug: "kanagawa", schools: areaSchools("横須賀市", "神奈川県", YAMAHA, KAWAI, KUMON_PIANO, EYS) },
  "kanagawa/zushi": { name: "逗子市", prefName: "神奈川県", prefSlug: "kanagawa", schools: areaSchools("逗子市", "神奈川県", YAMAHA, KAWAI, KUMON_PIANO, LACCA) },
  // ── 京都府 ──
  "kyoto/kyoto-city": { name: "京都市", prefName: "京都府", prefSlug: "kyoto", schools: areaSchools("京都市", "京都府", YAMAHA, KAWAI, EYS, LACCA) },
  // ── 長野県 ──
  "nagano/nagano-city": { name: "長野市", prefName: "長野県", prefSlug: "nagano", schools: areaSchools("長野市", "長野県", YAMAHA, KAWAI, KUMON_PIANO, LACCA) },
  // ── 埼玉県 ──
  "saitama/kawaguchi": { name: "川口市", prefName: "埼玉県", prefSlug: "saitama", schools: areaSchools("川口市", "埼玉県", YAMAHA, KAWAI, EYS, KUMON_PIANO) },
  "saitama/koshigaya": { name: "越谷市", prefName: "埼玉県", prefSlug: "saitama", schools: areaSchools("越谷市", "埼玉県", YAMAHA, KAWAI, KUMON_PIANO, LACCA) },
  "saitama/minami": { name: "南区", prefName: "埼玉県", prefSlug: "saitama", schools: areaSchools("南区", "埼玉県", YAMAHA, KAWAI, KUMON_PIANO, EYS) },
  "saitama/urawa": { name: "浦和区", prefName: "埼玉県", prefSlug: "saitama", schools: areaSchools("浦和区", "埼玉県", YAMAHA, KAWAI, EYS, LACCA) },
  // ── 滋賀県 ──
  "shiga/kusatsu": { name: "草津市", prefName: "滋賀県", prefSlug: "shiga", schools: areaSchools("草津市", "滋賀県", YAMAHA, KAWAI, KUMON_PIANO, EYS) },
  "shiga/otsu": { name: "大津市", prefName: "滋賀県", prefSlug: "shiga", schools: areaSchools("大津市", "滋賀県", YAMAHA, KAWAI, EYS, KUMON_PIANO) },
  // ── 東京都 ──
  "tokyo/chofu": { name: "調布市", prefName: "東京都", prefSlug: "tokyo", schools: areaSchools("調布市", "東京都", YAMAHA, KAWAI, EYS, LACCA) },
  "tokyo/edogawa": { name: "江戸川区", prefName: "東京都", prefSlug: "tokyo", schools: areaSchools("江戸川区", "東京都", YAMAHA, KAWAI, KUMON_PIANO, EYS) },
  "tokyo/kita": { name: "北区", prefName: "東京都", prefSlug: "tokyo", schools: areaSchools("北区", "東京都", YAMAHA, KAWAI, KUMON_PIANO, LACCA) },
  "tokyo/machida": { name: "町田市", prefName: "東京都", prefSlug: "tokyo", schools: areaSchools("町田市", "東京都", YAMAHA, KAWAI, EYS, LACCA) },
  "tokyo/meguro": { name: "目黒区", prefName: "東京都", prefSlug: "tokyo", schools: areaSchools("目黒区", "東京都", YAMAHA, EYS, KAWAI, LACCA) },
  "tokyo/minato": { name: "港区", prefName: "東京都", prefSlug: "tokyo", schools: areaSchools("港区", "東京都", EYS, YAMAHA, KAWAI, LACCA) },
  "tokyo/nerima": { name: "練馬区", prefName: "東京都", prefSlug: "tokyo", schools: areaSchools("練馬区", "東京都", YAMAHA, KAWAI, KUMON_PIANO, LACCA) },
  "tokyo/setagaya": { name: "世田谷区", prefName: "東京都", prefSlug: "tokyo", schools: areaSchools("世田谷区", "東京都", YAMAHA, EYS, KAWAI, LACCA) },
  "tokyo/shibuya": { name: "渋谷区", prefName: "東京都", prefSlug: "tokyo", schools: areaSchools("渋谷区", "東京都", EYS, YAMAHA, LACCA, KAWAI) },
  "tokyo/shinagawa": { name: "品川区", prefName: "東京都", prefSlug: "tokyo", schools: areaSchools("品川区", "東京都", YAMAHA, KAWAI, EYS, KUMON_PIANO) },
  "tokyo/shinjuku": { name: "新宿区", prefName: "東京都", prefSlug: "tokyo", schools: areaSchools("新宿区", "東京都", EYS, YAMAHA, LACCA, KAWAI) },
  "tokyo/suginami": { name: "杉並区", prefName: "東京都", prefSlug: "tokyo", schools: areaSchools("杉並区", "東京都", YAMAHA, KAWAI, EYS, KUMON_PIANO) },
  // ── 和歌山県 ──
  "wakayama/wakayama-city": { name: "和歌山市", prefName: "和歌山県", prefSlug: "wakayama", schools: areaSchools("和歌山市", "和歌山県", YAMAHA, KAWAI, KUMON_PIANO, LACCA) },
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
