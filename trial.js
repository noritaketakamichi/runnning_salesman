//遺伝的アルゴリズムのトライアル
const { generateRandomArr, addStartEnd } = require("./generateArr");
const { calcTotalDist } = require("./calcDist");
const { selection } = require("./selection");
const { generateChildren } = require("./generateChildren");

const tokyo = [0, 'tokyo', 35.68944, 139.69167]

//ランダムな配列を生成
const locArr = [
    JSON.parse(JSON.stringify(generateRandomArr())),
    JSON.parse(JSON.stringify(generateRandomArr())),
    JSON.parse(JSON.stringify(generateRandomArr())),
    JSON.parse(JSON.stringify(generateRandomArr()))
];

// console.log("locArr:" + JSON.stringify(locArr));
//それぞれの距離の輪を表示
let distanceArr = [[locArr[0], calcTotalDist(locArr[0])], [locArr[1], calcTotalDist(locArr[1])], [locArr[2], calcTotalDist(locArr[2])], [locArr[3], calcTotalDist(locArr[3])]]
// console.log("distanceArr:"+distanceArr);

//世代数
const generationNum = 10;

for (let i = 0; i < generationNum; i++) {
    //2つのルートをルーレット選択で選択
    const SelectedRoutes = selection(distanceArr);
    const Parents=JSON.parse(JSON.stringify([SelectedRoutes[0][0],SelectedRoutes[1][0]]));
    console.log("Parents:"+JSON.stringify(Parents));

    //一点交叉（切り離してくっつける）
    //2つの子供が生成される
    const children=generateChildren(SelectedRoutes);
    console.log("Parents:"+JSON.stringify(Parents));
    console.log("children:"+JSON.stringify(children));

    const nextGen= [SelectedRoutes[0][0],SelectedRoutes[1][0],children[0],children[1]];
    console.log("nextGen:"+JSON.stringify(nextGen));

}
console.log(distanceArr);