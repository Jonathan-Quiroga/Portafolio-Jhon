const nav = document.getElementById("nav");
const abrir = document.getElementById("abrir");
const cerrar = document.getElementById("cerrar");

abrir.addEventListener("click", () => {
    nav.classList.add("visible");
})

cerrar.addEventListener("click", () => {
    nav.classList.remove("visible");
})

/* apartado para la creacion de letras  */

const typed = new Typed('.typed', {
    strings: [
    '<i class="letras" >Soy Jonathan Quiroga </i>',
    '<i class="letras" >Soy Front-End Developer </i>',
    ],
    stringsElement: '#cadenas-texto', // ID del elemento que contiene cadenas de texto a mostrar.
	typeSpeed: 90, // Velocidad en mlisegundos para poner una letra,
	startDelay: 300, // Tiempo de retraso en iniciar la animacion. Aplica tambien cuando termina y vuelve a iniciar,
	backSpeed: 55, // Velocidad en milisegundos para borrrar una letra,
	smartBackspace: true, // Eliminar solamente las palabras que sean nuevas en una cadena de texto.
	shuffle: false, // Alterar el orden en el que escribe las palabras.
	backDelay: 1000, // Tiempo de espera despues de que termina de escribir una palabra.
	loop: false, // Repetir el array de strings, si no queremos repetir el bucle, false
	loopCount: true, // Cantidad de veces a repetir el array.  false = infinite, con numero para el numero de veces
	showCursor: true, // Mostrar cursor palpitanto, false si no queremos que se muestre el caracter de abajo
	cursorChar: '', // Caracter para el cursor
	contentType: 'html', // 'html' o 'null' para texto sin formato

});

