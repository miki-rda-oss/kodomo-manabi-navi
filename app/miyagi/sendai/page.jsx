import AreaContent from "./AreaContent";
export const metadata = {
  alternates: { canonical: 'https://www.kodomo-navi.com/miyagi/sendai' },
  title: '仙台市の子供の習い事おすすめ｜口コミ・料金比較【コドモならいごと】',
  description: '宮城県仙台市の子ども向け習い事教室を口コミ・料金で比較。ダンス・スイミング・英語・ピアノなど人気教室の無料体験情報を掲載。',
};
export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"トップ","item":"https://www.kodomo-navi.com"},{"@type":"ListItem","position":2,"name":"宮城県の習い事","item":"https://www.kodomo-navi.com/miyagi"},{"@type":"ListItem","position":3,"name":"仙台市の習い事","item":"https://www.kodomo-navi.com/miyagi/sendai"}]}) }} />
      <AreaContent />
    </>
  );
}
