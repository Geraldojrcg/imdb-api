const router = require('express').Router();
const { movieCategoryController } = require('../controllers');
const { isAuthorized, validate } = require('../middlewares');
const {
  validationSchemas: { movieCategories },
} = require('../validations');

router.use(isAuthorized);

router.get('/', validate(movieCategories.list), movieCategoryController.list);
router.get('/:id', validate(movieCategories.get), movieCategoryController.get);
router.post('/', validate(movieCategories.create), movieCategoryController.create);
router.put('/:id', validate(movieCategories.update), movieCategoryController.update);
router.delete('/:id', validate(movieCategories.destroy), movieCategoryController.destroy);

module.exports.movieCategories = router;
