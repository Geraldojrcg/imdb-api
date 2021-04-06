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
    lastName: yup.string().required(),
    ssn: yup
      .string()
      .min(9, 'Social Security Number must be up to 9 digits without dashes')
      .required('Social Security Number is Required'),
    function: yup.mixed().oneOf(['director', 'actor']).required(),
  }),
};

const update = {
  params: yup.object().shape({
    id: yup.number().integer(),
  }),
  body: yup.object().shape({
    name: yup.string(),
    lastName: yup.string(),
    ssn: yup.string().min(9, 'Social Security Number must be up to 9 digits without dashes'),
    function: yup.mixed().oneOf(['director', 'actor']),
  }),
};

const destroy = {
  params: yup.object().shape({
    id: yup.number().integer(),
  }),
};

module.exports.employees = {
  list,
  get,
  create,
  update,
  destroy,
};
