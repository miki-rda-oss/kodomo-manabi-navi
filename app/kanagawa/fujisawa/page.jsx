import AreaContent from "./AreaContent";

export const metadata = {
  title: '藤沢市の子供の習い事おすすめ｜口コミ・料金比較【コドモならいごと】',
  description: '神奈川県藤沢市の子ども向け習い事教室を口コミ・料金で比較。ダンス・スイミング・英語・ピアノ・プログラミングなど人気教室の無料体験情報を掲載。',
  alternates: { canonical: 'https://www.kodomo-navi.com/kanagawa/fujisawa' },
  openGraph: {
    title: '藤沢市の子供の習い事おすすめ｜コドモならいごと',
    description: '神奈川県藤沢市の子ども向け習い事教室を口コミ・料金で比較。',
    url: 'https://www.kodomo-navi.com/kanagawa/fujisawa',
  },
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: `{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"トップ","item":"https://www.kodomo-navi.com"},{"@type":"ListItem","position":2,"name":"神奈川県の習い事","item":"https://www.kodomo-navi.com/kanagawa"},{"@type":"ListItem","position":3,"name":"藤沢市の習い事","item":"https://www.kodomo-navi.com/kanagawa/fujisawa"}]}` }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: `{"@context":"https://schema.org","@type":"WebPage","name":"藤沢市の子供の習い事おすすめ","url":"https://www.kodomo-navi.com/kanagawa/fujisawa","description":"藤沢市の子ども向け習い事教室を口コミ・料金で比較。ダンス・スイミング・英語・ピアノなど人気教室の無料体験情報を掲載。","publisher":{"@type":"Organization","name":"コドモならいごと","url":"https://www.kodomo-navi.com"}}` }} />
      <AreaContent />
    </>
  );
}
