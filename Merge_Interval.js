// Q. WAP merge_intervals that takes a list of intervals as input and returns a new list of intervals after merging overlapping ones.


let arr = [[1,3],[2,6],[8,10],[15,18]];

arr.sort((a, b) => a[0] - b[0]);

let result = [];
let currentInterval = arr[0]; 

for (let i = 1; i < arr.length; i++) {
    if (arr[i][0] <= currentInterval[1]) {
        currentInterval[1] = Math.max(currentInterval[1], arr[i][1]);
    } else {
        result.push(currentInterval);
        currentInterval = arr[i];
    }
}
result.push(currentInterval);

console.log(result);