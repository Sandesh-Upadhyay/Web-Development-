let random = Math.random()
console.log(random )
let a = prompt("Enter First Number")
let c = prompt("Enter Operration")
let b = prompt("Enter Second Number")

let obj = {
    "+" : "-",
    "*" : "+",
    "-" : "/",
    "/" : "**",
}
// if (random > 0.1) {
//   // Perform correct calculation
//   console.log(`The result is ${a} ${c} ${b}`)
//   alert(`The result is ${eval(`${a} ${c} ${b}`)}`)
  
// }

// else {
//   // Perform wrong calculation
//   c = obj[c]
//   alert(`The result is ${eval(`${a} ${c} ${b}`)}`)
// } 

if (random > 0.1){
  console.log('The result is ${a} ${c} ${b}') 
  alert('The result is ${eval('${a} ${c} ${b}')}') 
}
else{
  c = obj[c]
  alert('The result is ${eval('${a} ${c} ${b}')}')
}


/*
let random = Math.random()
console.log(random)
let a = prompt("Enter first number")
let c = prompt("Enter operation")
let b = prompt("Enter second number")

let obj = {
  "+": "-",
  "*": "+",
  "-": "/",
  "/": "**",
}



if (random > 0.1) {
  // Perform correct calculation
  console.log(`The result is ${a} ${c} ${b}`)
  alert(`The result is ${eval(`${a} ${c} ${b}`)}`)
  
}

else {
  // Perform wrong calculation
  c = obj[c]
  alert(`The result is ${eval(`${a} ${c} ${b}`)}`) 
  
}*/