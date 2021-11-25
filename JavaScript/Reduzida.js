function EquacaoR() {
    var m = Number(document.getElementById("X").value);
    var pAx = Number(document.getElementById("Y").value);
    var pAy = Number(document.getElementById("A").value);
    var n = pAx - (m * pAy);
    var y = n > 0 ? `+${n}` : n;

    document.getElementById("display").value = `Y = ${m}x ${y} `;
 }
 function limpar(){
    document.getElementById("X").value = ""
    document.getElementById("Y").value = ""
    document.getElementById("A").value = ""
    document.getElementById("display").value = ""
    document.getElementById("C").value = ""
    document.getElementById("B").value = ""
     }