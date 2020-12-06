const { Router } = require('express');
const router = Router();
const UserController = require('../controllers/userController');

const { authentication } = require('../middlewares/auth')
const { uploadPictUser } = require('../middlewares/multer');

router.get('/', UserController.userList)
router.get('/update/', authentication, UserController.updateFormUser)
router.put('/update/', uploadPictUser.single('profileimage'), authentication, UserController.updateUser)
router.delete('/delete/', authentication, UserController.deleteUser)

module.exports = router;