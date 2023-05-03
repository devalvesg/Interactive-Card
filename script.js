function TestarDados() {
    let nome = document.getElementById("cardName").value;
    nome = nome.toUpperCase();
    document.getElementById("nomeCartao").innerHTML = nome;

    let card_number = document.getElementById("cardNumber").value;
    const tamanhoCard = 16

    const verificacaoFinalCard = verificarTamanho(card_number, tamanhoCard);
    if (verificacaoFinalCard == true) {
        document.getElementById("numCartao").innerHTML = card_number
        document.getElementById("error").innerHTML = null;
    }
    else {
        document.getElementById("error").innerHTML = "Wrong Formart, minimun 16 numbers"
    }

    const tamanhoData = 2;
    let month = document.getElementById("month").value;
    let year = document.getElementById("year").value;
    let barra = "/";

    const verificacaoFinalMonth = verificarTamanho(month, tamanhoData);
    const verificacaoFinalYear = verificarTamanho(year, tamanhoData);

    if (verificacaoFinalMonth == true && verificacaoFinalYear == true && month <= 12) {
        document.getElementById("dataCard").innerHTML = month + "/" + year;
        document.getElementById("errorData").innerHTML = null;
    }
    else {
        document.getElementById("errorData").innerHTML = "Incorrect Date"
    }


    const tamanhoCvc = 3;
    let cvc = document.getElementById("cvc").value;

    const verificacaoFinalCvc = verificarTamanho(cvc, tamanhoCvc);

    if (verificacaoFinalCvc == true) {
        document.getElementById("cvcCard").innerHTML = cvc;
        document.getElementById("errorCvc").innerHTML = null;
    }
    else {
        document.getElementById("errorCvc").innerHTML = "Can't be blank"
    }

    if (verificacaoFinalCard && verificacaoFinalMonth && verificacaoFinalYear && verificacaoFinalCvc && month <= 12) {
        document.getElementById("info").style.display = 'none';
        document.getElementById("loadingPage").style.display = 'flex';
        setTimeout(function () {
            document.getElementById("loadingPage").style.display = 'none'
            document.getElementById("thankyou").style.display = 'inline';
        }, 3000);
    }
}

function verificarTamanho(valor, tamanho) {
    if (valor.length != tamanho) {
        return false;
    }
    else {
        return true;
    }
}

function Resposta() {
    let numero = document.getElementById("cardNumber").value;
    // numero = numero.replace(/(\d{4})/g, "$1 ");
    document.getElementById("cardNumber").value = numero;


    let nome = document.getElementById("cardName").value;
    nome = nome.toUpperCase();
    document.getElementById("nomeCartao").innerHTML = nome;

    
    let card_number = document.getElementById("cardNumber").value;
    document.getElementById("numCartao").innerHTML = numero
    

    //Testando se o usúario está digitando a data corretamente
    let barra = "/";
    if (document.getElementById("dataCard").value == null) {

    }
    else {
        let month = document.getElementById("month").value;
        let year = document.getElementById("year").value;
        document.getElementById("dataCard").innerHTML = month + barra + year;
    }


    let cvc = document.getElementById("cvc").value;
    document.getElementById("cvcCard").innerHTML = cvc;
}


function Continuar() {
    location.reload();
}
