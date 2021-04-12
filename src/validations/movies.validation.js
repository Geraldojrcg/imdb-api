const yup = require('yup');

const list = {
  query: yup.object().shape({
    name: yup.string(),
    director: yup.string(),
    category: yup.string(),
    actors: yup.string(),
    page: yup.number().integer().default(1),
    perPage: yup.number().integer().default(10),
    sortBy: yup
      .string()
      .default('createdAt:desc')
      .matches(/[:](asc|desc)/i, "sorting order must be one of the following: 'asc' or 'desc'"),
  }),
};

const get = {
  params: yup.object().shape({
    id: yup.number().integer(),
  }),
};

const create = {
  body: yup.object().shape({
    name: yup.string().required(),
    description: yup.string().required(),
    language: yup.string().required(),
    duration: yup.number().positive().required(),
    releaseDate: yup.date().required(),
    categoryId: yup.number().positive().required(),
    directorId: yup.number().positive().required(),
    actors: yup.array().of(yup.string()),
  }),
};

const update = {
  params: yup.object().shape({
    id: yup.number().integer(),
  }),
  body: yup.object().shape({
    name: yup.string(),
    description: yup.string(),
    language: yup.string(),
    duration: yup.number().positive(),
    releaseDate: yup.date(),
    categoryId: yup.number().positive(),
    directorId: yup.number().positive(),
  }),
};

const destroy = {
  params: yup.object().shape({
    id: yup.number().integer(),
  }),
};

const rate = {
  params: yup.object().shape({
    id: yup.number().integer(),
  }),
  body: yup.object().shape({
    rating: yup.number().integer().min(1).max(4).required(),
  }),
};

module.exports.movies = {
  list,
  get,
  create,
  update,
  destroy,
  rate,
};
