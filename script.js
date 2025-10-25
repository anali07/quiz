let points = 0

let questions = [
["1.Qual é o maior planeta do sistema solar?", "Sol", "Jupiter", "Urano", "Plutão"],
["2.Qual é o nome dos seres vivos que andam sobre duas pernas?", "Biceps", "Homem", "Bipede", "Peixe"],
["3.Qual é o maior mamifero do mundo?", "Baleia Azul", "Elefante", "Gato", "ornitorrinco"],
["4.O seu pai sabe que você é Gay?", "Sim", "Não", "Talvez", "Provavelmente"]
]



function verificar(){
    let select = document.querySelector('input[name="resposta"]:checked')

    if(select.value == "true"){
        points++
    }

    h1.innerText = questions[0][0]

}