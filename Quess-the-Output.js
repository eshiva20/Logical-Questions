// Q. Guess the Output (Review Question)

function abc(){
    try{
        throw new Error()
    }catch(x){
        var x = 1
        var y = 2
        console.log(x)
    }
    console.log(x)
    console.log(y)
}
abc()