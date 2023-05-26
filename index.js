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

/* Carrusel */

window.addEventListener('load',function(){
	new Glider(document.querySelector('.carousel_lista'), {
	//aqui se coloca que tipo de carrusel queremos (en la pagina se ven) 
	slidesToShow: 1,
	slidesToScroll: 1,
	duration: 3,
	draggable: true,
	dots: '.carousel_indicadores', //ahi se coloca la clase para indicadores que esta en html
	arrows: {
		prev: '.carousel_anterior',  //la clase de los botones de siguiente
		next: '.carousel_siguiente'
	},  
	//la libreria esta programada para que sea mobile first, 
	//asi que a las medidas mobile se le ponen arriba y las otras abajo
	responsive: [
		{
			// screens greater than >= 775px
			breakpoint: 500,
			settings: {
			// Set to `auto` and provide item width to adjust to viewport
			slidesToShow: 4,
			slidesToScroll: 2,
			duration: 3
			
			}
		},{
			// screens greater than >= 1024px
			breakpoint: 1000,
			settings: {
			slidesToShow: 5,
			slidesToScroll: 1,
			duration: 3
			
			}
		}
		]
	});
		
  });
  