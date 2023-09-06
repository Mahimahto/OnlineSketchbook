var box = document.querySelector("#box-1");
box.style.backgroundColor = "red";
box.textContent = "a";
box.innerHTML = "<p>A</p>";
box.style.fontSize = "10px"

var container = document.querySelector(".container");
container.setAttribute("id", "box2");
container.style.backgroundColor = "blue";
console.log(container.getAttribute("class"));

var newbox = document.createElement("div");
newbox.classList.add("box");
newbox.textContent = "B";

 container.appendChild(newbox);
// container.removeChild(newbox);
//container.insertBefore(newbox,box);
//container.removeChild(box);

var divs = document.querySelectorAll(".box");
console.log(divs);
