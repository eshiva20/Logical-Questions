async function fetchWithAutoRetry(fetch,count){
    if(count>0){
      try{
        const response= await fetch()
        console.log(`${response} ${count}`)
        return response
      }catch(err){
        console.log("err",err)
        return await fetchWithAutoRetry(fetch,count-1)
      }  
    }else{
      throw new Error("Max API Call attempts exceeded")
    }
}

const exampleFetchFunction = () => {
    return new Promise((res, rej) => {
        if (Math.random() > 0.5) {
            res("Success");
        } else {
            rej("Failed");
        }
    });
};


fetchWithAutoRetry(exampleFetchFunction,3)
.then((res)=>{
    console.log("Final response",res)
})
.catch(err=>console.log("final err",err))
