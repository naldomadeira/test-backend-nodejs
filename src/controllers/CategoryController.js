const mongoose = require('mongoose');

const CategoryDb = mongoose.model('Category');

module.exports = { 
    
    //search all categories
    async find(req, res) {
        //return all categories
        try {
            const categories = await CategoryDb.find();

            res.json(categories);
        } catch (err) {
            res.status(500).send({
                message : err.message || "Error Occurred while retriving product information"
            });
        }
         
    },

    //save a new category
    async store(req, res) {       
        //new category
        try {
            const category = await CategoryDb.create(req.body);
            res.json(category);

        } catch (err) {
            res.status(500).send({
                message : err.message || "Some error occurred while creating a store operation"
            });
        }
    },

    //update a category
    async update(req, res) {
        const id = req.params.id;
        
        //update category
        try {
            const category = await CategoryDb.findByIdAndUpdate(id, req.body, { new: true});
            res.json(category);

        } catch (err) {
            res.status(500).send({ message : "Error update product information"})
        }
    },
}