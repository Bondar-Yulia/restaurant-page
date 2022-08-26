import '../styles/home.css';
import cart from '../images/cart.png';
import pizza from '../images/pizza.png';

const homePageLoadFunction = () => {
    let content = document.getElementById('content');
    let homeContainer = document.createElement('div');
    homeContainer.classList.value = 'mainContainer homeContainer';
    homeContainer.innerHTML = `<div class="info">
        <div>Pizza Paradize</div>
        <p class="first-par">Taste the best pizza in Chicago right now. </p>
        <p class="second-par">
            Our main goal is to do the best for you, so we have only four pizzas to not make you think very long, 
            but instead enable you to pick a pizza faster
        </p>    
        <div class="cart"></div>
        </div>
        <div class="bigPizza"></div>`;
    const myCart = new Image();
    myCart.src = cart;
    const myPizza = new Image();
    myPizza.src = pizza;
    homeContainer.querySelector('.cart').appendChild(myCart);
    homeContainer.querySelector('.bigPizza').appendChild(myPizza);
    content.appendChild(homeContainer);
}

export {homePageLoadFunction};

