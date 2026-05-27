import Link from "next/link";

export const metadata = {
  title: 'リディアダンスアカデミー（REDIA DANCE ACADEMY）の口コミ・料金・体験申込｜コドモならいごと',
  description: 'リディアダンスアカデミーの口コミ・月謝・コース・体験レッスン情報を徹底解説。全国100校以上展開、3歳から通えるキッズダンススクール。',
  alternates: {
    canonical: 'https://www.kodomo-navi.com/dance/redia',
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "トップ", item: "https://www.kodomo-navi.com" },
    { "@type": "ListItem", position: 2, name: "ダンス教室", item: "https://www.kodomo-navi.com/dance" },
    { "@type": "ListItem", position: 3, name: "リディアダンスアカデミー", item: "https://www.kodomo-navi.com/dance/redia" },
  ],
};


const areas = [
  { pref: "大阪府", schools: [
    { name: "都島校", url: "https://re-dia.jp/miyakojima/" },
    { name: "平野校", url: "https://re-dia.jp/hirano/" },
    { name: "あべの校", url: "https://re-dia.jp/abeno/" },
    { name: "福島野田校", url: "https://re-dia.jp/fukushimanoda/" },
    { name: "福島校", url: "https://re-dia.jp/fukushima/" },
    { name: "寺田町校", url: "https://re-dia.jp/teradacho/" },
    { name: "箕面船場阪大前校", url: "https://re-dia.jp/minohandaimae/" },
    { name: "箕面森町校", url: "https://re-dia.jp/minoshinmachi/" },
  ]},
  { pref: "東京都", schools: [
    { name: "世田谷校", url: "https://re-dia.jp/setagaya/" },
    { name: "新宿校", url: "https://re-dia.jp/shinjuku/" },
    { name: "渋谷校", url: "https://re-dia.jp/shibuya/" },
  ]},
  { pref: "愛知県", schools: [
    { name: "名古屋中区校", url: "https://re-dia.jp/nagoya-naka/" },
    { name: "名古屋昭和校", url: "https://re-dia.jp/nagoya-showa/" },
    { name: "豊田校", url: "https://re-dia.jp/toyota/" },
  ]},
  { pref: "神奈川県", schools: [
    { name: "横浜校", url: "https://re-dia.jp/yokohama/" },
    { name: "川崎校", url: "https://re-dia.jp/kawasaki/" },
  ]},
  { pref: "埼玉県", schools: [
    { name: "大宮校", url: "https://re-dia.jp/omiya/" },
    { name: "川口校", url: "https://re-dia.jp/kawaguchi/" },
  ]},
  { pref: "千葉県", schools: [
    { name: "船橋校", url: "https://re-dia.jp/funabashi/" },
    { name: "柏校", url: "https://re-dia.jp/kashiwa/" },
  ]},
  { pref: "石川県", schools: [
    { name: "金沢校", url: "https://re-dia.jp/kanazawa/" },
    { name: "野々市校", url: "https://re-dia.jp/nonoichi/" },
  ]},
  { pref: "茨城県", schools: [
    { name: "つくば校", url: "https://re-dia.jp/tsukuba/" },
    { name: "水戸校", url: "https://re-dia.jp/mito/" },
  ]},
];

const faqs = [
  { q: "月謝はいくら？", a: "月会員プランは月7,700円〜（税込）です。週のレッスン回数や通い方によって受け放題プラン（月27,000円）も選べます。入会金などの初期費用は校舎により異なるため、体験時に確認してください。" },
  { q: "何歳から入れる？", a: "3歳から通えるリトルクラスを設けています。年齢・レベル別にクラスが分かれており、初心者でも安心してスタートできます。" },
  { q: "体験レッスンは無料？", a: "はい、初回体験レッスンは無料で参加できます。複数校舎の体験も可能なので、お近くの校舎でまず試してみてください。" },
  { q: "どんなジャンルがある？", a: "ヒップホップ・ジャズ・K-POP・ブレイクダンス・ポップ・ワック・ソウルなど7ジャンル以上に対応しています。お子さんの好みに合ったジャンルを選べます。" },
  { q: "発表会はある？", a: "年1〜2回の発表会があります。舞台衣装を着て本格的なステージで踊る経験は、子供たちの自信と成長に大きく貢献します。" },
];

const features = [
  { icon: "👨‍🏫", title: "現役プロダンサー講師200名以上", desc: "第一線で活躍するプロダンサーが直接指導。本物の技術と表現力を子供たちに伝えます。" },
  { icon: "👶", title: "3歳から通える充実のクラス制", desc: "リトルクラス（3〜6歳）からキッズクラス（小学生）まで年齢・レベル別に細かくクラス分け。お子さんのペースで無理なく上達できます。" },
  { icon: "💃", title: "7ジャンル以上に対応", desc: "ヒップホップ・ジャズ・K-POP・ブレイクダンスなど多様なジャンルを一つのスクールで学べます。途中でジャンル変更や掛け持ちも可能。" },
  { icon: "🎭", title: "年1〜2回の充実した発表会", desc: "本格的な舞台での発表会を定期開催。子供たちが練習の成果を発揮し、達成感・自己表現力を育む機会を提供します。" },
  { icon: "🗾", title: "全国100校以上展開", desc: "大阪・東京・愛知・神奈川・石川・茨城など全国に100校以上展開。引越し後もお近くの校舎に転籍できます。" },
];

const recommendations = [
  { label: "初めてダンスを習うお子さん", desc: "初心者専用クラスがあり、ゼロからでも安心してスタートできます。" },
  { label: "内気・恥ずかしがり屋なお子さん", desc: "同年代の友達と一緒に踊ることで自然と自信がつきます。少人数制で馴染みやすい環境です。" },
  { label: "複数ジャンルに挑戦したいお子さん", desc: "7ジャンル以上から好みのスタイルを選べます。ヒップホップとK-POPの掛け持ちも可能です。" },
];

export default function RediaPage() {
  return (
    <div style={{ fontFamily: "'Noto Sans JP','Hiragino Sans',sans-serif", background: "#f4f7fc", minHeight: "100vh" }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      {/* Header */}
      <header style={{ background: "#fff", borderBottom: "1px solid #e8edf4", boxShadow: "0 2px 8px rgba(0,0,0,.05)", position: "sticky", top: 0, zIndex: 100 }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 24px", display: "flex", alignItems: "center", gap: 10, height: 56 }}>
          <Link href="/" style={{ display: "flex", alignItems: "center", gap: 8, textDecoration: "none" }}>
            <div style={{ width: 32, height: 32, borderRadius: 9, background: "linear-gradient(135deg, #E53935, #B71C1C)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 16 }}>🧒</div>
            <span style={{ fontSize: 15, fontWeight: 900, color: "#1B2A4A" }}>コドモならいごと</span>
          </Link>
          <span style={{ color: "#ddd" }}>›</span>
          <Link href="/dance" style={{ fontSize: 13, color: "#E53935", fontWeight: 600, textDecoration: "none" }}>ダンス教室</Link>
          <span style={{ color: "#ddd" }}>›</span>
          <span style={{ fontSize: 13, color: "#888", fontWeight: 600 }}>リディアダンスアカデミー</span>
        </div>
      </header>

      {/* Breadcrumb */}
      <nav aria-label="パンくず" style={{ maxWidth: 1100, margin: "0 auto", padding: "10px 24px" }}>
        <div style={{ fontSize: 12, color: "#888" }}>
          <Link href="/" style={{ color: "#E53935", textDecoration: "none" }}>トップ</Link>
          {" › "}
          <Link href="/dance" style={{ color: "#E53935", textDecoration: "none" }}>ダンス教室</Link>
          {" › "}
          <span style={{ color: "#666" }}>リディアダンスアカデミー</span>
        </div>
      </nav>

      {/* Hero */}
      <section style={{ background: "#E53935", padding: "52px 24px 48px" }}>
        <div style={{ maxWidth: 800, margin: "0 auto", textAlign: "center" }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 6, background: "rgba(255,255,255,.2)", borderRadius: 20, padding: "4px 16px", marginBottom: 16, fontSize: 12, color: "#fff", fontWeight: 700 }}>
            🏆 全国No.1キッズダンススクール
          </div>
          <h1 style={{ fontSize: 28, fontWeight: 900, color: "#fff", marginBottom: 14, lineHeight: 1.4 }}>
            🏆 リディアダンスアカデミー（REDIA DANCE ACADEMY）完全ガイド
          </h1>
          <p style={{ fontSize: 14, color: "rgba(255,255,255,.92)", lineHeight: 2, marginBottom: 24 }}>
            全国100校以上・3歳〜・初回体験無料
          </p>
          <a href="https://liff.line.me/2001597193-pyJx1bKd/landing?follow=%40084nrdoa&lp=L1pmYU&liff_id=2001597193-pyJx1bKd" target="_blank" rel="noopener noreferrer" style={{
            display: 'block', background: '#fff', color: '#E53935',
            textAlign: 'center', padding: '18px 32px', borderRadius: '12px',
            fontWeight: '900', fontSize: '1.2rem', textDecoration: 'none',
            margin: '24px auto', boxShadow: '0 4px 16px rgba(0,0,0,.2)',
            maxWidth: '420px'
          }}>
            🎵 無料体験レッスンを申し込む →
          </a>
          <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
            {["全国100校以上", "3歳〜OK", "月7,700円〜", "初回体験無料", "プロ講師200名+"].map((b, i) => (
              <span key={i} style={{ fontSize: 12, color: "rgba(255,255,255,.9)", fontWeight: 700, background: "rgba(255,255,255,.2)", padding: "5px 12px", borderRadius: 16 }}>{b}</span>
            ))}
          </div>
        </div>
      </section>

      <div style={{ maxWidth: 900, margin: "0 auto", padding: "36px 24px 60px" }}>

        {/* 体験申込CTA（大・目立つ） */}
        <div style={{ background: "linear-gradient(135deg, #FFF5F5, #FFEBEE)", borderRadius: 20, padding: "32px 24px", marginBottom: 32, border: "2px solid #E5393530", textAlign: "center", boxShadow: "0 4px 20px rgba(229,57,53,.12)" }}>
          <div style={{ fontSize: 16, fontWeight: 900, color: "#E53935", marginBottom: 8 }}>今すぐ無料体験レッスンに参加しよう</div>
          <p style={{ fontSize: 14, color: "#666", marginBottom: 20 }}>全国100校以上、初回体験は完全無料。お近くの校舎でお子さんの反応を確かめてください。</p>
          <a href="https://liff.line.me/2001597193-pyJx1bKd/landing?follow=%40084nrdoa&lp=L1pmYU&liff_id=2001597193-pyJx1bKd" target="_blank" rel="noopener noreferrer" style={{
            display: 'block', background: '#E53935', color: '#fff',
            textAlign: 'center', padding: '18px 32px', borderRadius: '12px',
            fontWeight: '900', fontSize: '1.2rem', textDecoration: 'none',
            margin: '24px 0', boxShadow: '0 4px 16px rgba(229,57,53,.4)'
          }}>
            🎵 無料体験レッスンを申し込む →
          </a>
          <p style={{ fontSize: 12, color: "#999", margin: 0 }}>※ 申込は公式サイト（re-dia.jp）に移動します</p>
        </div>

        {/* 基本情報テーブル */}
        <div style={{ background: "#fff", borderRadius: 18, padding: "28px 24px", marginBottom: 28, border: "1.5px solid #e8edf4", boxShadow: "0 2px 12px rgba(0,0,0,.05)" }}>
          <h2 style={{ fontSize: 18, fontWeight: 900, color: "#1B2A4A", marginBottom: 20, paddingBottom: 12, borderBottom: "2px solid #E5393520" }}>
            📋 リディアダンスアカデミー基本情報
          </h2>
          <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 14 }}>
            <tbody>
              {[
                ["月謝", "月会員プラン：7,700円〜 / 受け放題プラン：27,000円"],
                ["対象年齢", "3歳〜15歳（リトルクラス・キッズクラスあり）"],
                ["ジャンル", "ヒップホップ・ジャズ・K-POP・ブレイクダンス・ポップ・ワック・ソウルなど7ジャンル以上"],
                ["展開校数", "全国100校以上（大阪・東京・愛知・神奈川・石川・茨城など）"],
                ["体験料金", "初回体験無料"],
                ["講師", "現役プロダンサー200名以上"],
                ["発表会", "年1〜2回開催"],
                ["公式サイト", "re-dia.jp"],
              ].map(([label, value], i) => (
                <tr key={i} style={{ borderBottom: "1px solid #f0f0f0" }}>
                  <td style={{ padding: "12px 16px", fontWeight: 700, color: "#1B2A4A", background: "#f8f9fb", width: "30%", borderRadius: i === 0 ? "8px 0 0 0" : "0" }}>{label}</td>
                  <td style={{ padding: "12px 16px", color: "#444", lineHeight: 1.6 }}>{value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* 特徴5つ */}
        <div style={{ background: "#fff", borderRadius: 18, padding: "28px 24px", marginBottom: 28, border: "1.5px solid #e8edf4", boxShadow: "0 2px 12px rgba(0,0,0,.05)" }}>
          <h2 style={{ fontSize: 18, fontWeight: 900, color: "#1B2A4A", marginBottom: 20, paddingBottom: 12, borderBottom: "2px solid #E5393520" }}>
            ✨ リディアダンスアカデミーの5つの特徴
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            {features.map((f, i) => (
              <div key={i} style={{ display: "flex", gap: 16, alignItems: "flex-start", padding: "16px 20px", background: "#f8f9fb", borderRadius: 12, border: "1.5px solid #e8edf4" }}>
                <div style={{ fontSize: 32, flexShrink: 0 }}>{f.icon}</div>
                <div>
                  <div style={{ fontSize: 15, fontWeight: 800, color: "#1B2A4A", marginBottom: 6 }}>{f.title}</div>
                  <div style={{ fontSize: 13, color: "#666", lineHeight: 1.7 }}>{f.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* こんなお子さんにおすすめ */}
        <div style={{ background: "#fff", borderRadius: 18, padding: "28px 24px", marginBottom: 28, border: "1.5px solid #e8edf4", boxShadow: "0 2px 12px rgba(0,0,0,.05)" }}>
          <h2 style={{ fontSize: 18, fontWeight: 900, color: "#1B2A4A", marginBottom: 20, paddingBottom: 12, borderBottom: "2px solid #E5393520" }}>
            👦 こんなお子さんにおすすめ
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            {recommendations.map((r, i) => (
              <div key={i} style={{ display: "flex", gap: 14, alignItems: "flex-start", padding: "16px 20px", background: "linear-gradient(135deg, #FFF5F5, #FFEBEE)", borderRadius: 12, border: "1.5px solid #E5393520" }}>
                <div style={{ color: "#E53935", fontSize: 20, flexShrink: 0 }}>✓</div>
                <div>
                  <div style={{ fontSize: 14, fontWeight: 800, color: "#E53935", marginBottom: 4 }}>{r.label}</div>
                  <div style={{ fontSize: 13, color: "#666", lineHeight: 1.6 }}>{r.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 全国校舎一覧 */}
        <div style={{ background: "#fff", borderRadius: 18, padding: "28px 24px", marginBottom: 28, border: "1.5px solid #e8edf4", boxShadow: "0 2px 12px rgba(0,0,0,.05)" }}>
          <h2 style={{ fontSize: 18, fontWeight: 900, color: "#1B2A4A", marginBottom: 20, paddingBottom: 12, borderBottom: "2px solid #E5393520" }}>
            🗾 全国主要エリアの校舎一覧
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: 20 }}>
            {areas.map((area, i) => (
              <div key={i} style={{ background: "#f8f9fb", borderRadius: 12, padding: "16px 18px", border: "1.5px solid #e8edf4" }}>
                <div style={{ fontSize: 14, fontWeight: 900, color: "#1B2A4A", marginBottom: 10, paddingBottom: 8, borderBottom: "1px solid #e8edf4" }}>{area.pref}</div>
                <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                  {area.schools.map((school, j) => (
                    <a key={j} href={school.url} target="_blank" rel="noopener noreferrer" style={{ fontSize: 13, color: "#E53935", textDecoration: "none", fontWeight: 600 }}>
                      → {school.name}
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div style={{ marginTop: 20, textAlign: "center" }}>
            <a href="https://liff.line.me/2001597193-pyJx1bKd/landing?follow=%40084nrdoa&lp=L1pmYU&liff_id=2001597193-pyJx1bKd" target="_blank" rel="noopener noreferrer" style={{
              display: 'inline-block', background: '#E53935', color: '#fff',
              textAlign: 'center', padding: '14px 32px', borderRadius: '10px',
              fontWeight: '900', fontSize: '14px', textDecoration: 'none',
              boxShadow: '0 4px 16px rgba(229,57,53,.4)'
            }}>
              🎵 お近くの校舎で無料体験を申し込む →
            </a>
          </div>
        </div>

        {/* FAQ */}
        <div style={{ background: "#fff", borderRadius: 18, padding: "28px 24px", marginBottom: 28, border: "1.5px solid #e8edf4", boxShadow: "0 2px 12px rgba(0,0,0,.05)" }}>
          <h2 style={{ fontSize: 18, fontWeight: 900, color: "#1B2A4A", marginBottom: 18, paddingBottom: 12, borderBottom: "2px solid #E5393520" }}>
            ❓ よくある質問
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            {faqs.map((faq, i) => (
              <div key={i} style={{ background: "#f8f9fb", borderRadius: 12, padding: "18px 20px", border: "1.5px solid #e8edf4" }}>
                <div style={{ fontSize: 14, fontWeight: 800, color: "#E53935", marginBottom: 8 }}>Q. {faq.q}</div>
                <div style={{ fontSize: 13, color: "#555", lineHeight: 1.8 }}>A. {faq.a}</div>
              </div>
            ))}
          </div>
        </div>

        {/* 最終CTA */}
        <div style={{ background: "linear-gradient(135deg, #E53935, #B71C1C)", borderRadius: 20, padding: "36px 24px", textAlign: "center", boxShadow: "0 8px 32px rgba(229,57,53,.3)" }}>
          <div style={{ fontSize: 20, fontWeight: 900, color: "#fff", marginBottom: 10 }}>まずは無料体験から始めよう</div>
          <p style={{ fontSize: 14, color: "rgba(255,255,255,.9)", marginBottom: 24, lineHeight: 1.7 }}>
            全国100校以上展開のリディアダンスアカデミーで、お子さんの可能性を広げましょう。
            初回体験は無料。体験後の入会義務はありません。
          </p>
          <a href="https://liff.line.me/2001597193-pyJx1bKd/landing?follow=%40084nrdoa&lp=L1pmYU&liff_id=2001597193-pyJx1bKd" target="_blank" rel="noopener noreferrer" style={{
            display: 'block', background: '#fff', color: '#E53935',
            textAlign: 'center', padding: '18px 32px', borderRadius: '12px',
            fontWeight: '900', fontSize: '1.2rem', textDecoration: 'none',
            margin: '0 auto', boxShadow: '0 4px 16px rgba(0,0,0,.2)',
            maxWidth: '420px'
          }}>
            🎵 無料体験レッスンを申し込む →
          </a>
        </div>

        {/* 関連リンク */}
        <div style={{ marginTop: 28, display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
          <Link href="/dance" style={{ display: "inline-flex", alignItems: "center", gap: 6, padding: "10px 20px", background: "#fff", border: "1.5px solid #FFCDD2", borderRadius: 20, color: "#E53935", fontWeight: 700, fontSize: 13, textDecoration: "none" }}>
            ← ダンス教室一覧へ
          </Link>
          <Link href="/blog/redia-dance-academy-review" style={{ display: "inline-flex", alignItems: "center", gap: 6, padding: "10px 20px", background: "#fff", border: "1.5px solid #e8edf4", borderRadius: 20, color: "#1B2A4A", fontWeight: 700, fontSize: 13, textDecoration: "none" }}>
            📝 口コミ・評判記事を読む
          </Link>
          <Link href="/" style={{ display: "inline-flex", alignItems: "center", gap: 6, padding: "10px 20px", background: "linear-gradient(135deg, #E53935, #B71C1C)", borderRadius: 20, color: "#fff", fontWeight: 700, fontSize: 13, textDecoration: "none" }}>
            🏠 トップページへ
          </Link>
        </div>
      </div>
    </div>
  );
}
