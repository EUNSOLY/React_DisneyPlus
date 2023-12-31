# React_DisneyPlus Clone

### Mokup 👉<a href="https://react-disney-plus-app-ab04b.firebaseapp.com/" target="_blank"> 데모사이트 바로가기</a>

![Alt text](./public/images/ReadmeImage/image.png)

<br/>
<br/>

### 🖐 프로젝트 목적

1. React 프레임워크 연습
2. https://www.themoviedb.org API 사용
3. ifame요소를 활용한 hyoutube.com 영상불러오기
4. firebase를 이용한 로그인구현 및 배포

### 📌 개발 언어

> <img src="https://img.shields.io/badge/react-61DAFB?style=flat&logo=react&logoColor=black"> 
> <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=JavaScript&logoColor=black"/>
> <img src="https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=HTML5&logoColor=white"/>
> <img src="https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=CSS3&logoColor=white"/>

<br/>

## 🖐 프로젝트 내에서 사용한 라이브러리

### 📁 1. Axios

> 브라우저, Node.js를 위한 Promise API를 활용하는 HTTP 비동기 통신 라이브러리로 백엔드랑 프론트엔드랑 통신을 쉽게 하기 위해서 Ajax와 함께 사용한다. 현재 프로젝트에서는 많은량의 API호출이 진행되기때문에 axios 인스턴스를 생성하여 제작 진행

##### ※ axios 인스턴스란? HTTP 요청을 보낼 때 설정을 미리 지정한 객체

### 📁 2. Styled Component

> <a href="https://styled-components.com/docs/basics">StyledComponent 공홈링크</a> <br/> CSS in JS라고 하는 Js파일 안에서 CSS를 처리 할 수 있도록해주는 대표적인 라이브러리이다.

##### ※ 설치방법 : 1 &#41; npm install styled-components --save 2 &#41; yarn add styled-components

##### ※ 사용방법 : const 사용할태그이름 = styled.생성할요소` 백틱내부에 스타일링작성진행`

### styled-components Code 예시&#41;

   <img src="https://raw.githubusercontent.com/EUNSOLY/OnlyImage/3c1fce0111e53d1ec54d5e96aba18a6b04b74c29/ReactDiseny/%EC%8A%A4%ED%83%80%EC%9D%BC%EC%BB%B4%ED%8F%AC%EB%84%8C%ED%8A%B8%EC%82%AC%EC%9A%A9%EB%B2%95%201..png" alt="스타일컴포넌트사용예시1" />
   <img src="https://raw.githubusercontent.com/EUNSOLY/OnlyImage/3c1fce0111e53d1ec54d5e96aba18a6b04b74c29/ReactDiseny/%EC%8A%A4%ED%83%80%EC%9D%BC%EC%BB%B4%ED%8F%AC%EB%84%8C%ED%8A%B8%EC%82%AC%EC%9A%A9%EB%B2%95%202..png" alt="스타일컴포넌트사용예시1"/>

### 📁 3. react-router-DOM

<a href="https://reactrouter.com/en/main"> 🔗 React-Router-DOM 정리 Tistory </a>

> 웹 앱(React)에서 라우팅을 관리 및 구현하기 위한 라이브러이며, 라우팅이 실행 중인 앱 외부에 구성에서 처리되는 기존 라우팅 아키텍처와 달리 React Router DOM은 앱 및 플랫폼의 요구 사항에 따라 컴포넌트 기반 라우틍을 용이하게 한다.

### 📁 4. Swiper

<a href="https://swiperjs.com/react#usage"> 🔗 Swiper Home </a>

> 웹 및 모바일 앱에서 이미지 슬라이더, 캐러셀, 갤러리 등 다양한 슬라이드 쇼 및 스와이퍼 컴포넌트를 구현하기 위한 JavaScript 라이브러리이며 반응형까지 적용되어있는 레이아웃을 사용할 수 있으며 커스텀이 가능하다.

### 📁 5. fireBase

> Google이 개발하고 제공하는 클라우드 기반 플랫폼이며, 다양한 개발자 도구 및 서비스를 포함하고 있다. 이러한 개발자 도구와 서비스가 파이어베이스를 라이브러리 및 서비스의 조합으로 만들어주는 역활을 한다. 즉, backend를 따로 개발하지않아도 간단한 인증, 데이터저장 등의 수행이 가능하다.

---

<br/>
<br/>

### ☑️ Javascript 기본 내장함수 사용

1. Math.floor() : 주어진 숫자를 내림한 가장 가까운 정수를 반환
   > 예시 : Math.floor(3.7)은 3을 반환
2. Math.random() : 0 이상 1 미만의 난수(랜덤한 실수)를 반환

   > 예시 : 0.5480657455008418, 0.23934047397031555 등.. 0-1 사이의 난수를 랜덤으로 반환

   <img src="https://github.com/EUNSOLY/OnlyImage/blob/main/ReactDiseny/Math.floor%EB%9E%91Math.random.png?raw=true" alt="Math.floor, Math.random예시"/>

3. substring() : 문자열에서 지정한 시작 위치부터 끝 위치 사이의 부분 문자열을 반환 한다.
   > 사용 구문 : string.substring(startIndex, endIndex)  
   > startIndex: 반환할 부분 문자열의 시작 위치를 나타내는 정수 값  
   > endIndex: 반환할 부분 문자열의 끝 위치를 나타내는 정수 값

<br/>

### ☑️ 프로젝트 내 사용된 React-Hooks

1. useEffect : 컴포넌트의 렌더링 사이클에서 특정 작업을 수행하거나 부수 효과(side effect)를 처리하는데 사용
2. useState : 컴포넌트의 상태(state)를 관리하는데 사용
3. useLocation : 현재 페이지의 URL 정보를 제공하는데 사용됩니다. React Router에서 사용
4. useNavigate : React Router에서 특정 경로로 이동시키는 함수를 반환
5. useCallback : 함수를 메모이제이션하여 성능을 최적화하는데 사용
6. useDebounce : 입력값에 대한 디바운싱 기능을 구현하는데 사용(Custom Hooks)
7. useParams : React Router 라이브러리의 일부로 제공, 현재 URL의 경로 매개변수를 추출할 때 사용
8. useRef : React 컴포넌트에서 DOM 요소나 변수를 참조할 때 사용

   <br/>

### ☑️ HTML 새롭게 사용해본 요소

1. iframe
   > HTML Inline Frame 요소이며 Inline Frame의 약어이다  
   > 효과적으로 다른 HTML 페이지를 현재 페이지에 포함시키는 중첩된 브라우저로  
   > iframe요소를 이요하면 해당 웹 페이지 안에서 어떠한 제한 없이 다른 페이지를 불러와서 삽입 할 수 있다.
2. 엘리먼트 속성 'role'
   > 웹 요소가 어떤 역할을 수행하는지를 나타내는 역할(attribute)하며 이 속성은 웹 접근성을 개선하고, 스크린 리더나 보조 기술을 사용하는 사용자가 웹 사이트나 앱을 더 잘 이해할 수 있도록 도와줄 수 있다.  
   > 프로젝트 내 예시 코드 : `<div className="presentation" role="presentation">`

  <br/>

### ☑️ CSS 새롭게 사용해본 속성 및 속성 값

1.  width : min-content
    > 해당 요소의 내용(content)을 최소한의 너비로 설정하도록 지정되는 속성값으로 내용의 길이에 따라 요소의 너비가 동적으로 결정되며, 내용이 얼마나 길든 해당 내용을 모두 수용할 수 있도록 요소의 크기가 조정한다.
2.  background-clip: 배경이 테두리, 안쪽 여백, 콘텐츠 상자 중 어디까지 차지할 지 지정
    > border-box : border, padding 부분까지 이미지가 보여짐 (기본값 )
    > padding-box : border 부분은 이미지가 보여지지 않음  
    > content-box : 여백(padding, border)을 제외한 content의 크기 만큼만 이미지가 보여지며 (현재 프로젝트에서 사용한 속성값)  
    > background-clip: text; / -webkit-background-clip: text; / color: transparent; 등등 있다  
    > <a href="https://developer.mozilla.org/ko/docs/Web/CSS/background-clip">※background-clipMDN공식문서 참고</a>
3.  align-items: unset;
    > align-items는 Flex, Grid를 사용할 때 요소들의 수직 정렬 방식을 지정할 때 사용하는 속성으로 unset값을 사용하면 이전에 다른 값을 가지고 있던 경우는 그 값을 따라가고 그렇지 않으면 기본 값으로 돌아게 된다.

<br/>

### ☑️ javascript 프로젝트 진행 시 새롭게 알게된 내용

1. props로 전달할 때 전개연산자를 사용하여 객체데이터를 전달 할 경우 객체의 속성들이 각각 개별적인 props로 전달 되었기 때문에 객체명이 아닌 각 속성명을 props 받아야한다.
   <img src="https://github.com/EUNSOLY/OnlyImage/blob/main/ReactDiseny/%EC%A0%84%EA%B0%9C%EC%97%B0%EC%82%B0%EC%9E%90%20porps.png?raw=true" alt="props전개연산자예시이미지" >

2. scrollLeft : Element가 가지고 있는 속성으로 요소의 콘텐츠가 왼쪽 가장자리에서 스크롤되는 픽셀수를 가져오거나 변경할 수 있음
   <img src="https://github.com/EUNSOLY/OnlyImage/blob/main/ReactDiseny/%EC%8A%A4%ED%81%AC%EB%A1%A4.png?raw=true" alt="스크롤" >

3. WebAPI : URLSearchParams <a href="https://eunsoly.tistory.com/54"> 🔗추가정리 Tistory</a>
   ![Alt text](image.png)

4. Local Storage : 클라이언트 측 웹 애플리케이션에서 데이터를 작은 키-값 쌍 형식으로 저장하고 유지할 수 있는 메커니즘을 제공하며 반영구적 저장이 가능한 특징이 있다.
   <br/>

---

### ☑️ 참고내용

- Youtube 영상가져오기(이미지첨부 확인)

  <img src="https://raw.githubusercontent.com/EUNSOLY/OnlyImage/main/ReactDiseny/%EC%9C%A0%ED%8A%9C%EB%B8%8C%20%EC%98%81%EC%83%81%20%ED%8D%BC%EC%98%A4%EA%B8%B0%201..png" alt="유튜브 영상가져오기1" >

  <img src="https://github.com/EUNSOLY/OnlyImage/blob/main/ReactDiseny/%EC%9C%A0%ED%8A%9C%EB%B8%8C%20%EC%98%81%EC%83%81%20%ED%8D%BC%EC%98%A4%EA%B8%B0%202.png?raw=true" alt="유튜브 영상가져오기2" >

- fireBase를 이용한 배포과정

1. firebaseTool설치하기 : 로컬에서 1번만 진행하면됨
   > npm i -g firebase-tools
2. fireBase 원격로그인하기 : firebase login(y)
   > ![Alt text](./public/images/ReadmeImage/image-2.png) > ![Alt text](./public/images/ReadmeImage/firebase2.png)
   > npm run build
3. firebase 초기화하기

   > firebase init
   > ![Alt text](./public/images/ReadmeImage/image-3.png) y
   > 어떠한 기능을 사용할지 선택하라는 내용확인되는데 현재 프로젝트는 배포를위해 사용되기 때문에 Hosting (스페이스바 눌러서 체크 후 엔터)
   > ![Alt text](./public/images/ReadmeImage/image-4.png)
   > 프로젝트를 새로만들지 만들어진것을 사용할지 선택
   > ![Alt text](./public/images/ReadmeImage/image-5.png)
   > 연결할 프로젝트 선택
   > ![Alt text](./public/images/ReadmeImage/image-6.png)
   > 호스팅을 위한 폴더작성
   > ![Alt text](./public/images/ReadmeImage/image-7.png)
   > 배포를 위한 설정 마지막 단계
   > ![Alt text](./public/images/ReadmeImage/image-8.png)

4. 배포하기(배포를 하기위한 설정은 완료상태)
   > firebase deploy

---

## LocalStorage 사용하여 저장한 userData를 Redux Toolkit 사용해서 변경하기

1. Store 폴더 및 기본 파일 생성

   ![Store](./public/images/ReadmeImage/Store.png)

2. createSlice함수 사용하여 action과 reducer 정의해주기  
   ※userSlice.js  
    ![createSlice함수](./public/images/ReadmeImage/createSlice.png)

3. store 생성해주기  
   ※ store / index.js  
   ![storeCreate](./public/images/ReadmeImage/storeCreate.png)

4. Provider로 App 컴포넌트 감싸주면서 생성된 store 전달해주기  
   (이로써 App 컴포넌트 하위 전 컴포넌트 redux 사용가능)  
   ※ src / index.js  
   ![Provider](./public/images/ReadmeImage/Provider.png)

5. dispatch를 사용하여 action 데이터 reducer로 보내기  
    ※ useDispatch 및 사용할 정의 된 action 가져오기 그래야 사용가능

   ```
   import { useDispatch } from "react-redux";
   import { setUser, removeUser } from "../store/useSlice";
   ```

   ![dispatch](./public/images/ReadmeImage/dispatch.png)
   ![dispatch2](./public/images/ReadmeImage/dispatch2.png)

6. useSeleter사용해서 store에 저장된 데이터 사용하기
   ※ useSeleter사용해서 및 사용할 정의 된 action 가져오기 그래야 사용가능

```
import { useSelector } from "react-redux";
```

![useSeleter](./public/images/ReadmeImage/useSeleter.png)

### LocalStorage를 미사용하고 Redux로 사용 시 새로고침 하면 데이터가 사라지는 현상이 발생 이런 문제점을 해결하기위해 Redux-Persist 라이브러리 사용하기

> ### redux-persist란? 상태를 지속적으로 유지하고 저장하는 데 사용되는 라이브러리

1. redux-persist 설치

```
npm i redux-persist
```

2. Redux Persist 구성
   ※ persistReducer 함수를 사용하여 리덕스 스토어의 리듀서를 감싸고, 지속성을 유지하도록 설정

```
store/ index.js
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import userSlice from "./useSlice";
import storage from "redux-persist/lib/storage"; // redux-persist에서 기본제공되는 스토리지 사용
// redux-persist-localstorage 라이브러리도 설치하여 사용가능

// root Redux 만들기
const rootReducer = combineReducers({
  user: userSlice,
});

// Redux Persist 설정
const persistConfig = {
  key: "root", // 저장할 상태를 구분하는 키
  storage: storage, // 사용할 스토리지 (로컬 스토리지 등)
   whitelist: ["user"], // 여러 reducer가 있다면 그중 작성된 reducer만 유지  (선택 사항)
   blacklist : ["not"] // 작성된 reducer만 제외
};

// 리덕스 퍼시스트 리듀서 생성
const persistedReducer = persistReducer(persistConfig, rootReducer);

// 스토어 생성
export const store = configureStore({
  reducer: persistedReducer,
});
export const persistor = persistStore(store);

```

3. 스토어 및 앱에 Redux Persist 적용  
   ※ PersistGate 컴포넌트는 리덕스 스토어의 상태가 복원될 때까지 앱을 로딩 상태로 유지

![PersistGate](./public/images/ReadmeImage/PersistGate.png)

> ### 위와 같은 코드 작성 시 아래 이미지와 같은 오류 발생
>
> ![persistError](./public/images/ReadmeImage/persistError.png)

> ### Error가 발생하는 이유는 action에 직렬화가 불가능한 값을 전달했기 때문에 발생
>
> 직렬화 : object 값을 string값으로 변환 (JSON.stringify)
> 역직렬화 : string 값을 object로 변환 (JSON.parse)
> Redux는 state, action에 직렬화가 불가능한 값을 전달할 수 없는데 전달하려고 해서 에러가 발생하는 것
> 직렬화가 불가능한 값 전달 허락 할 수 있도록 추가 코드 작성

```
export const store = configureStore({
  reducer: persistedReducer,
  // getDefaultMiddleware : 기본적으로 reduxtoolkit에서 제공하는 미들웨어를 받아온다.
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck:false}),
});

또는

export const store = configureStore({
  reducer: persistedReducer,
  // getDefaultMiddleware : 기본적으로 reduxtoolkit에서 제공하는 미들웨어를 받아온다.
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoreActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});
```

> Redux는 예상한대로 UI에 반영되게 하거나 Time Travel(복원기능)이나 올바른 디버깅을 위해서 직렬화 가능한 값을 저장하는 것을 추천하며 그것이 기본값이다. 그렇기 떄문에 위처럼 store에 미들웨어가 기본적으로 제공하는 true값을 false로 변경해주거나 특정 단어가 들어왔을 때는 허용해준다는 의미로 ignoreActions를 사용하여 데이터를 작성하여 사용하면 에러가 발생하지않고 사용이 가능하다.
