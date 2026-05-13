"use client";
import { useState } from "react";

export function StarRating({ rating }) {
  return (
    <span style={{ display: "inline-flex", alignItems: "center", gap: 2 }}>
      {[1,2,3,4,5].map(i => (
        <span key={i} style={{ fontSize: 12, color: i <= Math.round(rating) ? "#FF8A00" : "#ddd" }}>★</span>
      ))}
    </span>
  );
}

export function SchoolCard({ school, color }) {
  const [expanded, setExpanded] = useState(false);
  return (
    <div style={{
      background: "#fff", borderRadius: 16, padding: "20px",
      border: school.featured ? `2px solid ${color}` : "1.5px solid #e8edf4",
      boxShadow: school.featured ? `0 4px 24px ${color}22` : "0 2px 12px rgba(0,0,0,.05)",
      transition: "all .2s", position: "relative",
    }}>
      {school.badge && (
        <div style={{
          position: "absolute", top: -10, left: 20,
          background: school.badgeColor, color: "#fff",
          fontSize: 10, fontWeight: 800, padding: "3px 10px", borderRadius: 10,
          letterSpacing: ".4px",
        }}>{school.badge}</div>
      )}

      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 10, marginTop: 4 }}>
        <div style={{ flex: 1 }}>
          <div style={{ fontSize: 16, fontWeight: 900, color: "#1B2A4A", marginBottom: 4 }}>{school.name}</div>
          <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
            <StarRating rating={school.rating} />
            <span style={{ fontSize: 13, fontWeight: 800, color: "#FF8A00" }}>{school.rating}</span>
            <span style={{ fontSize: 11, color: "#aaa" }}>（{school.reviews}件）</span>
          </div>
        </div>
        {school.featured && <div style={{ fontSize: 20, marginLeft: 8 }}>🏆</div>}
      </div>

      <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 10 }}>
        {[
          { icon: "👶", text: school.age },
          { icon: "💰", text: school.fee },
          { icon: "📍", text: school.location },
        ].map((item, i) => (
          <div key={i} style={{ display: "flex", alignItems: "center", gap: 4, fontSize: 12, color: "#555" }}>
            <span>{item.icon}</span><span>{item.text}</span>
          </div>
        ))}
      </div>

      <p style={{ fontSize: 13, color: "#666", lineHeight: 1.75, marginBottom: 12 }}>
        {expanded ? school.desc : school.desc.slice(0, 60) + "…"}
        <button onClick={() => setExpanded(!expanded)}
          style={{ background: "none", border: "none", color: color, fontWeight: 700, cursor: "pointer", fontSize: 12, padding: "0 2px", fontFamily: "inherit" }}>
          {expanded ? " 閉じる" : " もっと見る"}
        </button>
      </p>

      <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginBottom: 14 }}>
        {school.tags.map((tag, i) => (
          <span key={i} style={{ fontSize: 11, fontWeight: 600, color: color, background: `${color}12`, border: `1px solid ${color}30`, borderRadius: 20, padding: "3px 10px" }}>
            {tag}
          </span>
        ))}
      </div>

      <div style={{ display: "flex", flexWrap: "wrap", gap: 4, marginBottom: 16 }}>
        <span style={{ fontSize: 11, color: "#999", marginRight: 2 }}>対応：</span>
        {school.genres.map((g, i) => (
          <span key={i} style={{ fontSize: 11, color: "#888", background: "#f4f7fc", borderRadius: 4, padding: "2px 8px" }}>{g}</span>
        ))}
      </div>

      <div style={{ display: "flex", gap: 8 }}>
        {school.url
          ? <a href={school.url} target="_blank" rel="noopener noreferrer" style={{ flex: 1, padding: "10px", background: `linear-gradient(135deg, ${color}, ${color}cc)`, borderRadius: 10, color: "#fff", fontWeight: 800, fontSize: 13, fontFamily: "inherit", textDecoration: "none", display: "flex", alignItems: "center", justifyContent: "center" }}>📝 無料体験に申し込む</a>
          : <button style={{ flex: 1, padding: "10px", background: `linear-gradient(135deg, ${color}, ${color}cc)`, border: "none", borderRadius: 10, color: "#fff", fontWeight: 800, fontSize: 13, cursor: "pointer", fontFamily: "inherit" }}>📝 無料体験に申し込む</button>
        }
        {school.url
          ? <a href={school.url} target="_blank" rel="noopener noreferrer" style={{ padding: "10px 14px", background: "#f4f7fc", border: "1.5px solid #e8edf4", borderRadius: 10, color: "#555", fontWeight: 700, fontSize: 13, fontFamily: "inherit", textDecoration: "none", display: "flex", alignItems: "center" }}>詳細 ›</a>
          : <button style={{ padding: "10px 14px", background: "#f4f7fc", border: "1.5px solid #e8edf4", borderRadius: 10, color: "#555", fontWeight: 700, fontSize: 13, cursor: "pointer", fontFamily: "inherit" }}>詳細 ›</button>
        }
      </div>
    </div>
  );
}
