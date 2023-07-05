var operandoa;
var operandob;
var operacion;

//variables y documento get para id

function inicial(){
var resultado = document.getElementById("resultado");
var siete = document.getElementById("siete");
var ocho = document.getElementById("ocho");
var nueve = document.getElementById("nueve");
var sumar = document.getElementById("sumar");
var cuatro = document.getElementById("cuatro");
var cinco = document.getElementById("cinco");
var seis = document.getElementById("seis");
var restar = document.getElementById("restar");
var uno = document.getElementById("uno");
var dos = document.getElementById("dos");
var tres = document.getElementById("tres");
var multiplicar = document.getElementById("multiplicar");
var cero = document.getElementById("cero");
var limpiar = document.getElementById("limpiar");
var igual = document.getElementById("igual");
var dividir = document.getElementById("dividir");

//eventos onclick

uno.onclick = function(e){
    resultado.textContent = resultado.textContent + "1";
}

dos.onclick = function(e){
    resultado.textContent = resultado.textContent + "2";
}
tres.onclick = function(e){
    resultado.textContent = resultado.textContent + "3";
}
cuatro.onclick = function(e){
    resultado.textContent = resultado.textContent + "4";
}
cinco.onclick = function(e){
    resultado.textContent = resultado.textContent + "5";
}
seis.onclick = function(e){
    resultado.textContent = resultado.textContent + "6";
}
siete.onclick = function(e){
    resultado.textContent = resultado.textContent + "7";
}
ocho.onclick = function(e){
    resultado.textContent = resultado.textContent + "8";
}
nueve.onclick = function(e){
    resultado.textContent = resultado.textContent + "9";
}
cero.onclick = function(e){
    resultado.textContent = resultado.textContent + "0";
}
//funcion para limpiar

function resetear(){
    resultado.textContent = "";
    operandoa = 0;
    operandob = 0;
    operacion = "";
}

//funcion para limpiar la caja de resultado

function limpio(){
    resultado.textContent = "";
}

limpiar.onclick = function(e){
    resetear();
}

//eventos para operaciones

sumar.onclick = function(e){
    operandoa = resultado.textContent;
    operacion = "+";
    limpio();
}

restar.onclick = function(e){
    operandoa = resultado.textContent;
    operacion = "-";
    limpio();
}

multiplicar.onclick = function(e){
    operandoa = resultado.textContent;
    operacion = "*";
    limpio();
}

dividir.onclick = function(e){
    operandoa = resultado.textContent;
    operacion = "/";
    limpio();
}

igual.onclick = function(e){
    operandob = resultado.textContent;
    resolver();
}

function resolver(){

    var res = 0;
    switch(operacion){
        case "+":
            res = parseFloat(operandoa) + parseFloat(operandob);
            break;
        case "-":
            res = parseFloat(operandoa) - parseFloat(operandob);
            break;
        case "*":
            res = parseFloat(operandoa) * parseFloat(operandob);
            break;
        case "/":
            res = parseFloat(operandoa) / parseFloat(operandob);
            break;
    }

    resetear();
    resultado.textContent = res;

}


}