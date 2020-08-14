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
function blockAndFogging() {
	document.body.classList.add('body-lock');
	fogging.style.display = 'block';
}

/*--------------------------------Обработчики событий--------------------------------*/

// Вызов модального окна для регистрации
registerButton.addEventListener('click', function() {
	blockAndFogging();
	registerWindow.style.display = 'block';
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
		let form = parent.previousElementSibling;
		form.reset();
	});
});

// Отправка формы регистрации
confirmRegistrationButton.addEventListener('click', function() {
	let currentForm = document.forms.registerForm; /*Создание нового пользователя на основании введённых данных*/
	let login = currentForm.elements.login.value;
	let password = currentForm.elements.password.value;
	let name = currentForm.elements.username.value;
	let age = currentForm.elements.age.value;
	let newUser = new User(login, password, name, age); 

	let check = true; /*Проверка на отсутствие пустых полей*/ 
	while(check) {
		for(let key in newUser) {
			if(newUser[key] === '') {
				alert('All fields must be filled out');
				return check;
			} 
		}
		check = false;
	}
	
	userList.push(newUser); /*Добавление пользователя в пользовательский массив, закрытие окна*/
	currentForm.reset();
	registerWindow.style.display = 'none';
	fogging.style.display = 'none';
});

// Подтверждение входа
confirmLoginButton.addEventListener('click', function() {
	let currentForm = document.forms.loginForm;

	let check = true; /*Проверка на отсутствие пустых полей*/
	while(check) {
		for(let item of currentForm.elements) {
			if(item.value === '') {
				alert('All fields must be filled out');
				return check;
			}
		}
		check = false;
	}

	let login = currentForm.elements.login.value;
	let password = currentForm.elements.password.value;

	let user = userList.find(item => item.login === login && item.password === password);
	
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




