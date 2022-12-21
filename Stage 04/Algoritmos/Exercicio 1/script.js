

let n1 = Number(prompt("Digite o primeiro número"))
let n2 = Number(prompt("Digite o segundo número"))

let sum = n1 + n2 
let sub = n1 - n2
let div = n1 / n2
let mul = n1 * n2 
let res = n1 % n2 

alert(`O resultado da soma é ${sum}`)
alert(`O resultado da subtração é ${sub}`)
alert(`O resultado da divisão é ${div}`)
alert(`O resultado da multiplicação é ${mul}`)
alert(`O resultado do resto da divisão é ${res}`)

if(sum % 2 === 0){
  alert(`O número é par ${sum}` )
}else{
  alert(`O número é impar ${sum}`)
}

if(n1 != n2){
  alert("Os números inseridos são diferentes")
}else{
  alert("Os números inseridos são iguais")
}



