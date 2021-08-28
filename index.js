const $btn = document.getElementById('btn-menu');
const $menu = document.getElementById('menu');

const toggleMenu = () =>  {
    $menu.classList.toggle('active') 
}

$btn.addEventListener('click',toggleMenu);
