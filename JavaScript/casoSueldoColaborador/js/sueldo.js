function sueldo(dT,hL){
    var costo=0.13*25;
    var sueldo=dT*hL*costo;
    return sueldo;
}

document.write('El sueldo es:');
document.write('<br>');
document.write(sueldo(20,8));

//Sueldo 8 horas 21 dias
//XHora: 0.13*25= S/. 3,25

//Sueldo 8*3.25 * 21 = SUELDO FINAL