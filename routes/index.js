const { Router } = require('express');
const router = Router();
const UserController = require('../controllers/userController')
const { uploadPictUser } = require('../middlewares/multer');

router.get('/', (req, res) =>{
    res.status(200).json({
        message : "Welcome To All Stars Movies."
    })
});

//other routes
const movieRoutes = require('./movie.js');
const CategoryRoutes = require('./category.js');
const ReviewRoutes = require('./review.js');
const userRoutes = require('./user.js');
const CharRoutes = require('./character.js');

router.use('/movie', movieRoutes);
router.use('/category', CategoryRoutes);
router.use('/review', ReviewRoutes);
router.use('/character', CharRoutes);

//Router ke user
router.use('/user', userRoutes)
router.post('/register', uploadPictUser.single('profileimage'), UserController.userRegister)
router.post('/login', UserController.userLogin)

module.exports = router;