let inputValue = document.querySelector('.input');

let alertElement = document.querySelector('.alert');

let alertElement2 = document.querySelector('.alert-2');

let btn = document.querySelector('.btn');

let btnLink = document.querySelector('.btn-link');

function validated() {
  btn.addEventListener('click', () => {
    if (inputValue.value < 1) {
      alertElement.style.display = 'block';
      inputValue.style.borderBottom = '2px solid red';
      inputValue.focus();
  
    } else if (inputValue.value.length < 11 || inputValue.value.length >= 1) {
      alertElement2.style.display = 'block';
      alertElement.style.display = 'none';
    } else if (inputValue.value.length >= 11) {
      alertElement2.style.display = 'none';
    }
  });
}
validated()

inputValue.addEventListener('textInput', () => {
  if (inputValue.value.length >= 11) {
    inputValue.style.borderBottom = '1px solid aqua';
    alertElement2.style.display = 'none';
    btnLink.setAttribute('href', 'digikala.html');
  }
})