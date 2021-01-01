let tooltip = document.querySelector('.tooltip');
let closeButton = document.querySelector('.close-button');
let tooltipContainer = document.querySelector('.tooltip-container');
let tooltipText = document.querySelector('.tooltip-text');

closeButton.onclick = function () {
  tooltip.classList.remove('opened');
};

if (tooltipContainer) {
  tooltipContainer.onclick = function (e) {
    let tooltipButton = e.target.closest('.tooltip-button');
    if (tooltipButton) {
      tooltipText.textContent = tooltipButton.dataset.tooltipText;
      tooltip.classList.add('opened');
    }
  };
};