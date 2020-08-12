let registerButton = document.querySelector('.register-button');
let loginButton = document.querySelector('.login-button');
let escapeButton = document.querySelectorAll('.escape');

let wrapper = document.querySelector('.wrapper');
let entryWindow = document.querySelector('.entry-window');
let loginWindow = document.querySelector('.login-window');
let modalWindow = document.querySelectorAll('.modal');
let fogging = document.querySelector('.fogging');

// Затемнение и блокировка при появлении модального окна
function blockAndFogging() {
	document.body.classList.add('body-lock');
	fogging.style.display = 'block';
}

// Вызов модального окна для регистрации
registerButton.addEventListener('click', function() {
	blockAndFogging();
	entryWindow.style.display = 'block';
});

// Вызов модального окна для входа
loginButton.addEventListener('click', function() {
	blockAndFogging();
	loginWindow.style.display = 'flex';
});

// Закрытие модального окна
escapeButton.forEach(item => {
	item.addEventListener('click', function() {
		item.closest('.modal').style.display = 'none';
		fogging.style.display = 'none';
		let parent = item.parentElement;
		let form = parent.children[1];
		form.reset();
	});
});
