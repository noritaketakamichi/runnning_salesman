//遺伝的アルゴリズムのトライアル
const { generateArr, addStartEnd } = require("./generateArr");
const { calcDist } = require("./calcDist");
const tokyo = [0, 'tokyo', 35.68944, 139.69167]

//ランダムな配列を生成
const locArr1 = [tokyo, ...generateArr(), tokyo];
const locArr2 = [tokyo, ...generateArr(), tokyo];
const locArr3 = [tokyo, ...generateArr(), tokyo];
const locArr4 = [tokyo, ...generateArr(), tokyo];

console.log(locArr1);
console.log(locArr2);
// console.log(locArr3);
// console.log(locArr4);

let distanceArr = [[1, calcDist(locArr1)], [2, calcDist(locArr2)], [3, calcDist(locArr3)], [4, calcDist(locArr4)]]

console.log(distanceArr);