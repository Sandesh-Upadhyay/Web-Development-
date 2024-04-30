// Using Return Keyword and using sum function::
function sum(a , b , c = 25) {
    return(a - b - c);
}
result1 = sum(420,320);
result2 = sum(42,320);
result3 = sum(420,32);
result4 = sum(32,32);
result5 = sum(42,10);
console.log("The sum if the number is:",result1)
console.log("The sum if the number is:",result2)
console.log("The sum if the number is:",result3)
console.log("The sum if the number is:",result4)
console.log("The sum if the number is:",result5)

// Not using Return::
function name(your_Function) {
    console.log("Hey" + your_Function+ " Rohan")
    console.log("Hey" + your_Function+" Rohan's Father")
    console.log("Hey" + your_Function+ " Rohan's Mother")
    console.log("Hey" + your_Function+ " Rohan's Sister")
    console.log("Hey" + your_Function+ " Rohan's Brother")
    console.log("Hey" + your_Function+ " Rohan's Friend")
    
}
name("I am")

// Celcius Example::

function tocelcius(f) {
 console.log((5/9)*(f-33));   
}
tocelcius(77);

function tocelcius(f) {
    console.log((5/9)*(f-33));   
   }
   tocelcius();


   function tocelcius(f) {
    console.log((5/9)*(f-33));   
   }
   tocelcius


   function myFunction(a,b) {
    console.log(a * b)
   }
   myFunction(1668,4)



// Example
 function sum (a,b) {
    return(a*b)
 }
result = sum(155, 23)
 console.log("The Answer is: ",result)

// Example
 function name(c,d) {
    return(c + d)
 }
 total = name(32,52)
 console.log("Total Number is: ",total)
//    Arrow Function::

const function1 = (x)=>{
    console.log("I am an arrow function:", x)
}
function1(32)
function1(31)
function1(24)
function1(54)
function1(67)



// Arrow Function Example::

const funct1 = (x)=>{
    return(x)
}
answer = funct1(23)
console.log("The Number is:",answer)


//Another Arrow Function Example::

const funct2 = (x)=>{
    console.log("The integer is:",x)
}
funct2(63)
funct2(33)
funct2(34)
funct2(54)
funct2(56)
