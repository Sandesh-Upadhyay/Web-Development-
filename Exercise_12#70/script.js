function getRandomColor(){
     const letters = '0123456789ABCDEF';
     let color = '#'; 
    for (let i = 0; i < 6; i++) {
         color += letters[Math.floor(Math.random() * 16)]; 
         }
         return color;
         }

 document.addEventListener("DOMContentLoaded", function() {
     const boxes = document.querySelectorAll('.box');
             boxes.forEach(box => {
                 box.style.backgroundColor = getRandomColor();
                 box.style.color = getRandomColor(); }); });




//Math.random()

let getRandomNumber= Math.random();
console.log(getRandomNumber);

// Math.floor()
let number = 4.7;
let roundedDown = Math.floor();
console.log(roundedDown)



// combining Math.floor()&Math.random()
let randomInt = Math.floor(Math.random() * 10);
console.log(randomInt); // Outputs an integer between 0 and 9
