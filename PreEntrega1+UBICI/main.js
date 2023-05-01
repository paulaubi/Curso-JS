
let nombre = prompt("Ingrese su nombre para comenzar:");


function saludar() {
    let mensaje = `¡Bienvenid@, ${nombre}!`;
    alert(mensaje);
}

saludar()

let meta = Number(prompt("Ingrese su meta de lectura para 2023 en cantidad de libros."));

if(meta >= 0 && meta<=12){
    let mensaje = `${nombre}, tu meta de lectura es BAJA.`; 
    alert(mensaje);
}else if(meta >= 12 && meta<=36){
    let mensaje2 = `${nombre}, tu meta de lectura es MODERADA.`; 
    alert(mensaje2);
}else{
    let mensaje3 = `${nombre}, tu meta de lectura es ALTA.`; 
    alert(mensaje3);
} 

let libros = Number(prompt("¿Cuántos libros llevas leídos?"));
let resultado = meta - libros; 
let mensaje4 = `${nombre}, tienes que leer ${resultado} libros para alcanzar tu meta.`
alert(mensaje4);


for(let meses = 6; meses <= 12; meses++){
     let resultado2 = resultado / meses;

alert(`Si te faltan leer ${resultado} libros para alcanzar tu meta y tienes ${meses} meses, deberás leer ${resultado2} libros por mes`);
}



