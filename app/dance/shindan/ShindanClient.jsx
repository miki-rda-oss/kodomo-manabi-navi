"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { DANCE_PREFS } from "../danceData";

const LINE_URL = "https://lin.ee/v9q2QAX";
const KN_SHINDAN = "https://162.43.31.198.nip.io/kn/api/shindan";

const AGES = ["3〜5歳（未就学）", "小学1〜3年生", "小学4〜6年生", "中学生"];
const GENDERS = ["男の子", "女の子", "どちらでも"];

const SEIKAKU = [
  { key: "active", label: "活発・元気いっぱい", emoji: "⚡" },
  { key: "shy", label: "内気・人見知り", emoji: "🌱" },
  { key: "mypace", label: "マイペース", emoji: "🐢" },
  { key: "focus", label: "集中力がある", emoji: "🎯" },
];

const MITSUKETAI = [
  { key: "jishin", label: "自信・度胸", emoji: "💪" },
  { key: "rhythm", label: "リズム感・運動神経", emoji: "🤸" },
  { key: "friend", label: "友達・協調性", emoji: "🤝" },
  { key: "hyogen", label: "表現力・個性", emoji: "✨" },
];

const SEIKAKU_REASON = {
  active: "有りあまるエネルギーをダンスで思いきり発散できます。リズムに乗るうちに、集中力も自然と育ちます。",
  shy: "ダンスはステップを踏むところから。「できた！」の積み重ねで、人前に立つ自信が少しずつ育ちます。",
  mypace: "自分のペースで上達できるのがダンスの良さ。周りと比べず、好きな表現をのびのび伸ばせます。",
  focus: "振り付けを覚える集中力がそのまま活きます。1曲を踊りきる達成感が、次への意欲につながります。",
};

const MITSUKETAI_REASON = {
  jishin: "発表会の舞台に立つ経験が、大きな自信になります。",
  rhythm: "全身を使うダンスは、リズム感・運動神経の土台づくりに最適です。",
  friend: "チームで1つの作品を仕上げるので、自然と友達ができ、協調性が育ちます。",
  hyogen: "自由に体で表現する楽しさが、その子らしい個性をぐんと伸ばします。",
};

const PREF_OPTIONS = Object.keys(DANCE_PREFS).map((slug) => ({ slug, name: DANCE_PREFS[slug].name }));

const card = {
  width: "100%", textAlign: "left", background: "#fff", border: "2px solid #e8edf4",
  borderRadius: 14, padding: "16px 18px", fontSize: 15, fontWeight: 700, color: "#1B2A4A",
  cursor: "pointer", display: "flex", alignItems: "center", gap: 12, transition: "all .15s",
};

export default function ShindanClient() {
  const [step, setStep] = useState(0);
  const [a, setA] = useState({ age: "", pref: "", gender: "", seikaku: "", mitsuketai: "" });
  const [lineCode, setLineCode] = useState(null);
  const postedRef = useRef(false);

  const total = 5;
  const set = (key, val) => {
    setA((p) => ({ ...p, [key]: val }));
    setStep((s) => s + 1);
  };
  const reset = () => { setA({ age: "", pref: "", gender: "", seikaku: "", mitsuketai: "" }); setStep(0); setLineCode(null); postedRef.current = false; };

  const prefData = a.pref ? DANCE_PREFS[a.pref] : null;

  // 診断完了時：回答を保存し、LINE引き継ぎ用の4桁コードを受け取る
  useEffect(() => {
    if (step < total || postedRef.current) return;
    postedRef.current = true;
    try {
      window.gtag && window.gtag("event", "shindan_complete", { pref: a.pref, age: a.age });
    } catch (_) {}
    fetch(KN_SHINDAN, {
      method: "POST",
      headers: { "Content-Type": "text/plain" },
      body: JSON.stringify({
        age: a.age, pref: a.pref,
        prefName: a.pref && DANCE_PREFS[a.pref] ? DANCE_PREFS[a.pref].name : "",
        gender: a.gender, seikaku: a.seikaku, mitsuketai: a.mitsuketai,
      }),
    })
      .then((r) => r.json())
      .then((j) => { if (j && j.code) setLineCode(j.code); })
      .catch(() => {});
  }, [step, a]);
  const genderWord = a.gender === "男の子" ? "男の子" : a.gender === "女の子" ? "女の子" : "お子さん";

  const Q = ({ title, children }) => (
    <div>
      <div style={{ fontSize: 12, fontWeight: 800, color: "#E53935", marginBottom: 6 }}>
        質問 {step + 1} / {total}
      </div>
      <h2 style={{ fontSize: 20, fontWeight: 900, color: "#1B2A4A", marginBottom: 20, lineHeight: 1.4 }}>{title}</h2>
      <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>{children}</div>
    </div>
  );

  const Opt = ({ emoji, label, onClick }) => (
    <button onClick={onClick} style={card}
      onMouseDown={(e) => (e.currentTarget.style.borderColor = "#E53935")}>
      {emoji && <span style={{ fontSize: 22 }}>{emoji}</span>}
      <span>{label}</span>
      <span style={{ marginLeft: "auto", color: "#ccc" }}>›</span>
    </button>
  );

  return (
    <div style={{ fontFamily: "'Noto Sans JP','Hiragino Sans',sans-serif", background: "#f4f7fc", minHeight: "100vh" }}>
      {/* Header */}
      <header style={{ background: "#fff", borderBottom: "1px solid #e8edf4", position: "sticky", top: 0, zIndex: 100 }}>
        <div style={{ maxWidth: 680, margin: "0 auto", padding: "0 20px", display: "flex", alignItems: "center", gap: 8, height: 54 }}>
          <Link href="/" style={{ display: "flex", alignItems: "center", gap: 8, textDecoration: "none" }}>
            <div style={{ width: 30, height: 30, borderRadius: 9, background: "linear-gradient(135deg,#E53935,#B71C1C)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 15 }}>🧒</div>
            <span style={{ fontSize: 15, fontWeight: 900, color: "#1B2A4A" }}>コドモならいごと</span>
          </Link>
        </div>
      </header>

      <div style={{ maxWidth: 680, margin: "0 auto", padding: "28px 20px 70px" }}>

        {/* Progress */}
        {step < total && (
          <div style={{ height: 6, background: "#e8edf4", borderRadius: 6, marginBottom: 26, overflow: "hidden" }}>
            <div style={{ height: "100%", width: `${(step / total) * 100}%`, background: "linear-gradient(90deg,#E53935,#FF6B6B)", borderRadius: 6, transition: "width .3s" }} />
          </div>
        )}

        {/* Intro / Step 0 はそのまま質問1 */}
        {step === 0 && (
          <div style={{ background: "linear-gradient(135deg,#FFF5F5,#FFEBEE)", borderRadius: 16, padding: "18px 20px", marginBottom: 22, border: "1.5px solid #E5393520" }}>
            <div style={{ fontSize: 15, fontWeight: 900, color: "#1B2A4A", marginBottom: 4 }}>🔍 お子さんに合う習い事 かんたん診断</div>
            <div style={{ fontSize: 13, color: "#666", lineHeight: 1.7 }}>5つの質問に答えるだけ。お子さんにぴったりの習い事と、お住まいの近くの教室がわかります。</div>
          </div>
        )}

        {step === 0 && (
          <Q title="お子さんの年齢は？">
            {AGES.map((v) => <Opt key={v} emoji="🎂" label={v} onClick={() => set("age", v)} />)}
          </Q>
        )}

        {step === 1 && (
          <Q title="お住まいの地域は？">
            <select value={a.pref} onChange={(e) => set("pref", e.target.value)}
              style={{ ...card, appearance: "auto", cursor: "pointer" }}>
              <option value="">選んでください</option>
              {PREF_OPTIONS.map((p) => <option key={p.slug} value={p.slug}>{p.name}</option>)}
            </select>
            <div style={{ fontSize: 12, color: "#999", marginTop: 2 }}>※お住まいに近い教室をご案内します</div>
          </Q>
        )}

        {step === 2 && (
          <Q title="お子さんの性別は？">
            {GENDERS.map((v) => <Opt key={v} emoji={v === "男の子" ? "👦" : v === "女の子" ? "👧" : "🧒"} label={v} onClick={() => set("gender", v)} />)}
          </Q>
        )}

        {step === 3 && (
          <Q title="お子さんの性格に近いのは？">
            {SEIKAKU.map((v) => <Opt key={v.key} emoji={v.emoji} label={v.label} onClick={() => set("seikaku", v.key)} />)}
          </Q>
        )}

        {step === 4 && (
          <Q title="習い事で身につけてほしいことは？">
            {MITSUKETAI.map((v) => <Opt key={v.key} emoji={v.emoji} label={v.label} onClick={() => set("mitsuketai", v.key)} />)}
          </Q>
        )}

        {/* 結果 */}
        {step >= total && (
          <div>
            <div style={{ textAlign: "center", marginBottom: 8 }}>
              <span style={{ display: "inline-block", background: "#E53935", color: "#fff", fontSize: 12, fontWeight: 800, padding: "4px 14px", borderRadius: 20 }}>診断結果</span>
            </div>
            <div style={{ background: "linear-gradient(135deg,#B71C1C,#E53935)", borderRadius: 20, padding: "30px 24px", textAlign: "center", marginBottom: 20, boxShadow: "0 8px 30px rgba(229,57,53,.25)" }}>
              <div style={{ fontSize: 56, marginBottom: 8 }}>💃</div>
              <div style={{ fontSize: 14, color: "rgba(255,255,255,.92)", fontWeight: 700, marginBottom: 6 }}>{a.age}の{genderWord}におすすめは</div>
              <div style={{ fontSize: 30, fontWeight: 900, color: "#fff", lineHeight: 1.3 }}>ダンス教室</div>
            </div>

            {/* 理由 */}
            <div style={{ background: "#fff", borderRadius: 16, padding: "22px 22px", marginBottom: 18, border: "1.5px solid #e8edf4" }}>
              <h2 style={{ fontSize: 16, fontWeight: 900, color: "#1B2A4A", marginBottom: 12 }}>なぜダンスがおすすめ？</h2>
              <p style={{ fontSize: 14, color: "#555", lineHeight: 1.95, margin: "0 0 10px" }}>{SEIKAKU_REASON[a.seikaku]}</p>
              <p style={{ fontSize: 14, color: "#555", lineHeight: 1.95, margin: 0 }}>{MITSUKETAI_REASON[a.mitsuketai]}</p>
            </div>

            {/* 近隣教室 */}
            <div style={{ background: "#fff", borderRadius: 16, padding: "22px 22px", marginBottom: 18, border: "1.5px solid #e8edf4" }}>
              <h2 style={{ fontSize: 16, fontWeight: 900, color: "#1B2A4A", marginBottom: 6 }}>
                📍 {prefData ? prefData.name : "お住まいの地域"}のダンス教室
              </h2>
              {prefData ? (
                <>
                  <p style={{ fontSize: 13, color: "#666", lineHeight: 1.8, marginBottom: 14 }}>{prefData.heroText}。リディアダンスアカデミーをはじめ、複数のスクールを比較できます。</p>
                  <Link href={`/dance/${a.pref}`} style={{ display: "block", textAlign: "center", background: "#1B2A4A", color: "#fff", padding: "13px", borderRadius: 10, fontWeight: 800, fontSize: 14, textDecoration: "none" }}>
                    {prefData.name}のダンス教室を見る →
                  </Link>
                </>
              ) : (
                <Link href="/dance" style={{ display: "block", textAlign: "center", background: "#1B2A4A", color: "#fff", padding: "13px", borderRadius: 10, fontWeight: 800, fontSize: 14, textDecoration: "none" }}>
                  全国のダンス教室を見る →
                </Link>
              )}
            </div>

            {/* CTA */}
            <div style={{ background: "linear-gradient(135deg,#FFF5F5,#FFEBEE)", borderRadius: 16, padding: "22px", marginBottom: 18, border: "1.5px solid #E5393520", textAlign: "center" }}>
              <div style={{ fontSize: 15, fontWeight: 900, color: "#1B2A4A", marginBottom: 4 }}>まずは無料体験から</div>
              <div style={{ fontSize: 13, color: "#666", lineHeight: 1.7, marginBottom: 16 }}>リディアダンスアカデミーは初回体験無料。3歳から、手ぶらで参加できます。</div>
              <a href={LINE_URL} target="_blank" rel="noopener noreferrer" data-cta="shindan-result"
                style={{ display: "block", background: "#E53935", color: "#fff", padding: "15px", borderRadius: 12, fontWeight: 900, fontSize: 16, textDecoration: "none", boxShadow: "0 6px 20px rgba(229,57,53,.35)" }}>
                🎵 無料体験を申し込む →
              </a>
              {lineCode && (
                <div style={{ marginTop: 14, background: "#fff", borderRadius: 12, padding: "12px 16px", border: "1.5px dashed #E5393566", textAlign: "center" }}>
                  <div style={{ fontSize: 12.5, color: "#555", lineHeight: 1.7, marginBottom: 4 }}>
                    LINE友だち追加後、下の番号を送ると<br />診断結果に合わせた教室案内が届きます
                  </div>
                  <div style={{ fontSize: 26, fontWeight: 900, color: "#E53935", letterSpacing: 4 }}>{lineCode}</div>
                </div>
              )}
            </div>

            <button onClick={reset} style={{ display: "block", width: "100%", background: "#fff", color: "#888", padding: "12px", borderRadius: 10, fontWeight: 700, fontSize: 14, border: "1.5px solid #e8edf4", cursor: "pointer" }}>
              ↺ もう一度診断する
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
