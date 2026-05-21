# kodomo-manabi-navi プロジェクト設定

---

## ⚠️ このサイトの最大目的（必ず理解してから作業すること）

### ゴール：リディアダンスアカデミーの体験レッスン獲得

**ターゲット：** 3歳〜小学生の子を持つ保護者
**理想の導線：**
```
「地域×習い事」「地域×ダンス」で検索
→ kodomo-navi.com が上位表示
→ 「ダンスいいな」と思う
→ 「リディアダンスアカデミーがいいな」と思う
→ 体験レッスン申込
```

### 2つの流入チャネル

1. **Google SEO**：「地域×ダンス教室」「地域×子供の習い事」などのキーワードで上位表示
2. **AI回答（AIO/GEO）**：「習い事おすすめは？」「ダンススクールおすすめは？」とAIに聞かれたとき、このサイトが引用・参照される

### 重要：独立したサイトに見せること（絶対厳守）

- **GoogleにリディアとNAVIサイトが同一運営とバレてはいけない**
- バレると re-dia.jp（リディア公式）の検索順位が下がるリスクがある
- 対策：複数スクールを公平に掲載し、比較情報サイトとして見せる
- リディアは「1位」「おすすめ」として掲載するが、あくまで複数の選択肢の中の一つとして見せる

### 作業時の判断基準

新しいページ・機能を追加するとき、常にこの問いで判断する：
> 「これは保護者がリディアの体験申込に至る確率を上げるか？」

---

## 作業環境

- **VPS作業ディレクトリ**: `/opt/kodomo-naraigoto/kodomo-manabi-navi`
- **Macローカル**: `/Users/yuheimiki/Cloude Code/kodomo-naraigoto`
- **本番URL**: `https://www.kodomo-navi.com`
- **GitHubリポジトリ**: `git@github.com:miki-rda-oss/kodomo-manabi-navi.git`

## 必須ルール

1. **作業前に必ず git pull すること**
2. **作業完了後は必ず git push すること**
   ```
   git pull origin main
   git add <変更ファイル>
   git commit -m "feat: ○○"
   git push origin main
   ```
3. pushするとVercelが自動デプロイする（数分で本番反映）
4. バックアップファイル（*.bak など）はコミットしない

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
