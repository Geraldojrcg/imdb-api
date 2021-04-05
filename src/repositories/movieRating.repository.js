const { MovieRating } = require('../models');

module.exports = {
  create: (params) => MovieRating.create(params),
};
