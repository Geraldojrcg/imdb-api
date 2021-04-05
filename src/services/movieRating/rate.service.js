const { StatusCodes } = require('http-status-codes');
const { ApplicationError } = require('../../utils');
const { messages } = require('../../helpers');
const { movieRepository } = require('../../repositories');
const { usersRepository } = require('../../repositories');
const { movieRatingRepository } = require('../../repositories');

module.exports.rate = async (params) => {
  const { movieId, userId } = params;
  const movie = await movieRepository.getById(movieId);
  if (!movie) {
    throw new ApplicationError(messages.notFound('movie'), StatusCodes.NOT_FOUND);
  }

  const user = await usersRepository.getById(userId);
  if (!user) {
    throw new ApplicationError(messages.notFound('user'), StatusCodes.NOT_FOUND);
  }

  return movieRatingRepository.create(rating);
};
