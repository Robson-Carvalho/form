const form = document.getElementById("form");
const username = document.getElementById("username")
const email = document.getElementById("email")
const password = document.getElementById("password")
const passwordConfirmation = document.getElementById("passwordConfirmation")

form.addEventListener("submit", (event) => {
	event.preventDefault();
	checkInputs();
});

function checkInputs() {
	const usernameValue = username.value;
	const emailValue = email.value;
	const passwordValue = password.value;
	const passwordConfirmationValue = passwordConfirmation.value;

	usernameValue === "" ? setErrorFor(username, "O nome de usuário é obrigatório.") : setSuccessFor(username);
	emailValue === "" ? setErrorFor(email, "O email é obrigatório.") : checkEmail(emailValue) ? setSuccessFor(email) : setErrorFor(email, "Um email válido é obrigatório.");
	passwordValue === "" ? setErrorFor(password, "A senha é obrigatória.") : checkPassword(passwordValue) ? setSuccessFor(password) : setErrorFor(password, "A senha precisa ter no mínimo 7 caracteres.");
	passwordConfirmationValue === "" ? setErrorFor(passwordConfirmation, "A confirmação de senha é necessária.") : passwordValue === passwordConfirmationValue ? setSuccessFor(passwordConfirmation) : setErrorFor(passwordConfirmation, "As senhas não conferem.");

	const formControl = form.querySelectorAll(".form-control");

	const formIsValid = [...formControl].every(formControl => {
		return (formControl.className === "form-control success");
	})

	formIsValid ? alert("Cadastro realizado com sucesso!") : console.log("error");
}

function setErrorFor(input, message) {
	// Pegando o elemento pai do input em questão
	const formControl = input.parentElement;
	const small = formControl.querySelector("small");

	// Adiciona a mensagem de erro
	small.innerText = message;

	// Adiciona a classe de erro
	formControl.className = "form-control error";
}

function setSuccessFor(input) {
	// Pegando o elemento pai do input em questão
	const formControl = input.parentElement;

	// Adiciona classe de sucesso
	formControl.className = "form-control success";
}

function checkEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
		email
	);
}

function checkPassword(password) {
	return password.length >= 7 ? true : false;
}
