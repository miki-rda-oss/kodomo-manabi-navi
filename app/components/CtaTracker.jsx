"use client";

import { useEffect } from "react";

// CTAクリック計測：lin.ee / re-dia.jp / line.me へのクリックを
// GA4イベント(cta_click) + 計測API(sendBeacon) に送る。
// クリックデリゲーション方式なので既存リンクの改修は不要。
const KN_CLICK = "https://162.43.31.198.nip.io/kn/api/click";
const TARGET_HOSTS = ["lin.ee", "re-dia.jp", "line.me"];

export default function CtaTracker() {
  useEffect(() => {
    const handler = (e) => {
      const a = e.target && e.target.closest ? e.target.closest("a[href]") : null;
      if (!a) return;
      let url;
      try { url = new URL(a.href, window.location.origin); } catch (_) { return; }
      const host = url.hostname;
      if (!TARGET_HOSTS.some((t) => host === t || host.endsWith("." + t))) return;
      const school = a.dataset.school || (host.endsWith("re-dia.jp") ? "redia" : "line");
      const payload = {
        u: url.href.slice(0, 300),
        d: host,
        s: school,
        p: window.location.pathname,
        c: a.dataset.cta || "",
      };
      try {
        window.gtag && window.gtag("event", "cta_click", {
          link_url: payload.u, link_domain: host, school, page_path: payload.p,
        });
      } catch (_) {}
      try {
        navigator.sendBeacon && navigator.sendBeacon(KN_CLICK, JSON.stringify(payload));
      } catch (_) {}
    };
    document.addEventListener("click", handler, true);
    return () => document.removeEventListener("click", handler, true);
  }, []);
  return null;
}
