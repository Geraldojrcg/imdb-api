const yup = require('yup');

const list = {
  query: yup.object().shape({
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
    duration: yup.number().integer().required(),
    releaseDate: yup.date().required(),
  }),
};

const update = {
  params: yup.object().shape({
    id: yup.number().integer(),
  }),
  body: yup.object().shape({
    name: yup.string().required(),
    description: yup.string().required(),
    language: yup.string().required(),
    duration: yup.number().integer().required(),
    releaseDate: yup.date().required(),
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
