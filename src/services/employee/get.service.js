const { StatusCodes } = require('http-status-codes');

const { employeeRepository } = require('../../repositories');
const { ApplicationError } = require('../../utils');
const { messages } = require('../../helpers');

module.exports.get = async (id) => {
  const employee = await employeeRepository.getById(id);
  if (!employee) {
    throw new ApplicationError(messages.notFound('employees'), StatusCodes.NOT_FOUND);
  }

  return employee;
};
