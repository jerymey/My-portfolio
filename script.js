const hamIcon = document.getElementById('ham-icon');
const menu = document.getElementById('menu');
const closeIcon = document.getElementById('close-icon');

function openMenu() {
  hamIcon.classList.toggle('hidden');
  menu.classList.toggle('hidden');
}
function closeMenu() {
  hamIcon.classList.toggle('hidden');
  menu.classList.toggle('hidden');
}
hamIcon.addEventListener('click', openMenu);
closeIcon.addEventListener('click', closeMenu);
