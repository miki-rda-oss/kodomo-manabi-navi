"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

// 送客リダイレクト: /go/?u=<転送先URL>&s=<スクール識別子>
// スクール別の送客数を計測してから転送する（掲載スクール向け実績レポートの元データ）。
const KN_CLICK = "https://162.43.31.198.nip.io/kn/api/click";
const ALLOWED_HOSTS = [
  "re-dia.jp", "www.re-dia.jp",
  "lin.ee", "line.me", "liff.line.me",
  "expg.jp", "www.expg.jp",
  "dancemaster.avex.jp",
  "bdc.jp", "www.bdc.jp",
];

export default function GoClient() {
  const params = useSearchParams();
  const [dest, setDest] = useState(null);
  const [blocked, setBlocked] = useState(false);

  useEffect(() => {
    const u = params.get("u") || "";
    const s = params.get("s") || "";
    let url;
    try { url = new URL(u); } catch (_) { setBlocked(true); return; }
    if (url.protocol !== "https:" || !ALLOWED_HOSTS.includes(url.hostname)) { setBlocked(true); return; }
    setDest(url.href);
    try {
      window.gtag && window.gtag("event", "outbound_click", { link_url: url.href, school: s });
    } catch (_) {}
    try {
      navigator.sendBeacon && navigator.sendBeacon(KN_CLICK, JSON.stringify({ u: url.href.slice(0, 300), d: url.hostname, s, p: "/go", c: "go" }));
    } catch (_) {}
    const t = setTimeout(() => { window.location.replace(url.href); }, 400);
    return () => clearTimeout(t);
  }, [params]);

  return (
    <div style={{ fontFamily: "'Noto Sans JP','Hiragino Sans',sans-serif", minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", background: "#f4f7fc", padding: 24 }}>
      <div style={{ textAlign: "center", maxWidth: 420 }}>
        {blocked ? (
          <>
            <div style={{ fontSize: 15, fontWeight: 800, color: "#1B2A4A", marginBottom: 10 }}>このリンクは開けません</div>
            <a href="/" style={{ color: "#E53935", fontSize: 14 }}>トップページへ戻る</a>
          </>
        ) : (
          <>
            <div style={{ fontSize: 15, fontWeight: 800, color: "#1B2A4A", marginBottom: 10 }}>外部サイトへ移動しています…</div>
            {dest && (
              <a href={dest} style={{ color: "#E53935", fontSize: 13, wordBreak: "break-all" }}>
                自動で移動しない場合はこちら
              </a>
            )}
          </>
        )}
      </div>
    </div>
  );
}
