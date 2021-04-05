const { users } = require('./users.routes');
const { auth } = require('./auth.routes');
const { movies } = require('./movies.routes');

module.exports = {
  users,
  auth,
  movies,
};
