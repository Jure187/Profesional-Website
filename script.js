let header = document.querySelector("header");
header.style.backgroundColor = "grey";
header.style.borderBottom = "3px solid orangered";
header.style.height = "100px";

let container = document.querySelectorAll(".container");
for (i = 0; i < container.length; i++) {
  container[i].style.width = "80%";
  container[i].style.margin = "auto";
}

let con1 = document.querySelector(".con1");
con1.style.display = "flex";
con1.style.justifyContent = "space-between";
con1.style.alignItems = "center";
con1.style.height = "100%";

let jure = document.querySelector(".jure");
jure.style.color = "white";

let span = document.querySelector("span");
span.style.color = "orangered";

let ul = document.querySelector("ul");
ul.style.listStyle = "none";

let li = document.querySelectorAll("li");
for (i = 0; i < li.length; i++) {
  li[i].style.display = "inline";
  li[i].style.marginLeft = "10px";
}

let a = document.querySelectorAll("a");
for (i = 0; i < a.length; i++) {
  a[i].style.textDecoration = "none";
  a[i].style.color = "white";
  a[i].style.textTransform = "uppercase";
}

let showcase = document.querySelector(".showcase");
showcase.style.height = "40vh";
showcase.style.display = "flex";
showcase.style.justifyContent = "center";
showcase.style.alignItems = "center";
showcase.style.backgroundColor = "lightgrey";
showcase.style.textAlign = "center";

let jan = document.getElementById("jan");
jan.style.marginBottom = "20px";
jan.style.fontSize = "50px";
jan.style.color = "white";

let domagoj = document.querySelector(".domagoj");
domagoj.style.color = "white";
domagoj.style.fontSize = "17px";

let newsletter = document.querySelector(".newsletter");
newsletter.style.height = "100px";
newsletter.style.backgroundColor = "grey";

let con3 = document.querySelector(".con3");
con3.style.color = "white";
con3.style.display = "flex";
con3.style.justifyContent = "space-between";
con3.style.alignItems = "center";
con3.style.height = "100px";

let input = document.querySelector("input");
input.style.height = "30px";
input.style.width = "200px";
input.style.border = "none";

let button = document.querySelector("button");
button.style.border = "none";
button.style.padding = "7px";
button.style.color = "white";
button.style.backgroundColor = "orangered";

let con10 = document.querySelector(".con10");
con10.style.display = "flex";
con10.style.justifyContent = "space-between";
con10.style.alignItems = "center";
con10.style.height = "400px";

let box = document.querySelectorAll(".box");
for (i = 0; i < box.length; i++) {
  box[i].style.textAlign = "center";
}

let h3 = document.querySelectorAll(".h3");
for (i = 0; i < h3.length; i++) {
  h3[i].style.margin = "10px 0px";
}

let footer = document.querySelector("footer");
footer.style.backgroundColor = "orangered";
footer.style.height = "80px";
footer.style.display = "flex";
footer.style.justifyContent = "center";
footer.style.alignItems = "center";
footer.style.color = "white";
footer.style.fontSize = "20px";
