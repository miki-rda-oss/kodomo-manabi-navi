import "./globals.css";

export const metadata = {
  title: 'コドモならいごと｜子供の習い事を口コミで検索・比較',
  description: 'エリア・ジャンル・年齢から子どもの習い事を検索・比較。ダンス・スイミング・英語・ピアノ・プログラミングなど全国5,000教室以上の口コミ・料金・体験情報を掲載。',
  keywords: '子供 習い事, 子ども 習い事, 習い事 検索, 習い事 比較, 習い事 口コミ, ダンス教室, スイミングスクール, 英会話教室, ピアノ教室, プログラミング教室',
  openGraph: {
    title: 'コドモならいごと｜子供の習い事を口コミで検索・比較',
    description: 'エリア・ジャンル・年齢から子どもの習い事を検索・比較。全国5,000教室以上の口コミ・料金・体験情報を掲載。',
    url: 'https://www.kodomo-navi.com',
    siteName: 'コドモならいごと',
    locale: 'ja_JP',
    type: 'website',
  },
  verification: {
    google: 'rzhs-3gGOueKsEk889d2LJwIalEpd6NH2KJx_qWpZnI',
  },
};

const orgSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "コドモならいごと",
  "url": "https://www.kodomo-navi.com",
  "description": "子どもの習い事検索・比較サービス。全国5,000教室以上の口コミ・料金・体験情報を掲載。",
  "contactPoint": { "@type": "ContactPoint", "contactType": "customer support", "email": "info@sl-i.co.jp" },
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "コドモならいごと",
  "url": "https://www.kodomo-navi.com",
  "potentialAction": {
    "@type": "SearchAction",
    "target": "https://www.kodomo-navi.com/?q={search_term_string}",
    "query-input": "required name=search_term_string",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="ja">
      <body>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }} />
        {children}
      </body>
    </html>
  );
}
