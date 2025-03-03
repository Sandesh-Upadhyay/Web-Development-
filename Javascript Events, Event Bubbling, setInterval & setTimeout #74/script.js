// https://developer.mozilla.org/en-US/docs/Web/Events

// onclick
let Tim  = document.getElementById("btn");
Tim.addEventListener("onclick", ()=>{
    document.querySelector(".box").innerHTML = "<b>Hey I'm changed</b>Enjoy your click"
    alert("Payment has Successful!")
})

// FOR MOUSE EVENTS

// click
Tim.addEventListener("click", ()=>{
    alert("Right clicked")
})

// dblclick
Tim.addEventListener("dblclick", ()=>{
    alert("Right clicked")
})

// contextmenu
Tim.addEventListener("contextmenu", ()=>{
    alert("Right clicked")
})

// mousedown
Tim.addEventListener("mousedown", ()=>{
    alert("Right clicked")
})

// mouseenter
Tim.addEventListener("mouseenter", ()=>{
    alert("Right clicked")
})

// mouseleave
Tim.addEventListener("mouseleave", ()=>{
    alert("Right clicked")
})

// mousemove
Tim.addEventListener("mousemove", ()=>{
    alert("Right clicked")
})
// mouseout
Tim.addEventListener("mouseout", ()=>{
    alert("Right clicked")
})
// mouseover
Tim.addEventListener("mouseover", ()=>{
    alert("Right clicked")
})
// mouseup
Tim.addEventListener("mouseup", ()=>{
    alert("Right clicked")
})


// FOR KEYBOARD EVENTS
Tim.addEventListener("keydown",(e)=>{
    console.log(e)
})
// if you want to make a game so you'll make the game like mario with the key and keycode
// below is the example:
document.addEventListener("keydown", (e)=>{
    console.log(e.key, e.keyCode);
})




