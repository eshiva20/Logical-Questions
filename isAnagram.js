//Q.logic for anagram program with its time complexity. (for large strings) 

function isAnagram(str1, str2) {
    if (str1.length != str2.length) {
        return false;
    } else {
        var string1 = str1.split('').sort()
        var string2 = str2.split('').sort()
        for (let i in string1) {
            if (string1[i] != string2[i]) {
                return false;
            }
        }
        return true;
    }
}
console.log(isAnagram("shiva", "hisva"));