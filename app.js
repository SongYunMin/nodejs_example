const express = require("express");
const ejs = require("ejs");
const bodyParser = require('body-parser');
const app = express();

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended: false}));  // URL 인코딩 안함
app.use(bodyParser.json());                         // JSON 타입으로 파싱하게 설정
app.use(express.static(__dirname + '/'));

app.get("/", function(req,res){
    console.log("안녕 테스트 페이지");
    res.render("test1",{});
})

app.get("/hello", function(req,res){
    res.render("test2",{
        one: "this is one",
        two: "this is two"
    });
})

app.post("/postTest",function(req,res){             // postTest라는 주소로 POST 요청이 들어오면 실행
    console.log(req.body);                          // body에 있는 정보를 콘솔창에 출력
    res.json({ok:true});                            // 클라이언트에 성공했다고 신호를 보냄
})

app.listen(2500,function(){
    console.log("실행중..");
})