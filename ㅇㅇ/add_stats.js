const fs = require('fs');
const fp = 'C:/Users/jg/Downloads/ㅇㅇ/로스터/로스터_동부.txt';
const d = {
  'Jayson Tatum': [
    '  ▶ OVR:96 | 신체:203cm/95kg/윙213cm',
    '  ▶ 아키타입: SS-03 (3-Level Scorer Elite) | 특성: [클러치킬러][로커룸리더][아이솔레이션마스터]',
    '  ▶ 포텐셜: 피크OVR 97 | 성장률: 유지(피크) | 성장유형: Early Peak',
    '  ▶ [능력치] FIN:91/88/74/40/64/78 | SHT:87/85/91 | PLY:79/82/77 | DEF:74/76/70/36/42/72 | ATH:84/82/72/76/80/85 | IQ:91/84/90',
    '  ▶ [성향] 3PT=58 MID=42 DRV=68 PST=18 PUL=76 C&S=60 | PAS=72 ISO=84 CUT=56 PNR=52 SCR=20 | SA=68 BA=48 PPR=64 HLP=72 | CRB=60 BOX=70',
  ],
  'Jaylen Brown': [
    '  ▶ OVR:90 | 신체:198cm/101kg/윙213cm',
    '  ▶ 아키타입: AS-04 (2-Way Wing Star) | 특성: [폭발적드라이브][클러치킬러][락다운수비수]',
    '  ▶ 포텐셜: 피크OVR 91 | 성장률: 유지(피크) | 성장유형: Standard',
    '  ▶ [능력치] FIN:92/87/62/32/54/72 | SHT:78/76/82 | PLY:74/76/72 | DEF:82/80/76/58/44/74 | ATH:90/86/74/82/80/88 | IQ:80/82/78',
    '  ▶ [성향] 3PT=52 MID=48 DRV=78 PST=18 PUL=72 C&S=54 | PAS=60 ISO=82 CUT=70 PNR=48 SCR=18 | SA=80 BA=54 PPR=70 HLP=76 | CRB=64 BOX=70',
  ],
  'Derrick White': [
    '  ▶ OVR:80 | 신체:193cm/86kg/윙196cm',
    '  ▶ 아키타입: RP-07 (2-Way Connector) | 특성: [수비스페셜리스트][클러치샷메이커][팀플레이어]',
    '  ▶ 포텐셜: 피크OVR 81 | 성장률: 완만한쇠퇴 | 성장유형: Standard',
    '  ▶ [능력치] FIN:74/70/52/28/46/62 | SHT:76/78/82 | PLY:72/74/76 | DEF:80/82/78/62/52/74 | ATH:74/72/68/68/76/76 | IQ:80/82/80',
    '  ▶ [성향] 3PT=62 MID=44 DRV=56 PST=12 PUL=68 C&S=70 | PAS=74 ISO=54 CUT=68 PNR=72 SCR=36 | SA=82 BA=46 PPR=68 HLP=82 | CRB=60 BOX=62',
  ],
  'Nikola Vucevic': [
    '  ▶ OVR:77 | 신체:213cm/120kg/윙216cm',
    '  ▶ 아키타입: RP-09 (Stretch Big) | 특성: [포스트스코어러][미드레인지마스터][보드지배자]',
    '  ▶ 포텐셜: 피크OVR 86 | 성장률: 급쇠퇴 | 성장유형: Standard',
    '  ▶ [능력치] FIN:78/72/82/76/66/64 | SHT:76/68/78 | PLY:62/60/68 | DEF:66/64/56/38/56/76 | ATH:60/58/54/72/64/60 | IQ:78/72/76',
    '  ▶ [성향] 3PT=38 MID=54 DRV=28 PST=58 PUL=62 C&S=52 | PAS=62 ISO=48 CUT=36 PNR=64 SCR=52 | SA=58 BA=62 PPR=56 HLP=68 | CRB=76 BOX=80',
  ],
  'Payton Pritchard': [
    '  ▶ OVR:76 | 신체:188cm/82kg/윙191cm',
    '  ▶ 아키타입: RP-04 (Offensive Spark) | 특성: [3점전문가][에너지가이][클러치샷메이커]',
    '  ▶ 포텐셜: 피크OVR 77 | 성장률: 유지(피크) | 성장유형: Late Bloomer',
    '  ▶ [능력치] FIN:68/64/42/18/54/58 | SHT:84/86/84 | PLY:74/76/72 | DEF:60/62/66/50/32/58 | ATH:78/72/76/58/78/80 | IQ:76/72/78',
    '  ▶ [성향] 3PT=74 MID=44 DRV=56 PST=8 PUL=68 C&S=66 | PAS=72 ISO=52 CUT=58 PNR=66 SCR=28 | SA=62 BA=32 PPR=60 HLP=68 | CRB=48 BOX=44',
  ],
  'Sam Hauser': [
    '  ▶ OVR:74 | 신체:203cm/100kg/윙208cm',
    '  ▶ 아키타입: RP-08 (Floor Spacer) | 특성: [3점저격수][C&S전문가][무브먼트슈터]',
    '  ▶ 포텐셜: 피크OVR 75 | 성장률: 유지(피크) | 성장유형: Late Bloomer',
    '  ▶ [능력치] FIN:64/60/42/22/38/56 | SHT:82/88/84 | PLY:60/62/64 | DEF:60/62/58/44/38/62 | ATH:70/66/62/62/72/68 | IQ:72/68/74',
    '  ▶ [성향] 3PT=84 MID=42 DRV=36 PST=14 PUL=72 C&S=86 | PAS=56 ISO=40 CUT=52 PNR=44 SCR=34 | SA=60 BA=38 PPR=58 HLP=64 | CRB=52 BOX=56',
  ],
  'Neemias Queta': [
    '  ▶ OVR:72 | 신체:216cm/115kg/윙226cm',
    '  ▶ 아키타입: RP-14 (Rim Protector) | 특성: [블락머신][헬프디펜더][롤맨]',
    '  ▶ 포텐셜: 피크OVR 78 | 성장률: 성장중 | 성장유형: Late Bloomer',
    '  ▶ [능력치] FIN:70/66/74/46/54/60 | SHT:52/40/64 | PLY:44/46/54 | DEF:72/70/60/42/76/74 | ATH:70/76/68/72/68/70 | IQ:66/70/64',
    '  ▶ [성향] 3PT=18 MID=30 DRV=38 PST=38 PUL=44 C&S=36 | PAS=44 ISO=28 CUT=46 PNR=58 SCR=56 | SA=70 BA=76 PPR=62 HLP=74 | CRB=72 BOX=74',
  ],
  'Baylor Scheierman': [
    '  ▶ OVR:72 | 신체:198cm/92kg/윙203cm',
    '  ▶ 아키타입: RP-08 (Floor Spacer) | 특성: [3점저격수][IQ농구][다목적윙]',
    '  ▶ 포텐셜: 피크OVR 78 | 성장률: 성장중 | 성장유형: Standard',
    '  ▶ [능력치] FIN:62/58/42/18/36/54 | SHT:78/80/80 | PLY:64/66/68 | DEF:60/62/60/44/38/64 | ATH:68/64/62/60/70/66 | IQ:74/70/72',
    '  ▶ [성향] 3PT=78 MID=46 DRV=44 PST=10 PUL=64 C&S=80 | PAS=64 ISO=44 CUT=58 PNR=52 SCR=32 | SA=62 BA=36 PPR=60 HLP=66 | CRB=50 BOX=52',
  ],
  'Hugo Gonzalez': [
    '  ▶ OVR:70 | 신체:203cm/97kg/윙212cm',
    '  ▶ 아키타입: RP-17 (Developing Wing) | 특성: [수비잠재력][유럽스킬셋][긴윙스팬]',
    '  ▶ 포텐셜: 피크OVR 82 | 성장률: 성장중 | 성장유형: Standard',
    '  ▶ [능력치] FIN:60/56/44/24/38/52 | SHT:62/58/70 | PLY:58/60/62 | DEF:66/64/60/46/44/62 | ATH:70/72/66/62/68/70 | IQ:62/64/60',
    '  ▶ [성향] 3PT=52 MID=44 DRV=46 PST=18 PUL=52 C&S=56 | PAS=58 ISO=42 CUT=50 PNR=44 SCR=28 | SA=64 BA=44 PPR=56 HLP=62 | CRB=48 BOX=50',
  ],
  'Jordan Walsh': [
    '  ▶ OVR:68 | 신체:201cm/90kg/윙213cm',
    '  ▶ 아키타입: RP-17 (Developing Wing) | 특성: [수비형윙][애슬레티시즘][발전가능성]',
    '  ▶ 포텐셜: 피크OVR 78 | 성장률: 성장중 | 성장유형: Standard',
    '  ▶ [능력치] FIN:58/54/40/20/34/50 | SHT:56/52/68 | PLY:54/56/58 | DEF:64/62/58/48/46/60 | ATH:76/74/68/64/70/72 | IQ:58/60/58',
    '  ▶ [성향] 3PT=44 MID=38 DRV=52 PST=12 PUL=46 C&S=46 | PAS=52 ISO=40 CUT=54 PNR=42 SCR=26 | SA=62 BA=48 PPR=54 HLP=60 | CRB=52 BOX=54',
  ],
  'Luka Garza': [
    '  ▶ OVR:65 | 신체:211cm/120kg/윙216cm',
    '  ▶ 아키타입: RP-11 (Backup Pivot) | 특성: [포스트스코어러][에너지빅]',
    '  ▶ 포텐셜: 피크OVR 68 | 성장률: 유지(피크) | 성장유형: Early Peak',
    '  ▶ [능력치] FIN:68/62/72/64/54/60 | SHT:62/54/72 | PLY:48/46/56 | DEF:58/56/48/34/52/68 | ATH:56/56/50/66/58/56 | IQ:66/62/64',
    '  ▶ [성향] 3PT=28 MID=42 DRV=22 PST=54 PUL=44 C&S=38 | PAS=46 ISO=36 CUT=32 PNR=52 SCR=54 | SA=56 BA=58 PPR=50 HLP=60 | CRB=68 BOX=70',
  ],
  'Amari Williams': [
    '  ▶ OVR:65 | 신체:213cm/112kg/윙224cm',
    '  ▶ 아키타입: RP-14 (Rim Protector) | 특성: [블락잠재력][롤맨]',
    '  ▶ 포텐셜: 피크OVR 76 | 성장률: 성장중 | 성장유형: Standard',
    '  ▶ [능력치] FIN:62/58/68/40/48/56 | SHT:46/36/60 | PLY:40/42/50 | DEF:64/62/56/38/68/66 | ATH:66/72/62/64/62/64 | IQ:58/60/56',
    '  ▶ [성향] 3PT=14 MID=24 DRV=32 PST=32 PUL=38 C&S=28 | PAS=40 ISO=24 CUT=42 PNR=50 SCR=48 | SA=62 BA=70 PPR=56 HLP=66 | CRB=64 BOX=66',
  ],
  'Michael Porter Jr.': [
    '  ▶ OVR:83 | 신체:208cm/99kg/윙218cm',
    '  ▶ 아키타입: AS-03 (Volume Scorer) | 특성: [3점저격수][클러치샷메이커][길이활용]',
    '  ▶ 포텐셜: 피크OVR 89 | 성장률: 성장중 | 성장유형: Fragile',
    '  ▶ [능력치] FIN:80/76/64/44/52/68 | SHT:84/86/82 | PLY:68/70/66 | DEF:62/64/56/38/40/62 | ATH:76/78/68/70/72/74 | IQ:76/72/74',
    '  ▶ [성향] 3PT=72 MID=48 DRV=54 PST=28 PUL=70 C&S=74 | PAS=58 ISO=68 CUT=52 PNR=48 SCR=28 | SA=60 BA=48 PPR=56 HLP=58 | CRB=62 BOX=64',
  ],
  'Nic Claxton': [
    '  ▶ OVR:78 | 신체:216cm/104kg/윙222cm',
    '  ▶ 아키타입: RP-13 (Mobile Anchor) | 특성: [림프로텍터][릴링엘리트][수비닻]',
    '  ▶ 포텐셜: 피크OVR 83 | 성장률: 성장중 | 성장유형: Standard',
    '  ▶ [능력치] FIN:74/68/76/56/60/62 | SHT:48/40/66 | PLY:54/56/60 | DEF:76/74/62/46/78/72 | ATH:76/80/70/70/74/74 | IQ:70/74/68',
    '  ▶ [성향] 3PT=14 MID=26 DRV=48 PST=40 PUL=52 C&S=24 | PAS=54 ISO=32 CUT=62 PNR=66 SCR=62 | SA=72 BA=76 PPR=64 HLP=74 | CRB=68 BOX=70',
  ],
  'Egor Demin': [
    '  ▶ OVR:75 | 신체:201cm/86kg/윙208cm',
    '  ▶ 아키타입: AS-17 (Playmaking Prospect) | 특성: [비전패서][긴신체PG][유럽스킬]',
    '  ▶ 포텐셜: 피크OVR 89 | 성장률: 성장중 | 성장유형: Late Bloomer',
    '  ▶ [능력치] FIN:64/58/46/22/42/54 | SHT:64/62/72 | PLY:74/76/78 | DEF:60/62/56/44/46/58 | ATH:70/72/64/62/68/68 | IQ:72/66/68',
    '  ▶ [성향] 3PT=54 MID=42 DRV=60 PST=14 PUL=60 C&S=50 | PAS=78 ISO=52 CUT=56 PNR=64 SCR=30 | SA=58 BA=42 PPR=56 HLP=60 | CRB=46 BOX=48',
  ],
  'Nolan Traore': [
    '  ▶ OVR:74 | 신체:193cm/82kg/윙198cm',
    '  ▶ 아키타입: AS-17 (Athletic PG Prospect) | 특성: [폭발적운동능력][패스퍼스트][성장형]',
    '  ▶ 포텐셜: 피크OVR 87 | 성장률: 성장중 | 성장유형: Standard',
    '  ▶ [능력치] FIN:66/62/44/20/40/54 | SHT:60/58/68 | PLY:72/74/76 | DEF:60/60/58/46/48/58 | ATH:80/78/72/62/70/78 | IQ:68/64/66',
    '  ▶ [성향] 3PT=48 MID=40 DRV=68 PST=12 PUL=56 C&S=44 | PAS=76 ISO=56 CUT=60 PNR=62 SCR=28 | SA=58 BA=38 PPR=54 HLP=60 | CRB=44 BOX=46',
  ],
  'Drake Powell': [
    '  ▶ OVR:72 | 신체:198cm/90kg/윙206cm',
    '  ▶ 아키타입: RP-17 (Developing Wing) | 특성: [수비형윙][애슬레티시즘][장기투자형]',
    '  ▶ 포텐셜: 피크OVR 83 | 성장률: 성장중 | 성장유형: Standard',
    '  ▶ [능력치] FIN:62/58/44/22/38/54 | SHT:60/58/68 | PLY:58/60/60 | DEF:68/66/62/50/48/62 | ATH:78/76/70/66/70/74 | IQ:62/64/60',
    '  ▶ [성향] 3PT=50 MID=40 DRV=58 PST=14 PUL=52 C&S=52 | PAS=54 ISO=48 CUT=56 PNR=44 SCR=26 | SA=64 BA=46 PPR=56 HLP=62 | CRB=48 BOX=50',
  ],
  'Ben Saraf': [
    '  ▶ OVR:71 | 신체:193cm/88kg/윙198cm',
    '  ▶ 아키타입: RP-17 (Developing Guard) | 특성: [유럽스킬셋][패스비전][성장형]',
    '  ▶ 포텐셜: 피크OVR 83 | 성장률: 성장중 | 성장유형: Late Bloomer',
    '  ▶ [능력치] FIN:62/58/42/18/36/52 | SHT:62/60/70 | PLY:68/70/72 | DEF:58/60/56/44/44/58 | ATH:68/66/64/60/66/66 | IQ:68/64/66',
    '  ▶ [성향] 3PT=54 MID=42 DRV=56 PST=10 PUL=58 C&S=52 | PAS=72 ISO=48 CUT=52 PNR=56 SCR=26 | SA=56 BA=36 PPR=52 HLP=58 | CRB=44 BOX=46',
  ],
  'Danny Wolf': [
    '  ▶ OVR:71 | 신체:213cm/108kg/윙218cm',
    '  ▶ 아키타입: RP-17 (Developing Big) | 특성: [패싱빅][스트레치능력][현대빅맨형]',
    '  ▶ 포텐셜: 피크OVR 81 | 성장률: 성장중 | 성장유형: Standard',
    '  ▶ [능력치] FIN:64/60/62/44/48/56 | SHT:60/58/68 | PLY:60/62/68 | DEF:62/62/56/38/58/62 | ATH:64/66/60/64/66/64 | IQ:68/66/66',
    '  ▶ [성향] 3PT=46 MID=44 DRV=38 PST=38 PUL=50 C&S=50 | PAS=66 ISO=34 CUT=50 PNR=56 SCR=50 | SA=60 BA=56 PPR=54 HLP=62 | CRB=60 BOX=62',
  ],
  'Noah Clowney': [
    '  ▶ OVR:71 | 신체:208cm/97kg/윙214cm',
    '  ▶ 아키타입: RP-17 (Developing Big) | 특성: [3점빅맨][수비잠재력][성장형]',
    '  ▶ 포텐셜: 피크OVR 81 | 성장률: 성장중 | 성장유형: Standard',
    '  ▶ [능력치] FIN:62/58/58/36/44/54 | SHT:62/60/70 | PLY:52/54/56 | DEF:64/62/58/44/58/62 | ATH:72/74/66/64/68/70 | IQ:62/64/60',
    '  ▶ [성향] 3PT=52 MID=40 DRV=44 PST=28 PUL=54 C&S=54 | PAS=50 ISO=38 CUT=48 PNR=50 SCR=42 | SA=62 BA=56 PPR=54 HLP=62 | CRB=58 BOX=60',
  ],
  'Ziaire Williams': [
    '  ▶ OVR:72 | 신체:201cm/86kg/윙208cm',
    '  ▶ 아키타입: RP-08 (Floor Spacer) | 특성: [3점개선중][운동형윙][다목적윙]',
    '  ▶ 포텐셜: 피크OVR 78 | 성장률: 성장중 | 성장유형: Bust Risk',
    '  ▶ [능력치] FIN:64/60/48/20/38/54 | SHT:72/70/74 | PLY:62/64/62 | DEF:60/62/58/44/44/60 | ATH:74/72/66/62/68/70 | IQ:64/62/64',
    '  ▶ [성향] 3PT=66 MID=46 DRV=52 PST=12 PUL=60 C&S=68 | PAS=58 ISO=52 CUT=54 PNR=44 SCR=26 | SA=60 BA=42 PPR=54 HLP=60 | CRB=48 BOX=50',
  ],
  'Terance Mann': [
    '  ▶ OVR:73 | 신체:198cm/97kg/윙206cm',
    '  ▶ 아키타입: RP-05 (Energy Contributor) | 특성: [에너지가이][팀디펜더][공격적드라이브]',
    '  ▶ 포텐셜: 피크OVR 75 | 성장률: 유지(피크) | 성장유형: Standard',
    '  ▶ [능력치] FIN:72/68/52/26/46/62 | SHT:66/62/74 | PLY:60/62/64 | DEF:68/68/64/50/44/64 | ATH:74/72/68/68/72/72 | IQ:66/66/66',
    '  ▶ [성향] 3PT=58 MID=48 DRV=60 PST=16 PUL=62 C&S=60 | PAS=58 ISO=54 CUT=62 PNR=50 SCR=30 | SA=66 BA=42 PPR=60 HLP=66 | CRB=58 BOX=60',
  ],
  "Day'Ron Sharpe": [
    '  ▶ OVR:68 | 신체:213cm/118kg/윙218cm',
    '  ▶ 아키타입: RP-14 (Rim Protector) | 특성: [에너지빅][오펜시브리바운더][발전중]',
    '  ▶ 포텐셜: 피크OVR 78 | 성장률: 성장중 | 성장유형: Standard',
    '  ▶ [능력치] FIN:70/64/72/46/54/58 | SHT:46/36/60 | PLY:44/46/50 | DEF:66/64/58/38/66/68 | ATH:68/72/62/70/66/66 | IQ:60/62/60',
    '  ▶ [성향] 3PT=12 MID=24 DRV=36 PST=36 PUL=42 C&S=24 | PAS=42 ISO=26 CUT=44 PNR=54 SCR=52 | SA=64 BA=68 PPR=58 HLP=66 | CRB=72 BOX=74',
  ],
  'Jalen Wilson': [
    '  ▶ OVR:68 | 신체:203cm/97kg/윙210cm',
    '  ▶ 아키타입: RP-05 (Energy Contributor) | 특성: [에너지가이][리바운더][드라이브어택]',
    '  ▶ 포텐셜: 피크OVR 75 | 성장률: 성장중 | 성장유형: Standard',
    '  ▶ [능력치] FIN:66/62/50/24/42/56 | SHT:60/56/68 | PLY:56/58/58 | DEF:62/62/56/42/48/60 | ATH:72/70/64/64/68/68 | IQ:60/60/60',
    '  ▶ [성향] 3PT=50 MID=42 DRV=58 PST=18 PUL=54 C&S=50 | PAS=52 ISO=50 CUT=54 PNR=44 SCR=28 | SA=60 BA=46 PPR=54 HLP=60 | CRB=58 BOX=60',
  ],
  'E.J. Liddell': [
    '  ▶ OVR:67 | 신체:198cm/108kg/윙206cm',
    '  ▶ 아키타입: RP-05 (Energy Contributor) | 특성: [에너지빅][수비IQ][팀플레이어]',
    '  ▶ 포텐셜: 피크OVR 74 | 성장률: 성장중 | 성장유형: Bust Risk',
    '  ▶ [능력치] FIN:62/58/56/36/44/54 | SHT:54/50/68 | PLY:50/52/54 | DEF:64/64/58/42/52/62 | ATH:64/66/58/64/62/62 | IQ:64/64/62',
    '  ▶ [성향] 3PT=38 MID=42 DRV=44 PST=32 PUL=46 C&S=42 | PAS=50 ISO=36 CUT=46 PNR=46 SCR=38 | SA=62 BA=52 PPR=54 HLP=62 | CRB=60 BOX=62',
  ],
};
// Processing
let lines = fs.readFileSync(fp, 'utf8').split('\n');
let r = [];
for (let i = 0; i < lines.length; i++) {
  r.push(lines[i]);
  if (!lines[i].includes('$')) continue;
  let pi = lines[i].indexOf(' | ');
  if (pi < 0) continue;
  let n = lines[i].substring(0, pi).trim();
  if (d[n] && !(lines[i+1] || '').trimStart().startsWith('▶')) {
    r.push(...d[n]);
  }
}
fs.writeFileSync(fp, r.join('\n'), 'utf8');
console.log('BOS+BKN 완료! 삽입된 선수: ' + Object.keys(d).length + '명');
