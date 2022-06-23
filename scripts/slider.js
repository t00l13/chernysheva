/* Устанавливаем стартовый индекс слайда по умолчанию: */
let slideIndex = 1;
/* Вызываем функцию, которая реализована ниже: */
showSlides(slideIndex);

/* Увеличиваем индекс на 1 — показываем следующий слайд: */
function nextSlide() {
    showSlides(slideIndex += 1);
};

let i = 1;
setInterval(function(){
    nextSlide(i);
},10000);

/* Уменьшаем индекс на 1 — показываем предыдущий слайд: */
function previousSlide() {
    showSlides(slideIndex -= 1);
}

/* Устанавливаем текущий слайд: */
function currentSlide(n) {
    showSlides(slideIndex = n);
}

/* Функция перелистывания: */
function showSlides(n) {
    /* Обращаемся к элементам с названием класса "item", то есть к картинкам: */
    let leads = document.getElementsByClassName("lead__container-item");
    let news = document.getElementsByClassName("news__list")

    /* Проверяем количество слайдов: */
    if (n > leads.length) {
      slideIndex = 1
    }
    if (n < 1) {
        slideIndex = leads.length
    }

    /* Проходим по каждому слайду в цикле for: */
    for (let slide of leads) {
        slide.style.display = "none";
    }
    /* Делаем элемент блочным: */
    leads[slideIndex - 1].style.display = "flex";

    


        /* Проверяем количество слайдов: */
        if (n > news.length) {
            slideIndex = 1
          }
          if (n < 1) {
              slideIndex = news.length
          }
      
          /* Проходим по каждому слайду в цикле for: */
          for (let slide of news) {
              slide.style.display = "none";
          }
          /* Делаем элемент блочным: */
          news[slideIndex - 1].style.display = "flex";
}