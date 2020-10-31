const location = require("./data/location");
const tokyo = [0, 'tokyo', 35.68944, 139.69167]
// const numArr=[0,1,2,3,4,5,6,7,8,9,10,11]

//numArrを並び替える
const generateRandomArr = () => {

    // for(let i =0,i<location.length)
    // console.log(location);
    let numArr=[]
    for(let i=0;i<location.length;i++){
        numArr.push(i)
    }

    //ランダムに並び換え
    numArr.sort(function () {
        return Math.random() - 0.5;
    });

    // console.log("numArr:"+numArr);
    return numArr;
};

const addStartEnd=(arr)=>{
    arr.unshift(tokyo);
    arr.push(tokyo);
    // console.log(arr);

}

module.exports = { generateRandomArr,addStartEnd };

