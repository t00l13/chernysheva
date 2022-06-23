
// const contactPopup = document.querySelector('#contact');
// const contactFormBtn = document.querySelector('.contact-from__button');
// const succsesPopup = document.querySelector('#succses');
// const succsesBtn = document.querySelector('.succses__close-btn');

// const connectBtn = document.querySelector('.lead__link-connect');

// const openPopupContact = (contactPopup) => {
//     contactPopup.classList.remove('popup_opened');
// }

// const openPopupSuccses = (succsesPopup) => {
//     succsesPopup.classList.remove('popup_opened');
// }

// const closePopupContact = (contactPopup) => {
//     contactPopup.classList.add('popup_opened');
// }

// const closePopupSuccses = (succsesPopup) => {
//     succsesPopup.classList.add('popup_opened');
// }

// connectBtn.addEventListener('click',openPopupContact);
// contactFormBtn.addEventListener('click',openPopupSuccses);

$('.lead__link-connect').click(
    function () {
      $('.contact-form')[0].reset();
      $('#contact').removeClass('popup_opened');
    }
  );
  $('.header__link-connect').click(
    function () {
      $('.contact-form')[0].reset();
      $('#contact').removeClass('popup_opened');
    }
  );

  $('.timetable__grid-item__link').click(
    function () {
      $('.contact-form')[0].reset();
      $('#contact').removeClass('popup_opened');
    }
  );

  $('.timetable__grid-item__link_375').click(
    function () {
      $('.contact-form')[0].reset();
      $('#contact').removeClass('popup_opened');
    }
  );

  // $('.contact-form__button').click(
  //   function () {
  //       $('#contact').addClass('popup_opened');
  //     $('#succses').removeClass('popup_opened');
  //   }
  // );
  $('.succses__close-btn').click(
    function () {
      $('#succses').addClass('popup_opened');
    }
  );

  $('.contact-form__close-btn').click(
    function () {
      $('#contact').addClass('popup_opened');
    }
  );




  