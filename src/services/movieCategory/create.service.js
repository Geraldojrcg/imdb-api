const { StatusCodes } = require('http-status-codes');

const { movieCategoryRepository } = require('../../repositories');
const { ApplicationError } = require('../../utils');
const { messages } = require('../../helpers');

module.exports.create = async (params) => {
  const categoryExists = await movieCategoryRepository.get({ name: params.name });
  if (categoryExists) {
    throw new ApplicationError(messages.alreadyExists('name'), StatusCodes.CONFLICT);
  }

  return movieCategoryRepository.create(params);
};
