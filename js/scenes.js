export const CHAR_VARIANTS=[
},
{ id:"ice", pos:0.8,
thought:{ja:"暑いし、アイス一個だけなら…",en:"It’s hot… maybe just one ice cream…",zh:"好热…吃一个冰淇淋…",ko:"덥네… 아이스크림 하나만…"},
},
],
},
{ id:2, bg:"public/bg/2.jpg", place:{ja:"ショッピング街",en:"Shopping Street",zh:"商业街",ko:"쇼핑가"}, goal:{ja:"図書館",en:"Library",zh:"图书馆",ko:"도서관"}, theme:{ja:"物欲と自制心のバランス",en:"Desire vs. Self-control",zh:"物欲与自制",ko:"욕망과 자제"},
events:[
{id:"arcade",pos:0.2,thought:{ja:"新しいゲームがある！",en:"A new arcade game!",zh:"有新游戏！",ko:"새 게임이 있네!"}},
{id:"sale",pos:0.55,thought:{ja:"50%OFF…見るだけ…?",en:"50% OFF… just looking?",zh:"五折…只看一下？",ko:"50% 할인… 보기만?"}},
{id:"call",pos:0.8,thought:{ja:"友達から…出るべき?",en:"Friend is calling… answer?",zh:"朋友来电…要接吗？",ko:"친구 전화… 받을까?"}},
]
},
{ id:3, bg:"public/bg/3.jpg", place:{ja:"通学路",en:"School Route",zh:"上学路",ko:"통학로"}, goal:{ja:"学校の門",en:"School Gate",zh:"校门",ko:"학교 정문"}, theme:{ja:"責任と義務",en:"Responsibility",zh:"责任与义务",ko:"책임과 의무"},
events:[
{id:"tardyFriend",pos:0.18,thought:{ja:"友達が困ってる…",en:"My friend needs help…",zh:"朋友在为难…",ko:"친구가 곤란해…"}},
{id:"wallet",pos:0.5,thought:{ja:"財布…交番へ?",en:"A wallet… police box?",zh:"钱包…要送到派出所？",ko:"지갑… 경찰에?"}},
{id:"lostChild",pos:0.82,thought:{ja:"迷子かな…",en:"A lost child…",zh:"迷路的孩子…",ko:"길 잃은 아이…"}},
]
},
{ id:4, bg:"public/bg/4.jpg", place:{ja:"海辺の遊歩道",en:"Seaside Promenade",zh:"海边步道",ko:"바닷가 산책로"}, goal:{ja:"灯台",en:"Lighthouse",zh:"灯塔",ko:"등대"}, theme:{ja:"自由意志と保護のジレンマ",en:"Freedom vs. Protection",zh:"自由与保护的两难",ko:"자유와 보호의 딜레마"},
events:[
{id:"seaPlay",pos:0.2,thought:{ja:"波で遊びたい!",en:"I want to play in the waves!",zh:"想在海浪里玩！",ko:"파도에서 놀고 싶어!"}},
{id:"busker",pos:0.55,thought:{ja:"音楽…ずっと聴いてたい",en:"The music… I could stay",zh:"音乐…想一直听",ko:"음악… 계속 듣고 싶어"}},
{id:"ship",pos:0.83,thought:{ja:"あの船はどこへ",en:"Where is that ship going?",zh:"那艘船要去哪里？",ko:"저 배는 어디로?"}},
]
},
{ id:5, bg:"public/bg/5.jpg", place:{ja:"故郷の街",en:"Hometown",zh:"故乡",ko:"고향"}, goal:{ja:"思い出の場所",en:"Memory Spot",zh:"回忆之地",ko:"추억의 장소"}, theme:{ja:"記憶と共有",en:"Memory & Sharing",zh:"记忆与分享",ko:"기억과 공유"},
events:[
{id:"oldPhoto",pos:0.2,thought:{ja:"昔の写真…",en:"An old photo…",zh:"老照片…",ko:"옛 사진…"}},
{id:"candy",pos:0.55,thought:{ja:"駄菓子屋…懐かしい",en:"Candy shop… nostalgia",zh:"小卖部…怀旧",ko:"과자 가게… 그리움"}},
{id:"oldFriend",pos:0.85,thought:{ja:"久しぶり!",en:"Long time no see!",zh:"好久不见！",ko:"오랜만!"}},
]
},
{ id:6, bg:"public/bg/6.jpg", place:{ja:"病院の周辺",en:"Hospital Area",zh:"医院周边",ko:"병원 주변"}, goal:{ja:"お見舞い先",en:"Visit Ward",zh:"探望病房",ko:"문병 병동"}, theme:{ja:"痛みへの共感",en:"Empathy for Pain",zh:"对痛苦的共情",ko:"고통에 대한 공감"},
events:[
{id:"wheelchair",pos:0.18,thought:{ja:"手伝うべき?",en:"Should I help?",zh:"要帮忙吗？",ko:"도와야 할까?"}},
{id:"flowers",pos:0.5,thought:{ja:"どの花が良い?",en:"Which flowers?",zh:"买哪种花？",ko:"어떤 꽃이 좋지?"}},
{id:"crying",pos:0.82,thought:{ja:"声をかける?",en:"Say something?",zh:"要搭话吗？",ko:"말 걸어볼까?"}},
]
},
{ id:7, bg:"public/bg/7.jpg", place:{ja:"分かれ道の街",en:"Forking City",zh:"分岔之城",ko:"갈림길 도시"}, goal:{ja:"約束の場所",en:"Promised Place",zh:"约定地点",ko:"약속 장소"}, theme:{ja:"選択の責任",en:"Consequences of Choice",zh:"选择的责任",ko:"선택의 책임"},
events:[
{id:"shortcut",pos:0.22,thought:{ja:"近道…禁止だけど",en:"Shortcut… off-limits",zh:"捷径…禁止的",ko:"지름길… 금지지만"}},
{id:"repeat",pos:0.55,thought:{ja:"前と似てる…",en:"Just like before…",zh:"像以前那样…",ko:"전과 비슷해…"}},
{id:"crowd",pos:0.82,thought:{ja:"皆こっち…",en:"Everyone goes there…",zh:"大家都往那边…",ko:"다들 저쪽으로…"}},
]
},
{ id:8, bg:"public/bg/8.jpg", place:{ja:"卒業式会場へ",en:"To Graduation",zh:"去毕业典礼",ko:"졸업식장으로"}, goal:{ja:"式典会場",en:"Ceremony Hall",zh:"典礼会场",ko:"식장"}, theme:{ja:"手放すこと",en:"Letting Go",zh:"学会放手",ko:"놓아주기"},
events:[
{id:"memories",pos:0.2,thought:{ja:"ここもお別れ…",en:"Goodbye to this place…",zh:"这里也要告别…",ko:"여기도 작별…"}},
{id:"future",pos:0.55,thought:{ja:"進路…不安",en:"My path… anxious",zh:"前途…不安",ko:"진로… 불안"}},
{id:"farewell",pos:0.83,thought:{ja:"最後の時間",en:"One last moment",zh:"最后的时光",ko:"마지막 시간"}},
]
},
{ id:9, bg:"public/bg/9.jpg", place:{ja:"夕暮れの河川敷",en:"Riverside at Dusk",zh:"黄昏河岸",ko:"해질녘 강변"}, goal:{ja:"思い出のベンチ",en:"Memory Bench",zh:"回忆长椅",ko:"추억의 벤치"}, theme:{ja:"愛情と支配",en:"Care vs Control",zh:"关爱与控制",ko:"돌봄과 통제"},
events:[
{id:"danger",pos:0.22,thought:{ja:"危ない…でも",en:"Dangerous… yet",zh:"危险…但",ko:"위험해… 하지만"}},
{id:"independ",pos:0.55,thought:{ja:"自分で決めたい",en:"I want to decide myself",zh:"我想自己决定",ko:"스스로 결정하고 싶어"}},
{id:"gift",pos:0.83,thought:{ja:"お礼…何がいい?",en:"A thank-you gift…",zh:"致谢礼物…",ko:"선물… 뭐가 좋을까?"}},
]
},
{ id:10, bg:"public/bg/10.jpg", place:{ja:"駅のプラットフォーム",en:"Train Platform",zh:"站台",ko:"플랫폼"}, goal:{ja:"旅立ちの電車",en:"Departure Train",zh:"启程的列车",ko:"출발 열차"}, theme:{ja:"別れと成長",en:"Farewell & Growth",zh:"别离与成长",ko:"이별과 성장"},
events:[
{id:"halt",pos:0.2,thought:{ja:"本当に行くの…?",en:"Do I really have to go…?",zh:"真的要走吗…？",ko:"정말 가야 해…?"}},
{id:"recap",pos:0.55,thought:{ja:"一緒の時間…",en:"Our time together…",zh:"我们在一起的时光…",ko:"함께한 시간…"}},
{id:"resolve",pos:0.85,thought:{ja:"あなたがいたから",en:"Because you were there",zh:"因为有你",ko:"네가 있었기에"}},
]
},
];
