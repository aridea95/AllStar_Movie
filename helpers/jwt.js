const jwt = require('jsonwebtoken')
const secretKey = process.env.SECRET_KEY


const tokenGenerator = (user) => {
    const { id, email, role } = user

    const token = jwt.sign({
        id,
        email,
        role
    }, secretKey)
    return token;
}

const tokenVerifier = (access_token) => {
    return jwt.verify(access_token, secretKey)
}

module.exports = {
    tokenGenerator, tokenVerifier
}
