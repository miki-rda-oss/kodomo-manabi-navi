const fs = require('fs');
const path = require('path');

const AREA_MAP = {
  'tokyo/setagaya':           { name: '世田谷区', pref: '東京都' },
  'tokyo/kita':               { name: '北区', pref: '東京都' },
  'tokyo/meguro':             { name: '目黒区', pref: '東京都' },
  'tokyo/edogawa':            { name: '江戸川区', pref: '東京都' },
  'tokyo/chofu':              { name: '調布市', pref: '東京都' },
  'tokyo/minato':             { name: '港区', pref: '東京都' },
  'tokyo/shinagawa':          { name: '品川区', pref: '東京都' },
  'tokyo/machida':            { name: '町田市', pref: '東京都' },
  'kanagawa/nakahara':        { name: '川崎市中原区', pref: '神奈川県' },
  'kanagawa/nakahara-shinjou':{ name: '川崎市中原区新城', pref: '神奈川県' },
  'kanagawa/takatsu':         { name: '川崎市高津区', pref: '神奈川県' },
  'kanagawa/tsuzuki':         { name: '横浜市都筑区', pref: '神奈川県' },
  'kanagawa/aoba':            { name: '横浜市青葉区', pref: '神奈川県' },
  'kanagawa/kohoku':          { name: '横浜市港北区', pref: '神奈川県' },
  'kanagawa/midori':          { name: '横浜市緑区', pref: '神奈川県' },
  'kanagawa/ebina':           { name: '海老名市', pref: '神奈川県' },
  'kanagawa/yamato':          { name: '大和市', pref: '神奈川県' },
  'kanagawa/atsugi':          { name: '厚木市', pref: '神奈川県' },
  'kanagawa/zushi':           { name: '逗子市', pref: '神奈川県' },
  'kanagawa/sagamihara':      { name: '相模原市南区', pref: '神奈川県' },
  'saitama/minami':           { name: 'さいたま市南区', pref: '埼玉県' },
  'chiba/kashiwa':            { name: '柏市', pref: '千葉県' },
  'ibaraki/tsukuba':          { name: 'つくば市', pref: '茨城県' },
  'ibaraki/mito':             { name: '水戸市', pref: '茨城県' },
  'ibaraki/hitachinaka':      { name: 'ひたちなか市', pref: '茨城県' },
  'ibaraki/tsuchiura':        { name: '土浦市', pref: '茨城県' },
  'ibaraki/hitachi':          { name: '日立市', pref: '茨城県' },
  'aichi/tenpaku':            { name: '名古屋市天白区', pref: '愛知県' },
  'aichi/moriyama':           { name: '名古屋市守山区', pref: '愛知県' },
  'aichi/nisshin':            { name: '日進市', pref: '愛知県' },
  'aichi/anjo':               { name: '安城市', pref: '愛知県' },
  'aichi/toyota':             { name: '豊田市', pref: '愛知県' },
  'aichi/owariasahi':         { name: '尾張旭市', pref: '愛知県' },
  'gifu/gifu-city':           { name: '岐阜市', pref: '岐阜県' },
  'gifu/kani':                { name: '可児市', pref: '岐阜県' },
  'gifu/minokamo':            { name: '美濃加茂市', pref: '岐阜県' },
  'gifu/tajimi':              { name: '多治見市', pref: '岐阜県' },
  'ishikawa/kanazawa':        { name: '金沢市', pref: '石川県' },
  'ishikawa/nonoichi':        { name: '野々市市', pref: '石川県' },
  'ishikawa/uchinada':        { name: '内灘町', pref: '石川県' },
  'nagano/nagano-city':       { name: '長野市', pref: '長野県' },
  'osaka/osaka-city':         { name: '大阪市', pref: '大阪府' },
  'osaka/toyonaka':           { name: '豊中市', pref: '大阪府' },
  'osaka/suita':              { name: '吹田市', pref: '大阪府' },
  'osaka/moriguchi':          { name: '守口市', pref: '大阪府' },
  'osaka/ibaraki':            { name: '茨木市', pref: '大阪府' },
  'osaka/minoh':              { name: '箕面市', pref: '大阪府' },
  'osaka/takatsuki':          { name: '高槻市', pref: '大阪府' },
  'osaka/sakai':              { name: '堺市', pref: '大阪府' },
  'kyoto/kyoto-city':         { name: '京都市', pref: '京都府' },
  'hyogo/nishinomiya':        { name: '西宮市', pref: '兵庫県' },
  'shiga/otsu':               { name: '大津市', pref: '滋賀県' },
  'shiga/kusatsu':            { name: '草津市', pref: '滋賀県' },
  'wakayama/wakayama-city':   { name: '和歌山市', pref: '和歌山県' },
};

const APP_DIR = path.join(__dirname, '../app');
const BASE_URL = 'https://www.kodomo-navi.com';

Object.entries(AREA_MAP).forEach(([slug, { name, pref }]) => {
  const dir = path.join(APP_DIR, slug);
  const pagePath = path.join(dir, 'page.jsx');
  const contentPath = path.join(dir, 'AreaContent.jsx');

  if (!fs.existsSync(pagePath)) {
    console.log(`SKIP (not found): ${slug}`);
    return;
  }

  // 既にAreaContent.jsxがあればスキップ
  if (fs.existsSync(contentPath)) {
    console.log(`SKIP (already done): ${slug}`);
    return;
  }

  // 現在のpage.jsxをAreaContent.jsxにコピー
  const original = fs.readFileSync(pagePath, 'utf8');
  fs.writeFileSync(contentPath, original);

  // 新しいpage.jsx（サーバーコンポーネント）を作成
  const newPage = `import AreaContent from "./AreaContent";

export const metadata = {
  title: '${name}の子供の習い事おすすめ｜口コミ・料金比較【コドモならいごと】',
  description: '${pref}${name}の子ども向け習い事教室を口コミ・料金で比較。ダンス・スイミング・英語・ピアノ・プログラミングなど人気教室の無料体験情報を掲載。',
  openGraph: {
    title: '${name}の子供の習い事おすすめ｜コドモならいごと',
    description: '${pref}${name}の子ども向け習い事教室を口コミ・料金で比較。',
    url: '${BASE_URL}/${slug}',
  },
};

export default function Page() {
  return <AreaContent />;
}
`;
  fs.writeFileSync(pagePath, newPage);
  console.log(`DONE: ${slug} (${pref}${name})`);
});

console.log('\n完了！');
