function getSliceofFive (arr){
    console.log("At Begin slice: ", arr)
    const slicedArr= arr.slice(0,5)
    return slicedArr
}

export default function fischerYates (arr){
    console.log("At Begin Shuffle: ", arr)
    let currentI = arr.length, tempI, randomI;
    while (currentI){
        //choose a random val less than or equal to currentI
        randomI = Math.floor(Math.random()*currentI)
        //decrement
        currentI -= 1
        //swap values
        tempI = arr[currentI];
        arr[currentI] = arr[randomI];
        arr[randomI] = tempI;
    }
    getSliceofFive(arr)
    console.log("After slice: ", slicedArr)
    return arr
}