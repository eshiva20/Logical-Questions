//Q. Find the Total Score for Dynamic nested Object.

const data={
    person:{
        score: 100,
        person: {
            score: 0,
            person:{
                score: 13,
                person:{
                    score:50,
                    person:{
                        score:7
                    }
                }
            }
        }
    }
}


// const totalScore= data.person.score + data.person.person.score + data.person.person.person.score + data.person.person.person.person.score

let total = 0
const addTotal=(item)=>{
    total = total + item.score
    if(item?.person){
        addTotal(item.person)
    }
}
addTotal(data.person)

console.log('total', total)