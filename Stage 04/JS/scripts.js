


// let clima = "Quente"
// clima = "Frio"

// console.log(clima)


let clima = "Quente" // string
clima = true //boolean

console.log(typeof clima)


//declaration 
var name 

//assigment or atribuição de valores 
name = "Victor"

//que tipo de dado foi colocado na váriavel 
console.log(typeof name)

//Agrupamento de declarações
let agr, isHuman 
age = 23
isHuman = true

//Multiplos argumentos na função: 
console.log (name, age, isHuman)

// escrita de texto + variáveis
//Concatenando valores: 
console.log('O ' + name + ' tem ' + age + ' anos.')

//interpolando valores com template literals : 
console.log(`o ${name} tem ${age} anos.`)


//Object
const person = {
    name: 'Victor',
    age: 30,
    weight: 88.6,
    isAdmin: true
}
console.log(`O ${person.name} tem ${person.age} anos, ${person.weight}kg, mas ele é admin ? ${person.isAdmin}`)

//Array 
// - Para pegar a posição no array precisamos colocar a posição do elemento entre colchetes, começando de 0 (sempre o primeiro elemento será 0)
    const animals = [
        'Lion', //posição 0
        'Monkey', //posição 1
        'Cat' //posição 2
    ]

//Acessar valores no array 
console.log(animals[0])
//Ver qual o valor total do array 
console.log(animals.length)

//Transformar string em número e número em string
let string = "123"
console.log(Number(string))
let number = 321
console.log(String(number))

//contaar quantos caracteres tem uma palavra e quantos digitos tem um número 

let word = "Paralelepípedo"
console.log(word.length)
let number2 = 1234
console.log (String(number2).length)
// o  number não recebe lenght, então precisamos transformar o número em string.

//transformar um número quebrado com 2 casas decimais e trocar ponto por vírgula 

let number3 = 321.1232321
console.log(number3.toFixed(2).replace("." , ","))

//Transformar letras minusculas em maiusculas. e o processo inverso 

let word2 = "hello world"
console.log(word2.toUpperCase())

let word3 = "HELLO WORLD"
console.log(word3.toLowerCase())

//Separe um texto que comtem espaços, em um novo array onde cada texto é uma posição do array. Depois disso, transforme o array em um texto onde eram espaçõs, coloque _

let phrase = "Eu me chamo Victor"
let myArray = phrase.split(" ") //foi transformado para array através do split
let phraseWithUnderscore = myArray.join("_") // foi transformado de volta através do join
console.log(phraseWithUnderscore)

//Verificar se o texto contém uma palavra específica 
let phrase2 = "Eu quero viver o amor!"
console.log(phrase2.includes("amor"))

//Criar array com construtor
let myArray2 = new Array('a', 'b', 'c')
console.log(myArray2)

// contar elementos de um array 
console.log(["a", "b", "c"].length)

//Transformar uma cadeia de caracteres em elementos de um array 
let word4 = "manipulação"
console.log(Array.from(word4))

let techs = ["html", "css", "js"]

//adicionar um item no fim 
techs.push("nodejs")
// adicionar no começo
techs.unshift("sql")
//remover do fim 
techs.pop()
//remover do começo 
techs.shift()
//pegar somente alguns elementos do array 
console.log(techs.slice(1, 3))
//remover 1 ou mais itens em qualquer posição do array 
techs.splice(1,1)
//encontrar a posição de um elemento no array 
let index =  techs.indexOf('js') 
console.log(index)


console.log(techs)


//Operadores Aritiméticos
//Multiplicação *
console.log (3 * 5)

//divisão /
console.log(12/2)

//soma +
console.log(50+51)
//subtração -
console.log(12 - 2)

//resto da divisão %
//o que sobra depois de dividir 
let remainder
remainder = 11 % 10 
console.log(remainder)

//incremento ++
let increment = 0
increment++
console.log(increment)

//decremento --
let decrement = 0 
decrement --
console.log(decrement)

//exponencial  ** 
console.log(3 ** 3) //3x3=9x3 = 27

// Operadores de comparação 
// Irá retornar valores e retornar um boolean como resposta a comparação 

let one = 1
let two = 2 

// == igual a 
console.log( two == 1)
console.log( one == "1")

// != diferente de 
console.log( one != two)
console.log( one != 1)
console.log(one != "1")


// === estritamente igual a 
// ele vai comparar os valores e o tipo dos elementos


console.log( one === "1")
console.log( one === 1)

// !== estritamente diferente de 
console.log( two !== "2")
console.log( two !== 2)

let three = 3
let four = 4 

// > Maior que 
console.log(three > four)

// >= Maior igual a 
console.log(three >= 3)
console.log(four >= 3)

// < menor que 
console.log( three < four)

// <= Menor igual a 
console.log( three <= four)
console.log( three <= 3)
console.log( three <= 2)

//Operadores de atribuição (Assignment)
let x 

//assigment 
x = 1

//addition assignment 
// x = x +2
x += 2 

// subtraction assignment 
//x = x -1
x -= 1 

// multiplication assigment 
// x = x *2
x *= 2 

// division assignment 
// x = x /2
x /= 2

//remainder, exponetiation 
x %= 2
x **= 2
console.log(x)

// Operadores lógicos (logical operators)


// - 2 valores booleanos, quando verificados, resultará em verdadeiro e falso 

let pao = true 
let queijo = false 

// AND && 
// para ser true é necessário que as duas condições sejam verdadeiras 
console.log(pao && queijo)


// OR || 
//Se tiver um ou outro a condição será true
console.log(pao || queijo)


// NOT !
//Operador de negação, ele fará com que o que for true se torne false e vice e versa 
console.log(!pao)

//----------------------------------------//

// Operador condicional (ternário)
//Dependendo da condição, nós receberemos valores diferentes 

//Condição então valor 1 se não valor 2
//  condition ? value1 : value2 


// Exemplos: 
// Café da manhã TOP 
let paozinho = true 
let presunto = true 

const niceBreakfast = paozinho && presunto ? 'Café top' : 'Café Ruim'
console.log(niceBreakfast)


// Maior de 18
let age1 = 16
const canDrive = age1 >= 18 ? 'can drive' : "can't drive"
console.log(canDrive)
//-----------------------------------//
// operador de string ( string operator)
// comparsion (comparação)
console.log( 'a' == 'a')

//concatenation (concatenação)
// retorna a união de duas Strings
let alpha = 'alpha'
console.log(alpha + 'bet')

//------------

// FALSY: Quando um valor é considerado false em contextos onde um booleano é obriagório ( condicionais e loops) : 
/* 
false
0
-0
""
null
undefined 
NaN
*/ 

console.log( null ? 'verdadeiro' : 'falso')

/* TRUTHY 
    Quando um valor é considerado true em contextos onde um booleano é obrigatório (condicionais e loops)
    true
    {}
    []
    1
    3.23
    "0"
    "false"
    -1
    Infinity
    -Infinity

*/
console.log( Infinity ? 'verdadeiro' : 'falso')

// ----------------------------------


