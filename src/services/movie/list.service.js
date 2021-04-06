const { movieRepository } = require('../../repositories');
const { queryHelper } = require('../../helpers');
const { MovieRating } = require('../../models');
const { User } = require('../../models');

module.exports.list = async (options) => {
  let query = queryHelper(options);

  query = {
    ...query,
    include: [
      {
        model: MovieRating,
        include: [
          {
            model: User,
            as: 'user',
            attributes: ['name', 'email'],
          },
        ],
        as: 'ratings',
        attributes: ['rating'],
        duplicating: false,
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
