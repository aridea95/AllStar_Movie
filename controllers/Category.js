const { Category, users } = require('../models');

class CategoryController {
    static async getCategory (req, res, next) {
        try{
            const categorylist = await Category.findAll({
                order: [
                    ['id', 'ASC']
                ],
                // include : [
                //     users
                // ]
            });
            res.status(200).json(categorylist);
        } catch (err) {
            next (err);
        }
    }

    static async addFormCategory (req, res, next) {
        try{
            res.status(200).json({
                msg: "ke form add"
            });
        } catch (err) {
            next (err);
        }
    }

    static async addCategory (req, res, next) {
        const { genre } = req.body;
        const userId = req.userData.id
        try{
            const found = await Category.findOne({
                where: {
                    genre
                }
            })
            
            if (found){
                res.status(409).json({
                    msg: "genre already exist! input another genre!"
                })
            } else {
                const category = await Category.create({
                    genre,
                    userId
                })
                res.status(201).json(category);                
            }
        } catch (err) {
            next (err);
        }
    }

    static async deleteCategory (req, res, next) {
        const id = req.params.id;
        try{
            const result = await Category.destroy({
                where: { id }
            });
            res.status(201).json({
                msg: `Category deleted successfully!`
            });  
        } catch (err) {
            next (err);
        }        
    }

    static async editFormCategory (req, res, next) {
        const id = req.params.id;
        try{
            const found = await Category.findOne({
                where : { id }
            });
            res.status(200).json({
                msg: "ke form edit"
            });
        } catch (err) {
            next (err);
        }
    }

    static async editCategory (req, res, next) {
        const id = req.params.id;
        const { genre } = req.body;
        try{
            const category = await Category.update({
                genre
            },{
                where: { id }
            });
            res.status(201).json({
                msg: "Category edited successfully"
            });   
        } catch (err) {
            next (err);
        }        
    }

}

module.exports = CategoryController;