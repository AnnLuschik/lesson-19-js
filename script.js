let registerButton = document.querySelector('.register-button');
let loginButton = document.querySelector('.login-button');
let escapeButton = document.querySelector('.escape');

let wrapper = document.querySelector('.wrapper');
let entryWindow = document.querySelector('.entry-window');
let fogging = document.querySelector('.fogging');

// Модальное окно для регистрации
registerButton.addEventListener('click', function() {
	entryWindow.style.display = 'block';
	document.body.classList.add('body-lock');
	fogging.style.display = 'block';
});

// Модальное окно для входа
loginButton.addEventListener('click', function() {
	let login = document.querySelector('.login-window');
	login.style.display = 'flex';
});

// Закрытие модального окна
escapeButton.addEventListener('click', function() {
	let window = document.querySelector('.modal');
	window.style.display = 'none';
	fogging.style.display = 'none';
	document.querySelector('form').reset();
});
