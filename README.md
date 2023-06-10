# Web_Server 스터디
<br>
<br>
## Node.js + MongoDB(NoSQL)을 사용하여 웹 사이트 개발
<br>
->사용기술 :  Node.js + MongoDB(NoSQL) + DB저장/출력 + 서버 제작(API)+ 서버 배포 + npm + bootstrap 등

http 요청 -> 읽기(get)/쓰기(post)->생성,작성/수정(put)/삭제(delete) 요청이 있다.

# 1) Node.js를 이용해서 javascript 문법으로 서버짜는 이유
 <br>
 js는 브라우저가 해석한다. (해석엔진으로) 따라서 브라우저마다 쓰는 엔진이 다르다. 크롬(V8),파이어폭스(스파이더몽키) 등
 v8해석엔진이 뛰어나서 똑 떼서 만든것이 Node.js 브라우저 내에서 말고도 다른환경에서도 돌아가게 만듦. 자바스크립트 실행창,실행환경(런타임) -> 컴퓨터에서도 프로그래밍처럼 사용하기 시작함 -> 쉽게 서버를 만들 수 있음
 <br>
 ??왜 Node.js로 서버를 만드느냐? Non-blocking I/O 때문이다.
 - 만약 python같은 언어로 서버를 만들었다. -> 요청이 들어오면 1개짜리 요청 마다 1초 걸려서 처리한다고 한다. 여기서 200개짜리 요청이면 200초 걸려서 처리. 200초동안 기다리게 한다. 그 다음 요청을 받는다.-> 즉, 오래걸리는 요청을 받으면 서버가 멈춰있다. 다른 사용자는 뒤에서 기다려야한다. (FIFO)
 - Node.js는 일단 요청을 전부 다 받는다. 그럼 처리 속도가 빠른것부터 먼저 처리해준다. 그래서 빨리빨리 해준다.(Non-blocking)
 - 서버가 요청받는것땜에 멈추지 않는다. 따라서 SNS,채팅서비스(특: 요청이 매우 많음)-> 멈추거나 요청 대기시간X
 - 물론, 서버의 스케일링 혹은 멀티쓰레딩으로 일반서버로도 가능하긴 함. 
 - 하지만 이러한 작정때문에 많이 씀 + 코드가 매우 짧고 쉬워서 빠른 개발가능. 
 - 다만 웹서비스가 아닌 경우는 좀....(이미지처리같은 경우 같이쓸만한 라이브러리가 별로 없...)

# 2) Node.js 설치/환경설정 하기
 
<br>
<br>
<br>
참고 강의 : https://www.youtube.com/watch?v=-zOfTS1HQTc&list=PLfLgtT94nNq1qmsvIii_CAxFlD7tvB5NE
