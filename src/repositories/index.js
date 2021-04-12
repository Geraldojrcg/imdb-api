const usersRepository = require('./user.repository');
const accessTokenRepository = require('./accessToken.repository');
const movieRepository = require('./movie.repository');
const movieRatingRepository = require('./movieRating.repository');
const movieCategoryRepository = require('./movieCategory.repository');
const employeeRepository = require('./employee.repository');
const movieEmployeeRepository = require('./movieEmployees.repository');

module.exports = {
  usersRepository,
  accessTokenRepository,
  movieRepository,
  movieRatingRepository,
  movieCategoryRepository,
  employeeRepository,
  movieEmployeeRepository,
};
