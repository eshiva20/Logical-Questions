// Q. Find all triplets with zero sum

let arr = [-1, 0, 1, 2, -1, -4];
let ansSet = new Set();

for (let i = 0; i < arr.length - 2; i++) {
    for (let j = i + 1; j < arr.length - 1; j++) {
        for (let k = j + 1; k < arr.length; k++) {
            if (arr[i] + arr[j] + arr[k] === 0) {
                ansSet.add(JSON.stringify([arr[i], arr[j], arr[k]].sort((a, b) => a - b)));
            }
        }
    }
}

let ansArr = Array.from(ansSet).map(triplet => JSON.parse(triplet));

if (ansArr.length === 0) {
    console.log("No triplet exists with sum 0");
} else {
    console.log(ansArr);
}