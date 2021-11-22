const display = document.getElementById("display")
var numeroNovo = true
var operador
var numeroanterior

function InserirNumero(numero) {
    atualizarDisplay(numero)   
}

function atualizarDisplay(numero){
 if (numeroNovo == true){
     display.value = numero
     numeroNovo = false
 }  else{
     display.value += numero
 }
}

function backspace(){
    display.value = display.value.slice(0, -1)
}

function SelecionarOperacao(operacaoselecionada) {
    if(!numeroNovo){
        calcular()
        numeroNovo = true
        operador = operacaoselecionada
        numeroanterior = Number(display.value)
    }
}

function operacaopendente(){
    return operador !== undefined
}

function calcular(){
    if(operacaopendente()){
        var numeroatual = Number(display.value)
        numeroNovo = true

        if (operador == "+"){
            atualizarDisplay(numeroanterior + numeroatual)
        }else if(operador == "-"){
            atualizarDisplay(numeroanterior - numeroatual)
        }else if(operador == "*"){
            atualizarDisplay(numeroanterior * numeroatual)
        }else if(operador == "/"){
            atualizarDisplay(numeroanterior / numeroatual)
        }
    }
}   

function chamarigual(){
    calcular()
    operador = undefined
}

function limpar(){
    display.value = "0"
    numeroNovo = true
    numeroanterior = undefined
    operador = undefined
}

function inserirdecimal(){
    if(display.value.indexOf('.') == -1){
        if(display.value.length > 0 ){
            atualizarDisplay('.')
        }else{
            atualizarDisplay('0.')
        }
    }
}

function ClicouTecla(event){
    
    switch(event.key){
        case '1':
        case '2':
        case '3':
        case '4':
        case '5':
        case '6':
        case '7':
        case '8':
        case '9':
        case '0':
            InserirNumero(event.key)
            break
        case 'Delete':
            backspace()
            break
        case'+':
        case'-':
        case'/':
        case'*':
            SelecionarOperacao(event.key)
            break
        case'c':
            limpar(event.key)
            break
        case'Enter':
            chamarigual(event.key)
        
    }
}

