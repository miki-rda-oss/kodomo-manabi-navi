"use client";
import Link from "next/link";
const CITY="岡山市",PREF="岡山県",PREF_SLUG="okayama",AREA_SLUG="okayama-city";
const SCHOOLS=[
  {name:"リディアダンスアカデミー",rating:4.8,price:"6,600円〜",age:"3歳〜15歳",genre:"ヒップホップ・ジャズ・K-POP",url:"https://re-dia.jp/",desc:"全国100校以上展開する子どもダンス教室。現役プロダンサー講師が丁寧に指導。"},
  {name:"EYS-Kidsダンスアカデミー",rating:4.5,price:"8,800円〜",age:"2歳〜12歳",genre:"ヒップホップ・バレエジャズ",url:"https://eys-kids.com/",desc:"マンツーマンレッスンで一人ひとりのペースに合わせた指導。振替制度充実。"},
  {name:"セイハダンスアカデミー",rating:4.4,price:"6,600円〜",age:"2歳〜15歳",genre:"ヒップホップ・チアダンス",url:"https://www.seiha.co.jp/",desc:"全国200校以上展開。楽しく学べるカリキュラム。"},
];
const GENRES=[
  {emoji:"⚽",label:"サッカー",href:`/soccer/${PREF_SLUG}/${AREA_SLUG}`},
  {emoji:"🎹",label:"ピアノ",href:`/piano/${PREF_SLUG}/${AREA_SLUG}`},
  {emoji:"🏊",label:"スイミング",href:`/swimming/${PREF_SLUG}/${AREA_SLUG}`},
  {emoji:"🌍",label:"英語",href:`/english/${PREF_SLUG}/${AREA_SLUG}`},
  {emoji:"🩰",label:"バレエ",href:`/ballet/${PREF_SLUG}/${AREA_SLUG}`},
  {emoji:"🤸",label:"体操",href:`/gymnastics/${PREF_SLUG}/${AREA_SLUG}`},
  {emoji:"🏀",label:"バスケット",href:`/basketball/${PREF_SLUG}/${AREA_SLUG}`},
  {emoji:"🧮",label:"そろばん",href:`/soroban/${PREF_SLUG}/${AREA_SLUG}`},
  {emoji:"💻",label:"プログラミング",href:`/programming/${PREF_SLUG}/${AREA_SLUG}`},
  {emoji:"🎵",label:"リトミック",href:`/rhythmics/${PREF_SLUG}/${AREA_SLUG}`},
  {emoji:"🎸",label:"音楽教室",href:`/music/${PREF_SLUG}/${AREA_SLUG}`},
  {emoji:"🥋",label:"空手",href:`/karate/${PREF_SLUG}/${AREA_SLUG}`},
  {emoji:"📚",label:"学習塾",href:`/juku/${PREF_SLUG}/${AREA_SLUG}`},
];
const FAQS=[
  {q:`${CITY}のダンス教室は何歳から？`,a:"3〜4歳から入会できる教室がほとんどです。"},
  {q:`${CITY}の習い事の月謝相場は？`,a:"ダンス月5,000〜12,000円、スイミング月7,000〜10,000円、ピアノ月6,000〜15,000円が目安。"},
  {q:"岡山市のおすすめ習い事は？",a:"ダンス・スイミング・英語が人気。中四国の主要都市として教室数も充実。"},
];
export default function AreaContent(){
  return(
    <main style={{maxWidth:900,margin:"0 auto",padding:"24px 16px",fontFamily:"'Noto Sans JP',sans-serif"}}>
      <nav style={{fontSize:12,color:"#888",marginBottom:16}}>
        <Link href="/" style={{color:"#888",textDecoration:"none"}}>トップ</Link> &gt; <Link href={`/${PREF_SLUG}`} style={{color:"#888",textDecoration:"none"}}>{PREF}の習い事</Link> &gt; <span style={{color:"#1B2A4A",fontWeight:700}}>{CITY}の習い事</span>
      </nav>
      <div style={{background:"linear-gradient(135deg,#1B2A4A,#2a4a8a)",borderRadius:16,padding:"32px 24px",color:"#fff",marginBottom:28}}>
        <h1 style={{fontSize:24,fontWeight:900,marginBottom:8}}>💃 {CITY}の子供の習い事おすすめ</h1>
        <p style={{fontSize:14,opacity:0.9,lineHeight:1.7}}>{PREF}{CITY}のダンス・スポーツ・芸術・学習系教室を比較。口コミ・料金・無料体験情報を掲載。</p>
      </div>
      <h2 style={{fontSize:20,fontWeight:900,color:"#1B2A4A",marginBottom:16}}>🏫 {CITY}のおすすめ習い事教室</h2>
      <div style={{display:"grid",gap:16,marginBottom:32}}>
        {SCHOOLS.map((s,i)=>(
          <div key={i} style={{background:"#fff",borderRadius:12,padding:20,border:"1.5px solid #e8edf4"}}>
            <div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-start",marginBottom:8,flexWrap:"wrap",gap:8}}>
              <div><div style={{fontSize:16,fontWeight:800,color:"#1B2A4A",marginBottom:4}}>{s.name}</div><div style={{fontSize:12,color:"#888"}}>⭐{s.rating} ｜{s.age} ｜{s.price}</div></div>
              <span style={{background:"#fff7ee",border:"1px solid #FFD9A0",borderRadius:8,padding:"4px 10px",fontSize:11,color:"#FF8A00",fontWeight:700}}>{s.genre}</span>
            </div>
            <p style={{fontSize:13,color:"#555",lineHeight:1.7,marginBottom:12}}>{s.desc}</p>
            <a href={s.url} target="_blank" rel="noopener noreferrer" style={{display:"inline-flex",alignItems:"center",gap:6,background:"#FF8A00",color:"#fff",padding:"8px 18px",borderRadius:20,fontSize:13,fontWeight:700,textDecoration:"none"}}>無料体験を申し込む →</a>
          </div>
        ))}
      </div>
      <div style={{background:"#f8fafc",borderRadius:12,padding:"24px",marginBottom:32}}>
        <h2 style={{fontSize:18,fontWeight:900,color:"#1B2A4A",marginBottom:16}}>❓ よくある質問</h2>
        {FAQS.map((f,i)=>(
          <div key={i} style={{background:"#fff",borderRadius:8,padding:16,border:"1px solid #e8edf4",marginBottom:10}}>
            <div style={{fontSize:14,fontWeight:700,color:"#1B2A4A",marginBottom:6}}>Q: {f.q}</div>
            <div style={{fontSize:13,color:"#555",lineHeight:1.7}}>A: {f.a}</div>
          </div>
        ))}
      </div>
      <div style={{background:"#fff",borderRadius:12,padding:"24px",border:"1.5px solid #e8edf4",marginBottom:32}}>
        <h2 style={{fontSize:16,fontWeight:900,color:"#1B2A4A",marginBottom:12}}>🎯 {CITY}のジャンル別習い事</h2>
        <div style={{display:"flex",flexWrap:"wrap",gap:8}}>
          {GENRES.map((g,i)=>(
            <Link key={i} href={g.href} style={{display:"inline-flex",alignItems:"center",gap:4,padding:"7px 14px",background:"#f8f9fb",border:"1.5px solid #e8edf4",borderRadius:20,fontSize:13,fontWeight:600,color:"#1B2A4A",textDecoration:"none"}}>{g.emoji} {g.label}</Link>
          ))}
        </div>
      </div>
      <div style={{textAlign:"center"}}>
        <Link href={`/${PREF_SLUG}`} style={{display:"inline-flex",alignItems:"center",gap:6,padding:"12px 24px",background:"#1B2A4A",color:"#fff",borderRadius:20,fontSize:14,fontWeight:700,textDecoration:"none"}}>← {PREF}の習い事一覧に戻る</Link>
      </div>
    </main>
  );
}
