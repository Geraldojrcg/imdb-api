const { StatusCodes } = require('http-status-codes');
const { ApplicationError } = require('../../utils');
const { messages } = require('../../helpers');
const { movieRepository } = require('../../repositories');

module.exports.create = async (params) => {
  const movieExists = await movieRepository.get({ name: params.name });
  if (movieExists) {
    throw new ApplicationError(messages.alreadyExists('name'), StatusCodes.CONFLICT);
  }

  return movieRepository.create(params);
};
