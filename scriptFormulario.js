const expresiones = {
    name: /^[a-z ,.'-]/,
    mail: /^[a-zA-Z0-9\._-]+@[a-zA-Z0-9]+\.[a-zA-Z]+(\.[a-zA-Z])/,
    phone: /^[0-9]{7,14}$/

};




const formulario = document.getElementById('formulario');
const inputs = document.querySelectorAll('#formulario input');
/*
var input = document.querySelector('input');
const validarFormulario = (event) => {
    switch (event.target.name) {
        case "fname":
            if (expresiones.name.test(event.target.value)) {

            } else {
                input.style.borderColor = "#FF0000";
            }
            break;

        case "lname":
            if (expresiones.name.test(event.target.value)) {

            } else {
                input.style.borderColor = "#FF0000";
            }
            break;

        case "city":
            if (expresiones.name.test(event.target.value)) {

            } else {
                input.style.borderColor = "#FF0000";
            }
            break;

        case "mail":
            if (expresiones.mail.test(event.target.value)) {

            } else {
                input.style.borderColor = "#FF0000";
            }
            break;

        case "phone":
            if (expresiones.phone.test(event.target.value)) {

            } else {
                input.style.borderColor = "#FF0000";
            }
            break;
    }
}

inputs.forEach((input) => {
    input.addEventListener('keyup', validarFormulario);
    input.addEventListener('blur', validarFormulario);
});
*/

formulario.addEventListener('submit', (e) => {
    e.preventDefault();
});