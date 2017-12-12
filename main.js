'use strict';

var castigoElement = document.querySelector('.castigo');
var phrase = '';
var colores= ['Blanco', 'Azul', 'Rojo', 'Verde', 'Amarillo', 'Rosa'];
var color='';
//

for (var z=0; z<colores.length; z++) {
	color+= '<option>'+ colores[z] +'</option>';
	console.log(phrase);
}
for (var i=0; i<100; i++) {
	phrase+= 'He aprendido bien cómo funcionan los bucles <select>';

	phrase+= color+ '</select> <br>';

	}

castigoElement.innerHTML = phrase;
