"use strict";

const beatrice = "https://beatrice-coffee.com/beans/";
const beatriceInquiry = "https://beatrice-coffee.com/location/";
const fritz = "https://fritz.co.kr/faq/list.html";
const beans = [
  {id:"bensa",name:"에티오피아 시다모 벤사 G1 워시드",roaster:"베아트리체",type:"싱글 오리진",roast:"라이트 미디엄",notes:["레몬그라스","얼그레이","복숭아","클린컵"],summary:"복숭아처럼 은은하게 달고, 레몬그라스와 얼그레이를 떠올리게 하는 향이 있는 깔끔한 스타일이에요.",url:beatrice},
  {id:"old-dog",name:"올드독",aliases:["Old Dog","올드 독"],roaster:"프릳츠",type:"블렌드",roast:"프릳츠 블렌드 중 가장 높은 배전",notes:["다크초콜릿","카카오닙스","낮은 산미","묵직한 바디","쌉싸름한 맛"],summary:"새콤함이 낮고, 카카오 풍미와 입안을 채우는 묵직한 질감이 특징이에요.",url:fritz,purchaseUrl:"https://m.fritz.co.kr/product/%ED%94%84%EB%A6%B3%EC%B8%A0-old-dog/91/"},
  {id:"fruity",name:"프루티봉봉",aliases:["Fruity Bonbon","프루티 봉봉"],roaster:"모모스커피",type:"블렌드",notes:["과일 캔디","감귤류","핵과류","과즙감"],summary:"과일 사탕처럼 새콤달콤하고, 감귤과 복숭아 같은 과일을 떠올리게 해요.",purchaseUrl:"https://www.momos.co.kr/shop/?idx=2487"},
  {id:"no-surprises",name:"노서프라이즈",aliases:["No Surprises","노 서프라이즈"],roaster:"커피 리브레",type:"블렌드",roast:"중배전",notes:["초콜릿","잘 익은 과일","단맛"],summary:"초콜릿의 단맛과 잘 익은 과일의 풍미가 어우러지는 균형 잡힌 스타일이에요.",purchaseUrl:"https://coffeelibre.kr/product/%EB%85%B8%EC%84%9C%ED%94%84%EB%9D%BC%EC%9D%B4%EC%A6%88/791"},
  {id:"bad-blood",name:"배드블러드",aliases:["Bad Blood","배드 블러드"],roaster:"커피 리브레",type:"블렌드",roast:"중약배전",notes:["과일 시럽","화사한 산미","단맛"],summary:"과일의 새콤함이 또렷하고, 과일 시럽처럼 느껴지는 단맛이 따라와요.",purchaseUrl:"https://coffeelibre.kr/product/%EB%B0%B0%EB%93%9C%EB%B8%94%EB%9F%AC%EB%93%9C/790"},
  {id:"good",name:"잘되어가시나",aliases:["Everything Good"],roaster:"프릳츠",type:"블렌드",notes:["라즈베리","캐러멜","단맛","긴 여운"],summary:"라즈베리처럼 새콤한 풍미에 캐러멜의 단맛이 균형을 이뤄요.",url:fritz,purchaseUrl:"https://m.fritz.co.kr/product/%ED%94%84%EB%A6%B3%EC%B8%A0-%EC%9E%98-%EB%90%98%EC%96%B4-%EA%B0%80%EC%8B%9C%EB%82%98-200g/92/?item_code=P00000DN00FI"},
  {id:"chocolate",name:"에스쇼콜라",aliases:["에스 쇼콜라","Es Chocolat"],roaster:"모모스커피",type:"블렌드",notes:["다크초콜릿","묵직한 바디","크림 같은 질감","단맛"],summary:"다크초콜릿의 진한 풍미에 크림처럼 부드럽고 묵직한 질감이 느껴지는 스타일이에요.",purchaseUrl:"https://www.momos.co.kr/shop/?idx=2486"},
  {id:"cerrado",name:"브라질 세라도 NY2",roaster:"베아트리체",type:"싱글 오리진",roast:"미디엄",notes:["구운 땅콩","다크초콜릿","캐러멜","낮은 산미","묵직한 바디"],summary:"볶은 땅콩처럼 고소하고 다크초콜릿과 캐러멜 풍미가 느껴져요. 새콤함은 낮은 편이에요.",url:beatrice},
  {id:"huila",name:"콜롬비아 후일라",roaster:"베아트리체",type:"싱글 오리진",roast:"미디엄",notes:["만다린 오렌지","초콜릿","구운 견과류","캐러멜","클린컵"],summary:"초콜릿과 볶은 견과의 고소함에 감귤 계열의 향과 캐러멜 같은 단맛이 더해져요.",url:beatrice},
  {id:"kochere",name:"에티오피아 예가체프 코케허니 G1",roaster:"베아트리체",type:"싱글 오리진",roast:"라이트 미디엄",notes:["살구잼","망고","감귤","캐러멜"],summary:"살구잼과 망고처럼 달콤한 과일 향이 있고, 감귤과 캐러멜 풍미도 함께 느껴져요.",url:beatrice},
  {id:"abaya",name:"에티오피아 아바야 게이샤 허니골드",roaster:"베아트리체",type:"싱글 오리진",roast:"라이트 미디엄",notes:["자스민","복숭아","아카시아 꿀","청포도","열대과일"],summary:"자스민의 은은한 꽃향에 복숭아와 청포도 풍미가 겹치고 꿀 같은 단맛이 느껴져요.",url:beatrice},
  {id:"kenya",name:"케냐 니에리 카라이티 AA TOP",roaster:"베아트리체",type:"싱글 오리진",roast:"라이트 미디엄",notes:["라임","자몽","블랙커런트","크랜베리","황설탕","토마토의 감칠맛"],summary:"라임과 자몽처럼 상큼한 향에 베리 풍미와 황설탕을 연상시키는 단맛이 겹쳐요.",url:beatrice},
  {id:"tropical",name:"열대과일 맛 커피",roaster:"베아트리체",type:"블렌드",roast:"라이트 미디엄",notes:["패션후르츠","망고","파인애플","복숭아","꿀"],summary:"망고와 파인애플을 떠올리게 하는 과일 향이 풍성하고, 복숭아와 꿀을 닮은 달콤한 여운이 남아요.",url:beatrice},
  {id:"el-moritto",name:"과테말라 COE 엘 모리또 게이샤 워시드",roaster:"모모스커피",type:"싱글 오리진",notes:["라임 꽃","백도","아카시아 꿀","레몬그라스"],summary:"흰 복숭아와 아카시아 꿀의 달콤한 향에 라임 꽃과 레몬그라스의 산뜻한 향이 더해져요.",purchaseUrl:"https://www.momos.co.kr/shop_view/?idx=7469"},
  {id:"busan",name:"부산 블렌드",aliases:["부산"],roaster:"모모스커피",type:"블렌드",notes:["구운 견과류","캐러멜","건과일","은은한 산미","허브","밀도 있는 질감"],summary:"볶은 견과와 캐러멜 풍미를 중심으로 말린 과일의 은은한 새콤함과 허브 향이 이어져요.",purchaseUrl:"https://www.momos.co.kr/shop/?idx=3058"},
  {id:"aricha",name:"에티오피아 예가체프 아리차 G1",roaster:"컬트커피랩",type:"싱글 오리진",notes:["자스민","딸기","캐슈넛"],summary:"자스민처럼 향긋한 꽃향과 딸기의 과일 향에 캐슈넛을 떠올리게 하는 고소함이 겹쳐요.",purchaseUrl:"https://cultcoffeelab.com/single/?idx=48"}
];

const families = [
  {
    id:"citrus",label:"감귤 계열",description:"레몬, 자몽, 유자처럼 상큼한 향",
    terms:[
      "감귤류","감귤","시트러스","만다린 오렌지","만다린","오렌지","자몽","그레이프프루트","레몬","라임","유자","귤","베르가못",
      "citrus","orange","mandarin","tangerine","grapefruit","lemon","lime","yuzu","bergamot"
    ]
  },
  {
    id:"stone",label:"복숭아·살구 계열",description:"복숭아, 살구, 자두처럼 잘 익은 핵과류의 향",
    terms:[
      "핵과류","핵과","복숭아","백도","황도","천도복숭아","살구잼","살구","자두","체리",
      "stone fruit","peach","white peach","apricot","apricot jam","plum","cherry","nectarine"
    ]
  },
  {
    id:"berry",label:"베리 계열",description:"딸기나 블루베리를 연상시키는 과일 향",
    terms:[
      "베리류","블루베리","블랙베리","라즈베리","크랜베리","블랙커런트","딸기","스트로베리","믹스베리","베리",
      "berry","berries","blueberry","blackberry","raspberry","cranberry","blackcurrant","black currant","strawberry"
    ]
  },
  {
    id:"tropical",label:"열대과일 계열",description:"망고, 파인애플, 리치처럼 풍성한 과일 향",
    terms:[
      "열대과일","망고","패션후르츠","패션프루트","패션프룻","파인애플","리치","파파야","구아바","코코넛","바나나",
      "tropical","tropical fruit","mango","passion fruit","passionfruit","pineapple","lychee","papaya","guava","coconut","banana"
    ]
  },
  {
    id:"pome",label:"사과·배 계열",description:"청사과나 배를 연상시키는 과일 향",
    terms:["청사과","풋사과","빨간 사과","레드애플","사과","배 향","배 같은","배처럼","green apple","red apple","apple","pear"]
  },
  {
    id:"grape",label:"포도 계열",description:"청포도나 적포도 같은 산뜻한 과일 향",
    terms:["청포도","적포도","포도","머스캣","머스켓","샤인머스캣","샤인머스켓","green grape","grape","muscat"]
  },
  {
    id:"dried",label:"건과일 계열",description:"건포도, 말린 무화과, 대추를 떠올리게 하는 향",
    terms:["건과일","말린 과일","말린 무화과","건포도","건살구","말린 살구","대추","프룬","dried fruit","raisin","dried apricot","dried fig","prune"]
  },
  {
    id:"fruit",label:"과일 계열",description:"잘 익은 과일이나 과일 사탕을 떠올리게 하는 풍미",
    terms:["잘 익은 과일","과일 캔디","과일 시럽","과일사탕","과즙감","쥬시","쥬이시","쥬이시한","주이시","과일향","과일","fruit","fruity","juicy"]
  },
  {
    id:"floral",label:"꽃향 계열",description:"자스민이나 장미처럼 향긋하게 퍼지는 향",
    terms:[
      "라임 꽃","자스민","재스민","쟈스민","장미","라벤더","인동꽃","꽃향기","꽃향","꽃 같은 향","꽃처럼 향긋","플로럴",
      "jasmine","rose","lavender","honeysuckle","floral"
    ]
  },
  {
    id:"tea",label:"차 향 계열",description:"얼그레이, 홍차, 녹차를 우렸을 때 나는 듯한 향",
    terms:["얼그레이","홍차","블랙티","녹차","우롱차","다즐링","티라이크","홍차 같은","earl grey","earl gray","black tea","green tea","oolong","darjeeling","tea like","tea"]
  },
  {
    id:"herbal",label:"허브 향 계열",description:"레몬그라스나 민트처럼 허브를 떠올리게 하는 향",
    terms:["레몬그라스","허브차","허브","로즈메리","로즈마리","민트","바질","lemongrass","herbal tea","herbal","rosemary","mint","basil"]
  },
  {
    id:"chocolate",label:"초콜릿 계열",description:"코코아, 카카오, 초콜릿을 연상시키는 풍미",
    terms:[
      "다크초콜릿","다크초콜렛","다크초코","밀크초콜릿","밀크초콜렛","초콜릿","초콜렛","카카오닙스","카카오","코코아","초코",
      "dark chocolate","milk chocolate","chocolate","chocolaty","chocolatey","cocoa","cacao nibs","cacao"
    ]
  },
  {
    id:"nuts",label:"고소한 견과 계열",description:"볶은 땅콩이나 아몬드를 떠올리게 하는 고소한 향",
    terms:[
      "구운 견과류","볶은 견과류","볶은 견과","견과류","견과","구운 땅콩","볶은 땅콩","땅콩","아몬드","헤이즐넛","캐슈넛","호두","피칸","마카다미아","참깨","고소","구수",
      "roasted nuts","nuts","nutty","peanut","almond","hazelnut","cashew","walnut","pecan","macadamia","sesame"
    ]
  },
  {
    id:"sweet",label:"단맛 계열",description:"캐러멜, 꿀, 흑설탕처럼 달콤한 맛과 향",
    terms:[
      "아카시아 꿀","꿀","캐러멜","카라멜","흑설탕","황설탕","갈색 설탕","바닐라","메이플 시럽","당밀","토피","조청","달큰","달달","달콤","단맛",
      "caramel","honey","brown sugar","vanilla","maple syrup","molasses","toffee","sweetness","sweet"
    ]
  },
  {
    id:"low-sweet",label:"약한 단맛",description:"단맛이 약하게 느껴지는 스타일",
    terms:["덜 달","달지 않","단맛이 약","단맛이 적","단맛은 적","단맛 적","단맛이 거의 없","단맛이 없","low sweetness","less sweet","not sweet"]
  },
  {
    id:"low-acid",label:"낮은 산미",description:"새콤함이 약하거나 은은한 스타일",
    terms:[
      "낮은 산미","약한 산미","은은한 산미","부드러운 산미","산미가 낮","산미는 낮","산미 낮","산미가 적","산미는 적","산미 적","산미가 약","산미가 은은",
      "산미가 세지 않","산미는 세지 않","산미가 강하지 않","산미는 강하지 않","산미가 거의 없","산미는 거의 없","산미 없","산미가 없","산미는 없","산미없이","저산미",
      "신맛이 적","신맛은 적","신맛 적","신맛이 약","신맛이 덜","신맛이 거의 없","신맛 거의 없","신맛이 없","신맛은 없","신맛 없는","신맛 없이","신맛이 강하지 않",
      "덜 신","덜 시고","덜 시어요","시지 않","시진 않","시큼하지 않","시큼한 맛이 적","시큼한 맛이 없","새콤함이 약","새콤함이 적","새콤하지 않",
      "low acidity","mild acidity","soft acidity","gentle acidity","without acidity","no acidity","not sour","less sour"
    ]
  },
  {
    id:"bright",label:"또렷한 산미",description:"또렷하고 생기 있는 새콤함",
    terms:[
      "또렷한 산미","화사한 산미","밝은 산미","높은 산미","경쾌한 산미","선명한 산미","산미가 강","산미는 강","산미가 높","산미가 뚜렷",
      "상큼","새콤","시큼","신맛이 강","신맛이 뚜렷",
      "bright acidity","high acidity","lively acidity","tart","sour"
    ]
  },
  {
    id:"bitter",label:"쌉싸름한 맛",description:"카카오나 진한 커피에서 느낄 수 있는 쓴맛",
    terms:["쌉싸름한 맛","쌉싸름","쌉쌀","씁쓸","쓴맛","bitter","bitterness","bittersweet"]
  },
  {
    id:"low-bitter",label:"약한 쓴맛",description:"쓴맛이 약하게 느껴지는 스타일",
    terms:[
      "약한 쓴맛","쓴맛이 적","쓴맛은 적","쓴맛 적","쓴맛이 덜","쓴맛이 약","쓴맛이 거의 없","쓴맛 거의 없","쓴맛이 없","쓴맛은 없","쓴맛 없","쓴맛 없이","덜 쓰","쓰지 않","씁쓸하지 않","쌉싸름하지 않",
      "mild bitterness","low bitterness","no bitterness","not bitter","less bitter"
    ]
  },
  {
    id:"body",label:"묵직한 질감",description:"입안을 채우는 도톰하고 묵직한 느낌",
    terms:["묵직한 바디","묵직","밀도 있는 질감","도톰한 질감","견고한 바디","풀바디","바디감이 좋","바디감이 있","바디감이 진","full body","heavy body","thick mouthfeel","syrupy body"]
  },
  {
    id:"light",label:"가벼운 질감",description:"차처럼 가볍게 넘어가는 입안 느낌",
    terms:["가벼운 바디","가벼운 질감","바디가 가벼","가볍게 넘어","차 같은 질감","light body","light mouthfeel","tea like body"]
  },
  {
    id:"cream",label:"부드러운 질감",description:"크림처럼 부드럽거나 실크처럼 매끈한 입안 느낌",
    terms:["크림 같은 질감","크리미","크림같","부드러운 질감","질감이 부드러","실키","실크 같은","벨벳 같은","매끈한 질감","creamy","silky","velvety","smooth mouthfeel","smooth texture"]
  },
  {
    id:"dry",label:"떫고 마르는 느낌",description:"입안이 마르거나 살짝 조이는 듯한 느낌",
    terms:["떫은 느낌","떫은 맛","떫은맛","떫은","떫게","입안이 마르","입이 마르","드라이한 질감","astringent","astringency","dry mouthfeel"]
  },
  {
    id:"clean",label:"깔끔한 끝맛",description:"입안에 텁텁함이 적고 맑게 마무리되는 느낌",
    terms:["클린컵","깔끔한 끝맛","깔끔한 여운","깔끔하","깔끔해","끝맛이 깨끗","깨끗한 여운","텁텁하지 않","텁텁함 없이","뒤끝 없이","clean cup","clean finish","clean aftertaste","clean"]
  },
  {
    id:"linger",label:"긴 여운",description:"삼킨 뒤에도 향이나 맛이 오래 남는 느낌",
    terms:["긴 여운","길게 남는","오래 남는","오래 남아","여운이 길","여운이 오래","끝맛이 길","긴 애프터","long finish","long aftertaste","lingering aftertaste","lingering sweetness"]
  },
  {
    id:"grain",label:"곡물·토스트 향",description:"구운 곡물이나 빵을 떠올리게 하는 향",
    terms:["토스트","구운 빵","식빵","바게트","구운 곡물","볶은 곡물","곡물향","누룽지","보리","맥아","toast","toasted bread","toasted grain","cereal","malt"]
  },
  {
    id:"smoke",label:"스모키한 향",description:"연기, 숯, 진하게 그을린 향을 떠올리게 하는 풍미",
    terms:["스모키","훈연","연기 향","숯향","그을린 향","탄 향","탄내","탄맛","smoky","smokey","charcoal","burnt","ashy"]
  },
  {
    id:"wine",label:"와인·발효 향",description:"와인이나 발효된 과일을 떠올리게 하는 향",
    terms:["와인 같은","와인 향","와이니","와인","발효된 과일","발효향","술향","럼 향","위스키 향","wine like","winey","fermented","boozy","rum"]
  },
  {
    id:"spice",label:"향신료 계열",description:"계피나 정향처럼 향신료를 떠올리게 하는 향",
    terms:["향신료","시나몬","계피","정향","후추","카다멈","스파이시","spicy","cinnamon","clove","pepper","cardamom"]
  },
  {
    id:"woody",label:"나무·흙 향",description:"나무나 젖은 흙을 떠올리게 하는 향",
    terms:["우디","나무 향","삼나무","흙향","흙냄새","어시","woody","cedar","earthy"]
  },
  {
    id:"savory",label:"감칠맛",description:"토마토처럼 입안에 감도는 감칠맛",
    terms:["토마토의 감칠맛","감칠맛","토마토","umami","savory","savoury","tomato"]
  }
];

const familyById = new Map(families.map(family => [family.id, family]));
const fruitFamily = new Set(["citrus","stone","berry","tropical","pome","grape","dried","fruit"]);
const contrasts = [["low-acid","bright"],["low-bitter","bitter"]];
const canonical = [
  ["다크초콜렛","다크초콜릿"],["초콜렛","초콜릿"],["카라멜","캐러멜"],["재스민","자스민"],
  ["쟈스민","자스민"],["패션프루트","패션후르츠"],["darkchocolate","다크초콜릿"],["chocolate","초콜릿"],
  ["jasmine","자스민"],["peach","복숭아"],["백도","복숭아"],["mango","망고"],["caramel","캐러멜"],
  ["honey","꿀"],["아카시아꿀","꿀"],["grapefruit","자몽"],["lime","라임"],["greengrape","청포도"],
  ["strawberry","딸기"],["스트로베리","딸기"],["raspberry","라즈베리"],["earlgrey","얼그레이"],
  ["earlgray","얼그레이"],["lemongrass","레몬그라스"],["roastednuts","구운견과류"],["볶은견과류","구운견과류"]
];
const synonyms = new Map(canonical);
const normalize = value => value.normalize("NFKC").toLowerCase().replace(/[^\p{L}\p{N}]+/gu,"");
const key = value => synonyms.get(normalize(value)) ?? normalize(value);

function normalizeTaste(value) {
  return value.normalize("NFKC").toLowerCase()
    .replace(/[^\p{L}\p{N}]+/gu," ")
    .replace(/(?<=[가-힣]) (?=[가-힣])/g,"");
}

const vocabulary = families.flatMap(family => family.terms.map(term => ({
  id:family.id,term,pattern:normalizeTaste(term),latin:/^[a-z]/.test(term)
})))
  .sort((a,b) => b.pattern.length - a.pattern.length);

function readNotes(input) {
  const text = normalizeTaste(input);
  const hits = [];
  for (let index = 0; index < text.length;) {
    const hit = vocabulary.find(entry => text.startsWith(entry.pattern,index) && (
      !entry.latin || !/[a-z]/.test(text.charAt(index - 1) + text.charAt(index + entry.pattern.length))
    ));
    if (hit) {
      hits.push(hit);
      index += hit.pattern.length;
    } else {
      index++;
    }
  }
  const suppressed = new Set(contrasts.filter(([mild]) => hits.some(hit => hit.id === mild)).map(([,strong]) => strong));
  return hits.filter(hit => !suppressed.has(hit.id))
    .filter((hit,index,all) => all.findIndex(item => key(item.term) === key(hit.term)) === index);
}

const catalog = beans.map(bean => ({
  ...bean,
  indexedNotes:bean.notes.map(note => ({note, ids:new Set(readNotes(note).map(hit => hit.id))}))
}));
const publishedFamilies = new Set(catalog.flatMap(bean => bean.indexedNotes.flatMap(note => [...note.ids])));

function searchNames(query) {
  const tokens = query.normalize("NFKC").split(/\s+/).map(normalize).filter(Boolean);
  const phrase = normalize(query);
  if (!phrase) return [];
  return catalog.flatMap(bean => {
    const names = [bean.name,...(bean.aliases ?? [])].map(normalize);
    const searchField = normalize(bean.roaster) + names.join(" ");
    const score = names.includes(phrase) ? 3 : names.some(name => name.includes(phrase)) ? 2
      : tokens.every(token => searchField.includes(token)) ? 1 : 0;
    return score ? [{bean,score}] : [];
  }).sort((a,b) => b.score - a.score);
}

function recommend(hits) {
  const groups = [...new Set(hits.map(hit => hit.id))];
  const conflicting = new Set(contrasts.flatMap(([mild,strong]) => {
    if (groups.includes(mild)) return [strong];
    if (groups.includes(strong)) return [mild];
    return [];
  }));
  return catalog.flatMap(bean => {
    const matches = new Map();
    if (bean.indexedNotes.some(note => [...note.ids].some(id => conflicting.has(id)))) return [];
    for (const id of groups) {
      const requested = hits.filter(hit => hit.id === id);
      const exact = bean.indexedNotes.find(note => requested.some(hit => key(hit.term) === key(note.note)));
      const same = bean.indexedNotes.find(note => note.ids.has(id));
      const generalFruit = bean.indexedNotes.find(note =>
        fruitFamily.has(id) && [...note.ids].some(other => fruitFamily.has(other) && (other === "fruit" || id === "fruit"))
      );
      if (exact) matches.set(id,{score:4,note:exact.note});
      else if (same) matches.set(id,{score:2,note:same.note});
      else if (generalFruit) matches.set(id,{score:1,note:generalFruit.note});
    }
    const score = [...matches.values()].reduce((total,match) => total + match.score,0);
    const missing = groups.filter(id => publishedFamilies.has(id) && !matches.has(id));
    return score ? [{bean,score,matches,missing}] : [];
  }).sort((a,b) => b.matches.size - a.matches.size || b.score - a.score ||
    Number(Boolean(b.bean.purchaseUrl)) - Number(Boolean(a.bean.purchaseUrl))).slice(0,3);
}

const select = id => document.getElementById(id);
const notesInput = select("notes-query");
const inputs = {notes:notesInput,name:select("name-query")};
const results = select("results");
const interpretation = select("interpretation");
const resultHeading = select("result-heading");
const tabs = [...document.querySelectorAll("[role=tab]")];
const chips = [...document.querySelectorAll("[data-term]")];
const submitted = {name:"",notes:""};
const oppositeChip = {"낮은 산미":"또렷한 산미","또렷한 산미":"낮은 산미"};
let mode = "notes";

function element(tag,className,content) {
  const node = document.createElement(tag);
  if (className) node.className = className;
  if (content) node.textContent = content;
  return node;
}

function externalLink(label, url, className, bean) {
  const link = element("a",className,label + " ↗");
  link.href = url;
  link.target = "_blank";
  link.rel = "noopener noreferrer";
  link.setAttribute("aria-label",bean.name + " " + label + " (새 탭)");
  return link;
}

function card({bean,matches,missing}) {
  const article = element("article","card");
  article.append(element("p","meta",[bean.roaster,bean.type,bean.roast].filter(Boolean).join(" · ")),
    element("h3","",bean.name),element("p","",bean.summary));
  const tags = element("div","tags");
  bean.notes.forEach(note => tags.append(element("span","tag",note)));
  article.append(tags);
  if (matches) {
    const exactOrRelated = [...matches.values()].filter(match => match.score > 1);
    const relatedNotes = exactOrRelated.length ? exactOrRelated : [...matches.values()];
    const notes = [...new Set(relatedNotes.map(match => match.note))];
    const reason = element("p","reason");
    reason.append(element("strong","",exactOrRelated.length ? "비슷한 컵노트" : "같은 과일 계열")," · " + notes.join(" · "));
    article.append(reason);
    if (missing.length) {
      const labels = missing.map(id => familyById.get(id).label);
      article.append(element("p","missing","공개 컵노트에서 확인되지 않은 조건 · " + labels.join(" · ")));
    }
  }
  const actions = element("div","card-actions");
  if (bean.purchaseUrl) {
    actions.append(externalLink("판매 페이지",bean.purchaseUrl,"store-link",bean));
  } else if (bean.url === beatrice) {
    actions.append(externalLink("매장·택배 구매 문의",beatriceInquiry,"store-link inquiry-link",bean));
  }
  if (bean.url) actions.append(externalLink("컵노트 출처",bean.url,"",bean));
  article.append(actions);
  return article;
}

function show(heading, entries, message) {
  resultHeading.textContent = heading;
  select("result-count").textContent = message ?? entries.length + "종";
  results.replaceChildren(...entries.map(card));
}

function empty(title, detail, offerNotes = false) {
  show("검색 결과",[],"0개");
  const box = element("div","empty");
  box.append(element("strong","",title),element("p","",detail));
  if (offerNotes) {
    const button = element("button","","맛 설명으로 찾아보기 ↗");
    button.type = "button";
    button.onclick = () => {
      setMode("notes");
      notesInput.focus();
    };
    box.append(button);
  }
  results.append(box);
}

function featured() {
  const choices = mode === "notes" ? catalog.filter(bean => bean.purchaseUrl) : catalog;
  show(mode === "notes" ? "맛으로 둘러보기" : "먼저 살펴볼 원두",
    choices.slice(0,3).map(bean => ({bean})), "원두 " + catalog.length + "종 등록");
}

function renderSearch(query) {
  interpretation.replaceChildren();
  if (!query) {
    featured();
    return;
  }
  if (mode === "name") {
    const found = searchNames(query);
    if (found.length) show("이름이 일치하는 원두",found);
    else empty("등록된 원두에서 찾지 못했어요","원두 이름의 일부를 검색하거나, 메뉴판의 컵노트를 입력해 보세요.",true);
    return;
  }

  const hits = readNotes(query);
  const groups = [...new Set(hits.map(hit => hit.id))].map(id => familyById.get(id));
  if (!groups.length) {
    empty("알아볼 수 있는 맛 표현을 찾지 못했어요","‘복숭아, 자스민’이나 ‘다크초콜릿, 낮은 산미’처럼 입력 가이드에 나온 단어를 함께 써 보세요.");
    return;
  }
  const insight = element("div","insight");
  insight.append(element("strong","","이렇게 읽었어요 · " + groups.map(group => group.label).join(" · ")),
    element("p","",groups.map(group => group.description).join(" / ")));
  const unavailable = groups.filter(group => !publishedFamilies.has(group.id));
  if (unavailable.length) {
    insight.append(element("p","missing","등록 원두의 컵노트에서 아직 확인되지 않은 표현 · " +
      unavailable.map(group => group.label).join(" · ")));
  }
  interpretation.append(insight);
  const recommendations = recommend(hits);
  if (recommendations.length) show("비슷한 맛의 원두",recommendations);
  else empty("비슷한 원두가 아직 등록되어 있지 않아요","인식된 표현은 위에서 확인할 수 있어요. 다른 컵노트를 함께 입력하면 비교할 후보가 늘어날 수 있어요.");
}

function setMode(next) {
  mode = next;
  for (const tab of tabs) {
    const active = tab.dataset.mode === next;
    tab.setAttribute("aria-selected",String(active));
    tab.tabIndex = active ? 0 : -1;
    select(tab.getAttribute("aria-controls")).hidden = !active;
  }
  renderSearch(submitted[mode]);
}

function submitSearch() {
  submitted[mode] = inputs[mode].value.trim();
  renderSearch(submitted[mode]);
  if (submitted[mode]) resultHeading.focus();
}

function guideTerms() {
  return notesInput.value.split(/[,，]/).map(term => term.trim()).filter(Boolean);
}

function syncChips() {
  const terms = new Set(guideTerms().map(normalize));
  for (const chip of chips) {
    chip.setAttribute("aria-pressed",String(terms.has(normalize(chip.dataset.term))));
  }
}

for (const chip of chips) {
  chip.addEventListener("click",() => {
    const {term} = chip.dataset;
    const terms = guideTerms();
    const selected = terms.some(item => normalize(item) === normalize(term));
    const next = selected
      ? terms.filter(item => normalize(item) !== normalize(term))
      : [...terms.filter(item => item !== oppositeChip[term]),term];
    const value = next.join(", ");
    if (value.length > notesInput.maxLength) {
      select("chip-status").textContent = "맛 설명은 180자까지 입력할 수 있어요.";
      notesInput.focus();
      return;
    }
    notesInput.value = value;
    syncChips();
    select("chip-status").textContent = term + (selected ? " 표현을 뺐어요." : " 표현을 추가했어요.");
  });
}

tabs.forEach((tab,index) => {
  tab.addEventListener("click",() => {
    if (tab.dataset.mode !== mode) setMode(tab.dataset.mode);
  });
  tab.addEventListener("keydown",event => {
    if (!["ArrowLeft","ArrowRight","Home","End"].includes(event.key)) return;
    event.preventDefault();
    const next = event.key === "Home" ? 0 : event.key === "End" ? tabs.length - 1 : (index + 1) % tabs.length;
    setMode(tabs[next].dataset.mode);
    tabs[next].focus();
  });
});
for (const [name,input] of Object.entries(inputs)) {
  select(name + "-form").addEventListener("submit",event => {
    event.preventDefault();
    submitSearch();
  });
  input.addEventListener("input",() => {
    if (name === "notes") syncChips();
    if (!input.value.trim()) {
      submitted[name] = "";
      renderSearch("");
    }
  });
}
document.querySelectorAll("[data-example]").forEach(button => {
  button.addEventListener("click",() => {
    inputs[mode].value = button.dataset.example;
    if (mode === "notes") syncChips();
    submitSearch();
  });
});
select("guide-link").addEventListener("click",() => setMode("notes"));
setMode("notes");
