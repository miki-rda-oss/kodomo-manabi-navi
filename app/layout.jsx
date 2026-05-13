import "./globals.css";

export const metadata = {
  title: 'コドモならいごと｜子供の習い事を口コミで検索・比較',
  description: '子供の習い事をエリアや種類で検索・比較。リディアダンスアカデミーをはじめ全国の教室を口コミ・料金で比較できます。',
};

export default function RootLayout({ children }) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  );
}
