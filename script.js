let points = 0
let counter = 0

let questions = [
    ["Qual é o maior planeta do Sistema Solar?","Marte","Sol","Terra","Júpter"],
    ["Qual o idioma mais falado no mundo?","Inglês","Japonês","Italiano","Portugês"],
    ["Qual o maior órgão do corpo humano?", "Estômago","Olhos","Pele","Fêmur"],
    ["Qual destes instrumentos não é considerado de cordas?", "Piano","Trompete","Violino","Violão"]
]

function verificar() {
    let select = document.querySelector('input[name="resposta"]:checked')
    let h1 = document.getElementsByTagName("h1")[0]
    let allLabel = document.getElementsByTagName("label")

    if (select.value == "true") {
        points++
    }

    counter++

    if (counter == 1) {
        h1.innerText = questions[0][0]
        allLabel[0].innerHTML = `<input type="radio" name="resposta" id="rsp1" value="false"> ${questions[0][1]}`
        allLabel[1].innerHTML = `<input type="radio" name="resposta" id="rsp2" value="false"> ${questions[0][2]}`
        allLabel[2].innerHTML = `<input type="radio" name="resposta" id="rsp3" value="false"> ${questions[0][3]}`
        allLabel[3].innerHTML = `<input type="radio" name="resposta" id="rsp4" value="true"> ${questions[0][4]}`
    } else if (counter == 2) {
        h1.innerText = questions[1][0]
        allLabel[0].innerHTML = `<input type="radio" name="resposta" id="rsp1" value="true"> ${questions[1][1]}`
        allLabel[1].innerHTML = `<input type="radio" name="resposta" id="rsp2" value="false"> ${questions[1][2]}`
        allLabel[2].innerHTML = `<input type="radio" name="resposta" id="rsp3" value="false"> ${questions[1][3]}`
        allLabel[3].innerHTML = `<input type="radio" name="resposta" id="rsp4" value="false"> ${questions[1][4]}`
    } else if (counter == 3) {
        h1.innerText = questions[2][0]
        allLabel[0].innerHTML = `<input type="radio" name="resposta" id="rsp1" value="false"> ${questions[2][1]}`
        allLabel[1].innerHTML = `<input type="radio" name="resposta" id="rsp2" value="false"> ${questions[2][2]}`
        allLabel[2].innerHTML = `<input type="radio" name="resposta" id="rsp3" value="true"> ${questions[2][3]}`
        allLabel[3].innerHTML = `<input type="radio" name="resposta" id="rsp4" value="false"> ${questions[2][4]}`
    } else if (counter == 4) {
        h1.innerText = questions[3][0]
        allLabel[0].innerHTML = `<input type="radio" name="resposta" id="rsp1" value="false"> ${questions[3][1]}`
        allLabel[1].innerHTML = `<input type="radio" name="resposta" id="rsp2" value="true"> ${questions[3][2]}`
        allLabel[2].innerHTML = `<input type="radio" name="resposta" id="rsp3" value="false"> ${questions[3][3]}`
        allLabel[3].innerHTML = `<input type="radio" name="resposta" id="rsp4" value="false"> ${questions[3][4]}`
    }

    if (counter == 5){
        let fin = document.getElementsByClassName("finalizar")[0]
        let env = document.getElementsByClassName("enviar")[0]
        env.style.display = "none"
        fin.style.display = "inline-block"
    }
}

function finalizar() {
    window.location.href = `pontos.html?pt=${points}`
    
}