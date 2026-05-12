"use client";
import { useState, useEffect, useRef } from "react";

const REGIONS = [
  { name: "関東", color: "#2196F3", areas: [
    { name: "東京都", cities: [
      { name: "世田谷区", schools: 7, active: true },
      { name: "北区", schools: 5, active: true },
      { name: "目黒区", schools: 4, active: true },
      { name: "江戸川区", schools: 2, active: true },
      { name: "調布市", schools: 2, active: true },
      { name: "港区", schools: 1, active: true },
      { name: "品川区", schools: 1, active: true },
      { name: "町田市", schools: 1, active: true },
    ]},
    { name: "神奈川県", cities: [
      { name: "川崎市中原区", schools: 6, active: true },
      { name: "川崎市高津区", schools: 2, active: true },
      { name: "横浜市都筑区", schools: 2, active: true },
      { name: "横浜市青葉区", schools: 1, active: true },
      { name: "横浜市港北区", schools: 1, active: true },
      { name: "横浜市緑区", schools: 1, active: true },
      { name: "海老名市", schools: 1, active: true },
      { name: "大和市", schools: 1, active: true },
      { name: "厚木市", schools: 1, active: true },
      { name: "逗子市", schools: 1, active: true },
      { name: "相模原市南区", schools: 1, active: true },
    ]},
    { name: "埼玉県", cities: [
      { name: "さいたま市南区", schools: 1, active: true },
    ]},
    { name: "千葉県", cities: [
      { name: "柏市", schools: 5, active: true },
    ]},
    { name: "茨城県", cities: [
      { name: "つくば市", schools: 2, active: true },
      { name: "水戸市", schools: 1, active: true },
      { name: "ひたちなか市", schools: 1, active: true },
      { name: "土浦市", schools: 1, active: true },
      { name: "日立市", schools: 1, active: true },
    ]},
  ]},
  { name: "中部", color: "#FF9800", areas: [
    { name: "愛知県", cities: [
      { name: "名古屋市天白区", schools: 1, active: true },
      { name: "名古屋市守山区", schools: 1, active: true },
      { name: "日進市", schools: 1, active: true },
      { name: "安城市", schools: 1, active: true },
      { name: "豊田市", schools: 1, active: true },
      { name: "尾張旭市", schools: 1, active: true },
    ]},
    { name: "岐阜県", cities: [
      { name: "岐阜市", schools: 1, active: true },
      { name: "可児市", schools: 1, active: true },
      { name: "多治見市", schools: 1, active: true },
      { name: "美濃加茂市", schools: 1, active: true },
    ]},
    { name: "石川県", cities: [
      { name: "金沢市", schools: 2, active: true },
      { name: "野々市市", schools: 1, active: true },
      { name: "内灘町", schools: 1, active: true },
    ]},
    { name: "長野県", cities: [
      { name: "長野市", schools: 1, active: true },
    ]},
  ]},
  { name: "関西", color: "#E53935", areas: [
    { name: "大阪府", cities: [
      { name: "大阪市", schools: 6, active: true },
      { name: "箕面市", schools: 5, active: true },
      { name: "吹田市", schools: 3, active: true },
      { name: "豊中市", schools: 2, active: true },
      { name: "高槻市", schools: 2, active: true },
      { name: "堺市", schools: 2, active: true },
      { name: "守口市", schools: 1, active: true },
      { name: "茨木市", schools: 1, active: true },
    ]},
    { name: "京都府", cities: [
      { name: "京都市", schools: 2, active: true },
    ]},
    { name: "兵庫県", cities: [
      { name: "西宮市", schools: 1, active: true },
    ]},
    { name: "和歌山県", cities: [
      { name: "和歌山市", schools: 2, active: true },
    ]},
    { name: "滋賀県", cities: [
      { name: "大津市", schools: 2, active: true },
      { name: "草津市", schools: 3, active: true },
    ]},
  ]},
];

const totalSchools = REGIONS.flatMap(r => r.areas.flatMap(a => a.cities)).reduce((s, c) => s + c.schools, 0);
const totalAreas = REGIONS.flatMap(r => r.areas.flatMap(a => a.cities)).length;

const CATEGORIES = [
  { name: "ダンス", icon: "💃", count: "2,800+", color: "#E53935", desc: "リズム感・表現力・協調性" },
  { name: "サッカー", icon: "⚽", count: "3,200+", color: "#4CAF50", desc: "体力・判断力・チームワーク" },
  { name: "英語・英会話", icon: "🌍", count: "4,500+", color: "#FF6F00", desc: "リスニング・発音・異文化理解" },
  { name: "ピアノ", icon: "🎹", count: "3,800+", color: "#9C27B0", desc: "音感・集中力・表現力" },
  { name: "K-POP", icon: "💜", count: "800+", color: "#AB47BC", desc: "リズム感・表現力・自信" },
  { name: "スイミング", icon: "🏊", count: "2,500+", color: "#03A9F4", desc: "体力・心肺機能・水難防止" },
  { name: "バレエ", icon: "🩰", count: "1,600+", color: "#E91E63", desc: "柔軟性・姿勢・美的感覚" },
  { name: "空手", icon: "🥋", count: "1,200+", color: "#795548", desc: "礼儀・忍耐力・精神力" },
  { name: "リトミック", icon: "🎵", count: "900+", color: "#FF7043", desc: "リズム感・感性・社会性" },
  { name: "幼児教室", icon: "🧒", count: "1,100+", color: "#FF8A65", desc: "記憶力・思考力・言語力" },
  { name: "学習塾", icon: "📝", count: "5,200+", color: "#1E88E5", desc: "基礎学力・思考力・受験" },
];

function JapanMap({ onRegionClick, activeRegion }) {
  const regions = [
    { id: "hokkaido", name: "北海道", d: "M280,20 L320,15 L340,35 L330,60 L310,70 L285,55 L275,35Z", cx: 308, cy: 42 },
    { id: "tohoku", name: "東北", d: "M290,75 L310,72 L320,85 L315,115 L300,120 L285,110 L280,90Z", cx: 300, cy: 96 },
    { id: "kanto", name: "関東", d: "M285,122 L310,118 L320,130 L318,155 L300,160 L282,148 L278,132Z", cx: 300, cy: 138, hasData: true, region: "関東" },
    { id: "chubu", name: "中部", d: "M250,125 L280,120 L282,148 L278,170 L258,175 L240,165 L235,140Z", cx: 258, cy: 148, hasData: true, region: "中部" },
    { id: "kinki", name: "関西", d: "M225,155 L250,150 L258,175 L252,195 L235,200 L218,190 L215,168Z", cx: 236, cy: 175, hasData: true, region: "関西" },
    { id: "chugoku", name: "中国", d: "M185,170 L218,165 L218,190 L210,205 L190,208 L175,195 L178,178Z", cx: 196, cy: 188 },
    { id: "shikoku", name: "四国", d: "M200,208 L225,205 L230,220 L218,230 L200,228 L192,218Z", cx: 212, cy: 218 },
    { id: "kyushu", name: "九州", d: "M155,195 L178,190 L182,210 L178,235 L165,245 L150,235 L148,210Z", cx: 165, cy: 218 },
    { id: "okinawa", name: "沖縄", d: "M140,275 L155,272 L158,285 L150,292 L138,288Z", cx: 148, cy: 282 },
  ];
  const colorMap = { "関東": "#2196F3", "中部": "#FF9800", "関西": "#E53935" };

  return (
    <svg viewBox="120 0 240 310" style={{ width: "100%", maxWidth: 400, height: "auto" }}>
      <defs>
        <filter id="shadow"><feDropShadow dx="0" dy="2" stdDeviation="3" floodOpacity="0.15" /></filter>
        <linearGradient id="seaGrad" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#E3F2FD" /><stop offset="100%" stopColor="#BBDEFB" /></linearGradient>
      </defs>
      <rect x="120" y="0" width="240" height="310" fill="url(#seaGrad)" rx="20" />
      {regions.map(r => {
        const isActive = activeRegion === r.region;
        const has = r.hasData;
        const fill = isActive ? (colorMap[r.region] || "#999") : has ? "#fff" : "#E8E8E8";
        return (
          <g key={r.id} onClick={() => has && onRegionClick(r.region)} style={{ cursor: has ? "pointer" : "default" }}>
            <path d={r.d} fill={fill} stroke={has ? (isActive ? "#fff" : "#aaa") : "#ddd"} strokeWidth={isActive ? 2.5 : 1.2}
              filter={isActive ? "url(#shadow)" : ""} style={{ transition: "all .3s" }} />
            <text x={r.cx} y={r.cy} textAnchor="middle" dominantBaseline="central"
              fontSize={isActive ? 9.5 : 8.5} fontWeight={isActive ? 800 : 600}
              fill={isActive ? "#fff" : has ? "#333" : "#bbb"}
              style={{ pointerEvents: "none", fontFamily: "'Noto Sans JP', sans-serif" }}>
              {r.name}
            </text>
            {has && !isActive && <circle cx={r.cx + 18} cy={r.cy - 6} r={3.5} fill={colorMap[r.region] || "#E53935"} />}
          </g>
        );
      })}
      <g transform="translate(130, 12)">
        <circle cx="0" cy="0" r="3.5" fill="#E53935" />
        <text x="7" y="1" fontSize="7" fill="#888" dominantBaseline="central" style={{ fontFamily: "'Noto Sans JP', sans-serif" }}>対応エリア</text>
        <text x="7" y="12" fontSize="7" fill="#666" fontWeight="700" dominantBaseline="central" style={{ fontFamily: "'Noto Sans JP', sans-serif" }}>全国{totalSchools}校 / {totalAreas}エリア</text>
      </g>
    </svg>
  );
}

export default function TopPage() {
  const [activeRegion, setActiveRegion] = useState(null);
  const [expandedRegion, setExpandedRegion] = useState(null);
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
    <div style={{ fontFamily: "'Noto Sans JP','Hiragino Sans',sans-serif", background: "#f8f9fc", minHeight: "100vh" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;500;600;700;800;900&family=Poppins:wght@700;800;900&display=swap');
        *{box-sizing:border-box;margin:0;padding:0}
        @keyframes fi{from{opacity:0;transform:translateY(24px)}to{opacity:1;transform:translateY(0)}}
        @keyframes gradientMove{0%{background-position:0% 50%}50%{background-position:100% 50%}100%{background-position:0% 50%}}
        @keyframes slideIn{from{opacity:0;transform:translateX(-20px)}to{opacity:1;transform:translateX(0)}}
        @keyframes pulse{0%,100%{opacity:1}50%{opacity:.6}}
        .hcard:hover{transform:translateY(-4px);box-shadow:0 12px 32px rgba(0,0,0,.12)!important}
        ::-webkit-scrollbar{height:4px}::-webkit-scrollbar-thumb{background:#ccc;border-radius:4px}
      `}</style>

      {/* Header */}
      <header style={{ background: "#fff", borderBottom: "1px solid #eee", position: "sticky", top: 0, zIndex: 100 }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "14px 24px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <div style={{ width: 44, height: 44, borderRadius: 14, background: "linear-gradient(135deg, #2a7cc8, #1565C0)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 24, boxShadow: "0 4px 12px rgba(42,124,200,.3)" }}>🧒</div>
            <div>
              <div style={{ fontSize: 20, fontWeight: 900, color: "#1a1a2e" }}>コドモならいごと</div>
              <div style={{ fontSize: 10, color: "#888" }}>子供の習い事を口コミで検索・比較</div>
            </div>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section style={{
        background: "linear-gradient(135deg, #1565C0 0%, #2a7cc8 30%, #42A5F5 60%, #29B6F6 100%)",
        backgroundSize: "300% 300%", animation: "gradientMove 8s ease infinite",
        padding: "56px 24px 48px", position: "relative", overflow: "hidden",
      }}>
        <div style={{ position: "absolute", top: -40, right: -40, fontSize: 200, opacity: .06, transform: "rotate(-15deg)" }}>🎓</div>
        <div style={{ maxWidth: 1200, margin: "0 auto", textAlign: "center", position: "relative", zIndex: 1 }}>
          <div style={{ animation: "fi .6s ease" }}>
            <h1 style={{ fontSize: 32, fontWeight: 900, color: "#fff", lineHeight: 1.4, textShadow: "0 2px 20px rgba(0,0,0,.15)" }}>
              お子様にぴったりの<br /><span style={{ fontFamily: "'Poppins', sans-serif", fontSize: 36 }}>習い事</span>が見つかる
            </h1>
            <p style={{ fontSize: 15, color: "rgba(255,255,255,.9)", marginTop: 12 }}>
              全国 <b style={{ fontSize: 22, fontFamily: "'Poppins'" }}>{totalAreas}</b> エリア・リディアダンスアカデミー <b style={{ fontSize: 22, fontFamily: "'Poppins'" }}>{totalSchools}</b> 校対応
            </p>
          </div>
          <div style={{ display: "flex", justifyContent: "center", gap: 16, marginTop: 24, flexWrap: "wrap", animation: "fi .6s ease .2s both" }}>
            {[
              { label: "対応エリア", val: String(totalAreas), unit: "エリア", icon: "📍" },
              { label: "リディア校舎", val: String(totalSchools), unit: "校", icon: "🏫" },
              { label: "カテゴリ", val: "11", unit: "種類", icon: "📚" },
            ].map((s, i) => (
              <div key={i} style={{ background: "rgba(255,255,255,.18)", backdropFilter: "blur(10px)", borderRadius: 16, padding: "12px 20px", minWidth: 110, border: "1px solid rgba(255,255,255,.25)" }}>
                <div style={{ fontSize: 18 }}>{s.icon}</div>
                <div style={{ fontSize: 22, fontWeight: 900, color: "#fff", fontFamily: "'Poppins'" }}>{s.val}<span style={{ fontSize: 11, fontWeight: 500 }}>{s.unit}</span></div>
                <div style={{ fontSize: 10, color: "rgba(255,255,255,.8)" }}>{s.label}</div>
              </div>
            ))}
          </div>
          <div style={{ maxWidth: 540, margin: "28px auto 0", animation: "fi .6s ease .3s both" }}>
            <div style={{ display: "flex", background: "#fff", borderRadius: 16, overflow: "hidden", boxShadow: "0 8px 32px rgba(0,0,0,.15)" }}>
              <input type="text" placeholder="エリア・スクール名で検索..." style={{ flex: 1, padding: "15px 20px", border: "none", fontSize: 14, outline: "none", color: "#333" }} />
              <button style={{ padding: "0 24px", background: "linear-gradient(135deg, #FF6F00, #FF8F00)", border: "none", color: "#fff", fontWeight: 800, fontSize: 14, cursor: "pointer" }}>🔍 検索</button>
            </div>
          </div>
        </div>
      </section>

      {/* Map + Area List */}
      <section style={{ maxWidth: 1200, margin: "0 auto", padding: "48px 24px" }}>
        <div style={{ textAlign: "center", marginBottom: 28 }}>
          <h2 style={{ fontSize: 24, fontWeight: 900, color: "#1a1a2e" }}>🗾 エリアから教室を探す</h2>
          <p style={{ fontSize: 13, color: "#888", marginTop: 6 }}>地図をタップするか、下のエリア一覧から選択してください</p>
        </div>

        <div style={{ display: "flex", gap: 36, alignItems: "flex-start", flexWrap: "wrap", justifyContent: "center" }}>
          <div style={{ flex: "0 0 auto", animation: "fi .5s ease .1s both" }}>
            <div style={{ background: "#fff", borderRadius: 24, padding: 20, boxShadow: "0 4px 24px rgba(0,0,0,.06)", border: "1px solid #eee" }}>
              <JapanMap onRegionClick={handleRegionClick} activeRegion={activeRegion} />
            </div>
          </div>

          <div ref={areaRef} style={{ flex: 1, minWidth: 280, maxWidth: 520, animation: "fi .5s ease .2s both" }}>
            <h3 style={{ fontSize: 17, fontWeight: 800, color: "#1a1a2e", marginBottom: 14 }}>📍 全{totalAreas}エリア対応</h3>
            {REGIONS.map((region, ri) => {
              const isOpen = expandedRegion === region.name;
              const regionTotal = region.areas.flatMap(a => a.cities).reduce((s, c) => s + c.schools, 0);
              const regionAreaCount = region.areas.flatMap(a => a.cities).length;
              return (
                <div key={ri} style={{ marginBottom: 10 }}>
                  <button onClick={() => setExpandedRegion(isOpen ? null : region.name)}
                    style={{
                      width: "100%", padding: "13px 16px", borderRadius: 14,
                      border: `2px solid ${isOpen ? region.color : "#e8e8e8"}`,
                      background: isOpen ? `${region.color}08` : "#fff", cursor: "pointer",
                      display: "flex", alignItems: "center", justifyContent: "space-between",
                      fontSize: 15, fontWeight: 700, color: isOpen ? region.color : "#333", transition: "all .2s",
                    }}>
                    <span>{region.name}<span style={{ fontSize: 12, fontWeight: 500, color: "#888", marginLeft: 8 }}>{regionAreaCount}エリア・{regionTotal}校</span></span>
                    <span style={{ transform: isOpen ? "rotate(180deg)" : "", transition: ".2s", fontSize: 13 }}>▼</span>
                  </button>
                  {isOpen && (
                    <div style={{ marginTop: 8, animation: "slideIn .3s ease" }}>
                      {region.areas.map((area, ai) => (
                        <div key={ai} style={{ marginBottom: 6 }}>
                          <div style={{ fontSize: 12, fontWeight: 700, color: "#888", padding: "5px 10px" }}>{area.name}</div>
                          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 4 }}>
                            {area.cities.map((city, ci) => (
                              <button key={ci} className="hcard"
                                style={{
                                  padding: "10px 12px", borderRadius: 10,
                                  border: `1px solid ${region.color}33`,
                                  background: "#fff", cursor: "pointer",
                                  display: "flex", alignItems: "center", justifyContent: "space-between",
                                  transition: "all .2s", boxShadow: "0 1px 6px rgba(0,0,0,.03)",
                                  textAlign: "left",
                                }}>
                                <div>
                                  <div style={{ fontSize: 13, fontWeight: 700, color: "#333" }}>{city.name}</div>
                                  <div style={{ fontSize: 10, color: region.color, fontWeight: 600, marginTop: 2 }}>リディア{city.schools}校</div>
                                </div>
                                <span style={{ fontSize: 13, color: region.color, fontWeight: 800 }}>→</span>
                              </button>
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

      {/* Categories */}
      <section style={{ background: "#fff", padding: "48px 24px", borderTop: "1px solid #eee" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 28 }}>
            <h2 style={{ fontSize: 24, fontWeight: 900, color: "#1a1a2e" }}>🏷️ 習い事のジャンルから探す</h2>
            <p style={{ fontSize: 13, color: "#888", marginTop: 6 }}>全11カテゴリに対応しています</p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))", gap: 12 }}>
            {CATEGORIES.map((c, i) => (
              <button key={i} className="hcard"
                style={{
                  background: "#fff", borderRadius: 16, padding: "18px 16px", border: "1px solid #f0f0f0",
                  cursor: "pointer", textAlign: "left", transition: "all .3s",
                  boxShadow: "0 2px 10px rgba(0,0,0,.03)", animation: `fi .4s ease ${i * .04}s both`,
                  display: "flex", alignItems: "center", gap: 14,
                }}>
                <div style={{
                  width: 48, height: 48, borderRadius: 14,
                  background: `linear-gradient(135deg, ${c.color}18, ${c.color}30)`,
                  display: "flex", alignItems: "center", justifyContent: "center", fontSize: 24, flexShrink: 0,
                  border: `2px solid ${c.color}22`,
                }}>{c.icon}</div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: 15, fontWeight: 800, color: "#1a1a2e" }}>{c.name}</div>
                  <div style={{ fontSize: 11, color: "#888", marginTop: 1 }}>{c.desc}</div>
                  <div style={{ fontSize: 11, fontWeight: 700, color: c.color, marginTop: 3 }}>全国 {c.count} 教室</div>
                </div>
                <span style={{ color: "#ccc", fontSize: 16 }}>›</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* 3 Steps */}
      <section style={{ padding: "48px 24px", background: "linear-gradient(135deg, #f8f9fc, #EDE7F6)" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 32 }}>
            <h2 style={{ fontSize: 24, fontWeight: 900, color: "#1a1a2e" }}>✨ かんたん3ステップ</h2>
          </div>
          <div style={{ display: "flex", gap: 20, justifyContent: "center", flexWrap: "wrap" }}>
            {[
              { step: "1", icon: "🗺️", title: "エリアを選ぶ", desc: "地図やエリア一覧からお住まいの地域を選択", color: "#2196F3" },
              { step: "2", icon: "🔍", title: "スクールを比較", desc: "口コミ・料金・コース内容を見て比較検討", color: "#FF6F00" },
              { step: "3", icon: "📝", title: "体験に申し込む", desc: "気になるスクールの無料体験レッスンに参加", color: "#4CAF50" },
            ].map((s, i) => (
              <div key={i} style={{ flex: "1 1 260px", maxWidth: 320, textAlign: "center", animation: `fi .5s ease ${i * .1}s both` }}>
                <div style={{
                  width: 72, height: 72, borderRadius: "50%", margin: "0 auto 14px",
                  background: `linear-gradient(135deg, ${s.color}18, ${s.color}30)`,
                  display: "flex", alignItems: "center", justifyContent: "center", fontSize: 32,
                  border: `3px solid ${s.color}22`, position: "relative",
                }}>
                  {s.icon}
                  <div style={{ position: "absolute", top: -4, right: -4, width: 24, height: 24, borderRadius: "50%", background: s.color, color: "#fff", fontSize: 12, fontWeight: 900, display: "flex", alignItems: "center", justifyContent: "center" }}>{s.step}</div>
                </div>
                <div style={{ fontSize: 17, fontWeight: 800, color: "#1a1a2e", marginBottom: 6 }}>{s.title}</div>
                <div style={{ fontSize: 13, color: "#888", lineHeight: 1.6 }}>{s.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ background: "linear-gradient(135deg, #1a1a2e, #16213e)", color: "#aab", padding: "40px 24px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 36, justifyContent: "space-between" }}>
            <div style={{ minWidth: 200 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 14 }}>
                <span style={{ fontSize: 22 }}>🧒</span>
                <span style={{ fontSize: 17, fontWeight: 800, color: "#fff" }}>コドモならいごと</span>
              </div>
              <p style={{ fontSize: 12, lineHeight: 1.8, maxWidth: 300 }}>
                子供の習い事をエリアや種類で検索・比較できる情報サイトです。リディアダンスアカデミー全{totalSchools}校を含む全国の教室を掲載。
              </p>
            </div>
            <div style={{ minWidth: 130 }}>
              <div style={{ fontSize: 12, fontWeight: 700, color: "#fff", marginBottom: 10 }}>📍 主要エリア</div>
              {["大阪市","箕面市","世田谷区","柏市","金沢市","つくば市"].map(c => (
                <div key={c} style={{ fontSize: 11, color: "#889", marginBottom: 5, cursor: "pointer" }}>{c}</div>
              ))}
            </div>
            <div style={{ minWidth: 130 }}>
              <div style={{ fontSize: 12, fontWeight: 700, color: "#fff", marginBottom: 10 }}>🏷️ カテゴリ</div>
              {CATEGORIES.slice(0, 6).map(c => (
                <div key={c.name} style={{ fontSize: 11, color: "#889", marginBottom: 5, cursor: "pointer" }}>{c.icon} {c.name}</div>
              ))}
            </div>
          </div>
          <div style={{ borderTop: "1px solid #333", marginTop: 24, paddingTop: 14, fontSize: 11, color: "#556", textAlign: "center" }}>
            © 2026 コドモならいごと — 子供の習い事検索サイト
          </div>
        </div>
      </footer>
    </div>
  );
}
