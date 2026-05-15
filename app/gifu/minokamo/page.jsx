import AreaContent from "./AreaContent";

export const metadata = {
  alternates: { canonical: 'https://www.kodomo-navi.com/gifu/minokamo' },
  title: '美濃加茂市の子供の習い事おすすめ｜口コミ・料金比較【コドモならいごと】',
  description: '岐阜県美濃加茂市の子ども向け習い事教室を口コミ・料金で比較。ダンス・スイミング・英語・ピアノ・プログラミングなど人気教室の無料体験情報を掲載。',
  openGraph: {
    title: '美濃加茂市の子供の習い事おすすめ｜コドモならいごと',
    description: '岐阜県美濃加茂市の子ども向け習い事教室を口コミ・料金で比較。',
    url: 'https://www.kodomo-navi.com/gifu/minokamo',
  },
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: `{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"トップ","item":"https://www.kodomo-navi.com"},{"@type":"ListItem","position":2,"name":"岐阜県の習い事","item":"https://www.kodomo-navi.com/gifu"},{"@type":"ListItem","position":3,"name":"美濃加茂市の習い事","item":"https://www.kodomo-navi.com/gifu/minokamo"}]}` }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: `{"@context":"https://schema.org","@type":"WebPage","name":"美濃加茂市の子供の習い事おすすめ","url":"https://www.kodomo-navi.com/gifu/minokamo","description":"美濃加茂市の子ども向け習い事教室を口コミ・料金で比較。ダンス・スイミング・英語・ピアノなど人気教室の無料体験情報を掲載。","breadcrumb":{"@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"トップ","item":"https://www.kodomo-navi.com"},{"@type":"ListItem","position":2,"name":"美濃加茂市の習い事","item":"https://www.kodomo-navi.com/gifu/minokamo"}]},"publisher":{"@type":"Organization","name":"コドモならいごと","url":"https://www.kodomo-navi.com"}}` }} />
      <AreaContent />
    </>
  );
}
