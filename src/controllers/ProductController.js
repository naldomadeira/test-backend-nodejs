const mongoose = require('mongoose');
var ObjectId = mongoose.Types.ObjectId 
const ProductDb = mongoose.model('Product');
const CategoryDb = mongoose.model('Category');

module.exports = {

    // check if filters were sent through querys, if no filter comes, return all products
    // name query is String
    // category query is ObjectId
    async find(req, res) {
        const {name, category} = req.query;
        
        // check ir the query name exists 
        if (name) {

            try {
                const product = await ProductDb.find({title:name}).populate('category');
                res.json(product);
            } catch (err) {
                res.status(500).send({ message: `Erro retrieving product`})
            }

         // check ir the query category exists 
        } else if (category) {

            try {
                const product = await ProductDb.find(
                    { category:  mongoose.Types.ObjectId(category)}
                ).populate('category');
                res.json(product);
            } catch (err) {
                res.status(500).send({ message: `Erro retrieving product`})
            }

        } else {
            // else return all products
            try {
                const products = await ProductDb.find().populate('category');

                res.json(products);
            } catch (err) {
                res.status(500).send({
                    message : err.message || "Error Occurred while retriving product information"
                });
            }
         }

    },

    //show a product
    async show(req, res) {
        try {
            const product = await ProductDb.findById(req.params.id).populate('category');
            res.json(product);
        } catch (err) {
            res.status(500).send({ message: `Erro retrieving product`})
        }
    },

    
    //store a new product
    async store(req, res) {       
        //new product
        try {
            const product = await ProductDb.create(req.body).populate('category');
            res.json(product);

        } catch (err) {
            res.status(500).send({
                message : err.message || "Some error occurred while creating a store operation"
            });
        }
        
    },

    //update a product
    async update(req, res) {
        const id = req.params.id;
        
        //update product
        try {
            const product = await ProductDb.findByIdAndUpdate(id, req.body, { new: true}).populate('category');
            res.json(product);

        } catch (err) {
            res.status(500).send({ message : "Error update product information"})
        }
    },

    // delete a product
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