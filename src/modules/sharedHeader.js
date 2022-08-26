import '../styles/sharedHeader.css';
import logo from '../images/logo.png';

const headerLoadFunction = () => {
    let content = document.getElementById('content');
    let header = document.createElement('div');
    header.classList.add('header');
    header.innerHTML = 
        `<div class="left">
            <div class="name">Pizza Paradize</div>
            <div class="logo"></div>
        </div>
        <div class="right">
            <button class="home">Home</button>
            <button class="menu">Menu</button>
            <button class="contact">Contact us</button>
        </div>`;
    const myLogo = new Image();
    myLogo.src = logo;
    header.querySelector('.logo').appendChild(myLogo);
    content.appendChild(header);
}

export {headerLoadFunction}