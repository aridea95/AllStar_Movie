const { MoviexCategory, Movie, Category, users } = require('../models');

class MovcatController {
    static async addFormMovcat (req, res, next) {
        try{
            res.status(200).json({
                msg: "ke form add"
            });
        } catch (err) {
            next (err);
        }
    }

    static async addMovcat (req, res, next) {
        const { MovieId, CategoryId } = req.body;
        const userId = req.userData.id
        try{
        const Movcat = await MoviexCategory.create({
            MovieId,
            CategoryId,
            userId
        })
        res.status(201).json(Movcat);   
        } catch (err) {
            next (err);
        }
    }

    static async deleteMovcat (req, res, next) {
        const id = req.params.id;
        try{
            const result = await MoviexCategory.destroy({
                where: { id }
            });
            res.status(201).json({
                msg: `Movcat deleted successfully!`
            });  
        } catch (err) {
            next (err);
        }
    }

    static async editFormMovcat (req, res, next) {
        const id = req.params.id;
        try{
            const found = await MoviexCategory.findOne({
                where : { id }
            });
            res.status(200).json({
                msg: "ke form edit"
            });
        } catch (err) {
            next (err);
        }
    }

    static async editMovcat (req, res, next) {
        const id = req.params.id;
        const { MovieId, CategoryId } = req.body;
        try{
            const Movcat = await MoviexCategory.update({
                MovieId,
                CategoryId
            },{
                where: { id }
            });
            res.status(201).json({
                msg: "Movie edited successfully!"
            }); 
        } catch (err) {
            next (err);
        }
    }

    static async findByCategory (req, res, next) {
        const id = req.params.id;
        try {
            const found = await MoviexCategory.findAll({
                where : {
                    CategoryId: id
                },
                include: [
                    Movie
                ]
            });
            res.status(200).json(found);
        } catch (err) {
            next (err);
        }
    }

}

module.exports = MovcatController;