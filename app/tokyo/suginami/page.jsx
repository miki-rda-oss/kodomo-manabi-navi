import AreaContent from "./AreaContent";

export const metadata = {
  title: '杉並区の子供の習い事おすすめ｜口コミ・料金比較【コドモならいごと】',
  description: '東京都杉並区の子ども向け習い事教室を口コミ・料金で比較。ダンス・スイミング・英語・ピアノ・プログラミングなど人気教室の無料体験情報を掲載。',
  alternates: { canonical: 'https://kodomo-manabi-navi.vercel.app/tokyo/suginami' },
  openGraph: {
    title: '杉並区の子供の習い事おすすめ｜コドモならいごと',
    description: '東京都杉並区の子ども向け習い事教室を口コミ・料金で比較。',
    url: 'https://kodomo-manabi-navi.vercel.app/tokyo/suginami',
  },
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: `{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"トップ","item":"https://kodomo-manabi-navi.vercel.app"},{"@type":"ListItem","position":2,"name":"東京都の習い事","item":"https://kodomo-manabi-navi.vercel.app/tokyo"},{"@type":"ListItem","position":3,"name":"杉並区の習い事","item":"https://kodomo-manabi-navi.vercel.app/tokyo/suginami"}]}` }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: `{"@context":"https://schema.org","@type":"WebPage","name":"杉並区の子供の習い事おすすめ","url":"https://kodomo-manabi-navi.vercel.app/tokyo/suginami","description":"杉並区の子ども向け習い事教室を口コミ・料金で比較。ダンス・スイミング・英語・ピアノなど人気教室の無料体験情報を掲載。","publisher":{"@type":"Organization","name":"コドモならいごと","url":"https://kodomo-manabi-navi.vercel.app"}}` }} />
      <AreaContent />
    </>
  );
}
