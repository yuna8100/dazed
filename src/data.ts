import { Article } from './types';

export const INITIAL_ARTICLES: Article[] = [
  {
    id: '1',
    category: 'FASHION',
    title: '<데이즈드> 6월호 커버',
    englishTitle: 'JENNIE ꩜ JENNIE',
    subtitle: 'The Cover for JUNE 2026 issue of DAZED KOREA',
    imageUrl: '/image/photo_2.png'
    author: 'Editorial Team',
    date: '2026.06.11',
    featured: true,
    content: `제니, 그리고 또 다른 제니의 만남. <데이즈드> 2026년 6월호 커버를 장식한 제니는 무한한 우주의 신비로움 속에서 자신만의 가장 솔직하고 순수한 자아를 드러냅니다.

디지털 아트워크와 아방가르드 스타일링이 결합된 이번 화보에서는 제니의 다채로운 페르소나가 완벽하게 시각화되었습니다. 파격적이면서도 정돈된, 클래식하면서도 위트 있는 룩들은 제니라는 도화지 위에 완벽히 구현됩니다.

"언제나 한계를 넘어서는 시도를 하고 싶어요. 이번 촬영 역시 저에게는 새로운 모험이었죠." 제니는 담담하게 말합니다. 깊은 눈망울과 오묘한 분위기로 압도하는 화보와 함께하는 제니의 깊은 철학이 담긴 인터뷰는 지면에서 계속됩니다.`
  },
  {
    id: '2',
    category: 'FASHION',
    title: '어떻게 잊겠어. 랄프 로렌 컬렉션을 입은 크리스탈과 함께한 제주',
    credit: '그대와 함께',
    imageUrl: '/image/photo_3.png'
    author: 'Fashion Editor Kim',
    date: '2026.06.10',
    content: `푸른 제주의 바람과 파도가 넘실거리는 해변 위에 선 크리스탈.
랄프 로렌 컬렉션의 하이엔드 룩과 크리스탈의 독보적인 아우라가 만나 제주에서 잊지 못할 찰나를 남깁니다.

바람이 불어오는 대로 흩날리는 머릿결, 깊고 은은한 눈빛, 파스텔 톤의 실크 드레스부터 클래식한 테일러드 아웃핏까지 제주의 자연과 녹아드는 세련된 앙상블.

"제주는 언제 와도 새로운 영감을 주는 곳이에요. 랄프 로렌 특유의 클래식하고 헤리티지 있는 아웃핏들이 제주의 야생적인 매력과 결합해 더없이 완벽한 조화를 이루었습니다."

그대와 함께 걷는 제주의 고요하고 쓸쓸하지만 무엇보다 빛나는 정취.`
  },
  {
    id: '3',
    category: 'FASHION',
    title: 'Alone, Not Lonely',
    subtitle: '낯선 도시, 혼자여도 흔들림 없이 홀로 빛나는 정연.',
    imageUrl: '/public/image/photo_2.png',
    author: 'Creative Director Lee',
    date: '2026.06.09',
    content: `낯설고 고요한 도시 속에서 홀로 서 있는 정연의 담담한 카리스마.
고독하지만 결코 외롭지 않은, 자기 자신만으로 완전해지는 가장 현대적인 아름다움의 초상입니다.

이번 화보에서는 블랙과 뉴트럴 톤의 세련된 모노톤 실루엣을 부각해 정연 본연의 차분하면서도 곧곧한 정신을 앵글에 담았습니다. 미니멀한 공간 속에서 고요하게 빛나는 그녀의 눈빛은 많은 말을 대신합니다.

"혼자만의 시간은 저를 더 강인하게 만들어요. 그 고요함 속에서 진정으로 내가 어떤 매력을 가지고 있는 사람인지 깨달을 수 있죠."

흔들림 없는 투명함과 당당함으로 홀로 빛나는 정연만의 순간.`
  },
  {
    id: '4',
    category: 'BEAUTY',
    title: '프레시, 프리, 채영. 무슨 말이 더 필요해',
    subtitle: '돌체앤가바나 뷰티가 정의한 프레시 룩.',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDD2trEBemquNeMethLNd_J_kb5hCklxChgeWF6WR2vUAkK9Yn5cr6XxbTDqVC9Wwov9vmyishibnjBArfqespIRX3low_WCwdMRH05zLRWKIBxQEpfY8B9rpH65e7VN0L_zWahmZnCh116kUlv-gpZZCm0ou4GmEkaMANBqk2rpnskZByivfOBlkOd0Mj3iocBELNfJHQv7ytcYv4Qr9k1XCyaGKudv5bvrC0ZRwQwInuMGC53XkfeZEJDpghKs4i35jVjn3OhA65t1g',
    author: 'Beauty Editor Park',
    date: '2026.06.08',
    isPortrait: true,
    content: `싱그럽고 자유 분방한 채영과 돌체앤가바나 뷰티의 운명적인 조우.
규칙적인 아름다움을 거부하고 생동감 넘치는 날 것 그대로의 매력을 극대화한 프레시 뷰티 씬.

정교하게 레이스 업 된 시스루 아웃핏과 매트하면서도 맑은 피치 톤의 피부 표현, 얇게 베어 문 캔디와 무심한 듯 시크한 매혹적인 손동작까지.

"프레시하다는 것은 단순히 맑고 투명한 것만이 아니에요. 내가 내 자신으로서 가장 해방감을 느낄 때, 비로소 진정한 프레시함이 시작된다고 생각해요."

무슨 말이 더 필요할까요. 날 것 그 자체로 세련된 채영만의 프레시, 프리 룩.`
  },
  {
    id: '5',
    category: 'FASHION',
    title: '한소희와 칸, 그리고 부쉐론',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAeutdi_T2PdcU1dVRbiNdown5ag4t8Ljo_660O0C71uDI0H6FOd2b-pcqwCn5CMcY04SlGvVaey5adgBDqe7eoqAhrGRv_H54zLl7eUaBBbx7HGKNgeSp300OcRPaNE21tJk28KLSYS3IhpEbcPxOxW0BHpVakktzUeBd8csPPVxDz68TOLNlsPZdRCosT-mFgkso62YydCKUYmTVfCY0kok3VWRsu2qEy67VzCSwsnxouUKI2Wy-VG-1pV6VWImFIJ5CC_LwgcoAIeQ',
    author: 'Paris Correspondent',
    date: '2026.05.28',
    isWide: true,
    content: `세계 영화의 중심, 반짝이는 칸 비치에서 부쉐론의 매혹적인 주얼리를 장식한 한소희.
그 눈부신 광경은 마치 한 편의 예술 영화와 같습니다.

클래퍼보드를 든 유쾌하면서도 서늘한 시크함, 블랙 하이 패션 아웃핏 위에 도발적으로 세공된 다이아몬드 네크리스가 눈부시게 빛납니다. 동양과 서양의 감각적인 선이 만나 최고의 찬사를 이끌어낸 밤.

"칸의 바람은 조금 유별나요. 긴장되지만 동시에 모든 감정을 풀어헤치게 만들죠. 부쉐론의 대담하고 진취적인 디자인이 이번 칸의 영감과 아주 완벽하게 호응했습니다."

칸을 압도한 눈부신 카리스마, 한소희의 밤은 끝나지 않습니다.`
  },
  {
    id: '6',
    category: 'FASHION',
    title: '뜨거운 햇살이 내리쬐는 발리, 그 어디에서도 블링블링 빛나는 임지연',
    credit: 'MY NAME IS',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB7ty40iqHaFBL3zuGo4PHxDMxtq2_a1uH4K2YHrNbU2BnrLxKGODtTf3U3Sxh7OBPCErSpW7qk1Xb_RFDLP04b_CvbGEr6Ye3aOsNL1qXu0v--P6kOiE6zFNvfsNR9pXcMlsKFjhTlHSAlRAahESGf3fc5DRSxKuPiWVryEfC1Fr2hWVsbjbRJu0xyG5xtw6GsmovxIG71WWk0KH0v-n5w_J53Gz3-Nq2gdk2f_8215g2_Iq7Om1I7SyEhAHByJrTkKWykk4N2SRgavQ',
    author: 'Travel & Style Editor',
    date: '2026.05.24',
    content: `작열하는 열대의 햇살이 가득한 발리의 고급스러운 빌라. 
대담하고 캐주얼하며 압도적인 고혹미를 뽐내는 배우 임지연.

네이비 컬러의 비치 리조트 웨어와 시그니처 럭셔리 토트백을 안은 채, 태양을 향해 당당하고 매혹적인 눈길을 던집니다. 수평선 너머로 흐르는 발리의 낮과 밤.

"화려함을 시크하게 소화하는 것은 즐거워요. 발리의 태양빛 아래에서는 날 것의 건강함과 럭셔리한 액센트가 충돌할 때 극도의 카타르시스가 느껴져요."

스스로 빛을 내는 존재, 임지연이 발리에서 외치는 은밀한 그녀만의 메세지 "MY NAME IS..."`
  },
  {
    id: '7',
    category: 'FASHION',
    title: '형태는 유연하게, 쓰임은 가볍게. 어떠한 스타일에도 경쾌하게 스며드는 델보의 브리앙 템포. 규칙은 없어. 그저 나만의 템포대로.',
    credit: 'FOLLOW THE TEMPO',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBfSe1c34VSVAKCS0LOKtw_L2jUAtf0nmpW5uPsYl7cPEMIC-JrR7DcHS1MkSnhXyu0yhMCDW4vDxwVGG8vyvJMYUqhVQabYFA0IdldXFgEfwRUGUaG3DETtP8ta7MijV0tzxpP6QcbnC7qLA3dw8M1IA3HaTHb1lhO6d54PsSjp6BTbDaj6GdaUNl3VqbITaE_ciWvxmYqRkA9QcDxhn4VtQELnD76F9JkWtelmLJ__X9M2erw_S0nm1mKfRQYdQIeIPrUPICi-dxbQA',
    author: 'Accessories Director',
    date: '2026.05.20',
    content: `클래식의 해체와 현대적 재해석. 형태는 유연하게, 쓰임은 더욱 경쾌하게. 
어떠한 스타일에도 스며드는 델보(Delvaux)의 상징인 새로운 브리앙 템포(Brillant Tempo).

우아한 시티 모노크롬 실루엣 위로 던져진 델보 백의 기하학적 아름다움. 규칙과 형식에서 벗어나 자신만의 현대적 리듬을 구축해 나갑니다.

"정형화된 패션의 규칙을 거부합니다. 우리는 현대 도시를 살아가는 이들의 리듬, 그들이 만들어가는 자유로운 불협화음 자체를 수용하고자 하죠."

규칙은 존재하지 않습니다. 오직 가장 훌륭하고 정제된 가죽, 그리고 나만의 템포대로 걸어가는 시간.`
  }
];

export const INSTAGRAM_FEEDS = [
  {
    id: 'ig-1',
    user: 'dazedkorea',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAWi0WT3yjgM081KfPmu19y5C1a4YCNFwIfjJ6JN65eKos6sW8rY1NPToDsmSy1ENBpio_vqYiffJvUNfFiJgY12KlXo68VJ0nOgKeDDAXOcnVRSWdRt8b4SO36DBHbZ4oTfAhDM1gf7gC0li8Dun-aCOZQJw8cMDRmDYE-t1Ji2G_h3z_i9yL6epJxU1d5MPxQpzsVNdgSgN9cpMYczBHlwla8KumGGpM16NegRiIYd5kSPEHZ4zzeIfUcqwtIlMSlfSQliSIeewa2NA',
    likes: '142,431',
    caption: 'JUNE Cover shooting with JENNIE. Behind the scenes coming soon.'
  },
  {
    id: 'ig-2',
    user: 'dazedkorea',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCBEaNOk-d-ZbzPXQ9UFJwT3imCbwUfTCy6nyj62our6cGPbWrLsDB45Ba7cCOx8XmDyHAfhdjUxDWDAtsrSQQ6erzS711uW4mRC2IfRFcwrrrsGdUhEobytUdq7PDzHbTXkFp0cG9zEuW-Ew9jtyHU5VFSiGsE7SNZWi-2HPiq4AieaQug4zbt8goee4yEUI_xxoq3-Ra9si7l-Yg0rMyYgyA2o_sHh-qH7QSApKtjQR2FMkgt3K39i4uJ5xppCvGI8CwbK4qWXaOLwg',
    likes: '89,120',
    caption: 'Krystal in Jeju island for Ralph Lauren Collection.'
  }
];
