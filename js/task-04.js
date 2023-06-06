//Створи змінну counterValue, в якій буде зберігатися 
//поточне значення лічильника та ініціалізуй її значенням 0.
//Додай слухачів кліків до кнопок, всередині яких збільшуй 
//або зменшуй значення лічильника.
//Оновлюй інтерфейс новим значенням змінної counterValue.

const counterValue = 0;
const valueEl = document.getElementById('value');
const decrementBtn = document.querySelector('[data-action="decrement"]');
const incrementBtn = document.querySelector('[data-action="increment"]');

const onClickDecrementBtn = (event) => {
  counterValue -= 1;
  valueEl.textContent = counterValue;
};

const onClickIncrementBtn = (event) => {
  counterValue += 1;
  valueEl.textContent = counterValue;
};

decrementBtn.addEventListener('click', onClickDecrementBtn);
incrementBtn.addEventListener('click', onClickIncrementBtn);

