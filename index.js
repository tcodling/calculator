let toCalculate = ''

document.querySelectorAll('td').forEach(button => button.addEventListener('click', addToInput))

function addToInput(event) {
    let input = event.target.innerHTML
    if (input === '÷') {
        input = '/'
    } else if (input === 'x') {
        input = '*'
    }
    if (input === '=') {
        document.getElementById('display').innerHTML = eval(toCalculate)
        toCalculate = eval(toCalculate)
    } else if (input === 'AC') {
        toCalculate = ''
        document.getElementById('display').innerHTML = ''
    } else if (input === 'DEL') {
        toCalculate = toCalculate.slice(0, -1)
        document.getElementById('display').innerHTML = toCalculate
    } else {
        toCalculate+= input
        document.getElementById('display').innerHTML = toCalculate
    }
}