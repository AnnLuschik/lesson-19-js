// Кнопки
let registerButton = document.querySelector('.register-button');
let loginButton = document.querySelector('.login-button');
let escapeButton = document.querySelectorAll('.escape');
let confirmRegistrationButton = document.querySelector('.confirm-registration');
let confirmLoginButton = document.querySelector('.confirm-login');
let escapeToMainButton = document.querySelector('.innerUserbar-button');

// Элементы сайта
let wrapper = document.querySelector('.wrapper');
let fogging = document.querySelector('.fogging');
let modalWindow = document.querySelectorAll('.modal');
let registerWindow = document.querySelector('.register-window');
let loginWindow = document.querySelector('.login-window');
let innerUserbar = document.querySelector('.innerUserbar');
let divContent = document.querySelector('.content');
let userbar = document.querySelector('.userbar');

// Затемнение и блокировка при появлении модального окна
function fogModalLayout() {
	document.body.classList.add('body-lock');
	fogging.style.display = 'block';
}

//Проверка объекта на наличие пустых полей
function getNoEmptyFields(object) {
	for(let key in object) {
		if(object[key] === '') return false;
	}
	return true;
}

/*--------------------------------Обработчики событий--------------------------------*/

// Вызов модального окна для регистрации
registerButton.addEventListener('click', function() {
	fogModalLayout();
	registerWindow.style.display = 'block';
});

// Вызов модального окна для входа
loginButton.addEventListener('click', function() {
	fogModalLayout();
	loginWindow.style.display = 'flex';
});

// Закрытие модального окна
escapeButton.forEach(item => {
	item.addEventListener('click', function() {
		item.closest('.modal').style.display = 'none';
		fogging.style.display = 'none';
		let parent = item.parentElement;
		let form = parent.previousElementSibling;
		form.reset();
	});
});

// Отправка формы регистрации
confirmRegistrationButton.addEventListener('click', function() {
	let currentForm = document.forms.registerForm; /*Создание нового пользователя на основании введённых данных*/
	let currentUser = {
		login: currentForm.elements.login.value,
		password: currentForm.elements.password.value,
		name: currentForm.elements.username.value,
		age: currentForm.elements.age.value,
	};

	let check = getNoEmptyFields(currentUser);

	let newUser = new User();

	if(check) {
		newUser = currentUser;
		userList.push(newUser);
		alert('Registration is successful!');
		currentForm.reset();
		registerWindow.style.display = 'none';
		fogging.style.display = 'none';
	} else alert('All fields must be filled out');
});

// Подтверждение входа
confirmLoginButton.addEventListener('click', function() {
	let currentForm = document.forms.loginForm;

	let currentUser = {
		login: currentForm.elements.login.value,
		password: currentForm.elements.password.value,
	}

	let check = getNoEmptyFields(currentUser);
	let user;

	if(check) {
		user = userList.find(item => item.login === currentUser.login && item.password === currentUser.password);	
	} else {
		alert('All fields must be filled out');
		return false;
	}
	
	if(user) {
		alert('Congratulations, woof!');
	} else {
		alert('Invalid username or password');
		currentForm.reset();
		return;
	}

	loginWindow.style.display = 'none';
	fogging.style.display = 'none';
	currentForm.reset();

	let span = document.querySelectorAll('.content span');
	span[0].innerHTML = user.name;
	span[1].innerHTML = user.age;

	divContent.style.visibility = 'visible';
	userbar.style.display = 'none';
	innerUserbar.style.display = 'block';
});

// Выход на главную страницу
escapeToMainButton.addEventListener('click', function() {
	divContent.style.visibility = 'hidden';
	userbar.style.display = 'flex';
	innerUserbar.style.display = 'none';
});

//---------------------------------------------------------------------------------
let userList = [];

function User(login, password, name, age) {
	this.login = login;
	this.password = password;
	this.name = name;
	this.age = age;
}




