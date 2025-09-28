const newP = document.createElement("p");
newP.textContent = "This was added through Javascript";
document.body.append(newP);

const newImg = document.createElement("img");
newImg.setAttribute("src", "https://picsum.photos/200"); 
newImg.setAttribute("alt", "duh image");
document.body.append(newImg);

const newDiv = document.createElement("div");
newDiv.innerHTML = "<ul><li>One</li><li>Two</li><li>Three</li></ul>";
document.body.appendChild(newDiv);

const newSection = document.createElement("section");
newSection.innerHTML = "Hey, is new section time!"
document.body.appendChild(newSection);

const newHeading = document.createElement("h2");
newHeading.innerHTML = "DOM Basics"
document.body.appendChild(newHeading);