const labelEmail = document.getElementsByClassName('validacao-label')[0]
const inputEmail = document.getElementById('email');
const btnEnviar = document.getElementById('btn-enviar');

inputEmail.addEventListener('keyup', () => {

    if (!validarEmail(inputEmail.value)) {
        inputEmail.classList.add('validacao-input')
        labelEmail.innerHTML = 'Valid email required'
        labelEmail.style.display = 'block'
    }
    else{
        labelEmail.innerHTML = 'Perfect!'
        labelEmail.style.color = 'green'  
        inputEmail.style.border = 'solid 1px green'
        inputEmail.style.background = 'white'
        inputEmail.style.color = 'black'
    }
})


function validarEmail(email) {
    return /^[\w+.]+@\w+\.\w{2,}(?:\.\w{2})?$/.test(email);
}