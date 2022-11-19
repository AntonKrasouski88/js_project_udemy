/* Задания на урок 1:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

/* Задания на урок 2:

1) Реализовать функционал, что после заполнения формы и нажатия кнопки "Подтвердить" - 
новый фильм добавляется в список. Страница не должна перезагружаться.
Новый фильм должен добавляться в movieDB.movies.
Для получения доступа к значению input - обращаемся к нему как input.value;
P.S. Здесь есть несколько вариантов решения задачи, принимается любой, но рабочий.

2) Если название фильма больше, чем 21 символ - обрезать его и добавить три точки

3) При клике на мусорную корзину - элемент будет удаляться из списка (сложно)

4) Если в форме стоит галочка "Сделать любимым" - в консоль вывести сообщение: 
"Добавляем любимый фильм"

5) Фильмы должны быть отсортированы по алфавиту */

'use strict';

document.addEventListener('DOMContentLoaded', () => {
    const movieDB = {
        movies: [
            "Логан",
            "Лига справедливости",
            "Ла-ла лэнд",
            "Одержимость",
            "Скотт Пилигрим против..."
        ]
    };
    
  
    
    const advertisingBlock = document.querySelector('.promo__adv');
    const imgAdvertisigBlock = advertisingBlock.querySelectorAll('img');
    const promoGenre = document.querySelector('.promo__genre');
    //const newPromoGenre = document.createElement('div');
    const promoBG = document.querySelector('.promo__bg');
    const promoInterectiveList = document.querySelector('.promo__interactive-list');
    const addForm = document.querySelector('.add');
    const addInput = addForm.querySelector('.adding__input');
    const checkbox = addForm.querySelector('[type="checkbox"]');

    const sortData = (arr) => {
        arr.sort();
    };
    
    

    addForm.addEventListener('submit', (event) => {
        event.preventDefault();

        const newFilm = addInput.value;
        const favorit = checkbox.checked;

        movieDB.movies.push(newFilm);
        sortData(movieDB.movies);
        
        createMovieList(movieDB.movies, promoInterectiveList);

        event.target.reset();

    });

    function removeItem(data) {
        data.forEach(item => item.remove());
    }
   
   
    function changeText (item, text) {
        item.textContent = text;
    }
    
    function changePromo (selector, imageAdress) {
        selector.style.backgroundImage = imageAdress;
    }
    
    function createMovieList(data, selector) {
        
        selector.innerHTML = '';

        data.forEach((item, i) => {
            selector.innerHTML += `<li class="promo__interactive-item">${i+1}. ${item}
            <div class="delete"></div>
        </li>`;
        }); 
    }


    sortData(movieDB.movies);
    removeItem(imgAdvertisigBlock);
    changeText(promoGenre,'Драма');
    changePromo(promoBG, 'url("img/bg.jpg")');
    createMovieList(movieDB.movies, promoInterectiveList);
   /*  movieDB.movies.forEach((item, i) => {
        promoInterectiveList.innerHTML += `<li class="promo__interactive-item">${i+1}. ${item}
        <div class="delete"></div>
    </li>`;
    }); */
});


