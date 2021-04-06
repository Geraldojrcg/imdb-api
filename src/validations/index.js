const { users } = require('./users.validation');
const { auth } = require('./auth.validation');
const { movies } = require('./movies.validation');
const { movieCategories } = require('./movieCategories.validation');
const { employees } = require('./employees.validation');

module.exports.validationSchemas = {
  users,
  auth,
  movies,
  movieCategories,
  employees,
};
