//WAP to reverse an integer without converting it to a string, without using any builtin methods.

var num=1243;
var rev=0
while(num>0){
    rev=(rev*10)+(num%10);
    num=Math.floor(num/10)
}
console.log(rev)