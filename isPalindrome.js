// Q. Return True is String is Palindrome


const palindrome = (str) => {
    let trimmed = str.replace(/[^\w]/g, "");
    return trimmed === trimmed.split('').reverse().join('');
}

console.log(palindrome("madam"))