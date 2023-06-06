/*
Напиши скрипт, який під час втрати фокусу на 
інпуті (подія blur), перевіряє його вміст щодо правильної кількості 
введених символів.

<input
  type="text"
  id="validation-input"
  data-length="6"
  placeholder="Please enter 6 symbols"
/>

Яка кількість символів повинна бути в інпуті, зазначається в його атрибуті data-length.
Якщо введена правильна кількість символів, то border інпуту стає зеленим, якщо неправильна кількість - червоним.
Для додавання стилів використовуй CSS-класи valid і invalid, які ми вже додали у вихідні файли завдання.

#validation-input {
  border: 3px solid #bdbdbd;
}

#validation-input.valid {
  border-color: #4caf50;
}

#validation-input.invalid {
  border-color: #f44336;
}
*/

document.querySelector('body').style.backgroundColor = '#EBECF0';
const inputEl = document.getElementById('validation-input');
inputEl.addEventListener('blur', onBlurBorderColor);

function onBlurBorderColor(event) {
    const inputDataLength = Number(inputRef.dataset.length);
    const inputValueLength = Number(inputRef.value.trim().length);
  
    if (inputValueLength === inputDataLength) {
      inputRef.classList.add('valid');
      inputRef.classList.remove('invalid');
    } else {
      inputRef.classList.remove('valid');
      inputRef.classList.add('invalid');
    }
  }