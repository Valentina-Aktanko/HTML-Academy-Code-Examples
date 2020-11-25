// Кукис! Ом-ном-ном...
let cookies = document.querySelector('.cookies-agreement');
let cookiesButton = document.querySelector('.button');

cookiesButton.onclick = function () {
  cookies.classList.add('cookies-agreement-closed');
};
