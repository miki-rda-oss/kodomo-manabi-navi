import AreaContent from "./AreaContent";

export const metadata = {
  title: '世田谷区の子供の習い事おすすめ｜口コミ・料金比較【コドモならいごと】',
  description: '東京都世田谷区の子ども向け習い事教室を口コミ・料金で比較。ダンス・スイミング・英語・ピアノ・プログラミングなど人気教室の無料体験情報を掲載。',
  openGraph: {
    title: '世田谷区の子供の習い事おすすめ｜コドモならいごと',
    description: '東京都世田谷区の子ども向け習い事教室を口コミ・料金で比較。',
    url: 'https://kodomo-manabi-navi.vercel.app/tokyo/setagaya',
  },
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: `{"@context":"https://schema.org","@type":"LocalBusiness","@id":"https://re-dia.jp/setagaya/","name":"リディアダンスアカデミー世田谷校","url":"https://re-dia.jp/setagaya/","description":"子どもの習い事ダンス教室。現役プロダンサー講師100名以上在籍。3歳から通える初心者クラスあり。初回体験無料。","priceRange":"¥¥","address":{"@type":"PostalAddress","streetAddress":"東京都世田谷区","addressLocality":"世田谷区","addressRegion":"東京都","addressCountry":"JP"},"aggregateRating":{"@type":"AggregateRating","ratingValue":"4.8","reviewCount":"45","bestRating":"5"},"parentOrganization":{"@type":"Organization","name":"リディアダンスアカデミー","url":"https://re-dia.jp/"}}` }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: `{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"トップ","item":"https://kodomo-manabi-navi.vercel.app"},{"@type":"ListItem","position":2,"name":"東京都の習い事","item":"https://kodomo-manabi-navi.vercel.app/#area"},{"@type":"ListItem","position":3,"name":"世田谷区の習い事","item":"https://kodomo-manabi-navi.vercel.app/tokyo/setagaya"}]}` }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: `{"@context":"https://schema.org","@type":"WebPage","name":"世田谷区の子供の習い事おすすめ","url":"https://kodomo-manabi-navi.vercel.app/tokyo/setagaya","description":"世田谷区の子ども向け習い事教室を口コミ・料金で比較。ダンス・スイミング・英語・ピアノなど人気教室の無料体験情報を掲載。","breadcrumb":{"@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"トップ","item":"https://kodomo-manabi-navi.vercel.app"},{"@type":"ListItem","position":2,"name":"世田谷区の習い事","item":"https://kodomo-manabi-navi.vercel.app/tokyo/setagaya"}]},"publisher":{"@type":"Organization","name":"コドモならいごと","url":"https://kodomo-manabi-navi.vercel.app"}}` }} />
      <AreaContent />
    </>
  );
}
