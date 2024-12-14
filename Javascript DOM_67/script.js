              // For Class Selector

let boxes = document.getElementsByClassName("box") 
console.log(boxes)

boxes[0].style.backgroundColor = "red"
boxes[1].style.backgroundColor = "blue"
boxes[2].style.backgroundColor = "green"
boxes[3].style.backgroundColor = "yellow"
boxes[4].style.backgroundColor = "orange"



                 //for ID Selector 

document.getElementById("red").style.backgroundColor = ("red")  
document.getElementById("green").style.backgroundColor = ("green")

                //For querySelector

document.querySelector(".box").style.backgroundColor = ("blue") 

               //For querySelectorAll

document.querySelectorAll(".box").forEach (e=>{
    e.style.backgroundColor = ("green")
})


               //For TagName
document.getElementsByTagName("p");
p.style.backgroundColor = ("orange");



