// Q. Return True is Number is Armstrong Number

// An Armstrong number is an n-digit number that is equal to the sum of the nth powers of its digits. Determine if the input number is an Armstrong number. Return either true or false.

function isArmstrongNumber(n) {
    let strN = n + '';
    let power = strN.length;
    let sum = 0;
    for(let i = 0; i < strN.length; i++) {
        sum += Math.pow(Number(strN[i]), power);
    }
    return sum === n;

}
console.log(isArmstrongNumber(13))