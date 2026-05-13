"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";

const REGIONS = [
  { name: "関東", color: "#FF8A00", areas: [
    { name: "東京都", cities: [
      { name: "世田谷区", schools: 7, slug: "/tokyo/setagaya" },
      { name: "北区", schools: 5, slug: "/tokyo/kita" },
      { name: "目黒区", schools: 4, slug: "/tokyo/meguro" },
      { name: "渋谷区", schools: 3, slug: "/tokyo/shibuya" },
      { name: "新宿区", schools: 3, slug: "/tokyo/shinjuku" },
      { name: "練馬区", schools: 2, slug: "/tokyo/nerima" },
      { name: "杉並区", schools: 2, slug: "/tokyo/suginami" },
      { name: "江戸川区", schools: 2, slug: "/tokyo/edogawa" },
      { name: "調布市", schools: 2, slug: "/tokyo/chofu" },
      { name: "港区", schools: 1, slug: "/tokyo/minato" },
      { name: "品川区", schools: 1, slug: "/tokyo/shinagawa" },
      { name: "町田市", schools: 1, slug: "/tokyo/machida" },
    ]},
    { name: "神奈川県", cities: [
      { name: "川崎市中原区", schools: 6, slug: "/kanagawa/nakahara" },
      { name: "川崎市高津区", schools: 2, slug: "/kanagawa/takatsu" },
      { name: "横浜市都筑区", schools: 2, slug: "/kanagawa/tsuzuki" },
      { name: "横須賀市", schools: 2, slug: "/kanagawa/yokosuka" },
      { name: "藤沢市", schools: 2, slug: "/kanagawa/fujisawa" },
      { name: "横浜市青葉区", schools: 1, slug: "/kanagawa/aoba" },
      { name: "横浜市港北区", schools: 1, slug: "/kanagawa/kohoku" },
      { name: "横浜市緑区", schools: 1, slug: "/kanagawa/midori" },
      { name: "海老名市", schools: 1, slug: "/kanagawa/ebina" },
      { name: "大和市", schools: 1, slug: "/kanagawa/yamato" },
      { name: "厚木市", schools: 1, slug: "/kanagawa/atsugi" },
      { name: "逗子市", schools: 1, slug: "/kanagawa/zushi" },
      { name: "相模原市南区", schools: 1, slug: "/kanagawa/sagamihara" },
    ]},
    { name: "埼玉県", cities: [
      { name: "さいたま市浦和区", schools: 2, slug: "/saitama/urawa" },
      { name: "川口市", schools: 2, slug: "/saitama/kawaguchi" },
      { name: "越谷市", schools: 1, slug: "/saitama/koshigaya" },
      { name: "さいたま市南区", schools: 1, slug: "/saitama/minami" },
    ]},
    { name: "千葉県", cities: [
      { name: "柏市", schools: 5, slug: "/chiba/kashiwa" },
      { name: "千葉市", schools: 2, slug: "/chiba/chiba-city" },
      { name: "松戸市", schools: 2, slug: "/chiba/matsudo" },
    ]},
    { name: "茨城県", cities: [
      { name: "つくば市", schools: 2, slug: "/ibaraki/tsukuba" },
      { name: "水戸市", schools: 1, slug: "/ibaraki/mito" },
      { name: "ひたちなか市", schools: 1, slug: "/ibaraki/hitachinaka" },
      { name: "土浦市", schools: 1, slug: "/ibaraki/tsuchiura" },
      { name: "日立市", schools: 1, slug: "/ibaraki/hitachi" },
    ]},
  ]},
  { name: "中部", color: "#FF8A00", areas: [
    { name: "愛知県", cities: [
      { name: "名古屋市天白区", schools: 1, slug: "/aichi/tenpaku" },
      { name: "名古屋市守山区", schools: 1, slug: "/aichi/moriyama" },
      { name: "名古屋市千種区", schools: 1, slug: "/aichi/chikusa" },
      { name: "名古屋市緑区", schools: 1, slug: "/aichi/midori" },
      { name: "名古屋市名東区", schools: 1, slug: "/aichi/meito" },
      { name: "日進市", schools: 1, slug: "/aichi/nisshin" },
      { name: "安城市", schools: 1, slug: "/aichi/anjo" },
      { name: "豊田市", schools: 1, slug: "/aichi/toyota" },
      { name: "尾張旭市", schools: 1, slug: "/aichi/owariasahi" },
    ]},
    { name: "岐阜県", cities: [
      { name: "岐阜市", schools: 1, slug: "/gifu/gifu-city" },
      { name: "可児市", schools: 1, slug: "/gifu/kani" },
      { name: "多治見市", schools: 1, slug: "/gifu/tajimi" },
      { name: "美濃加茂市", schools: 1, slug: "/gifu/minokamo" },
    ]},
    { name: "石川県", cities: [
      { name: "金沢市", schools: 2, slug: "/ishikawa/kanazawa" },
      { name: "野々市市", schools: 1, slug: "/ishikawa/nonoichi" },
      { name: "内灘町", schools: 1, slug: "/ishikawa/uchinada" },
    ]},
    { name: "長野県", cities: [
      { name: "長野市", schools: 1, slug: "/nagano/nagano-city" },
    ]},
  ]},
  { name: "関西", color: "#FF8A00", areas: [
    { name: "大阪府", cities: [
      { name: "大阪市", schools: 6, slug: "/osaka/osaka-city" },
      { name: "箕面市", schools: 5, slug: "/osaka/minoh" },
      { name: "吹田市", schools: 3, slug: "/osaka/suita" },
      { name: "豊中市", schools: 2, slug: "/osaka/toyonaka" },
      { name: "高槻市", schools: 2, slug: "/osaka/takatsuki" },
      { name: "堺市", schools: 2, slug: "/osaka/sakai" },
      { name: "守口市", schools: 1, slug: "/osaka/moriguchi" },
      { name: "茨木市", schools: 1, slug: "/osaka/ibaraki" },
    ]},
    { name: "京都府", cities: [
      { name: "京都市", schools: 2, slug: "/kyoto/kyoto-city" },
    ]},
    { name: "兵庫県", cities: [
      { name: "西宮市", schools: 1, slug: "/hyogo/nishinomiya" },
    ]},
    { name: "和歌山県", cities: [
      { name: "和歌山市", schools: 2, slug: "/wakayama/wakayama-city" },
    ]},
    { name: "滋賀県", cities: [
      { name: "大津市", schools: 2, slug: "/shiga/otsu" },
      { name: "草津市", schools: 3, slug: "/shiga/kusatsu" },
    ]},
  ]},
];

const totalSchools = REGIONS.flatMap(r => r.areas.flatMap(a => a.cities)).reduce((s, c) => s + c.schools, 0);
const totalAreas = REGIONS.flatMap(r => r.areas.flatMap(a => a.cities)).length;

const CATEGORIES = [
  { name: "ダンス",      icon: "💃", count: "2,800+", color: "#FF6B6B", desc: "リズム感・表現力・協調性",   slug: "dance" },
  { name: "サッカー",    icon: "⚽", count: "3,200+", color: "#4CAF50", desc: "体力・判断力・チームワーク", slug: "soccer" },
  { name: "英語・英会話",icon: "🌍", count: "4,500+", color: "#FF8A00", desc: "リスニング・発音・異文化理解",slug: "english" },
  { name: "ピアノ",      icon: "🎹", count: "3,800+", color: "#9C27B0", desc: "音感・集中力・表現力",       slug: "piano" },
  { name: "K-POP",      icon: "💜", count: "800+",   color: "#AB47BC", desc: "リズム感・表現力・自信",     slug: "kpop" },
  { name: "スイミング",  icon: "🏊", count: "2,500+", color: "#0288D1", desc: "体力・心肺機能・水難防止",   slug: "swimming" },
  { name: "バレエ",      icon: "🩰", count: "1,600+", color: "#E91E63", desc: "柔軟性・姿勢・美的感覚",     slug: "ballet" },
  { name: "空手",        icon: "🥋", count: "1,200+", color: "#795548", desc: "礼儀・忍耐力・精神力",       slug: "karate" },
  { name: "リトミック",  icon: "🎵", count: "900+",   color: "#FF7043", desc: "リズム感・感性・社会性",     slug: "rhythmics" },
  { name: "幼児教室",    icon: "🧒", count: "1,100+", color: "#FF8A65", desc: "記憶力・思考力・言語力",     slug: "preschool" },
  { name: "学習塾",          icon: "📝", count: "5,200+", color: "#1B2A4A", desc: "基礎学力・思考力・受験",         slug: "juku" },
  { name: "プログラミング",  icon: "💻", count: "1,800+", color: "#00897B", desc: "論理的思考・創造力・問題解決力",  slug: "programming" },
];

const HERO_ACTIVITIES = [
  { name: "ダンス",    emoji: "💃", bg: "linear-gradient(160deg, #FF6B6B 0%, #FF8E53 100%)", slug: "dance" },
  { name: "サッカー",  emoji: "⚽", bg: "linear-gradient(160deg, #43A047 0%, #1B5E20 100%)", slug: "soccer" },
  { name: "英語",     emoji: "🌍", bg: "linear-gradient(160deg, #1B2A4A 0%, #2a4a8a 100%)", slug: "english" },
  { name: "ピアノ",   emoji: "🎹", bg: "linear-gradient(160deg, #7B1FA2 0%, #AB47BC 100%)", slug: "piano" },
  { name: "スイミング",emoji: "🏊", bg: "linear-gradient(160deg, #0288D1 0%, #00BCD4 100%)", slug: "swimming" },
];

function JapanMap({ onRegionClick, activeRegion }) {
  const regions = [
    { id: "hokkaido", name: "北海道", d: "M280,20 L320,15 L340,35 L330,60 L310,70 L285,55 L275,35Z", cx: 308, cy: 42 },
    { id: "tohoku",  name: "東北",   d: "M290,75 L310,72 L320,85 L315,115 L300,120 L285,110 L280,90Z", cx: 300, cy: 96 },
    { id: "kanto",   name: "関東",   d: "M285,122 L310,118 L320,130 L318,155 L300,160 L282,148 L278,132Z", cx: 300, cy: 138, hasData: true, region: "関東" },
    { id: "chubu",   name: "中部",   d: "M250,125 L280,120 L282,148 L278,170 L258,175 L240,165 L235,140Z", cx: 258, cy: 148, hasData: true, region: "中部" },
    { id: "kinki",   name: "関西",   d: "M225,155 L250,150 L258,175 L252,195 L235,200 L218,190 L215,168Z", cx: 236, cy: 175, hasData: true, region: "関西" },
    { id: "chugoku", name: "中国",   d: "M185,170 L218,165 L218,190 L210,205 L190,208 L175,195 L178,178Z", cx: 196, cy: 188 },
    { id: "shikoku", name: "四国",   d: "M200,208 L225,205 L230,220 L218,230 L200,228 L192,218Z", cx: 212, cy: 218 },
    { id: "kyushu",  name: "九州",   d: "M155,195 L178,190 L182,210 L178,235 L165,245 L150,235 L148,210Z", cx: 165, cy: 218 },
    { id: "okinawa", name: "沖縄",   d: "M140,275 L155,272 L158,285 L150,292 L138,288Z", cx: 148, cy: 282 },
  ];

  return (
    <svg viewBox="115 0 250 315" style={{ width: "100%", maxWidth: 400, height: "auto" }}>
      <defs>
        <filter id="shadow-land">
          <feDropShadow dx="0" dy="2" stdDeviation="3" floodColor="#1B2A4A" floodOpacity="0.12" />
        </filter>
        <filter id="glow-active">
          <feDropShadow dx="0" dy="0" stdDeviation="5" floodColor="#FF8A00" floodOpacity="0.55" />
        </filter>
        <linearGradient id="seaBg" x1="0" y1="0" x2="0.4" y2="1">
          <stop offset="0%" stopColor="#d6eef8" />
          <stop offset="100%" stopColor="#b6d9ee" />
        </linearGradient>
        <linearGradient id="landNormal" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#f8f9fb" />
          <stop offset="100%" stopColor="#eceef2" />
        </linearGradient>
        <linearGradient id="landActive" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#FFB347" />
          <stop offset="100%" stopColor="#FF8A00" />
        </linearGradient>
        <linearGradient id="landHasData" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="100%" stopColor="#f0f4f8" />
        </linearGradient>
      </defs>

      {/* Ocean */}
      <rect x="115" y="0" width="250" height="315" fill="url(#seaBg)" rx="22" />
      {/* Decorative ocean circles */}
      <circle cx="165" cy="260" r="55" fill="rgba(255,255,255,.12)" />
      <circle cx="330" cy="60"  r="38" fill="rgba(255,255,255,.10)" />
      <circle cx="200" cy="140" r="20" fill="rgba(255,255,255,.06)" />

      {regions.map(r => {
        const isActive = activeRegion === r.region;
        const has = r.hasData;
        return (
          <g key={r.id} onClick={() => has && onRegionClick(r.region)}
            style={{ cursor: has ? "pointer" : "default" }}>
            <path
              d={r.d}
              fill={isActive ? "url(#landActive)" : has ? "url(#landHasData)" : "url(#landNormal)"}
              stroke={isActive ? "#FF8A00" : has ? "#c8d4e0" : "#d8dde6"}
              strokeWidth={isActive ? 2 : 1}
              filter={isActive ? "url(#glow-active)" : has ? "url(#shadow-land)" : ""}
              style={{ transition: "all .3s ease" }}
            />
            <text x={r.cx} y={r.cy} textAnchor="middle" dominantBaseline="central"
              fontSize={isActive ? 9.5 : 8.5} fontWeight={isActive ? 900 : 600}
              fill={isActive ? "#fff" : has ? "#1B2A4A" : "#b0b8c4"}
              style={{ pointerEvents: "none", fontFamily: "'Noto Sans JP',sans-serif" }}>
              {r.name}
            </text>
            {/* Pulse indicator for clickable regions */}
            {has && !isActive && (
              <g>
                <circle cx={r.cx + 17} cy={r.cy - 7} r={4.5} fill="#FF8A00" />
                <circle cx={r.cx + 17} cy={r.cy - 7} r={7.5} fill="none" stroke="#FF8A00" strokeWidth="1.5" opacity="0.35" />
              </g>
            )}
            {isActive && (
              <g>
                <circle cx={r.cx + 17} cy={r.cy - 7} r={4} fill="#fff" />
                <circle cx={r.cx + 17} cy={r.cy - 7} r={7} fill="none" stroke="#fff" strokeWidth="1.5" opacity="0.6" />
              </g>
            )}
          </g>
        );
      })}

      {/* Legend */}
      <g transform="translate(122, 10)">
        <rect x="-3" y="-7" width="108" height="28" rx="9" fill="rgba(255,255,255,.88)" />
        <circle cx="6"  cy="5" r="4.5" fill="#FF8A00" />
        <circle cx="6"  cy="5" r="7.5" fill="none" stroke="#FF8A00" strokeWidth="1.2" opacity="0.35" />
        <text x="18" y="2"  fontSize="7.5" fontWeight="700" fill="#1B2A4A" dominantBaseline="central"
          style={{ fontFamily: "'Noto Sans JP',sans-serif" }}>教室対応エリア</text>
        <text x="18" y="13" fontSize="7"   fontWeight="500" fill="#888" dominantBaseline="central"
          style={{ fontFamily: "'Noto Sans JP',sans-serif" }}>関東・中部・関西 / {totalAreas}エリア</text>
      </g>
    </svg>
  );
}

export default function TopPage() {
  const [activeRegion, setActiveRegion] = useState(null);
  const [expandedRegion, setExpandedRegion] = useState(null);
  const [searchArea, setSearchArea] = useState("");
  const [searchGenre, setSearchGenre] = useState("");
  const [searchAge, setSearchAge] = useState("");
  const [searchArea2, setSearchArea2] = useState("");
  const [searchGenre2, setSearchGenre2] = useState("");
  const [searchAge2, setSearchAge2] = useState("");
  const areaRef = useRef(null);

  const handleRegionClick = (region) => {
    setActiveRegion(region);
    setExpandedRegion(region);
    setTimeout(() => areaRef.current?.scrollIntoView({ behavior: "smooth", block: "start" }), 100);
  };

  useEffect(() => {
    document.title = "コドモならいごと｜子供の習い事を口コミで検索・比較【全国対応】";
  }, []);

  return (
    <div style={{ fontFamily: "'Noto Sans JP','Hiragino Sans',sans-serif", background: "#f4f7fc", minHeight: "100vh" }}>
      {/* ===== HEADER ===== */}
      <header style={{ background: "#fff", borderBottom: "1px solid #e8edf4", position: "sticky", top: 0, zIndex: 100, boxShadow: "0 2px 8px rgba(0,0,0,.05)" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px", display: "flex", alignItems: "center", justifyContent: "space-between", height: 60 }}>
          {/* Logo */}
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <div style={{ width: 38, height: 38, borderRadius: 10, background: "linear-gradient(135deg, #FF8A00, #FFB347)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 18, boxShadow: "0 3px 10px rgba(255,138,0,.3)" }}>🧒</div>
            <div>
              <div style={{ fontSize: 17, fontWeight: 900, color: "#1B2A4A", letterSpacing: "-0.3px" }}>コドモならいごと</div>
              <div style={{ fontSize: 10, color: "#999" }}>子供の習い事を口コミで検索・比較</div>
            </div>
          </div>
          {/* Nav */}
          <nav className="nav-desktop" style={{ display: "flex", gap: 20, alignItems: "center" }}>
            {["エリアから探す", "ジャンルから探す", "口コミを見る"].map(item => (
              <span key={item} className="nav-link" style={{ fontSize: 13, fontWeight: 600, color: "#444", cursor: "pointer", transition: "color .2s" }}>{item}</span>
            ))}
            <Link href="/blog" style={{ fontSize: 13, fontWeight: 600, color: "#444", textDecoration: "none" }}>📝 コラム</Link>
            <button style={{ padding: "8px 18px", background: "linear-gradient(135deg, #FF8A00, #FFB347)", borderRadius: 20, border: "none", color: "#fff", fontWeight: 800, fontSize: 13, cursor: "pointer", boxShadow: "0 3px 10px rgba(255,138,0,.3)", whiteSpace: "nowrap" }}>
              無料体験を探す →
            </button>
          </nav>
        </div>
      </header>

      {/* ===== HERO ===== */}
      <section style={{ background: "#fff" }}>

        {/* Activity Collage Strip */}
        <div style={{ display: "flex", height: 180, overflow: "hidden" }}>
          {HERO_ACTIVITIES.map((act, i) => (
            <Link key={i} href={`/genre/${act.slug}`} className="activity-tile" style={{
              flex: 1,
              background: act.bg,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: 8,
              cursor: "pointer",
              transition: "transform .25s ease, box-shadow .25s ease",
              position: "relative",
              overflow: "hidden",
              textDecoration: "none",
            }}>
              <div className="activity-emoji" style={{ fontSize: 56, lineHeight: 1, filter: "drop-shadow(0 3px 8px rgba(0,0,0,.2))" }}>{act.emoji}</div>
              <div className="activity-name" style={{ fontSize: 13, fontWeight: 800, color: "#fff", letterSpacing: "1px", textShadow: "0 1px 6px rgba(0,0,0,.25)" }}>{act.name}</div>
              <div style={{ position: "absolute", top: -24, right: -24, width: 80, height: 80, borderRadius: "50%", background: "rgba(255,255,255,.08)" }} />
              <div style={{ position: "absolute", bottom: -28, left: -16, width: 90, height: 90, borderRadius: "50%", background: "rgba(0,0,0,.06)" }} />
            </Link>
          ))}
        </div>

        {/* Catchcopy + Search */}
        <div style={{ background: "linear-gradient(180deg, #fff 0%, #EAF6FF 100%)", padding: "40px 24px 52px" }}>
          <div style={{ maxWidth: 820, margin: "0 auto", textAlign: "center" }}>

            {/* Badge */}
            <div style={{ display: "inline-flex", alignItems: "center", gap: 6, background: "#fff", border: "1.5px solid #c8e6f8", borderRadius: 20, padding: "5px 14px", marginBottom: 18, fontSize: 12, color: "#1B2A4A", fontWeight: 700, boxShadow: "0 2px 8px rgba(27,42,74,.07)" }}>
              <span style={{ width: 7, height: 7, borderRadius: "50%", background: "#FF8A00", display: "inline-block" }} />
              全国の子どもの習い事を探せる比較・検索メディア
            </div>

            {/* Main Title */}
            <h1 className="hero-title" style={{ fontSize: 34, fontWeight: 900, color: "#1B2A4A", lineHeight: 1.4, marginBottom: 10, animation: "fi .5s ease" }}>
              全国の子どもの習い事を探そう
            </h1>
            <p className="hero-sub" style={{ fontSize: 17, fontWeight: 700, color: "#FF8A00", marginBottom: 12, animation: "fi .5s ease .1s both" }}>
              エリア・ジャンル・年齢から、お子さまに合った習い事が見つかる
            </p>
            <p style={{ fontSize: 13, color: "#666", lineHeight: 1.9, marginBottom: 32, animation: "fi .5s ease .15s both" }}>
              ダンス・サッカー・英語・ピアノ・スイミングなど、<br />
              お子さまに合った習い事教室を口コミ・料金・体験情報で比較できます。
            </p>

            {/* Search Box */}
            <div style={{ background: "#fff", borderRadius: 18, padding: "22px 24px", boxShadow: "0 8px 40px rgba(27,42,74,.11)", border: "1.5px solid #deeaf7", marginBottom: 16, animation: "fi .5s ease .2s both" }}>
              <div style={{ fontSize: 15, fontWeight: 800, color: "#1B2A4A", marginBottom: 14 }}>🔍 今すぐ子どもの習い事を検索！</div>
              <div className="search-row" style={{ display: "flex", gap: 10, alignItems: "flex-end", flexWrap: "wrap" }}>

                {/* Area */}
                <div style={{ flex: "2 1 160px", display: "flex", flexDirection: "column", gap: 5 }}>
                  <label style={{ fontSize: 11, fontWeight: 700, color: "#1B2A4A", textAlign: "left", letterSpacing: ".3px" }}>📍 エリアを入力</label>
                  <input
                    className="search-input"
                    type="text"
                    placeholder="例：大阪市、世田谷区、箕面市"
                    value={searchArea}
                    onChange={e => setSearchArea(e.target.value)}
                    style={{ padding: "12px 14px", border: "1.5px solid #e0eaf4", borderRadius: 10, fontSize: 14, color: "#333", background: "#f8fafd", transition: "all .2s", fontFamily: "inherit" }}
                  />
                </div>

                {/* Genre */}
                <div style={{ flex: "1 1 130px", display: "flex", flexDirection: "column", gap: 5 }}>
                  <label style={{ fontSize: 11, fontWeight: 700, color: "#1B2A4A", textAlign: "left", letterSpacing: ".3px" }}>🏷️ ジャンルを選択</label>
                  <select
                    className="search-select"
                    value={searchGenre}
                    onChange={e => setSearchGenre(e.target.value)}
                    style={{ padding: "12px 14px", border: "1.5px solid #e0eaf4", borderRadius: 10, fontSize: 14, color: searchGenre ? "#333" : "#999", background: "#f8fafd", cursor: "pointer", fontFamily: "inherit", transition: "all .2s" }}
                  >
                    <option value="">すべてのジャンル</option>
                    {CATEGORIES.map(c => <option key={c.name} value={c.name}>{c.icon} {c.name}</option>)}
                  </select>
                </div>

                {/* Age */}
                <div style={{ flex: "1 1 120px", display: "flex", flexDirection: "column", gap: 5 }}>
                  <label style={{ fontSize: 11, fontWeight: 700, color: "#1B2A4A", textAlign: "left", letterSpacing: ".3px" }}>👶 年齢を選択</label>
                  <select
                    className="search-select"
                    value={searchAge}
                    onChange={e => setSearchAge(e.target.value)}
                    style={{ padding: "12px 14px", border: "1.5px solid #e0eaf4", borderRadius: 10, fontSize: 14, color: searchAge ? "#333" : "#999", background: "#f8fafd", cursor: "pointer", fontFamily: "inherit", transition: "all .2s" }}
                  >
                    <option value="">すべての年齢</option>
                    {["0〜3歳（未就学）", "3〜5歳（幼稚園）", "小学生（6〜12歳）", "中学生（13〜15歳）"].map(a => (
                      <option key={a} value={a}>{a}</option>
                    ))}
                  </select>
                </div>

                {/* Button */}
                <div style={{ flex: "0 0 auto" }}>
                  <button className="search-btn" style={{ padding: "12px 28px", background: "linear-gradient(135deg, #FF8A00, #FFB347)", border: "none", borderRadius: 10, color: "#fff", fontWeight: 900, fontSize: 15, cursor: "pointer", whiteSpace: "nowrap", boxShadow: "0 4px 16px rgba(255,138,0,.35)", transition: "all .2s", fontFamily: "inherit" }}>
                    🔍 習い事を探す
                  </button>
                </div>
              </div>

            </div>

            {/* Ranking Search Box */}
            <div style={{ background: "linear-gradient(135deg, #FFF4E0 0%, #FFF0F5 100%)", borderRadius: 18, padding: "22px 24px", boxShadow: "0 8px 40px rgba(255,138,0,.12)", border: "1.5px solid #FFD9A0", marginBottom: 32, animation: "fi .5s ease .25s both" }}>
              <div style={{ fontSize: 15, fontWeight: 800, color: "#FF8A00", marginBottom: 14, letterSpacing: ".3px" }}>🏆 ランキングから習い事を検索！</div>
              <div className="search-row" style={{ display: "flex", gap: 10, alignItems: "flex-end", flexWrap: "wrap" }}>

                {/* Area 2 */}
                <div style={{ flex: "2 1 160px", display: "flex", flexDirection: "column", gap: 5 }}>
                  <label style={{ fontSize: 11, fontWeight: 700, color: "#1B2A4A", textAlign: "left", letterSpacing: ".3px" }}>📍 エリアを入力</label>
                  <input
                    className="search-input"
                    type="text"
                    placeholder="例：大阪市、世田谷区、箕面市"
                    value={searchArea2}
                    onChange={e => setSearchArea2(e.target.value)}
                    style={{ padding: "12px 14px", border: "1.5px solid #FFD9A0", borderRadius: 10, fontSize: 14, color: "#333", background: "#fff", transition: "all .2s", fontFamily: "inherit" }}
                  />
                </div>

                {/* Genre 2 */}
                <div style={{ flex: "1 1 130px", display: "flex", flexDirection: "column", gap: 5 }}>
                  <label style={{ fontSize: 11, fontWeight: 700, color: "#1B2A4A", textAlign: "left", letterSpacing: ".3px" }}>🏷️ ジャンルを選択</label>
                  <select
                    className="search-select"
                    value={searchGenre2}
                    onChange={e => setSearchGenre2(e.target.value)}
                    style={{ padding: "12px 14px", border: "1.5px solid #FFD9A0", borderRadius: 10, fontSize: 14, color: searchGenre2 ? "#333" : "#999", background: "#fff", cursor: "pointer", fontFamily: "inherit", transition: "all .2s" }}
                  >
                    <option value="">すべてのジャンル</option>
                    {CATEGORIES.map(c => <option key={c.name} value={c.name}>{c.icon} {c.name}</option>)}
                  </select>
                </div>

                {/* Age 2 */}
                <div style={{ flex: "1 1 120px", display: "flex", flexDirection: "column", gap: 5 }}>
                  <label style={{ fontSize: 11, fontWeight: 700, color: "#1B2A4A", textAlign: "left", letterSpacing: ".3px" }}>👶 年齢を選択</label>
                  <select
                    className="search-select"
                    value={searchAge2}
                    onChange={e => setSearchAge2(e.target.value)}
                    style={{ padding: "12px 14px", border: "1.5px solid #FFD9A0", borderRadius: 10, fontSize: 14, color: searchAge2 ? "#333" : "#999", background: "#fff", cursor: "pointer", fontFamily: "inherit", transition: "all .2s" }}
                  >
                    <option value="">すべての年齢</option>
                    {["0〜3歳（未就学）", "3〜5歳（幼稚園）", "小学生（6〜12歳）", "中学生（13〜15歳）"].map(a => (
                      <option key={a} value={a}>{a}</option>
                    ))}
                  </select>
                </div>

                {/* Button 2 */}
                <div style={{ flex: "0 0 auto" }}>
                  <button className="search-btn" style={{ padding: "12px 28px", background: "linear-gradient(135deg, #FF8A00, #FFB347)", border: "none", borderRadius: 10, color: "#fff", fontWeight: 900, fontSize: 15, cursor: "pointer", whiteSpace: "nowrap", boxShadow: "0 4px 16px rgba(255,138,0,.35)", transition: "all .2s", fontFamily: "inherit" }}>
                    🏆 ランキングを見る
                  </button>
                </div>
              </div>
            </div>

            {/* Stats */}
            <div className="stats-row" style={{ display: "flex", justifyContent: "center", gap: 12, flexWrap: "wrap", animation: "fi .5s ease .3s both" }}>
              {[
                { icon: "🏫", val: "5,000+", unit: "教室", label: "掲載教室数" },
                { icon: "🗾", val: "47", unit: "都道府県", label: "全国対応" },
                { icon: "📚", val: "11", unit: "カテゴリ", label: "人気ジャンル" },
                { icon: "💬", val: "10,000+", unit: "件", label: "口コミ・体験情報" },
              ].map((s, i) => (
                <div key={i} style={{ background: "#fff", borderRadius: 14, padding: "13px 18px", minWidth: 108, border: "1.5px solid #deeaf7", boxShadow: "0 2px 10px rgba(27,42,74,.06)", textAlign: "center" }}>
                  <div style={{ fontSize: 18, marginBottom: 2 }}>{s.icon}</div>
                  <div style={{ fontSize: 20, fontWeight: 900, color: "#1B2A4A", fontFamily: "'Poppins',sans-serif", lineHeight: 1.1 }}>
                    {s.val}<span style={{ fontSize: 10, fontWeight: 600, color: "#888", marginLeft: 1 }}>{s.unit}</span>
                  </div>
                  <div style={{ fontSize: 10, color: "#888", marginTop: 3 }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== AREA SEARCH ===== */}
      <section style={{ maxWidth: 1200, margin: "0 auto", padding: "52px 24px" }}>
        <div style={{ textAlign: "center", marginBottom: 32 }}>
          <div style={{ display: "inline-block", background: "#fff7ee", borderRadius: 6, padding: "3px 12px", fontSize: 11, fontWeight: 700, color: "#FF8A00", marginBottom: 8, letterSpacing: ".5px" }}>AREA</div>
          <h2 style={{ fontSize: 24, fontWeight: 900, color: "#1B2A4A" }}>エリアから教室を探す</h2>
          <p style={{ fontSize: 13, color: "#888", marginTop: 6 }}>地図をタップするか、下のエリア一覧から選択してください</p>
        </div>

        <div style={{ display: "flex", gap: 36, alignItems: "flex-start", flexWrap: "wrap", justifyContent: "center" }}>
          {/* Map */}
          <div style={{ flex: "0 0 auto" }}>
            <div style={{ background: "#fff", borderRadius: 20, padding: 20, boxShadow: "0 4px 20px rgba(0,0,0,.06)", border: "1.5px solid #e8edf4" }}>
              <JapanMap onRegionClick={handleRegionClick} activeRegion={activeRegion} />
            </div>
          </div>

          {/* Area List */}
          <div ref={areaRef} style={{ flex: 1, minWidth: 280, maxWidth: 520 }}>
            <h3 style={{ fontSize: 16, fontWeight: 800, color: "#1B2A4A", marginBottom: 14 }}>📍 全国 {totalAreas} エリア対応</h3>
            {REGIONS.map((region, ri) => {
              const isOpen = expandedRegion === region.name;
              const regionTotal = region.areas.flatMap(a => a.cities).reduce((s, c) => s + c.schools, 0);
              const regionAreaCount = region.areas.flatMap(a => a.cities).length;
              return (
                <div key={ri} style={{ marginBottom: 10 }}>
                  <button onClick={() => setExpandedRegion(isOpen ? null : region.name)}
                    style={{
                      width: "100%", padding: "12px 16px", borderRadius: 12,
                      border: `1.5px solid ${isOpen ? "#FF8A00" : "#e8edf4"}`,
                      background: isOpen ? "#fff7ee" : "#fff", cursor: "pointer",
                      display: "flex", alignItems: "center", justifyContent: "space-between",
                      fontSize: 14, fontWeight: 700, color: isOpen ? "#FF8A00" : "#1B2A4A",
                      transition: "all .2s", fontFamily: "inherit",
                      boxShadow: isOpen ? "0 2px 12px rgba(255,138,0,.1)" : "0 1px 4px rgba(0,0,0,.04)",
                    }}>
                    <span>{region.name}<span style={{ fontSize: 11, fontWeight: 500, color: "#888", marginLeft: 8 }}>{regionAreaCount}エリア</span></span>
                    <span style={{ transform: isOpen ? "rotate(180deg)" : "", transition: ".2s", fontSize: 12, color: "#aaa" }}>▼</span>
                  </button>
                  {isOpen && (
                    <div style={{ marginTop: 8, animation: "slideIn .25s ease" }}>
                      {region.areas.map((area, ai) => (
                        <div key={ai} style={{ marginBottom: 6 }}>
                          <div style={{ fontSize: 11, fontWeight: 700, color: "#999", padding: "4px 10px", textTransform: "uppercase", letterSpacing: ".5px" }}>{area.name}</div>
                          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 4 }}>
                            {area.cities.map((city, ci) => (
                              <Link key={ci} href={city.slug} className="area-btn"
                                style={{
                                  padding: "10px 12px", borderRadius: 10,
                                  border: "1.5px solid #e8edf4",
                                  background: "#fff", cursor: "pointer",
                                  display: "flex", alignItems: "center", justifyContent: "space-between",
                                  transition: "all .2s", boxShadow: "0 1px 4px rgba(0,0,0,.03)",
                                  textAlign: "left", fontFamily: "inherit",
                                  textDecoration: "none",
                                }}>
                                <div>
                                  <div style={{ fontSize: 13, fontWeight: 700, color: "#1B2A4A" }}>{city.name}</div>
                                  <div style={{ fontSize: 10, color: "#FF8A00", fontWeight: 600, marginTop: 1 }}>教室を見る</div>
                                </div>
                                <span style={{ fontSize: 14, color: "#FF8A00", fontWeight: 700 }}>›</span>
                              </Link>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===== CATEGORIES ===== */}
      <section style={{ background: "#fff", padding: "52px 24px", borderTop: "1px solid #e8edf4" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 32 }}>
            <div style={{ display: "inline-block", background: "#fff7ee", borderRadius: 6, padding: "3px 12px", fontSize: 11, fontWeight: 700, color: "#FF8A00", marginBottom: 8, letterSpacing: ".5px" }}>GENRE</div>
            <h2 style={{ fontSize: 24, fontWeight: 900, color: "#1B2A4A" }}>習い事のジャンルから探す</h2>
            <p style={{ fontSize: 13, color: "#888", marginTop: 6 }}>全11カテゴリに対応しています</p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))", gap: 12 }}>
            {CATEGORIES.map((c, i) => (
              <Link key={i} href={`/genre/${c.slug}`} className="hcard"
                style={{
                  background: "#fff", borderRadius: 14, padding: "16px 14px",
                  border: "1.5px solid #e8edf4", cursor: "pointer", textAlign: "left",
                  transition: "all .25s", boxShadow: "0 2px 8px rgba(0,0,0,.04)",
                  animation: `fi .4s ease ${i * .04}s both`,
                  display: "flex", alignItems: "center", gap: 12, fontFamily: "inherit",
                  textDecoration: "none",
                }}>
                <div style={{
                  width: 46, height: 46, borderRadius: 12,
                  background: `linear-gradient(135deg, ${c.color}18, ${c.color}2e)`,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: 22, flexShrink: 0, border: `1.5px solid ${c.color}22`,
                }}>{c.icon}</div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: 14, fontWeight: 800, color: "#1B2A4A" }}>{c.name}</div>
                  <div style={{ fontSize: 11, color: "#888", marginTop: 1 }}>{c.desc}</div>
                  <div style={{ fontSize: 11, fontWeight: 700, color: c.color, marginTop: 3 }}>全国 {c.count} 教室</div>
                </div>
                <span style={{ color: "#ccc", fontSize: 16 }}>›</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ===== PREFECTURE LINKS ===== */}
      <section style={{ padding: "40px 24px", background: "#f8fafd", borderTop: "1px solid #eef1f6" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 24 }}>
            <h2 style={{ fontSize: 20, fontWeight: 900, color: "#1B2A4A", marginBottom: 6 }}>🗾 都道府県から習い事を探す</h2>
            <p style={{ fontSize: 13, color: "#888" }}>お住まいの都道府県を選んで、地域の習い事情報を確認しよう</p>
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 10, justifyContent: "center" }}>
            {[
              { label: "大阪府", href: "/osaka", icon: "🏙️" },
              { label: "東京都", href: "/tokyo", icon: "🗼" },
              { label: "神奈川県", href: "/kanagawa", icon: "🌊" },
              { label: "愛知県", href: "/aichi", icon: "🏯" },
              { label: "兵庫県", href: "/hyogo", icon: "⚓" },
              { label: "京都府", href: "/kyoto", icon: "⛩️" },
              { label: "滋賀県", href: "/shiga", icon: "🏔️" },
              { label: "岐阜県", href: "/gifu", icon: "🌿" },
              { label: "千葉県", href: "/chiba", icon: "🌻" },
              { label: "埼玉県", href: "/saitama", icon: "🏘️" },
              { label: "茨城県", href: "/ibaraki", icon: "🌾" },
              { label: "石川県", href: "/ishikawa", icon: "🌺" },
              { label: "長野県", href: "/nagano", icon: "⛰️" },
              { label: "和歌山県", href: "/wakayama", icon: "🍊" },
            ].map((pref) => (
              <Link key={pref.href} href={pref.href} style={{
                display: "inline-flex", alignItems: "center", gap: 6,
                padding: "10px 18px", background: "#fff",
                border: "1.5px solid #e8edf4", borderRadius: 24,
                textDecoration: "none", color: "#1B2A4A",
                fontSize: 13, fontWeight: 700,
                boxShadow: "0 2px 6px rgba(0,0,0,.04)",
              }}>
                <span>{pref.icon}</span>{pref.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ===== 3 STEPS ===== */}
      <section style={{ padding: "52px 24px", background: "#EAF6FF" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 36 }}>
            <div style={{ display: "inline-block", background: "#fff", borderRadius: 6, padding: "3px 12px", fontSize: 11, fontWeight: 700, color: "#1B2A4A", marginBottom: 8, letterSpacing: ".5px" }}>HOW TO</div>
            <h2 style={{ fontSize: 24, fontWeight: 900, color: "#1B2A4A" }}>かんたん3ステップ</h2>
          </div>
          <div style={{ display: "flex", gap: 20, justifyContent: "center", flexWrap: "wrap" }}>
            {[
              { step: "1", icon: "🗺️", title: "エリアを選ぶ",   desc: "地図やエリア一覧からお住まいの地域を選択", color: "#FF8A00", href: "#area" },
              { step: "2", icon: "🔍", title: "スクールを比較", desc: "口コミ・料金・コース内容を見て比較検討",   color: "#1B2A4A", href: "/genre/dance" },
              { step: "3", icon: "📝", title: "体験に申し込む", desc: "気になるスクールの無料体験レッスンに参加", color: "#4CAF50", href: "/genre/dance" },
            ].map((s, i) => (
              <Link key={i} href={s.href} style={{ flex: "1 1 260px", maxWidth: 300, textAlign: "center", background: "#fff", borderRadius: 18, padding: "28px 20px", boxShadow: "0 4px 16px rgba(27,42,74,.07)", border: "1.5px solid #deeaf7", animation: `fi .5s ease ${i * .1}s both`, textDecoration: "none", display: "block" }}>
                <div style={{
                  width: 64, height: 64, borderRadius: "50%", margin: "0 auto 14px",
                  background: `linear-gradient(135deg, ${s.color}18, ${s.color}30)`,
                  display: "flex", alignItems: "center", justifyContent: "center", fontSize: 28,
                  border: `2px solid ${s.color}30`, position: "relative",
                }}>
                  {s.icon}
                  <div style={{ position: "absolute", top: -6, right: -6, width: 22, height: 22, borderRadius: "50%", background: s.color, color: "#fff", fontSize: 11, fontWeight: 900, display: "flex", alignItems: "center", justifyContent: "center" }}>{s.step}</div>
                </div>
                <div style={{ fontSize: 16, fontWeight: 800, color: "#1B2A4A", marginBottom: 8 }}>{s.title}</div>
                <div style={{ fontSize: 13, color: "#777", lineHeight: 1.7 }}>{s.desc}</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ===== FAQ ===== */}
      <section style={{ padding: "52px 24px", background: "#fff" }}>
        <div style={{ maxWidth: 800, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 36 }}>
            <div style={{ display: "inline-block", background: "#fff7ee", borderRadius: 6, padding: "3px 12px", fontSize: 11, fontWeight: 700, color: "#FF8A00", marginBottom: 8, letterSpacing: ".5px" }}>FAQ</div>
            <h2 style={{ fontSize: 24, fontWeight: 900, color: "#1B2A4A" }}>よくある質問</h2>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            {[
              { q: "コドモならいごととはどんなサービスですか？", a: "全国の子ども向け習い事教室を口コミ・料金・体験情報で検索・比較できる無料サービスです。ダンス・スイミング・英語・ピアノ・プログラミングなど11カテゴリ、5,000教室以上を掲載しています。" },
              { q: "子どもの習い事はいつから始めるのがいいですか？", a: "習い事の種類によりますが、3〜5歳頃から始める方が多いです。本人が興味を持ったタイミングが最適です。まずは無料体験で雰囲気を確認しましょう。" },
              { q: "習い事の月謝の相場はいくらですか？", a: "習い事の種類によって異なりますが、月5,000〜15,000円程度が一般的です。入会金や教材費が別途かかる場合もあります。複数教室を比較してお子さまに合った教室を見つけましょう。" },
              { q: "無料体験はできますか？", a: "掲載している多くの教室では無料体験レッスンを実施しています。入会前に雰囲気・指導スタイルを確認できるので、ぜひ活用してください。" },
              { q: "習い事は何個まで掛け持ちできますか？", a: "お子さまの体力・集中力に合わせて週2〜3個程度が一般的です。本人の意欲を大切にしながら無理のないペースで進めましょう。" },
              { q: "掲載情報はどのくらいの頻度で更新されますか？", a: "教室情報は随時更新しています。最新の料金・コース情報は各教室へ直接お問い合わせいただくことをおすすめします。" },
              { q: "子どもの習い事で一番人気は？", a: "ダンスです。近年K-POPブームも影響し、特に女の子に人気が急上昇しています。" },
              { q: "口コミ評価が高いダンス教室は？", a: "当サイトの口コミ件数・評価ともにNo.1はリディアダンスアカデミー（評価4.8 / 312件）です。全国46校展開で無料体験も受付中です。" },
            ].map((faq, i) => (
              <div key={i} style={{ background: "#f8fafd", borderRadius: 14, padding: "18px 20px", border: "1.5px solid #e8edf4" }}>
                <div style={{ fontSize: 14, fontWeight: 800, color: "#1B2A4A", marginBottom: 8, display: "flex", gap: 8 }}>
                  <span style={{ color: "#FF8A00", flexShrink: 0 }}>Q.</span>{faq.q}
                </div>
                <div style={{ fontSize: 13, color: "#555", lineHeight: 1.8, display: "flex", gap: 8 }}>
                  <span style={{ color: "#4CAF50", fontWeight: 800, flexShrink: 0 }}>A.</span>{faq.a}
                </div>
              </div>
            ))}
          </div>
        </div>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ItemList",
          "name": "子供の習い事ジャンル一覧",
          "description": "コドモならいごとが掲載する子ども向け習い事の全ジャンル",
          "url": "https://kodomo-manabi-navi.vercel.app",
          "itemListElement": CATEGORIES.map((c, i) => ({
            "@type": "ListItem",
            "position": i + 1,
            "name": c.name,
            "url": `https://kodomo-manabi-navi.vercel.app/genre/${c.slug}`,
            "description": c.desc,
          })),
        }) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            { "@type": "Question", "name": "コドモならいごととはどんなサービスですか？", "acceptedAnswer": { "@type": "Answer", "text": "全国の子ども向け習い事教室を口コミ・料金・体験情報で検索・比較できる無料サービスです。ダンス・スイミング・英語・ピアノ・プログラミングなど11カテゴリ、5,000教室以上を掲載しています。" } },
            { "@type": "Question", "name": "子どもの習い事はいつから始めるのがいいですか？", "acceptedAnswer": { "@type": "Answer", "text": "習い事の種類によりますが、3〜5歳頃から始める方が多いです。本人が興味を持ったタイミングが最適です。" } },
            { "@type": "Question", "name": "習い事の月謝の相場はいくらですか？", "acceptedAnswer": { "@type": "Answer", "text": "習い事の種類によって異なりますが、月5,000〜15,000円程度が一般的です。" } },
            { "@type": "Question", "name": "無料体験はできますか？", "acceptedAnswer": { "@type": "Answer", "text": "掲載している多くの教室では無料体験レッスンを実施しています。" } },
            { "@type": "Question", "name": "子どもの習い事で一番人気は？", "acceptedAnswer": { "@type": "Answer", "text": "ダンスです。近年K-POPブームも影響し、特に女の子に人気が急上昇しています。" } },
            { "@type": "Question", "name": "口コミ評価が高いダンス教室は？", "acceptedAnswer": { "@type": "Answer", "text": "当サイトの口コミ件数・評価ともにNo.1はリディアダンスアカデミー（評価4.8 / 312件）です。全国46校展開で無料体験も受付中です。" } },
          ],
        }) }} />
      </section>

      {/* ===== FOOTER ===== */}
      <footer style={{ background: "linear-gradient(135deg, #1B2A4A, #243a60)", color: "#8a9ab8", padding: "44px 24px 28px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 36, justifyContent: "space-between", marginBottom: 28 }}>
            <div style={{ minWidth: 200 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 14 }}>
                <div style={{ width: 34, height: 34, borderRadius: 9, background: "linear-gradient(135deg, #FF8A00, #FFB347)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 16 }}>🧒</div>
                <span style={{ fontSize: 16, fontWeight: 800, color: "#fff" }}>コドモならいごと</span>
              </div>
              <p style={{ fontSize: 12, lineHeight: 1.9, maxWidth: 300, color: "#7a8ba8" }}>
                子供の習い事をエリアや種類で検索・比較できる情報サイトです。全国の教室情報・口コミ・体験情報を掲載しています。
              </p>
            </div>
            <div style={{ minWidth: 130 }}>
              <div style={{ fontSize: 12, fontWeight: 700, color: "#fff", marginBottom: 12 }}>🗾 都道府県</div>
              {[
                { label: "大阪府", href: "/osaka" },
                { label: "東京都", href: "/tokyo" },
                { label: "神奈川県", href: "/kanagawa" },
                { label: "愛知県", href: "/aichi" },
                { label: "兵庫県", href: "/hyogo" },
                { label: "京都府", href: "/kyoto" },
              ].map(item => (
                <Link key={item.label} href={item.href} style={{ display: "block", fontSize: 12, color: "#6a7d9a", marginBottom: 7, textDecoration: "none" }}>{item.label}</Link>
              ))}
            </div>
            <div style={{ minWidth: 130 }}>
              <div style={{ fontSize: 12, fontWeight: 700, color: "#fff", marginBottom: 12 }}>📍 主要エリア</div>
              {[
                { label: "大阪市", href: "/osaka/osaka-city" },
                { label: "箕面市", href: "/osaka/minoh" },
                { label: "世田谷区", href: "/tokyo/setagaya" },
                { label: "柏市", href: "/chiba/kashiwa" },
                { label: "金沢市", href: "/ishikawa/kanazawa" },
                { label: "つくば市", href: "/ibaraki/tsukuba" },
              ].map(item => (
                <Link key={item.label} href={item.href} style={{ display: "block", fontSize: 12, color: "#6a7d9a", marginBottom: 7, textDecoration: "none" }}>{item.label}</Link>
              ))}
            </div>
            <div style={{ minWidth: 130 }}>
              <div style={{ fontSize: 12, fontWeight: 700, color: "#fff", marginBottom: 12 }}>🏷️ 習い事ジャンル</div>
              {CATEGORIES.slice(0, 6).map(c => (
                <Link key={c.name} href={`/genre/${c.slug || c.name}`} style={{ display: "block", fontSize: 12, color: "#6a7d9a", marginBottom: 7, textDecoration: "none" }}>{c.icon} {c.name}</Link>
              ))}
            </div>
            <div style={{ minWidth: 130 }}>
              <div style={{ fontSize: 12, fontWeight: 700, color: "#fff", marginBottom: 12 }}>📝 コラム・ブログ</div>
              <Link href="/blog" style={{ display: "block", fontSize: 12, color: "#6a7d9a", marginBottom: 7, textDecoration: "none" }}>習い事コラム一覧</Link>
              <Link href="/blog/osaka-kids-dance-school-ranking" style={{ display: "block", fontSize: 12, color: "#6a7d9a", marginBottom: 7, textDecoration: "none" }}>大阪ダンス教室ランキング</Link>
              <Link href="/blog/kids-dance-age-guide" style={{ display: "block", fontSize: 12, color: "#6a7d9a", marginBottom: 7, textDecoration: "none" }}>何歳からダンスを習う？</Link>
              <Link href="/blog/lydia-dance-academy-review" style={{ display: "block", fontSize: 12, color: "#6a7d9a", marginBottom: 7, textDecoration: "none" }}>リディア口コミ・料金</Link>
            </div>
            <div style={{ minWidth: 130 }}>
              <div style={{ fontSize: 12, fontWeight: 700, color: "#fff", marginBottom: 12 }}>ℹ️ サイト情報</div>
              {[
                { label: "サービスについて", href: "/about" },
                { label: "利用規約", href: "/terms" },
                { label: "プライバシーポリシー", href: "/privacy" },
                { label: "お問い合わせ", href: "mailto:info@sl-i.co.jp" },
              ].map(item => (
                <Link key={item.label} href={item.href} style={{ display: "block", fontSize: 12, color: "#6a7d9a", marginBottom: 7, textDecoration: "none" }}>{item.label}</Link>
              ))}
            </div>
          </div>
          <div style={{ borderTop: "1px solid #2d3f62", paddingTop: 18, fontSize: 11, color: "#4a5e7a", textAlign: "center" }}>
            © 2026 コドモならいごと — 子供の習い事検索サイト
          </div>
        </div>
      </footer>
    </div>
  );
}
