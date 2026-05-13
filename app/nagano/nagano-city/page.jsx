import AreaContent from "./AreaContent";

export const metadata = {
  alternates: { canonical: 'https://kodomo-manabi-navi.vercel.app/nagano/nagano-city' },
  title: '長野市の子供の習い事おすすめ｜口コミ・料金比較【コドモならいごと】',
  description: '長野県長野市の子ども向け習い事教室を口コミ・料金で比較。ダンス・スイミング・英語・ピアノ・プログラミングなど人気教室の無料体験情報を掲載。',
  openGraph: {
    title: '長野市の子供の習い事おすすめ｜コドモならいごと',
    description: '長野県長野市の子ども向け習い事教室を口コミ・料金で比較。',
    url: 'https://kodomo-manabi-navi.vercel.app/nagano/nagano-city',
  },
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: `{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"トップ","item":"https://kodomo-manabi-navi.vercel.app"},{"@type":"ListItem","position":2,"name":"長野県の習い事","item":"https://kodomo-manabi-navi.vercel.app/nagano"},{"@type":"ListItem","position":3,"name":"長野市の習い事","item":"https://kodomo-manabi-navi.vercel.app/nagano/nagano-city"}]}` }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: `{"@context":"https://schema.org","@type":"WebPage","name":"長野市の子供の習い事おすすめ","url":"https://kodomo-manabi-navi.vercel.app/nagano/nagano-city","description":"長野市の子ども向け習い事教室を口コミ・料金で比較。ダンス・スイミング・英語・ピアノなど人気教室の無料体験情報を掲載。","breadcrumb":{"@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"トップ","item":"https://kodomo-manabi-navi.vercel.app"},{"@type":"ListItem","position":2,"name":"長野市の習い事","item":"https://kodomo-manabi-navi.vercel.app/nagano/nagano-city"}]},"publisher":{"@type":"Organization","name":"コドモならいごと","url":"https://kodomo-manabi-navi.vercel.app"}}` }} />
      <AreaContent />
    </>
  );
}
