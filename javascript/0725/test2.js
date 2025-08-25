const str = "ABC";
console.log(str.charCodeAt(0));

console.log(String.fromCharCode(65));

console.log("_______________________________");


let t = "Hello Thank you good luck to you";

console.log(t.charAt(16));
console.log(t.indexOf("you"));
console.log(t.indexOf("you",16));
console.log(t.lastIndexOf("you"));
console.log(t.lastIndexOf("you",25));
console.log(t.substr(21,4));
console.log(t.substring(6,12));
console.log(t.replace("you","me"));
console.log(t.toLowerCase().replace("and"));
console.log(t.replaceAll("","and"));


// 1.인덱스 16에 저장된문자를 불러오라 g
// 2.좌측부터 가장 먼저 발견되는 you의 인덱스 번호는? 12
// 3.문자열 인덱스 16위치부터 제일 먼저 발견된 you의 인덱스 번호는? 29
// 4.문자열 오른쪽 제일 먼저 발견된 you의 인덱스 번호는? 29
// 5.문자열 인덱스 25부터 왼쪽방향으로 제일먼저 발견된 you인덱스번호는?
// 6.문자열 인덱스 21부터 네글자를 가져오라 luck
// 7.인덱스 6부터 12이전까지의 문자를 가져오라 Thank
// 8.왼쪽부터 제일 먼저 발견된 you를 me로 치환하라
// 9.문자열을 모두 소문자and로 변환하라
// 10.문자열의 길이를 반환하라.
// 11.공백을 기준으로 문자를 분리해서 인덱스 0과 4를 출력하라.
// 12.인덱스0의 아스키코드값을 출력하라.
// 13.아크키 코드의 70의 문자를 반환하라.