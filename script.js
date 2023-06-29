const hamIcon = document.getElementById("ham-icon");
const menu = document.getElementById("menu");

function openMenu() {
    hamIcon.classList.toggle("hidden");
    menu.classList.toggle("hidden");
}

hamIcon.addEventListener("click", openMenu);