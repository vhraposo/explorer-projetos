/* 
Capture 10 items para compor a lista de um supermercado. 

Após capturar os 10 items, imprima-os, serando por vírgula.
*/ 


//Primeiramente vamos criar a estrutura for e dentro dela a váriavel item, que se iniciara com 0, em seguida a próxima instrução ser[a , enquanto item for menor que 10, adicione mais um (item++)

//variaveis criadas fora do escopo de bloco podem ser enxergadas dentro do escopo de bloco, já as criadas dentro do escopo, não podem ser enxergadas fora do mesmo 

let items = [];

for(let item = 0; item < 10; item++) {
    let itemName = prompt(`Digite o item ${item}`)
   items[item] = itemName
}

alert(items)

//Array  é uma estrutura de dados que organiza dentro dele diversos tipos de dados : []
