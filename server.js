
const express = require('express');
const app = express();

app.listen(8080,function(){
    console.log('listening on 8080')
});

app.get('/pet',function(요청,응답){
    응답.send('이것의 페이지는 펫 페이지 입니다.')
});

app.get('/beauty',function(요청,응답){
    응답.send('여기의 페이지는 beauty 페이지 입니다.')
});

app.get('/',function(요청,응답){
    응답.sendFile(__dirname+'/index.html')
});

app.get('/write',function(요청,응답){
    응답.sendFile(__dirname+'/write.html')
});