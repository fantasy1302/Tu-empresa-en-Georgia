const form = document.querySelector('.form__inputs');
const nameInput = document.querySelector('.form__label--username');
const lastnameInput = document.querySelector('.form__label--usersurname');
const emailInput = document.querySelector('.form__label--useremail');
const phoneInput = document.querySelector('.form__label--userphone');
const countryInput = document.querySelector('.form__label--usercountry');
const addressInput = document.querySelector('.form__label--useraddress');

// Валидация имени и фамилии: допускаются только буквы
const nameRegex = /^[a-zA-Zа-яА-ЯёЁ]+$/;
nameInput.addEventListener('input', (event) => {
    nameInput.style.color = "black"
    const value = event.target.value.trim();
    if (value !== '' && !nameRegex.test(value)) {
        nameInput.setCustomValidity('Please enter a valid name (only letters)');
    } else {
        nameInput.setCustomValidity('');
    }
});

lastnameInput.addEventListener('input', (event) => {
    const value = event.target.value.trim();
    lastnameInput.style.color = "black"
    if (value !== '' && !nameRegex.test(value)) {
        lastnameInput.setCustomValidity('Please enter a valid last name (only letters)');
    } else {
        lastnameInput.setCustomValidity('');
    }
});

// Валидация электронной почты: проверяем формат с помощью регулярного выражения
const emailRegex = /^[-\w.]+@([A-z0-9][-A-z0-9]+\.)+[A-z]{2,4}$/;
emailInput.addEventListener('input', (event) => {
    emailInput.style.color = "black"
    const value = event.target.value.trim();
    if (value !== '' && !emailRegex.test(value)) {
        emailInput.setCustomValidity('Please enter a valid email address');
    } else {
        emailInput.setCustomValidity('');
    }
});

// Валидация номера телефона: проверяем, что введены только цифры и знаки плюса, минуса и пробела
// создаем регулярное выражение для валидации телефонного номера
const phoneRegex = /^\+995\s(5|7)\d{6}$/;

phoneInput.addEventListener('input', (event) => {
    phoneInput.style.color = "black"
  let value = event.target.value.trim();

  value = value.substring(0, 13);
  event.target.value = value;
  if (!phoneRegex.test(value)) {
    // если значение не соответствует регулярному выражению,
    // то добавляем класс "error" к полю ввода
    phoneInput.classList.add("error");
  } else {
    // если значение соответствует регулярному выражению,
    // то удаляем класс "error" у поля ввода
    phoneInput.classList.remove("error");
  }
});



// Валидация страны и адреса: допускаются только буквы и пробелы
const countryRegex = /^[a-zA-Zа-яА-ЯёЁ\s]+$/;
countryInput.addEventListener('input', (event) => {
    countryInput.style.color = "black"
    const value = event.target.value.trim();
    if (value !== '' && !countryRegex.test(value)) {
        countryInput.setCustomValidity('Please enter a valid country name (only letters and spaces)');
    } else {
        countryInput.setCustomValidity('');
    }
});

addressInput.addEventListener('input', (event) => {
    addressInput.style.color = "black"
    const value = event.target.value.trim();
    if (value !== '' && !countryRegex.test(value)) {
        addressInput.setCustomValidity('Please enter a valid address (only letters and spaces)');
    } else {
        addressInput.setCustomValidity('');
    }
});

// Отменяем отправку формы, если есть ошибки валидации
form.addEventListener('submit', (event) => {
    if (!form.checkValidity()) {
        event.preventDefault();
    }
});


const inputs = [nameInput, lastnameInput, emailInput, phoneInput, countryInput, addressInput];
inputs.forEach((input) => {
    input.addEventListener('focus', () => {
        input.setCustomValidity('');
    });
});

