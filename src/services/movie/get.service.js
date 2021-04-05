const { StatusCodes } = require('http-status-codes');

const { movieRepository } = require('../../repositories');
const { ApplicationError } = require('../../utils');
const { messages } = require('../../helpers');

module.exports.get = async (id) => {
  const movie = await movieRepository.getById(id);
  if (!movie) {
    throw new ApplicationError(messages.notFound('movies'), StatusCodes.NOT_FOUND);
  }

  return movie;
};
