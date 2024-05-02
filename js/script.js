let btn = document.querySelector('.burger_btn');

let navUl = document.querySelector('.ul_nav');

btn.addEventListener('click', function () {
  navUl.classList.toggle('nav_bar_transform');
  btn.classList.toggle('btnopacity');
});

let li_btn = document.querySelector('.li_background');

let btn_a = document.querySelector('.btn_a');
