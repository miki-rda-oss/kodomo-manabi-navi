import AreaContent from "./AreaContent";

export const metadata = {
  alternates: { canonical: 'https://kodomo-manabi-navi.vercel.app/aichi/anjo' },
  title: '安城市の子供の習い事おすすめ｜口コミ・料金比較【コドモならいごと】',
  description: '愛知県安城市の子ども向け習い事教室を口コミ・料金で比較。ダンス・スイミング・英語・ピアノ・プログラミングなど人気教室の無料体験情報を掲載。',
  openGraph: {
    title: '安城市の子供の習い事おすすめ｜コドモならいごと',
    description: '愛知県安城市の子ども向け習い事教室を口コミ・料金で比較。',
    url: 'https://kodomo-manabi-navi.vercel.app/aichi/anjo',
  },
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: `{"@context":"https://schema.org","@type":"LocalBusiness","@id":"https://re-dia.jp/anjosakurai/","name":"リディアダンスアカデミー安城桜井校","url":"https://re-dia.jp/anjosakurai/","description":"子どもの習い事ダンス教室。現役プロダンサー講師200名以上在籍。3歳から通える初心者クラスあり。初回体験無料。","priceRange":"¥¥","address":{"@type":"PostalAddress","streetAddress":"愛知県安城市","addressLocality":"安城市","addressRegion":"愛知県","addressCountry":"JP"},"aggregateRating":{"@type":"AggregateRating","ratingValue":"4.8","reviewCount":"45","bestRating":"5"},"parentOrganization":{"@type":"Organization","name":"リディアダンスアカデミー","url":"https://re-dia.jp/"}}` }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: `{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"トップ","item":"https://kodomo-manabi-navi.vercel.app"},{"@type":"ListItem","position":2,"name":"愛知県の習い事","item":"https://kodomo-manabi-navi.vercel.app/aichi"},{"@type":"ListItem","position":3,"name":"安城市の習い事","item":"https://kodomo-manabi-navi.vercel.app/aichi/anjo"}]}` }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: `{"@context":"https://schema.org","@type":"WebPage","name":"安城市の子供の習い事おすすめ","url":"https://kodomo-manabi-navi.vercel.app/aichi/anjo","description":"安城市の子ども向け習い事教室を口コミ・料金で比較。ダンス・スイミング・英語・ピアノなど人気教室の無料体験情報を掲載。","breadcrumb":{"@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"トップ","item":"https://kodomo-manabi-navi.vercel.app"},{"@type":"ListItem","position":2,"name":"安城市の習い事","item":"https://kodomo-manabi-navi.vercel.app/aichi/anjo"}]},"publisher":{"@type":"Organization","name":"コドモならいごと","url":"https://kodomo-manabi-navi.vercel.app"}}` }} />
      <AreaContent />
    </>
  );
}
