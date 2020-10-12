//遺伝的アルゴリズムのトライアル
const { generateRandomArr, addStartEnd } = require("./generateArr");
const { calcTotalDist } = require("./calcDist");
const tokyo = [0, 'tokyo', 35.68944, 139.69167]

//ランダムな配列を生成
const locArr = [
    JSON.parse(JSON.stringify(generateRandomArr())),
    JSON.parse(JSON.stringify(generateRandomArr())),
    JSON.parse(JSON.stringify(generateRandomArr())),
    JSON.parse(JSON.stringify(generateRandomArr()))
];

console.log("locArr:" + JSON.stringify(locArr));
//それぞれの距離の輪を表示
let distanceArr = [[locArr[0], calcTotalDist(locArr[0])], [locArr[1], calcTotalDist(locArr[1])], [locArr[2], calcTotalDist(locArr[2])], [locArr[3], calcTotalDist(locArr[3])]]

//世代数
const generationNum = 10;

for (let i = 0; i < generationNum; i++) {
    //距離が短い2ルートを抽出
    const topTwo = pickTopTwo(distanceArr);
}
console.log(distanceArr);