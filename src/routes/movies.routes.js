const router = require('express').Router();
const { moviesController } = require('../controllers');
const { isAuthorized, validate, hasRole } = require('../middlewares');
const {
  validationSchemas: { movies },
} = require('../validations');

router.use(isAuthorized);

router.get('/', validate(movies.list), moviesController.list);
router.get('/:id', validate(movies.get), moviesController.get);
router.post('/', hasRole(['admin']), validate(movies.create), moviesController.create);
router.put('/:id', hasRole(['admin']), validate(movies.update), moviesController.update);
router.delete('/:id', hasRole(['admin']), validate(movies.destroy), moviesController.destroy);
router.post('/:id/rate', validate(movies.rate), moviesController.rate);

module.exports.movies = router;
