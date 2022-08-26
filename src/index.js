console.log("hihi");

import {headerLoadFunction} from './modules/sharedHeader';
import {homePageLoadFunction} from './modules/homePage';
import {menuPageLoadFunction} from './modules/menuPage';
import {contactPageLoadFunction} from './modules/contactPage';
headerLoadFunction();
homePageLoadFunction();

const modules = {
    home: homePageLoadFunction,
    menu: menuPageLoadFunction,
    contact: contactPageLoadFunction
}

let currentPage = 'home';

const switchBtns = document.querySelectorAll('.header button');

const changePage = (e) => {
    if(e.target.classList.contains(currentPage)) return;
    currentPage = e.target.classList.value;
    document.querySelector('.mainContainer').remove();
    modules[currentPage]();
};

switchBtns.forEach(btn => btn.addEventListener('click', changePage));
