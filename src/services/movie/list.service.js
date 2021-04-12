const { movieRepository } = require('../../repositories');
const { queryHelper } = require('../../helpers');
const { MovieRating } = require('../../models');
const { User, MovieCategory, Employee } = require('../../models');
const { Op } = require('sequelize');

module.exports.list = async (options) => {
  let query = queryHelper(options);

  if (options.director) {
    query.where['$director.name$'] = { [Op.iLike]: `%${options.director}%` };
  }

  if (options.name) {
    query.where.name = { [Op.iLike]: `%${options.name}%` };
  }

  if (options.category) {
    query.where['$category.name$'] = { [Op.iLike]: `%${options.category}%` };
  }

  if (options.actors) {
    query.where['$actors.name$'] = { [Op.in]: options.actors.split(',') };
  }

  query = {
    ...query,
    include: [
      {
        model: MovieRating,
        include: [
          {
            model: User,
            as: 'user',
            attributes: ['id', 'name', 'email'],
          },
        ],
        as: 'ratings',
        attributes: ['rating'],
        duplicating: false,
      },
      {
        model: Employee,
        attributes: ['id', 'name', 'lastName', 'ssn'],
        as: 'director',
      },
      {
        model: MovieCategory,
        attributes: ['id', 'name'],
        as: 'category',
      },
      {
        model: Employee,
        attributes: ['id', 'name', 'lastName', 'ssn'],
        through: {
          attributes: [],
        },
        as: 'actors',
      },
    ],
  };

  const { count, rows } = await movieRepository.list(query);
  const totalPages = Math.ceil(count / options.perPage);

  rows.forEach((movie) => {
    movie.dataValues.meanRating =
      movie.ratings.reduce((total, r) => (total += r.rating), 0) / movie.ratings.length || 0;
  });

  return {
    metadata: {
      total: count,
      totalPages,
      ...(options.page > 1 && { previousPage: options.page - 1 }),
      ...(options.page < count && options.page < totalPages && { nextPage: options.page + 1 }),
    },
    data: rows,
  };
};
