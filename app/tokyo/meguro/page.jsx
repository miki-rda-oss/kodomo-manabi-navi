import AreaContent from "./AreaContent";

export const metadata = {
  alternates: { canonical: 'https://kodomo-manabi-navi.vercel.app/tokyo/meguro' },
  title: '目黒区の子供の習い事おすすめ｜口コミ・料金比較【コドモならいごと】',
  description: '東京都目黒区の子ども向け習い事教室を口コミ・料金で比較。ダンス・スイミング・英語・ピアノ・プログラミングなど人気教室の無料体験情報を掲載。',
  openGraph: {
    title: '目黒区の子供の習い事おすすめ｜コドモならいごと',
    description: '東京都目黒区の子ども向け習い事教室を口コミ・料金で比較。',
    url: 'https://kodomo-manabi-navi.vercel.app/tokyo/meguro',
  },
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: `{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"トップ","item":"https://kodomo-manabi-navi.vercel.app"},{"@type":"ListItem","position":2,"name":"東京都の習い事","item":"https://kodomo-manabi-navi.vercel.app/tokyo"},{"@type":"ListItem","position":3,"name":"目黒区の習い事","item":"https://kodomo-manabi-navi.vercel.app/tokyo/meguro"}]}` }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: `{"@context":"https://schema.org","@type":"WebPage","name":"目黒区の子供の習い事おすすめ","url":"https://kodomo-manabi-navi.vercel.app/tokyo/meguro","description":"目黒区の子ども向け習い事教室を口コミ・料金で比較。ダンス・スイミング・英語・ピアノなど人気教室の無料体験情報を掲載。","breadcrumb":{"@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"トップ","item":"https://kodomo-manabi-navi.vercel.app"},{"@type":"ListItem","position":2,"name":"目黒区の習い事","item":"https://kodomo-manabi-navi.vercel.app/tokyo/meguro"}]},"publisher":{"@type":"Organization","name":"コドモならいごと","url":"https://kodomo-manabi-navi.vercel.app"}}` }} />
      <AreaContent />
    </>
  );
}
