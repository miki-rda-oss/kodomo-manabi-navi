import { ARTICLES } from "./articles";
import Link from "next/link";

export const metadata = {
  title: "ダンス習い事コラム・ブログ｜コドモならいごと",
  description: "子供のダンス教室の選び方、おすすめスクール、費用相場など役立つ情報を発信。大阪・東京をはじめ全国のキッズダンス情報満載。",
  keywords: ["子供","ダンス","習い事","選び方","おすすめ","大阪","東京","ブログ"],
};

const CATEGORY_COLORS = {
  "ダンス": "#E53935",
  "K-POP": "#AB47BC",
  "スイミング": "#0288D1",
  "英語": "#FF8A00",
  "全国": "#4CAF50",
};

export default function BlogIndex() {
  const sorted = [...ARTICLES].sort((a, b) => new Date(b.date) - new Date(a.date));

  return (
    <div style={{ fontFamily: "'Noto Sans JP','Hiragino Sans',sans-serif", background: "#f5f6fa", minHeight: "100vh" }}>
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;500;700;800;900&display=swap');*{box-sizing:border-box;margin:0;padding:0}`}</style>

      {/* Header */}
      <header style={{ background: "linear-gradient(135deg,#2a7cc8,#0D47A1)", color: "#fff", position: "sticky", top: 0, zIndex: 100, boxShadow: "0 4px 20px rgba(0,0,0,.15)" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", padding: "12px 20px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <Link href="/" style={{ display: "flex", alignItems: "center", gap: 10, textDecoration: "none", color: "inherit" }}>
            <span style={{ fontSize: 26 }}>🧒</span>
            <div>
              <div style={{ fontSize: 18, fontWeight: 900 }}>コドモならいごと</div>
              <div style={{ fontSize: 10, opacity: 0.8 }}>子供の習い事を口コミで比較</div>
            </div>
          </Link>
          <span style={{ fontSize: 12, opacity: 0.9 }}>📝 コラム・ブログ</span>
        </div>
      </header>

      {/* Breadcrumb */}
      <nav aria-label="パンくず" style={{ maxWidth: 1100, margin: "0 auto", padding: "12px 20px" }}>
        <div style={{ fontSize: 12, color: "#888" }}>
          <Link href="/" style={{ color: "#2a7cc8", textDecoration: "none" }}>トップ</Link>
          {" › "}
          <span style={{ color: "#666" }}>コラム・ブログ</span>
        </div>
      </nav>

      {/* Hero */}
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 20px 24px" }}>
        <div style={{ background: "linear-gradient(135deg,#E3F2FD,#BBDEFB)", borderRadius: 20, padding: "28px 24px" }}>
          <h1 style={{ fontSize: 24, fontWeight: 900, color: "#1a1a2e", marginBottom: 8 }}>
            📝 ダンス習い事コラム
          </h1>
          <p style={{ fontSize: 14, color: "#555", lineHeight: 1.8 }}>
            子供のダンス教室の選び方・費用・おすすめスクールなど、役立つ情報を専門家監修のもとお届けします。
          </p>
          <div style={{ marginTop: 12, display: "flex", gap: 8, flexWrap: "wrap" }}>
            {["ダンス選び方", "おすすめスクール", "K-POP", "費用・月謝", "年齢別ガイド"].map(tag => (
              <span key={tag} style={{ background: "#fff", border: "1px solid #BBDEFB", borderRadius: 20, padding: "4px 12px", fontSize: 12, color: "#1565C0", fontWeight: 600 }}>
                #{tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Article Grid */}
      <main style={{ maxWidth: 1100, margin: "0 auto", padding: "0 20px 60px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(320px,1fr))", gap: 20 }}>
          {sorted.map((article) => {
            const catColor = CATEGORY_COLORS[article.category] || "#2a7cc8";
            return (
              <Link key={article.slug} href={`/blog/${article.slug}`} style={{ textDecoration: "none" }}>
                <article style={{ background: "#fff", borderRadius: 16, boxShadow: "0 2px 14px rgba(0,0,0,.06)", overflow: "hidden", border: "1px solid #f0f0f0", transition: "transform .2s,box-shadow .2s", display: "flex", flexDirection: "column", height: "100%" }}>
                  {/* Article Hero */}
                  <div style={{ background: `linear-gradient(135deg,${catColor}18,${catColor}30)`, padding: "24px 20px 16px", display: "flex", alignItems: "center", gap: 12 }}>
                    <div style={{ fontSize: 44 }}>{article.heroEmoji}</div>
                    <div>
                      <div style={{ display: "flex", gap: 6, marginBottom: 6, flexWrap: "wrap" }}>
                        <span style={{ background: catColor, color: "#fff", padding: "2px 8px", borderRadius: 12, fontSize: 11, fontWeight: 700 }}>{article.category}</span>
                        <span style={{ background: "#f0f0f0", color: "#666", padding: "2px 8px", borderRadius: 12, fontSize: 11 }}>📍 {article.area}</span>
                      </div>
                      <div style={{ fontSize: 11, color: "#888" }}>⏱ {article.readMin}分で読める</div>
                    </div>
                  </div>

                  {/* Content */}
                  <div style={{ padding: "16px 20px 20px", flex: 1, display: "flex", flexDirection: "column" }}>
                    <h2 style={{ fontSize: 15, fontWeight: 800, color: "#1a1a2e", lineHeight: 1.6, marginBottom: 10 }}>
                      {article.title}
                    </h2>
                    <p style={{ fontSize: 13, color: "#666", lineHeight: 1.7, flex: 1 }}>
                      {article.description.slice(0, 90)}…
                    </p>
                    <div style={{ marginTop: 14, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                      <span style={{ fontSize: 11, color: "#aaa" }}>
                        🗓 {article.date.replace(/-/g, "/")}
                      </span>
                      <span style={{ fontSize: 13, fontWeight: 700, color: catColor }}>続きを読む →</span>
                    </div>
                  </div>
                </article>
              </Link>
            );
          })}
        </div>
      </main>

      {/* Footer */}
      <footer style={{ background: "linear-gradient(135deg,#1a1a2e,#16213e)", color: "#aab", padding: "36px 20px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 14, marginBottom: 16 }}>
            <Link href="/" style={{ color: "#ccc", fontSize: 13, textDecoration: "none", fontWeight: 600 }}>🏠 トップ</Link>
            <Link href="/#area" style={{ color: "#ccc", fontSize: 13, textDecoration: "none" }}>🗾 エリアから探す</Link>
            <Link href="/genre/dance" style={{ color: "#ccc", fontSize: 13, textDecoration: "none" }}>💃 ダンス</Link>
            <Link href="/about" style={{ color: "#aab", fontSize: 12, textDecoration: "none" }}>会社概要</Link>
            <Link href="/privacy" style={{ color: "#aab", fontSize: 12, textDecoration: "none" }}>プライバシー</Link>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 12 }}>
            <span style={{ fontSize: 22 }}>🧒</span>
            <Link href="/" style={{ fontSize: 17, fontWeight: 800, color: "#fff", textDecoration: "none" }}>コドモならいごと</Link>
          </div>
          <div style={{ borderTop: "1px solid #333", marginTop: 16, paddingTop: 12, fontSize: 11, color: "#667" }}>© 2026 コドモならいごと</div>
        </div>
      </footer>

      {/* JSON-LD */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Blog",
        "name": "コドモならいごと コラム",
        "description": "子供の習い事に関する情報・ガイドを発信するブログ",
        "url": "https://kodomo-manabi-navi.vercel.app/blog",
        "blogPost": sorted.map(a => ({
          "@type": "BlogPosting",
          "headline": a.title,
          "description": a.description,
          "datePublished": a.date,
          "url": `https://kodomo-manabi-navi.vercel.app/blog/${a.slug}`,
          "author": { "@type": "Organization", "name": "コドモならいごと編集部" },
        })),
      }) }} />
    </div>
  );
}
