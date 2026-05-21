# kodomo-manabi-navi プロジェクト設定

## 作業環境

- **VPS作業ディレクトリ**: `/opt/kodomo-naraigoto/kodomo-manabi-navi`
- **Macローカル**: `/Users/yuheimiki/Cloude Code/kodomo-naraigoto`
- **本番URL**: `https://www.kodomo-navi.com`
- **GitHubリポジトリ**: `git@github.com:miki-rda-oss/kodomo-manabi-navi.git`

## 必須ルール

1. **作業完了後は必ず git push すること**
   ```
   git add <変更ファイル>
   git commit -m "feat: ○○"
   git push origin main
   ```
2. pushするとVercelが自動デプロイする（数分で本番反映）
3. バックアップファイル（*.bak など）はコミットしない

## 技術スタック

- Next.js 14 App Router（`output: 'export'` — 静的エクスポート）
- 動的ルートには必ず `generateStaticParams()` が必要
- デプロイ：Vercel（mainブランチへのpushで自動）

## ページ構成パターン

### ジャンルページ
```
app/[genre]/
  page.jsx          # ジャンルトップ
  [pref]/page.jsx   # 都道府県ページ
  [pref]/[area]/page.jsx  # エリアページ
  [genre]Data.js    # データファイル
```

### 都市エリアページ
```
app/[pref]/[city]/
  AreaContent.jsx   # コンテンツ本体
  page.jsx          # メタデータ + JSON-LD
```

## BASE_URL
`https://www.kodomo-navi.com`
