const router = require('express').Router();
const { employeeController } = require('../controllers');
const { isAuthorized, validate } = require('../middlewares');
const {
  validationSchemas: { employees },
} = require('../validations');

router.use(isAuthorized);

router.get('/', validate(employees.list), employeeController.list);
router.get('/:id', validate(employees.get), employeeController.get);
router.post('/', validate(employees.create), employeeController.create);
router.put('/:id', validate(employees.update), employeeController.update);
router.delete('/:id', validate(employees.destroy), employeeController.destroy);

module.exports.employees = router;
