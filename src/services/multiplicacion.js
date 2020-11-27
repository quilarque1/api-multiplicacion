const  { obtenerResultado } = require('../utils/multiplicacion');
const { multiplicacionDto } = require('../dto/multiplicacionDto');

class MultiplicacionService {

	getMultiplicacion(operacion) {
		let resultado = obtenerResultado(operacion)
		console.log('Resultado de la Operacion: ', resultado)
		return multiplicacionDto(operacion, resultado) || {};
	}
}

module.exports = MultiplicacionService;
