const location = require("./data/location");
const start = [0, 'tokyo', 35.68944, 139.69167]

//トータル距離を求める関数
const calcTotalDist = (locArr) => {
    //locArr=Array(12)
    // console.log("location:"+location[10]);
    // console.log("locArr:"+locArr);
    let distance = 0;
    distance+=calcDistfromStart(locArr[0])
    for (let i = 1; i < locArr.length - 2; i++) {
        // console.log("locArr[i]:"+locArr[i]);
        distance += calcTwoPoint(locArr[i],locArr[i+1])
    }
    distance+=calcDistfromStart(locArr[locArr.length-1])
    return distance
}

//2点間距離の導出
const calcTwoPoint = (point1, point2) => {
    // console.log(point1);
    return Math.sqrt((location[point1][2] - location[point2][2]) ** 2 + (location[point1][3] - location[point2][3]) ** 2)
}

//スタート（＝ゴール）からの距離を導出
const calcDistfromStart = (point) => {
    return Math.sqrt((start[2] - location[point][2]) ** 2 + (start[3] - location[point][3]) ** 2)
}

module.exports = { calcTotalDist };