const checkbox = document.querySelector("input");
const menu = document.querySelector('.hamburger-menu');
const nav = document.querySelector('nav')



window.addEventListener("resize", checkSize);
function checkSize() {
    if (window.innerWidth > 600) {
        menu.setAttribute('id', 'menu-large');
        nav.setAttribute('id', 'nav-large');
        checkbox.checked = false;
    }
    else {
        nav.setAttribute('id', 'nav-small');
    }
}


checkbox.addEventListener('click', menuVisibility);

function menuVisibility() {
    if (checkbox.checked) {
        nav.setAttribute('id', 'nav-visible');
        menu.setAttribute('id', 'menu-slider');
    } else {
        nav.setAttribute('id', 'nav-small');
        menu.removeAttribute('id', 'menu-slider');
    }

}

