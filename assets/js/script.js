const labelEmail = document.getElementById('validation')
const inputEmail = document.getElementById('email');
const btnEnviar = document.getElementById('btn-enviar');

inputEmail.addEventListener('keydown', () => {

    if (!validarEmail(inputEmail.value)) {
        inputEmail.classList.remove('accepted-validation-input')
        inputEmail.classList.add('no-accepted-validation-input')

        labelEmail.classList.remove('accepted-validation-label')
        labelEmail.classList.add('no-accepted-validation-label')

        labelEmail.innerHTML = 'Valid email required'
    }
    else{
        inputEmail.classList.remove('no-accepted-validation-input')
        inputEmail.classList.add('accepted-validation-input')

        labelEmail.classList.remove('no-accepted-validation-label')
        labelEmail.classList.add('accepted-validation-label')
        
        labelEmail.innerHTML = 'Perfect!'
    }
})


function validarEmail(email) {
    return /^[\w+.]+@\w+\.\w{2,}(?:\.\w{2})?$/.test(email);
}