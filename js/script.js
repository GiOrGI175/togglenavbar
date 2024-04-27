let btn = document.querySelector('.burger_btn');

let navUl = document.querySelector('.ul_nav');

btn.addEventListener('click', function () {
  navUl.classList.toggle('nav_bar_transform');
  btn.classList.toggle('btnopacity');
});
