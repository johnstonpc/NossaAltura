
function calcular (){
    document.querySelector("main").style.display = "block";

    var valorM = document.getElementById('MulherNumero')
    var valorH = document.getElementById('HememNumero')
    var valorH1 = valorH.value
    var valorM1 = valorM.value

    var valorMcm =  parseInt(valorM1);
    var valorHcm =  parseInt(valorH1);


    document.querySelector("#foto1").style.height=valorHcm+300+"px";
    document.querySelector("#foto2").style.height=valorMcm+250+"px";

}
