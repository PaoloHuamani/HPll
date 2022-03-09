function compra(bebidas,frutas,abarrotes){
    var pagoTotal=bebidas+frutas+abarrotes;
    return pagoTotal;
}

document.write('Las compras de un día de Supermercado')
document.write('<br>')
document.write(compra(80.250,15.301,60.698)*100);