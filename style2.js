var box = document.querySelector("#box-1");


var container = document.querySelector(".container");
container.setAttribute("id", "box2");
console.log(container.getAttribute("class"));

var newbox = document.createElement("div");
newbox.classList.add("box");

// container.removeChild(newbox);
//container.insertBefore(newbox,box);
//container.removeChild(box);

var divs = document.querySelectorAll(".box");
console.log(divs);

box.addEventListener("click", changeToblack);

function changeToblack() {
    box.style.backgroundColor = "black";
}

divs.forEach((div) => {
    div.addEventListener("click", () => {
        div.style.backgroundColor = "black";
    })
}
)
var number = 1000
for(var i = 0; i>number; i++){
    var newbox = document.createElement("div");
    newbox.classList.add("box");
    console.log(newbox);
}
