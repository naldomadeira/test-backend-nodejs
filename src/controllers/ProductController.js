const mongoose = require('mongoose');

const Product = require('../models/Product');

module.exports = {
    async index(req, res) {
        return res.send("index method controller");
    },

}