const { MovieRating } = require('../models');

module.exports = {
  create: (params) => MovieRating.create(params),
  find: (params) => MovieRating.find(params),
};
