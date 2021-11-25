function DistanciaPR() {
    var X = Number(document.getElementById("X").value);
    var Y = Number(document.getElementById("Y").value);
    var A = Number(document.getElementById("A").value);
    var B = Number(document.getElementById("B").value);
    var C = Number(document.getElementById("C").value);
    console.log("A = " + A)
    console.log("B = " + B)
    console.log("C = " + C)
    console.log(X, Y)
    var superior = (A * X) + (B * Y) + C;
    var inferior = Math.sqrt((Math.pow(A, 2) + Math.pow(B, 2)));

    console.log(superior)
    console.log(inferior)

    var resultado = Math.abs(superior / inferior);

    document.getElementById("display").value = `D ${resultado.toFixed(3)}`
   
}
function limpar(){
    document.getElementById("X").value = ""
    document.getElementById("Y").value = ""
    document.getElementById("A").value = ""
    document.getElementById("display").value = ""
    document.getElementById("C").value = ""
    document.getElementById("B").value = ""
     }
