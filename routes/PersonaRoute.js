const express = require('express');
const router = express.Router();
const { PersonaController } = require('../controllers');
const { AuthMiddleware } = require('../middlewares');

router.get('/personas', PersonaController.listarPersonas);

router.get('/consumir-servicio', PersonaController.consumirServicio)

router.post('/personas', PersonaController.registrarPersona);

router.get('/token', PersonaController.generarToken)

router.put('/personas', PersonaController.modificarPersona);

router.delete('/personas', PersonaController.eliminarPersona);

module.exports = router;