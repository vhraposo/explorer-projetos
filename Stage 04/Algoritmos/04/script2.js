/*

Solicitar o nome do aluno e as 3 notas do bimestre, calcular a média daquele aluno.

Se o  aluno passou no bimestre, dar os parabéns.

Se o aluno não passou no bimestre, motivar o aluno a dar seu melhor na prova de recuperação. 

Em ambos os casos, mostre uma mensagem com o nome do aluno e a nota 

*/ 


const name = prompt('Qual é o seu nome? ')
const n1   = Number(prompt('Qual foi a N1?'))
const n2   = Number(prompt('Qual foi a N2?'))
const n3   = Number(prompt('Qual foi a N3?'))

let result = (n1+n2+n3) /3

if(result > 60){
    alert(`Parabéns ${name} sua média final foi de ${result}`)
}else if(result < 30) {
   alert (`${name} sua média foi de ${result}, você está reprovado!`)
} 

else{
    alert(`${name} sua média foi de ${result}, vamos estudar para a recuperação!`)
}
