const { Movie, Review, Category,  } = require('../models')
const {tokenVerifier} = require('../helpers/jwt')

const authentication = (req, res, next) => {
    console.log("Authentication works!")
    
    const { access_token } = req.headers;
    // console.log(access_token)
    if(!access_token){
        res.status(404).json({
            msg : "Token not found"
        })
    }else {
        try {
            const decode = tokenVerifier(access_token)
            // console.log(decode)
            req.userData = decode
            next();
        }catch (err) {
            res.status(400).json(err)
        }
    }
}

const authorization = (req,res,next) => {
    console.log("Authorization works!");
    const id = req.params.id;
    const userId = req.userData.id

    //console.log(userId);
    
    Review.findOne({
        where : {
            id
        }
    }).then(review=>{
        if(review){
            if(review.userId === userId){
                // res.status(200).json(review)
                next();
            }else{
                throw {
                    status : 403,
                    msg : "User doesn't have any access"
                }
            }
        }else{
            throw {
                status : 404,
                msg : "Movie not found" 
            }
        }

    }).catch(err=>{
        res.status(500).json(err)
    })
}

const admin = (req, res, next) => {
    console.log("Authorization Admin works!");
    const role = req.userData.role;

    if(role == 'admin'){
        next();
    } else {
        res.status(404).json({
            msg: "Access denied!"
        })
    }

}

module.exports = {
    authentication,authorization, admin
}