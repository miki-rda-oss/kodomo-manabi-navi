import AreaContent from "./AreaContent";

export const metadata = {
  alternates: { canonical: 'https://kodomo-manabi-navi.vercel.app/osaka/toyonaka' },
  title: '豊中市の子供の習い事おすすめ｜口コミ・料金比較【コドモならいごと】',
  description: '大阪府豊中市の子ども向け習い事教室を口コミ・料金で比較。ダンス・スイミング・英語・ピアノ・プログラミングなど人気教室の無料体験情報を掲載。',
  openGraph: {
    title: '豊中市の子供の習い事おすすめ｜コドモならいごと',
    description: '大阪府豊中市の子ども向け習い事教室を口コミ・料金で比較。',
    url: 'https://kodomo-manabi-navi.vercel.app/osaka/toyonaka',
  },
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: `{"@context":"https://schema.org","@type":"LocalBusiness","@id":"https://re-dia.jp/toyonaka/","name":"リディアダンスアカデミー豊中校","url":"https://re-dia.jp/toyonaka/","description":"子どもの習い事ダンス教室。現役プロダンサー講師100名以上在籍。3歳から通える初心者クラスあり。初回体験無料。","priceRange":"¥¥","address":{"@type":"PostalAddress","streetAddress":"大阪府豊中市","addressLocality":"豊中市","addressRegion":"大阪府","addressCountry":"JP"},"aggregateRating":{"@type":"AggregateRating","ratingValue":"4.8","reviewCount":"45","bestRating":"5"},"parentOrganization":{"@type":"Organization","name":"リディアダンスアカデミー","url":"https://re-dia.jp/"}}` }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: `{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"トップ","item":"https://kodomo-manabi-navi.vercel.app"},{"@type":"ListItem","position":2,"name":"大阪府の習い事","item":"https://kodomo-manabi-navi.vercel.app/osaka"},{"@type":"ListItem","position":3,"name":"豊中市の習い事","item":"https://kodomo-manabi-navi.vercel.app/osaka/toyonaka"}]}` }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: `{"@context":"https://schema.org","@type":"WebPage","name":"豊中市の子供の習い事おすすめ","url":"https://kodomo-manabi-navi.vercel.app/osaka/toyonaka","description":"豊中市の子ども向け習い事教室を口コミ・料金で比較。ダンス・スイミング・英語・ピアノなど人気教室の無料体験情報を掲載。","breadcrumb":{"@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"トップ","item":"https://kodomo-manabi-navi.vercel.app"},{"@type":"ListItem","position":2,"name":"豊中市の習い事","item":"https://kodomo-manabi-navi.vercel.app/osaka/toyonaka"}]},"publisher":{"@type":"Organization","name":"コドモならいごと","url":"https://kodomo-manabi-navi.vercel.app"}}` }} />
      <AreaContent />
    </>
  );
}
