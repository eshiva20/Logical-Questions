//WAP to find missing elements from the array?

function missingNum(arr){
    let missedValue=[];
    let min=Math.min(...arr);
    let max=Math.max(...arr);

    for(var i=min;i<max;i++){
        if(arr.indexOf(i)<0){
            missedValue.push(i)
        }
    }
    return missedValue;
}
console.log(missingNum([4,7,9,10]))