//let button = document.querySelector('#submit-btn');

function handleSubmit(event) {
  event.preventDefault();
};

window.onload = function () {
  let button = document.querySelector('#submit-btn');
  button.addEventListener('click', handleSubmit);
};