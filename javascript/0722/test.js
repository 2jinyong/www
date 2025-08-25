sum10();

function sum10(){
    let sum = 0;
    for(let i = 1; i<=10; i++){
        sum +=i;
    }
    console.log(sum);
}

// myfunc2는 참조변수
let myfunc2 = function(){
    console.log("noname함수");
}

sun(10,44);

function sun(x,y){
    console.log(x+y);
}