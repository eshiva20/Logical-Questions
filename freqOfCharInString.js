// Q. Counting frequency of characters in a string

function getFrequency(str){
    let freq={}
    for(var i=0;i<str.length;i++){
     let char=str.charAt(i);
     if(freq[char]){
         freq[char]++
     }else{
         freq[char]=1;
     }
    }
    return freq;
}

console.log(getFrequency("madam"))