# 김이정 프로젝트
---- 
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



