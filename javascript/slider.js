function pasarSlider() {
	// Anterior
	document.getElementById ("anterior").addEventListener("click", () => {
		moverSlider (-1)
	});

	// Siguiente
	document.getElementById ("siguiente").addEventListener("click", () => {
		moverSlider (1);
	});
}

// Mover el slider
function moverSlider (pos) {
	mostrarSlider (posicionSlider += pos);
}

function slideActual (pos) {
	posicionSlider = pos;
	mostrarSlider (posicionSlider);
}

function mostrarSlider (pos) {
	//alert ("mostrarSlider"+ pos);
	var slider = document.getElementsByClassName ("puesto-slider");
	
	// Si la posición querida es mayor que la disponible,
	// se fija al principio
	if (pos > slider.length) {
		posicionSlider = 1;
	}
	// Si es menor, se fija al final
	if (pos < 1) {
		posicionSlider = slider.length;
	}

	for (var cont = 0; cont < slider.length; cont++) {
		slider[cont].style.display = "none";
	}
	slider[posicionSlider - 1].style.display = "block";
}


// Posición por defecto
var posicionSlider = 1;

// Muestra el slider con la posición por defecto
mostrarSlider (posicionSlider);

// anterior, siguiente
pasarSlider();
