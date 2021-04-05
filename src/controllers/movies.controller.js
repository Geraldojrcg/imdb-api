const { StatusCodes } = require('http-status-codes');
const { catchAsync } = require('../utils');
const { movieService } = require('../services');
const { movieRatingService } = require('../services');

module.exports = {
  list: catchAsync(async (req, res) => {
    const { page, perPage, sortBy } = req.query;
    const response = await movieService.list({ page, perPage, sortBy });

    if (!response || response.data.length === 0) {
      return res.status(StatusCodes.NO_CONTENT).end();
    }

    return res.status(StatusCodes.OK).json(response);
  }),

  get: catchAsync(async (req, res) => {
    const { id } = req.params;
    const response = await movieService.get(id);
    return res.status(StatusCodes.OK).json(response);
  }),

  create: catchAsync(async (req, res) => {
    const { body } = req;
    const response = await movieService.create(body);

    return res.status(StatusCodes.CREATED).json(response);
  }),

  update: catchAsync(async (req, res) => {
    const {
      params: { id },
      body,
    } = req;
    const response = await movieService.update(id, body);
    return res.status(StatusCodes.OK).json(response);
  }),

  destroy: catchAsync(async (req, res) => {
    const { id } = req.params;
    await movieService.destroy(id);
    return res.status(StatusCodes.NO_CONTENT).end();
  }),

  rate: catchAsync(async (req, res) => {
    const { id: movieId } = req.params;
    const { rating } = req.body;
    const { id: userId } = req.session;
    await movieRatingService.rate({
      movieId,
      userId,
      rating,
    });
    return res.status(StatusCodes.NO_CONTENT).end();
  }),
};
