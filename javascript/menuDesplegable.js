function desplegable() {

	if (desp.style.display === "block") {
		desp.style.display = "none";
	}
	else {
		desp.style.display = "block";
	}
}

var desp = document.getElementById ("desplegable");
document.getElementById ("icono").addEventListener ("click", desplegable);
