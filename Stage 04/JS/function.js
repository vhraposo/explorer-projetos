//Function expression
// function anonymous

// parâmetros (parameters)
const sum = function(number1, number2){
    let total = number1 + number2
    return total
}

let number11 = 34
let number22 = 25
//sum(number11, number22) //arguments = argumentos 

console.log(`o número 11 é ${number11}`)
console.log(`o número 22 é ${number22}`)
console.log(`a soma é ${sum(number11, number22)}`)


//Função é um liquidificador 

function fazerSuco(fruta1, fruta2){
    return fruta1 + fruta2
}

const copo = fazerSuco('banana', 'maçã')
console.log(copo)



// function hoisting 

sayMyName()

function sayMyName(){
    console.log('Victor')
}

// arrow function 

const sayMyName2 = (name) => {
    console.log(name)
}

sayMyName2('Raposo')

//Callback function 

function sayMyName3(name) {
    console.log('antes de executar o callback')
    name()
    console.log('depois de executar o callback')
}

sayMyName3(
    () => {
        console.log('estou em um callback')
    }
)


/* 
Function () constructor 
*expressão new
*criar um novo objeto 
* this keyword
*/ 

function Person(name) {
    this.name = name
    this.walk = function(){
        return this.name + " está andando"
    }
}
const victor = new Person("Victor")
const joao = new Person("João")
console.log(victor.walk())
console.log(joao.walk())
