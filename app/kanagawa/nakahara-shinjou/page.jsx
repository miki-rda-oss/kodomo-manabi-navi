import AreaContent from "./AreaContent";

export const metadata = {
  alternates: { canonical: 'https://www.kodomo-navi.com/kanagawa/nakahara-shinjou' },
  title: '川崎市中原区新城の子供の習い事おすすめ｜口コミ・料金比較【コドモならいごと】',
  description: '神奈川県川崎市中原区新城の子ども向け習い事教室を口コミ・料金で比較。ダンス・スイミング・英語・ピアノ・プログラミングなど人気教室の無料体験情報を掲載。',
  openGraph: {
    title: '川崎市中原区新城の子供の習い事おすすめ｜コドモならいごと',
    description: '神奈川県川崎市中原区新城の子ども向け習い事教室を口コミ・料金で比較。',
    url: 'https://www.kodomo-navi.com/kanagawa/nakahara-shinjou',
  },
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: `{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"トップ","item":"https://www.kodomo-navi.com"},{"@type":"ListItem","position":2,"name":"神奈川県の習い事","item":"https://www.kodomo-navi.com/kanagawa"},{"@type":"ListItem","position":3,"name":"中原区（新城）の習い事","item":"https://www.kodomo-navi.com/kanagawa/nakahara-shinjou"}]}` }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: `{"@context":"https://schema.org","@type":"WebPage","name":"中原区（新城）の子供の習い事おすすめ","url":"https://www.kodomo-navi.com/kanagawa/nakahara-shinjou","description":"中原区（新城）の子ども向け習い事教室を口コミ・料金で比較。ダンス・スイミング・英語・ピアノなど人気教室の無料体験情報を掲載。","breadcrumb":{"@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"トップ","item":"https://www.kodomo-navi.com"},{"@type":"ListItem","position":2,"name":"中原区（新城）の習い事","item":"https://www.kodomo-navi.com/kanagawa/nakahara-shinjou"}]},"publisher":{"@type":"Organization","name":"コドモならいごと","url":"https://www.kodomo-navi.com"}}` }} />
      <AreaContent />
    </>
  );
}
