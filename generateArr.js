const location = require("./data/location");
const tokyo = [0, 'tokyo', 35.68944, 139.69167]

const generateArr = () => {

    //ランダムに並び換え
    location.sort(function () {
        return Math.random() - 0.5;

    });

    // console.log(location);
    return location;
};

const addStartEnd=(arr)=>{
    arr.unshift(tokyo);
    arr.push(tokyo);
    console.log(arr);

}

module.exports = { generateArr,addStartEnd };

