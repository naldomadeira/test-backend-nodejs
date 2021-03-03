const mongoose = require('mongoose');

const ProductDb = mongoose.model('productdb');

module.exports = {
    async index(req, res) {
        // return all products
        try {
            const products = await ProductDb.find();

            res.json(products);
        } catch (err) {
            res.status(500).send({
                message : err.message || "Error Occurred while retriving product information"
            });
        }
    },

    async store(req, res) {       
        //new product
        try {
            const product = await ProductDb.create(req.body);
            res.json(product);

        } catch (err) {
            res.status(500).send({
                message : err.message || "Some error occurred while creating a store operation"
            });
        }
        
    },

    async update(req, res) {
        const id = req.params.id;
        
        //update product
        try {
            const product = await ProductDb.findByIdAndUpdate(id, req.body, { new: true});
            res.json(product);

        } catch (err) {
            res.status(500).send({ message : "Error update product information"})
        }
    },

    async destroy(req, res) {
        const id = req.params.id;
         
        //delete product
         try {
            await ProductDb.findByIdAndRemove(id);
            
            res.send({
                message : `Product with id=${id} was deleted successfully!`
            });

        } catch (err) {
            res.status(500).send({
                message: `Could not delete product with id=${id}`
            });
        }
       

       
    }


}