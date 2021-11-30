//! variables

const clickBtn = document.querySelector(`#fa`);
const menu = document.querySelector(`.dropdown`);
const copyright = document.querySelector(`.copyright`);
const yearNow = new Date().getFullYear();
const timeOfDay = new Date().getHours();
const body = document.querySelector(`body`);
//! functions
// option 1
// const toggleMenu = () => menu.classList.toggle(`active`);

// option 2
let showMenu = false;

const toggleMenu = () => {
    if (showMenu) {
        menu.style.display = `none`;
        showMenu = false;
    } else {
        menu.style.display = `flex`;
        showMenu = true;
    }
};


clickBtn.addEventListener(`click`, toggleMenu);

// change body background according to daytime 

// functions
const changeBodyBg = () => { }
if (timeOfDay >= 8 && timeOfDay <= 20) {
        body.classList.add("day-mode")
} else {
    body.classList.add("night-mode")
};


// Footer copyright