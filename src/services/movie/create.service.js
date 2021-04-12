const { StatusCodes } = require('http-status-codes');
const { ApplicationError } = require('../../utils');
const { messages } = require('../../helpers');
const { movieRepository, movieEmployeeRepository } = require('../../repositories');

module.exports.create = async (params) => {
  const movieExists = await movieRepository.get({ name: params.name });
  if (movieExists) {
    throw new ApplicationError(messages.alreadyExists('name'), StatusCodes.CONFLICT);
  }

  const movie = await movieRepository.create(params);

  await movieEmployeeRepository.bulkCreate(params.actors.map((a) => ({ employeeId: a, movieId: movie.id })));

  return movie;
};
