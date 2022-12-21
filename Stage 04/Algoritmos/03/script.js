/* 

Capturar 2 números e fazer as operações matemáticas de soma, subtração, multiplicação, divisão e resto da divisão e para cada operação, mostrar um alerta com o resultado  */

let num1 =  prompt('Insira o primeiro número')
let num2 =  prompt('Insira o segundo número')

//Converter de string para Number
num1 = Number(num1)
num2 = Number(num2)


let sum = num1 + num2
let sub = num1 - num2
let mul = num1 * num2
let div = num1 / num2
let rest = num1 % num2


alert (`O resultado final da soma é ${sum}`)
alert (`O resultado final da subtração é ${sub}`)
alert (`O resultado final da multiplicação é ${mul}`)
alert (`O resultado final da divisão é ${div}`)
alert (`O resultado final do resto da divisão é ${rest}`)

