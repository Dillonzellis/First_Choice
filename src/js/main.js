// console.log('working');

// when .mega-menu-open toggle .nav-row-col display flex


const megaMenuToggle = document.querySelector(".mega-menu-toggle");
const testing = document.querySelector("#mega-menu-wrap-primary-menu");

const navRowCol = document.querySelector(".nav-row-col");

let toggleFlex = () => {
    navRowCol.style.display = "none";
    // console.log('clciked')
}

const checking = () => {
    if (testing.classList.contains('.mega-menu-open')) {
        // console.log('eureka');
    }
    // console.log('something');
}

megaMenuToggle.addEventListener('click', checking)

// navRowCol.addEventListener('click', console.log('yeppers'))