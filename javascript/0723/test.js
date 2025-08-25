const tv = new Object(); //기본 객체 생성함수 object()
tv.color = "흰색";
tv.price = "5,000,000원";
tv.info = function(){
    console.log("tv 색상 : " + this.color);
    console.log("tv 가격 : " + this.price);
}
console.log(tv.color);
tv.info();