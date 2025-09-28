let selectElem = document.querySelector('#theme-select');
const logoImg = document.querySelector("img");
const body = document.body;

selectElem.addEventListener('change', changeTheme);

function changeTheme() {
    let current = selectElem.value;
    

    if (current === 'light') {
        body.classList.remove("dark");
        logoImg.setAttribute("src", "byui-logo-blue.webp"); 
    } else if (current === 'dark') {
        body.classList.add("dark");
        logoImg.setAttribute("src", "byui-logo-dark.png"); 

    } else {
        // default
        
    }
}