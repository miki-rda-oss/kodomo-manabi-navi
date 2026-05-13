import AreaContent from "./AreaContent";

export const metadata = {
  alternates: { canonical: 'https://kodomo-manabi-navi.vercel.app/osaka/suita' },
  title: '吹田市の子供の習い事おすすめ｜口コミ・料金比較【コドモならいごと】',
  description: '大阪府吹田市の子ども向け習い事教室を口コミ・料金で比較。ダンス・スイミング・英語・ピアノ・プログラミングなど人気教室の無料体験情報を掲載。',
  openGraph: {
    title: '吹田市の子供の習い事おすすめ｜コドモならいごと',
    description: '大阪府吹田市の子ども向け習い事教室を口コミ・料金で比較。',
    url: 'https://kodomo-manabi-navi.vercel.app/osaka/suita',
  },
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: `{"@context":"https://schema.org","@type":"ItemList","name":"吹田市のリディアダンスアカデミー","itemListElement":[{"@type":"ListItem","position":1,"item":{"@type":"LocalBusiness","@id":"https://re-dia.jp/esaka/","name":"リディアダンスアカデミー江坂校","url":"https://re-dia.jp/esaka/","address":{"@type":"PostalAddress","streetAddress":"大阪府吹田市江坂町1丁目","addressLocality":"吹田市","addressRegion":"大阪府","addressCountry":"JP"}}},{"@type":"ListItem","position":2,"item":{"@type":"LocalBusiness","@id":"https://re-dia.jp/senriyamanishi/","name":"リディアダンスアカデミー千里山西校","url":"https://re-dia.jp/senriyamanishi/","address":{"@type":"PostalAddress","streetAddress":"大阪府吹田市千里山西6丁目","addressLocality":"吹田市","addressRegion":"大阪府","addressCountry":"JP"}}},{"@type":"ListItem","position":3,"item":{"@type":"LocalBusiness","@id":"https://re-dia.jp/senriyama/","name":"リディアダンスアカデミー千里山校","url":"https://re-dia.jp/senriyama/","address":{"@type":"PostalAddress","streetAddress":"大阪府吹田市千里山東2丁目","addressLocality":"吹田市","addressRegion":"大阪府","addressCountry":"JP"}}}]}` }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: `{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"トップ","item":"https://kodomo-manabi-navi.vercel.app"},{"@type":"ListItem","position":2,"name":"大阪府の習い事","item":"https://kodomo-manabi-navi.vercel.app/osaka"},{"@type":"ListItem","position":3,"name":"吹田市の習い事","item":"https://kodomo-manabi-navi.vercel.app/osaka/suita"}]}` }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: `{"@context":"https://schema.org","@type":"WebPage","name":"吹田市の子供の習い事おすすめ","url":"https://kodomo-manabi-navi.vercel.app/osaka/suita","description":"吹田市の子ども向け習い事教室を口コミ・料金で比較。ダンス・スイミング・英語・ピアノなど人気教室の無料体験情報を掲載。","breadcrumb":{"@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"トップ","item":"https://kodomo-manabi-navi.vercel.app"},{"@type":"ListItem","position":2,"name":"吹田市の習い事","item":"https://kodomo-manabi-navi.vercel.app/osaka/suita"}]},"publisher":{"@type":"Organization","name":"コドモならいごと","url":"https://kodomo-manabi-navi.vercel.app"}}` }} />
      <AreaContent />
    </>
  );
}
