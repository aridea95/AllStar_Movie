const { Movchar, Movie, Character, users } = require('../models');

class MovcharController {
    static async addFormMovchar (req, res, next) {
        try{
            res.status(200).json({
                msg: "ke form add"
            });
        } catch (err) {
            next (err);
        }
    }

    static async addMovchar (req, res, next) {
        const { MovieId, CharacterId } = req.body;
        const userId = req.userData.id
        try{
        const movchar = await Movchar.create({
            MovieId,
            CharacterId,
            userId
        })
        res.status(201).json(movchar);   
        } catch (err) {
            next (err);
        }
    }

    static async deleteMovchar (req, res, next) {
        const id = req.params.id;
        try{
            const result = await Movchar.destroy({
                where: { id }
            });
            res.status(201).json({
                msg: `Movcat deleted successfully!`
            });  
        } catch (err) {
            next (err);
        }
    }

    static async editFormMovchar (req, res, next) {
        const id = req.params.id;
        try{
            const found = await Movchar.findOne({
                where : { id }
            });
            res.status(200).json({
                msg: "ke form edit"
            });
        } catch (err) {
            next (err);
        }
    }

    static async editMovchar (req, res, next) {
        const id = req.params.id;
        const { MovieId, CharacterId } = req.body;
        try{
            const movchar = await Movchar.update({
                MovieId,
                CharacterId
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

    static async findByCharacter (req, res, next) {
        const id = req.params.id;
        try {
            const found = await Movchar.findAll({
                where : {
                    CharacterId: id
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

module.exports = MovcharController;