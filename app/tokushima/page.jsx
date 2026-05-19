import Link from "next/link";
export const metadata = {
  title: '徳島県の子供向けダンス教室・習い事一覧｜コドモならいごと',
  description: '徳島県内のキッズダンス教室・子ども向け習い事を比較。徳島市 など主要エリアの教室情報を掲載。',
  keywords: ['徳島', '子供', 'ダンス教室', '習い事'],
  alternates: { canonical: 'https://www.kodomo-navi.com/tokushima' },
};
export default function PrefPage() {
  const breadcrumb = {"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"トップ","item":"https://www.kodomo-navi.com"},{"@type":"ListItem","position":2,"name":"徳島県の習い事","item":"https://www.kodomo-navi.com/tokushima"}]};
  const faq = {"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"徳島県内の子供ダンス教室の月謝相場は？","acceptedAnswer":{"@type":"Answer","text":"徳島県の子供ダンス教室は月5,000円〜8,000円程度が相場です。"}},{"@type":"Question","name":"徳島県で3歳から通えるダンス教室はありますか？","acceptedAnswer":{"@type":"Answer","text":"はい。徳島県内のダンス教室の多くが3歳から入会できるリトルクラスを設けています。"}},{"@type":"Question","name":"徳島県の人気ダンス教室はどこですか？","acceptedAnswer":{"@type":"Answer","text":"リディアダンスアカデミーをはじめ、徳島県には体験レッスン無料の人気教室が多数あります。"}}]};
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
          <span style={{color:"#ddd"}}>›</span><span style={{fontSize:13,color:"#888"}}>徳島県</span>
        </div>
      </header>
      <nav style={{maxWidth:1100,margin:"0 auto",padding:"10px 24px",fontSize:12,color:"#888"}}>
        <Link href="/" style={{color:"#FF8A00",textDecoration:"none"}}>トップ</Link>{" › "}徳島県
      </nav>
      <section style={{background:"linear-gradient(135deg,#1B2A4A,#2a4070)",padding:"44px 24px 40px"}}>
        <div style={{maxWidth:800,margin:"0 auto",textAlign:"center"}}>
          <h1 style={{fontSize:28,fontWeight:900,color:"#fff",marginBottom:12}}>徳島県の子供向け<br/>ダンス教室・習い事</h1>
          <p style={{fontSize:14,color:"rgba(255,255,255,.85)",lineHeight:1.9}}>徳島市を中心に徳島県全域の習い事情報を掲載。</p>
        </div>
      </section>
      <div style={{maxWidth:900,margin:"0 auto",padding:"32px 24px 60px"}}>
        <div style={{background:"#fff",borderRadius:18,padding:"28px 24px",marginBottom:24,border:"1.5px solid #e8edf4"}}>
          <h2 style={{fontSize:18,fontWeight:900,color:"#1B2A4A",marginBottom:16}}>📍 徳島県のエリアを選ぶ</h2>
          <p style={{fontSize:14,color:"#666",lineHeight:1.9}}>徳島県内の市区町村別の習い事情報を準備中です。まずはリディアダンスアカデミーの無料体験をお試しください。</p>
        </div>
        <div style={{background:"linear-gradient(135deg,#1B2A4A,#2a4070)",borderRadius:18,padding:"28px 24px",marginBottom:24,textAlign:"center"}}>
          <h2 style={{fontSize:20,fontWeight:900,color:"#fff",marginBottom:8}}>リディアダンスアカデミー</h2>
          <p style={{fontSize:13,color:"rgba(255,255,255,.85)",lineHeight:1.8,marginBottom:20}}>全国100校以上展開・3歳から通えるリトルクラス充実。初回体験無料！</p>
          <a href="https://lydia-dance.com/" target="_blank" rel="noopener noreferrer" style={{display:"inline-flex",alignItems:"center",gap:6,padding:"12px 24px",background:"linear-gradient(135deg,#FF8A00,#FFB347)",borderRadius:24,color:"#fff",fontWeight:700,fontSize:14,textDecoration:"none"}}>💃 無料体験を予約する</a>
        </div>
        <div style={{background:"#fff",borderRadius:18,padding:"28px 24px",marginBottom:24,border:"1.5px solid #e8edf4"}}>
          <Link href="/blog/kids-dance-start-age-guide-2026/" style={{display:"block",padding:"10px 0",borderBottom:"1px solid #f0f0f0",color:"#1B2A4A",textDecoration:"none",fontSize:14}}>子供のダンスを始める年齢ガイド2026</Link>
          <Link href="/blog/kids-dance-brain-development-science/" style={{display:"block",padding:"10px 0",color:"#1B2A4A",textDecoration:"none",fontSize:14}}>子供のダンスが脳発達に効果的な科学的理由</Link>
        </div>
        <section style={{marginBottom:40}}>
          <div style={{background:"linear-gradient(135deg,#fff7ee,#fff0f5)",borderRadius:16,padding:"24px 20px",border:"1.5px solid #FFD9A0"}}>
            <h2 style={{fontSize:18,fontWeight:900,color:"#1B2A4A",marginBottom:12}}>🥇 徳島県の習い事トレンド2026：ダンスが1位</h2>
            <p style={{fontSize:14,lineHeight:1.9,color:"#444"}}>K-POPブームと中学校ダンス必修化で徳島県でも子供のダンス需要が急増。2026年ランキング1位。</p>
          </div>
        </section>
        <div style={{background:"#fff",borderRadius:18,padding:"20px 24px",marginBottom:24,border:"1.5px solid #e8edf4"}}>
          <div style={{display:"flex",flexWrap:"wrap",gap:10}}>
            {[{href:"/osaka",name:"大阪府"},{href:"/tokyo",name:"東京都"},{href:"/kanagawa",name:"神奈川県"},{href:"/aichi",name:"愛知県"}].map((p,i)=><Link key={i} href={p.href} style={{display:"inline-flex",padding:"8px 16px",background:"#fff",border:"1.5px solid #e8edf4",borderRadius:20,textDecoration:"none",color:"#1B2A4A",fontSize:13,fontWeight:600}}>{p.name}</Link>)}
          </div>
        </div>
        {/* ジャンル別に探す */}
        <section style={{background:'#fff',borderRadius:16,padding:'24px 20px',border:'1.5px solid #e8edf4',marginTop:32,marginBottom:24}}>
          <div style={{fontSize:11,fontWeight:700,color:'#FF8A00',marginBottom:8,letterSpacing:'.5px'}}>GENRE</div>
          <h2 style={{fontSize:16,fontWeight:900,color:'#1B2A4A',marginBottom:14}}>ジャンル別に探す</h2>
          <div style={{display:'flex',flexWrap:'wrap',gap:8}}>
            {[
              ['/soccer/tokushima','⚽','サッカー'],
              ['/piano/tokushima','🎹','ピアノ'],
              ['/swimming/tokushima','🏊','スイミング'],
              ['/english/tokushima','🌍','英語'],
              ['/ballet/tokushima','🩰','バレエ'],
              ['/gymnastics/tokushima','🤸','体操'],
              ['/basketball/tokushima','🏀','バスケット'],
              ['/preschool/tokushima','🧒','幼児教室'],
              ['/soroban/tokushima','🧮','そろばん'],
              ['/programming/tokushima','💻','プログラミング'],
              ['/rhythmics/tokushima','🎵','リトミック'],
              ['/music/tokushima','🎸','音楽'],
              ['/karate/tokushima','🥋','空手'],
            ].map(([href,emoji,label])=>(
              <Link key={href} href={href} style={{display:'inline-flex',alignItems:'center',gap:4,padding:'7px 14px',background:'#f8f9fb',border:'1.5px solid #e8edf4',borderRadius:20,textDecoration:'none',color:'#1B2A4A',fontSize:12,fontWeight:600}}>
                {emoji} {label}
              </Link>
            ))}
          </div>
        </section>
        <div style={{textAlign:"center"}}>
          <Link href="/" style={{display:"inline-flex",alignItems:"center",gap:6,padding:"12px 28px",background:"linear-gradient(135deg,#FF8A00,#FFB347)",borderRadius:20,color:"#fff",fontWeight:700,fontSize:14,textDecoration:"none"}}>← トップページへ戻る</Link>
        </div>
      </div>
    </div>
  );
}
