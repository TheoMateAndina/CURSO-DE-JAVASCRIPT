let principio = "Puede escoger entre varias opciones: rodio, oro, paladio, platino, plata o bronce.";

alert(principio)

let PlataoOro = prompt("¿El precio de qué metal desea calcular?").toLowerCase();

switch (PlataoOro) {
case "rodio" :
	alert("Escogiste rodio. Presiona ENTER para calcular el precio del rodio");
break;
case "oro" :
	alert("Escogiste oro. Presiona ENTER para calcular el precio del oro");
break;
case "paladio" :
	alert("Escogiste paladio. Presiona ENTER para calcular el precio del paladio");
break;
case "platino" :
	alert("Escogiste platino. Presiona ENTER para calcular el precio del platino");
break;
case "plata" :
	alert("Escogiste plata. Presiona ENTER para calcular el precio de la plata");
break;
case "bronce" :
	alert("Escogiste bronce. Presiona ENTER para calcular el precio del bronce");
break;
default :
	alert("La opción que ingresaste no es válida. Vuelve atrás e ingresa una opción válida.");
}

const PrecioRodio = 65614.44;

const PrecioOro = 13185.59;

const PrecioPaladio = 9673.44;

const PrecioPlatino = 6497.97;

const PrecioPlata = 154.84;

const PrecioBronce = 0.8;

function operacion(valor1, valor2) {
	let resultado = valor1 * valor2;
	alert("El valor de tu metal es de $" + resultado);
}

if (PlataoOro == "rodio") {
	let gramos = prompt("¿Cuántos gramos de rodio desea calcular?");
	operacion (PrecioRodio, gramos);
} else if (PlataoOro == "oro") {
	let gramos = prompt("¿Cuántos gramos de oro desea calcular?");
	operacion(PrecioOro, gramos);
} else if (PlataoOro == "paladio") {
	let gramos = prompt("¿Cuántos gramos de paladio desea calcular?");
	operacion(PrecioPaladio, gramos);
} else if (PlataoOro == "platino") {
	let gramos = prompt("¿Cuántos gramos de platino desea calcular?");
	operacion(PrecioPlatino, gramos);
} else if (PlataoOro == "plata") {
	let gramos = prompt("¿Cuántos gramos de plata desea calcular?");
	operacion(PrecioPlata, gramos);
} else if (PlataoOro == "bronce") {
	let gramos = prompt("¿Cuántos gramos de bronce desea calcular?")
	operacion(PrecioBronce, gramos);
 }

