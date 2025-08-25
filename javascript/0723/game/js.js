let winCount = 0;
let loseCount = 0;
let gameHistory = [];

function play(user) {

    const comor = Math.floor(Math.random()*3);
    const comArr = ["가위", "바위", "보"];
    com = comArr[comor];

    const imgMap = {
      "가위" : "s",
      "바위" : "r",
      "보" : "p"
    };

    //이미지 출력
    document.getElementById("me").className = "rps " + imgMap[user];
    document.getElementById("com").className="rps " + imgMap[com];

    //결과 판정
    let result = "";
    if(user == com) {
       result = "무승부입니다.";
    }else if( (user=="가위" && com=="보") || 
              (user=="바위" && com=="가위") ||
              (user=="보" && com=="바위")) {
       result = "이겼습니다.";
       winCount++;
    }else{
      result ="졌습니다.";
      loseCount++;
    }
    //결과 출력
    document.getElementById("result").textContent = "결과 : " + result;

    //게임 기록 저장 
    gameHistory.push({ me: user, com, result });
    if(gameHistory.length > 5) gameHistory.shift();

    //결과출력
    let rs = "";
    if(winCount === 3) { //최종 승리
      rs = "🎉 최종 승리!!! 5판 3선승 🎉 <br>";
      rs += "<button onclick='reset()'>다시시작</button>";
    }else if(loseCount === 3){ //최종 실패
      rs = "😭 최종 패배!!! 5판 3선승 😭";
      rs += "<button onclick='reset()'>다시시작</button>";
    }else{ //결과 계속 출력
      rs = gameHistory.map(function(g, i){
         return `<p>${ i + 1 }회차 => 나 : ${g.me} vs 컴퓨터 : ${g.com}, 결과 : ${g.result}</p>`;
      }).join("");
    }
 
    document.getElementById('final').innerHTML = rs;

}

function reset(){
   winCount = 0;
   loseCount = 0;
   gameHistory = [];
   document.getElementById('final').innerHTML = "";

}