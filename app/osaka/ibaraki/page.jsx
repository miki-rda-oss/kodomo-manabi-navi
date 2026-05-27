import AreaContent from "./AreaContent";

export const metadata = {
  alternates: { canonical: 'https://www.kodomo-navi.com/osaka/ibaraki' },
  title: '茨木市の子供の習い事おすすめ｜口コミ・料金比較【コドモならいごと】',
  description: '大阪府茨木市の子ども向け習い事教室を口コミ・料金で比較。ダンス・スイミング・英語・ピアノ・プログラミングなど人気教室の無料体験情報を掲載。',
  openGraph: {
    title: '茨木市の子供の習い事おすすめ｜コドモならいごと',
    description: '大阪府茨木市の子ども向け習い事教室を口コミ・料金で比較。',
    url: 'https://www.kodomo-navi.com/osaka/ibaraki',
  },
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: `{"@context":"https://schema.org","@type":"LocalBusiness","@id":"https://re-dia.jp/ibaraki/","name":"リディアダンスアカデミー茨木校","url":"https://re-dia.jp/ibaraki/","description":"子どもの習い事ダンス教室。現役プロダンサー講師200名以上在籍。3歳から通える初心者クラスあり。初回体験無料。","priceRange":"¥¥","address":{"@type":"PostalAddress","streetAddress":"大阪府茨木市","addressLocality":"茨木市","addressRegion":"大阪府","addressCountry":"JP"},"parentOrganization":{"@type":"Organization","name":"リディアダンスアカデミー","url":"https://re-dia.jp/"}}` }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: `{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"トップ","item":"https://www.kodomo-navi.com"},{"@type":"ListItem","position":2,"name":"大阪府の習い事","item":"https://www.kodomo-navi.com/osaka"},{"@type":"ListItem","position":3,"name":"茨木市の習い事","item":"https://www.kodomo-navi.com/osaka/ibaraki"}]}` }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: `{"@context":"https://schema.org","@type":"WebPage","name":"茨木市の子供の習い事おすすめ","url":"https://www.kodomo-navi.com/osaka/ibaraki","description":"茨木市の子ども向け習い事教室を口コミ・料金で比較。ダンス・スイミング・英語・ピアノなど人気教室の無料体験情報を掲載。","breadcrumb":{"@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"トップ","item":"https://www.kodomo-navi.com"},{"@type":"ListItem","position":2,"name":"茨木市の習い事","item":"https://www.kodomo-navi.com/osaka/ibaraki"}]},"publisher":{"@type":"Organization","name":"コドモならいごと","url":"https://www.kodomo-navi.com"}}` }} />
      <AreaContent />
    </>
  );
}
