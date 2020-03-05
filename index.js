let toCalculate = ''

document.querySelectorAll('td').forEach(button => button.addEventListener('click', pressButton))

function pressButton(event) {
    let input = event.target.innerHTML
    let display = document.getElementById('display')
    if (input === '÷') {
        input = '/'
    } else if (input === 'x') {
        input = '*'
    }
    if (input === '=') {
        display.innerHTML = eval(toCalculate)
        toCalculate = eval(toCalculate)
    } else if (input === 'AC') {
        toCalculate = ''
        display.innerHTML = ''
    } else if (input === 'DEL') {
        toCalculate = toCalculate.slice(0, -1)
        display.innerHTML = toCalculate
    } else {
        toCalculate+= input
        display.innerHTML = toCalculate
    }
}