import '../styles/contact.css';
import emailIcon from '../images/email.png';

const contactPageLoadFunction = () => {
    let content = document.getElementById('content');
    let contactContainer = document.createElement('div');
    contactContainer.classList.value = 'mainContainer contactContainer';
    contactContainer.innerHTML = 
    `<div class="contacts">
        <div class="contacts-item">
            <div>
                <img src="https://img.icons8.com/color/48/000000/address--v1.png"/>
                <p>Our address</p>
            </div>
            <p class="small-par">2434 N Clark St, Chicago, IL  60614</p>
        </div>
        <div class="contacts-item email">
            <div>
                <div class="emailIcon"></div>
                <p>E-mail</p>
            </div>
            <p class="small-par">pizza-paradize@gmail.com</p>
        </div>
        <div class="contacts-item">
            <div>
                <img src="https://img.icons8.com/external-prettycons-flat-prettycons/47/000000/external-telephone-communications-prettycons-flat-prettycons.png"/>
                <p>Phone number</p>
            </div>
            <p class="small-par">773-525-2695</p>
        </div>
    </div>
    <div class="footer">
        © 2022 Pizza Paradize Chicago 
    </div>`;
    const myEmailIcon = new Image();
    myEmailIcon.src = emailIcon;
    contactContainer.querySelector('.emailIcon').appendChild(myEmailIcon);
    content.appendChild(contactContainer);
};

export {contactPageLoadFunction}