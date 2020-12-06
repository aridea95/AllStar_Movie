const { Router } = require('express');
const router = Router();
const CategoryController = require('../controllers/Category');
const MovcatController = require('../controllers/Movcat');

const { authentication, authorization, admin } = require('../middlewares/auth')

//Routes category
router.get('/', CategoryController.getCategory);
router.get('/add', authentication, admin, CategoryController.addFormCategory);
router.post('/add', authentication, admin, CategoryController.addCategory);
router.delete('/delete/:id', authentication, admin, CategoryController.deleteCategory);
router.get('/edit/:id', authentication, admin, CategoryController.editFormCategory);
router.put('/edit/:id', authentication, admin, CategoryController.editCategory);

//Routes categoryxreview
router.get('/find/:id', MovcatController.findByCategory);
router.get('/add/genre', authentication, admin, MovcatController.addFormMovcat);
router.post('/add/genre', authentication, admin, MovcatController.addMovcat);
router.delete('/delete/genre/:id', authentication, admin, MovcatController.deleteMovcat);
router.get('/edit/genre/:id', authentication, admin, MovcatController.editFormMovcat);
router.put('/edit/genre/:id', authentication, admin, MovcatController.editMovcat);


module.exports = router;