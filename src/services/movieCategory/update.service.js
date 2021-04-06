const { StatusCodes } = require('http-status-codes');

const { movieCategoryRepository } = require('../../repositories');
const { ApplicationError } = require('../../utils');
const { messages } = require('../../helpers');

module.exports.update = async (id, body) => {
  const cateogry = await movieCategoryRepository.getById(id);
  if (!cateogry) {
    throw new ApplicationError(messages.notFound('movie category'), StatusCodes.NOT_FOUND);
  }

  Object.assign(cateogry, body);

  return movieCategoryRepository.update(cateogry);
};
