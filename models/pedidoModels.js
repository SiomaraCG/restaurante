const mongoose = require('mongoose');

const pedidoSchema = new mongoose.Schema({
    cliente: { type: String, required: true },
    productos: [{
        producto: { type: String, required: true },
        cantidad: { type: Number, required: true }
    }],
    total: { type: Number, required: true },
    fecha: { type: Date, default: Date.now },
    archivoMultimedia: {
        type: String,
        default: null
    }
});

const Pedido = mongoose.model('Pedido', pedidoSchema);

module.exports = Pedido;
