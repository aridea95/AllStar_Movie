module.exports = (err, req, res, next) => {
    let status = 500;
    let msg = "Internal server error"

    if(err.name === "SequelizeValidationError"){
        status = 500;
        msg = err.errors[0].message
    }
    
    res.status(status).json({
        status, msg
    })
}