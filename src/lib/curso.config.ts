// A CONFIG DE CURSO — o que muda entre EN/DE/FR/IT→Espanha (e o futuro →França)
// mora AQUI e só aqui. Componentes agnósticos de língua (busca, tradutor,
// bolso do viajante) leem daqui; nenhum deles tem par de idioma ou moeda
// hard-coded. Derivar um SKU novo = copiar este arquivo e trocar os valores.

export const curso = {
  /**
   * Identidade do SKU, e ela NÃO é cosmética: é o namespace de
   * localStorage. Todos os cursos servem de aleapc.github.io/<curso>/, e
   * localStorage é por ORIGEM, não por caminho — sem isto, os cursos leem e
   * sobrescrevem o progresso uns dos outros.
   */
  sku: 'curso-japao-ko',
  /** Idioma do comprador (a voz-guia). */
  buyerLang: 'ko',
  /** Idioma do destino (a fala nativa ensinada). */
  targetLang: 'ja',
  /** Par para o link do Google Tradutor: sl = comprador, tl = destino. */
  translatorPair: { sl: 'ko', tl: 'ja' },
  /** Moeda do destino. */
  destCurrency: 'JPY',
  /**
   * Moedas de "casa" do comprador que vale converter no bolso do viajante.
   * Vazio quando o comprador já usa a moeda do destino (ex.: DE/FR/IT→Espanha,
   * todos em EUR) — nesse caso o /bolso mostra a nota "mesma moeda", sem conversor.
   */
  homeCurrencies: ['KRW'] as string[],
  timeZone: 'Asia/Tokyo',
  cidadeExibicao: '도쿄',
  faixasNow: [
    { de: 0, linha: '주방들이 문을 닫아가지만, 근처 어딘가엔 아직 불이 켜진 이자카야나 라멘집이 있다.' },
    { de: 5 * 60, linha: '도시가 아직 깨어나지 않은 시간. 모퉁이의 24시간 편의점(콘비니)은 한 번도 닫힌 적이 없다 — 커피와 오니기리가 준비되어 있다.' },
    { de: 7 * 60, linha: '호텔 조식과 콘비니 둘 다 든든하다 — 하루를 시작하기 전에 따뜻한 커피와 주먹밥을.' },
    { de: 9 * 60, linha: '아침의 고요함. 카페와 킷사텐이 문을 열었다 — 이른 것이지 늦은 것이 아니다.' },
    { de: 11 * 60 + 30, linha: '점심 서비스가 시작된다. 많은 가게가 오후 초까지 세트 정식(테이쇼쿠)을 낸다 — 회사원들의 러시를 피하자.' },
    { de: 12 * 60, linha: '점심시간: 테이쇼쿠 세트와 라멘집이 1시까지 빠르게 찬다. 혼자 앉을 자리는 금방 사라진다.' },
    { de: 14 * 60, linha: '점심이 잦아드는 시간. 킷사텐과 카페는 커피와 케이크 한 조각을 위해 계속 열려 있다.' },
    { de: 15 * 60, linha: '식사 서비스 사이의 조용한 틈새. 콘비니와 카페가 저녁까지 버텨준다.' },
    { de: 17 * 60 + 30, linha: '이자카야 문이 열리기 시작한다. 저녁 전 이른 맥주와 작은 안주 — 저녁이 이렇게 시작된다.' },
    { de: 19 * 60, linha: '저녁 시간: 이자카야와 식당들이 지금 꽉 찬다. 예약을 했든 안 했든, 타이밍은 딱 맞다.' },
    { de: 22 * 60, linha: '늦은 시간이지만 ラストオーダー(라스트 오더, 마지막 주문) 표시를 확인하자 — 많은 주방이 가게 문보다 먼저 닫는다.' },
    { de: 23 * 60 + 30, linha: '기차로 돌아갈 거라면 終電(슈덴, 막차)을 기억하자 — 그 이후엔 택시이거나 밤을 새우는 것이다.' }
  ] as { de: number; linha: string }[]
} as const;

export type CursoConfig = typeof curso;
