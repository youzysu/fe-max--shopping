# 아마존 쇼핑몰 사이트 클론 프로젝트

> Amazon Shopping Mall Site Clone Project

- 아마존 사이트: https://www.amazon.com/
- DEMO

![Screen Recording 2023-05-08 at 20 15 26 2](https://user-images.githubusercontent.com/111998760/236812803-27ef8981-612a-4cb9-b3a7-23c569d4c4b8.gif)

## 1. 프로젝트 소개

- 개인 프로젝트
- 기간: 2023.04.03 ~ 2023.04.28.(4주)
- 프로젝트 진행 과정: [노션](https://www.notion.so/FE03-d25cb510f60b4a5a9ebf14fdb6e03346), Jira를 활용하여 기록

## 2. 사용 기술

- HTML5
- SCSS
- ES6

## 3. 구현 내용

### Getting Started

1. Clone the repository

   ```zsh
   git clone https://github.com/youzysu/amazon-shopping-mall-site-clone-project.git
   ```

2. Install dependencies

   ```zsh
   npm install
   ```

3. Run the development server
   ```zsh
   npm run dev
   ```

### 3.0 설계

- Component 클래스를 상속받아 원하는 형태의 HTML Element를 만들어 반환하고, 반환된 node들로 DOM을 동적으로 생성하는 방식
- 시맨틱 태그 활용

### 3.1 상단 네비게이션 바

#### 📌 상단 네비게이션 영역 및 모달 기능

- 메인 페이지에 처음 진입한 1초 뒤에 상단 바에 레이어로 [로그인] 버튼이 나타나도록 한다.
- [로그인 영역]에 마우스를 호버하기 전까지 해당 레이어는 유지된다.
- [로그인 영역]에 마우스를 호버하면 확장된 버전의 레이어가 나타나고, 배경을 딤처리 한다.
- 상단바의 [배송처 영역] 에 마우스를 호버하면 주소 변경 레이어가 나타나고, 배경을 딤처리 한다.
- 각 호버 영역 또는 레이어 영역을 마우스가 벗어나면 모든 레이어와 효과가 사라지도록 한다.
- 화면의 가로 사이즈가 1120px 이상으로 늘어나는 경우, 검색바가 길어지며 화면의 가로사이즈에 맞춰 늘어나도록 한다. (flex-grow 활용)

### 3.2 메인 페이지

#### 📌 히어로 영역 슬라이딩 캐러셀

- '히어로 영역'은 무한 슬라이더로 구현한다.
- 좌우 화살표를 통해 내용을 변경한다.
- 좌우 화살표를 통해 내용을 변경할 수 있다.
- 화살표를 누르지 않는 경우 10초마다 다음 내용으로 넘어가도록 한다.

### 📌 콘텐츠 본문 영역

- 이미지의 사이즈에 따라 콘텐츠의 높이가 다르게 적용되도록 한다.

### 3.3 검색창

- 검색바를 클릭하면, 검색바 아래로 추천 검색어 10개가 표시된 레이어가 뜨도록 하며 이때 배경은 딤처리한다.
- 검색어 입력 시 검색바 아래로 레이어가 뜨며 검색어 실시간 자동완성이 10개까지 표시되도록 한다. (실제 검색 결과 화면으로 이동하지는 않는다.)
- 키보드의 화살표키를 통해 검색 내역 & 추천 검색어 목록 & 자동 완성 검색어 목록을 이동할 수 있도록 하며, 배경색을 이용하여 포커싱된 목록을 표시한다.
- 검색한 내역은 최대 5개까지 검색창에서 보이도록 하며, 우측의 삭제버튼을 눌러 목록에서 해당 검색어를 삭제할 수 있도록 한다.
- 그 아래로 추천 검색어 10개가 계속해서 보이도록 한다.
- 검색어 자동 완성 추천어 중 매칭된 단어 색상을 변경하여 하이라이트한다.

### 3.4 사이드바 기능 개발

- 초기데이터와 더보기할때 데이터를 구분해서 서버와 통신을 통해서 가져온다.
- 사이드바의 각 목록에 마우스를 호버하면 배경색과 아이콘색이 변한다.
- 부서별 쇼핑 영역 하위 카테고리를 누르면 우측에서 좌측으로 목록이 이동하며, 상세 카테고리 내역이 보인다.
- 애니메이션 효과로 부드럽게 이동한다.
- 목록의 [모두 보기]를 누르면, 접혀 있던 카테고리들이 아래로 펼쳐진다.

## 주요 고민 내용

### 관심사 분리

- 컴포넌트 단위로 관심사를 분리하기 위해 로직과 HTML을 함께 관리할 수 있도록 클래스를 사용하여 컴포넌트 단위로 구현하였습니다.
- Component 클래스를 상속받아 HTML element를 생성하고 관련 이벤트 핸들러를 등록합니다.
- 이때, 클래스를 사용하기에 단위가 너무 작은 경우도 있어 작은 함수로도 충분하다는 생각이 들었으나, 통일성을 위해 모두 클래스를 사용했습니다.
- 리렌더링을 최소화하기 위해서 초기 렌더링 시 만들어진 DOM에 반복적으로 노드 추가 및 삭제가 발생하지 않도록 했습니다.

### 모달 영역과 Dimmed 처리 시 반복 로직을 최소화하기

- 딤 처리 반복 로직을 최소화하기 위해서 딤 처리가 필요할 때 해당 영역에 dim class를 classList에서 추가/삭제하는 방식을 선택하였습니다.
- SCSS 스타일 코드도 반복 로직을 최소화하기 위해 공통 스타일 파일을 만들고, mixin을 활용하고자 했습니다.

### 도메인 로직과 뷰 로직의 분리

- 어떻게 객체의 역할과 책임을 분리하고, 객체 간의 의존성을 어떻게 관리해야 하는지 고민했습니다.
- View를 만드는 로직과 Domain 로직을 분리하여, 네트워크 요청 및 데이터 처리를 담당하는 객체를 별도로 분리하였습니다.

### 최근 검색어를 어떻게 저장할까?

- 최근 검색어를 저장하는 스토리지 객체를 만들고, 상태가 변경될 때마다 브라우저의 로컬 스토리지와 동기화하여 저장하였습니다.

### 자동 완성 검색어를 어떻게 받아와야 할까? 어떤 API를 사용해야 할까?

- 미리 생성해둔 검색어를 JSON 파일로 만들어 JSON Server를 설치하고, fetch API를 사용하여 요청하여 받아왔습니다.
- axios가 가장 최신의 방식이지만 별도의 라이브러리를 설치해야 하고, HTTP 요청 전송을 연습하는 용도이기 때문에 Promise 기반의 기본 fetch API를 사용했습니다.
