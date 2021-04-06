const { users } = require('./users.routes');
const { auth } = require('./auth.routes');
const { movies } = require('./movies.routes');
const { movieCategories } = require('./movieCategories.routes');
const { employees } = require('./employees.routes');

module.exports = {
  users,
  auth,
  movies,
  movieCategories,
  employees,
};
