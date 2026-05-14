import Link from "next/link";
export const metadata = {
  title: '北海道の子供向けダンス教室・習い事一覧｜コドモならいごと',
  description: '北海道内のキッズダンス教室・子ども向け習い事を比較。札幌市 など主要エリアの教室情報を掲載。',
  keywords: ['北海道', '子供', 'ダンス教室', '習い事'],
  alternates: { canonical: 'https://kodomo-manabi-navi.vercel.app/hokkaido' },
};
export default function PrefPage() {
  const breadcrumb = {"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"トップ","item":"https://kodomo-manabi-navi.vercel.app"},{"@type":"ListItem","position":2,"name":"北海道の習い事","item":"https://kodomo-manabi-navi.vercel.app/hokkaido"}]};
  const faq = {"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"北海道内の子供ダンス教室の月謝相場は？","acceptedAnswer":{"@type":"Answer","text":"北海道の子供ダンス教室は月5,000円〜8,000円程度が相場です。リディアダンスアカデミーは月会員プランが5,500円〜です。"}},{"@type":"Question","name":"北海道で3歳から通えるダンス教室はありますか？","acceptedAnswer":{"@type":"Answer","text":"はい。北海道内のダンス教室の多くが3歳から入会できるリトルクラスを設けています。"}},{"@type":"Question","name":"北海道の人気ダンス教室はどこですか？","acceptedAnswer":{"@type":"Answer","text":"リディアダンスアカデミーをはじめ、北海道には体験レッスン無料の人気教室が多数あります。"}}]};
  return (
    <div style={{fontFamily:"'Noto Sans JP',sans-serif",background:"#f4f7fc",minHeight:"100vh"}}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(breadcrumb)}} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(faq)}} />
      <header style={{background:"#fff",borderBottom:"1px solid #e8edf4",position:"sticky",top:0,zIndex:100}}>
        <div style={{maxWidth:1100,margin:"0 auto",padding:"0 24px",display:"flex",alignItems:"center",gap:10,height:56}}>
          <Link href="/" style={{display:"flex",alignItems:"center",gap:8,textDecoration:"none"}}>
            <div style={{width:32,height:32,borderRadius:9,background:"linear-gradient(135deg,#FF8A00,#FFB347)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:16}}>🧒</div>
            <span style={{fontSize:15,fontWeight:900,color:"#1B2A4A"}}>コドモならいごと</span>
          </Link>
          <span style={{color:"#ddd"}}>›</span><span style={{fontSize:13,color:"#888"}}>北海道</span>
        </div>
      </header>
      <nav style={{maxWidth:1100,margin:"0 auto",padding:"10px 24px",fontSize:12,color:"#888"}}>
        <Link href="/" style={{color:"#FF8A00",textDecoration:"none"}}>トップ</Link>{" › "}北海道
      </nav>
      <section style={{background:"linear-gradient(135deg,#1B2A4A,#2a4070)",padding:"44px 24px 40px"}}>
        <div style={{maxWidth:800,margin:"0 auto",textAlign:"center"}}>
          <h1 style={{fontSize:28,fontWeight:900,color:"#fff",marginBottom:12}}>北海道の子供向け<br/>ダンス教室・習い事</h1>
          <p style={{fontSize:14,color:"rgba(255,255,255,.85)",lineHeight:1.9}}>札幌市を中心に北海道全域の習い事情報を掲載。お子さまにぴったりの教室を見つけよう。</p>
        </div>
      </section>
      <div style={{maxWidth:900,margin:"0 auto",padding:"32px 24px 60px"}}>
        <div style={{background:"#fff",borderRadius:18,padding:"28px 24px",marginBottom:24,border:"1.5px solid #e8edf4"}}>
          <h2 style={{fontSize:18,fontWeight:900,color:"#1B2A4A",marginBottom:16}}>📍 北海道のエリアを選ぶ</h2>
          <p style={{fontSize:14,color:"#666",lineHeight:1.9}}>北海道内の市区町村別の習い事情報を準備中です。まずはリディアダンスアカデミーの無料体験をお試しください。</p>
        </div>
        <div style={{background:"linear-gradient(135deg,#1B2A4A,#2a4070)",borderRadius:18,padding:"28px 24px",marginBottom:24,textAlign:"center"}}>
          <h2 style={{fontSize:20,fontWeight:900,color:"#fff",marginBottom:8}}>リディアダンスアカデミー</h2>
          <p style={{fontSize:13,color:"rgba(255,255,255,.85)",lineHeight:1.8,marginBottom:20}}>全国46校展開・現役プロダンサー講師100名以上。3歳から通えるリトルクラス充実。初回体験無料！</p>
          <a href="https://lydia-dance.com/" target="_blank" rel="noopener noreferrer" style={{display:"inline-flex",alignItems:"center",gap:6,padding:"12px 24px",background:"linear-gradient(135deg,#FF8A00,#FFB347)",borderRadius:24,color:"#fff",fontWeight:700,fontSize:14,textDecoration:"none"}}>💃 無料体験を予約する</a>
        </div>
        <div style={{background:"#fff",borderRadius:18,padding:"28px 24px",marginBottom:24,border:"1.5px solid #e8edf4"}}>
          <h2 style={{fontSize:18,fontWeight:900,color:"#1B2A4A",marginBottom:16}}>📝 習い事コラム</h2>
          <Link href="/blog/kids-dance-start-age-guide-2026" style={{display:"block",padding:"10px 0",borderBottom:"1px solid #f0f0f0",color:"#1B2A4A",textDecoration:"none",fontSize:14}}>子供のダンスを始める年齢ガイド2026</Link>
          <Link href="/blog/kids-activity-ranking-2026-latest" style={{display:"block",padding:"10px 0",color:"#1B2A4A",textDecoration:"none",fontSize:14}}>子供習い事人気ランキング2026最新版</Link>
        </div>
        <section style={{marginBottom:40}}>
          <div style={{background:"linear-gradient(135deg,#fff7ee,#fff0f5)",borderRadius:16,padding:"24px 20px",border:"1.5px solid #FFD9A0"}}>
            <h2 style={{fontSize:18,fontWeight:900,color:"#1B2A4A",marginBottom:12}}>🥇 北海道の習い事トレンド2026：ダンスが1位</h2>
            <p style={{fontSize:14,lineHeight:1.9,color:"#444"}}>K-POPブームと中学校ダンス必修化の影響で、北海道でも子供のダンス習い事への需要が急増。2026年ランキングでダンスが1位を獲得しました。</p>
          </div>
        </section>
        <div style={{background:"#fff",borderRadius:18,padding:"28px 24px",marginBottom:24,border:"1.5px solid #e8edf4"}}>
          <h2 style={{fontSize:18,fontWeight:900,color:"#1B2A4A",marginBottom:16}}>🗾 他の都道府県の習い事情報</h2>
          <div style={{display:"flex",flexWrap:"wrap",gap:10}}>
            {[{href:"/osaka",name:"大阪府"},{href:"/tokyo",name:"東京都"},{href:"/kanagawa",name:"神奈川県"},{href:"/aichi",name:"愛知県"}].map((p,i)=><Link key={i} href={p.href} style={{display:"inline-flex",padding:"8px 16px",background:"#fff",border:"1.5px solid #e8edf4",borderRadius:20,textDecoration:"none",color:"#1B2A4A",fontSize:13,fontWeight:600}}>{p.name}</Link>)}
          </div>
        </div>
        <div style={{textAlign:"center"}}>
          <Link href="/" style={{display:"inline-flex",alignItems:"center",gap:6,padding:"12px 28px",background:"linear-gradient(135deg,#FF8A00,#FFB347)",borderRadius:20,color:"#fff",fontWeight:700,fontSize:14,textDecoration:"none"}}>← トップページへ戻る</Link>
        </div>
      </div>
    </div>
  );
}
