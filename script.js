let registerButton = document.querySelector('.register-button');
let loginButton = document.querySelector('.login-button');
let escapeButton = document.querySelectorAll('.escape');
let confirmRegistrationButton = document.querySelector('.confirm-registration');

let wrapper = document.querySelector('.wrapper');
let registerWindow = document.querySelector('.register-window');
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
		let form = parent.children[1];
		form.reset();
	});
});

// Отправка формы регистрации
confirmRegistrationButton.addEventListener('click', function() {
	let currentForm = document.forms.registerForm;
	let login = currentForm.elements.login.value;
	let password = currentForm.elements.password.value;
	let name = currentForm.elements.username.value;
	let age = currentForm.elements.age.value;
	let newUser = new User(login, password, name, age); /*Создание нового пользователя на основании введённых данных*/

	let check = true; /*Проверка на отсутствие пустых полей*/ 
	while(check) {
		for(let key in newUser) {
			if(newUser[key] === '') {
				alert('Необходимо заполнить все поля');
				return check;
			} 
		}
		check = false;
	}
	
	userList.push(newUser); /*Добавление пользователя в пользовательский массив, закрытие окна*/
	currentForm.reset();
	registerWindow.style.display = 'none';
	fogging.style.display = 'none';
	console.log(userList);
});

//---------------------------------------------------------------------------------
let userList = [];

function User(login, password, name, age) {
	this.login = login;
	this.password = password;
	this.name = name;
	this.age = age;
}




