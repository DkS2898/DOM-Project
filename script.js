let bt = document.getElementById("btn");

// Random Color Hex Value Function
randomColor = () =>{
    let val = "0123456789ABCDEF"
    let randomno = "#"
    for(let i = 0; i<6; i++){
        randomno = randomno + val[Math.floor(Math.random() * 16)]
    }
    return randomno;
}

console.log(randomColor());


// Random Color Changing Function
function changeRandomColor() {
    document.body.style.backgroundColor = randomColor()
    
}

// Adding Event listener on button
bt.addEventListener("click", changeRandomColor)






// let bt = document.getElementById("btn")

// bt.addEventListener("click", changeRandomColor)

// function changeRandomColor(){
//     document.body.style.backgroundColor = "red"
// }