let page = document.querySelector('.page');
let themeButton = document.querySelector('.theme-button');

function updateThemeButton() {
  if (page.classList.contains('new-design')) {
    themeButton.textContent = 'Старый дизайн';
  } else {
    themeButton.textContent = 'Новый дизайн';
  }
}

themeButton.onclick = function () {
  page.classList.toggle('new-design');
  updateThemeButton();
}