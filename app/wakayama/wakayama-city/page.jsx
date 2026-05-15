import AreaContent from "./AreaContent";

export const metadata = {
  alternates: { canonical: 'https://www.kodomo-navi.com/wakayama/wakayama-city' },
  title: '和歌山市の子供の習い事おすすめ｜口コミ・料金比較【コドモならいごと】',
  description: '和歌山県和歌山市の子ども向け習い事教室を口コミ・料金で比較。ダンス・スイミング・英語・ピアノ・プログラミングなど人気教室の無料体験情報を掲載。',
  openGraph: {
    title: '和歌山市の子供の習い事おすすめ｜コドモならいごと',
    description: '和歌山県和歌山市の子ども向け習い事教室を口コミ・料金で比較。',
    url: 'https://www.kodomo-navi.com/wakayama/wakayama-city',
  },
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: `{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"トップ","item":"https://www.kodomo-navi.com"},{"@type":"ListItem","position":2,"name":"和歌山県の習い事","item":"https://www.kodomo-navi.com/wakayama"},{"@type":"ListItem","position":3,"name":"和歌山市の習い事","item":"https://www.kodomo-navi.com/wakayama/wakayama-city"}]}` }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: `{"@context":"https://schema.org","@type":"WebPage","name":"和歌山市の子供の習い事おすすめ","url":"https://www.kodomo-navi.com/wakayama/wakayama-city","description":"和歌山市の子ども向け習い事教室を口コミ・料金で比較。ダンス・スイミング・英語・ピアノなど人気教室の無料体験情報を掲載。","breadcrumb":{"@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"トップ","item":"https://www.kodomo-navi.com"},{"@type":"ListItem","position":2,"name":"和歌山市の習い事","item":"https://www.kodomo-navi.com/wakayama/wakayama-city"}]},"publisher":{"@type":"Organization","name":"コドモならいごと","url":"https://www.kodomo-navi.com"}}` }} />
      <AreaContent />
    </>
  );
}
