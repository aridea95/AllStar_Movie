const { Router } = require('express');
const router = Router();
const ReviewController = require('../controllers/Review');

const { authentication, authorization } = require('../middlewares/auth')

router.get('/', ReviewController.getReview);
router.get('/share', authentication, ReviewController.shareReview);
router.get('/:MovieId', ReviewController.getMovieReview);
router.get('/add/:MovieId', authentication, ReviewController.addFormReview);
router.post('/add/:MovieId', authentication, ReviewController.addReview);
router.delete('/delete/:id', authentication, authorization, ReviewController.deleteReview);
router.get('/edit/:id', authentication, authorization, ReviewController.editFormReview);
router.put('/edit/:id', authentication, authorization, ReviewController.editReview);


module.exports = router;