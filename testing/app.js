// 1) Grab elements from the DOM (the page's document)
const greeting = document.getElementById("greeting");
const nameInput = document.getElementById("nameInput");
const greetBtn  = document.getElementById("greetBtn");
const themeBtn  = document.getElementById("themeBtn");
const counterEl = document.getElementById("counter");

// 2) State (data we track in JS)
let clicks = 0;

// 3) Wire up events (when the user does X, run Y)
greetBtn.addEventListener("click", () => {
  const name = nameInput.value.trim();

  // guard: empty input -> friendly default
  if (name === "") {
    greeting.textContent = "Hello, world!";
  } else {
    greeting.textContent = `Hello, ${name}!`;
  }

  // update the click counter
  clicks++;
  counterEl.textContent = `Clicks: ${clicks}`;
});

themeBtn.addEventListener("click", () => {
  // Flip the .dark class on <body> to swap theme variables
  const isDark = document.body.classList.toggle("dark");

  // Nice accessibility touch: reflect toggle state
  themeBtn.setAttribute("aria-pressed", String(isDark));
});
