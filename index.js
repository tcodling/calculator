let toCalculate = ''

document.querySelectorAll('td').forEach(button => button.addEventListener('click', addToInput))

function addToInput(event) {
    let input = event.target.innerHTML
    if (input != '=' && input != 'AC' && input != 'CE') {
        toCalculate+= input
        document.getElementById('display').innerHTML = toCalculate
        console.log(toCalculate)
    } else if (input === '=') {
        document.getElementById('display').innerHTML = eval(toCalculate)
        toCalculate = eval(toCalculate)
    } else if (input === 'AC') {
        toCalculate = ''
        temp = ''
        document.getElementById('display').innerHTML = ''
    } else if (input === 'CE') {
        toCalculate.replace(temp, '')
        console.log(toCalculate)
    }
}