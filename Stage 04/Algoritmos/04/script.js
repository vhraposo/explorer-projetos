

/*

Solicitar o nome do aluno e as 3 notas do bimestre, calcular a média daquele aluno.

Se o  aluno passou no bimestre, dar os parabéns.

Se o aluno não passou no bimestre, motivar o aluno a dar seu melhor na prova de recuperação. 

Em ambos os casos, mostre uma mensagem com o nome do aluno e a nota 

*/ 

const name = prompt('Qual é o seu nome? ')
const note1 = Number(prompt('Qual é a primeira nota? '))
const note2 = Number(prompt('Qual é a segunda nota? '))
const note3 = Number(prompt('Qual é a terceira nota? '))

let result = ((note1 + note2 + note3) /3)
result = result.toFixed(2)

if(result>=60){
    alert(`${name}  sua média final é ${result} , Parabéns!!`)
}else{
    alert(`${name} sua média final é ${result}, vamos estudar mais!!`)
}
