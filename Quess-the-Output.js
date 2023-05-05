// Q. Guess the Output (Review Question)

function abc() {
  try {
    throw new Error();
  } catch (x) {
    var x = 1;
    var y = 2;
    console.log(x);
  }
  console.log(x);
  console.log(y);
}
abc();

// ----------------------------------------------------------------------------------------------------------------------------------------------/

let randomValue = { key: "react" };
randomValue = 10;

if (!typeof randomValue === "string") {
  console.log("its not a string");
} else {
  console.log("its string");
}

//-------------------------------------------------------------------------------------------------------------------------------------------------/

function outer() {
  var a = 1;
  function inner() {
    a++;
    console.log(a);
    var a = 2;
  }
  inner();
}
outer()(
  //-------------------------------------------------------------------------------------------------------------------------------------------------/

  () => {
    var a = 10;
    console.log(a);
  }
)();
console.log(a);

//--------------------------------------------------------------------------------------------------------------------------------------------------/

const obj1 = { a: 1, b: 2 };
const obj2 = { a: 1, b: 2 };
const obj3 = { a: 1, c: 3 };

function compareObjects(obj1, obj2) {
  for (const key in obj1) {
    if (obj1[key] !== obj2[key]) {
      return false;
    }
  }
  return true;
}

console.log(compareObjects(obj1, obj2));    
console.log(compareObjects(obj1, obj3)); 
