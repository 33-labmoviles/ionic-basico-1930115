console.log("hola mundo!");
//Paso 1: Calcular total

var total = 0;
var monto = 0;

var montoTxt = document.getElementById("monto");

var totalMsg = document.getElementById("totalMsg");

var descTxt = document.getElementById("descripcion");

var descrip = document.getElementById("descrip");

descAnt = "";

function calcularTotal() {
    //obtener el monto del campo de texto
    monto = montoTxt.value;
    monto = parseInt(monto);
    desc = descTxt.value;

    total = total + monto;
    
    //Imprimir en página

    descrip.innerHTML = descAnt + "\n" + desc + ": " + monto;
    descAnt = desc + ": " + montoTxt.value;
    totalMsg.innerHTML ="Total: " + total;
}