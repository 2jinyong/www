let str = "안녕하세요?철수님";
console.log(str.replace("철수","영희"));

let str2 = "hello javascript";
console.log(str2.slice(3,7));
console.log(str2.slice(3,-3));

console.log(str2.substring(3,7));
console.log(str2.substring(3,-3));

str2.substring(-3); // substring의 - 값은 index 0 
str2.substring(2, 1); // str2.substirng(0,2);

