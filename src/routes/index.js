const express = require('express');
const router = express.Router();
const MultiplicacionService = require('../services/multiplicacion');

router.get('/health', (req, res) => {
	res.json({ status: "api-multiplicacion is Up!!" });
});

router.get('/multiplicacion/:operacion', (req, res, next) => {
	console.log('Operacion a resolver: ', req.params)

	try {
		const multiplicacionService = new MultiplicacionService();

		res.status(200).json({
			resta: multiplicacionService.getMultiplicacion(req.params.operacion)
		});

	} catch (e) {
		next(e);
	}
});

module.exports = router;
