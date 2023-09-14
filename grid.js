var container = document.querySelector(".container");
for(var i = 0; i<200; i++){
    for(var j =0; j<200; j++){
        var cell= document.createElement("div");
        cell.classList.add("cell");
        container.appendChild(cell);
    }
}

var allnod = document.querySelectorAll(".cell");
console.log(allnod);

allnod.forEach((div)=>{
    div.addEventListener("mousedown" ,()=>{
        mousedown = true;
        div.style.backgroundColor = "black";
    })
})

allnod.forEach((div)=>{
    div.addEventListener("mouseup" ,()=>{
        mousedown = false;
    })
})

allnod.forEach((div)=>{
    div.addEventListener("mouseover" ,()=>{
      if( mousedown === true)
        div.style.backgroundColor = "black";
    })
})
