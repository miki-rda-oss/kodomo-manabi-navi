import AreaContent from "./AreaContent";

export const metadata = {
  title: '松戸市の子供の習い事おすすめ｜口コミ・料金比較【コドモならいごと】',
  description: '千葉県松戸市の子ども向け習い事教室を口コミ・料金で比較。ダンス・スイミング・英語・ピアノ・プログラミングなど人気教室の無料体験情報を掲載。',
  alternates: { canonical: 'https://www.kodomo-navi.com/chiba/matsudo' },
  openGraph: {
    title: '松戸市の子供の習い事おすすめ｜コドモならいごと',
    description: '千葉県松戸市の子ども向け習い事教室を口コミ・料金で比較。',
    url: 'https://www.kodomo-navi.com/chiba/matsudo',
  },
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: `{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"トップ","item":"https://www.kodomo-navi.com"},{"@type":"ListItem","position":2,"name":"千葉県の習い事","item":"https://www.kodomo-navi.com/chiba"},{"@type":"ListItem","position":3,"name":"松戸市の習い事","item":"https://www.kodomo-navi.com/chiba/matsudo"}]}` }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: `{"@context":"https://schema.org","@type":"WebPage","name":"松戸市の子供の習い事おすすめ","url":"https://www.kodomo-navi.com/chiba/matsudo","description":"松戸市の子ども向け習い事教室を口コミ・料金で比較。ダンス・スイミング・英語・ピアノなど人気教室の無料体験情報を掲載。","publisher":{"@type":"Organization","name":"コドモならいごと","url":"https://www.kodomo-navi.com"}}` }} />
      <AreaContent />
    </>
  );
}
