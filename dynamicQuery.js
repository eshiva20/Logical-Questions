// Q.Send dynamic Query as payload don't send key if value is empty (Review Question)

const payload ={
    search:"ssd",
    page:10,
    data:"",
    offset:20,
    abc: "",
    xyz: "" 
}

const keys=Object.keys(payload) 

let url=[]
keys.filter(data=>{
  if(payload[data] !==""){
      url.push(`${data}=${payload[data]}`)
  }
})

url = url.join('&')
console.log(url)