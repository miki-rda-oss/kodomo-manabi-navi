import { ARTICLES, getArticle } from "../articles";
import Link from "next/link";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  return ARTICLES.map(a => ({ slug: a.slug }));
}

export async function generateMetadata({ params }) {
  const article = getArticle(params.slug);
  if (!article) return {};
  return {
    title: `${article.title}｜コドモならいごと`,
    description: article.description,
    keywords: article.keywords,
    openGraph: {
      title: article.title,
      description: article.description,
      type: "article",
      publishedTime: article.date,
    },
  };
}

function renderBlock(block, i) {
  switch (block.type) {
    case "lead":
      return (
        <p key={i} style={{ fontSize: 16, lineHeight: 2, color: "#444", padding: "0 0 20px", borderLeft: "4px solid #2a7cc8", paddingLeft: 16, background: "#f0f8ff", borderRadius: "0 8px 8px 0", marginBottom: 24, paddingTop: 12, paddingBottom: 12 }}>
          {block.text}
        </p>
      );
    case "toc":
      return (
        <nav key={i} style={{ background: "#f8f9fb", border: "1px solid #e0e0e0", borderRadius: 12, padding: "16px 20px", marginBottom: 28 }}>
          <div style={{ fontSize: 13, fontWeight: 700, color: "#333", marginBottom: 10 }}>📋 この記事の目次</div>
          <ol style={{ paddingLeft: 20 }}>
            {block.items.map((item, j) => (
              <li key={j} style={{ fontSize: 13, color: "#2a7cc8", lineHeight: 2 }}>{item}</li>
            ))}
          </ol>
        </nav>
      );
    case "h2":
      return (
        <h2 key={i} style={{ fontSize: 22, fontWeight: 900, color: "#1a1a2e", marginTop: 40, marginBottom: 16, paddingBottom: 10, borderBottom: "2px solid #2a7cc8" }}>
          {block.text}
        </h2>
      );
    case "h3":
      return (
        <h3 key={i} style={{ fontSize: 17, fontWeight: 800, color: "#1a1a2e", marginTop: 28, marginBottom: 12, paddingLeft: 12, borderLeft: "4px solid #64B5F6" }}>
          {block.text}
        </h3>
      );
    case "p":
      return (
        <p key={i} style={{ fontSize: 15, lineHeight: 2, color: "#444", marginBottom: 16 }}>
          {block.text}
        </p>
      );
    case "box":
      return (
        <div key={i} style={{ background: "#E3F2FD", borderRadius: 12, padding: "16px 20px", marginBottom: 20, border: "1px solid #BBDEFB" }}>
          <div style={{ fontSize: 13, fontWeight: 700, color: "#1565C0", marginBottom: 10 }}>ℹ️ {block.title}</div>
          <ul style={{ paddingLeft: 20 }}>
            {block.items.map((item, j) => (
              <li key={j} style={{ fontSize: 14, color: "#333", lineHeight: 1.9 }}>{item}</li>
            ))}
          </ul>
        </div>
      );
    case "checklist":
      return (
        <ul key={i} style={{ listStyle: "none", padding: 0, marginBottom: 20 }}>
          {block.items.map((item, j) => (
            <li key={j} style={{ display: "flex", gap: 10, alignItems: "flex-start", padding: "10px 0", borderBottom: "1px solid #f0f0f0", fontSize: 14, color: "#444", lineHeight: 1.8 }}>
              <span style={{ color: "#4CAF50", fontWeight: 900, fontSize: 16, flexShrink: 0, marginTop: 2 }}>✓</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      );
    case "numbered":
      return (
        <ol key={i} style={{ paddingLeft: 24, marginBottom: 20 }}>
          {block.items.map((item, j) => (
            <li key={j} style={{ fontSize: 14, color: "#444", lineHeight: 1.9, marginBottom: 8 }}>{item}</li>
          ))}
        </ol>
      );
    case "table":
      return (
        <div key={i} style={{ overflowX: "auto", marginBottom: 24 }}>
          <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 14 }}>
            <thead>
              <tr>
                {block.headers.map((h, j) => (
                  <th key={j} style={{ background: "#1a1a2e", color: "#fff", padding: "10px 14px", textAlign: "left", fontWeight: 700 }}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {block.rows.map((row, j) => (
                <tr key={j} style={{ background: j % 2 === 0 ? "#fafbfc" : "#fff" }}>
                  {row.map((cell, k) => (
                    <td key={k} style={{ padding: "10px 14px", borderBottom: "1px solid #eee", color: "#444" }}>{cell}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    case "faq":
      return (
        <div key={i} style={{ background: "#fff", border: "1px solid #e8f0fe", borderRadius: 12, padding: "18px 20px", marginBottom: 14 }}>
          <div style={{ fontSize: 14, fontWeight: 800, color: "#1a1a2e", marginBottom: 8, display: "flex", gap: 8 }}>
            <span style={{ color: "#2a7cc8", fontWeight: 900 }}>Q.</span>{block.q}
          </div>
          <div style={{ fontSize: 14, color: "#555", lineHeight: 1.9, display: "flex", gap: 8 }}>
            <span style={{ color: "#4CAF50", fontWeight: 900, flexShrink: 0 }}>A.</span>{block.a}
          </div>
        </div>
      );
    case "review":
      return (
        <div key={i} style={{ background: "#FFF8F7", border: "1px solid #FFCCBC", borderRadius: 12, padding: "16px 20px", marginBottom: 14 }}>
          <div style={{ display: "flex", gap: 8, alignItems: "center", marginBottom: 8 }}>
            <div style={{ width: 32, height: 32, borderRadius: "50%", background: "#FF8A65", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 14 }}>👤</div>
            <div>
              <div style={{ fontSize: 13, fontWeight: 700, color: "#333" }}>{block.name}</div>
              <div style={{ fontSize: 11, color: "#888" }}>📍 {block.loc}</div>
            </div>
          </div>
          <p style={{ fontSize: 14, color: "#555", lineHeight: 1.8, fontStyle: "italic" }}>「{block.text}」</p>
        </div>
      );
    case "loclist":
      return (
        <div key={i} style={{ marginBottom: 20 }}>
          {block.locs.map((loc, j) => (
            <div key={j} style={{ padding: "12px 0", borderBottom: "1px solid #f0f0f0" }}>
              <div style={{ fontSize: 14, fontWeight: 700, color: "#333" }}>📍 {loc.name}</div>
              <div style={{ fontSize: 12, color: "#888", marginTop: 2 }}>{loc.addr}</div>
              <div style={{ fontSize: 12, color: "#2a7cc8", marginTop: 2 }}>🚃 {loc.access}</div>
            </div>
          ))}
        </div>
      );
    case "cta":
      return (
        <div key={i} style={{ background: "linear-gradient(135deg,#E53935,#C62828)", borderRadius: 16, padding: "24px 20px", marginTop: 32, marginBottom: 16, textAlign: "center" }}>
          <div style={{ fontSize: 15, color: "#fff", marginBottom: 12, fontWeight: 700 }}>
            🎉 初回無料体験レッスン受付中！
          </div>
          <a href={block.url} target="_blank" rel="noopener noreferrer"
            style={{ display: "inline-block", background: "#fff", color: "#E53935", fontWeight: 900, fontSize: 15, padding: "14px 32px", borderRadius: 12, textDecoration: "none", boxShadow: "0 4px 20px rgba(0,0,0,.2)" }}>
            {block.text}
          </a>
          <div style={{ fontSize: 11, color: "rgba(255,255,255,.8)", marginTop: 10 }}>入会強制なし・当日キャンセルOK</div>
        </div>
      );
    default:
      return null;
  }
}

export default function ArticlePage({ params }) {
  const article = getArticle(params.slug);
  if (!article) notFound();

  const faqSchemaData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": article.faqSchema.map(faq => ({
      "@type": "Question",
      "name": faq.q,
      "acceptedAnswer": { "@type": "Answer", "text": faq.a },
    })),
  };

  const articleSchemaData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": article.title,
    "description": article.description,
    "datePublished": article.date,
    "dateModified": article.date,
    "author": { "@type": "Organization", "name": "コドモならいごと編集部" },
    "publisher": {
      "@type": "Organization",
      "name": "コドモならいごと",
      "url": "https://kodomo-manabi-navi.vercel.app",
    },
    "mainEntityOfPage": { "@type": "WebPage", "@id": `https://kodomo-manabi-navi.vercel.app/blog/${article.slug}` },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "トップ", "item": "https://kodomo-manabi-navi.vercel.app" },
      { "@type": "ListItem", "position": 2, "name": "ブログ", "item": "https://kodomo-manabi-navi.vercel.app/blog" },
      { "@type": "ListItem", "position": 3, "name": article.title, "item": `https://kodomo-manabi-navi.vercel.app/blog/${article.slug}` },
    ],
  };

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
        </div>
      </header>

      {/* Breadcrumb */}
      <nav aria-label="パンくず" style={{ maxWidth: 1100, margin: "0 auto", padding: "12px 20px" }}>
        <div style={{ fontSize: 12, color: "#888" }}>
          <Link href="/" style={{ color: "#2a7cc8", textDecoration: "none" }}>トップ</Link>
          {" › "}
          <Link href="/blog" style={{ color: "#2a7cc8", textDecoration: "none" }}>コラム</Link>
          {" › "}
          <span style={{ color: "#666" }}>{article.category}</span>
        </div>
      </nav>

      <div style={{ maxWidth: 860, margin: "0 auto", padding: "0 20px 60px" }}>
        {/* Article Header */}
        <div style={{ marginBottom: 28 }}>
          <div style={{ display: "flex", gap: 8, marginBottom: 12, flexWrap: "wrap" }}>
            <span style={{ background: "#E53935", color: "#fff", padding: "3px 10px", borderRadius: 12, fontSize: 12, fontWeight: 700 }}>
              {article.category}
            </span>
            <span style={{ background: "#f0f0f0", color: "#666", padding: "3px 10px", borderRadius: 12, fontSize: 12 }}>
              📍 {article.area}
            </span>
            <span style={{ color: "#aaa", fontSize: 12, padding: "3px 0" }}>
              🗓 {article.date.replace(/-/g, "/")} ｜ ⏱ 約{article.readMin}分
            </span>
          </div>
          <h1 style={{ fontSize: 28, fontWeight: 900, color: "#1a1a2e", lineHeight: 1.5, marginBottom: 16 }}>
            {article.title}
          </h1>
          <p style={{ fontSize: 14, color: "#666", lineHeight: 1.8, padding: "12px 16px", background: "#f8f9fb", borderRadius: 10, borderLeft: "3px solid #2a7cc8" }}>
            {article.description}
          </p>
        </div>

        {/* Author / Trust Signal */}
        <div style={{ display: "flex", alignItems: "center", gap: 12, padding: "14px 18px", background: "#fff", borderRadius: 12, marginBottom: 32, border: "1px solid #e8f0fe" }}>
          <div style={{ width: 44, height: 44, borderRadius: "50%", background: "linear-gradient(135deg,#2a7cc8,#0D47A1)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 20, flexShrink: 0 }}>✍️</div>
          <div>
            <div style={{ fontSize: 13, fontWeight: 700, color: "#333" }}>コドモならいごと編集部</div>
            <div style={{ fontSize: 11, color: "#888", marginTop: 2 }}>全国の子供の習い事情報を調査・比較する専門チーム。ダンス・英語・スイミングなど11ジャンルの習い事情報を発信。</div>
          </div>
        </div>

        {/* Article Content */}
        <article style={{ background: "#fff", borderRadius: 16, padding: "28px 24px", boxShadow: "0 2px 14px rgba(0,0,0,.06)", marginBottom: 32 }}>
          {article.content.map((block, i) => renderBlock(block, i))}
        </article>

        {/* Related Articles */}
        {article.relatedLinks && article.relatedLinks.length > 0 && (
          <div style={{ background: "#fff", borderRadius: 16, padding: "22px 24px", marginBottom: 24, boxShadow: "0 2px 8px rgba(0,0,0,.04)" }}>
            <h2 style={{ fontSize: 16, fontWeight: 800, color: "#1a1a2e", marginBottom: 14 }}>🔗 関連コンテンツ</h2>
            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              {article.relatedLinks.map((link, i) => (
                <Link key={i} href={link.href} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "10px 14px", background: "#f8f9fb", borderRadius: 10, textDecoration: "none", color: "#2a7cc8", fontSize: 14, fontWeight: 600, border: "1px solid #e8f0fe" }}>
                  <span>{link.text}</span>
                  <span style={{ color: "#aaa" }}>›</span>
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* Back to Blog */}
        <div style={{ textAlign: "center" }}>
          <Link href="/blog" style={{ display: "inline-block", padding: "12px 24px", background: "#f0f0f0", borderRadius: 10, textDecoration: "none", color: "#333", fontWeight: 700, fontSize: 14 }}>
            ← コラム一覧に戻る
          </Link>
        </div>
      </div>

      {/* Footer */}
      <footer style={{ background: "linear-gradient(135deg,#1a1a2e,#16213e)", color: "#aab", padding: "36px 20px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 14, marginBottom: 16 }}>
            <Link href="/" style={{ color: "#ccc", fontSize: 13, textDecoration: "none", fontWeight: 600 }}>🏠 トップ</Link>
            <Link href="/#area" style={{ color: "#ccc", fontSize: 13, textDecoration: "none" }}>🗾 エリアから探す</Link>
            <Link href="/genre/dance" style={{ color: "#ccc", fontSize: 13, textDecoration: "none" }}>💃 ダンス</Link>
            <Link href="/blog" style={{ color: "#ccc", fontSize: 13, textDecoration: "none" }}>📝 コラム</Link>
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
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchemaData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchemaData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
    </div>
  );
}
