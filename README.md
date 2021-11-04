# 김이정 프로젝트
---- 
# 1. 김이정 프로젝트를 시작한 이유
배당 투자자들을 위한 배당정보를 알려주는 전문 웹이 없어 이 프로젝트를 시작하였습니다.
좀 더 원활하고 편리하게 투자에 도움을 주는 프로그햄을 개발할 목적을 가지고 있습니다.

# 2. 개발환경
1. Node.js , Vscode 설치
* [Node.js]["https://nodejs.org/ko/download/"] 16.13.0
* [VSC]["https://code.visualstudio.com/download"]
2. 디렉토리 생성
3. 리액트 앱 생성
* 해당 디렉토리 터미널에서 npx create-react-app "프로젝트명" 실행 
4. 리액트 앱 구동
* npm start 
* npm install --save typescript @types/node @types/react @types/react-dom @types/jest
* rename src/index.js to src/index.tsx 빌드 발생 시 에러가 발생한다면 이를 수정하고 아닐 경우에는 개발을 진행한다. 
* npm start 
* localhost:3000 확인

>https://create-react-app.dev/docs/adding-typescript/
# 3. API 호출 
https://www.data.go.kr/tcs/dss/selectApiDataDetailView.do?publicDataPk=15043284

https://dev-josh.tistory.com/26?category=819607
## 상세설계 1
|이름|기능역할|모듈명|
|---|--------|------|
|동영|자신의 배당금 예상|mo_ex_divide|                       
|관훈|기업의 배당 성향과 그래프|mo_payout_ratio|
|성훈|간단한 주가 선 차트 및 예상배당금|mo_main|
|승민|과거 배당금 내역 & 배당률, 1p 초기 검색창|mo_divide_history,mo_search_bar|

|mo_search_bar|
|기능|변수명|
|-----------|-----------|
|코스피200기업|Enterprise[200]|

|mo_main|
|기능|변수명|
|----|-------|
|예상배당금|ex_divide|
|배당락 기준일|ex_divide_lockdate|
|배당금 지급일|ex_pay_Dates|
|1 주당 예상 배당금|ex_divide_per_share|

|mo_ex_divide|
|기능|변수명|
|----|-------|
|보유주식 수 입력 | set_holdstock|
|계산된 예상 배당금 | ex_divide_multil|
|예상 배당률| ex_divide_yeild|
|배당금 지급일 | ex_pay_Dates|

|mo_divide_history|
|기능|변수명|
|----|-------|
|과거 배당금 날짜| past_divide_date[n]|
|과거 배당금 | past_divide[n]|
|과거 배당률 |past_divide_yeild[n]|

|mo_payout_ratio|
|기능|변수명|
|----|-------|
|과거 배당금 날짜 | past_divide_date[n]|
|과거 배당성향| past_payout_ratio[n]|



