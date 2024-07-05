const Pedido = require('../models/pedidoModels.js');
const express = require('express');
const router = express.Router();
const multer = require('multer');


// Crear pedido con archivo multimedia
exports.createPedido = (req, res) => {
    const body = req.body;
    const archivoMultimedia = req.file ? req.file.path : null;

    const nuevoPedido = new Pedido({
        cliente: body.cliente,
        productos: body.productos,
        total: body.total,
        fecha: body.fecha,
        archivoMultimedia: archivoMultimedia
    });

    nuevoPedido.save()
        .then(() => {
            res.status(200).json('Datos guardados');
        })
        .catch(err => {
            console.error(err);
            res.status(500).json({ message: err.message });
        });
};

// Obtener todos los pedidos
exports.getAllPedidos = (req, res) => {
    Pedido.find()
        .then(pedidos => {
            res.status(200).json(pedidos);
        })
        .catch(err => {
            console.error(err);
            res.status(500).json({ message: err.message });
        });
};

// Obtener pedido por ID
exports.getPedidoById = (req, res) => {
    const id = req.params.id;

    Pedido.findById(id)
        .then(pedido => {
            if (!pedido) {
                return res.status(404).json({ message: 'Pedido no encontrado' });
            }
            res.status(200).json(pedido);
        })
        .catch(err => {
            console.error(err);
            res.status(500).json({ message: err.message });
        });
};

// Actualizar pedido
exports.updatePedidoById = (req, res) => {
    const id = req.params.id;
    const body = req.body;

    Pedido.findByIdAndUpdate(id, body, { new: true })
        .then(pedidoActualizado => {
            if (!pedidoActualizado) {
                return res.status(404).json({ message: 'Pedido no encontrado' });
            }
            res.status(200).json('Datos Actulizados');
        })
        .catch(err => {
            console.error(err);
            res.status(500).json({ message: err.message });
        });
};

// Eliminar pedido
exports.deletePedidoById = (req, res) => {
    const id = req.params.id;

    Pedido.findByIdAndRemove(id)
        .then(pedidoEliminado => {
            if (!pedidoEliminado) {
                return res.status(404).json({ message: 'Pedido no encontrado' });
            }
            res.status(200).json({ message: 'Pedido eliminado' });
        })
        .catch(err => {
            console.error(err);
            res.status(500).json({ message: err.message });
        });
};


