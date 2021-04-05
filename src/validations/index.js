const { users } = require('./users.validation');
const { auth } = require('./auth.validation');
const { movies } = require('./movies.validation');

module.exports.validationSchemas = {
  users,
  auth,
  movies,
};
