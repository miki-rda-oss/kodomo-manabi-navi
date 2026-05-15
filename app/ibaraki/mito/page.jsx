import AreaContent from "./AreaContent";

export const metadata = {
  alternates: { canonical: 'https://www.kodomo-navi.com/ibaraki/mito' },
  title: '水戸市の子供の習い事おすすめ｜口コミ・料金比較【コドモならいごと】',
  description: '茨城県水戸市の子ども向け習い事教室を口コミ・料金で比較。ダンス・スイミング・英語・ピアノ・プログラミングなど人気教室の無料体験情報を掲載。',
  openGraph: {
    title: '水戸市の子供の習い事おすすめ｜コドモならいごと',
    description: '茨城県水戸市の子ども向け習い事教室を口コミ・料金で比較。',
    url: 'https://www.kodomo-navi.com/ibaraki/mito',
  },
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: `{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"トップ","item":"https://www.kodomo-navi.com"},{"@type":"ListItem","position":2,"name":"茨城県の習い事","item":"https://www.kodomo-navi.com/ibaraki"},{"@type":"ListItem","position":3,"name":"水戸市の習い事","item":"https://www.kodomo-navi.com/ibaraki/mito"}]}` }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: `{"@context":"https://schema.org","@type":"WebPage","name":"水戸市の子供の習い事おすすめ","url":"https://www.kodomo-navi.com/ibaraki/mito","description":"水戸市の子ども向け習い事教室を口コミ・料金で比較。ダンス・スイミング・英語・ピアノなど人気教室の無料体験情報を掲載。","breadcrumb":{"@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"トップ","item":"https://www.kodomo-navi.com"},{"@type":"ListItem","position":2,"name":"水戸市の習い事","item":"https://www.kodomo-navi.com/ibaraki/mito"}]},"publisher":{"@type":"Organization","name":"コドモならいごと","url":"https://www.kodomo-navi.com"}}` }} />
      <AreaContent />
    </>
  );
}
