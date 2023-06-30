const lines = document.querySelector(".lines");
const sidebar = document.querySelector(".sidebar");
const linksMenu = document.querySelectorAll("a");

lines.addEventListener("click", () => {
  lines.classList.toggle("active");
  sidebar.classList.toggle("show");
});

// https://bobbyhadz.com/blog/javascript-addeventlistener-is-not-a-function
// en ese links solucionaste el problema de que no podias hacer que se cerrara el menu dando click en los enlaces
for (const links of linksMenu) {
  links.addEventListener("click", function onClick() {
    console.log("Clickks");
    lines.classList.toggle("active");

    sidebar.classList.toggle("show");
  });
}
