const { Router } = require('express');
const router = Router();
const CharacterController = require('../controllers/Character');
const MovcharController = require('../controllers/Movchar');

const { authentication, authorization, admin } = require('../middlewares/auth')
const { uploadPictChar } = require('../middlewares/multer')

//Routes Character
router.get('/', CharacterController.getCharacter);
router.get('/add', authentication, admin, CharacterController.addFormCharacter);
router.post('/add', authentication, admin, uploadPictChar.single('photo'), CharacterController.addCharacter);
router.delete('/delete/:id', authentication, admin, CharacterController.deleteCharacter);
router.get('/edit/:id', authentication, admin, CharacterController.editFormCharacter);
router.put('/edit/:id', authentication, admin, uploadPictChar.single('photo'), CharacterController.editCharacter);

//Routes MoviexCharacter
router.get('/find/:id', MovcharController.findByCharacter);
router.get('/add/char', authentication, admin, MovcharController.addFormMovchar);
router.post('/add/char', authentication, admin, MovcharController.addMovchar);
router.delete('/delete/char/:id', authentication, admin, MovcharController.deleteMovchar);
router.get('/edit/char/:id', authentication, admin, MovcharController.editFormMovchar);
router.put('/edit/char/:id', authentication, admin, MovcharController.editMovchar);


module.exports = router;