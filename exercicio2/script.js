//A
const soma = function(num1, num2){
   return num1 + num2
}
 console.log(soma(4, 6));

//B
const booleano = function (num3, num4) {
    return num3 >= num4
}
console.log(booleano(4, 6))

//C
let numPar = function(numero) {
    if (numero % 2 === 0) {
        return true;
    } else {
        return false;
    }
}
console.log(numPar(6));


//D
const tamanhoString = (string) =>{

      
    console.log(`O tamanho da string  \"${string.toUpperCase()}\" é ${string.length} caracteres. `)

}

const string1 = prompt(`Digite uma frase: `)

tamanhoString(string1)