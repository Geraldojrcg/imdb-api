const { StatusCodes } = require('http-status-codes');

const { employeeRepository } = require('../../repositories');
const { ApplicationError } = require('../../utils');
const { messages } = require('../../helpers');

module.exports.update = async (id, body) => {
  const employee = await employeeRepository.getById(id);
  if (!employee) {
    throw new ApplicationError(messages.notFound('employees'), StatusCodes.NOT_FOUND);
  }

  Object.assign(employee, body);

  return employeeRepository.update(employee);
};
