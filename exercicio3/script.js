let num1 = Number(prompt('Digite um número'))
let num2 = Number(prompt('Digite outro número'))

function soma(num1, num2){
    return num1 + num2
}

function subtracao(num1, num2){
    return num1 - num2
}

function multiplicacao(num1, num2){
    return num1 * num2
}

function divisao(num1, num2){
    return num1 / num2
}

console.log(soma(num1, num2), subtracao(num1, num2), multiplicacao(num1, num2), divisao(num1, num2))