/*

<style>
	.input-placeholder-color::-webkit-input-placeholder {
		color:red;
	}  	  
</style>

<form role="form" action="#" onSubmit="return proveraForme(this)">

*/



function poljeValidno(polje) {
	if (polje.value == "") {
		polje.classList.add('input-placeholder-color');
		let tmp = polje.name;
		tmp = tmp[0].toUpperCase() + tmp.substring(1);
		polje.placeholder = tmp + " polje mora biti popunjeno!";
		return false;
	}
	else return true;
}

function proveraForme(forma) {
	if (poljeValidno(forma.naziv) == false) {
		return false;
	}
	if (poljeValidno(forma.drzava) == false) {
		return false;
	}
	if (poljeValidno(forma.cena) == false) {
		return false;
	}
	if (forma.cena.value <= 0) {
		forma.cena.value = "";
		return false;
	}
	return true;
}
