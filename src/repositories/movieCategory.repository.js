const { MovieCategory } = require('../models');

module.exports = {
  list: (query) => MovieCategory.findAndCountAll(query),
  getById: (id) => MovieCategory.findByPk(id),
  get: (params) => MovieCategory.findOne({ where: params }),
  create: (params) => MovieCategory.create(params),
  update: (movieCategory) => movieCategory.save(),
  destroy: (id) => MovieCategory.destroy({ where: { id } }),
};
