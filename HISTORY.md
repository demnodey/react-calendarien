# HISTORY

### Will Update Function ::

- allowRange 기능 추가하기

## Update #10
#### 2018 12 05
- 디자인 부분수정
- mode 시 'TODAY' 버튼 기능 개선 ( today 클릭시 해당 날짜가 입력된다. )
---

## Update #9
#### 2018 12 03
- input mode 추가
- Button 및 기타 전체적인 디자인 수정
- 'TODAY' 버튼 기능 개선 ( 오늘 날짜 선택됨 )
- next, prev 기본 아이콘을 html unicode icon 으로 교체 
---

## Update #8
#### 2018 11 29
- 코드 최소화
- PropTypes 적용 안되있는 props 적용
- IE 브라우저 문제점 해결. ( development 모드에서 cdn polyfill script 링크가 필요하다. ) 
  - 1.index.html에 script 태그 적용 ( 링크 :: //cdn.polyfill.io/v2/polyfill.min.js )
  - 2.ployfill 적용하기 > yarn add react-app-polyfill ( import 'react-app-polyfill/ie9 or ie11')
- IE, Edge 에서 나던 Date 연산 오류 수정
- Calendarien 폴더 위치 수정
---

## Update #7
#### 2018 11 27
- 버그 수정
- 토이 프로젝트에 적용해 본 후 디자인 및 기능에 대한 문제점 수정필요 ( 진행중... )
- theme 추가 ( darkblue, forest, gd_darkblue, gd_sunset ) > Layout.css 에서 수정가능
- setDate 실시간 수정 가능하게 해놨음
---

## Update #6
#### 2018 11 26
- 몇가지 버그 수정 및 layout 디자인 옵션추가. outline, radius
- DayOfWeek 추가
- disabled 기능 추가 - 코드의 복잡함으로 인한 코드수정 예정 ( 진행중 ... )
---

## Update #5
#### 2018 11 23
- 이전달, 다음달 랜더링 완료
- 18/11/25 git 최신화
- 코드가 복잡해짐
---

## Update #4
#### 2018 11 22
- Viewer(Body)에 관련된 기본적인 기능 80% 정도 완료
- git 최신화는 하지 않았음.
- 파일구조가 복잡하고, 코드의 가독성이 떨어진다. 기능이 많이 부족하다.
---

## Update #3
#### 2018 11 22
- Header, Viewer 기본적인 달력기능 70%정도 완료 후, 본격적 README.md 작성 및 기능설명
---

## Update #2
#### 2018 11 21
- 문제점발견으로 인해 코드 초기화 후 새로운 구조 구축
---

## Update #1
#### 2018 11 18
- 파일 구조 파악 Header 를 포함한 기본틀 제작 시작
---

## START
#### 2018 11 16
- 프로젝트 시작