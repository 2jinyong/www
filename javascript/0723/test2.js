const toDay = new Date();
console.log(toDay);

const nowMonth = toDay.getMonth();
const nowDate = toDay.getDay();
const nowDay = toDay.getDay();


let strDay;
switch(nowDay){
    case 0:
        strDay = "일";
        break;
    case 1:
        strDay = "월";
        break;
    case 2:
        strDay = "화";
        break;
    case 3:
        strDay = "수";
        break;
    case 4:
        strDay = "목";
        break;
    case 5:
        strDay = "금";
        break;
    case 6:
        strDay = "토";
        break;
}
    console.log("오늘은" + (nowMonth + 1) + "월"+ nowDate + "일" + strDay + "요일입니다.");

    const hbday = new Date(2002,4,22);
    const hbDay = hbday.getDay();

    console.log(hbDay);

    const today = new Date();
    const nowYear = today.getFullYear();
    const lastDate = new Date(nowYear,11,31);

    const diffDate = lastDate.getTime() - today.getTime();
    console.log(diffDate);

    /*
    1초 > 1000msc
    1분 > 1*1000*60
    1시간 > 1*1000*60*60
    1일 > 1*1000*60*60*24
    */

    let rs = Math.ceil(diffDate / (1000 * 60 * 60 * 24));
    console.log("연말까지 " + rs + "남았다");
    


    /*
    아래 문항의 문제
    num = 2.1234
    1. 숫자 10, 5, 8, 30 의 최댓값을 구해라
    2. 위숫자의최솟값을 구해라
    3. num을 반올림
    4. 반내림
    5. 올림
    6. 0과 1사이의 난수를 발생
    7. 원주율 상수를 출력
    */

    let num = 21.5234;  

    const max = Math.max(10,5,8,30);
    const min = Math.min(10,5,8,30);
    const round = Math.round(num);
    const floor = Math.floor(num);
    const ceil = Math.ceil(num);
    const random = Math.random();
    const pi = Math.PI;

    console.log(max);
    console.log(min);
    console.log(round);
    console.log(floor);
    console.log(ceil);
    console.log(random);
    console.log(pi);
