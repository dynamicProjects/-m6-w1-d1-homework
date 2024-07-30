const mongoose = require('mongoose');

const InventorySchema = new mongoose.Schema({
    prodname:String,
    qty:Number,
    price:Number,
    status:String
}, {
    collection: 'inventorie'
});

module.exports = mongoose.model('Inventory',InventorySchema)