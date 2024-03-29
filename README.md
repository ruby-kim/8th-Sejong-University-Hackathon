# 8th-Sejong-University-Hackathon
2020년 제8회 세종대학교 SW·AI 해커톤, [소웨지존]팀
<br>

## Introduction
### 주제: 인공지능 기반 스마트 보안 시스템<br>
사무실 또는 집에 설치하여 보안 사고를 예방하고 사고 발생 때 대처할 수 있는 인공지능 기반 시스템 개발<br>
### 세부주제: 온라인 시험 부정방지 플랫폼 개발
최근 COVID-19(코로나 바이러스)로 인한 온라인 원격 학습이 대폭 증가함에 따라, 이러한 점을 악용하여 공정해야 할 시험에서 부정행위가 발생해 사회적 논란이 일어나고 있다.<br>이에 따라 사무실 또는 집에서 설치하여 시험 문제 유출 및 부정행위 방지에 대처할 수 있는 인공지능 기반 온라인 시험 부정방지 플랫폼을 구축하고자 한다.
### 프로젝트 개발환경 및 언어
* Ubuntu 18.04 LTS 또는 Windows10
* MERN
  * DB: MongoDB  [[win 설치]](https://fastdl.mongodb.org/win32/mongodb-win32-x86_64-2012plus-4.2.8-signed.msi)
  * Server: ExpressJS 
  * Front: ReactJS
  * Network: Node.js  [[win 설치]](https://nodejs.org/dist/v12.18.1/node-v12.18.1-x64.msi) [[linux 설치]](https://nodejs.org/dist/v12.18.1/node-v12.18.1-linux-x64.tar.xz)
* (선택) Yarn
* (Heroku로 배포 시도 예정)
### 프레젠테이션
[google presentation 참고](https://docs.google.com/presentation/d/1lMmQ6tUOSC-YCCTcBqePIKIEetGPeEIsL45zdqDnq9Y/edit?usp=sharing)
<br>

## Main Functions
### 학생
* 개인정보를 DB에 등록
* 시험시작: 로그인 후 시험 대기 및 시험이 시작되면 캠이 자동으로 켜짐. 제한시간 안에 시험을 볼 수 있도록 구성
  * 캡쳐 금지
  * 마우스 위치 확인, 화면 밖으로 마우스가 나갈 수 없도록 설정
  * 시험시작 이후 올라온 공지를 한 번에 확인할 수 있는 칸 설정
  * 시험 중 선생(교수)에게 질문할 수 있는 실시간 채팅창 구현
* 시험 끝: 마이페이지에서 자신의 시험점수를 확인할 수 있도록 구현
### 선생(교수)
* 개인정보를 DB에 등록
* 학생 명단 리스트를 볼 수 있도록
* 문제출제
  * 얼굴인식 + 목소리 인식: 얼굴과 특정 문장을 읽을 시 목소리 톤을 확인하면서, 둘 다 일치 시 문제DB에 접근할 수 있도록 설정
  * 문제출제 API를 생성하여 입력만 하면 자동으로 DB에 데이터가 들어갈 수 있도록 설정
* 시험시작: 모니터링 기능 제공
  * 학생들의 캠을 모두 한 곳에 보여줌
  * 학생들의 캠 밑에는 간단한 정보(학생의 단과대 및 학과, 학번, 이름, 전화번호 표기)
  * 시험 중 공지(ex. 시험 문제 정정)를 띄울 수 있도록 설정
  * 아이트래커를 이용해서 특정시간 이상 금지구역에 눈이 머무를 시 관리자에게 알람이 가도록 설정
* 시험 끝
  * 수강생들의 평균 성적 및 성적 내림차순 차트 등을 제공할 수 있도록 구현
  * 가장 많이 틀린 문제, 각 문제 당 학생들의 답이 어떤 것을 선택했는 지 등 시험 문제 결과 정보도 제공할 수 있도록 구현
<br>

## Getting Started
front-back 모두 실행했다는 조건하에, 예제 결과 화면은 ```./result```폴더의 가장 최신날짜 .gif파일 참고
```
git clone https://github.com/kimkyeongnam/8th-Sejong-University-Hackathon.git
cd 8th-Sejong-University-Hackathon

# front: localhost:3000으로 연결
cd client && npm install 또는 yarn install       # yarn은 설치 시 사용 가능
npm start 또는 yarn start

# back: localhost:5000으로 연결
cd server && npm install 또는 yarn install
.env    라는 파일 생성 후 파일 안에 카톡에 보내준 내용 복붙
npm start 또는 yarn start
```
<br>

## File Structure
```
(구현완료 시 수정예정)
.
├─ README.md
└─ hackathon
   ├─ public
   │  ├─ favicon.ico
   │  ├─ index.html
   │  ├─ logo192.png
   │  ├─ logo512.png
   │  ├─ manifest.json
   │  └─ robots.txt
   │  
   ├─ src
   │  ├─ assets
   │  │  ├─ images
   │  │  └─ fonts
   │  │ 
   │  ├─ components
   │  │  ├─ Example.css
   │  │  ├─ Example.js
   │  │  ├─ Header.css
   │  │  └─ Header.js
   │  │
   │  ├─ screens
   │  │  ├─ Home.js
   │  │  ├─ Professor.js
   │  │  └─ Student.js
   │  │
   │  ├─ App.js
   │  └─ index.js
   │
   ├─ .gitignore
   ├─ package.json
   ├─ package-lock.json
   └─ README.md
```
<br>

## Developers
|Name|Github|Email|
|:--:|:--:|:--:|
|김경남|[@kimkyeongnam](https://github.com/kimkyeongnam)|devokkn@gmail.com|
|김민주|[@min942773](https://github.com/min942773)|min942773@gmail.com|
|황유진|[@hyj378](https://github.com/hyj378)|yujine92@gmail.com|
