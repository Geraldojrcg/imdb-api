const { StatusCodes } = require('http-status-codes');
const { ApplicationError } = require('../../utils');
const { messages } = require('../../helpers');
const { movieRepository } = require('../../repositories');
const { movieRatingRepository } = require('../../repositories');
const Sequelize = require('../../models');

module.exports.getMeanRate = async (movieId) => {
  const movie = await movieRepository.getById(movieId);
  if (!movie) {
    throw new ApplicationError(messages.notFound('movie'), StatusCodes.NOT_FOUND);
  }

  return movieRatingRepository.find({
    where: {
      movieId,
    },
    group: ['movie.id'],
    attributes: [[Sequelize.fn('mean', Sequelize.col('rating')), 'meanRating']],
  });
};
