function CreerFormulaire() {
	document.getElementById('form').innerHTML += '<div>'+
													'<label for="question"></label>'+
													'<input type="text" id="nom">'+
												'</div>'+'<br>'+
												'<div>'+
													'<label for="email"></label>'+
													'<input type="email" id="email">'+
												'</div>'+'<br>'+
												'<div>'+
													'<label for="message"></label>'+
													'<textarea id="message"></textarea>'+
												'</div>'+'<br>'+
												'<input type="button" value="Validé">';
}
function SupprimerFormulaire() {
	document.getElementById('form').innerHTML = "";
}