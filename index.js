let toCalculate = ''

document.querySelectorAll('td').forEach(button => button.addEventListener('click', addToInput))

function addToInput(event) {
    let input = event.target.innerHTML
    if (input != '=' && input != 'AC' && input != 'CE') {
        toCalculate+= input
        document.getElementById('display').innerHTML = toCalculate
    } else if (input === '=') {
        document.getElementById('display').innerHTML = eval(toCalculate)
    } else if (input === 'AC') {
        toCalculate = ''
        document.getElementById('display').innerHTML = ''
    } else if (input === 'CE') {
        toCalculate = toCalculate.slice(0, -1)
        document.getElementById('display').innerHTML = toCalculate
    }
}