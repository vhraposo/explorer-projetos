
const students = [
    {
        name: "Victor",
        n1: 7.5,
        n2: 6.5,
    },
    {
        name:"Bruna",
        n1: 6.3,
        n2: 6.5,
    },
    {
        name:"Alex",
        n1: 0.5,
        n2: 3.5,
    },
]


function calcularMedia(nota1,nota2){
    let media = (nota1 + nota2) /2
    return media
}                                                 
 
for(let student of students){
    let result = calcularMedia(student.n1,student.n2)
   
    if(result >= 7){
        alert(`${student.name} sua média final foi de ${result}. Você foi aprovado no concurso`)
    }else{
        alert(`${student.name} sua média final foi de ${result}. Você não foi aprovado no concurso`)
    
    }
}




