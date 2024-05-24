// let a = ("ABCDEFGHIJKLMNOPQRSTUVWXYZ")
// console.log(a.length)
// console.log(typeof(a))

// function Alphabets(A,B) {
//     return A*B    
    // console.log(A*B)
// }
// Alphabets(23,3)
// total = Alphabets(1,10)
// console.log(total)


function name(A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z) {
    return(typeof("A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z"));

};
// word = name(typeof("A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z"))
word = name.length;
// console.log(word)
console.log(word);



// Object

const car = 
{type:"BMW",
model:"X-series",
price:"1million_doller"}; 
console.log(car.type);
console.log(car.model);
console.log(car.price);


let man = 
{
    name:"Mohan",
    height:"5.9feet",
    age:"24 years",
    eyecolor:"Brown",
    Body_Shape:"Tall and Gymtype "
};
console.log(man.name);
console.log(man["name"]);
console.log(man.height);
console.log(man["height"]);
console.log(man.age);
console.log(man["age"]);
console.log(man.eyecolor);
console.log(man["eyecolor"]);
console.log(man.Body_Shape);
console.log(man["Body_Shape"]);



function mani(age,height) {
    // return(age , height)
    console.log(mani)
};
mani = (23,5.6);
console.log(mani);
// result = mani(23 5.6)
// console.log(result)

let aman = 
{
    name:"Mohan",
    height:"5.9feet",
    age:"24 years",
    eyecolor:"Brown",
    Body_Shape:"Tall and Gymtype "
};
let = 
'A fox jumps over a "lazy" "dog"';
console.log(let);
let ='A fox jumps over a \"lazy\" "dog"';
console.log("The number of dog is:1"+" "+let);
let ='A fox jumps over a \'lazy dog';
console.log("The number of dog is:2"+" "+let);

/*
\b	Backspace
\f	Form Feed
\n	New Line
\r	Carriage Return
\t	Horizontal Tabulator
\v	Vertical Tabulator
*/

let ='A fox jumps over \b a lazy dog';
console.log("The number of dog is:3"+" "+let);

let ='A fox \f jumps over a lazy dog';
console.log("The number of dog is:4"+" "+let);

let ='A \n fox jumps over a lazy dog';
console.log("The number of dog is:5"+" "+let);

let ='A fox jumps \r over a lazy dog';
console.log("The number of dog is:6"+" "+let);

let ='A fox jumps \t over a lazy dog';
console.log("The number of dog is:7"+" "+let);

let ='A fox jumps \v over a lazy dog';
console.log("The number of dog is:8"+" "+let);

/*Backticks(``) */
let para = `A quick brown fox jumps over a lazy dog`;
console.log(para);

// let ab = `A para and a second para`+ `also a third para will be concatinate`;
// console.log(ab)


let ab = ("ME");
// console.log(typeof (ab));

let ba = new String("ME");
// console.log(typeof(ba));
console.log(ab == ba);
console.log(ab === ba);


let alpha = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
console.log(alpha.length);
console.log(alpha.charAt(22));
console.log(alpha.charCodeAt(0));
console.log(alpha.at(4));   /*  at() is new addition in 2022 it also allows reults in negative indexes also*/
// [console.log(alpha.at(-4))]

/*Property Access []*/

let abcd = "RAM";
console.log(abcd[0]);
console.log(abcd[1]);
console.log(abcd[2]);
/*console.log(abcd[3]) [while position returns undefined]*/               /*console.log(abcd.charAt(30)) [charAt() returns empty string]*/

/*
slice(start, end)
substring(start, end)
substr(start, length)
*/

/*Slice() method */

let ram = "banana,kiwi,apple,mango,guava";
console.log(ram.slice(0,6));                       /*if we put a dot with replacing of comma*/
console.log(ram.slice(7,11));
console.log(ram.slice(12,17));
console.log(ram.slice(18,23));
console.log(ram.slice(24,29));

/*some example of Slice()*/

console.log(ram.slice(8));
console.log(ram.slice(-10));
console.log(ram.slice(-10,-11));


/*Substring():-start and end values are less than 0 is treated as 0 */

let shyam = "Avadh, Rohan , Hero , Wing";
console.log(shyam.substring(2,8));


/*Substr():-substr is similer to slice but second parametre show length*/

let aws = "Ram,Shyam,Rohan,Kali";;
console.log(aws.substr(4,5));

let avs = "Ram,Shyam,Rohan,Kali";
console.log(avs.substr(4));

let bs = "Ram,Shyam,Rohan,Kali";
console.log(bs.substr(-10));


/*toUpperCase */
 let cap = "abscsdeksdkbscbic";
 console.log(cap.toUpperCase());
 
/*toLowerCase*/
let map = "BBGAGGAKAKAGIAGOAAUGAUA";
console.log(map.toLowerCase());

/*concate()*/
let plus = "Hello";
let plus1 = "Javascript";
console.log(plus.concat(" ",plus1));

/*trim():- removes whitespace from both side of string*/

let white = "    AAAAA * * * 8 ";
console.log(white.trim());

/*trimStart():- same as trim but it removes whitespace from the start*/
let space = "     ******BBBBBBB******######@@@";  
console.log(space.trimStart());

/*trimEnd():- same as trim but it removes whitespace from the end*/

let space1 = "********ABSVVSVs                           "; 
console.log(space1.trimEnd());

/*padStart():- padding start from the beginning*/
let padd = "padding";
console.log(padd.padStart(10,"0"));

let num = 7;
let pad = num.toString();
let sadd = pad.padStart(10,"0");


/*padEnd():- padding from the end*/

let end = "ending";
console.log(end.padEnd(10,"0"));

let padend = "10";
console.log(padend.padEnd(10,"x"));

/*repeat()
:-returns a string with a number of copies of a string.
:-returns a new string.
:-does not change the original string.

*/
let mango = "aam ";
console.log(mango.repeat(5));

let chant = "Jai Shree Ram ";
console.log(chant.repeat(5));

/*replace():- method use a specified value replace with another value*/

let replace = "surname";
let replace1="name";
console.log(replace1.replace());

let replace2 = "MYNAME";
let replace3 = "YourName";
console.log(replace3.replace());


/*replace case insensitive, use a regular expression with an /i flag (insensitive)*/

let text2 = "Please visit Youtube  and Youtube";
let newtext1 = text2.replace(/YOUTUBE/i,"GOOGLE");
console.log(newtext1);

let senten1 = "A quick brown FOX jumps over another FOX";
let newsenten1 = senten1.replace(/FOX/i,"Dog");
console.log(newsenten1);

/*replace all matches, use a regular expression with a /g flag (global match)*/

let text = "Please visit Youtube and Youtube";
let newtext = text.replace(/Youtube/g,"Google");
console.log(newtext);


let senten = "A quick brown FOX jumps over another FOX";
let newsenten = senten.replace(/FOX/g,"Dog");
console.log(newsenten);


/*replaceAll():- */

let p = "I love cats and I feed cats I care of them, cats also loves me";
console.log(p.replaceAll("cats","Cows"));

let p1 = "He is most Honest and Trustworthy, Ramesh is Also Honest and Trustworthy";
console.log(p1.replaceAll("Honest and Trustworthy","dishonest and untrustworthy"));

/*replaceAll()- regular expression [//g]*/
let p2 = "I love cats and I feed cats I care of them, cats also loves me";
console.log(p2.replaceAll(/cats/g,"Deers"));

/*split():- string can be converted to an array with the split() method:*/

let a  = "a, b, c, d";
let array = a.split();
console.log(array);


let b = "Sohan, Mohan , Rohan,";
let array1 = b.split();
console.log(array1);

/*indexOf():- returns the position of the first occurrence of a string*/

let position1 = "locate the Word is";
console.log(position1.indexOf("Word"));

let pos = "Birds are twittering";
console.log(pos.indexOf("are"));

/*lastIndexOf():-  returns the position of the last occurrence of a string*/

let position2 = "locate the Word is";
console.log(position2.lastIndexOf("is"));

let pos1 = "Birds are twittering";
console.log(pos1.lastIndexOf("twittering"));

let cos = "Humans beings are so selfish";
console.log(cos.lastIndexOf("his"));
/*[Execution:-Both methods accept a second parameter as the starting position for the search:]*/

/*search():- searches a string for a string*/

let search = "find a shot";
console.log(search.search("s"));


/* NOTE:-
[The two methods are NOT equal. These are the differences:

The search() method cannot take a second start position argument.
The indexOf() method cannot take powerful search values (regular expressions).]*/

/*match():- */

let sv = "Pain and gain";
console.log(sv.match("ai"));

let ar = "The rain in Spain stays mainly in the plain";
console.log(ar.match(/ain/));

let ac = "The rain in Spain stays mainly in the plain";
console.log(ac.match(/ain/g));

let arc = "The rain in Spain stays mainly in the plain";
console.log(arc.match(/ain/gi));


/*matchAll():- */

let x = "summer season is very annoying,summer season is to hot , during summer we dring water more than winter season";
console.log(x.matchAll("summer"));

// [for global search use {//g} and for case insensitive use {//gi}]


/*includes():- returns true if a string contains a specified value.*/

let q = "our earth covered with 75% of water";
console.log(q.includes("earth"));

// [with position]
let w = "our earth covered with 75% of water";
console.log(w.includes("earth",12));

/*NOTES:- 
includes() is case sensitive.
includes() is an ES6 feature.
includes() is not supported in Internet Explorer.*/


/*startsWith():- returns true if a string begins with a specified value.
Otherwise it returns false:*/

let cons = "My computer runs explorer and chrome also";
console.log(cons.startsWith("runs"));

let n = "My dad says go to home";
console.log(n.startsWith("go"));

let run = "My dad says go to home";
console.log(run.startsWith("go",12));

/*Note:- 
startsWith() is case sensitive.
startsWith() is an ES6 feature.
startsWith() is not supported in Internet Explorer.*/


/*endsWith():- returns true if a string ends with a specified value.
Otherwise it returns false:*/

let co = "My computer runs explorer and chrome also";
console.log(co.endsWith("runs"));

let nu = "My dad says go to home";
console.log(nu.endsWith("go"));

let ru = "My dad says go to home";
console.log(ru.endsWith("go",12));

//Note:- same as startsWith()


/*Templates:--*/

// Variable Substitutions:---

let tune = "Hello";
let auto = "World";
let add = `Welcome ${tune}, ${auto}!`;
console.log(add);


// Expression Substitution:---

let price = 10;
let VAT = 0.25;

let total = `Total: ${(price * (1 + VAT)).toFixed(2)}`;

console.log(total);
