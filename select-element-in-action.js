// DOM elementi su se ucitali...
document.addEventListener("DOMContentLoaded", function (e) {
	let elements = document.getElementsByTagName("select");
	const paragraf = document.getElementById("paragraf-1");
	let text = paragraf.innerHTML;
	elements[0].addEventListener('change', (event) => {
		if (event.target.value == "one") {
                        // resetuj paragraf
			paragraf.innerHTML = "";
			paragraf.innerHTML = text + " ... neki tekst" ;
		} else if (event.target.value == "two") {
			paragraf.innerHTML = "";
			paragraf.innerHTML = text + " ... neki drugi tekst ";
		} else { // vrati na inicijalnu vrednost paragrafa
			paragraf.innerHTML = "";
			paragraf.innerHTML = text;
		}
	});
});

