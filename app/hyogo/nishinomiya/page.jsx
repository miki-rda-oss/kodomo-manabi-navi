import AreaContent from "./AreaContent";

export const metadata = {
  alternates: { canonical: 'https://www.kodomo-navi.com/hyogo/nishinomiya' },
  title: '西宮市の子供の習い事おすすめ｜口コミ・料金比較【コドモならいごと】',
  description: '兵庫県西宮市の子ども向け習い事教室を口コミ・料金で比較。ダンス・スイミング・英語・ピアノ・プログラミングなど人気教室の無料体験情報を掲載。',
  openGraph: {
    title: '西宮市の子供の習い事おすすめ｜コドモならいごと',
    description: '兵庫県西宮市の子ども向け習い事教室を口コミ・料金で比較。',
    url: 'https://www.kodomo-navi.com/hyogo/nishinomiya',
  },
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: `{"@context":"https://schema.org","@type":"LocalBusiness","@id":"https://re-dia.jp/nishinomiya/","name":"リディアダンスアカデミー西宮校","url":"https://re-dia.jp/nishinomiya/","description":"子どもの習い事ダンス教室。現役プロダンサー講師200名以上在籍。3歳から通える初心者クラスあり。初回体験無料。","priceRange":"¥¥","address":{"@type":"PostalAddress","streetAddress":"兵庫県西宮市","addressLocality":"西宮市","addressRegion":"兵庫県","addressCountry":"JP"},"parentOrganization":{"@type":"Organization","name":"リディアダンスアカデミー","url":"https://re-dia.jp/"}}` }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: `{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"トップ","item":"https://www.kodomo-navi.com"},{"@type":"ListItem","position":2,"name":"兵庫県の習い事","item":"https://www.kodomo-navi.com/hyogo"},{"@type":"ListItem","position":3,"name":"西宮市の習い事","item":"https://www.kodomo-navi.com/hyogo/nishinomiya"}]}` }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: `{"@context":"https://schema.org","@type":"WebPage","name":"西宮市の子供の習い事おすすめ","url":"https://www.kodomo-navi.com/hyogo/nishinomiya","description":"西宮市の子ども向け習い事教室を口コミ・料金で比較。ダンス・スイミング・英語・ピアノなど人気教室の無料体験情報を掲載。","breadcrumb":{"@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"トップ","item":"https://www.kodomo-navi.com"},{"@type":"ListItem","position":2,"name":"西宮市の習い事","item":"https://www.kodomo-navi.com/hyogo/nishinomiya"}]},"publisher":{"@type":"Organization","name":"コドモならいごと","url":"https://www.kodomo-navi.com"}}` }} />
      <AreaContent />
    </>
  );
}
