const express = require('express');
const router = express.Router();
const pedidoController = require('../controllers/pedidoControllers.js');
const multer = require('multer');
const upload = multer({ dest: 'uploads/' });

router.post('/crear', pedidoController.createPedido);
router.get('/obtener/:id', pedidoController.getPedidoById);
router.put('/actualizar/:id', pedidoController.updatePedidoById);
router.delete('/eliminar/:id', pedidoController.deletePedidoById);
router.get('/listar', pedidoController.getAllPedidos);

module.exports = router;