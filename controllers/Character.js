const { Character, users } = require('../models');

class CharacterController {
    static async getCharacter (req, res, next) {
        try{
            const characterlist = await Character.findAll({
                order: [
                    ['id', 'ASC']
                ],
                // include : [
                //     users
                // ]
            });
            res.status(200).json(characterlist);
        } catch (err) {
            next (err);
        }
    }

    static async addFormCharacter (req, res, next) {
        try{
            res.status(200).json({
                msg: "ke form add"
            });
        } catch (err) {
            next (err);
        }
    }

    static async addCharacter (req, res, next) {
        const { name } = req.body;
        const userId = req.userData.id
        const photo = req.file.path;
        try{
            const found = await Character.findOne({
                where: {
                    name
                }
            })
            
            if (found){
                res.status(409).json({
                    msg: "Character already exist! input another Character!"
                })
            } else {
                const character = await Character.create({
                    name,
                    photo,
                    userId
                })
                res.status(201).json(character);                
            }
        } catch (err) {
            next (err);
        }
    }

    static async deleteCharacter (req, res, next) {
        const id = req.params.id;
        try{
            const result = await Character.destroy({
                where: { id }
            });
            res.status(201).json({
                msg: `Character deleted successfully!`
            });  
        } catch (err) {
            next (err);
        }        
    }

    static async editFormCharacter (req, res, next) {
        const id = req.params.id;
        try{
            const found = await Character.findOne({
                where : { id }
            });
            res.status(200).json({
                msg: "ke form edit"
            });
        } catch (err) {
            next (err);
        }
    }

    static async editCharacter (req, res, next) {
        const id = req.params.id;
        const { name } = req.body;
        const photo = req.file.path;
        try{
            const character = await Character.update({
                name,
                photo
            },{
                where: { id }
            });
            res.status(201).json({
                msg: "Character edited successfully"
            });   
        } catch (err) {
            next (err);
        }        
    }

}

module.exports = CharacterController;