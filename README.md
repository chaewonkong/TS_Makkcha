# 🚌️ 막차 (Makkcha) - Native(ios/android) 🚌
![badge](https://img.shields.io/badge/Part-Front--end-brightgreen)![lang](https://img.shields.io/badge/Language-JavaScript-blue)![react](https://img.shields.io/badge/Tech--stack-React-orange)

## 주의!
- 막차 서비스 TypeScript 리팩토링 진행 Repo
- **서비스 보안을 위해 일부 코드만 공개됨.**
- Native_Makkcha(Private Repository; JS based) will be deprecated soon!

## 앱 설치 링크
- URL: https://makkcha.com
- iOS 앱 설치 링크: https://apps.apple.com/kr/app/%EB%A7%89%EC%B0%A8/id1480522844
- Android 앱 설치 링크: https://play.google.com/store/apps/details?id=com.native_makkcha



## Description

귀가의 모든 것 "막차"

대중교통 막차정보를 카운트다운 형태로 제공하고, 막차 시간에 집에 귀가할 수 있는 다양한 옵션을 제공하는 서비스.

버스, 지하철 막차 정보 제공.

심야버스, 택시, 따릉이 정보 제공.

통금 막차 기능 제공.

반반택시, 타다, 킥고잉 등 연동.



#### 서비스 특징

- 처음 1회 집 주소를 입력하면 목적지를 캐싱하여 다시 입력할 필요가 없음
- 2회차 방문시 부터는 앱을 실행만 시켜도 막차시간 확인 가능
  - 출발지: GPS 기준 현재위치
  - 도착지: 로컬 스토리지에 캐싱된 도착지 정보
- 메인화면의 검색창을 클릭해 원할 경우 수동으로 출발지와 도착지를 변경할 수 있음
  - 히스토리 기능을 지원하여 최근 검색 기록 중 선택 가능
- 통금시간 설정 시 통금시간까지 집에 갈 수 있는 가장 늦은 교통수단 제공
- 근처 따릉이 정보 제공
- 지도 기반 서비스 제공




|                                       처음 시작자용 화면                                        |                                       일반 사용자용 화면                                        |
| :-------------------------------------------------------------------------------------: | :-------------------------------------------------------------------------------------: |
| ![main_video](https://github.com/ChaeWonKong/image-resource/blob/master/1.gif?raw=true) | ![path_video](https://github.com/ChaeWonKong/image-resource/blob/master/3.gif?raw=true) |



## Dev stack

- React 16.8.6
- React Native 0.60.4



## Getting Started



### prerequisites


| Require                              | Description                                                               |
| ------------------------------------ | ------------------------------------------------------------------------- |
| [Git](https://git-scm.com/)          | We follow the [GitHub Flow](https://guides.github.com/introduction/flow/) |
| [Node.js](nodejs.org)                | 10.16.0 or above                                                          |
| [Yarn](https://yarnpkg.com/lang/en/) | Recommend [stable version](https://github.com/yarnpkg/yarn/releases)      |



### Installation

#### Install nvm, yarn

```bash
$ curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.8/install.sh | bash
$ command -v nvm
$ which node
$ npm install -g yarn
```



#### Install project

```bash
$ nvm install 10.16.0
$ nvm use
$ yarn install
$ cd ios && pod install
```




#### Start project

```bash
# iOS
$ react-native run-ios

# Android
$ react-native run-android
```





## Features

- [x] 지하철 막차
- [x] 지하철 막차 및 경로
- [x] PWA 배포
- [x] 택시 비용 및 소요시간
- [x] 막차 푸시 알림
- [x] 버스 막차, 버스 + 지하철 막차 및 혼합 교통 경로
- [x] 지도기반 출발지 및 도착지 설정
- [x] 사용자 피드백 창구
- [x] 공지사항
- [x] 특급 및 급행 막차 제공
- [X] 심야버스 막차 제공
- [X] Android Native 앱
- [X] iOS Native 앱
- [X] 통금 시간 설정 기능 제공
- [X] 막차 Push 알림 기능 제공
- [X] 심야버스와 택시를 혼합한 최적 경로 제공
- [X] 검색 히스토리 기능 제공
- [X] 지도 기반 정류장 및 경로 확인 기능 제공
- [ ] 24시 카페 등 막차 대안 서비스 정보 제공
- [ ] 타다, 킥고잉 등 대안 교통 정보 제공
- [ ] 사용자 맞춤형 귀가 경로 추천
- [ ] 집회, 날씨 등 교통과 유관한 Context-awared 정보 제공



## 일정관리

![dark-green](https://img.shields.io/badge/Completed-Dark--green-446d29)![light-green](https://img.shields.io/badge/Todo-light--green-bdd5ab)



### 프론트엔드 개발 기능별 일정 관리

![gantt-chart](https://github.com/ChaeWonKong/image-resource/blob/master/chart_edit.png?raw=true)





## Commit Conventions

원활한 협업을 위해 Angular Commit Conventions을 준수.



```
<type>[optional scope]: <description>

[optional body]

[optional footer]
```




- **build**: Changes that affect the build system or external dependencies (example scopes: gulp, broccoli, npm)

- **ci**: Changes to our CI configuration files and scripts (example scopes: Travis, Circle, BrowserStack, SauceLabs)
- **docs**: Documentation only changes
- **feat**: A new feature
- **fix**: A bug fix
- **perf**: A code change that improves performance
- **refactor**: A code change that neither fixes a bug nor adds a feature
- **style**: Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)
- **test**: Adding missing tests or correcting existing tests






## Issue tracking


1. **Android 위치 정보 정확성 향상**
   - ACCESS_FINE_LOCATION을 활용하여 정확도 있는 GPS 수집
2. **React Native의 navigator.geolocation 지원 종료**
   - 3rd-party의 react-native-geolocation-service를 활용해 대응
3. **iOS SafeAreaView의 상단 Padding과 하단 Padding에 서로 다른 배경 색 적용**
   - Fragment 내에 SafeAreaView를 2개 선언하여 대응
   - [해결 내용 블로그 포스트 작성](https://chaewonkong.github.io/posts/react-native-different-top-bottom-color-safeareaview-ko.html)
4.  **안드로이드 TTI(초기로딩속도) 및 설치 용량 개선**
    - Hermes 엔진 적용하여 파싱/컴파일을 런타임에서 빌드타임으로 이전
    - [해결 내용 블로그 포스트 작성](https://chaewonkong.github.io/posts/react-native-hermes-ko.html)
5. **안드로이드 기기 내 설치된 앱으로 사용자 연결**
   - Native Module을 작성 후 Bridge 이용해 JS 코드와 연결
   - [해결 내용 블로그 포스트 작성](https://chaewonkong.github.io/posts/react-native-android-bridge.html)
6. **react-native-maps iOS 13 버전 다크모드에서 Callout 텍스트가 보이지 않는 버그**
   - Custom Callout 활용하여 수정
   - [해결 내용 블로그 포스트 작성](https://chaewonkong.github.io/posts/react-native-maps-ios-callout.html)
7. **react-native-firebase 최신 버전 이슈**
   - 최신 버전의 사용법이 공식 문서에도 여타 자료에도 제대로 제공되지 않고, iOS에서 이전 버전과 충돌하여 v.6에서 v.5로 다운그레이드 진행
8. **카드 플립(Flip) 적용**
   - 오픈소스 라이브러리를 사용하려 했으나, 높이(Height)를 상수로 제공해야 하여 카드를 확장/축소하는 기능에 부합하지 않음. 오픈소스를 참고하여 직접 구현
9. **Scrollable Header 적용**
   - 늘어나는 카드를 최대한 한 눈에 볼 수 있도록, 스크롤 시 헤더의 검색창이 숨겨지는 애니메이션 구현
10. **React Native 성능 최적화**
    - JS 쓰레드의 병목을 확인하고, console.log가 런타임에서 병목을 초래함을 확인 후 빌드 과정에서 비활성화하는 로직을 작성해 대응