'use strict';

var castigoElement = document.querySelector('.castigo');
var phrase = '';

for (var i=0; i<100; i++) {
	phrase+= 'He aprendido bien cómo funcionan los bucles <br>';
	console.log(phrase);



}
castigoElement.innerHTML = phrase;
