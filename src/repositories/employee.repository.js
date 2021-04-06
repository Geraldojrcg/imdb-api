const { Employee } = require('../models');

module.exports = {
  list: (query) => Employee.findAndCountAll(query),
  getById: (id) => Employee.findByPk(id),
  get: (params) => Employee.findOne({ where: params }),
  create: (params) => Employee.create(params),
  update: (employee) => employee.save(),
  destroy: (id) => Employee.destroy({ where: { id } }),
};
