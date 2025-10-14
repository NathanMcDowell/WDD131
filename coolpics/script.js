const menuButton = document.querySelector(".menu-button");
function toggleMenu() {
  const menu = document.querySelector(".menu");
  menu.classList.toggle("hide");
}

menuButton.addEventListener("click", toggleMenu);


// function handleResize() {
//     const menu = document.querySelector(".menu");
//     if (window.innerWidth > 1000) {
//         menu.classList.remove("hide");
//     } else {
//         menu.classList.add("hide");
//     }
// }
// handleResize();
// window.addEventListener("resize", handleResize)

const dialog = document.querySelector("dialog");
const dialogImage = document.querySelector(".dialogImage");
const closeButton = document.querySelector(".close-viewer");
const gallery = document.querySelector('.gallery');
const images = document.querySelectorAll(".image");

images.forEach(image => {
  image.addEventListener("click", () => {
    dialogImage.src = image.src;
    dialogImage.alt = image.alt;
    dialog.showModal();
  });
});

closeButton.addEventListener("click", () => {
  dialog.close();
});