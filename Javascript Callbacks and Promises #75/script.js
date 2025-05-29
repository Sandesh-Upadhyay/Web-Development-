// Discription: This file contains the JavaScript code for the callback functions.
// Date: 19th March, 2025

const { rejects } = require("assert");
const { set } = require("mongoose");
const { resolve } = require("path");
const { callbackify } = require("util");

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

// // Removed misplaced return new Promise block



// // Callback Hell

// function ChotaAadmi(callback) { 
//     console.log("Chota Aadmi Banne ki koshish kar raha hu...");
//     setTimeout(() => {
//         callback("Chota Aadmi ban gaya!");
//     }, 2000);    
// }

// function MaiSandesh(callback) {
//     console.log("Mai Sandesh Banne ki koshish kar raha hu...");
//     setTimeout(() => {
//         callback("Mai Sandesh ban gaya!");
//     }, 2000);
// }
// function BdaAadmi(callback){
//     console.log("Bda Aadmi Banne ki koshish kar raha hu...");
//     setTimeout(() => {
//         callback("Bda Aadmi ban gaya!");
//     },2000);
// }   

// function Manav(callback){
//     setTimeout(() => {
//         callback("Manav ban gaya!");
//     },1000);
// }


// ChotaAadmi(() => {
//     MaiSandesh(() => {
//         Manav(() => {
//             BdaAadmi(() => {
//             console.log("All Man get successfull");
//     });
// });
// });
// });

// const greeting = (name) => {
//     console.log(`Hello ${name}`+ `Kaise ho` + `Sab theek hai`);
// }

// greeting("Manav");                    // Hello Manav
// greeting("Rahul");                    // Hello Rahul
// greeting("Sahil");                    // Hello Sahil    
// greeting("Rohit");                    // Hello Rohit
// greeting("Rajat");                    // Hello Rajat
// greeting("Raj");                      // Hello Raj
// greeting("Rohan");                    // Hello Rohan
// greeting("Rahul");                    // Hello Rahul

// use promise to solve this problem

// function greet(name) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (name) {
//                 resolve(`Hello ${name}, Kaise ho? Sab theek hai!`);
//             } else {
//                 reject("Name not provided!");
//             }
//         }, 2000);
//     });
// }

// function Manav() {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve("Manav ban gaya!");
//         }, 1000);
//     });
// }

// greet("Manav")
//     .then((message) => {
//         console.log(message);
//         return Manav(); // Now `Manav()` is properly defined
//     })
//     .then((message) => {
//         console.log(message);
//     })
//     .catch((error) => console.error("Something went wrong:", error));


//     function payment(amount){
//         return new promise((resolve, reject) => {
//             setTimeout(() => {
//                 if (amount > 0) {
//                     resolve(`Payment of ${amount} was successful!`);
//                 } else {
//                     reject("Invalid payment amount!");
//                 }
//             }, 2000);
//         })
//     }
//     const amount = 1000;   // Example amount for payment
//     payment(amount)
//         .then((message) => {
//             console.log(message);
//         })
//         .catch((error) => {
//             console.error("Payment failed:", error);
//         });
// alert('Payment processing...');
// alert('Payment successful!');
// alert('Thank you for your payment!');
// alert('Payment failed! Please try again.');
// alert('Invalid payment amount!');

// let prom = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("Promise resolved!");
//     }, 1000);
// });

// prom.then((message) => {
//     console.log(message); // This will run after 2 seconds
// } ).catch((error) => {
//     console.error("Promise rejected:", error);
// });


// CALLBACK  HELL EXAMPLE :

// function boilwater (callback) {
//     console.log("boiling water");
//     setTimeout(() => {
//         console.log("water boiled");
//         callback();
//     },2000);
// }
// function doodh (callback) {
//     console.log("added milk");
//     setTimeout(() => {
//        console.log("boiled milk");
//        callback();
//     }, 1500);
// }

// function teaLeaf (callback) {
//     console.log("added tealeaf");
//     setTimeout(() => {
//        console.log("boiled");
//        callback();
//     }, 1000);
// }


// function sugar (callback) {
//     console.log("added sugar");
//     setTimeout(() => {
//        console.log("boiled");
//        callback();
//     }, 2000);
// }

// function serve (callback) {
//     console.log("serve");
//     setTimeout(() => {
//        console.log("served");
//        callback();
//     }, 1000);
// }

// boilwater(()=>{
//     doodh(()=>{
//         teaLeaf(()=>{
//             sugar(()=>{
//                 serve(()=>{
//                     console.log("Tea is made by a noob");
//                 })
//             })
//         })
//     })
// });




// function setupSDK(callback){
//     console.log("Install vs code");
//     setTimeout(() => {
//        console.log("installed vs code"); 
//        callback();
//     }, 2000);
// }

// function runSDK(callback){
//     console.log("Installing the T&C");
//     setTimeout(() => {
//        console.log("installed entire vs code"); 
//        callback();
//     }, 1000);
// }
// function chooseLan(callback){
//     console.log("choosing language");
//     setTimeout(() => {
//        console.log("language chosen"); 
//        callback();
//     }, 1500);
// }
// function writeProject(callback){
//     console.log("writing project");
//     setTimeout(() => {
//        console.log("project written"); 
//        callback();
//     }, 2000);
// }
// function runProject(callback){
//     console.log("run project");
//     setTimeout(() => {
//        console.log("project run"); 
//        callback();
//     }, 2000);
// }
// function writtenHTML(callback){
//     console.log(" writing HTML");
//     setTimeout(() => {
//        console.log("HTML written"); 
//        callback();
//     }, 2000);
// }
// function runHTML(callback){
//     console.log("run HTML");                        
//     setTimeout(() => {
//        console.log("run"); 
//        callback();
//     }, 1000);
// }

// function writtenCSS(callback){
//     console.log(" writing CSS");
//     setTimeout(() => {
//        console.log("CSS written"); 
//        callback();
//     }, 2000);
// }

// function runCSS(callback){
//     console.log("run CSS");                        
//     setTimeout(() => {
//        console.log("run"); 
//        callback();
//     }, 1000);
// }
// function writtenJS(callback){
//     console.log(" writing JS");
//     setTimeout(() => {
//        console.log("JS written"); 
//        callback();
//     }, 2000);
// }
// function runJS(callback){
//     console.log("run JS");                        
//     setTimeout(() => {
//        console.log("run"); 
//        callback();
//     }, 1000);
// }
// function writtenReact(callback){
//     console.log(" writing React");
//     setTimeout(() => {
//        console.log("React written"); 
//        callback();
//     }, 2000);
// }
// function runReact(callback){
//     console.log("run React");                        
//     setTimeout(() => {
//        console.log("run"); 
//        callback();
//     }, 1000);
// }

// function writtenNode(callback){
//     console.log(" writing Node");
//     setTimeout(() => {
//        console.log("Node written"); 
//        callback();
//     }, 2000);
// }
// function runNode(callback){
//     console.log("run Node");                        
//     setTimeout(() => {
//        console.log("run"); 
//        callback();
//     }, 1000);
// }
// function writtenExpress(callback){
//     console.log(" writing Express");
//     setTimeout(() => {
//        console.log("Express written"); 
//        callback();
//     }, 2000);
// }
// function runExpress(callback){
//     console.log("run Express");                        
//     setTimeout(() => {
//        console.log("run"); 
//        callback();
//     }, 1000);
// }
// function writtenMongo(callback){
//     console.log(" writing Mongo");
//     setTimeout(() => {
//        console.log("Mongo written"); 
//        callback();
//     }, 2000);
// }
// function runMongo(callback){
//     console.log("run Mongo");                        
//     setTimeout(() => {
//        console.log("run"); 
//        callback();
//     }, 1000);
// }

// function writtenMongoose(callback){
//     console.log(" writing Mongoose");
//     setTimeout(() => {
//        console.log("Mongoose written"); 
//        callback();
//     }, 2000);
// }
// function runMongoose(callback){
//     console.log("run Mongoose");                        
//     setTimeout(() => {
//        console.log("run"); 
//        callback();
//     }, 1000);
// }

// setupSDK(()=>{
//     runSDK(()=>{
//         chooseLan(()=>{
//             writeProject(()=>{
//                 runProject(()=>{
//                     writtenHTML(()=>{
//                         runHTML(()=>{
//                             writtenCSS(()=>{
//                                 runCSS(()=>{
//                                     writtenJS(()=>{
//                                         runJS(()=>{
//                                             writtenReact(()=>{
//                                                 runReact(()=>{
//                                                     writtenNode(()=>{
//                                                         runNode(()=>{
//                                                             writtenExpress(()=>{
//                                                                 runExpress(()=>{
//                                                                     writtenMongo(()=>{
//                                                                         runMongo(()=>{
//                                                                             writtenMongoose(()=>{
//                                                                                 runMongoose(()=>{
//                                                                                     console.log("All done!")

// })})})})})})})})})})})})})})})})})})})})});



// Promise Example:

function setupSDK() {
    return new Promise((resolve, reject) =>{
        console.log("Install vs code");
        setTimeout(() => {
            let success = true; // Simulating success or failure
            if(success){
                resolve("installed vs code");
            }else{
                reject("error in installing vs code");
            }
        },2000);
    })
};
// console.log("installed vs code");
// function runSDK() {
//     return new Promise(()=>{
//       console.log("Installing the T&C");
//       setTimeout(() =>{
//         console.log("installed entire vs code");
//         resolve();
//         rejects("error in installing the T&C");
//       }, 2000);  
//     })
// }

// function chooseLan() {
//     return  new Promise((resolve, rejects) =>{
//         console.log("choosing language");
//         setTimeout(() => {
//             console.log("language chosen");
//             resolve();
//             rejects("error in choosing language");
//         }, 1500);
//     })
// }
// function writeProject() {
//     return new Promise((resolve , rejects) =>{
//         console.log("writing project");
//         setTimeout(() => {
//             console.log("project written");
//             resolve();
//             rejects("error in writing project");
//         }, 2000);
// })
// }
// function runProject() {
//     return new Promise((resolve , rejects) =>{
//         console.log("run project");
//         setTimeout(() => {
//             console.log("project run");
//             resolve();
//             rejects("error in running project");
//         }, 2000);
// })
// }
// function writtenHTML() {
//     return new Promise((resolve , rejects) =>{
//         console.log(" writing HTML");
//         setTimeout(() => {
//             console.log("HTML written");
//             resolve();
//             rejects("error in writing HTML");
//         }, 2000);
// })
// } 
// function runHTML() {
//     return new Promise((resolve , rejects) =>{
//         console.log("run HTML");                        
//         setTimeout(() => {
//             console.log("run");
//             resolve();
//             rejects("error in running HTML");
//         }, 1000);
// })
// }
// function writtenCSS() {
//     return new Promise((resolve , rejects) =>{
//         console.log(" writing CSS");
//         setTimeout(() => {
//             console.log("CSS written");
//             resolve();
//             rejects("error in writing CSS");
//         }, 2000);
// })      
// }
// function runCSS() {
//     return new Promise((resolve , rejects) =>{
//         console.log("run CSS");                        
//         setTimeout(() => {
//             console.log("run");
//             resolve();
//             rejects("error in running CSS");
//         }, 1000);
// })
// } 
// function writtenJS() {
//     return new Promise((resolve , rejects) =>{
//         console.log(" writing JS");
//         setTimeout(() => {
//             console.log("JS written");
//             resolve();
//             rejects("error in writing JS");
//         }, 2000);
// })
// }
// function runJS() {
//     return new Promise((resolve , rejects) =>{
//         console.log("run JS");                        
//         setTimeout(() => {
//             console.log("run");
//             resolve();
//             rejects("error in running JS");
//         }, 1000);
// })
// }
// function writtenReact() {
//     return new Promise((resolve , rejects) =>{
//         console.log(" writing React");
//         setTimeout(() => {
//             console.log("React written");
//             resolve();
//             rejects("error in writing React");
//         }, 2000);
// })
// }
// function runReact() {
//     return new Promise((resolve , rejects) =>{
//         console.log("run React");                        
//         setTimeout(() => {
//             console.log("run");
//             resolve();
//             rejects("error in running React");
//         }, 1000);
// })
// }
// function writtenNode() {
//     return new Promise((resolve , rejects) =>{
//         console.log(" writing Node");
//         setTimeout(() => {
//             console.log("Node written");
//             resolve();
//             rejects("error in writing Node");
//         }, 2000);
// })
// }
// function runNode() {
//     return new Promise((resolve , rejects) =>{
//         console.log("run Node");                        
//         setTimeout(() => {
//             console.log("run");
//             resolve();
//             rejects("error in running Node");
//         }, 1000);
// })
// }
// function writtenExpress() {
//     return new Promise((resolve , rejects) =>{
//         console.log(" writing Express");
//         setTimeout(() => {
//             console.log("Express written");
//             resolve();
//             rejects("error in writing Express");
//         }, 2000);
// })
// }
// function runExpress() {
//     return new Promise((resolve , rejects) =>{
//         console.log("run Express");                        
//         setTimeout(() => {
//             console.log("run");
//             resolve();
//             rejects("error in running Express");
//         }, 1000);
// })
// }  
// function writtenMongo() {
//     return new Promise((resolve , rejects) =>{
//         console.log(" writing Mongo");
//         setTimeout(() => {
//             console.log("Mongo written");
//             resolve();
//             rejects("error in writing Mongo");
//         }, 2000);
// })
// }
// function runMongo() {
//     return new Promise((resolve , rejects) =>{
//         console.log("run Mongo");                        
//         setTimeout(() => {
//             console.log("run");
//             resolve();
//             rejects("error in running Mongo");
//         }, 1000);
// })
// }
// function writtenMongoose() {
//     return new Promise((resolve , rejects) =>{
//         console.log("writing Mongoose");
//         setTimeout(()=>{
//             console.log("Mongoose written");
//             resolve();
//             rejects("error in writing Mongoose");
//         },2000);
//     })    
// }
// function runMongoose() {
//     return new Promise((resolve , rejects) =>{
//         console.log("run Mongoose");                        
//         setTimeout(() => {
//             // console.log("run");
//             resolve("mission successful");
//             rejects("error in running Mongoose");
//         }, 1000);
// })
setupSDK()
// .then(runSDK)
// .then(chooseLan)
// .then(writeProject)
// .then(runProject)
// .then(writtenHTML)
// .then(runHTML)
// .then(writtenCSS)
// .then(runCSS)
// .then(writtenJS)
// .then(runJS)
// .then(writtenReact)
// .then(runReact)
// .then(writtenNode)
// .then(runNode)
// .then(writtenExpress)
// .then(runExpress)
// .then(writtenMongo)
// .then(runMongo)
// .then(writtenMongoose)
// .then(runMongoose)
// .then((message) => console.log(message))   
// .catch((error) => console.log("error",error));



// function catchTheBear(){
//     return new Promise((resolve , reject)=>{
//         setTimeout(()=>{
//             // let success = true;
//             let success = false;
//             if (success){
//                 resolve("bear shot")
//             }else{
//                 reject("bear escaped")
//             }
//         } ,2000)
//     });
// };
// catchTheBear()
// .then(message => console.log(message))
// .catch(error => console.log(error));


// function openWallet(){
//     return new Promise((resolve , reject)=>{
//         console.log("⏳ Opening wallet...");
//         setTimeout(()=>{
//             // let success = true;
//             let success = Math.random() < 0.5; // Randomly simulating success or failure
//             if(success){
//                 resolve("✅ Wallet opened successfully!");
//             }else{
//                 reject("❌ Error: Wallet could not be opened.");
//             }
//         }, 2000);
//     });
// };
// openWallet()
// .then((message)=> console.log(message))
// .catch((error)=> console.log(error));


// function flipCoinFrontend() {
//     document.querySelector(".result").textContent = "⏳ Flipping...";
//     let coin = document.querySelector(".coin");
//     let sound = document.getElementById("flipSound");
//     sound.play(); // Play coin flip sound

//     flipCoin()
//         .then((message) => {
//             let isHeads = message.includes("HEADS");

//             gsap.to(coin, {
//                 duration: 1.5,  
//                 rotationX: 1080,  
//                 y: -150, 
//                 ease: "power2.out",
//                 onComplete: () => {
//                     gsap.to(coin, { y: 0, duration: 0.5, ease: "bounce.out" }); 
//                     coin.textContent = isHeads ? "HEADS" : "TAILS";
//                     document.querySelector(".result").textContent = message;
//                 }
//             });
//         })
//         .catch((error) => {
//             document.querySelector(".result").textContent = error;
//         });
// }
// function flipCoin(){
//     return new Promise((resolve , reject)=>{
//         console.log("⏳ Flipping coin...");
//         setTimeout(()=>{
//             let success = Math.random() <0.5;
//             if (success){
//                 // resolve("✅ Coin flipped successfully!");
//                 resolve("✅ Heads");
//             }else{
//                 // reject("❌ Error: Coin could not be flipped.");
//                 reject("❌ Tails");
//             }
//         },2000);
//     })
// }
// flipCoin()
// .then((message)=> console.log(message))
// .catch((error)=> console.log(error));


function sendMsg(){
    return new Promise((resolve, reject) =>{
        console.log("Sending message...");
        setTimeout(()=>{
            let success = Math.random() < 0.5; // Randomly simulating success or failure
            if(success){
                resolve("Message sent successfully!");
            }else{
                reject("Error: Message could not be sent.");
            }   
        },2000);
    });
}

sendMsg()
.then((message) => console.log(message))
.catch((error) => console.log(error));



function catchingError(){
    return new Promise((resolve, reject) =>{
        console.log("catching error...");
        setTimeout(()=>{
            let success = Math.random() < 0.5;
            if(success){
                resolve("Error caught successfully!");
            }else{
                reject("Error: Could not catch the error.");
            }
        }, 2000);
    });
}

catchingError()
.then ((message) =>console.log(message))
.catch((error) => console.log(error)); 




function checkMsg(){
    return new Promise((resolve, reject) =>{
        console.log("Checking message...");
        setTimeout(()=>{
            let success = Math.random() < 0.5;
            if(success){
                resolve("Message checked successfully!");
            }else{
                reject("Error: Could not check the message.");
            }
        }, 2000);
    })
}

checkMsg()
.then((message) => console.log(message))
.catch((error) => console.log(error));





function sendMoney(){
    return new Promise((resolve, reject) =>{
        console.log("Sending money...");
        setTimeout(()=>{
            let success = Math.random() < 0.5;
            if(success){
                resolve("Money Sended successfully!");
            }else{
                reject("Error: Could not send the money.");
            }
        }, 2000);
    })
}

sendMoney()
.then((message) => console.log(message))
.catch((error) => console.log(error));

function useMind(){
    return new Promise((resolve, reject) =>{
        console.log("Using mind...");
        setTimeout(()=>{
            let success = Math.random() < 0.5;
            if(success){
                resolve("Mind used successfully!");
            }else{
                reject("Error: Could not use the mind.");
            }
        }, 2000);
    })
}
useMind()
.then((message) => console.log(message))
.catch((error) => console.log(error));

function useMe(){
    return new Promise((resolve, reject) => {
        console.log("Using me...");
        setTimeout(() => {
            let success = Math.random() < 0.5;
            if(success){
                resolve("Me used successfully!");
            }else{
                reject("Error: Could not use me.");
            }
        }, 2000);
    });
}
useMe()
.then((message) => console.log(message))
.catch((error) => console.log(error));


function useYou(){
    return new Promise((resolve, reject)=>{
        console.log("Using you>>>");
        setTimeout(()=>{
            let success = Math.random() < 0.5;
            if(success){
                resolve("You used successfully!");
            }else{
                reject("Error: Could not use you.");
            }
        }, 2000);
    })
}
useYou()
.then((message) => console.log(message))
.catch((error) => console.log(error));




function useYou(){
    return new Promise((resolve, reject)=>{
        console.log("Using you>>>");
        setTimeout(()=>{
            let success = Math.random() < 0.5;
            if(success){
                resolve("You used successfully!");
            }else{
                reject("Error: Could not use you.");
            }
        }, 2000);
    })
}
useYou()
.then((message) => console.log(message))
.catch((error) => console.log(error));


function useYou(){
    return new Promise((resolve, reject)=>{
        console.log("Using you>>>");
        setTimeout(()=>{
            let success = Math.random() < 0.5;
            if(success){
                resolve("You used successfully!");
            }else{
                reject("Error: Could not use you.");
            }
        }, 2000);
    })
}
useYou()
.then((message) => console.log(message))
.catch((error) => console.log(error));