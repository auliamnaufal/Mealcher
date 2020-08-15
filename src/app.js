import 'regenerator-runtime'
import "./styles/style.css";
import headImage from './img/meal.png';
import aboutImage1 from './img/about-img-1.jpg'
import aboutImage2 from './img/about-img-2.jpg'
import aboutImage3 from './img/about-img-3.jpg'
import main from "./script/view/main.js";

const headerImg = () => {
    const element = document.createElement('div');
    element.classList.add('header__img')


    const headerImage = new Image();
    headerImage.src = headImage;

    element.appendChild(headerImage);

    return element;
}

const aboutImg1 = () => {
    const element = document.createElement('div');
    element.classList.add('about__img--1')


    const aboutImg1 = new Image();
    aboutImg1.src = aboutImage1;

    element.appendChild(aboutImg1);

    return element;
}

const aboutImg2 = () => {
    const element = document.createElement('div');
    element.classList.add('about__img--2')


    const aboutImg2 = new Image();
    aboutImg2.src = aboutImage2;

    element.appendChild(aboutImg2);

    return element;
}

const aboutImg3 = () => {
    const element = document.createElement('div');
    element.classList.add('about__img--3')


    const aboutImg3 = new Image();
    aboutImg3.src = aboutImage3;

    element.appendChild(aboutImg3);

    return element;
}

document.querySelector('#header').appendChild(headerImg());
document.querySelector('.about__img').appendChild(aboutImg1());
document.querySelector('.about__img').appendChild(aboutImg2());
document.querySelector('.about__img').appendChild(aboutImg3());

document.addEventListener("DOMContentLoaded", main);