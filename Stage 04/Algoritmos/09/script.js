/* 
  Crie uma lista de pacientes

  Cada paciente dentro da lista, deverá conter
    nome
    idade
    peso
    altura

  Escreva uma lista contendo o nome dos pacientes
*/


const patients = [
    {
        name: "Victor",
        age: 23,
        weight: 60,
        height: 171,
    },
    
    {
        name: "Pamela",
        age: 27,
        weight: 70,
        height: 176,
    },
    {
        name: "Gabriella",
        age: 29,
        weight: 65,
        height: 172,
    }
]


let patientsNames = []

for(let patient of patients){
    patientsNames.push(patient.name)

    alert(`O nome do paciente 1 é ${patient.name}, ele tem ${patient.age} anos, pesa ${patient.weight} kg e tem ${patient.height} cm.`)
}



// alert(`O nome da paciente 2 é ${patients[1].name}, ela tem ${patients[1].age} anos, pesa ${patients[1].weight} kg e tem ${patients[1].height} cm.`)

// alert(`O nome da paciente 3 é ${patients[2].name}, ela tem ${patients[2].age} anos, pesa ${patients[2].weight} kg e tem ${patients[2].height} cm.`)