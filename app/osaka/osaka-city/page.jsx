import AreaContent from "./AreaContent";

export const metadata = {
  title: '大阪市の子供の習い事おすすめ｜口コミ・料金比較【コドモならいごと】',
  description: '大阪府大阪市の子ども向け習い事教室を口コミ・料金で比較。ダンス・スイミング・英語・ピアノ・プログラミングなど人気教室の無料体験情報を掲載。',
  openGraph: {
    title: '大阪市の子供の習い事おすすめ｜コドモならいごと',
    description: '大阪府大阪市の子ども向け習い事教室を口コミ・料金で比較。',
    url: 'https://kodomo-manabi-navi.vercel.app/osaka/osaka-city',
  },
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: `{"@context":"https://schema.org","@type":"ItemList","name":"大阪市北区のリディアダンスアカデミー","itemListElement":[{"@type":"ListItem","position":1,"item":{"@type":"LocalBusiness","@id":"https://re-dia.jp/umeda/","name":"リディアダンスアカデミー梅田校","url":"https://re-dia.jp/umeda/","address":{"@type":"PostalAddress","streetAddress":"大阪市北区","addressLocality":"大阪市北区","addressRegion":"大阪府","addressCountry":"JP"}}},{"@type":"ListItem","position":2,"item":{"@type":"LocalBusiness","@id":"https://re-dia.jp/tennoji/","name":"リディアダンスアカデミー天王寺校","url":"https://re-dia.jp/tennoji/","address":{"@type":"PostalAddress","streetAddress":"大阪市天王寺区","addressLocality":"大阪市天王寺区","addressRegion":"大阪府","addressCountry":"JP"}}},{"@type":"ListItem","position":3,"item":{"@type":"LocalBusiness","@id":"https://re-dia.jp/miyakojima/","name":"リディアダンスアカデミー都島校","url":"https://re-dia.jp/miyakojima/","address":{"@type":"PostalAddress","streetAddress":"大阪市都島区","addressLocality":"大阪市都島区","addressRegion":"大阪府","addressCountry":"JP"}}}]}` }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: `{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"トップ","item":"https://kodomo-manabi-navi.vercel.app"},{"@type":"ListItem","position":2,"name":"大阪府の習い事","item":"https://kodomo-manabi-navi.vercel.app/#area"},{"@type":"ListItem","position":3,"name":"大阪市の習い事","item":"https://kodomo-manabi-navi.vercel.app/osaka/osaka-city"}]}` }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: `{"@context":"https://schema.org","@type":"WebPage","name":"大阪市の子供の習い事おすすめ","url":"https://kodomo-manabi-navi.vercel.app/osaka/osaka-city","description":"大阪市の子ども向け習い事教室を口コミ・料金で比較。ダンス・スイミング・英語・ピアノなど人気教室の無料体験情報を掲載。","breadcrumb":{"@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"トップ","item":"https://kodomo-manabi-navi.vercel.app"},{"@type":"ListItem","position":2,"name":"大阪市の習い事","item":"https://kodomo-manabi-navi.vercel.app/osaka/osaka-city"}]},"publisher":{"@type":"Organization","name":"コドモならいごと","url":"https://kodomo-manabi-navi.vercel.app"}}` }} />
      <AreaContent />
    </>
  );
}
