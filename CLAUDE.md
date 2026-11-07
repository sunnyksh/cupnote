# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## 개요

**컵노트**는 좋았던 커피의 맛을 적으면 비슷한 드립 원두와 판매처를 찾아주는 한국어 정적 웹페이지예요. 빌드 도구, 프레임워크, 서버, 외부 API가 없고 아래 세 파일로만 동작해요.

- `index.html`: 마크업
- `styles.css`: 스타일. 외부 폰트나 이미지를 쓰지 않아요.
- `app.js`: 원두 데이터와 검색 로직 전부

확장자 없는 `cupnote` 파일은 배포된 사이트(https://cupnote-coffee-lab.pifan.chatgpt.site/)에서 저장한 원본 HTML이에요. `index.html`은 여기서 Cloudflare가 끼워 넣은 챌린지 스크립트를 뺀 버전이에요. 수정은 `index.html`에 하세요.

## 실행과 배포

- 로컬 확인: `index.html`을 브라우저로 바로 열거나 폴더에서 `python -m http.server`를 실행하세요.
- 배포: 세 파일을 같은 폴더에 두고 정적 호스팅(Netlify Drop, GitHub Pages, Cloudflare Pages 등)에 올리면 돼요.
- 테스트나 린트 도구는 없어요. 바꾼 뒤에는 브라우저에서 직접 확인하세요.
- `styles.css`와 `app.js`는 `index.html`에서 같은 `?v=N` 쿼리로 캐시를 갱신해요. 둘 중 하나라도 바뀌면 두 값을 함께 올리세요.

## `app.js` 구조

1. **`beans`:** 원두 목록이에요. 각 원두에는 `notes`(로스터리의 공개 컵노트), `roaster`, `type`, `summary`가 있고, 선택 항목으로 `aliases`, `roast`, `url`(컵노트 출처), `purchaseUrl`(판매 페이지)이 있어요. 원두를 추가할 때는 이 배열만 고치면 돼요. 단, `notes`의 표현이 아래 `families` 어휘에 걸려야 맛 검색에 나와요.
2. **`families`:** 맛 계열(감귤, 초콜릿, 낮은 산미 등)마다 한글·영문 동의어 `terms`를 둬요. `canonical`은 표기만 다른 같은 말(예: 초콜렛 → 초콜릿)을 하나로 묶어요.
3. **`readNotes(input)`:** 입력을 정규화한 뒤(한글 사이 공백 제거) 가장 긴 어휘부터 탐욕적으로 매칭해 계열 hit 목록을 만들어요. `contrasts`(낮은 산미↔또렷한 산미, 약한 쓴맛↔쓴맛)에 따라 약한 쪽이 있으면 강한 쪽을 버려요.
4. **`catalog`:** 페이지를 열 때 각 원두의 `notes`를 `readNotes`로 미리 계열에 매핑해 둬요. `publishedFamilies`는 등록된 원두에 한 번이라도 나오는 계열이에요.
5. **`recommend(hits)`:** 원두마다 점수를 매겨요. 같은 표현이면 4점, 같은 계열이면 2점, 일반 과일 계열 매칭이면 1점이에요. 입력과 반대되는 계열이 있는 원두는 제외해요. 매칭된 계열 수, 점수, 판매 링크 유무 순으로 정렬해 상위 3개를 보여줘요.
6. **`searchNames(query)`:** 이름 탭에서 쓰는 검색이에요. 이름·별칭이 완전히 일치하면 3점, 일부 포함이면 2점, 모든 토큰이 로스터리와 이름 안에 있으면 1점이에요.
7. **UI 부분:** `setMode`(탭 전환), `renderSearch`, `card`, `empty`, `featured`가 화면을 그리고, 칩·예시 버튼·폼 이벤트를 연결해요.

## `app.js`가 의존하는 마크업

다음 ID와 속성은 `app.js`가 직접 찾기 때문에 바꾸지 마세요.

- `#notes-tab`/`#notes-panel`, `#name-tab`/`#name-panel`
- `[role=tab][data-mode]`
- `#notes-form`, `#notes-query`, `#name-form`, `#name-query`
- `[data-example]`, `[data-term]`, `#chip-status`
- `#result-heading`, `#result-count`, `#interpretation`, `#results`, `#guide-link`

## 작성 규칙

- 화면 문구는 모두 한국어이고 친근한 해요체를 써요. 맛 표현은 WCR 커피 관능 용어집과 SCA 향미 휠의 어휘를 따라요.
- 추천은 로스터리가 공개한 컵노트를 기준으로 해요. 가격과 재고는 판매처에서 확인하도록 안내해요.
- 접근성은 의도적으로 설계돼 있어요(ARIA 탭과 방향키 이동, `aria-pressed` 칩, 라이브 영역, 결과 제목으로 포커스 이동). 수정할 때도 유지하세요.
