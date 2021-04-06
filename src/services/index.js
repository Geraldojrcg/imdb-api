const usersService = require('./users');
const authService = require('./auth');
const accessTokenService = require('./accessToken');
const movieService = require('./movie');
const movieRatingService = require('./movieRating');
const movieCategoryService = require('./movieCategory');
const employeeService = require('./employee');

module.exports = {
  usersService,
  authService,
  accessTokenService,
  movieService,
  movieRatingService,
  movieCategoryService,
  employeeService,
};
