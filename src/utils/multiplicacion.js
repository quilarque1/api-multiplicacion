
let obtenerResultado = (valores) => {
	let arrayDatos = valores.split('x');
	return arrayDatos.reduce(function(a, b){return parseInt(a) * parseInt(b)});
}

module.exports = { obtenerResultado };
