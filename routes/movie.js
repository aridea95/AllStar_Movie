const { Router } = require('express');
const router = Router();
const MovieController = require('../controllers/Movie');

const { authentication, authorization, admin } = require('../middlewares/auth')
const { uploadPictMovie } = require('../middlewares/multer')

router.get('/', MovieController.getMovie);
router.get('/add', authentication, admin, MovieController.addFormMovie);
router.post('/add', authentication, admin, uploadPictMovie.single('poster'), MovieController.addMovie);
router.delete('/delete/:id', authentication, admin, MovieController.deleteMovie);
router.get('/edit/:id', authentication, admin, MovieController.editFormMovie);
router.put('/edit/:id', authentication, admin, uploadPictMovie.single('poster'), MovieController.editMovie);
router.get('/search', MovieController.searchMovie);
router.get('/search/:id', MovieController.searchById);

module.exports = router;

