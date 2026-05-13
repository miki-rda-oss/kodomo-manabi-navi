import AreaContent from "./AreaContent";

export const metadata = {
  title: '岐阜市の子供の習い事おすすめ｜口コミ・料金比較【コドモならいごと】',
  description: '岐阜県岐阜市の子ども向け習い事教室を口コミ・料金で比較。ダンス・スイミング・英語・ピアノ・プログラミングなど人気教室の無料体験情報を掲載。',
  openGraph: {
    title: '岐阜市の子供の習い事おすすめ｜コドモならいごと',
    description: '岐阜県岐阜市の子ども向け習い事教室を口コミ・料金で比較。',
    url: 'https://kodomo-manabi-navi.vercel.app/gifu/gifu-city',
  },
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: `{"@context":"https://schema.org","@type":"LocalBusiness","@id":"https://re-dia.jp/gifu/","name":"リディアダンスアカデミー岐阜校","url":"https://re-dia.jp/gifu/","description":"子どもの習い事ダンス教室。現役プロダンサー講師100名以上在籍。3歳から通える初心者クラスあり。初回体験無料。","priceRange":"¥¥","address":{"@type":"PostalAddress","streetAddress":"岐阜県岐阜市","addressLocality":"岐阜市","addressRegion":"岐阜県","addressCountry":"JP"},"aggregateRating":{"@type":"AggregateRating","ratingValue":"4.8","reviewCount":"45","bestRating":"5"},"parentOrganization":{"@type":"Organization","name":"リディアダンスアカデミー","url":"https://re-dia.jp/"}}` }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: `{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"トップ","item":"https://kodomo-manabi-navi.vercel.app"},{"@type":"ListItem","position":2,"name":"岐阜県の習い事","item":"https://kodomo-manabi-navi.vercel.app/#area"},{"@type":"ListItem","position":3,"name":"岐阜市の習い事","item":"https://kodomo-manabi-navi.vercel.app/gifu/gifu-city"}]}` }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: `{"@context":"https://schema.org","@type":"WebPage","name":"岐阜市の子供の習い事おすすめ","url":"https://kodomo-manabi-navi.vercel.app/gifu/gifu-city","description":"岐阜市の子ども向け習い事教室を口コミ・料金で比較。ダンス・スイミング・英語・ピアノなど人気教室の無料体験情報を掲載。","breadcrumb":{"@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"トップ","item":"https://kodomo-manabi-navi.vercel.app"},{"@type":"ListItem","position":2,"name":"岐阜市の習い事","item":"https://kodomo-manabi-navi.vercel.app/gifu/gifu-city"}]},"publisher":{"@type":"Organization","name":"コドモならいごと","url":"https://kodomo-manabi-navi.vercel.app"}}` }} />
      <AreaContent />
    </>
  );
}
