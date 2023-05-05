//Q. Find the reverse of the string

var str="shiva";
var revStr='';
for(var i=str.length-1;i>=0;i--){
    revStr=revStr+str.charAt(i)
}
console.log(revStr);