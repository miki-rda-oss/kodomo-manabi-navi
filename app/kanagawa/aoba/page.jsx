import AreaContent from "./AreaContent";

export const metadata = {
  alternates: { canonical: 'https://kodomo-manabi-navi.vercel.app/kanagawa/aoba' },
  title: '横浜市青葉区の子供の習い事おすすめ｜口コミ・料金比較【コドモならいごと】',
  description: '神奈川県横浜市青葉区の子ども向け習い事教室を口コミ・料金で比較。ダンス・スイミング・英語・ピアノ・プログラミングなど人気教室の無料体験情報を掲載。',
  openGraph: {
    title: '横浜市青葉区の子供の習い事おすすめ｜コドモならいごと',
    description: '神奈川県横浜市青葉区の子ども向け習い事教室を口コミ・料金で比較。',
    url: 'https://kodomo-manabi-navi.vercel.app/kanagawa/aoba',
  },
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: `{"@context":"https://schema.org","@type":"LocalBusiness","@id":"https://re-dia.jp/tamapraza/","name":"リディアダンスアカデミーたまプラーザ校","url":"https://re-dia.jp/tamapraza/","description":"子どもの習い事ダンス教室。現役プロダンサー講師200名以上在籍。3歳から通える初心者クラスあり。初回体験無料。","priceRange":"¥¥","address":{"@type":"PostalAddress","streetAddress":"神奈川県横浜市青葉区","addressLocality":"横浜市青葉区","addressRegion":"神奈川県","addressCountry":"JP"},"aggregateRating":{"@type":"AggregateRating","ratingValue":"4.8","reviewCount":"45","bestRating":"5"},"parentOrganization":{"@type":"Organization","name":"リディアダンスアカデミー","url":"https://re-dia.jp/"}}` }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: `{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"トップ","item":"https://kodomo-manabi-navi.vercel.app"},{"@type":"ListItem","position":2,"name":"神奈川県の習い事","item":"https://kodomo-manabi-navi.vercel.app/kanagawa"},{"@type":"ListItem","position":3,"name":"青葉区の習い事","item":"https://kodomo-manabi-navi.vercel.app/kanagawa/aoba"}]}` }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: `{"@context":"https://schema.org","@type":"WebPage","name":"青葉区の子供の習い事おすすめ","url":"https://kodomo-manabi-navi.vercel.app/kanagawa/aoba","description":"青葉区の子ども向け習い事教室を口コミ・料金で比較。ダンス・スイミング・英語・ピアノなど人気教室の無料体験情報を掲載。","breadcrumb":{"@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"トップ","item":"https://kodomo-manabi-navi.vercel.app"},{"@type":"ListItem","position":2,"name":"青葉区の習い事","item":"https://kodomo-manabi-navi.vercel.app/kanagawa/aoba"}]},"publisher":{"@type":"Organization","name":"コドモならいごと","url":"https://kodomo-manabi-navi.vercel.app"}}` }} />
      <AreaContent />
    </>
  );
}
