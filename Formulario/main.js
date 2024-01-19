const form = document.getElementById('form-validacao');
const campoA = document.getElementById('campoA');
const campoB = document.getElementById('campoB');
const valido = document.getElementById('formulariovalido')
const invalido = document.getElementById('formularionao valido')

function validaNumero(campoA, campoB) {
    return campoB > campoA
}

form.addEventListener('submit', function(e){
    e.preventDefault();

    let validarForm = validaNumero(campoA.valueasNumber, campoB.valueasNumber)
    if(validarForm) {
        alert('O formulário é válido!')
    } else {
        alert('O formulário não é válido')
    }
})