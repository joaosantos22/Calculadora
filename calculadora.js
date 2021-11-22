function distanciaEntreDoisPontos() {
    var pAx = Number(document.getElementById("pax").value);
    var pAy = Number(document.getElementById("pay").value);
    var pBx = Number(document.getElementById("pbx").value);
    var pBy = Number(document.getElementById("pby").value);

    var x = Math.pow((pBx - pAx), 2)
    var y = Math.pow((pBy - pAy), 2)
    var soma = x + y;
    var distancia = Math.sqrt(soma);
    document.getElementById("resultado").innerHTML = distancia;
}

function pontoMedioEntreDoisPontos() {
    var pAx = Number(document.getElementById("pax").value);
    var pAy = Number(document.getElementById("pay").value);
    var pBx = Number(document.getElementById("pbx").value);
    var pBy = Number(document.getElementById("pby").value);

    var x = (pAx + pBx) / 2;
    var y = (pAy + pBy) / 2;
    document.getElementById("resultado").innerHTML = `Ponto Médio (${x}, ${y})`;
}

function equacaoDaReta() {
    var pAx = 2//Number(document.getElementById("pax").value);
    var pAy = -1//Number(document.getElementById("pay").value);
    var pBx = 3//Number(document.getElementById("pbx").value);
    var pBy = 2//Number(document.getElementById("pby").value);

    var m = [
        [pAx, pBx, 1, pAx],
        [pAy, pBy, 1, pAy]
    ]

    var n1 = ((-1 * m[0][1]) * m[1][0])
    var x1 = ((-1 * m[0][2]) * m[1][1])
    var y1 = ((-1 * m[0][3]) * m[1][2])

    var n2 = m[0][0] * m[1][1]
    var y2 = m[0][1] * m[1][2]
    var x2 = m[0][2] * m[1][3]

    var somaX = x1 + x2 > 0 ? `+${x1 + x2}` : `${x1 + x2}`;
    var somaY = y1 + y2 > 0 ? `+${y1 + y2}` : `${y1 + y2}`;
    var somaN = n1 + n2 > 0 ? `+${n1 + n2}` : `${n1 + n2}`;

    document.getElementById("resultado").innerHTML = `Equação da Reta: ${somaX}x ${somaY}y ${somaN} = 0 `;

}

function coeficienteAngular() {
    var pAx = Number(document.getElementById("pax").value);
    var pAy = Number(document.getElementById("pay").value);
    var pBx = Number(document.getElementById("pbx").value);
    var pBy = Number(document.getElementById("pby").value);
    var coefienteAngular = (pAy - pBy) / (pAx - pBx);
    document.getElementById("resultado").innerHTML = `Coefiente Angular ${coefienteAngular}`;
}

function distanciaPontoEReta() {
    var pAx = Number(document.getElementById("pax2").value);
    var pAy = Number(document.getElementById("pay2").value);
    var a = Number(document.getElementById("a").value);
    var b = Number(document.getElementById("b").value);
    var c = Number(document.getElementById("c").value);
    console.log("A = " + a)
    console.log("B = " + b)
    console.log("C = " + c)
    console.log(pAx, pAy)
    var superior = (a * pAx) + (b * pAy) + c;
    var inferior = Math.sqrt((Math.pow(a, 2) + Math.pow(b, 2)));

    console.log(superior)
    console.log(inferior)

    var resultado = Math.abs(superior / inferior);

    document.getElementById("resultado2").innerHTML = `D ${resultado}`;

}

function equacaoReduzida() {
    var m = document.getElementById("m").value;
    var pAx = Number(document.getElementById("pax3").value);
    var pAy = Number(document.getElementById("pay3").value);
    var n = pAx - (m * pAy);
    var y = n > 0 ? `+${n}` : n;

    document.getElementById("resultado3").innerHTML = `Y = ${m}x ${y} `;
}


function posicaoRelativaDuasRetas() {
    var mRetaUm = Number(document.getElementById("mRetaUm").value);
    var nRetaUm = Number(document.getElementById("nRetaUm").value);
    var mRetaDois = Number(document.getElementById("mRetaDois").value);
    var nRetaDois = Number(document.getElementById("nRetaDois").value);

    var resultado = "";

    if(mRetaUm === mRetaDois) {
        resultado += " Paralela";
        if(nRetaUm === nRetaDois){
            resultado += " Coincidente"
        }
    }else {
        resultado += " Concorrente";
        if((mRetaUm * mRetaDois) == -1){
            resultado += " Perpendicular"
        }
    }
    document.getElementById("resultado4").innerHTML = `${resultado}`
}