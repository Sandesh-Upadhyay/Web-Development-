// function makeSandwich(type, callback) {
//     console.log(`Making a ${type} sandwich...`);
//     setTimeout(() => {
//         callback(`${type} sandwich is ready!`); // Kaam hone ke baad callback bulao.
//     }, 2000); // 2-second ka delay daal diya.
// }

// const { set } = require("mongoose");

// function eatSandwich(message) {
//     console.log(message); // Sandwich ready hone ke baad message print hoga.
// }

// makeSandwich("cheese", eatSandwich);



// function makeSandwich(type) {
//     console.log(`Making a ${type} sandwich...`);
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (type) {
//                 resolve(`${type} sandwich is ready!`);
//             } else {
//                 reject("No sandwich type provided!");
//             }
//         }, 2000); // 2-second ka delay.
//     });
// }

// makeSandwich("veggie")
//     .then(message => console.log(message)) // Jab kaam ho jaye to yeh chalega.
//     .catch(error => console.log(error));  // Jab kuch gadbad ho to yeh chalega.

// function BdaAadmi(callback) {
//     console.log("Bda Aadmi Banne ki koshish kar raha hu...");
//     setTimeout(() => {
//         if (true) {
//             callback("Bda Aadmi ban gaya!"); // Corrected from 'then' to 'callback'
//         } else {
//             callback("Bda Aadmi nahi ban paya!"); // Added missing callback
//         }   
//     }, 2000);                           
// }

// Removed misplaced return new Promise block



// Callback Hell

function ChotaAadmi(callback) { 
    console.log("Chota Aadmi Banne ki koshish kar raha hu...");
    setTimeout(() => {
        callback("Chota Aadmi ban gaya!");
    }, 2000);    
}

function MaiSandesh(callback) {
    console.log("Mai Sandesh Banne ki koshish kar raha hu...");
    setTimeout(() => {
        callback("Mai Sandesh ban gaya!");
    }, 2000);
}
function BdaAadmi(callback){
    console.log("Bda Aadmi Banne ki koshish kar raha hu...");
    setTimeout(() => {
        callback("Bda Aadmi ban gaya!");
    },2000);
}   

function Manav(callback){
    setTimeout(() => {
        callback("Manav ban gaya!");
    },1000);
}


ChotaAadmi(() => {
    MaiSandesh(() => {
        Manav(() => {
            BdaAadmi(() => {
            console.log("All Man get successfull");
    });
});
});
});

