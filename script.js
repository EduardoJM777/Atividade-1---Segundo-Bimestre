let inBase = document.getElementById("base");
let inAltura = document.getElementById("altura");
let btnMedirArea = document.getElementById("btnCalcArea");
let txtMedArea = document.getElementById("medArea");

btnMedirArea.addEventListener("click", function () {
    let valBase = parseFloat(inBase.value);
    let valAltura = parseFloat(inAltura.value);

    txtMedArea.textContent = "A área do terreno retangular é de: " +
    (valBase * valAltura).toFixed(2) + "m²";

});

// --------------------------------------------------------------------------- //

let inQtdCavalos = document.getElementById("qtdCavalos");
let btnCalcFerraduras = document.getElementById("btnFerraduras");
let txtQtdFerraduras = document.getElementById("qtdFerraduras");

btnCalcFerraduras.addEventListener("click", function () {
    let valFerraduras = parseInt(inQtdCavalos.value);

    txtQtdFerraduras.textContent = "Serão necessárias " + (valFerraduras * 4) +
    " ferraduras.";

});

// --------------------------------------------------------------------------- //

let inQtdPaes = document.getElementById("qtdPaes");
let inQtdBroas = document.getElementById("qtdBroas");
let btnCalcValEPoup = document.getElementById("btnValEPoup");
let txtValVendPao = document.getElementById("valVendPao");
let txtValVendBroa = document.getElementById("valVendBroa");
let txtValVendTot = document.getElementById("valVendTot");
let txtValPoupanca = document.getElementById("valPoupanca");

btnCalcValEPoup.addEventListener("click", function () {

    let valQtdPaes = parseInt(inQtdPaes.value);
    let valQtdBroas = parseInt(inQtdBroas.value);
    let totPaes = valQtdPaes * 0.12;
    let totBroas = valQtdBroas * 1.50;
    let total = totPaes + totBroas;

    txtValVendPao.textContent = "Valor total dos pães vendidos: R$" + totPaes.toFixed(2);
    txtValVendBroa.textContent = "Valor total das broas vendidas: R$" + totBroas.toFixed(2);
    txtValVendTot.textContent = "Valor total vendido: R$" + total.toFixed(2);
    txtValPoupanca.textContent = "Valor a ser mandado para a poupança: R$" + (total * 0.10).toFixed(2);

})

// --------------------------------------------------------------------------- //

let inNome = document.getElementById("nome");
let inIdade = document.getElementById("qtdAnos");
let btnCalcDias = document.getElementById("btnDias");
let txtDiasVividos = document.getElementById("qtdDiasVividos");

btnCalcDias.addEventListener("click", function () {

    let valIdade = parseInt(inIdade.value);

    txtDiasVividos.textContent = "Olá " + inNome.value + ", você já viveu " +
    (valIdade * 365) + " dias";

})

// --------------------------------------------------------------------------- //