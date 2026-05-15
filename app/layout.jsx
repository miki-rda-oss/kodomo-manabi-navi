import "./globals.css";

const BASE_URL = 'https://www.kodomo-navi.com';

export const metadata = {
  title: 'コドモならいごと｜子供の習い事を口コミで検索・比較',
  description: 'エリア・ジャンル・年齢から子どもの習い事を検索・比較。ダンス・スイミング・英語・ピアノ・プログラミングなど全国5,000教室以上の口コミ・料金・体験情報を掲載。',
  keywords: '子供 習い事, 子ども 習い事, 習い事 検索, 習い事 比較, 習い事 口コミ, ダンス教室, スイミングスクール, 英会話教室, ピアノ教室, プログラミング教室',
  metadataBase: new URL(BASE_URL),
  alternates: { canonical: BASE_URL },
  openGraph: {
    title: 'コドモならいごと｜子供の習い事を口コミで検索・比較',
    description: 'エリア・ジャンル・年齢から子どもの習い事を検索・比較。全国5,000教室以上の口コミ・料金・体験情報を掲載。',
    url: BASE_URL,
    siteName: 'コドモならいごと',
    locale: 'ja_JP',
    type: 'website',
    images: [
      {
        url: `${BASE_URL}/og-image.png`,
        width: 1200,
        height: 630,
        alt: 'コドモならいごと｜子供の習い事を口コミで検索・比較',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'コドモならいごと｜子供の習い事を口コミで検索・比較',
    description: 'エリア・ジャンル・年齢から子どもの習い事を検索・比較。全国5,000教室以上を掲載。',
    images: [`${BASE_URL}/og-image.png`],
  },
  verification: {
    google: ['rzhs-3gGOueKsEk889d2LJwIalEpd6NH2KJx_qWpZnI', 'CxkhTnbML493Lr45Y4xL3xQ1lmI2WS79D18W8fwdyoU'],
  },
};

const orgSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${BASE_URL}/#organization`,
  "name": "コドモならいごと",
  "url": BASE_URL,
  "logo": `${BASE_URL}/logo.png`,
  "description": "子どもの習い事検索・比較サービス。全国5,000教室以上の口コミ・料金・体験情報を掲載。",
  "contactPoint": { "@type": "ContactPoint", "contactType": "customer support", "email": "info@sl-i.co.jp" },
  "sameAs": [],
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${BASE_URL}/#website`,
  "name": "コドモならいごと",
  "url": BASE_URL,
  "description": "子どもの習い事をエリア・ジャンルで検索・比較できる情報サイト",
  "publisher": { "@id": `${BASE_URL}/#organization` },
  "potentialAction": {
    "@type": "SearchAction",
    "target": `${BASE_URL}/?q={search_term_string}`,
    "query-input": "required name=search_term_string",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="ja">
      <head>
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-G63RRC650F"></script>
        <script dangerouslySetInnerHTML={{ __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-G63RRC650F');
        `}} />
      </head>
      <body>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }} />
        {children}
      </body>
    </html>
  );
}
