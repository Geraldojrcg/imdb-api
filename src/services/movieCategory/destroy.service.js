const { StatusCodes } = require('http-status-codes');

const { movieCategoryRepository } = require('../../repositories');
const { ApplicationError } = require('../../utils');
const { messages } = require('../../helpers');

module.exports.destroy = async (id) => {
  const category = await movieCategoryRepository.getById(id);
  if (!category) {
    throw new ApplicationError(messages.notFound('movie category'), StatusCodes.NOT_FOUND);
  }

  return movieCategoryRepository.destroy(id);
};
