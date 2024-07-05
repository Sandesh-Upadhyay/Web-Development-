let list = ["BMW","Audi","Buggati","Mercedes"];
console.log(list);
console.log(typeof(list));

// const brand = [];
// brand[0] = "Audi";
// brand[1] = "Jaguar";
// brand[2] = "Auto";
// brand[3] = "BMW";
// console.log(brand[0]);
// console.log(brand[1]);
// console.log(brand[2]);
// console.log(brand[3]);



const cars = new Array("BMW","Audi","Buggati","Mercedes");
console.log(cars);

let brand = [];
brand[0] = "Audi";
brand[1] = "Jaguar";
brand[2] = "Auto";
brand[3] = "BMW";
// console.log(brand[0]);
// console.log(brand[1]);
// console.log(brand[2]);
// console.log(brand[3]);
brand[0] = "Ducatti"
console.log(brand);


const fruits = ["Apple","Banana","Grapes","Mango"];
console.log(fruits.toString("Apple"));
console.log(typeof(fruits));
console.log(fruits.length);
console.log(fruits[fruits.length-2]);
console.log(fruits)

const person ={first_name:"John", last_name:"Doe",age:"56"};
console.log(person.first_name);
console.log(person.last_name);
console.log(person.age);


// length()
const table = ["Cars","Fruits","Vegeables","Person","Aninmals"];
let text=(table.length);
table_1 = "<ul>";
for(i = 0; i<=text; i++){
     table_1 +="<li>" +table[i]+"</li>";
}
table_1 += "</ul>";
console.log(table_1);



const family = ["Father","Mohter","Sister","Brother"];
 let li = (family.length);

 li_1 = "<ul>";
 for(i = 0; i<=li; i++){
    li_1 += "<li>" + family[i] +"</li>";
 }
li_1 += "</li>";
console.log(li_1)

// forEach()
const family_2 = ["Father","Mohter","Sister","Brother"];
 let ki = (family_2.forEach);

 li_1 = "<ul>";
 for(i = 0; i<=li; i++){
    li_1 += "<li>" + family_2[i] +"</li>";
 }
li_1 += "</li>";
console.log(li_1)


//push():-adding new array 

let bag = ["pencil","eraser","notebook","book","cutter"];
bag.push("compass");
console.log(bag);

// length:- it can also add element in array without using .push()

/*
let rand_name = ["Mahesh","Ramesh","Suresh","Divesh"];
// rand_name.length("Ashish");
console.log(rand_name.length(Ashish));
*/

const person_ = [];
person_[0] = "Mohan";
person_[1] = "Singh";
person_[2] = 46;

console.log(person_[0]);
console.log(person_[1]);
console.log(person_[2]);
console.log(person_[3]);

//adding element with high indexes creates undefined "holes" in an array: 
const fruity= ["Appy","mango","banana","orangy"];
fruity [6] =":-All are not Juice"
console.log(fruity)

/* Associative Arrays:-
Many programming languages support arrays with named indexes.

Arrays with named indexes are called associative arrays (or hashes).

JavaScript does not support arrays with named indexes*/


const unknown = [];
unknown[0] = "John";
unknown[1] = "Doe";
unknown[2] = 46;

console.log(unknown.length);    // Will return 3
console.log(unknown[0]); 


// Javascript newArray()

//use this[] instead use this newArray()
/*
const num = new Array(100,10,11,23,34,34,5,66,67,77,89);
const num = [100,12,34,55,75,55,7,88,90,89,98];
console.log(num)

const num = new Array(100,10,11,23,34);
const num = [100,10,11,23,34];
console.log(num)

// Create an array with three element:
const num = new Array(100,10,11);
const num = [100,10,11];
console.log(num)

// Create an array with one element:
const num = new Array(30);
console.log(num)
*/

// How to Recognize an Array

// The problem is that the JavaScript operator typeof returns "object":
const fruts = ["Banana", "Orange", "Apple"];
const type = typeof fruts;
console.log(type)

// To solve this problem ECMAScript 5 (JavaScript 2009) defined a new method Array.isArray():
const fuits = ["Banana", "Orange", "Apple"];
tye = Array.isArray(fuits);
console.log(tye)

// The instanceof operator returns true if an object is created by a given constructor:
const fryts = ["Banana", "Orange", "Apple"];
const nym = (fryts instanceof Array);
console.log(nym)

// NESTED ARRAYS and OBJECTS:



// ARRAY METHODS:

// length property:-returns size of the property
// .length()

// toString property converts an array to a string of (comma separated)array values

let c = ["a","c","d","e"];
c = c.toString()
console.log(c)
console.log(typeof(c))


// at():- get the any element with help of at property [this is ES2022]
let as = ["w","e","D","G","F"];
console.log(as.at(4))

//join():- this array method join all array elements into a string.

let bs = ["S","S","A","D","W","R"];
console.log(bs.join(": Q "))
console.log(bs.join(": * "))
console.log(bs.join(": + "))

// pop and push:- means that removing element in an array called pop.and add element in a array called push.

// pop() removes tha last element of the array.
// push() add element in the last of array.

let fs = ["Banana", "Orange", "Apple", "Mango"];
console.log(fs.pop())


let fsd = ["Orange", "Apple", "Mango","Banana"];
fss = fsd.push("Grapes")
console.log(fsd)

let fd = ["Orange", "Apple", "Mango","Banana"];
fss = fd.push("Kiwi")
console.log(fd)


// Shifting Element : is equilent to Pop, it removes first element in the array and pop removes last element in the array:

// shift|()

let qq = ["Elephant", "Monkey", "Kangaroo","Cat"];
console.log(qq);
console.log(qq.shift());
console.log(qq);
console.log(qq.shift());
console.log(qq);
console.log(qq.shift());
console.log(qq);
console.log(qq.shift());
console.log(qq);
console.log(qq.shift());

// unshift : adds new element in beggining of the array and unshift older elements.

let animal = ["Monkey", "Kangaroo","Cat","Elephant"];
console.log(animal.unshift("Donkey"));
console.log(animal);

// length(): append a new element in the new array.


//concat(): creats a new array and merge.

const myGirls = ["Cecilie", "Lone"];
const myBoys = ["Emil", "Tobias", "Linus"];

const myChildren = myGirls.concat(myBoys);
console.log(myChildren);


let Mygirls = ["Cecilie", "Lone"];
let Myboys = ["Emil", "Tobias", "Linus"];
let ourpet = ["cow","buffalo","goat"];

let ourfamily = Mygirls.concat(Myboys,ourpet);
console.log(ourfamily);


// copyWithin():- copy an array elements to another position


// flat():- creates new array with sub array elements concat to be specified both.

const qr = [[1,2][3,4][5,6]];
console.log(qr.flat());

// splicing and slicing in array:-

// splice() adds new items to an array.

let  bn = [1,2,3,4,5,6];
console.log(bn.splice(2,2,"Lemon","Kiwi")); /*[The first parameter (2) defines the position where new elements should be added (spliced in).
The second parameter (2) defines how many elements should be removed.
The rest of the parameters ("Lemon" , "Kiwi") define the new elements to be added.]*/



// toSpliced:ES2023 added the Array toSpliced() method as a safe way to splice an array without altering the original array.
let  bb = [1,2,3,4,5,6];
console.log(bb.toSpliced(2,2,"12","13"));
console.log(bb)
console.log(bb.toSpliced(3,1,"12","13"));
// console.log(bb)
/*[to difference between toSpliced and splice is that toSpiced add new array and splice 
altered array ]*/



// slice() slices out a piece of an array.
let  nn = [1,2,3,4,5,6];
console.log(nn.slice(2,3));


let  n= [1,2,3,4,5,6];
console.log(n.slice(3));

//toString;

let d = ["23", "24", "25", "26", "27"];
console.log(toString());
console.log(typeof(d));


// ARRAY SEARCH:

// indexOf():- position of element


let pos = ["12","23","22","33","45","56"];
console.log(pos.indexOf("33"));

//lastIndexOf():-returns the position of the last occurrence of the specified element.

let las_pos = ["78","23","22","33","45","56"];
console.log(las_pos.lastIndexOf("45",5))


// includes():-This allows us to check if an element is present in an array (including NaN, unlike indexOf).[ES2016]
let incl = ["Mango","Apple","Guava","Pineapple","Banana"];
console.log(incl.includes("Banana"));

// find():-returns the value of the first array element that passes a test function.

let find = ["23","34","45","56","67","77"];
console.log(find.find("34"));

// findIndex():-returns the index of the first array element that passes a test function.

let infind = ["23","24","45","56","67","89","90"];
console.log(infind.findIndex(3));

// findLast():-start from the end of an array and return the value of the first element.  
let fl = ["34","44","56","78","89","90"];
console.log(fl.findLastIndex(90))

// findLastIndex():- finds the index of the last element that satisfies a condition. 

let flind = ["34","44","56","78","89","90"];
console.log(flind.findLastIndex(90))



// ARRAY SORT:
// ALPHABETICALLY SORT-

// sort()- method sorts and array alphabetically.

let sort = ["Ramesh","Guava","Pink","Rhythm","Popcorn","Queen"];
console.log(sort.sort());

let another_Sort = ["N","I","Y","U","V","I","N","A","N","D","A","N"];
console.log(another_Sort.sort())

// reverse()- method reverse elements in an array.
// bycombining reverse() and sort() can sort decending order.

let sort1 = ["Ramesh","Guava","Pink","Rhythm","Popcorn","Queen"];
console.log(sort1.reverse());
console.log(sort1.sort());

// toSorted()- ES2023 added the toSorted() method as a safe way to sort an array without altering the original array.

/*difference between sort and toSorted is that the first method creates a new array,
 keeping the original array unchanged, while the last method alters the original array.*/


let  months = ["Jan", "Feb", "Mar", "Apr"];
console.log(months.toSorted());


// toReversed()-ES2023 added the toReverse() method as a safe way to reverse an array without altering the original array.


let  months1 = ["Jan", "Feb", "Mar", "Apr","May","Jun","Jul","Aug"];
console.log(months1.toReversed());
console.log(months1.toSorted());


// NUMERIC SORT-

let num = [1,2,3,4,5,6,7,8,9,10];
console.log(num.sort());
console.log(num.reverse());

let num1 = [1,2,3,4,5,6,7,8,9,10,45,65,76,87,23,45,67,43,22,12];
console.log(num1.sort(function (a,b){return a - b}));       /*[for descending use  (b - a)] */

//Sorting an Array in Random Order- 
let pip = ["23","34","54","67","76","77","88","98"];
console.log(pip.sort(function(){return 0.5 -Math.random()}));

 
// find highest and lowest number in an Array then min- max

// Math.min() we can use [Math.min.apply]

// Math.max() we can use[Math.max.apply]


// ARRAY ITERATION

/*forEach():- method calls a function (a callback function) once for each array element.

map():-[method creates a new array by performing a function on each array element.
   The map() method does not execute the function for array elements without values.
   The map() method does not change the original array.]

flatMap():-method first maps all elements of an array and then creates a new array by flattening the array.

filter() method creates a new array with array elements that pass a test.

reduce() method runs a function on each array element to produce (reduce it to) a single value.
*/


// forEach()
let a = [1,2,3,4,5,6,7,10,8];

a.forEach((value,index,array)=>{
console.log(value,index,array)
})


// map()
let a1  =[10,11,4,5,6,7,8,20];
let newArr = a1.map((e,index,array)=>{
   return e**2
})
console.log(newArr);

// filter()
const numbers = [45, 4, 9, 16, 25];
const over18 = numbers.filter(myFunction);

function myFunction(value, index, array) {
  return value > 18;
}
console.log(over18);


let name = [22,23,24,25,26,27,28,29,30];
let above = name.filter(myFunction);
function myFunction(value,index,array) {
   return value > 20;
}
console.log(above);

// reduce()
let red = [1,2,3,4,5];
let sum = red.reduce(my_Function);
function my_Function(total,value,index,array) {
   return total + value ; 
}
console.log(sum);

// reducRight():- it works from right to left in the array;

// every() method checks if all array values pass a test.

// some() method checks if some array values pass a test.

// Array.from() method returns an Array object from any object with a length property or any iterable object.

let arr2 = Array.from("Sandesh");
console.log(arr2)


// Array.keys() method returns an Array Iterator object with the keys of an array.



// entries() method returns an Array Iterator object with key/value pairs:

// Array with() method as a safe way to update elements in an array without altering the original array.

const  vc = ["January","February","Mar","April"];
const va = vc.with(2,"March");
console.log(va);

//.....(spread):-The ... operator expands an iterable (like an array) into more elements:

const q1 = ["Jan", "Feb", "Mar"];
const q2 = ["Apr", "May", "Jun"];
const q3 = ["Jul", "Aug", "Sep"];
const q4 = ["Oct", "Nov", "May"];
const year = [...q1,...q2,...q3,...q4];
console.log(year);






















