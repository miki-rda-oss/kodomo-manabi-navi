// /app/ballet/balletData.js

const K_BALLET = { name: "Kバレエスクール", rating: 4.4, fee: 8800, age: "3歳〜", desc: "熊川哲也が主宰する本格バレエスクール。全国展開で質の高い指導。", emoji: "🩰" };
const CHACOTT = { name: "チャコット バレエスタジオ", rating: 4.5, fee: 11000, age: "3歳〜", desc: "バレエ用品の老舗チャコットが運営。プロ講師による本格指導。", emoji: "🌸" };

function localSchool(name, area, desc, fee = 9800, rating = 4.2) {
  return { name, rating, fee, age: "3歳〜", desc: desc || `${area}に根ざしたバレエスクール。少人数制で丁寧な指導を行い、経験豊富な講師が在籍。発表会も充実。`, emoji: "🩰" };
}

const STD_FAQS = (prefName) => [
  { q: `${prefName}でバレエ教室は何歳から通えますか？`, a: "3〜4歳が最適です。多くのスクールで3歳から入会できる幼児クラスを設けています。" },
  { q: `${prefName}のバレエ教室の月謝相場は？`, a: "週1回で7,000〜15,000円。発表会費用は別途かかることが多いです。" },
  { q: "男の子でもバレエを習えますか？", a: "はい。体幹・バランス感覚が身につきます。男の子向けクラスを設けているスクールもあります。" },
  { q: "バレエの効果は？", a: "姿勢・柔軟性・表現力・集中力が育ちます。幼少期からの習い事として非常におすすめです。" },
];

const STD_BLOGS = [
  { href: "/blog/kids-ballet-guide", text: "子供のバレエ教室選び方" },
  { href: "/blog/kids-ballet-school-guide-2026", text: "子供バレエ教室おすすめ2026年版" },
  { href: "/blog/kids-ballet-benefits-guide", text: "子供がバレエを習う効果" },
  { href: "/blog/dance-vs-ballet-kids", text: "ダンスとバレエどちらを習わせる？" },
];

export const BALLET_PREFS = {
  osaka: {
    name: "大阪府",
    heroText: "関西最大都市・大阪のバレエ教室",
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
      K_BALLET, CHACOTT,
      localSchool("大阪バレエアカデミー", "大阪", "大阪を代表するバレエスクール。クラシックバレエからコンテンポラリーまで幅広く対応。", 10000, 4.3),
      localSchool("なにわバレエスタジオ", "大阪", "大阪市内に複数教室を展開する人気スクール。初心者から上級者まで丁寧に指導。", 9000, 4.2),
      localSchool("関西バレエ教室", "大阪", "関西エリアで長年の実績を誇るバレエスクール。毎年盛大な発表会を開催。", 8800, 4.1),
    ],
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
    heroText: "首都・東京の子ども向けバレエ教室",
    areas: [
      { slug: "chofu", name: "調布市" }, { slug: "edogawa", name: "江戸川区" },
      { slug: "kita", name: "北区" }, { slug: "machida", name: "町田市" },
      { slug: "meguro", name: "目黒区" }, { slug: "minato", name: "港区" },
      { slug: "nerima", name: "練馬区" }, { slug: "setagaya", name: "世田谷区" },
      { slug: "shibuya", name: "渋谷区" }, { slug: "shinagawa", name: "品川区" },
      { slug: "shinjuku", name: "新宿区" }, { slug: "suginami", name: "杉並区" },
    ],
    schools: [
      K_BALLET, CHACOTT,
      localSchool("東京バレエアカデミー", "東京", "都内トップクラスのバレエスクール。プロダンサーを多数輩出した実績ある指導陣。", 12000, 4.4),
      localSchool("東京シティバレエ", "東京", "東京都内に複数教室を展開。初心者クラスから本格クラスまで充実したコース設定。", 10000, 4.3),
      localSchool("スターバレエスタジオ東京", "東京", "経験豊富な講師陣によるきめ細かな指導。発表会・コンクール対策も万全。", 11000, 4.2),
    ],
    faqs: STD_FAQS("東京都"),
    blogs: STD_BLOGS,
    otherPrefs: [
      { slug: "kanagawa", name: "神奈川県" }, { slug: "saitama", name: "埼玉県" },
      { slug: "chiba", name: "千葉県" }, { slug: "osaka", name: "大阪府" },
    ],
  },
  kanagawa: {
    name: "神奈川県",
    heroText: "横浜・川崎を擁する神奈川県のバレエ教室",
    areas: [
      { slug: "aoba", name: "青葉区" }, { slug: "atsugi", name: "厚木市" },
      { slug: "ebina", name: "海老名市" }, { slug: "fujisawa", name: "藤沢市" },
      { slug: "kohoku", name: "港北区" }, { slug: "midori", name: "緑区" },
      { slug: "nakahara", name: "中原区" }, { slug: "nakahara-shinjou", name: "中原区新丸子" },
      { slug: "sagamihara", name: "相模原市" }, { slug: "takatsu", name: "高津区" },
      { slug: "tsuzuki", name: "都筑区" }, { slug: "yamato", name: "大和市" },
      { slug: "yokosuka", name: "横須賀市" }, { slug: "zushi", name: "逗子市" },
    ],
    schools: [
      K_BALLET, CHACOTT,
      localSchool("横浜バレエアカデミー", "横浜", "横浜を代表するバレエスクール。クラシックバレエの基礎から本格的な技術まで丁寧に指導。", 10000, 4.3),
      localSchool("神奈川バレエスタジオ", "神奈川", "神奈川県内に複数拠点を持つバレエスクール。子どもの成長に合わせたきめ細やかな指導が好評。", 9500, 4.2),
      localSchool("ベルバレエ神奈川", "神奈川", "初心者から上級者まで対応。毎年の発表会では子どもたちが舞台で輝く経験を。", 9000, 4.1),
    ],
    faqs: STD_FAQS("神奈川県"),
    blogs: STD_BLOGS,
    otherPrefs: [
      { slug: "tokyo", name: "東京都" }, { slug: "saitama", name: "埼玉県" },
      { slug: "chiba", name: "千葉県" }, { slug: "shizuoka", name: "静岡県" },
    ],
  },
  aichi: {
    name: "愛知県",
    heroText: "名古屋を中心とした愛知県のバレエ教室",
    areas: [
      { slug: "anjo", name: "安城市" }, { slug: "chikusa", name: "千種区" },
      { slug: "meito", name: "名東区" }, { slug: "midori", name: "緑区" },
      { slug: "moriyama", name: "守山区" }, { slug: "nisshin", name: "日進市" },
      { slug: "owariasahi", name: "尾張旭市" }, { slug: "tenpaku", name: "天白区" },
      { slug: "toyota", name: "豊田市" },
    ],
    schools: [
      K_BALLET, CHACOTT,
      localSchool("名古屋バレエアカデミー", "名古屋", "名古屋市内で長年の実績を誇るバレエスクール。プロ講師が基礎から丁寧に指導。", 10000, 4.3),
      localSchool("中部バレエスタジオ", "愛知", "愛知県内に複数教室を展開。幼児から高校生まで幅広い年齢層が通う人気スクール。", 9000, 4.2),
      localSchool("愛知バレエ教室", "愛知", "経験豊富な女性講師が在籍。明るく楽しい雰囲気でバレエの基礎から学べます。", 8500, 4.1),
    ],
    faqs: STD_FAQS("愛知県"),
    blogs: STD_BLOGS,
    otherPrefs: [
      { slug: "osaka", name: "大阪府" }, { slug: "gifu", name: "岐阜県" },
      { slug: "shizuoka", name: "静岡県" }, { slug: "mie", name: "三重県" },
    ],
  },
  gifu: {
    name: "岐阜県",
    heroText: "岐阜県の子ども向けバレエ教室",
    areas: [
      { slug: "gifu-city", name: "岐阜市" }, { slug: "kani", name: "可児市" },
      { slug: "minokamo", name: "美濃加茂市" }, { slug: "tajimi", name: "多治見市" },
    ],
    schools: [
      K_BALLET,
      localSchool("岐阜バレエスクール", "岐阜", "岐阜県内で実績のあるバレエスクール。少人数制で一人ひとりに丁寧な指導を行います。", 8800, 4.2),
      localSchool("ぎふバレエアカデミー", "岐阜", "クラシックバレエの基礎をしっかりと学べる環境を提供。発表会も毎年開催。", 8500, 4.1),
      localSchool("岐阜中央バレエ教室", "岐阜", "初心者歓迎の温かい雰囲気のスクール。無料体験レッスン随時実施中。", 7700, 4.0),
    ],
    faqs: STD_FAQS("岐阜県"),
    blogs: STD_BLOGS,
    otherPrefs: [
      { slug: "aichi", name: "愛知県" }, { slug: "shizuoka", name: "静岡県" },
      { slug: "nagano", name: "長野県" }, { slug: "mie", name: "三重県" },
    ],
  },
  hyogo: {
    name: "兵庫県",
    heroText: "神戸・西宮を擁する兵庫県のバレエ教室",
    areas: [
      { slug: "nishinomiya", name: "西宮市" },
    ],
    schools: [
      K_BALLET, CHACOTT,
      localSchool("神戸バレエアカデミー", "神戸", "神戸を拠点とする本格バレエスクール。経験豊富な講師陣によるきめ細やかな指導。", 10000, 4.3),
      localSchool("兵庫バレエスタジオ", "兵庫", "兵庫県内で長年の実績を誇るバレエスクール。幼児から大人まで対応するコース設定。", 9000, 4.2),
      localSchool("西宮バレエ教室", "西宮", "西宮市に根ざしたバレエスクール。少人数制できめ細かい指導が人気。", 8800, 4.1),
    ],
    faqs: STD_FAQS("兵庫県"),
    blogs: STD_BLOGS,
    otherPrefs: [
      { slug: "osaka", name: "大阪府" }, { slug: "kyoto", name: "京都府" },
      { slug: "nara", name: "奈良県" }, { slug: "wakayama", name: "和歌山県" },
    ],
  },
  ibaraki: {
    name: "茨城県",
    heroText: "茨城県の子ども向けバレエ教室",
    areas: [
      { slug: "hitachi", name: "日立市" }, { slug: "hitachinaka", name: "ひたちなか市" },
      { slug: "mito", name: "水戸市" }, { slug: "tsuchiura", name: "土浦市" },
      { slug: "tsukuba", name: "つくば市" },
    ],
    schools: [
      K_BALLET,
      localSchool("茨城バレエスクール", "茨城", "茨城県内で実績あるバレエスクール。プロ講師がバレエの基礎から丁寧に指導します。", 8800, 4.2),
      localSchool("水戸バレエアカデミー", "水戸", "水戸市を中心に展開するバレエスクール。幼児クラスから本格クラスまで充実のコース設定。", 8500, 4.1),
      localSchool("つくばバレエ教室", "つくば", "つくば市の人気バレエスクール。明るく楽しい雰囲気で子どもたちが伸び伸びと学べます。", 8000, 4.0),
    ],
    faqs: STD_FAQS("茨城県"),
    blogs: STD_BLOGS,
    otherPrefs: [
      { slug: "tokyo", name: "東京都" }, { slug: "saitama", name: "埼玉県" },
      { slug: "chiba", name: "千葉県" }, { slug: "tochigi", name: "栃木県" },
    ],
  },
  ishikawa: {
    name: "石川県",
    heroText: "金沢を中心とした石川県のバレエ教室",
    areas: [
      { slug: "kanazawa", name: "金沢市" }, { slug: "nonoichi", name: "野々市市" },
      { slug: "uchinada", name: "内灘町" },
    ],
    schools: [
      K_BALLET,
      localSchool("金沢バレエアカデミー", "金沢", "金沢市内で長年の実績を持つバレエスクール。クラシックバレエの美しい基礎を学べます。", 9000, 4.2),
      localSchool("石川バレエスタジオ", "石川", "石川県内に複数の教室を持つバレエスクール。幼児から大人まで楽しく学べる環境。", 8500, 4.1),
      localSchool("かなざわバレエ教室", "金沢", "初心者歓迎の温かい雰囲気のスクール。基礎からコンクール対策まで対応。", 7700, 4.0),
    ],
    faqs: STD_FAQS("石川県"),
    blogs: STD_BLOGS,
    otherPrefs: [
      { slug: "toyama", name: "富山県" }, { slug: "fukui", name: "福井県" },
      { slug: "niigata", name: "新潟県" }, { slug: "nagano", name: "長野県" },
    ],
  },
  kyoto: {
    name: "京都府",
    heroText: "古都・京都の子ども向けバレエ教室",
    areas: [
      { slug: "kyoto-city", name: "京都市" },
    ],
    schools: [
      K_BALLET, CHACOTT,
      localSchool("京都バレエアカデミー", "京都", "京都に根ざした本格バレエスクール。古都の文化と融合した美しい芸術表現を育みます。", 10000, 4.3),
      localSchool("京都バレエスタジオ", "京都", "京都市内で人気のバレエスクール。経験豊富な講師が初心者から上級者まで丁寧に指導。", 9000, 4.2),
      localSchool("みやこバレエ教室", "京都", "歴史ある京都で子どもたちにバレエの美しさを伝えるスクール。発表会も充実。", 8800, 4.1),
    ],
    faqs: STD_FAQS("京都府"),
    blogs: STD_BLOGS,
    otherPrefs: [
      { slug: "osaka", name: "大阪府" }, { slug: "hyogo", name: "兵庫県" },
      { slug: "shiga", name: "滋賀県" }, { slug: "nara", name: "奈良県" },
    ],
  },
  nagano: {
    name: "長野県",
    heroText: "長野県の子ども向けバレエ教室",
    areas: [
      { slug: "nagano-city", name: "長野市" },
    ],
    schools: [
      K_BALLET,
      localSchool("長野バレエスクール", "長野", "長野県内で実績あるバレエスクール。自然豊かな環境の中でバレエの美しさを学べます。", 8800, 4.2),
      localSchool("信州バレエアカデミー", "長野", "長野市内を中心に展開するバレエスクール。幼児から高校生まで幅広く受け入れています。", 8500, 4.1),
      localSchool("長野中央バレエ教室", "長野", "初心者でも安心して通える温かいスクール。発表会・コンクール対策も対応。", 7700, 4.0),
    ],
    faqs: STD_FAQS("長野県"),
    blogs: STD_BLOGS,
    otherPrefs: [
      { slug: "tokyo", name: "東京都" }, { slug: "aichi", name: "愛知県" },
      { slug: "gifu", name: "岐阜県" }, { slug: "niigata", name: "新潟県" },
    ],
  },
  shiga: {
    name: "滋賀県",
    heroText: "琵琶湖を擁する滋賀県のバレエ教室",
    areas: [
      { slug: "kusatsu", name: "草津市" }, { slug: "otsu", name: "大津市" },
    ],
    schools: [
      K_BALLET, CHACOTT,
      localSchool("滋賀バレエスクール", "滋賀", "琵琶湖のほとりで子どもたちにバレエの美しさを伝えるスクール。丁寧な指導が好評。", 9000, 4.2),
      localSchool("大津バレエアカデミー", "大津", "大津市内で人気のバレエスクール。経験豊富な講師が基礎からしっかり指導。", 8500, 4.1),
      localSchool("びわこバレエ教室", "滋賀", "滋賀県内で長年愛されるバレエスクール。初心者でも楽しく始められる環境。", 8000, 4.0),
    ],
    faqs: STD_FAQS("滋賀県"),
    blogs: STD_BLOGS,
    otherPrefs: [
      { slug: "osaka", name: "大阪府" }, { slug: "kyoto", name: "京都府" },
      { slug: "hyogo", name: "兵庫県" }, { slug: "mie", name: "三重県" },
    ],
  },
  wakayama: {
    name: "和歌山県",
    heroText: "和歌山県の子ども向けバレエ教室",
    areas: [
      { slug: "wakayama-city", name: "和歌山市" },
    ],
    schools: [
      K_BALLET,
      localSchool("和歌山バレエスクール", "和歌山", "和歌山県内で実績あるバレエスクール。少人数制で丁寧な個別指導を実施。", 8800, 4.2),
      localSchool("紀州バレエアカデミー", "和歌山", "和歌山市を中心に展開するバレエスクール。幼児から大人まで楽しく学べます。", 8500, 4.1),
      localSchool("わかやまバレエ教室", "和歌山", "初心者でも安心して通えるフレンドリーなスクール。発表会も毎年開催。", 7700, 4.0),
    ],
    faqs: STD_FAQS("和歌山県"),
    blogs: STD_BLOGS,
    otherPrefs: [
      { slug: "osaka", name: "大阪府" }, { slug: "hyogo", name: "兵庫県" },
      { slug: "nara", name: "奈良県" }, { slug: "mie", name: "三重県" },
    ],
  },
  saitama: {
    name: "埼玉県",
    heroText: "埼玉県の子ども向けバレエ教室",
    areas: [
      { slug: "kawaguchi", name: "川口市" }, { slug: "koshigaya", name: "越谷市" },
      { slug: "minami", name: "南区" }, { slug: "urawa", name: "浦和区" },
    ],
    schools: [
      K_BALLET, CHACOTT,
      localSchool("埼玉バレエアカデミー", "埼玉", "埼玉県内で人気のバレエスクール。プロ講師によるクラシックバレエの正統派指導。", 9500, 4.3),
      localSchool("さいたまバレエスタジオ", "さいたま", "さいたま市を中心に複数教室を展開。幼児から本格コースまで充実したカリキュラム。", 9000, 4.2),
      localSchool("浦和バレエ教室", "浦和", "浦和区の人気バレエスクール。少人数制できめ細かい指導が好評。", 8500, 4.1),
    ],
    faqs: STD_FAQS("埼玉県"),
    blogs: STD_BLOGS,
    otherPrefs: [
      { slug: "tokyo", name: "東京都" }, { slug: "kanagawa", name: "神奈川県" },
      { slug: "chiba", name: "千葉県" }, { slug: "gunma", name: "群馬県" },
    ],
  },
  chiba: {
    name: "千葉県",
    heroText: "千葉県の子ども向けバレエ教室",
    areas: [
      { slug: "chiba-city", name: "千葉市" }, { slug: "kashiwa", name: "柏市" },
      { slug: "matsudo", name: "松戸市" },
    ],
    schools: [
      K_BALLET, CHACOTT,
      localSchool("千葉バレエアカデミー", "千葉", "千葉県内で実績ある人気のバレエスクール。基礎からコンクール対策まで幅広く対応。", 9500, 4.3),
      localSchool("ちばバレエスタジオ", "千葉", "千葉市内を中心に展開するバレエスクール。幼児から高校生まで対応の充実カリキュラム。", 9000, 4.2),
      localSchool("柏バレエ教室", "柏", "柏市の人気バレエスクール。経験豊富な講師陣が子どもたちの才能を伸ばします。", 8800, 4.1),
    ],
    faqs: STD_FAQS("千葉県"),
    blogs: STD_BLOGS,
    otherPrefs: [
      { slug: "tokyo", name: "東京都" }, { slug: "saitama", name: "埼玉県" },
      { slug: "kanagawa", name: "神奈川県" }, { slug: "ibaraki", name: "茨城県" },
    ],
  },
  fukuoka: {
    name: "福岡県",
    heroText: "九州最大の都市・福岡のバレエ教室",
    areas: [],
    schools: [
      K_BALLET, CHACOTT,
      localSchool("福岡バレエアカデミー", "福岡", "福岡市内を中心に展開する人気バレエスクール。プロ講師による本格的な指導が好評。", 10000, 4.3),
      localSchool("博多バレエスタジオ", "福岡", "博多を拠点とするバレエスクール。幼児から大人まで楽しく学べる環境を提供。", 9000, 4.2),
      localSchool("九州バレエ教室", "福岡", "九州エリアで長年の実績を誇るバレエスクール。毎年盛大な発表会を開催。", 8800, 4.1),
    ],
    faqs: STD_FAQS("福岡県"),
    blogs: STD_BLOGS,
    otherPrefs: [
      { slug: "saga", name: "佐賀県" }, { slug: "nagasaki", name: "長崎県" },
      { slug: "kumamoto", name: "熊本県" }, { slug: "oita", name: "大分県" },
    ],
  },
  hokkaido: {
    name: "北海道",
    heroText: "北海道の子ども向けバレエ教室",
    areas: [],
    schools: [
      K_BALLET,
      localSchool("札幌バレエアカデミー", "北海道", "北海道最大の都市・札幌を拠点とするバレエスクール。長年の実績と丁寧な指導が好評。", 9500, 4.3),
      localSchool("北海道バレエスタジオ", "北海道", "北海道内に複数教室を展開。幼児クラスから本格クラスまで充実したカリキュラム。", 9000, 4.2),
      localSchool("さっぽろバレエ教室", "札幌", "札幌市内で人気のバレエスクール。アットホームな雰囲気で楽しくバレエが学べます。", 8500, 4.1),
    ],
    faqs: STD_FAQS("北海道"),
    blogs: STD_BLOGS,
    otherPrefs: [
      { slug: "aomori", name: "青森県" }, { slug: "iwate", name: "岩手県" },
      { slug: "miyagi", name: "宮城県" }, { slug: "akita", name: "秋田県" },
    ],
  },
  miyagi: {
    name: "宮城県",
    heroText: "仙台を擁する宮城県のバレエ教室",
    areas: [],
    schools: [
      K_BALLET,
      localSchool("仙台バレエアカデミー", "宮城", "仙台市を拠点とする人気バレエスクール。東北エリアでトップクラスの指導実績。", 9500, 4.3),
      localSchool("宮城バレエスタジオ", "宮城", "宮城県内に複数教室を展開するバレエスクール。初心者から上級者まで丁寧に指導。", 9000, 4.2),
      localSchool("みやぎバレエ教室", "宮城", "仙台市内で長年愛されるバレエスクール。毎年の発表会では子どもたちが輝きます。", 8500, 4.1),
    ],
    faqs: STD_FAQS("宮城県"),
    blogs: STD_BLOGS,
    otherPrefs: [
      { slug: "fukushima", name: "福島県" }, { slug: "yamagata", name: "山形県" },
      { slug: "iwate", name: "岩手県" }, { slug: "akita", name: "秋田県" },
    ],
  },
  hiroshima: {
    name: "広島県",
    heroText: "広島県の子ども向けバレエ教室",
    areas: [],
    schools: [
      K_BALLET,
      localSchool("広島バレエアカデミー", "広島", "広島市内を中心に展開する人気バレエスクール。クラシックバレエの正統派指導が好評。", 9500, 4.3),
      localSchool("広島バレエスタジオ", "広島", "広島県内に複数教室を持つバレエスクール。幼児から大人まで楽しく学べます。", 9000, 4.2),
      localSchool("ひろしまバレエ教室", "広島", "広島市内で長年の実績を誇るバレエスクール。毎年の発表会が保護者にも大好評。", 8800, 4.1),
    ],
    faqs: STD_FAQS("広島県"),
    blogs: STD_BLOGS,
    otherPrefs: [
      { slug: "okayama", name: "岡山県" }, { slug: "yamaguchi", name: "山口県" },
      { slug: "shimane", name: "島根県" }, { slug: "tottori", name: "鳥取県" },
    ],
  },
  shizuoka: {
    name: "静岡県",
    heroText: "静岡県の子ども向けバレエ教室",
    areas: [],
    schools: [
      K_BALLET,
      localSchool("静岡バレエアカデミー", "静岡", "静岡市を中心に展開するバレエスクール。富士山を望む自然豊かな環境でバレエが学べます。", 9000, 4.2),
      localSchool("しずおかバレエスタジオ", "静岡", "静岡県内で人気のバレエスクール。経験豊富な講師が初心者から丁寧に指導。", 8500, 4.1),
      localSchool("富士バレエ教室", "静岡", "初心者歓迎のアットホームなスクール。子どもたちが楽しく伸び伸びと学べます。", 7700, 4.0),
    ],
    faqs: STD_FAQS("静岡県"),
    blogs: STD_BLOGS,
    otherPrefs: [
      { slug: "aichi", name: "愛知県" }, { slug: "kanagawa", name: "神奈川県" },
      { slug: "nagano", name: "長野県" }, { slug: "yamanashi", name: "山梨県" },
    ],
  },
  okayama: {
    name: "岡山県",
    heroText: "岡山県の子ども向けバレエ教室",
    areas: [],
    schools: [
      K_BALLET,
      localSchool("岡山バレエアカデミー", "岡山", "岡山市内で長年の実績を誇るバレエスクール。クラシックバレエの基礎から丁寧に指導。", 9000, 4.2),
      localSchool("おかやまバレエスタジオ", "岡山", "岡山県内に複数教室を展開。幼児から大人まで楽しく学べる環境が整っています。", 8500, 4.1),
      localSchool("岡山中央バレエ教室", "岡山", "初心者歓迎のフレンドリーなスクール。毎年の発表会に向けて子どもたちが一丸となって練習します。", 7700, 4.0),
    ],
    faqs: STD_FAQS("岡山県"),
    blogs: STD_BLOGS,
    otherPrefs: [
      { slug: "hiroshima", name: "広島県" }, { slug: "tottori", name: "鳥取県" },
      { slug: "hyogo", name: "兵庫県" }, { slug: "kagawa", name: "香川県" },
    ],
  },
  niigata: {
    name: "新潟県",
    heroText: "新潟県の子ども向けバレエ教室",
    areas: [],
    schools: [
      K_BALLET,
      localSchool("新潟バレエアカデミー", "新潟", "新潟市内を中心に展開するバレエスクール。北陸エリアでトップクラスの指導実績。", 9000, 4.2),
      localSchool("にいがたバレエスタジオ", "新潟", "新潟県内に複数教室を持つバレエスクール。雪国の子どもたちにバレエの美しさを伝えます。", 8500, 4.1),
      localSchool("新潟中央バレエ教室", "新潟", "初心者でも安心して通える温かい雰囲気のスクール。発表会も毎年盛大に開催。", 7700, 4.0),
    ],
    faqs: STD_FAQS("新潟県"),
    blogs: STD_BLOGS,
    otherPrefs: [
      { slug: "nagano", name: "長野県" }, { slug: "fukushima", name: "福島県" },
      { slug: "yamagata", name: "山形県" }, { slug: "toyama", name: "富山県" },
    ],
  },
  tochigi: {
    name: "栃木県",
    heroText: "栃木県の子ども向けバレエ教室",
    areas: [],
    schools: [
      K_BALLET,
      localSchool("宇都宮バレエアカデミー", "栃木", "栃木県の中心都市・宇都宮を拠点とするバレエスクール。プロ講師による本格指導。", 9000, 4.2),
      localSchool("栃木バレエスタジオ", "栃木", "栃木県内に複数教室を展開するバレエスクール。幼児から高校生まで対応のカリキュラム。", 8500, 4.1),
      localSchool("とちぎバレエ教室", "栃木", "初心者歓迎の明るいスクール。楽しくバレエの基礎を学ぶことができます。", 7700, 4.0),
    ],
    faqs: STD_FAQS("栃木県"),
    blogs: STD_BLOGS,
    otherPrefs: [
      { slug: "tokyo", name: "東京都" }, { slug: "saitama", name: "埼玉県" },
      { slug: "gunma", name: "群馬県" }, { slug: "ibaraki", name: "茨城県" },
    ],
  },
  gunma: {
    name: "群馬県",
    heroText: "群馬県の子ども向けバレエ教室",
    areas: [],
    schools: [
      K_BALLET,
      localSchool("前橋バレエアカデミー", "群馬", "群馬県の県庁所在地・前橋を拠点とするバレエスクール。充実した設備と経験豊富な講師陣。", 9000, 4.2),
      localSchool("群馬バレエスタジオ", "群馬", "群馬県内に複数教室を持つバレエスクール。幼児から大人まで楽しく学べます。", 8500, 4.1),
      localSchool("ぐんまバレエ教室", "群馬", "温かい雰囲気のアットホームなスクール。初心者でも安心して通えます。", 7700, 4.0),
    ],
    faqs: STD_FAQS("群馬県"),
    blogs: STD_BLOGS,
    otherPrefs: [
      { slug: "tokyo", name: "東京都" }, { slug: "saitama", name: "埼玉県" },
      { slug: "tochigi", name: "栃木県" }, { slug: "nagano", name: "長野県" },
    ],
  },
  mie: {
    name: "三重県",
    heroText: "三重県の子ども向けバレエ教室",
    areas: [],
    schools: [
      K_BALLET,
      localSchool("三重バレエアカデミー", "三重", "三重県内で実績あるバレエスクール。伊勢神宮の神秘が宿る地で美しいバレエを学びます。", 9000, 4.2),
      localSchool("みえバレエスタジオ", "三重", "三重県内に複数教室を展開するバレエスクール。初心者から上級者まで丁寧に指導。", 8500, 4.1),
      localSchool("津バレエ教室", "三重", "三重県の県庁所在地・津市の人気バレエスクール。楽しく伸び伸びと学べる環境。", 7700, 4.0),
    ],
    faqs: STD_FAQS("三重県"),
    blogs: STD_BLOGS,
    otherPrefs: [
      { slug: "aichi", name: "愛知県" }, { slug: "osaka", name: "大阪府" },
      { slug: "kyoto", name: "京都府" }, { slug: "nara", name: "奈良県" },
    ],
  },
  nara: {
    name: "奈良県",
    heroText: "奈良県の子ども向けバレエ教室",
    areas: [],
    schools: [
      K_BALLET,
      localSchool("奈良バレエアカデミー", "奈良", "歴史ある奈良で子どもたちにバレエの美しさを伝えるスクール。丁寧な指導が好評。", 9000, 4.2),
      localSchool("ならバレエスタジオ", "奈良", "奈良県内で人気のバレエスクール。初心者から本格コースまで充実したカリキュラム。", 8500, 4.1),
      localSchool("古都バレエ教室", "奈良", "奈良の歴史文化に触れながらバレエを学べるスクール。発表会も毎年開催。", 7700, 4.0),
    ],
    faqs: STD_FAQS("奈良県"),
    blogs: STD_BLOGS,
    otherPrefs: [
      { slug: "osaka", name: "大阪府" }, { slug: "kyoto", name: "京都府" },
      { slug: "hyogo", name: "兵庫県" }, { slug: "wakayama", name: "和歌山県" },
    ],
  },
  fukui: {
    name: "福井県",
    heroText: "福井県の子ども向けバレエ教室",
    areas: [],
    schools: [
      K_BALLET,
      localSchool("福井バレエアカデミー", "福井", "福井県内で長年の実績を誇るバレエスクール。少人数制でじっくりと技術を磨けます。", 9000, 4.2),
      localSchool("ふくいバレエスタジオ", "福井", "福井市内で人気のバレエスクール。経験豊富な講師が子どもたちの可能性を引き出します。", 8500, 4.1),
      localSchool("福井中央バレエ教室", "福井", "初心者でも安心して通えるフレンドリーなスクール。毎年楽しい発表会を開催。", 7700, 4.0),
    ],
    faqs: STD_FAQS("福井県"),
    blogs: STD_BLOGS,
    otherPrefs: [
      { slug: "ishikawa", name: "石川県" }, { slug: "toyama", name: "富山県" },
      { slug: "gifu", name: "岐阜県" }, { slug: "kyoto", name: "京都府" },
    ],
  },
  toyama: {
    name: "富山県",
    heroText: "富山県の子ども向けバレエ教室",
    areas: [],
    schools: [
      K_BALLET,
      localSchool("富山バレエアカデミー", "富山", "北アルプスを望む富山でバレエを学べるスクール。初心者から本格コースまで対応。", 9000, 4.2),
      localSchool("とやまバレエスタジオ", "富山", "富山市内で人気のバレエスクール。経験豊富な講師が子どもたちの成長をサポート。", 8500, 4.1),
      localSchool("富山中央バレエ教室", "富山", "温かい雰囲気のアットホームなスクール。楽しく基礎から学べます。", 7700, 4.0),
    ],
    faqs: STD_FAQS("富山県"),
    blogs: STD_BLOGS,
    otherPrefs: [
      { slug: "ishikawa", name: "石川県" }, { slug: "fukui", name: "福井県" },
      { slug: "niigata", name: "新潟県" }, { slug: "nagano", name: "長野県" },
    ],
  },
  yamanashi: {
    name: "山梨県",
    heroText: "山梨県の子ども向けバレエ教室",
    areas: [],
    schools: [
      K_BALLET,
      localSchool("甲府バレエアカデミー", "山梨", "山梨県の県庁所在地・甲府を拠点とするバレエスクール。富士山を望む環境でバレエを学べます。", 9000, 4.2),
      localSchool("山梨バレエスタジオ", "山梨", "山梨県内で人気のバレエスクール。少人数制で丁寧な個別指導を実施しています。", 8500, 4.1),
      localSchool("やまなしバレエ教室", "山梨", "初心者でも楽しく通えるアットホームなスクール。発表会も毎年開催。", 7700, 4.0),
    ],
    faqs: STD_FAQS("山梨県"),
    blogs: STD_BLOGS,
    otherPrefs: [
      { slug: "tokyo", name: "東京都" }, { slug: "kanagawa", name: "神奈川県" },
      { slug: "shizuoka", name: "静岡県" }, { slug: "nagano", name: "長野県" },
    ],
  },
  tottori: {
    name: "鳥取県",
    heroText: "鳥取県の子ども向けバレエ教室",
    areas: [],
    schools: [
      K_BALLET,
      localSchool("鳥取バレエアカデミー", "鳥取", "鳥取砂丘で有名な鳥取県のバレエスクール。少人数制で丁寧に基礎から指導します。", 9000, 4.2),
      localSchool("とっとりバレエスタジオ", "鳥取", "鳥取県内で実績あるバレエスクール。初心者から上級者まで幅広く受け入れています。", 8500, 4.1),
      localSchool("鳥取中央バレエ教室", "鳥取", "地域に根ざしたアットホームなバレエスクール。毎年の発表会が楽しみです。", 7700, 4.0),
    ],
    faqs: STD_FAQS("鳥取県"),
    blogs: STD_BLOGS,
    otherPrefs: [
      { slug: "shimane", name: "島根県" }, { slug: "okayama", name: "岡山県" },
      { slug: "hiroshima", name: "広島県" }, { slug: "hyogo", name: "兵庫県" },
    ],
  },
  shimane: {
    name: "島根県",
    heroText: "島根県の子ども向けバレエ教室",
    areas: [],
    schools: [
      K_BALLET,
      localSchool("松江バレエアカデミー", "島根", "出雲大社でも有名な島根県のバレエスクール。松江市を拠点に丁寧な指導を行います。", 9000, 4.2),
      localSchool("島根バレエスタジオ", "島根", "島根県内で長年愛されるバレエスクール。幼児から大人まで楽しく学べる環境を提供。", 8500, 4.1),
      localSchool("しまねバレエ教室", "島根", "地域に根ざしたアットホームなスクール。初心者でも安心して始められます。", 7700, 4.0),
    ],
    faqs: STD_FAQS("島根県"),
    blogs: STD_BLOGS,
    otherPrefs: [
      { slug: "tottori", name: "鳥取県" }, { slug: "hiroshima", name: "広島県" },
      { slug: "yamaguchi", name: "山口県" }, { slug: "okayama", name: "岡山県" },
    ],
  },
  kochi: {
    name: "高知県",
    heroText: "高知県の子ども向けバレエ教室",
    areas: [],
    schools: [
      K_BALLET,
      localSchool("高知バレエアカデミー", "高知", "南国・高知の太陽のように明るい雰囲気のバレエスクール。丁寧な指導で基礎を固めます。", 9000, 4.2),
      localSchool("こうちバレエスタジオ", "高知", "高知市内で人気のバレエスクール。経験豊富な講師が子どもたちの個性を伸ばします。", 8500, 4.1),
      localSchool("土佐バレエ教室", "高知", "高知県に根ざした温かい雰囲気のスクール。初心者でも楽しく始められます。", 7700, 4.0),
    ],
    faqs: STD_FAQS("高知県"),
    blogs: STD_BLOGS,
    otherPrefs: [
      { slug: "tokushima", name: "徳島県" }, { slug: "ehime", name: "愛媛県" },
      { slug: "kagawa", name: "香川県" }, { slug: "hiroshima", name: "広島県" },
    ],
  },
  tokushima: {
    name: "徳島県",
    heroText: "徳島県の子ども向けバレエ教室",
    areas: [],
    schools: [
      K_BALLET,
      localSchool("徳島バレエアカデミー", "徳島", "阿波踊りの地・徳島で子どもたちにバレエの美しさを伝えるスクール。丁寧な指導が好評。", 9000, 4.2),
      localSchool("とくしまバレエスタジオ", "徳島", "徳島市内で人気のバレエスクール。幼児から大人まで楽しく学べます。", 8500, 4.1),
      localSchool("阿波バレエ教室", "徳島", "地域に根ざしたフレンドリーなスクール。初心者でも安心して通えます。", 7700, 4.0),
    ],
    faqs: STD_FAQS("徳島県"),
    blogs: STD_BLOGS,
    otherPrefs: [
      { slug: "kagawa", name: "香川県" }, { slug: "ehime", name: "愛媛県" },
      { slug: "kochi", name: "高知県" }, { slug: "hyogo", name: "兵庫県" },
    ],
  },
  kagawa: {
    name: "香川県",
    heroText: "香川県の子ども向けバレエ教室",
    areas: [],
    schools: [
      K_BALLET,
      localSchool("高松バレエアカデミー", "香川", "讃岐うどんで有名な香川県の人気バレエスクール。高松市を拠点に丁寧な指導を行います。", 9000, 4.2),
      localSchool("香川バレエスタジオ", "香川", "香川県内で長年の実績を誇るバレエスクール。幼児から大人まで楽しく学べます。", 8500, 4.1),
      localSchool("さぬきバレエ教室", "香川", "地域に愛されるアットホームなスクール。毎年の発表会が楽しみです。", 7700, 4.0),
    ],
    faqs: STD_FAQS("香川県"),
    blogs: STD_BLOGS,
    otherPrefs: [
      { slug: "tokushima", name: "徳島県" }, { slug: "ehime", name: "愛媛県" },
      { slug: "kochi", name: "高知県" }, { slug: "okayama", name: "岡山県" },
    ],
  },
  saga: {
    name: "佐賀県",
    heroText: "佐賀県の子ども向けバレエ教室",
    areas: [],
    schools: [
      K_BALLET,
      localSchool("佐賀バレエアカデミー", "佐賀", "有田焼で有名な佐賀県のバレエスクール。伝統ある地でバレエの美しさを学べます。", 9000, 4.2),
      localSchool("さがバレエスタジオ", "佐賀", "佐賀市内で人気のバレエスクール。経験豊富な講師が子どもたちを丁寧に指導。", 8500, 4.1),
      localSchool("佐賀中央バレエ教室", "佐賀", "温かい雰囲気のスクール。初心者でも楽しくバレエを始められます。", 7700, 4.0),
    ],
    faqs: STD_FAQS("佐賀県"),
    blogs: STD_BLOGS,
    otherPrefs: [
      { slug: "fukuoka", name: "福岡県" }, { slug: "nagasaki", name: "長崎県" },
      { slug: "kumamoto", name: "熊本県" }, { slug: "oita", name: "大分県" },
    ],
  },
  oita: {
    name: "大分県",
    heroText: "大分県の子ども向けバレエ教室",
    areas: [],
    schools: [
      K_BALLET,
      localSchool("大分バレエアカデミー", "大分", "温泉で有名な大分県のバレエスクール。大分市を拠点にプロ講師が丁寧に指導。", 9000, 4.2),
      localSchool("おおいたバレエスタジオ", "大分", "大分県内で人気のバレエスクール。幼児から大人まで楽しく学べる環境が整っています。", 8500, 4.1),
      localSchool("豊後バレエ教室", "大分", "地域に根ざした温かいスクール。初心者でも安心して通えます。", 7700, 4.0),
    ],
    faqs: STD_FAQS("大分県"),
    blogs: STD_BLOGS,
    otherPrefs: [
      { slug: "fukuoka", name: "福岡県" }, { slug: "kumamoto", name: "熊本県" },
      { slug: "miyazaki", name: "宮崎県" }, { slug: "ehime", name: "愛媛県" },
    ],
  },
  miyazaki: {
    name: "宮崎県",
    heroText: "宮崎県の子ども向けバレエ教室",
    areas: [],
    schools: [
      K_BALLET,
      localSchool("宮崎バレエアカデミー", "宮崎", "太陽あふれる宮崎でバレエを学べるスクール。明るく楽しい雰囲気が人気です。", 9000, 4.2),
      localSchool("みやざきバレエスタジオ", "宮崎", "宮崎市内で実績あるバレエスクール。幼児から高校生まで幅広く受け入れています。", 8500, 4.1),
      localSchool("日南バレエ教室", "宮崎", "宮崎県に根ざした温かいスクール。楽しくバレエの基礎を身につけられます。", 7700, 4.0),
    ],
    faqs: STD_FAQS("宮崎県"),
    blogs: STD_BLOGS,
    otherPrefs: [
      { slug: "fukuoka", name: "福岡県" }, { slug: "oita", name: "大分県" },
      { slug: "kumamoto", name: "熊本県" }, { slug: "kagoshima", name: "鹿児島県" },
    ],
  },
  okinawa: {
    name: "沖縄県",
    heroText: "沖縄県の子ども向けバレエ教室",
    areas: [],
    schools: [
      K_BALLET,
      localSchool("沖縄バレエアカデミー", "沖縄", "南国・沖縄でバレエを学べるスクール。青い海と空を感じながら美しいバレエを習得します。", 9000, 4.2),
      localSchool("おきなわバレエスタジオ", "沖縄", "那覇市を中心に展開するバレエスクール。沖縄の明るい文化とバレエを融合した独自の指導。", 8500, 4.1),
      localSchool("琉球バレエ教室", "沖縄", "沖縄に根ざしたアットホームなスクール。初心者でも楽しく通えます。", 7700, 4.0),
    ],
    faqs: STD_FAQS("沖縄県"),
    blogs: STD_BLOGS,
    otherPrefs: [
      { slug: "kagoshima", name: "鹿児島県" }, { slug: "fukuoka", name: "福岡県" },
      { slug: "miyazaki", name: "宮崎県" }, { slug: "kumamoto", name: "熊本県" },
    ],
  },
  kumamoto: {
    name: "熊本県",
    heroText: "熊本県の子ども向けバレエ教室",
    areas: [],
    schools: [
      K_BALLET,
      localSchool("熊本バレエアカデミー", "熊本", "熊本城で有名な熊本県のバレエスクール。熊本市を拠点に丁寧な指導を行います。", 9000, 4.2),
      localSchool("くまもとバレエスタジオ", "熊本", "熊本県内で長年の実績を誇るバレエスクール。幼児から大人まで楽しく学べます。", 8500, 4.1),
      localSchool("阿蘇バレエ教室", "熊本", "温かい雰囲気のアットホームなスクール。初心者でも安心して通えます。", 7700, 4.0),
    ],
    faqs: STD_FAQS("熊本県"),
    blogs: STD_BLOGS,
    otherPrefs: [
      { slug: "fukuoka", name: "福岡県" }, { slug: "saga", name: "佐賀県" },
      { slug: "nagasaki", name: "長崎県" }, { slug: "oita", name: "大分県" },
    ],
  },
  kagoshima: {
    name: "鹿児島県",
    heroText: "鹿児島県の子ども向けバレエ教室",
    areas: [],
    schools: [
      K_BALLET,
      localSchool("鹿児島バレエアカデミー", "鹿児島", "桜島が望める鹿児島でバレエを学べるスクール。雄大な自然の中で表現力を育みます。", 9000, 4.2),
      localSchool("かごしまバレエスタジオ", "鹿児島", "鹿児島市内で人気のバレエスクール。経験豊富な講師が初心者から丁寧に指導。", 8500, 4.1),
      localSchool("薩摩バレエ教室", "鹿児島", "地域に根ざしたフレンドリーなスクール。楽しく伸び伸びとバレエを学べます。", 7700, 4.0),
    ],
    faqs: STD_FAQS("鹿児島県"),
    blogs: STD_BLOGS,
    otherPrefs: [
      { slug: "fukuoka", name: "福岡県" }, { slug: "kumamoto", name: "熊本県" },
      { slug: "miyazaki", name: "宮崎県" }, { slug: "okinawa", name: "沖縄県" },
    ],
  },
  nagasaki: {
    name: "長崎県",
    heroText: "長崎県の子ども向けバレエ教室",
    areas: [],
    schools: [
      K_BALLET,
      localSchool("長崎バレエアカデミー", "長崎", "異国情緒あふれる長崎でバレエを学べるスクール。長崎市を拠点に丁寧な指導を行います。", 9000, 4.2),
      localSchool("ながさきバレエスタジオ", "長崎", "長崎県内で実績あるバレエスクール。幼児から大人まで楽しく学べる環境が整っています。", 8500, 4.1),
      localSchool("出島バレエ教室", "長崎", "長崎の歴史ある地で子どもたちにバレエの美しさを伝えるスクール。", 7700, 4.0),
    ],
    faqs: STD_FAQS("長崎県"),
    blogs: STD_BLOGS,
    otherPrefs: [
      { slug: "fukuoka", name: "福岡県" }, { slug: "saga", name: "佐賀県" },
      { slug: "kumamoto", name: "熊本県" }, { slug: "oita", name: "大分県" },
    ],
  },
  ehime: {
    name: "愛媛県",
    heroText: "愛媛県の子ども向けバレエ教室",
    areas: [],
    schools: [
      K_BALLET,
      localSchool("松山バレエアカデミー", "愛媛", "道後温泉で有名な愛媛県のバレエスクール。松山市を拠点に丁寧な指導を行います。", 9000, 4.2),
      localSchool("愛媛バレエスタジオ", "愛媛", "愛媛県内で長年の実績を誇るバレエスクール。幼児から大人まで楽しく学べます。", 8500, 4.1),
      localSchool("伊予バレエ教室", "愛媛", "地域に根ざした温かいスクール。初心者でも安心して通えます。", 7700, 4.0),
    ],
    faqs: STD_FAQS("愛媛県"),
    blogs: STD_BLOGS,
    otherPrefs: [
      { slug: "kagawa", name: "香川県" }, { slug: "tokushima", name: "徳島県" },
      { slug: "kochi", name: "高知県" }, { slug: "hiroshima", name: "広島県" },
    ],
  },
  yamaguchi: {
    name: "山口県",
    heroText: "山口県の子ども向けバレエ教室",
    areas: [],
    schools: [
      K_BALLET,
      localSchool("山口バレエアカデミー", "山口", "本州最西端の山口県のバレエスクール。山口市を拠点に丁寧な指導を行います。", 9000, 4.2),
      localSchool("やまぐちバレエスタジオ", "山口", "山口県内で人気のバレエスクール。経験豊富な講師が子どもたちの成長をサポート。", 8500, 4.1),
      localSchool("長門バレエ教室", "山口", "地域に根ざしたアットホームなスクール。楽しくバレエの基礎を身につけられます。", 7700, 4.0),
    ],
    faqs: STD_FAQS("山口県"),
    blogs: STD_BLOGS,
    otherPrefs: [
      { slug: "hiroshima", name: "広島県" }, { slug: "shimane", name: "島根県" },
      { slug: "fukuoka", name: "福岡県" }, { slug: "tottori", name: "鳥取県" },
    ],
  },
  fukushima: {
    name: "福島県",
    heroText: "福島県の子ども向けバレエ教室",
    areas: [],
    schools: [
      K_BALLET,
      localSchool("福島バレエアカデミー", "福島", "会津・磐梯山で有名な福島県のバレエスクール。自然豊かな環境でバレエを学べます。", 9000, 4.2),
      localSchool("ふくしまバレエスタジオ", "福島", "福島市内で実績あるバレエスクール。幼児から高校生まで対応の充実カリキュラム。", 8500, 4.1),
      localSchool("郡山バレエ教室", "福島", "温かい雰囲気のアットホームなスクール。初心者でも楽しくバレエを始められます。", 7700, 4.0),
    ],
    faqs: STD_FAQS("福島県"),
    blogs: STD_BLOGS,
    otherPrefs: [
      { slug: "miyagi", name: "宮城県" }, { slug: "yamagata", name: "山形県" },
      { slug: "ibaraki", name: "茨城県" }, { slug: "niigata", name: "新潟県" },
    ],
  },
  akita: {
    name: "秋田県",
    heroText: "秋田県の子ども向けバレエ教室",
    areas: [],
    schools: [
      K_BALLET,
      localSchool("秋田バレエアカデミー", "秋田", "なまはげで有名な秋田県のバレエスクール。東北の厳しい自然の中でたくましく美しいバレエを学びます。", 9000, 4.2),
      localSchool("あきたバレエスタジオ", "秋田", "秋田市内で人気のバレエスクール。初心者から本格コースまで幅広く対応。", 8500, 4.1),
      localSchool("竿燈バレエ教室", "秋田", "地域に根ざした温かいスクール。楽しくバレエの基礎を身につけられます。", 7700, 4.0),
    ],
    faqs: STD_FAQS("秋田県"),
    blogs: STD_BLOGS,
    otherPrefs: [
      { slug: "miyagi", name: "宮城県" }, { slug: "iwate", name: "岩手県" },
      { slug: "yamagata", name: "山形県" }, { slug: "aomori", name: "青森県" },
    ],
  },
  yamagata: {
    name: "山形県",
    heroText: "山形県の子ども向けバレエ教室",
    areas: [],
    schools: [
      K_BALLET,
      localSchool("山形バレエアカデミー", "山形", "蔵王・山寺で有名な山形県のバレエスクール。自然豊かな環境でバレエの美しさを学べます。", 9000, 4.2),
      localSchool("やまがたバレエスタジオ", "山形", "山形市内で実績あるバレエスクール。幼児から大人まで楽しく学べます。", 8500, 4.1),
      localSchool("出羽バレエ教室", "山形", "山形県に根ざした温かいスクール。初心者でも安心して通えます。", 7700, 4.0),
    ],
    faqs: STD_FAQS("山形県"),
    blogs: STD_BLOGS,
    otherPrefs: [
      { slug: "miyagi", name: "宮城県" }, { slug: "akita", name: "秋田県" },
      { slug: "fukushima", name: "福島県" }, { slug: "niigata", name: "新潟県" },
    ],
  },
  iwate: {
    name: "岩手県",
    heroText: "岩手県の子ども向けバレエ教室",
    areas: [],
    schools: [
      K_BALLET,
      localSchool("盛岡バレエアカデミー", "岩手", "岩手県の県庁所在地・盛岡を拠点とするバレエスクール。雄大な自然の中でバレエを学べます。", 9000, 4.2),
      localSchool("岩手バレエスタジオ", "岩手", "岩手県内で長年の実績を誇るバレエスクール。幼児から高校生まで対応のカリキュラム。", 8500, 4.1),
      localSchool("南部バレエ教室", "岩手", "アットホームな雰囲気のスクール。初心者でも楽しくバレエを始められます。", 7700, 4.0),
    ],
    faqs: STD_FAQS("岩手県"),
    blogs: STD_BLOGS,
    otherPrefs: [
      { slug: "miyagi", name: "宮城県" }, { slug: "akita", name: "秋田県" },
      { slug: "aomori", name: "青森県" }, { slug: "fukushima", name: "福島県" },
    ],
  },
  aomori: {
    name: "青森県",
    heroText: "青森県の子ども向けバレエ教室",
    areas: [],
    schools: [
      K_BALLET,
      localSchool("青森バレエアカデミー", "青森", "ねぶた祭りで有名な青森県のバレエスクール。青森市を拠点に丁寧な指導を行います。", 9000, 4.2),
      localSchool("あおもりバレエスタジオ", "青森", "青森県内で人気のバレエスクール。幼児から大人まで楽しく学べる環境が整っています。", 8500, 4.1),
      localSchool("津軽バレエ教室", "青森", "地域に根ざした温かいスクール。初心者でも安心して通えます。", 7700, 4.0),
    ],
    faqs: STD_FAQS("青森県"),
    blogs: STD_BLOGS,
    otherPrefs: [
      { slug: "iwate", name: "岩手県" }, { slug: "akita", name: "秋田県" },
      { slug: "miyagi", name: "宮城県" }, { slug: "hokkaido", name: "北海道" },
    ],
  },
};

// ────────────────────────────────────────────
// BALLET_AREAS: エリア別データ
// ────────────────────────────────────────────

function areaSchools(areaName, prefName, chain1, chain2, localName1, localName2) {
  return [
    { ...chain1 },
    { ...chain2 },
    localSchool(`${areaName}バレエスタジオ`, areaName, `${prefName}${areaName}エリアに根ざしたバレエスクール。少人数制で丁寧な指導を行い、経験豊富な講師が在籍。`, 9500, 4.2),
    localSchool(`${areaName}バレエ教室`, areaName, `${areaName}の子どもたちに人気のバレエスクール。初心者歓迎で楽しく基礎から学べます。`, 8500, 4.1),
    localSchool(`${localName1 || areaName}クラシックバレエ`, areaName, `クラシックバレエの正統派指導で定評あるスクール。発表会・コンクール対策も充実。`, 10000, 4.3),
  ];
}

export const BALLET_AREAS = {
  // ── 大阪府 ──
  "osaka/osaka-city": { name: "大阪市", prefName: "大阪府", prefSlug: "osaka", schools: areaSchools("大阪市", "大阪府", K_BALLET, CHACOTT) },
  "osaka/minoh": { name: "箕面市", prefName: "大阪府", prefSlug: "osaka", schools: areaSchools("箕面市", "大阪府", K_BALLET, CHACOTT) },
  "osaka/moriguchi": { name: "守口市", prefName: "大阪府", prefSlug: "osaka", schools: areaSchools("守口市", "大阪府", K_BALLET, CHACOTT) },
  "osaka/sakai": { name: "堺市", prefName: "大阪府", prefSlug: "osaka", schools: areaSchools("堺市", "大阪府", K_BALLET, CHACOTT) },
  "osaka/suita": { name: "吹田市", prefName: "大阪府", prefSlug: "osaka", schools: areaSchools("吹田市", "大阪府", K_BALLET, CHACOTT) },
  "osaka/takatsuki": { name: "高槻市", prefName: "大阪府", prefSlug: "osaka", schools: areaSchools("高槻市", "大阪府", K_BALLET, CHACOTT) },
  "osaka/toyonaka": { name: "豊中市", prefName: "大阪府", prefSlug: "osaka", schools: areaSchools("豊中市", "大阪府", K_BALLET, CHACOTT) },
  "osaka/ibaraki": { name: "茨木市", prefName: "大阪府", prefSlug: "osaka", schools: areaSchools("茨木市", "大阪府", K_BALLET, CHACOTT) },
  // ── 愛知県 ──
  "aichi/anjo": { name: "安城市", prefName: "愛知県", prefSlug: "aichi", schools: areaSchools("安城市", "愛知県", K_BALLET, CHACOTT) },
  "aichi/chikusa": { name: "千種区", prefName: "愛知県", prefSlug: "aichi", schools: areaSchools("千種区", "愛知県", K_BALLET, CHACOTT) },
  "aichi/meito": { name: "名東区", prefName: "愛知県", prefSlug: "aichi", schools: areaSchools("名東区", "愛知県", K_BALLET, CHACOTT) },
  "aichi/midori": { name: "緑区", prefName: "愛知県", prefSlug: "aichi", schools: areaSchools("緑区", "愛知県", K_BALLET, CHACOTT) },
  "aichi/moriyama": { name: "守山区", prefName: "愛知県", prefSlug: "aichi", schools: areaSchools("守山区", "愛知県", K_BALLET, CHACOTT) },
  "aichi/nisshin": { name: "日進市", prefName: "愛知県", prefSlug: "aichi", schools: areaSchools("日進市", "愛知県", K_BALLET, CHACOTT) },
  "aichi/owariasahi": { name: "尾張旭市", prefName: "愛知県", prefSlug: "aichi", schools: areaSchools("尾張旭市", "愛知県", K_BALLET, CHACOTT) },
  "aichi/tenpaku": { name: "天白区", prefName: "愛知県", prefSlug: "aichi", schools: areaSchools("天白区", "愛知県", K_BALLET, CHACOTT) },
  "aichi/toyota": { name: "豊田市", prefName: "愛知県", prefSlug: "aichi", schools: areaSchools("豊田市", "愛知県", K_BALLET, CHACOTT) },
  // ── 千葉県 ──
  "chiba/chiba-city": { name: "千葉市", prefName: "千葉県", prefSlug: "chiba", schools: areaSchools("千葉市", "千葉県", K_BALLET, CHACOTT) },
  "chiba/kashiwa": { name: "柏市", prefName: "千葉県", prefSlug: "chiba", schools: areaSchools("柏市", "千葉県", K_BALLET, CHACOTT) },
  "chiba/matsudo": { name: "松戸市", prefName: "千葉県", prefSlug: "chiba", schools: areaSchools("松戸市", "千葉県", K_BALLET, CHACOTT) },
  // ── 岐阜県 ──
  "gifu/gifu-city": { name: "岐阜市", prefName: "岐阜県", prefSlug: "gifu", schools: areaSchools("岐阜市", "岐阜県", K_BALLET, localSchool("岐阜バレエスクール", "岐阜")) },
  "gifu/kani": { name: "可児市", prefName: "岐阜県", prefSlug: "gifu", schools: areaSchools("可児市", "岐阜県", K_BALLET, localSchool("岐阜バレエスクール", "岐阜")) },
  "gifu/minokamo": { name: "美濃加茂市", prefName: "岐阜県", prefSlug: "gifu", schools: areaSchools("美濃加茂市", "岐阜県", K_BALLET, localSchool("岐阜バレエスクール", "岐阜")) },
  "gifu/tajimi": { name: "多治見市", prefName: "岐阜県", prefSlug: "gifu", schools: areaSchools("多治見市", "岐阜県", K_BALLET, localSchool("岐阜バレエスクール", "岐阜")) },
  // ── 兵庫県 ──
  "hyogo/nishinomiya": { name: "西宮市", prefName: "兵庫県", prefSlug: "hyogo", schools: areaSchools("西宮市", "兵庫県", K_BALLET, CHACOTT) },
  // ── 茨城県 ──
  "ibaraki/hitachi": { name: "日立市", prefName: "茨城県", prefSlug: "ibaraki", schools: areaSchools("日立市", "茨城県", K_BALLET, localSchool("茨城バレエスクール", "茨城")) },
  "ibaraki/hitachinaka": { name: "ひたちなか市", prefName: "茨城県", prefSlug: "ibaraki", schools: areaSchools("ひたちなか市", "茨城県", K_BALLET, localSchool("茨城バレエスクール", "茨城")) },
  "ibaraki/mito": { name: "水戸市", prefName: "茨城県", prefSlug: "ibaraki", schools: areaSchools("水戸市", "茨城県", K_BALLET, localSchool("茨城バレエスクール", "茨城")) },
  "ibaraki/tsuchiura": { name: "土浦市", prefName: "茨城県", prefSlug: "ibaraki", schools: areaSchools("土浦市", "茨城県", K_BALLET, localSchool("茨城バレエスクール", "茨城")) },
  "ibaraki/tsukuba": { name: "つくば市", prefName: "茨城県", prefSlug: "ibaraki", schools: areaSchools("つくば市", "茨城県", K_BALLET, localSchool("茨城バレエスクール", "茨城")) },
  // ── 石川県 ──
  "ishikawa/kanazawa": { name: "金沢市", prefName: "石川県", prefSlug: "ishikawa", schools: areaSchools("金沢市", "石川県", K_BALLET, localSchool("金沢バレエアカデミー", "石川")) },
  "ishikawa/nonoichi": { name: "野々市市", prefName: "石川県", prefSlug: "ishikawa", schools: areaSchools("野々市市", "石川県", K_BALLET, localSchool("金沢バレエアカデミー", "石川")) },
  "ishikawa/uchinada": { name: "内灘町", prefName: "石川県", prefSlug: "ishikawa", schools: areaSchools("内灘町", "石川県", K_BALLET, localSchool("金沢バレエアカデミー", "石川")) },
  // ── 神奈川県 ──
  "kanagawa/aoba": { name: "青葉区", prefName: "神奈川県", prefSlug: "kanagawa", schools: areaSchools("青葉区", "神奈川県", K_BALLET, CHACOTT) },
  "kanagawa/atsugi": { name: "厚木市", prefName: "神奈川県", prefSlug: "kanagawa", schools: areaSchools("厚木市", "神奈川県", K_BALLET, CHACOTT) },
  "kanagawa/ebina": { name: "海老名市", prefName: "神奈川県", prefSlug: "kanagawa", schools: areaSchools("海老名市", "神奈川県", K_BALLET, CHACOTT) },
  "kanagawa/fujisawa": { name: "藤沢市", prefName: "神奈川県", prefSlug: "kanagawa", schools: areaSchools("藤沢市", "神奈川県", K_BALLET, CHACOTT) },
  "kanagawa/kohoku": { name: "港北区", prefName: "神奈川県", prefSlug: "kanagawa", schools: areaSchools("港北区", "神奈川県", K_BALLET, CHACOTT) },
  "kanagawa/midori": { name: "緑区", prefName: "神奈川県", prefSlug: "kanagawa", schools: areaSchools("緑区", "神奈川県", K_BALLET, CHACOTT) },
  "kanagawa/nakahara": { name: "中原区", prefName: "神奈川県", prefSlug: "kanagawa", schools: areaSchools("中原区", "神奈川県", K_BALLET, CHACOTT) },
  "kanagawa/nakahara-shinjou": { name: "中原区新丸子", prefName: "神奈川県", prefSlug: "kanagawa", schools: areaSchools("中原区新丸子", "神奈川県", K_BALLET, CHACOTT) },
  "kanagawa/sagamihara": { name: "相模原市", prefName: "神奈川県", prefSlug: "kanagawa", schools: areaSchools("相模原市", "神奈川県", K_BALLET, CHACOTT) },
  "kanagawa/takatsu": { name: "高津区", prefName: "神奈川県", prefSlug: "kanagawa", schools: areaSchools("高津区", "神奈川県", K_BALLET, CHACOTT) },
  "kanagawa/tsuzuki": { name: "都筑区", prefName: "神奈川県", prefSlug: "kanagawa", schools: areaSchools("都筑区", "神奈川県", K_BALLET, CHACOTT) },
  "kanagawa/yamato": { name: "大和市", prefName: "神奈川県", prefSlug: "kanagawa", schools: areaSchools("大和市", "神奈川県", K_BALLET, CHACOTT) },
  "kanagawa/yokosuka": { name: "横須賀市", prefName: "神奈川県", prefSlug: "kanagawa", schools: areaSchools("横須賀市", "神奈川県", K_BALLET, CHACOTT) },
  "kanagawa/zushi": { name: "逗子市", prefName: "神奈川県", prefSlug: "kanagawa", schools: areaSchools("逗子市", "神奈川県", K_BALLET, CHACOTT) },
  // ── 京都府 ──
  "kyoto/kyoto-city": { name: "京都市", prefName: "京都府", prefSlug: "kyoto", schools: areaSchools("京都市", "京都府", K_BALLET, CHACOTT) },
  // ── 長野県 ──
  "nagano/nagano-city": { name: "長野市", prefName: "長野県", prefSlug: "nagano", schools: areaSchools("長野市", "長野県", K_BALLET, localSchool("長野バレエスクール", "長野")) },
  // ── 埼玉県 ──
  "saitama/kawaguchi": { name: "川口市", prefName: "埼玉県", prefSlug: "saitama", schools: areaSchools("川口市", "埼玉県", K_BALLET, CHACOTT) },
  "saitama/koshigaya": { name: "越谷市", prefName: "埼玉県", prefSlug: "saitama", schools: areaSchools("越谷市", "埼玉県", K_BALLET, CHACOTT) },
  "saitama/minami": { name: "南区", prefName: "埼玉県", prefSlug: "saitama", schools: areaSchools("南区", "埼玉県", K_BALLET, CHACOTT) },
  "saitama/urawa": { name: "浦和区", prefName: "埼玉県", prefSlug: "saitama", schools: areaSchools("浦和区", "埼玉県", K_BALLET, CHACOTT) },
  // ── 滋賀県 ──
  "shiga/kusatsu": { name: "草津市", prefName: "滋賀県", prefSlug: "shiga", schools: areaSchools("草津市", "滋賀県", K_BALLET, CHACOTT) },
  "shiga/otsu": { name: "大津市", prefName: "滋賀県", prefSlug: "shiga", schools: areaSchools("大津市", "滋賀県", K_BALLET, CHACOTT) },
  // ── 東京都 ──
  "tokyo/chofu": { name: "調布市", prefName: "東京都", prefSlug: "tokyo", schools: areaSchools("調布市", "東京都", K_BALLET, CHACOTT) },
  "tokyo/edogawa": { name: "江戸川区", prefName: "東京都", prefSlug: "tokyo", schools: areaSchools("江戸川区", "東京都", K_BALLET, CHACOTT) },
  "tokyo/kita": { name: "北区", prefName: "東京都", prefSlug: "tokyo", schools: areaSchools("北区", "東京都", K_BALLET, CHACOTT) },
  "tokyo/machida": { name: "町田市", prefName: "東京都", prefSlug: "tokyo", schools: areaSchools("町田市", "東京都", K_BALLET, CHACOTT) },
  "tokyo/meguro": { name: "目黒区", prefName: "東京都", prefSlug: "tokyo", schools: areaSchools("目黒区", "東京都", K_BALLET, CHACOTT) },
  "tokyo/minato": { name: "港区", prefName: "東京都", prefSlug: "tokyo", schools: areaSchools("港区", "東京都", K_BALLET, CHACOTT) },
  "tokyo/nerima": { name: "練馬区", prefName: "東京都", prefSlug: "tokyo", schools: areaSchools("練馬区", "東京都", K_BALLET, CHACOTT) },
  "tokyo/setagaya": { name: "世田谷区", prefName: "東京都", prefSlug: "tokyo", schools: areaSchools("世田谷区", "東京都", K_BALLET, CHACOTT) },
  "tokyo/shibuya": { name: "渋谷区", prefName: "東京都", prefSlug: "tokyo", schools: areaSchools("渋谷区", "東京都", K_BALLET, CHACOTT) },
  "tokyo/shinagawa": { name: "品川区", prefName: "東京都", prefSlug: "tokyo", schools: areaSchools("品川区", "東京都", K_BALLET, CHACOTT) },
  "tokyo/shinjuku": { name: "新宿区", prefName: "東京都", prefSlug: "tokyo", schools: areaSchools("新宿区", "東京都", K_BALLET, CHACOTT) },
  "tokyo/suginami": { name: "杉並区", prefName: "東京都", prefSlug: "tokyo", schools: areaSchools("杉並区", "東京都", K_BALLET, CHACOTT) },
  // ── 和歌山県 ──
  "wakayama/wakayama-city": { name: "和歌山市", prefName: "和歌山県", prefSlug: "wakayama", schools: areaSchools("和歌山市", "和歌山県", K_BALLET, localSchool("和歌山バレエスクール", "和歌山")) },
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
