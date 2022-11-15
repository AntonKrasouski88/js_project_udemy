/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};

movieDB.movies.sort();
console.log(movieDB.movies);

const advertisingBlock = document.querySelector('.promo__adv');
const imgAdvertisigBlock = advertisingBlock.querySelectorAll('img');
const promoGenre = document.querySelector('.promo__genre');
//const newPromoGenre = document.createElement('div');
const promoTitle = document.querySelector('.promo__title');
const promoBG = document.querySelector('.promo__bg');
const promoInterectiveList = document.querySelector('.promo__interactive-list');


imgAdvertisigBlock.forEach(item => item.remove());
//promoGenre.remove();
//newPromoGenre.textContent = "Драма";
//promoTitle.before(newPromoGenre);
//newPromoGenre.classList.add('promo__genre');
promoGenre.textContent = 'Драма';
promoBG.style.backgroundImage = 'url("img/bg.jpg")';

promoInterectiveList.innerHTML = '';

movieDB.movies.forEach((item, i) => {
    promoInterectiveList.innerHTML += `<li class="promo__interactive-item">${i+1}. ${item}
    <div class="delete"></div>
</li>`;
});
