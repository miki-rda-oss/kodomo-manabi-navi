import AreaContent from "./AreaContent";

export const metadata = {
  alternates: { canonical: 'https://www.kodomo-navi.com/osaka/minoh' },
  title: '箕面市の子供の習い事おすすめ｜口コミ・料金比較【コドモならいごと】',
  description: '大阪府箕面市の子ども向け習い事教室を口コミ・料金で比較。ダンス・スイミング・英語・ピアノ・プログラミングなど人気教室の無料体験情報を掲載。',
  openGraph: {
    title: '箕面市の子供の習い事おすすめ｜コドモならいごと',
    description: '大阪府箕面市の子ども向け習い事教室を口コミ・料金で比較。',
    url: 'https://www.kodomo-navi.com/osaka/minoh',
  },
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: `{"@context":"https://schema.org","@type":"ItemList","name":"箕面市のリディアダンスアカデミー","itemListElement":[{"@type":"ListItem","position":1,"item":{"@type":"LocalBusiness","@id":"https://re-dia.jp/minoh/","name":"リディアダンスアカデミー箕面校","url":"https://re-dia.jp/minoh/","address":{"@type":"PostalAddress","streetAddress":"大阪府箕面市","addressLocality":"箕面市","addressRegion":"大阪府","addressCountry":"JP"}}},{"@type":"ListItem","position":2,"item":{"@type":"LocalBusiness","@id":"https://re-dia.jp/makiochi/","name":"リディアダンスアカデミー牧落校","url":"https://re-dia.jp/makiochi/","address":{"@type":"PostalAddress","streetAddress":"大阪府箕面市牧落","addressLocality":"箕面市","addressRegion":"大阪府","addressCountry":"JP"}}}]}` }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: `{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"トップ","item":"https://www.kodomo-navi.com"},{"@type":"ListItem","position":2,"name":"大阪府の習い事","item":"https://www.kodomo-navi.com/osaka"},{"@type":"ListItem","position":3,"name":"箕面市の習い事","item":"https://www.kodomo-navi.com/osaka/minoh"}]}` }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: `{"@context":"https://schema.org","@type":"WebPage","name":"箕面市の子供の習い事おすすめ","url":"https://www.kodomo-navi.com/osaka/minoh","description":"箕面市の子ども向け習い事教室を口コミ・料金で比較。ダンス・スイミング・英語・ピアノなど人気教室の無料体験情報を掲載。","breadcrumb":{"@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"トップ","item":"https://www.kodomo-navi.com"},{"@type":"ListItem","position":2,"name":"箕面市の習い事","item":"https://www.kodomo-navi.com/osaka/minoh"}]},"publisher":{"@type":"Organization","name":"コドモならいごと","url":"https://www.kodomo-navi.com"}}` }} />
      <AreaContent />
    </>
  );
}
