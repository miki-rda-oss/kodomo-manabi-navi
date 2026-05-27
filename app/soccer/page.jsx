import Link from "next/link";
import { ALL_PREFS_LIST } from "./soccerData";

export const metadata = {
  title: "子供のサッカースクール・教室おすすめ｜全国都道府県別【コドモならいごと】",
  description: "全国の子ども向けサッカースクールを都道府県・エリア別に比較。Jリーグ系・地域クラブ・全国チェーンの月謝・コース・無料体験情報を掲載。",
  keywords: ["子供 サッカースクール", "サッカー 子ども", "キッズサッカー", "サッカースクール 比較", "Jリーグ系 スクール"],
  alternates: {
    canonical: "https://www.kodomo-navi.com/soccer",
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "トップ", item: "https://www.kodomo-navi.com" },
    { "@type": "ListItem", position: 2, name: "サッカースクール・教室", item: "https://www.kodomo-navi.com/soccer" },
  ],
};


const popularSchools = [
  { name: "ヴェルディSSアカデミー", rating: 4.3, fee: 9900, age: "3歳〜", desc: "東京ヴェルディが運営する本格スクール。Jリーグクラブのメソッドで技術・戦術を体系的に指導。全国各地に教室展開。", emoji: "⚽" },
  { name: "レアルスポーツ", rating: 4.4, fee: 8800, age: "3歳〜", desc: "全国展開の大手サッカースクール。年齢・レベル別クラスで初心者から本格派まで対応。無料体験随時開催。", emoji: "🏃" },
  { name: "コパ・フットボール", rating: 4.3, fee: 10000, age: "4歳〜", desc: "スペイン式メソッドを取り入れた本格的な技術指導。少人数制で一人ひとりの成長をサポート。", emoji: "🥅" },
  { name: "FCバルセロナスクール", rating: 4.5, fee: 15400, age: "4歳〜12歳", desc: "バルサの哲学に基づいた技術・戦術指導。ポジショニングや判断力を重視した世界基準の育成プログラム。", emoji: "⚽" },
  { name: "ジュニアサッカークラブ全国FC", rating: 4.2, fee: 5500, age: "3歳〜", desc: "リーズナブルな月謝で全国展開。初心者歓迎、楽しみながらサッカーの基礎を学べる地域密着型スクール。", emoji: "🏃" },
  { name: "浦和レッズハートフルクラブ", rating: 4.1, fee: 7700, age: "年長〜", desc: "浦和レッズが運営するスクール。フェアプレー精神を大切にし、サッカーを通じた人間形成を目指す。", emoji: "🥅" },
];

const faqs = [
  { q: "子供のサッカースクールは何歳から始めるべき？", a: "3歳からのキッズクラスを設けているスクールもあります。一般的には4〜5歳からが始めどきとされており、多くのスクールが幼児コースを充実させています。" },
  { q: "子供のサッカースクールの月謝相場は？", a: "週1回通塾タイプで月5,000〜12,000円が相場です。Jリーグ系スクールは月8,000円〜が多く、地域クラブはリーズナブルに始められます。" },
  { q: "サッカーを幼少期から習う効果は？", a: "幼少期はボール感覚・運動神経が発達しやすい時期です。チームプレーを通じて協調性やコミュニケーション力も自然に育てられます。" },
  { q: "Jリーグ系のサッカースクールはありますか？", a: "多くのJリーグクラブが地域向けスクールを開校しています。プロ指導者のメソッドで本格的なサッカーを学べます。" },
];

const blogs = [
  { href: "/blog/kids-soccer-guide", text: "子供のサッカースクールの選び方完全ガイド" },
  { href: "/blog/kids-soccer-school-guide-2026", text: "子供サッカースクールおすすめ2026年版" },
  { href: "/blog/kids-soccer-jleague-guide", text: "Jリーグ系サッカースクール完全ガイド" },
  { href: "/blog/kids-soccer-benefits-guide", text: "子供がサッカーを習う効果・メリット" },
  { href: "/blog/kids-soccer-beginner-guide", text: "子供のサッカー初心者向け完全ガイド" },
];

export default function SoccerTopPage() {
  return (
    <div style={{ fontFamily: "'Noto Sans JP','Hiragino Sans',sans-serif", background: "#f4f7fc", minHeight: "100vh" }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      {/* Header */}
      <header style={{ background: "#fff", borderBottom: "1px solid #e8edf4", boxShadow: "0 2px 8px rgba(0,0,0,.05)", position: "sticky", top: 0, zIndex: 100 }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 24px", display: "flex", alignItems: "center", gap: 10, height: 56 }}>
          <Link href="/" style={{ display: "flex", alignItems: "center", gap: 8, textDecoration: "none" }}>
            <div style={{ width: 32, height: 32, borderRadius: 9, background: "linear-gradient(135deg, #4CAF50, #2E7D32)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 16 }}>🧒</div>
            <span style={{ fontSize: 15, fontWeight: 900, color: "#1B2A4A" }}>コドモならいごと</span>
          </Link>
          <span style={{ color: "#ddd" }}>›</span>
          <span style={{ fontSize: 13, color: "#888", fontWeight: 600 }}>サッカースクール・教室</span>
        </div>
      </header>

      {/* Breadcrumb */}
      <nav aria-label="パンくず" style={{ maxWidth: 1100, margin: "0 auto", padding: "10px 24px" }}>
        <div style={{ fontSize: 12, color: "#888" }}>
          <Link href="/" style={{ color: "#4CAF50", textDecoration: "none" }}>トップ</Link>
          {" › "}
          <span style={{ color: "#666" }}>サッカースクール・教室</span>
        </div>
      </nav>

      {/* Hero */}
      <section style={{ background: "linear-gradient(135deg, #1B5E20, #2E7D32)", padding: "52px 24px 48px" }}>
        <div style={{ maxWidth: 800, margin: "0 auto", textAlign: "center" }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 6, background: "rgba(255,255,255,.2)", borderRadius: 20, padding: "4px 16px", marginBottom: 16, fontSize: 12, color: "#fff", fontWeight: 700 }}>
            ⚽ 全国47都道府県対応
          </div>
          <h1 style={{ fontSize: 30, fontWeight: 900, color: "#fff", marginBottom: 14, lineHeight: 1.4 }}>
            子供のサッカースクール<br />全国・都道府県別
          </h1>
          <p style={{ fontSize: 14, color: "rgba(255,255,255,.92)", lineHeight: 2, marginBottom: 24 }}>
            お近くのサッカースクールを探そう。Jリーグ系から地域クラブまで比較できます。
          </p>
          <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
            {["⭐ 口コミ多数掲載", "👶 3歳〜OK", "💰 月5,500円〜", "🏆 Jリーグ系対応"].map((b, i) => (
              <span key={i} style={{ fontSize: 13, color: "rgba(255,255,255,.9)", fontWeight: 700, background: "rgba(255,255,255,.15)", padding: "6px 14px", borderRadius: 20 }}>{b}</span>
            ))}
          </div>
        </div>
      </section>

      <div style={{ maxWidth: 1000, margin: "0 auto", padding: "36px 24px 60px" }}>

        {/* 都道府県グリッド */}
        <div style={{ background: "#fff", borderRadius: 18, padding: "28px 24px", marginBottom: 28, border: "1.5px solid #e8edf4", boxShadow: "0 2px 12px rgba(0,0,0,.05)" }}>
          <h2 style={{ fontSize: 18, fontWeight: 900, color: "#1B2A4A", marginBottom: 20, paddingBottom: 12, borderBottom: "2px solid #4CAF5020" }}>
            🗾 都道府県からサッカースクールを探す
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(140px, 1fr))", gap: 8 }}>
            {ALL_PREFS_LIST.map((pref) => (
              <Link
                key={pref.slug}
                href={`/soccer/${pref.slug}`}
                style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "10px 14px", background: "#fff", border: "1.5px solid #e8edf4", borderRadius: 10, textDecoration: "none", color: "#1B2A4A", fontWeight: 700, fontSize: 13, boxShadow: "0 1px 4px rgba(0,0,0,.04)" }}
              >
                <span>{pref.name}</span>
                <span style={{ color: "#4CAF50", fontSize: 14 }}>›</span>
              </Link>
            ))}
          </div>
        </div>

        {/* 人気スクール一覧 */}
        <div style={{ background: "#fff", borderRadius: 18, padding: "28px 24px", marginBottom: 28, border: "1.5px solid #e8edf4", boxShadow: "0 2px 12px rgba(0,0,0,.05)" }}>
          <h2 style={{ fontSize: 18, fontWeight: 900, color: "#1B2A4A", marginBottom: 20, paddingBottom: 12, borderBottom: "2px solid #4CAF5020" }}>
            🏆 人気のサッカースクール
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: 14 }}>
            {popularSchools.map((s, i) => (
              <div key={i} style={{ background: "#fff", border: "1.5px solid #e8edf4", borderRadius: 14, padding: "20px 18px", boxShadow: "0 2px 8px rgba(0,0,0,.04)" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 10 }}>
                  <div style={{ width: 44, height: 44, borderRadius: 12, background: "linear-gradient(135deg, #4CAF5020, #2E7D3230)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 22 }}>{s.emoji}</div>
                  <div>
                    <div style={{ fontSize: 14, fontWeight: 800, color: "#1B2A4A" }}>{s.name}</div>
                    <div style={{ fontSize: 12, color: "#888", marginTop: 2 }}>対象: {s.age}</div>
                  </div>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 8 }}>
                  <span style={{ fontSize: 13, color: "#4CAF50", fontWeight: 700 }}>★ {s.rating}</span>
                  <span style={{ fontSize: 12, color: "#888" }}>月額 ¥{s.fee.toLocaleString()}〜</span>
                </div>
                <p style={{ fontSize: 12, color: "#666", lineHeight: 1.7, margin: 0 }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ */}
        <div style={{ background: "#fff", borderRadius: 18, padding: "28px 24px", marginBottom: 28, border: "1.5px solid #e8edf4", boxShadow: "0 2px 12px rgba(0,0,0,.05)" }}>
          <h2 style={{ fontSize: 18, fontWeight: 900, color: "#1B2A4A", marginBottom: 18, paddingBottom: 12, borderBottom: "2px solid #4CAF5020" }}>
            ❓ よくある質問
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            {faqs.map((faq, i) => (
              <div key={i} style={{ background: "#f8f9fb", borderRadius: 12, padding: "18px 20px", border: "1.5px solid #e8edf4" }}>
                <div style={{ fontSize: 14, fontWeight: 800, color: "#1B2A4A", marginBottom: 8 }}>Q. {faq.q}</div>
                <div style={{ fontSize: 13, color: "#555", lineHeight: 1.8 }}>A. {faq.a}</div>
              </div>
            ))}
          </div>
        </div>

        {/* 関連ブログ */}
        <div style={{ background: "#fff", borderRadius: 18, padding: "28px 24px", marginBottom: 28, border: "1.5px solid #e8edf4", boxShadow: "0 2px 12px rgba(0,0,0,.05)" }}>
          <h2 style={{ fontSize: 18, fontWeight: 900, color: "#1B2A4A", marginBottom: 16, paddingBottom: 12, borderBottom: "2px solid #4CAF5020" }}>
            📝 関連記事・ガイド
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            {blogs.map((blog, i) => (
              <Link key={i} href={blog.href} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "12px 16px", background: "#f8f9fb", borderRadius: 10, textDecoration: "none", color: "#1B2A4A", fontSize: 14, fontWeight: 600, border: "1px solid #e8edf4" }}>
                <span>📝 {blog.text}</span>
                <span style={{ color: "#ccc" }}>›</span>
              </Link>
            ))}
          </div>
        </div>

        <div style={{ textAlign: "center", display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
          <Link href="/genre/soccer" style={{ display: "inline-flex", alignItems: "center", gap: 6, padding: "12px 24px", background: "#fff", border: "1.5px solid #C8E6C9", borderRadius: 20, color: "#2E7D32", fontWeight: 700, fontSize: 14, textDecoration: "none" }}>
            ⚽ サッカーのスクール一覧
          </Link>
          <Link href="/" style={{ display: "inline-flex", alignItems: "center", gap: 6, padding: "12px 24px", background: "linear-gradient(135deg, #4CAF50, #2E7D32)", borderRadius: 20, color: "#fff", fontWeight: 700, fontSize: 14, textDecoration: "none", boxShadow: "0 4px 16px rgba(76,175,80,.3)" }}>
            ← トップページへ戻る
          </Link>
        </div>
      </div>
    </div>
  );
}
