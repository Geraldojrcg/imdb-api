const { StatusCodes } = require('http-status-codes');
const { catchAsync } = require('../utils');

const requiredRoles = ['admin', 'client'];

module.exports = (roles) =>
  catchAsync(async (req, res, next) => {
    const { role } = req.session;

    if (!roles) {
      roles = requiredRoles;
    }

    if (!roles.includes(role)) {
      throw new ApplicationError('Forbidden', StatusCodes.FORBIDDEN);
    }

    next();
  });
