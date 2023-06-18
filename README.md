# Web_Server 스터디
<br>

## Node.js + MongoDB(NoSQL)을 사용하여 웹 사이트 개발

<br>
->사용기술 :  Node.js + MongoDB(NoSQL) + DB저장/출력 + 서버 제작(API)+ 서버 배포 + npm + bootstrap 등
<br>
<br>

http 요청 -> 읽기(get)/쓰기(post)->생성,작성/수정(put)/삭제(delete) 요청이 있다.

## 1) Node.js를 이용해서 javascript 문법으로 서버짜는 이유
 <br>
 js는 브라우저가 해석한다. (해석엔진으로) 따라서 브라우저마다 쓰는 엔진이 다르다. 크롬(V8),파이어폭스(스파이더몽키) 등
 
 <br>
 
 v8해석엔진이 뛰어나서 똑 떼서 만든것이 Node.js 
 
 <br>
 
 브라우저 내에서 말고도 다른환경에서도 돌아가게 만듦. 자바스크립트 실행창,실행환경(런타임) -> 컴퓨터에서도 프로그래밍처럼 사용하기 시작함 -> 쉽게 서버를 만들 수 있음
 
 <br>
 <br>
 
 ??왜 Node.js로 서버를 만드느냐? Non-blocking I/O 때문이다.
 
 <br>
 - 만약 python같은 언어로 서버를 만들었다. -> 요청이 들어오면 1개짜리 요청 마다 1초 걸려서 처리한다고 한다.  
 
 <br>
 여기서 200개짜리 요청이면 200초 걸려서 처리. 200초동안 기다리게 한다. 그 다음 요청을 받는다.
 
 <br>
 
 -> 즉, 오래걸리는 요청을 받으면 서버가 멈춰있다. 다른 사용자는 뒤에서 기다려야한다. (FIFO)
 
 <br>
 
 - Node.js는 일단 요청을 전부 다 받는다. 그럼 처리 속도가 빠른것부터 먼저 처리해준다. 그래서 빨리빨리 해준다.(Non-blocking)
 
 <br>
 
 - 서버가 요청받는것땜에 멈추지 않는다. 따라서 SNS,채팅서비스(특: 요청이 매우 많음)-> 멈추거나 요청 대기시간X
 
 <br>
 
 - 물론, 서버의 스케일링 혹은 멀티쓰레딩으로 일반서버로도 가능하긴 함. 
 
 <br>
 
 - 하지만 이러한 작정때문에 많이 씀 + 코드가 매우 짧고 쉬워서 빠른 개발가능. 
 
 <br>
 
 - 다만 웹서비스가 아닌 경우는 좀....(이미지처리같은 경우 같이쓸만한 라이브러리가 별로 없...)

## 2) Node.js 설치/환경설정 하기
 
 <br>
 https://nodejs.org/kr -> 에서 왼쪽 버전 다운로드, 다운로드 후 터미널에서 node -v 입력(설치된 버전을 알수있음)

 <br>
 터미널에서 node 를 입력하면 자바스크립트 사용가능 -> VScode 에서 자바스크립트 파일 만들기

 <br>
 쌩코딩이 아니라 express 라는 라이브러리 써서 서버 만들기! -> VScode의 터미널에서 npm을 사용해서 라이브러리 설치하기
 
 <br>
 <br>

 터미널에 npm init 하고 entry point 에 ex) server.js 로 만들고 나머지 엔터로 넘김

 <br>
 터미널에 npm install express 를 입력해서 설치하기

 <br>
 const express = require('express');
 <br>
 const app = express();
 
 -> express 사용
 <br>
 app.listen(8080,function(){
    console.log('listening on 8080')
});
 <br>
 (app.listen 으로 서버열기) -> listen(서버띄울 포트번호, 띄운 후 실행할 코드)

 <br> 
 js 파일 생성해서 위의 내용 저장 후 터미널에서 node server.js(파일이름) 실행하면 코드 출력됨. 
 <br>
 웹 브라우저에서 localhost:8080 하면 생성된것을 알수 있음 ( ctrl+c 를 누르면 끌수있음)
 <br>

 ## 3) GET 요청 받기
 <br>
 app.get('경로',function(요청,응답){
 <br>
    응답.send('이 페이지는 경로 페이지 입니다.')
});
<br>
-> 해당 경로로 들어오면 보여주게 처리함. 

## 4) node.js서버에서 html 파일 전송하는법 + nodemon 자동화
<br>
서버를 계속 껐다 키면서 수정한 부분 업데이트하는것을 자동화 -> nodemon
<br>
npm install -g(모든폴더에서 쓸거임) nodemon 으로 설치
<br>
만약 보안오류가 빨간글씨로 뜬다! -> powershell 오류 powershell 권리자권한으로 실행 -> set-executionpolicy unrestricted -> y
<br>
app.get('/',function(요청,응답){
<br>
    응답.sendFile(__dirname+'/index.html')
<br>
});
<br>
를 추가하면 들어왔을때 html 페이지를 보여준다. -> html 파일 생성
<br>

## 5) Bootstrap 사용하기
<br>
Bootstrap이란 ? 프론트엔드 컴포넌트 라이브러리이다. 트위터 사내 개발자가 개발함. 네비,버튼 만드는 과정이 귀찮, 라이브러리임
<br>
Bootstrap 사이트 들어가서 최신버전 ex) 5.1 -> Starter template에 있는 코드 복붙
<br>
그 후 button넣고 싶으면 원하는거 검색해서 복붙하면 됨

 
 
<br>
<br>
<br>
 강의 : https://www.youtube.com/watch?v=-zOfTS1HQTc&list=PLfLgtT94nNq1qmsvIii_CAxFlD7tvB5NE
