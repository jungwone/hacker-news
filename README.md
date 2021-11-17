해커뉴스 API를 사용해 카테고리에 해당하는 게시글의 목록, 그리고 클릭시 그 상세 정보를 표시하도록 했습니다. <br/>
카테고리 당 표시되는 리스트의 사이즈가 너무 크다고 판단되어 `Pagination` 컴포넌트를 통해 페이징 처리가 되도록 구현했습니다.

## 폴더구조

폴더 구조를 간략화하여 나타내면 아래와 같습니다.

```bash
├── src
│   ├── components
│   ├── helper
    ├── api
│   └── pages
├── App.js
├── index.js
└── package.json
```

`helper` 폴더에는 공통적으로 사용할 수 있는 함수들을 모아두었습니다. 예를 들면 `timestamp` 값으로 부터 현재 날짜를 `yyyy-mm-dd` 로 표시하는 함수가 있습니다.

`api` 폴더에는 Hacker News의 API(카테고리, 리스트의 상세 정보)를 호출하는 파일이 있습니다.

`pages` 폴더는 라우터를 기능을 통해 이동되는 페이지들이 있습니다. (home, post, stories)

## 실행방법

1. 먼저 **git clone**이나 **Download ZIP** 등을 통해 프로젝트의 소스를 다운받습니다.
2. `package.json` 파일이 존재하는 프로젝트의 루트 경로에서 `yarn` 혹은 `yarn install` 명령어를 실행합니다.
3. `yarn start` 명령어를 통해 프로젝트를 실행합니다.

## 기타

홈 화면에 표시되는 이미지는 무료 이미지를 제공하는 [pixaby](https://pixabay.com/ko/)에서 가져왔습니다.

### 감사합니다.
