// Переключение темы
let page = document.querySelector('.page');
let themeButton = document.querySelector('.theme-button');
themeButton.onclick = function () {
  page.classList.toggle('dark-theme');
}

// Предупреждение о Yandex Metrika
let cookies = document.querySelector('.ym-agreement');
let cookiesButton = cookies.querySelector('.agreement-button');

cookiesButton.onclick = function () {
  cookies.classList.add('ym-agreement-closed');
};
