//遺伝的アルゴリズムのトライアル
const { generateRandomArr, addStartEnd } = require("./generateArr");
const { calcTotalDist } = require("./calcDist");
const { selection } = require("./selection");
const { generateChildren } = require("./generateChildren");
const { mutation } = require("./mutation");

const tokyo = [0, 'tokyo', 35.68944, 139.69167]

//ランダムな配列を生成
const locArr = [
    JSON.parse(JSON.stringify(generateRandomArr())),
    JSON.parse(JSON.stringify(generateRandomArr())),
    JSON.parse(JSON.stringify(generateRandomArr())),
    JSON.parse(JSON.stringify(generateRandomArr()))
];

//それぞれの距離の輪を表示
let distanceArr = [[locArr[0], calcTotalDist(locArr[0])], [locArr[1], calcTotalDist(locArr[1])], [locArr[2], calcTotalDist(locArr[2])], [locArr[3], calcTotalDist(locArr[3])]]
// console.log("distanceArr:"+JSON.stringify(distanceArr));

//世代数
const generationNum = 100000;

for (let i = 0; i < generationNum; i++) {
    // console.log("distanceArr:"+JSON.stringify(distanceArr));
    
    //2つのルートをルーレット選択で選択
    const SelectedRoutes = JSON.parse(JSON.stringify(selection(distanceArr)));
    const parents=JSON.parse(JSON.stringify([SelectedRoutes[0][0],SelectedRoutes[1][0]]));
    // console.log("Parents:",JSON.stringify(parents));

    //一点交叉（切り離してくっつける）
    //2つの子供が生成される
    const children=generateChildren(SelectedRoutes);
    // console.log("children:",children);

    //突然変異
    //0.05の確率で入れ替え
    // console.log("-------------",children[1]);
    children[1]=mutation(children[1]);
    // console.log("^^^^^^^^^^^^^^",children[1]);

    //次世代の4ルート
    const nextGen= [...parents,...children];
    // console.log("nextGen:",JSON.stringify(nextGen));

    distanceArr = [[nextGen[0], calcTotalDist(nextGen[0])], [nextGen[1], calcTotalDist(nextGen[1])], [nextGen[2], calcTotalDist(nextGen[2])], [nextGen[3], calcTotalDist(nextGen[3])]]
    console.log("dist:",distanceArr[0][1]);
    
}