import './sass/main.scss';
import apiService from './js/apiService.js';
import card from './templation/tempCard.hbs';

var debounce = require('lodash.debounce');

const refs = {
    render: document.querySelector('.gallery'),
    input: document.querySelector('.search-form'),
    button: document.querySelector('.btn'),
};

const fetchImage = new apiService();

function renderCard(value) {
    refs.render.insertAdjacentHTML('beforeend', card(value));
    refs.button.scrollIntoView({
        behavior: 'smooth',
        block: 'end',
    });
}

function clearCard() {
    refs.render.innerHTML = '';
}

function addImage(e) {
    e.preventDefault();
    clearCard();
    fetchImage.search = e.target.value;
    if (fetchImage.search === '') {
        clearCard();  
    } else {
        fetchImage.getImage().then(renderCard);
    }
    fetchImage.restartValue();

    
}

function newImage() {
    fetchImage.getImage().then(renderCard);
}

refs.input.addEventListener('input', debounce(addImage, 500));
refs.button.addEventListener('click', newImage);