const calcDist = (locArr) => {
    let distance = 0;
    for (let i = 0; i < locArr.length - 1; i++) {
        distance += Math.sqrt((locArr[i + 1][2] - locArr[i][2]) ** 2 + (locArr[i + 1][3] - locArr[i][3]) ** 2)
    }
    return distance
}

module.exports = { calcDist };