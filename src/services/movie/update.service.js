const { StatusCodes } = require('http-status-codes');

const { movieRepository } = require('../../repositories');
const { ApplicationError } = require('../../utils');
const { messages } = require('../../helpers');

module.exports.update = async (id, body) => {
  const movie = await movieRepository.getById(id);
  if (!movie) {
    throw new ApplicationError(messages.notFound('movies'), StatusCodes.NOT_FOUND);
  }

  Object.assign(movie, body);

  return movieRepository.update(movie);
};
