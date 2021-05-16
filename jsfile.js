const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const bodyRef = document.querySelector('body');
const startRef = document.querySelector('[data-action="start"]');
const stoptRef = document.querySelector('[data-action="stop"]');

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

let changeColor = null;

startRef.addEventListener('click', () => {
  changeColor = setInterval(() => {
    bodyRef.style.backgroundColor =
      colors[randomIntegerFromInterval(0, colors.length)];
  }, 1000);
  startRef.disabled = true;
});

stoptRef.addEventListener('click', () => {
  clearInterval(changeColor);
  startRef.disabled = false;
});
