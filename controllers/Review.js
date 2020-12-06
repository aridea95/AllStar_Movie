const { Review, Movie, users } = require('../models');

const { paginate } = require('../helpers/pagination');

class ReviewController {
    static async getReview (req, res, next) {
        try{
            const reviewlist = await Review.findAll({
                order: [
                    ['id', 'ASC']
                ],
                include : [
                    Movie, users
                ]
            });
            res.status(200).json(reviewlist);
        } catch (err) {
            next (err);
        }
    }

    static async addFormReview (req, res, next) {
        const MovieId = req.params.MovieId;
        try{
            const found = await Review.findOne({
                where : { MovieId }
            });
            res.status(200).json({
                msg: "ke form add"
            });
        } catch (err) {
            next (err);
        }
    }

    static async addReview (req, res, next) {
        const { content, rating } = req.body;
        const MovieId = req.params.MovieId;
        const userId = req.userData.id
        try{
            const found = await Review.findOne({
                where: { 
                    MovieId,
                    userId
                }
            });
            if(found){
                res.status(409).json({
                    msg: "Cannot review the same movie!"
                })
            } else {
            const review = await Review.create({
                content,
                rating,
                userId,
                MovieId
            })
            res.status(201).json(review);
            }  
        } catch (err) {
            next (err);
        }
    }

    static async deleteReview (req, res, next) {
        const id = req.params.id;
        try{
            const result = await Review.destroy({
                where: { id }
            });
            res.status(201).json({
                msg: `Review deleted successfully!`
            });  
        } catch (err) {
            next (err);
        }
    }

    static async editFormReview (req, res, next) {
        const id = req.params.id;
        try{
            const found = await Review.findOne({
                where : { id }
            });
            res.status(200).json({
                msg: "ke form edit"
            });
        } catch (err) {
            next (err);
        }
    }

    static async editReview (req, res, next) {
        const id = req.params.id;
        const { content, rating, MovieId } = req.body;
        try{
            const review = await Review.update({
                content,
                rating,
                MovieId
            },{
                where: { id }
            });
            res.status(201).json({
                msg: "Review edited successfully"
            });  
        } catch (err) {
            next (err);
        }
    }

    static async getMovieReview (req, res, next){
        const MovieId = req.params.MovieId;
        const page = req.query.page;
        const limit = req.query.limit;
        try {
            const found = await Review.findAll({
                where: { MovieId },
                order: [
                    ['id', 'ASC']
                ]
            });
            const result = paginate(page, limit, found);
            res.status(200).json(result);
        } catch (err) {
            next (err);
        }
    }

    static async shareReview (req, res, next){
        const userId = req.userData.id
        const page = req.query.page;
        const limit = req.query.limit;
        try {
            const found = await Review.findAll({
                where: { userId },
                order: [
                    ['id', 'ASC']
                ]
            })
            const result = paginate(page, limit, found);
            res.status(200).json(result);
        } catch (err) {
            next (err);
        }
    }
    catch (err) {
        next(err)

    }

}

module.exports = ReviewController;