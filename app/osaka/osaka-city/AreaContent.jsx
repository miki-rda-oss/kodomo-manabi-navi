"use client";
import { useState, useEffect } from "react";
const CAT_SLUG={"ダンス":"dance","K-POP":"kpop","スイミング":"swimming","プログラミング":"programming","サッカー":"soccer","英語・英会話":"english","ピアノ":"piano","バレエ":"ballet","空手":"karate","リトミック":"rhythmics","幼児教室":"preschool","学習塾":"juku"};

const S = {
  "ダンス": [
    { id:"d0",name:"リディアダンスアカデミー",rating:4.8,rc:45,age:"3歳〜15歳",featured:true,url:"https://re-dia.jp/miyakojima/",
      desc:"初心者クラスが充実した3歳から学べるキッズダンススクール。現役プロダンサー講師200名以上在籍。全国100校以上展開。",
      tags:["初心者クラス充実","全国100校以上","プロ講師200名以上","初回体験無料","少人数制"],
      genres:["ヒップホップ","ジャズ","ロック","K-POP","ブレイクダンス","ポップ","ワック"],
      courses:[{n:"リトルクラス",p:6600,a:"3歳〜6歳"},{n:"キッズクラス",p:7700,a:"小学生"},{n:"月会員プラン",p:7700,a:"全年齢"},{n:"受け放題プラン",p:27000,a:"全年齢"}],
      locs:[{n:"都島校",ad:"大阪市都島区都島本通3-18-4 サニータウン日新205号",st:"都島駅より徒歩3分",url:"https://re-dia.jp/miyakojima/"},{n:"平野校",ad:"大阪市平野区平野宮町1-4-17 B1階",st:"平野駅より徒歩5分",url:"https://re-dia.jp/hirano/"},{n:"あべの校",ad:"大阪市阿倍野区阿倍野筋1丁目",st:"天王寺駅より徒歩3分",url:"https://re-dia.jp/abeno/"},{n:"福島野田校",ad:"大阪市福島区玉川4-15-11 タマガワファーストビル4F",st:"JR野田駅より徒歩3分",url:"https://re-dia.jp/hukushimanoda/"},{n:"福島校",ad:"大阪市福島区福島5丁目",st:"福島駅より徒歩3分",url:"https://re-dia.jp/hukushima/"},{n:"寺田町校",ad:"大阪市天王寺区大道2丁目",st:"寺田町駅より徒歩3分",url:"https://re-dia.jp/teradacho/"}],
      revs:[{g:"女の子",a:"3歳〜",l:"箕面船場阪大前校",t:"娘が3歳から通っています。ダンスだけでなく人としても大きく成長させていただいています。"},{g:"女の子",a:"7歳〜",l:"都島校",t:"DANCEを始めてから人前で自分の思いを伝えられるようになりました。"}],
      color:"#E53935",emoji:"🏆"},
    { id:"d3",name:"EYS-Kids DANCEACADEMY",rating:4.5,rc:12,age:"3歳〜12歳",desc:"充実のプログラムで豊富なジャンルをご用意！発表会で自主性を育みます。",courses:[{n:"HIP-HOP",p:10500,a:"6歳〜12歳"},{n:"Jazz",p:10500,a:"6歳〜12歳"},{n:"Kids Rhythm",p:10500,a:"3歳〜9歳"}],locs:[{n:"梅田スタジオ",ad:"大阪市北区曽根崎2-8-15",st:"東梅田駅より徒歩2分"}],revs:[{g:"女の子",a:"7歳〜",l:"梅田スタジオ",t:"先生の話をしっかり聞く習慣がつきました。"}],color:"#7C4DFF",emoji:"🎵"},
    { id:"d4",name:"エイベックス・ダンスマスター",rating:4.6,rc:45,age:"3歳〜15歳",desc:"エイベックス所属プロダンサー監修。本格的なストリートダンスを全国展開。大阪市内に5校展開中。",courses:[{n:"キッズダンス",p:null,a:"3歳〜6歳"},{n:"スタンダード",p:null,a:"7歳〜15歳"}],locs:[{n:"エイベックス・ダンスマスター扇町店",ad:"大阪府大阪市北区扇町1-1",st:"大阪メトロ扇町駅より徒歩1分"},{n:"エイベックス・ダンスマスター今里店",ad:"大阪府大阪市城東区今里西1-26-5",st:"大阪メトロ今里駅8番出口より徒歩2分"},{n:"エイベックス・ダンスマスター鶴見緑地校",ad:"大阪府大阪市鶴見区鶴見5-10-30",st:"大阪メトロ横堤駅より徒歩約3分"},{n:"エイベックス・ダンスマスターあべの校",ad:"大阪府大阪市阿倍野区松崎町2-3-47",st:"大阪メトロ天王寺駅より徒歩約5分"},{n:"エイベックス・ダンスマスター平野店",ad:"大阪府大阪市平野区背戸口3-9-19",st:"大阪メトロ平野駅より徒歩約5分"}],revs:[{g:"女の子",a:"5歳〜",l:"エイベックス・ダンスマスター扇町店",t:"プロのダンサー監修で本格的なダンスが習えます。楽しく通っています。"}],color:"#6200EA",emoji:"🎤"},
    { id:"d2",name:"セイハダンスアカデミー",rating:4.4,rc:132,age:"2歳〜15歳",desc:"パパイヤ鈴木氏監修。少人数制レッスンで一人ひとりを大切に指導。大阪市内に3校展開中。",courses:[{n:"キッズ（幼児）",p:null,a:"2歳〜5歳"},{n:"レギュラー（入門）",p:null,a:"6歳〜10歳"}],locs:[{n:"そよら海老江",ad:"大阪市福島区海老江1-5-52",st:"阪神野田駅・JR海老江駅より徒歩約7分"},{n:"イオンモール大阪ドームシティ",ad:"大阪市西区千代崎3丁目13-1",st:"JR大正駅より徒歩約3分"},{n:"イオンモール鶴見緑地",ad:"大阪市鶴見区鶴見4-17-1",st:"大阪メトロ横堤駅より徒歩約10分"}],revs:[{g:"女の子",a:"4歳〜",l:"そよら海老江",t:"発表会で大勢の前で踊る機会があり自信がつきました。"}],color:"#E91E63",emoji:"🌟"},
    { id:"d1",name:"JDACダンススクール",rating:4.7,rc:6,age:"3歳〜15歳",desc:"生きる力が身につく教育型ダンススクール。10年以上の指導実績で独自プログラムを開発。大阪市内に8校展開中。",courses:[{n:"シャイン",p:7150,a:"3歳〜8歳"},{n:"スター",p:7370,a:"7歳〜15歳"}],locs:[{n:"大阪野江本校",ad:"大阪市城東区野江",st:"野江駅より徒歩5分"},{n:"ルネサンスもりのみやキューズモール校",ad:"大阪市中央区森ノ宮中央",st:"森ノ宮駅より徒歩3分"},{n:"都島駅前校",ad:"大阪市都島区中野町",st:"都島駅より徒歩1分"},{n:"靭公園校",ad:"大阪市西区靭本町",st:"本町駅より徒歩5分"},{n:"千林大宮駅前校",ad:"大阪市旭区千林",st:"千林大宮駅より徒歩1分"},{n:"東淀川区役所前校",ad:"大阪市東淀川区豊里",st:"東淀川区役所前駅より徒歩1分"},{n:"谷町六丁目駅前校",ad:"大阪市中央区谷町",st:"谷町六丁目駅より徒歩1分"},{n:"長居公園東校",ad:"大阪市東住吉区長居公園",st:"長居駅より徒歩5分"}],revs:[{g:"女の子",a:"7歳〜",l:"大阪野江本校",t:"楽しそうに通っています。自信も持てるようになりました。"}],color:"#FF6B35",emoji:"💃"},
    { id:"dx3",name:"EXPG STUDIO",rating:4.5,rc:55,age:"16歳〜大人",desc:"LDH系プロダンサー輩出実績No.1のダンス＆ボーカルスクール。プロを目指す本格派向け。大阪市内に1校展開中。",courses:[{n:"ダンスコース",p:null,a:"16歳〜"},{n:"ボーカルコース",p:null,a:"16歳〜"}],locs:[{n:"EXPG STUDIO 大阪",ad:"大阪府大阪市西区南堀江3-9-11 堀江家具新館ビル4F",st:"大阪メトロ桜川駅2番出口より徒歩2分"}],revs:[{g:"女の子",a:"高校生",l:"EXPG STUDIO 大阪",t:"本格的なダンスとボーカルを学べます。LDHゆかりのスクールで刺激を受けています。"}],color:"#FF6D00",emoji:"🎭"},
  ],
  "サッカー": [
    { id:"s1",name:"セレッソ大阪スポーツクラブ",rating:4.3,rc:87,age:"4歳〜15歳",desc:"Jリーグ・セレッソ大阪の公式スクール。プロの指導メソッドで基礎から応用まで。",courses:[{n:"キッズ（U-6）",p:3630,a:"4歳〜6歳"},{n:"ジュニア（U-12）",p:6600,a:"6歳〜12歳"},{n:"エリートNEXT",p:8800,a:"8歳〜15歳"}],locs:[{n:"セレッソフットサルパーク校",ad:"大阪市北区中之島6丁目",st:"中之島駅より徒歩5分"},{n:"桃山学院校",ad:"大阪市阿倍野区昭和町3丁目",st:"昭和町駅より徒歩8分"}],revs:[{g:"男の子",a:"5歳〜",l:"セレッソフットサルパーク校",t:"プロコーチから直接指導を受けられ、基礎技術がしっかり身につきました。"}],color:"#E91E63",emoji:"⚽"},
    { id:"s2",name:"リベルタサッカースクール",rating:4.1,rc:12,age:"3歳〜12歳",desc:"「認める・褒める・励ます」の指導方針。元プロ選手コーチが技術とメンタルを育成。",courses:[{n:"通常コース",p:7103,a:"3歳〜12歳"}],locs:[{n:"住之江校",ad:"大阪市住之江区泉1丁目1-82",st:"住之江公園駅より徒歩4分"},{n:"東淀川校",ad:"大阪市東淀川区井高野4-7-85",st:"井高野駅より徒歩8分"}],revs:[{g:"男の子",a:"5歳〜",l:"住之江校",t:"上手な子に刺激を受けて頑張るようになりました。"}],color:"#4CAF50",emoji:"🏃"},
    { id:"s3",name:"ソルティーロ ファミリア",rating:4.0,rc:25,age:"4歳〜12歳",desc:"本田圭佑プロデュース。ドリブルを武器に自主性を重視した少人数制指導。",courses:[{n:"通常コース",p:6000,a:"4歳〜12歳"}],locs:[{n:"大阪中央校",ad:"大阪市中央区島之内1-10-23",st:"長堀橋駅より徒歩2分"}],revs:[{g:"男の子",a:"6歳〜",l:"大阪中央校",t:"ドリブル技術が向上し試合で自信を持てるようになりました。"}],color:"#FF9800",emoji:"⚡"},
  ],
  "英語・英会話": [
    { id:"e1",name:"ECC KIDS",rating:4.4,rc:180,age:"1歳半〜",desc:"All Englishの環境で自然に英語が身につく。外国人講師とバイリンガル講師のペアティーチング。",courses:[{n:"ミニキッズ",p:9900,a:"1歳半〜3歳"},{n:"キッズイングリッシュワールド",p:11000,a:"3歳〜6歳"},{n:"小学生コース",p:11000,a:"6歳〜12歳"}],locs:[{n:"なんば校",ad:"大阪市中央区難波4丁目",st:"なんば駅より徒歩3分"},{n:"天王寺校",ad:"大阪市阿倍野区阿倍野筋1丁目",st:"天王寺駅より徒歩2分"}],revs:[{g:"女の子",a:"4歳〜",l:"なんば校",t:"外国人の先生と楽しく英語を話せるようになり、抵抗がなくなりました。"}],color:"#FF6F00",emoji:"🌍"},
    { id:"e2",name:"シェーン英会話",rating:4.3,rc:95,age:"2歳〜",desc:"ネイティブ講師による少人数制。英国式メソッドで4技能をバランスよく習得。",courses:[{n:"2歳〜年少",p:7700,a:"2歳〜4歳"},{n:"年中・年長",p:11000,a:"4歳〜6歳"},{n:"小学生",p:11000,a:"6歳〜12歳"}],locs:[{n:"心斎橋校",ad:"大阪市中央区西心斎橋1丁目",st:"心斎橋駅より徒歩2分"}],revs:[{g:"男の子",a:"5歳〜",l:"心斎橋校",t:"ネイティブの先生の発音を聞いて育つので発音がきれいです。"}],color:"#2196F3",emoji:"📚"},
    { id:"e3",name:"ベルリッツ・キッズ",rating:4.5,rc:60,age:"4歳〜",desc:"実践的な英語力を育てる少人数・マンツーマン。異文化理解も重視。",courses:[{n:"キッズ少人数",p:14300,a:"4歳〜12歳"},{n:"マンツーマン",p:26950,a:"4歳〜12歳"}],locs:[{n:"梅田校",ad:"大阪市北区梅田2丁目",st:"西梅田駅より徒歩3分"}],revs:[{g:"女の子",a:"6歳〜",l:"梅田校",t:"少人数でたくさん話す機会があり英検にも合格できました。"}],color:"#1565C0",emoji:"🗣️"},
  ],
  "ピアノ": [
    { id:"p1",name:"ヤマハ音楽教室",rating:4.5,rc:210,age:"1歳〜",desc:"「きく→うたう→ひく→よむ→つくる」のステップで総合的な音楽力を育てる老舗教室。",courses:[{n:"ぷっぷるコース",p:5500,a:"1歳〜3歳"},{n:"幼児科",p:7700,a:"4歳〜5歳"},{n:"ジュニアスクール ピアノ",p:8800,a:"小学生"}],locs:[{n:"梅田センター",ad:"大阪市北区梅田1丁目",st:"梅田駅より徒歩3分"},{n:"なんばセンター",ad:"大阪市中央区難波4丁目",st:"なんば駅より徒歩2分"}],revs:[{g:"女の子",a:"4歳〜",l:"梅田センター",t:"グループレッスンで友達と楽しく学べています。音感がとても良くなりました。"}],color:"#FF5722",emoji:"🎹"},
    { id:"p2",name:"カワイ音楽教室",rating:4.3,rc:155,age:"3歳〜",desc:"「音楽で一人ひとりの個性を導き出す」教育理念。個人レッスン中心の丁寧な指導。",courses:[{n:"ピアノコース",p:8250,a:"4歳〜"},{n:"3歳ソルフェージュ",p:6600,a:"3歳"}],locs:[{n:"天王寺教室",ad:"大阪市天王寺区悲田院町",st:"天王寺駅より徒歩2分"},{n:"上本町教室",ad:"大阪市天王寺区上本町6丁目",st:"上本町駅より徒歩1分"}],revs:[{g:"女の子",a:"5歳〜",l:"天王寺教室",t:"個人レッスンでしっかり教えていただけるので上達が早いです。"}],color:"#E91E63",emoji:"🎶"},
    { id:"p3",name:"島村楽器 音楽教室",rating:4.2,rc:45,age:"4歳〜",desc:"楽器店ならではの強み。発表会やコンクール参加の機会も豊富。",courses:[{n:"ピアノ キッズ",p:8800,a:"4歳〜"},{n:"ピアノ ジュニア",p:9900,a:"小学生〜"}],locs:[{n:"イオンモール大阪ドームシティ店",ad:"大阪市西区千代崎3丁目",st:"大正駅より徒歩5分"}],revs:[{g:"男の子",a:"6歳〜",l:"イオンモール大阪ドームシティ店",t:"先生が優しく楽しいレッスンで毎週楽しみにしています。"}],color:"#9C27B0",emoji:"🎼"},
  ],
  "スイミング": [
    { id:"sw1",name:"コナミスポーツクラブ",rating:4.3,rc:95,age:"6ヶ月〜15歳",desc:"段階的な進級制度で着実にステップアップ。ベビーから選手コースまで幅広く対応。",courses:[{n:"ベビースイミング",p:6600,a:"6ヶ月〜3歳"},{n:"キッズスイミング",p:8250,a:"3歳〜15歳"}],locs:[{n:"本店 梅田",ad:"大阪市北区堂山町1-5",st:"梅田駅より徒歩5分"}],revs:[{g:"男の子",a:"4歳〜",l:"本店 梅田",t:"水が苦手だった息子が今ではクロール25m泳げるようになり驚いています。"}],color:"#03A9F4",emoji:"🏊"},
    { id:"sw2",name:"イトマンスイミングスクール",rating:4.5,rc:130,age:"6ヶ月〜",desc:"オリンピック選手を多数輩出した名門。水泳の楽しさと技術を段階的に指導。",courses:[{n:"ベビーコース",p:6050,a:"6ヶ月〜3歳"},{n:"ジュニアコース",p:8250,a:"3歳〜"}],locs:[{n:"玉出校",ad:"大阪市住之江区粉浜1丁目",st:"玉出駅より徒歩3分"}],revs:[{g:"女の子",a:"3歳〜",l:"玉出校",t:"進級テストがあるので子どもなりに目標を持って取り組んでいます。"}],color:"#0097A7",emoji:"🐬"},
    { id:"sw3",name:"ルネサンス スイミング",rating:4.2,rc:68,age:"6ヶ月〜",desc:"楽しく安全に水に親しめるプログラム。コーチの質の高さに定評あり。",courses:[{n:"ベビー",p:7150,a:"6ヶ月〜3歳"},{n:"ジュニア",p:8800,a:"3歳〜"}],locs:[{n:"もりのみやキューズモール校",ad:"大阪市中央区森ノ宮中央2-1-70",st:"森ノ宮駅より徒歩2分"}],revs:[{g:"男の子",a:"5歳〜",l:"もりのみやキューズモール校",t:"水を怖がっていたのが嘘のように今では潜れるようになりました。"}],color:"#26C6DA",emoji:"🌊"},
  ],
  "バレエ": [
    { id:"b1",name:"松山バレエ学校",rating:4.6,rc:45,age:"3歳〜",desc:"日本を代表するバレエ団の直営。クラシックバレエの基礎から本格技術まで。",courses:[{n:"プチバレリーナ",p:8800,a:"3歳〜5歳"},{n:"児童科",p:11000,a:"小学生"}],locs:[{n:"大阪校",ad:"大阪市北区梅田1丁目",st:"梅田駅より徒歩5分"}],revs:[{g:"女の子",a:"4歳〜",l:"大阪校",t:"姿勢がとても良くなり発表会で堂々と踊る姿に成長を感じました。"}],color:"#E91E63",emoji:"🩰"},
    { id:"b2",name:"アンジュバレエアカデミー",rating:4.4,rc:30,age:"3歳〜",desc:"楽しみながらバレエの基礎を学べるアットホームな少人数制教室。",courses:[{n:"プレバレエ",p:6600,a:"3歳〜5歳"},{n:"ジュニアA",p:7700,a:"小1〜3年"},{n:"ジュニアB",p:8800,a:"小4〜6年"}],locs:[{n:"天王寺スタジオ",ad:"大阪市天王寺区上汐3丁目",st:"天王寺駅より徒歩7分"}],revs:[{g:"女の子",a:"5歳〜",l:"天王寺スタジオ",t:"先生が優しくて楽しく通えています。柔軟性がかなり良くなりました。"}],color:"#9C27B0",emoji:"🌸"},
    { id:"b3",name:"法村友井バレエ学校",rating:4.5,rc:38,age:"3歳〜",desc:"大阪の老舗バレエ学校。基礎を大切に、数多くのプロダンサーを輩出。",courses:[{n:"初等科",p:8800,a:"3歳〜小学低学年"},{n:"中等科",p:11000,a:"小学高学年〜"}],locs:[{n:"本校",ad:"大阪市中央区谷町6丁目",st:"谷町六丁目駅より徒歩3分"}],revs:[{g:"女の子",a:"6歳〜",l:"本校",t:"基礎を大切にした指導で確実に上達しています。"}],color:"#C2185B",emoji:"💐"},
  ],
  "空手": [
    { id:"k1",name:"極真会館 大阪支部",rating:4.5,rc:60,age:"4歳〜",desc:"世界最大の空手団体の大阪支部。礼儀作法と強い心を育てる伝統的な空手教育。",courses:[{n:"少年部",p:7700,a:"4歳〜12歳"},{n:"中等部",p:8800,a:"12歳〜15歳"}],locs:[{n:"中央道場",ad:"大阪市中央区瓦屋町3丁目",st:"松屋町駅より徒歩5分"},{n:"天王寺道場",ad:"大阪市天王寺区悲田院町",st:"天王寺駅より徒歩5分"}],revs:[{g:"男の子",a:"5歳〜",l:"中央道場",t:"礼儀正しくなり何事にも最後まで諦めない粘り強さが身につきました。"}],color:"#F44336",emoji:"🥋"},
    { id:"k2",name:"正道会館 大阪本部",rating:4.3,rc:35,age:"4歳〜",desc:"K-1で有名な正道会館の公式道場。実践的な空手と人間教育を両立。",courses:[{n:"キッズ空手",p:6600,a:"4歳〜8歳"},{n:"少年空手",p:7700,a:"8歳〜15歳"}],locs:[{n:"大阪本部",ad:"大阪市北区天神橋4丁目",st:"扇町駅より徒歩3分"}],revs:[{g:"男の子",a:"6歳〜",l:"大阪本部",t:"集中力がつき学校の授業態度も良くなったと言われました。"}],color:"#795548",emoji:"👊"},
    { id:"k3",name:"新極真会 大阪東支部",rating:4.4,rc:28,age:"3歳〜",desc:"礼節を重んじ、心身の鍛錬を通じて子どもの人間力を育む空手道場。",courses:[{n:"幼年部",p:5500,a:"3歳〜6歳"},{n:"少年部",p:7150,a:"6歳〜12歳"}],locs:[{n:"城東道場",ad:"大阪市城東区今福東1丁目",st:"今福鶴見駅より徒歩5分"}],revs:[{g:"男の子",a:"4歳〜",l:"城東道場",t:"怖がりだった息子が自分から挑戦する姿勢が身につきました。"}],color:"#D84315",emoji:"🔥"},
  ],
  "K-POP": [
    { id:"kp0",name:"リディアダンスアカデミー",rating:4.8,rc:45,age:"3歳〜15歳",featured:true,url:"https://re-dia.jp/miyakojima/",
      desc:"K-POPダンスクラスも充実！初心者から経験者まで、最新のK-POP楽曲で楽しくダンス。現役プロダンサー講師200名以上在籍、全国100校以上展開。",
      tags:["K-POPクラス充実","全国100校以上","プロ講師200名以上","初回体験無料","少人数制"],
      genres:["K-POP","ヒップホップ","ジャズ","ロック","ブレイクダンス","ポップ","ワック"],
      courses:[{n:"リトルクラス",p:6600,a:"3歳〜6歳"},{n:"キッズクラス",p:7700,a:"小学生"},{n:"月会員プラン",p:7700,a:"全年齢"},{n:"受け放題プラン",p:27000,a:"全年齢"}],
      locs:[{n:"都島校",ad:"大阪市都島区都島本通3-18-4 サニータウン日新205号",st:"都島駅より徒歩3分",url:"https://re-dia.jp/miyakojima/"},{n:"平野校",ad:"大阪市平野区平野宮町1-4-17 B1階",st:"平野駅より徒歩5分",url:"https://re-dia.jp/hirano/"},{n:"あべの校",ad:"大阪市阿倍野区阿倍野筋1丁目",st:"天王寺駅より徒歩3分",url:"https://re-dia.jp/abeno/"},{n:"福島野田校",ad:"大阪市福島区玉川4-15-11 タマガワファーストビル4F",st:"JR野田駅より徒歩3分",url:"https://re-dia.jp/hukushimanoda/"},{n:"福島校",ad:"大阪市福島区福島5丁目",st:"福島駅より徒歩3分",url:"https://re-dia.jp/hukushima/"},{n:"寺田町校",ad:"大阪市天王寺区大道2丁目",st:"寺田町駅より徒歩3分",url:"https://re-dia.jp/teradacho/"}],
      revs:[{g:"女の子",a:"8歳〜",l:"都島校",t:"K-POPの曲で踊れるのがとても楽しい！先生も優しくて毎週通うのが楽しみです。"},{g:"女の子",a:"10歳〜",l:"あべの校",t:"推しの振付を本格的に学べて最高！ダンスの基礎もしっかり身につきました。"}],
      color:"#E53935",emoji:"🏆"},
    { id:"kp1",name:"NOAダンスアカデミー",rating:4.5,rc:48,age:"4歳〜",desc:"K-POPダンスに特化したクラスが充実。BTSやTWICEの楽曲で楽しくダンス！最新の振付をいち早くレッスンに導入。",courses:[{n:"キッズK-POP",p:8800,a:"4歳〜8歳"},{n:"ジュニアK-POP",p:9900,a:"8歳〜15歳"},{n:"受け放題",p:16500,a:"全年齢"}],locs:[{n:"梅田校",ad:"大阪市北区茶屋町2-16",st:"梅田駅より徒歩3分"}],revs:[{g:"女の子",a:"8歳〜",l:"梅田校",t:"大好きなK-POPの曲で踊れるのが嬉しくて、毎週楽しみにしています。"}],color:"#AB47BC",emoji:"💜"},
    { id:"kp2",name:"ZEAL STUDIOS K-POP",rating:4.3,rc:35,age:"5歳〜",desc:"本場韓国の振付師が監修するK-POPダンスプログラム。アイドルダンスの完コピからオリジナルまで。",courses:[{n:"キッズクラス",p:7700,a:"5歳〜9歳"},{n:"ティーンクラス",p:9350,a:"10歳〜15歳"}],locs:[{n:"心斎橋スタジオ",ad:"大阪市中央区西心斎橋1丁目",st:"心斎橋駅より徒歩3分"}],revs:[{g:"女の子",a:"10歳〜",l:"心斎橋スタジオ",t:"推しグループの振付を本格的に学べて最高です！友達もたくさんできました。"}],color:"#E040FB",emoji:"🎤"},
    { id:"kp3",name:"スタジオAsh K-POPクラス",rating:4.2,rc:22,age:"6歳〜",desc:"少人数制でしっかり学べるK-POPダンスクラス。初心者でも安心のゆっくりペースで指導。",courses:[{n:"入門クラス",p:6600,a:"6歳〜10歳"},{n:"初級クラス",p:7700,a:"8歳〜15歳"}],locs:[{n:"天王寺校",ad:"大阪市阿倍野区阿倍野筋2丁目",st:"天王寺駅より徒歩4分"}],revs:[{g:"女の子",a:"7歳〜",l:"天王寺校",t:"初心者でも丁寧に教えてもらえて、1曲踊れるようになりました！"}],color:"#7E57C2",emoji:"✨"},
  ],
  "リトミック": [
    { id:"rt1",name:"カワイ リトミック教室",rating:4.4,rc:88,age:"1歳〜",desc:"音楽の力で子どもの感性と表現力を育む。ピアノの生演奏に合わせて楽しく身体を動かします。",courses:[{n:"1歳クラス",p:5500,a:"1歳"},{n:"2歳クラス",p:5500,a:"2歳"},{n:"3歳ソルフェージュ",p:6600,a:"3歳"}],locs:[{n:"天王寺教室",ad:"大阪市天王寺区悲田院町",st:"天王寺駅より徒歩2分"},{n:"梅田教室",ad:"大阪市北区梅田1丁目",st:"梅田駅より徒歩4分"}],revs:[{g:"女の子",a:"1歳〜",l:"天王寺教室",t:"音楽に合わせて体を動かすのがとても楽しそうです。リズム感がついてきました。"}],color:"#FF7043",emoji:"🎵"},
    { id:"rt2",name:"ヤマハ音楽教室 ドレミらんど",rating:4.5,rc:120,age:"1歳〜3歳",desc:"親子で楽しめる音楽体験。「ドレミらんど」で音楽の楽しさを感覚的に吸収します。",courses:[{n:"らっきークラス",p:5500,a:"1歳〜2歳"},{n:"ぷっぷるクラス",p:5500,a:"2歳〜3歳"}],locs:[{n:"梅田センター",ad:"大阪市北区梅田1丁目",st:"梅田駅より徒歩3分"},{n:"なんばセンター",ad:"大阪市中央区難波4丁目",st:"なんば駅より徒歩2分"}],revs:[{g:"男の子",a:"1歳〜",l:"梅田センター",t:"親子で一緒に楽しめるのが嬉しい。音楽への興味がぐんぐん広がっています。"}],color:"#FFA726",emoji:"🎶"},
    { id:"rt3",name:"リトミック研究センター認定教室",rating:4.3,rc:42,age:"0歳〜",desc:"0歳から通える本格的リトミック教室。音楽教育の専門家が一人ひとりの発達に合わせた指導。",courses:[{n:"ベビークラス",p:4400,a:"0歳〜1歳"},{n:"ステップ1",p:5500,a:"1歳〜2歳"},{n:"ステップ2",p:5500,a:"2歳〜3歳"}],locs:[{n:"本町教室",ad:"大阪市中央区本町3丁目",st:"本町駅より徒歩3分"}],revs:[{g:"女の子",a:"0歳〜",l:"本町教室",t:"0歳から通い始め、音に対する反応がとても豊かになりました。"}],color:"#66BB6A",emoji:"👶"},
  ],
  "幼児教室": [
    { id:"yj1",name:"ベビーパーク",rating:4.4,rc:95,age:"0歳〜3歳",desc:"「叱らない育児」で知られる親子教室。IQ140以上を目指す独自の知育プログラムで脳を刺激します。",courses:[{n:"Aクラス(0歳2ヶ月〜)",p:15400,a:"0歳〜"},{n:"Bクラス",p:15400,a:"0歳9ヶ月〜"},{n:"Cクラス",p:15400,a:"1歳4ヶ月〜"}],locs:[{n:"天王寺教室",ad:"大阪市阿倍野区阿倍野筋1丁目",st:"天王寺駅より徒歩2分"},{n:"梅田教室",ad:"大阪市北区芝田1丁目",st:"梅田駅より徒歩3分"}],revs:[{g:"男の子",a:"0歳〜",l:"天王寺教室",t:"親子で楽しく学べています。言葉の発達がとても早くなりました。"}],color:"#FF8A65",emoji:"🧒"},
    { id:"yj2",name:"七田式教室",rating:4.3,rc:78,age:"0歳〜6歳",desc:"右脳教育のパイオニア。フラッシュカードや暗唱で子どもの無限の可能性を引き出します。",courses:[{n:"幼児コース",p:15400,a:"0歳〜6歳"},{n:"小学生コース",p:15400,a:"6歳〜12歳"}],locs:[{n:"天王寺教室",ad:"大阪市天王寺区上本町6丁目",st:"上本町駅より徒歩3分"},{n:"本町教室",ad:"大阪市中央区本町3丁目",st:"本町駅より徒歩2分"}],revs:[{g:"女の子",a:"2歳〜",l:"天王寺教室",t:"記憶力がすごく伸びて、絵本をすらすら暗唱するようになりました。"}],color:"#42A5F5",emoji:"📖"},
    { id:"yj3",name:"キッズアカデミー",rating:4.2,rc:55,age:"2歳〜7歳",desc:"「考える力」を育てる知育教室。思考力・記憶力・想像力をゲーム感覚で楽しく伸ばします。",courses:[{n:"Dクラス(2-3歳)",p:15950,a:"2歳〜3歳"},{n:"Tクラス(3-4歳)",p:15950,a:"3歳〜4歳"},{n:"Qクラス(4-5歳)",p:15950,a:"4歳〜5歳"}],locs:[{n:"天王寺教室",ad:"大阪市阿倍野区阿倍野筋1丁目",st:"天王寺駅より徒歩2分"}],revs:[{g:"男の子",a:"3歳〜",l:"天王寺教室",t:"パズルや積み木で楽しく考える力がつきました。集中力もアップ！"}],color:"#26A69A",emoji:"🧩"},
  ],
  "学習塾": [
    { id:"gk1",name:"公文式教室",rating:4.3,rc:250,age:"3歳〜",desc:"自学自習で「ちょうどの学習」。一人ひとりのペースに合わせたプリント学習で基礎学力を徹底的に鍛えます。",courses:[{n:"算数・数学",p:7700,a:"3歳〜"},{n:"国語",p:7700,a:"3歳〜"},{n:"英語",p:8800,a:"3歳〜"}],locs:[{n:"天王寺駅前教室",ad:"大阪市阿倍野区阿倍野筋1丁目",st:"天王寺駅より徒歩2分"},{n:"梅田教室",ad:"大阪市北区芝田1丁目",st:"梅田駅より徒歩5分"}],revs:[{g:"男の子",a:"5歳〜",l:"天王寺駅前教室",t:"自分のペースで進められるので無理なく学力がつきました。計算がとても速くなりました。"}],color:"#1E88E5",emoji:"📝"},
    { id:"gk2",name:"学研教室",rating:4.2,rc:180,age:"3歳〜",desc:"「自分で考える力」を育てる教室。算数・国語の基礎から応用まで、少人数制で丁寧に指導。",courses:[{n:"算数・国語コース",p:8800,a:"年少〜小学生"},{n:"算数・国語・英語コース",p:13200,a:"小学生"}],locs:[{n:"鶴橋教室",ad:"大阪市生野区桃谷1丁目",st:"鶴橋駅より徒歩5分"},{n:"都島教室",ad:"大阪市都島区都島本通3丁目",st:"都島駅より徒歩4分"}],revs:[{g:"女の子",a:"6歳〜",l:"鶴橋教室",t:"算数が苦手でしたが、学研に通い始めてからテストの点数が上がりました。"}],color:"#43A047",emoji:"✏️"},
    { id:"gk3",name:"浜学園",rating:4.6,rc:120,age:"小1〜",desc:"関西最難関中学への合格実績No.1。灘・甲陽・東大寺など最難関校を目指す本格進学塾。",courses:[{n:"マスターコース(小1-3)",p:23100,a:"小1〜小3"},{n:"マスターコース(小4-6)",p:46200,a:"小4〜小6"}],locs:[{n:"上本町本部",ad:"大阪市天王寺区上本町6丁目",st:"上本町駅より徒歩1分"},{n:"天王寺教室",ad:"大阪市阿倍野区阿倍野筋1丁目",st:"天王寺駅より徒歩3分"}],revs:[{g:"男の子",a:"9歳〜",l:"上本町本部",t:"厳しいですがしっかり力がつきます。偏差値が大きく伸びました。"}],color:"#5C6BC0",emoji:"🎓"},
  ],
};

const CATS = [
  {name:"ダンス",count:286,icon:"💃"},
  {name:"サッカー",count:243,icon:"⚽"},
  {name:"英語・英会話",count:511,icon:"🌍"},
  {name:"ピアノ",count:362,icon:"🎹"},
  {name:"スイミング",count:78,icon:"🏊"},
  {name:"バレエ",count:152,icon:"🩰"},
  {name:"空手",count:100,icon:"🥋"},
  {name:"K-POP",count:85,icon:"💜"},
  {name:"リトミック",count:99,icon:"🎵"},
  {name:"幼児教室",count:109,icon:"🧒"},
  {name:"学習塾",count:820,icon:"📝"},
];

const INFO = {
  "ダンス":{fee:"5,000〜10,000円",age:"3歳〜",skills:"リズム感・柔軟性・集中力・協調性",desc:"中学校で必修化されたダンス。音楽に合わせて身体を動かしリズム感や柔軟性、持久力が身につきます。リディアダンスアカデミーのように大きな会場で発表会を行うスクールもあります。"},
  "サッカー":{fee:"3,000〜8,000円",age:"3歳〜",skills:"体力・瞬発力・協調性・判断力",desc:"チームプレーで協調性やコミュニケーション力が自然と身につく人気スポーツ。"},
  "英語・英会話":{fee:"8,000〜15,000円",age:"1歳半〜",skills:"リスニング・発音・異文化理解",desc:"幼少期からの英語教育は発音やリスニング力の向上に効果的。グローバル社会の基盤を作ります。"},
  "ピアノ":{fee:"6,000〜10,000円",age:"3歳〜",skills:"音感・集中力・忍耐力・表現力",desc:"両手を別々に動かすピアノは脳の発達に効果的。コツコツ練習する忍耐力も育ちます。"},
  "スイミング":{fee:"6,000〜9,000円",age:"6ヶ月〜",skills:"体力・持久力・心肺機能",desc:"習い事人気No.1。全身運動で体力と心肺機能が向上し水難事故防止にも役立ちます。"},
  "バレエ":{fee:"6,000〜12,000円",age:"3歳〜",skills:"柔軟性・姿勢・表現力・美的感覚",desc:"美しい姿勢と柔軟性が身につくバレエ。表現力や芸術的感性を育てます。"},
  "空手":{fee:"5,000〜8,000円",age:"3歳〜",skills:"礼儀・集中力・忍耐力・精神力",desc:"礼儀作法を重視する空手は心身の鍛錬に最適。護身術としても役立ちます。"},
  "K-POP":{fee:"7,000〜16,000円",age:"4歳〜",skills:"リズム感・表現力・協調性・自信",desc:"大人気のK-POPダンス。好きなアーティストの曲で踊ることでモチベーション高く楽しくダンスを学べます。"},
  "リトミック":{fee:"4,000〜6,000円",age:"0歳〜",skills:"リズム感・表現力・社会性・感性",desc:"音楽の力で感性と表現力を育む幼児教育。親子で楽しめるプログラムが多く、0歳から始められます。"},
  "幼児教室":{fee:"10,000〜16,000円",age:"0歳〜",skills:"記憶力・思考力・集中力・言語力",desc:"脳の発達が著しい幼児期に最適な知育プログラム。考える力や記憶力を遊びながら伸ばします。"},
  "学習塾":{fee:"7,000〜46,000円",age:"3歳〜",skills:"基礎学力・自学力・思考力・受験対策",desc:"公文式や学研教室の基礎学力から、浜学園のような難関中学受験対策まで、目的に合わせて選べます。"},
};

const AREAS=[{n:"北区",c:42},{n:"中央区",c:43},{n:"天王寺区",c:18},{n:"西区",c:20},{n:"淀川区",c:13},{n:"都島区",c:12},{n:"阿倍野区",c:10},{n:"住吉区",c:13},{n:"平野区",c:11}];

// ── UI Components ──
function Stars({r,c}) {
  if(!r) return <span style={{color:"#999",fontSize:13}}>口コミはありません</span>;
  return (
    <span style={{display:"inline-flex",alignItems:"center",gap:3}}>
      {[...Array(5)].map((_,i)=>(
        <span key={i} style={{color:i<Math.round(r)?"#FFB300":"#ddd",fontSize:15}}>{i<Math.round(r)?"★":"☆"}</span>
      ))}
      <b style={{color:"#333",fontSize:14,marginLeft:3}}>{r}</b>
      <span style={{color:"#888",fontSize:12}}>({c}件)</span>
    </span>
  );
}

function Acc({title,color,open,toggle,children}) {
  return (
    <div style={{padding:"10px 22px 0"}}>
      <button onClick={toggle} style={{background:"none",border:`1px solid ${color||"#e0e0e0"}33`,borderRadius:10,padding:"9px 14px",width:"100%",cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"space-between",fontSize:13,fontWeight:700,color:color||"#444"}}>
        <span>{title}</span><span style={{transform:open?"rotate(180deg)":"",transition:".2s"}}>▼</span>
      </button>
      {open && <div style={{marginTop:10}}>{children}</div>}
    </div>
  );
}

function CRow({c,color,i}) {
  return (
    <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"9px 12px",background:i%2===0?"#fafbfc":"#fff",borderRadius:8,marginBottom:3}}>
      <div><div style={{fontSize:13,fontWeight:600,color:"#333"}}>{c.n}</div><div style={{fontSize:11,color:"#999"}}>{c.a}</div></div>
      <div style={{fontSize:15,fontWeight:800,color:color}}>{c.p ? `¥${c.p.toLocaleString()}` : "要問合せ"}{c.p && <span style={{fontSize:10,fontWeight:400,color:"#999"}}>/月</span>}</div>
    </div>
  );
}

function LocRow({l,color,last}) {
  return (<div style={{padding:"8px 0",borderBottom:last?"none":"1px solid #f0f0f0"}}>{l.url?<a href={l.url} target="_blank" rel="noopener noreferrer" style={{fontSize:13,fontWeight:700,color:"#1565C0",textDecoration:"none",display:"inline-flex",alignItems:"center",gap:4}}>📍 {l.n} <span style={{fontSize:10,opacity:.7}}>↗</span></a>:<div style={{fontSize:13,fontWeight:700,color:"#333"}}>📍 {l.n}</div>}<div style={{fontSize:11,color:"#888",marginTop:2}}>{l.ad}</div><div style={{fontSize:11,color:color,marginTop:2}}>🚃 {l.st}</div></div>);
}

function Featured({s,catName}){const[exp,setExp]=useState(false);const[loc,setLoc]=useState(false);const[ri,setRi]=useState(0);
return (<article style={{background:"linear-gradient(135deg,#fff,#FFF8F7)",borderRadius:20,boxShadow:`0 8px 40px ${s.color}18`,border:`2px solid ${s.color}22`,position:"relative",animation:"fi .6s ease"}}>
  <div style={{position:"absolute",top:0,left:22,background:"linear-gradient(135deg,#FFD700,#FFA000)",color:"#fff",fontWeight:900,fontSize:12,padding:"5px 12px 8px",borderRadius:"0 0 10px 10px",boxShadow:"0 4px 12px rgba(255,160,0,.3)",zIndex:2}}>👑 おすすめNo.1</div>
  <header style={{padding:"38px 22px 0",display:"flex",alignItems:"center",gap:14}}><div style={{width:68,height:68,borderRadius:16,background:`linear-gradient(135deg,${s.color},${s.color}cc)`,display:"flex",alignItems:"center",justifyContent:"center",fontSize:34,flexShrink:0,boxShadow:`0 6px 20px ${s.color}44`}}>🏆</div><div style={{flex:1}}><h2 style={{margin:0,fontSize:19,fontWeight:900,color:"#1a1a2e"}}>{s.name}</h2><div style={{display:"flex",alignItems:"center",gap:6,marginTop:6,flexWrap:"wrap"}}><span style={{background:`${s.color}18`,color:s.color,padding:"3px 9px",borderRadius:20,fontSize:11,fontWeight:700}}>{catName}</span><span style={{color:"#666",fontSize:12}}>{s.age}</span><span style={{background:"#4CAF5018",color:"#2E7D32",padding:"2px 8px",borderRadius:20,fontSize:10,fontWeight:700}}>✅ 全国100校以上</span></div></div></header>
  <div style={{padding:"10px 22px 0"}}><Stars r={s.rating} c={s.rc}/></div>
  <p style={{padding:"10px 22px 0",margin:0,fontSize:14,color:"#444",lineHeight:1.8}}>{s.desc}</p>
  <div style={{padding:"10px 22px 0",display:"flex",flexWrap:"wrap",gap:4}}>{s.tags.map((f,i)=><span key={i} style={{background:"#f5f5f5",border:"1px solid #e8e8e8",padding:"3px 9px",borderRadius:20,fontSize:11,fontWeight:600,color:"#555"}}>✓ {f}</span>)}</div>
  <div style={{padding:"8px 22px 0",display:"flex",flexWrap:"wrap",gap:4}}>{s.genres.map((g,i)=><span key={i} style={{background:`${s.color}10`,color:s.color,padding:"2px 7px",borderRadius:12,fontSize:10,fontWeight:600,border:`1px solid ${s.color}20`}}>{g}</span>)}</div>
  {s.revs.length>0&&<div style={{margin:"14px 22px 0",background:"#FFF8F7",borderRadius:12,padding:14,borderLeft:`4px solid ${s.color}`}}><div style={{display:"flex",alignItems:"center",gap:6,marginBottom:6}}><div style={{width:28,height:28,borderRadius:"50%",background:`${s.color}44`,display:"flex",alignItems:"center",justifyContent:"center",fontSize:12}}>👤</div><span style={{fontSize:11,color:"#888"}}>{s.revs[ri].g}／{s.revs[ri].a}　{s.revs[ri].l}</span></div><p style={{margin:0,fontSize:13,color:"#444",lineHeight:1.7}}>「{s.revs[ri].t}」</p>{s.revs.length>1&&<div style={{display:"flex",gap:5,marginTop:8,justifyContent:"center"}}>{s.revs.map((_,i)=><button key={i} onClick={()=>setRi(i)} style={{width:7,height:7,borderRadius:"50%",border:"none",background:i===ri?s.color:"#ddd",cursor:"pointer"}}/>)}</div>}</div>}
  <Acc title={`📋 コース・料金（${s.courses.length}件）`} color={s.color} open={exp} toggle={()=>setExp(!exp)}>{s.courses.map((c,i)=><CRow key={i} c={c} color={s.color} i={i}/>)}</Acc>
  <Acc title={`📍 教室（${s.locs.length}校）`} color={s.color} open={loc} toggle={()=>setLoc(!loc)}>{s.locs.map((l,i)=><LocRow key={i} l={l} color={s.color} last={i===s.locs.length-1}/>)}</Acc>
  <div style={{padding:"18px 22px"}}><a href={s.url} target="_blank" rel="noopener noreferrer" style={{display:"flex",alignItems:"center",justifyContent:"center",gap:8,padding:"14px",borderRadius:14,background:`linear-gradient(135deg,${s.color},${s.color}cc)`,color:"#fff",fontWeight:800,fontSize:14,textDecoration:"none",boxShadow:`0 6px 20px ${s.color}44`}}>📝 無料体験レッスンに申し込む</a></div>
</article>);}

function Card({s,idx,catName}){const[exp,setExp]=useState(false);const[loc,setLoc]=useState(false);
return (<article style={{background:"#fff",borderRadius:16,boxShadow:"0 2px 14px rgba(0,0,0,.06)",overflow:"hidden",animation:`fi .4s ease ${idx*.06}s both`,border:"1px solid #f0f0f0"}}>
  <header style={{display:"flex",alignItems:"center",padding:"16px 20px 0",gap:12}}><div style={{width:52,height:52,borderRadius:13,background:`linear-gradient(135deg,${s.color}22,${s.color}44)`,display:"flex",alignItems:"center",justifyContent:"center",fontSize:26,flexShrink:0,border:`2px solid ${s.color}33`}}>{s.emoji}</div><div style={{flex:1,minWidth:0}}><h3 style={{margin:0,fontSize:16,fontWeight:800,color:"#1a1a2e"}}>{s.name}</h3><div style={{display:"flex",alignItems:"center",gap:6,marginTop:4,flexWrap:"wrap"}}><span style={{background:`${s.color}18`,color:s.color,padding:"2px 8px",borderRadius:20,fontSize:11,fontWeight:700}}>{catName}</span><span style={{color:"#666",fontSize:12}}>{s.age}</span></div></div></header>
  <div style={{padding:"8px 20px 0"}}><Stars r={s.rating} c={s.rc}/></div>
  <p style={{padding:"8px 20px 0",margin:0,fontSize:13,color:"#555",lineHeight:1.7}}>{s.desc}</p>
  {s.revs?.[0]&&<div style={{margin:"12px 20px 0",background:"#f8f9fb",borderRadius:10,padding:12,borderLeft:`3px solid ${s.color}`}}><div style={{display:"flex",alignItems:"center",gap:6,marginBottom:4}}><div style={{width:24,height:24,borderRadius:"50%",background:`${s.color}44`,display:"flex",alignItems:"center",justifyContent:"center",fontSize:10}}>👤</div><span style={{fontSize:11,color:"#888"}}>{s.revs[0].g}／{s.revs[0].a}　{s.revs[0].l}</span></div><p style={{margin:0,fontSize:12,color:"#555",lineHeight:1.6,fontStyle:"italic"}}>「{s.revs[0].t}」</p></div>}
  <Acc title={`📋 コース・料金（${s.courses.length}件）`} color={s.color} open={exp} toggle={()=>setExp(!exp)}>{s.courses.map((c,i)=><CRow key={i} c={c} color={s.color} i={i}/>)}</Acc>
  <Acc title={`📍 教室（${s.locs.length}件）`} open={loc} toggle={()=>setLoc(!loc)}>{s.locs.map((l,i)=><LocRow key={i} l={l} color={s.color} last={i===s.locs.length-1}/>)}</Acc>
  <div style={{padding:"18px 20px"}}>
    {s.featured&&(<a href={s.trialUrl||s.url} target="_blank" rel="noopener noreferrer" style={{display:'block',background:'#E53935',color:'#fff',textAlign:'center',padding:'12px 20px',borderRadius:'8px',fontWeight:'900',fontSize:'14px',textDecoration:'none',marginTop:'12px',letterSpacing:'.5px'}}>🎵 無料体験を申し込む →</a>)}
    {!s.featured&&(s.trialUrl||s.url)?(<a href={s.trialUrl||s.url} target="_blank" rel="noopener noreferrer" style={{display:"block",width:"100%",padding:"13px",borderRadius:12,background:`linear-gradient(135deg,${s.color},${s.color}cc)`,color:"#fff",fontWeight:700,fontSize:14,textDecoration:"none",textAlign:"center",boxShadow:`0 4px 16px ${s.color}44`}}>📝 無料体験レッスンに申し込む</a>):!s.featured?(<button style={{width:"100%",padding:"13px",borderRadius:12,border:"none",background:`linear-gradient(135deg,${s.color},${s.color}cc)`,color:"#fff",fontWeight:700,fontSize:14,cursor:"pointer",boxShadow:`0 4px 16px ${s.color}44`}}>📝 無料体験レッスンに申し込む</button>):null}
  </div>
</article>);}

function FAQ({q,a}){const[o,setO]=useState(false);return (<div style={{background:"#fff",borderRadius:12,marginBottom:8,border:"1px solid #eee"}}><button onClick={()=>setO(!o)} style={{width:"100%",padding:"14px 18px",border:"none",background:"none",cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"space-between",fontSize:14,fontWeight:600,color:"#333",textAlign:"left",gap:10}}><span>{q}</span><span style={{transform:o?"rotate(180deg)":"",transition:".2s",flexShrink:0}}>▼</span></button>{o&&<div style={{padding:"0 18px 14px",fontSize:14,color:"#666",lineHeight:1.8}}>{a}</div>}</div>);}

export default function App(){
  const[cat,setCat]=useState("ダンス");
  const[search,setSearch]=useState("");
  const[showArea,setShowArea]=useState(false);
  const[area,setArea]=useState(null);

  const schools=S[cat]||[];
  const featured=schools.find(s=>s.featured);
  const regular=schools.filter(s=>!s.featured).filter(s=>!search||s.name.includes(search)||s.desc.includes(search));
  const info=INFO[cat]||{};
  const catData=CATS.find(c=>c.name===cat);

  useEffect(()=>{
    const ld={"@context":"https://schema.org","@type":"ItemList","name":`大阪市のおすすめ${cat}スクール一覧`,"numberOfItems":schools.length,"itemListElement":schools.map((s,i)=>({"@type":"ListItem","position":i+1,"item":{"@type":"EducationalOrganization","name":s.name,"description":s.desc,...(s.rating?{"aggregateRating":{"@type":"AggregateRating","ratingValue":String(s.rating),"reviewCount":String(s.rc)}}:{})}}))};
    const sc=document.createElement("script");sc.type="application/ld+json";sc.textContent=JSON.stringify(ld);document.head.appendChild(sc);
    document.title=`大阪市の${cat}スクールおすすめ一覧【2026年】| コドモならいごと`;
    return()=>sc.remove();
  },[cat]);

  return (<div style={{fontFamily:"'Noto Sans JP','Hiragino Sans',sans-serif",background:"#f5f6fa",minHeight:"100vh"}}>
    <style>{`@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;500;600;700;800;900&display=swap');*{box-sizing:border-box;margin:0;padding:0}@keyframes fi{from{opacity:0;transform:translateY(20px)}to{opacity:1;transform:translateY(0)}}@keyframes sh{0%{background-position:-200% 0}100%{background-position:200% 0}}::-webkit-scrollbar{height:4px}::-webkit-scrollbar-thumb{background:#ccc;border-radius:4px}`}</style>

    <header style={{background:"linear-gradient(135deg,#2a7cc8,#0D47A1)",color:"#fff",position:"sticky",top:0,zIndex:100,boxShadow:"0 4px 20px rgba(0,0,0,.15)"}}><div style={{maxWidth:1100,margin:"0 auto",padding:"12px 20px",display:"flex",alignItems:"center",justifyContent:"space-between"}}><a href="/" style={{display:"flex",alignItems:"center",gap:10,textDecoration:"none",color:"inherit"}}><span style={{fontSize:26}}>🧒</span><div><div style={{fontSize:18,fontWeight:900}}>コドモならいごと</div><div style={{fontSize:10,opacity:.8}}>子供の習い事を口コミで比較</div></div></a><span style={{fontSize:12,opacity:.9}}>📍 大阪市</span></div></header>

    <nav aria-label="パンくず" style={{maxWidth:1100,margin:"0 auto",padding:"12px 20px"}}><div style={{fontSize:12,color:"#888"}}><a href="#" style={{color:"#2a7cc8",textDecoration:"none"}}>トップ</a> › <a href="#" style={{color:"#2a7cc8",textDecoration:"none"}}>{cat}</a> › <a href="#" style={{color:"#2a7cc8",textDecoration:"none"}}>大阪府</a> › <span style={{color:"#666"}}>大阪市</span></div></nav>

    <div style={{maxWidth:1100,margin:"0 auto",padding:"0 20px"}}><div style={{background:"linear-gradient(135deg,#E3F2FD,#BBDEFB,#E8F5E9)",borderRadius:20,padding:"28px 24px",position:"relative",overflow:"hidden"}}>
      <div style={{position:"absolute",right:-10,top:-10,fontSize:100,opacity:.1,transform:"rotate(-15deg)"}}>{catData?.icon}</div>
      <h1 style={{fontSize:22,fontWeight:900,color:"#1a1a2e",lineHeight:1.4,margin:0}}>大阪市の<span style={{color:"#2a7cc8"}}>{cat}スクール</span><br/>おすすめ一覧<span style={{fontSize:13,fontWeight:400,color:"#888"}}>【2026年最新】</span></h1>
      <div style={{display:"flex",gap:12,marginTop:14,flexWrap:"wrap"}}>
        <div style={{background:"#fff",borderRadius:12,padding:"8px 14px",boxShadow:"0 2px 8px rgba(0,0,0,.06)"}}><div style={{fontSize:10,color:"#888"}}>掲載数</div><div style={{fontSize:20,fontWeight:900,color:"#2a7cc8"}}>{catData?.count}<span style={{fontSize:11,fontWeight:400}}>件</span></div></div>
        <div style={{background:"#fff",borderRadius:12,padding:"8px 14px",boxShadow:"0 2px 8px rgba(0,0,0,.06)"}}><div style={{fontSize:10,color:"#888"}}>月謝相場</div><div style={{fontSize:14,fontWeight:700,color:"#E65100"}}>{info.fee}</div></div>
        <div style={{background:"#fff",borderRadius:12,padding:"8px 14px",boxShadow:"0 2px 8px rgba(0,0,0,.06)"}}><div style={{fontSize:10,color:"#888"}}>対象</div><div style={{fontSize:14,fontWeight:700,color:"#333"}}>{info.age}</div></div>
      </div>
      <div style={{marginTop:16}}><input type="text" placeholder="🔍 スクール名で検索..." value={search} onChange={e=>setSearch(e.target.value)} style={{width:"100%",padding:"11px 16px",borderRadius:12,border:"2px solid #e0e0e0",fontSize:14,outline:"none",background:"#fff"}} onFocus={e=>e.target.style.borderColor="#2a7cc8"} onBlur={e=>e.target.style.borderColor="#e0e0e0"}/></div>
    </div></div>

    {/* Category Tabs - scrollable */}
    <nav style={{maxWidth:1100,margin:"0 auto",padding:"18px 20px 0"}}>
      <h2 style={{fontSize:14,fontWeight:700,color:"#333",marginBottom:10}}>🏷️ 習い事の種類</h2>
      <div style={{display:"flex",gap:7,overflowX:"auto",paddingBottom:8}}>
        {CATS.map(c=><button key={c.name} onClick={()=>{setCat(c.name);setSearch("");}} style={{display:"inline-flex",alignItems:"center",gap:5,padding:"7px 14px",borderRadius:24,whiteSpace:"nowrap",cursor:"pointer",border:cat===c.name?"2px solid #2a7cc8":"2px solid #e8e8e8",background:cat===c.name?"linear-gradient(135deg,#2a7cc8,#1565C0)":"#fff",color:cat===c.name?"#fff":"#555",fontWeight:cat===c.name?700:500,fontSize:13,transition:"all .2s",boxShadow:cat===c.name?"0 4px 12px rgba(42,124,200,.3)":"none"}}><span>{c.icon}</span><span>{c.name}</span><span style={{fontSize:11,opacity:.8}}>({c.count})</span></button>)}
      </div>
    </nav>

    <div style={{maxWidth:1100,margin:"0 auto",padding:"14px 20px 0"}}><button onClick={()=>setShowArea(!showArea)} style={{display:"flex",alignItems:"center",gap:8,padding:"9px 16px",borderRadius:12,border:"2px solid #e0e0e0",background:"#fff",cursor:"pointer",fontSize:13,fontWeight:600,color:"#444"}}>📍 エリア絞り込み{area?`：${area}`:""}<span style={{transform:showArea?"rotate(180deg)":"",transition:".2s",fontSize:12}}>▼</span></button>
      {showArea&&<div style={{marginTop:8,display:"flex",flexWrap:"wrap",gap:6,background:"#fff",padding:14,borderRadius:12,boxShadow:"0 4px 16px rgba(0,0,0,.08)",animation:"fi .2s ease"}}><button onClick={()=>{setArea(null);setShowArea(false);}} style={{padding:"5px 12px",borderRadius:20,border:!area?"2px solid #2a7cc8":"1px solid #e0e0e0",background:!area?"#E3F2FD":"#fff",color:!area?"#2a7cc8":"#666",fontSize:12,fontWeight:600,cursor:"pointer"}}>全エリア</button>{AREAS.map(a2=><button key={a2.n} onClick={()=>{setArea(a2.n);setShowArea(false);}} style={{padding:"5px 12px",borderRadius:20,border:area===a2.n?"2px solid #2a7cc8":"1px solid #e0e0e0",background:area===a2.n?"#E3F2FD":"#fff",color:area===a2.n?"#2a7cc8":"#666",fontSize:12,fontWeight:500,cursor:"pointer"}}>{a2.n}({a2.c})</button>)}</div>}
    </div>

    <div style={{maxWidth:1100,margin:"0 auto",padding:"18px 20px 0",display:"flex",alignItems:"center",justifyContent:"space-between"}}><div style={{fontSize:14,color:"#666"}}><span style={{fontWeight:800,fontSize:20,color:"#2a7cc8"}}>{regular.length+(featured?1:0)}</span> 件のスクール</div></div>

    <main style={{maxWidth:1100,margin:"0 auto",padding:"14px 20px 40px",display:"flex",flexDirection:"column",gap:18}}>
      {featured&&<Featured s={featured} catName={cat}/>}
      {regular.map((s,i)=><Card key={s.id} s={s} idx={i} catName={cat}/>)}
    </main>

    <section style={{background:"#fff",borderTop:"1px solid #eee",padding:"36px 20px"}}><div style={{maxWidth:1100,margin:"0 auto"}}>
      <h2 style={{fontSize:20,fontWeight:800,color:"#1a1a2e",marginBottom:14}}>{catData?.icon} {cat}スクールってどんなところ？</h2>
      <p style={{fontSize:14,color:"#555",lineHeight:2}}>{info.desc}</p>
      <div style={{marginTop:18,display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(180px,1fr))",gap:10}}>
        <div style={{background:"#FFF3E0",borderRadius:14,padding:14,textAlign:"center"}}><div style={{fontSize:11,color:"#888"}}>💰 月謝の相場</div><div style={{fontSize:16,fontWeight:800,color:"#E65100"}}>{info.fee}</div></div>
        <div style={{background:"#E8F5E9",borderRadius:14,padding:14,textAlign:"center"}}><div style={{fontSize:11,color:"#888"}}>👶 対象年齢</div><div style={{fontSize:16,fontWeight:800,color:"#2E7D32"}}>{info.age}</div></div>
        <div style={{background:"#E3F2FD",borderRadius:14,padding:14,textAlign:"center"}}><div style={{fontSize:11,color:"#888"}}>✨ 身につくスキル</div><div style={{fontSize:12,fontWeight:700,color:"#1565C0",lineHeight:1.6}}>{info.skills}</div></div>
      </div>
    </div></section>

    <section style={{background:"#f5f6fa",padding:"36px 20px"}}><div style={{maxWidth:1100,margin:"0 auto"}}>
      <h2 style={{fontSize:20,fontWeight:800,color:"#1a1a2e",marginBottom:18}}>❓ よくある質問</h2>
      <FAQ q={`大阪市で人気の${cat}スクールは？`} a={`${schools.slice(0,3).map(s=>`${s.name}（${s.rating?s.rating+'点':'-'}）`).join('、')}などが人気です。ぜひ体験レッスンにご参加ください。`}/>
      <FAQ q={`${cat}スクールの月謝はいくら？`} a={`大阪市の${cat}スクールの月謝相場は${info.fee}です。入会金等は各スクールにお問い合わせください。`}/>
      <FAQ q={`子どもに${cat}を習わせるメリットは？`} a={`${info.skills}などのスキルが身につきます。${info.desc}`}/>
      {cat==="ダンス"&&<FAQ q="リディアダンスアカデミーの料金は？" a="月会員プラン（回数制）と受け放題プランがあります。初回体験無料、2回目以降も1回1,080円で体験可能です。"/>}
    </div></section>



    <section style={{background:"#fff",padding:"36px 20px",borderTop:"1px solid #f0f0f0"}}><div style={{maxWidth:1100,margin:"0 auto"}}>
      <h2 style={{fontSize:20,fontWeight:900,color:"#1a1a2e",marginBottom:14}}>📍 大阪市の子供ダンス習い事事情</h2>
      <p style={{fontSize:14,color:"#555",lineHeight:2,marginBottom:20}}>大阪市内には都島・天王寺・梅田・福島・平野・城東など各エリアにダンス教室が点在しています。大阪メトロの路線網が発達しているため、駅直結・徒歩圏内のスクールを選びやすい環境です。特に天王寺・梅田エリアは複数のスクールが集中しており比較しやすいです。</p>
      <div style={{background:"#f8f9fb",borderRadius:14,padding:"16px 20px",border:"1px solid #e8f0fe",marginBottom:20}}>
        <div style={{fontSize:13,fontWeight:700,color:"#1565C0",marginBottom:8}}>📝 詳しい選び方はこちら</div>
        <a href="/blog/osaka-kids-dance-school-ranking" style={{fontSize:14,fontWeight:700,color:"#1565C0",textDecoration:"none"}}>→ 大阪市のダンス教室ランキングを詳しく見る</a>
      </div>
      <h2 style={{fontSize:20,fontWeight:900,color:"#1a1a2e",marginBottom:14}}>❓ 大阪市のダンス教室 よくある質問</h2>
      <div style={{background:"#fff",border:"1px solid #e0e0e0",borderRadius:12,marginBottom:8}}><button onClick={()=>{}} style={{width:"100%",padding:"14px 18px",border:"none",background:"none",cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"space-between",fontSize:14,fontWeight:600,color:"#333",textAlign:"left",gap:10}}><span>Q. 大阪市でダンス教室に通うのにかかる費用は？</span></button><div style={{padding:"0 18px 14px",fontSize:14,color:"#666",lineHeight:1.8}}>A. 月謝は5,000〜10,000円が相場です。入会金0〜11,000円、発表会費用（年1回）5,000〜30,000円が別途かかる場合があります。リディアダンスアカデミーは月会員プラン5,500円〜で、発表会費用の追加請求がありません。</div></div><div style={{background:"#fff",border:"1px solid #e0e0e0",borderRadius:12,marginBottom:8}}><button onClick={()=>{}} style={{width:"100%",padding:"14px 18px",border:"none",background:"none",cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"space-between",fontSize:14,fontWeight:600,color:"#333",textAlign:"left",gap:10}}><span>Q. 大阪市でおすすめのキッズダンス教室は？</span></button><div style={{padding:"0 18px 14px",fontSize:14,color:"#666",lineHeight:1.8}}>A. リディアダンスアカデミー（口コミ4.8・市内6校）、JDACダンススクール（市内8校）、セイハダンスアカデミー（パパイヤ鈴木監修）が人気上位です。まずは無料体験から参加しましょう。</div></div><div style={{background:"#fff",border:"1px solid #e0e0e0",borderRadius:12,marginBottom:8}}><button onClick={()=>{}} style={{width:"100%",padding:"14px 18px",border:"none",background:"none",cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"space-between",fontSize:14,fontWeight:600,color:"#333",textAlign:"left",gap:10}}><span>Q. 大阪市内の何歳からダンスを習わせられますか？</span></button><div style={{padding:"0 18px 14px",fontSize:14,color:"#666",lineHeight:1.8}}>A. 2〜3歳から通えるスクールがあります。セイハダンスアカデミーは2歳から、リディアダンスアカデミーは3歳からのクラスを設けています。</div></div><div style={{background:"#fff",border:"1px solid #e0e0e0",borderRadius:12,marginBottom:8}}><button onClick={()=>{}} style={{width:"100%",padding:"14px 18px",border:"none",background:"none",cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"space-between",fontSize:14,fontWeight:600,color:"#333",textAlign:"left",gap:10}}><span>Q. 大阪市でK-POPダンスを子供に習わせるには？</span></button><div style={{padding:"0 18px 14px",fontSize:14,color:"#666",lineHeight:1.8}}>A. リディアダンスアカデミー・NOAダンスアカデミー・ZEAL STUDIOSがK-POPクラスを充実させています。梅田・心斎橋・都島・天王寺エリアに校舎があります。</div></div><div style={{background:"#fff",border:"1px solid #e0e0e0",borderRadius:12,marginBottom:8}}><button onClick={()=>{}} style={{width:"100%",padding:"14px 18px",border:"none",background:"none",cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"space-between",fontSize:14,fontWeight:600,color:"#333",textAlign:"left",gap:10}}><span>Q. 大阪市内で土日に通えるダンス教室はありますか？</span></button><div style={{padding:"0 18px 14px",fontSize:14,color:"#666",lineHeight:1.8}}>A. 多くのスクールが土日クラスを設けています。共働き家庭でも通いやすい週末クラスがあるか、各スクールに体験予約時に確認しましょう。</div></div>
    </div></section>
    <section style={{background:"#fff",padding:"36px 20px",borderTop:"1px solid #eee"}}><div style={{maxWidth:1100,margin:"0 auto"}}>
      <h2 style={{fontSize:20,fontWeight:900,color:"#1a1a2e",marginBottom:18}}>💡 大阪市でダンス教室を選ぶポイント</h2>
      <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(200px,1fr))",gap:12,marginBottom:24}}>
        <div style={{background:"#E3F2FD",borderRadius:14,padding:16}}><div style={{fontSize:13,fontWeight:800,color:"#1565C0",marginBottom:6}}>① 通いやすさを確認</div><div style={{fontSize:13,color:"#444",lineHeight:1.8}}>自宅・学校から徒歩・自転車で通える距離かを優先。長距離通学は親子ともに負担になります。</div></div>
        <div style={{background:"#E8F5E9",borderRadius:14,padding:16}}><div style={{fontSize:13,fontWeight:800,color:"#2E7D32",marginBottom:6}}>② 体験レッスンで確認</div><div style={{fontSize:13,color:"#444",lineHeight:1.8}}>入会前に必ず体験レッスンへ。子供が「また行きたい！」と言えるかどうかが最重要です。</div></div>
        <div style={{background:"#FFF3E0",borderRadius:14,padding:16}}><div style={{fontSize:13,fontWeight:800,color:"#E65100",marginBottom:6}}>③ クラス分けを確認</div><div style={{fontSize:13,color:"#444",lineHeight:1.8}}>年齢・レベル別クラスが充実しているスクールほど、子供のペースに合わせた指導が受けられます。</div></div>
        <div style={{background:"#F3E5F5",borderRadius:14,padding:16}}><div style={{fontSize:13,fontWeight:800,color:"#6A1B9A",marginBottom:6}}>④ 発表会の有無</div><div style={{fontSize:13,color:"#444",lineHeight:1.8}}>年1〜2回の発表会は子供の目標・達成感に直結。費用（衣装代）も事前確認しましょう。</div></div>
      </div>
      <div style={{background:"#f8f9fb",borderRadius:14,padding:16,border:"1px solid #e8f0fe"}}>
        <div style={{fontSize:13,fontWeight:700,color:"#333",marginBottom:10}}>📝 関連コラム・選び方ガイド</div>
        <div style={{display:"flex",flexWrap:"wrap",gap:8}}>
          <a href="/blog/kids-dance-age-guide" style={{padding:"6px 14px",background:"#fff",borderRadius:20,fontSize:12,color:"#1565C0",textDecoration:"none",border:"1px solid #BBDEFB",fontWeight:600,whiteSpace:"nowrap"}}>何歳からダンスを始める？</a>
          <a href="/blog/osaka-kids-dance-school-ranking" style={{padding:"6px 14px",background:"#fff",borderRadius:20,fontSize:12,color:"#1565C0",textDecoration:"none",border:"1px solid #BBDEFB",fontWeight:600,whiteSpace:"nowrap"}}>大阪ダンス教室ランキング</a>
          <a href="/blog/kids-hiphop-dance-guide" style={{padding:"6px 14px",background:"#fff",borderRadius:20,fontSize:12,color:"#1565C0",textDecoration:"none",border:"1px solid #BBDEFB",fontWeight:600,whiteSpace:"nowrap"}}>ヒップホップ教室の選び方</a>
          <a href="/blog/kids-kpop-dance-school" style={{padding:"6px 14px",background:"#fff",borderRadius:20,fontSize:12,color:"#1565C0",textDecoration:"none",border:"1px solid #BBDEFB",fontWeight:600,whiteSpace:"nowrap"}}>K-POPダンス教室おすすめ</a>
          <a href="/blog" style={{padding:"6px 14px",background:"#E3F2FD",borderRadius:20,fontSize:12,color:"#1565C0",textDecoration:"none",border:"1px solid #BBDEFB",fontWeight:700,whiteSpace:"nowrap"}}>コラム一覧を見る →</a>
        </div>
      </div>
    </div></section>
    <section style={{background:"#fff",padding:"28px 20px",borderTop:"1px solid #f0f0f0"}}><div style={{maxWidth:1100,margin:"0 auto"}}><div style={{fontSize:11,fontWeight:700,color:"#FF8A00",marginBottom:8,letterSpacing:".5px"}}>GENRE</div><h2 style={{fontSize:15,fontWeight:900,color:"#1B2A4A",marginBottom:12}}>ジャンル別に探す</h2><div style={{display:"flex",flexWrap:"wrap",gap:8}}>{[{href:"/soccer/osaka/osaka-city",emoji:"⚽",label:"サッカー"},{href:"/piano/osaka/osaka-city",emoji:"🎹",label:"ピアノ"},{href:"/swimming/osaka/osaka-city",emoji:"🏊",label:"スイミング"},{href:"/english/osaka/osaka-city",emoji:"🌍",label:"英語"},{href:"/ballet/osaka/osaka-city",emoji:"🩰",label:"バレエ"},{href:"/gymnastics/osaka/osaka-city",emoji:"🤸",label:"体操"},{href:"/basketball/osaka/osaka-city",emoji:"🏀",label:"バスケット"},{href:"/soroban/osaka/osaka-city",emoji:"🧮",label:"そろばん"},{href:"/programming/osaka/osaka-city",emoji:"💻",label:"プログラミング"},{href:"/rhythmics/osaka/osaka-city",emoji:"🎵",label:"リトミック"},{href:"/music/osaka/osaka-city",emoji:"🎸",label:"音楽"},{href:"/karate/osaka/osaka-city",emoji:"🥋",label:"空手"},].map(item=>(<a key={item.href} href={item.href} style={{display:"inline-flex",alignItems:"center",gap:4,padding:"6px 12px",background:"#f8f9fb",border:"1.5px solid #e8edf4",borderRadius:20,textDecoration:"none",color:"#1B2A4A",fontSize:12,fontWeight:600}}>{item.emoji} {item.label}</a>))}</div></div></section><section style={{background:"#EDE7F6",padding:"28px 20px",borderTop:"1px solid #D1C4E9"}}><div style={{maxWidth:1100,margin:"0 auto"}}><h2 style={{fontSize:15,fontWeight:800,color:"#4527A0",marginBottom:14}}>🔗 他のエリアも見る</h2><div style={{marginBottom:10}}><div style={{fontSize:12,color:"#666",marginBottom:6,fontWeight:700}}>📍 大阪府の他のエリア</div><div style={{display:"flex",flexWrap:"wrap",gap:7}}><a href="/osaka/minoh" style={{padding:"6px 14px",background:"#fff",borderRadius:20,fontSize:12,color:"#333",textDecoration:"none",border:"1px solid #ddd",fontWeight:600,whiteSpace:"nowrap"}}>箕面市</a><a href="/osaka/moriguchi" style={{padding:"6px 14px",background:"#fff",borderRadius:20,fontSize:12,color:"#333",textDecoration:"none",border:"1px solid #ddd",fontWeight:600,whiteSpace:"nowrap"}}>守口市</a><a href="/osaka/ibaraki" style={{padding:"6px 14px",background:"#fff",borderRadius:20,fontSize:12,color:"#333",textDecoration:"none",border:"1px solid #ddd",fontWeight:600,whiteSpace:"nowrap"}}>茨木市</a><a href="/osaka/sakai" style={{padding:"6px 14px",background:"#fff",borderRadius:20,fontSize:12,color:"#333",textDecoration:"none",border:"1px solid #ddd",fontWeight:600,whiteSpace:"nowrap"}}>堺市</a><a href="/osaka/suita" style={{padding:"6px 14px",background:"#fff",borderRadius:20,fontSize:12,color:"#333",textDecoration:"none",border:"1px solid #ddd",fontWeight:600,whiteSpace:"nowrap"}}>吹田市</a><a href="/osaka/takatsuki" style={{padding:"6px 14px",background:"#fff",borderRadius:20,fontSize:12,color:"#333",textDecoration:"none",border:"1px solid #ddd",fontWeight:600,whiteSpace:"nowrap"}}>高槻市</a><a href="/osaka/toyonaka" style={{padding:"6px 14px",background:"#fff",borderRadius:20,fontSize:12,color:"#333",textDecoration:"none",border:"1px solid #ddd",fontWeight:600,whiteSpace:"nowrap"}}>豊中市</a></div></div><div><div style={{fontSize:12,color:"#666",marginBottom:6,fontWeight:700}}>🗾 関西の他のエリア</div><div style={{display:"flex",flexWrap:"wrap",gap:7}}><a href="/kyoto/kyoto-city" style={{padding:"6px 14px",background:"#f0f0f0",borderRadius:20,fontSize:12,color:"#555",textDecoration:"none",border:"1px solid #ddd",whiteSpace:"nowrap"}}>京都市</a><a href="/hyogo/nishinomiya" style={{padding:"6px 14px",background:"#f0f0f0",borderRadius:20,fontSize:12,color:"#555",textDecoration:"none",border:"1px solid #ddd",whiteSpace:"nowrap"}}>西宮市</a><a href="/shiga/otsu" style={{padding:"6px 14px",background:"#f0f0f0",borderRadius:20,fontSize:12,color:"#555",textDecoration:"none",border:"1px solid #ddd",whiteSpace:"nowrap"}}>大津市</a><a href="/shiga/kusatsu" style={{padding:"6px 14px",background:"#f0f0f0",borderRadius:20,fontSize:12,color:"#555",textDecoration:"none",border:"1px solid #ddd",whiteSpace:"nowrap"}}>草津市</a><a href="/wakayama/wakayama-city" style={{padding:"6px 14px",background:"#f0f0f0",borderRadius:20,fontSize:12,color:"#555",textDecoration:"none",border:"1px solid #ddd",whiteSpace:"nowrap"}}>和歌山市</a></div></div><div style={{marginTop:16,display:"flex",gap:14,flexWrap:"wrap"}}><a href="/" style={{fontSize:13,color:"#4527A0",textDecoration:"none",fontWeight:700}}>🏠 トップに戻る</a><a href="/#area" style={{fontSize:13,color:"#4527A0",textDecoration:"none",fontWeight:700}}>🗾 全国から探す</a><a href="/osaka" style={{fontSize:13,color:"#4527A0",textDecoration:"none",fontWeight:700}}>🗾 大阪府の習い事一覧</a></div></div></section>
    <footer style={{background:"linear-gradient(135deg,#1a1a2e,#16213e)",color:"#aab",padding:"36px 20px"}}><div style={{maxWidth:1100,margin:"0 auto",padding:"28px 20px 0"}}><div style={{display:"flex",flexWrap:"wrap",gap:14,marginBottom:16}}><a href="/" style={{color:"#ccc",fontSize:13,textDecoration:"none",fontWeight:600}}>🏠 トップ</a><a href="/#area" style={{color:"#ccc",fontSize:13,textDecoration:"none"}}>🗾 エリアから探す</a><a href="/genre/dance" style={{color:"#ccc",fontSize:13,textDecoration:"none"}}>💃 ダンス</a><a href="/genre/soccer" style={{color:"#ccc",fontSize:13,textDecoration:"none"}}>⚽ サッカー</a><a href="/genre/english" style={{color:"#ccc",fontSize:13,textDecoration:"none"}}>🌍 英語</a><a href="/genre/piano" style={{color:"#ccc",fontSize:13,textDecoration:"none"}}>🎹 ピアノ</a><a href="/genre/swimming" style={{color:"#ccc",fontSize:13,textDecoration:"none"}}>🏊 スイミング</a><a href="/about" style={{color:"#aab",fontSize:12,textDecoration:"none"}}>会社概要</a><a href="/privacy" style={{color:"#aab",fontSize:12,textDecoration:"none"}}>プライバシー</a></div></div><div style={{maxWidth:1100,margin:"0 auto"}}><div style={{display:"flex",alignItems:"center",gap:10,marginBottom:16}}><span style={{fontSize:22}}>🧒</span><a href="/" style={{fontSize:17,fontWeight:800,color:"#fff",textDecoration:"none"}}>コドモならいごと</a></div><p style={{fontSize:12,lineHeight:1.8,maxWidth:600}}>子供の習い事をエリアや種類で検索・比較できる情報サイトです。</p><div style={{borderTop:"1px solid #333",marginTop:20,paddingTop:14,fontSize:11,color:"#667"}}>© 2026 コドモならいごと</div></div></footer>
  </div>);
}
