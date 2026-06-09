import ShindanClient from "./ShindanClient";

export const metadata = {
  title: "お子さんに合う習い事は？かんたん診断｜近くのダンス教室がわかる【コドモならいごと】",
  description: "5つの質問に答えるだけ。お子さんの年齢・性格・伸ばしたい力から、ぴったりの習い事とお住まいの近くの教室がわかります。3歳から通えるダンス教室の無料体験情報も掲載。",
  keywords: ["習い事 診断", "子供 習い事 おすすめ 診断", "ダンス教室 子供", "習い事 何が向いてる"],
  alternates: { canonical: "https://www.kodomo-navi.com/dance/shindan" },
  openGraph: {
    title: "お子さんに合う習い事は？かんたん診断｜コドモならいごと",
    description: "5つの質問でお子さんにぴったりの習い事と近くの教室がわかります。",
    url: "https://www.kodomo-navi.com/dance/shindan",
    type: "website",
  },
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "WebApplication",
        "name": "お子さんに合う習い事 かんたん診断",
        "applicationCategory": "LifestyleApplication",
        "operatingSystem": "Web",
        "url": "https://www.kodomo-navi.com/dance/shindan",
        "description": "お子さんの年齢・性格・伸ばしたい力から、ぴったりの習い事と近くの教室を提案する無料診断。",
        "offers": { "@type": "Offer", "price": "0", "priceCurrency": "JPY" },
      }) }} />
      <ShindanClient />
    </>
  );
}
