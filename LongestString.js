// Q. Find Longest String in Array

const longestString2 = (arr) => {
	let longest = ''; // Step 0
	arr.forEach((item) => { // Step 1
		if(item.length > longest.length) {
            longest = item;
        }
	});
	return longest; // Step 5
};

console.log(longestString2(['stdawr','shicva']))