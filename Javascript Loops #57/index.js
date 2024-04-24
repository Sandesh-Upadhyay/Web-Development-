// for loop 

// const Month = ["January","February","March","April","May","June","July","August","September","October","November","December"]
// let month,len;
// for (let month = 1; month<= 12; month++){
//     console.log(month + " ")
// }

// let i = 5;
// for (let i = 0; i<=10; i++) {
//     console.log(i)
    
// }

// var a = 5;
// for (var a = 1; a<=10; a++) {
//     console.log(a) 

// }

/*FOR IN */
/*
for (const key in object) {
        const element = object[key,element];   
    }
*/

let c = {fname:"Sandy",lname:"rock", age:22 };
for(const  key  in c){
    const element = c[key]
    console.log(key,element)
}
//another example:
let calender  = {Month1:"January",Month2:"february",Month3:"March",Mont4:"April",Month5:"May",Month6:"June",Month7:"July",Month8:"August",Month9:"September",Month10:"October",Month11:"November",Month12:"December"};
for (const key in calender ) {
       const element =  calender[key]
       console.log(key,element) 
    }
// another example:

let cars = {B_Brand:"Bmw",J_Brand:"Jaguar",A_Brand:"Audi",B_Brand:"Benz"};
for (const key in cars){
    // z+=cars;
    const element = cars[key]
    console.log(key,element)
}

/*FOR OF*/ 
/*for (const iterator of object) {
     
}*/
for (const c of "John Doe") {
    console.log(c)
    
}

// Another Example

for(let boolean of "boolean"){
    console.log(boolean)
}

// Another Example

for(const Alphabates of "ABCDEFGHIJLMNOPQRSTUVWXYZ"){
    console.log(Alphabates)
}

// WHILE LOOP
/* 
while (condition) {
    
}*/
let  a = 22;
while (a<=20) {
    console.log(a);
    a++  
}

// Another example


let i = 100;
while (i<=100) {
    console.log(i);
    i++;
}

// const t = 50;
// while (t<60) {
//     console.log(t);
//     t++
// }

// DO WHILE 
/*
do {
    
} while (condition);
 */
let h = 10;
do {
    console.log(a)
    a++
} while (a<150);

// Another Example


let g = 20;
do {
    console.log(g)
    g++
} while (g<100);

// let i = 0;
// while(i<10){
// i++;
// console.log("The Number is"+" " + i)
// }

// let d = 1;
// do{
//     console.log("The Price is" + " "+ d);
//     d++;
// }
// while(d <20);
// // console.log(("b"+"a"+ + "a"+"a").toLowerCase());
