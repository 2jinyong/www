let greenarr = ["교대", "방배", "강남"];
let yellowarr = ["미금", "정지", "수서"];

greenarr.splice(2,1,"서초","역삼");
console.log(greenarr)

let data1 = yellowarr.pop();
console.log(data1);
console.log(yellowarr);

let date2 = yellowarr.shift();
console.log(data2);
console.log(yellowarr);

yellowarr.push(data1);
yellowarr.unshift(data2);

console.log(yellowarr);