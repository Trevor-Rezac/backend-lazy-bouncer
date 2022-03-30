const jwt = require('jsonwebtoken');

module.exports = async (req, res, next) => {
  // TODO: Check req.user to ensure the user's email is 'admin'
  try {
    if (req.user.email === 'admin') {
      next();
    } else {
      throw new Error();
    }
  } catch (error) {
    error.message = 'You do not have access to view this page';
    error.status = 403;
    next(error);
  }
};
