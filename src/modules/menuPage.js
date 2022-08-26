import '../styles/menu.css';
import pizza1 from '../images/pizza1.jpg';
import pizza2 from '../images/pizza2.jpg';
import pizza3 from '../images/pizza3.jpg';
import pizza4 from '../images/pizza4.jpg'; 
let sources = [pizza1, pizza2, pizza3, pizza4];

const menuPageLoadFunction = () => {
    let content = document.getElementById('content');
    let menuContainer = document.createElement('div');
    menuContainer.classList.value = 'mainContainer menuContainer';
    menuContainer.innerHTML =
        `<div class="item">
            <div class="pizza"></div>
            <p class="name">Pizza Margarita with tomatoes</p>
            <p>Tomato sauce, mozzarella, tomatoes, basil, olive oil.</p>
        </div>
        <div class="item">
            <div class="pizza"></div>
            <p class="name">Pizza <br> Pepperoni</p>
            <p>Tomato sauce, mozzarella, pepperoni.</p>
        </div>
        <div class="item">
            <div class="pizza"></div>
            <p class="name">Pizza with chicken, tomatoes and green</p>
            <p>Cream sauce, mozzarella, chicken fillet, tomatoes, parmesan, olive oil, fresh dill, oregano</p>
        </div>
        <div class="item">
            <div class="pizza"></div>
            <p class="name">Pizza with sausages and mushrooms</p>
            <p>Cream sauce, mozzarella cheese, sausages, mushrooms, Pecorino Romano cheese, basil.</p>
        </div>`;
    let pizzas = menuContainer.querySelectorAll('.pizza');
    for (let i = 0; i < 4; i++){
        const myPizza = new Image();
        myPizza.src = sources[i];
        pizzas[i].appendChild(myPizza);
    }
    content.appendChild(menuContainer);
    // console.log(menuContainer.querySelectorAll('.item').forEach);

    const addAnimation = (() => {
        const getBigger = (e) => {
            e.currentTarget.classList.add('active');
        }
        const getSmaller = (e) => {
            e.currentTarget.classList.remove('active');
        }
        menuContainer.querySelectorAll('.item').forEach(item => {
            item.addEventListener('mouseover', getBigger);
            item.addEventListener('mouseout', getSmaller)
        })
    })();
}

export {menuPageLoadFunction};
