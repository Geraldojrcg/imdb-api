const { StatusCodes } = require('http-status-codes');

const { employeeRepository } = require('../../repositories');
const { ApplicationError } = require('../../utils');
const { messages } = require('../../helpers');

module.exports.create = async (params) => {
  const employee = await employeeRepository.get({ ssn: params.ssn });
  if (employee) {
    throw new ApplicationError(messages.alreadyExists('ssn'), StatusCodes.CONFLICT);
  }

  return employeeRepository.create(params);
};
