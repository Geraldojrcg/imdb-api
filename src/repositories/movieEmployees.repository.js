const { MovieEmployees } = require('../models');

module.exports = {
  bulkCreate: (params) => MovieEmployees.bulkCreate(params),
};
