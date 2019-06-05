const jwt = require('jsonwebtoken');
const config = require('config');

module.exports = function(req, res, next) {
  const token = req.header('x-auth-token');

  if(!token) {
    return res.status(401).json({ msg: 'Access denied, no token'});
  }

  try {
    const decoded = jwt.verify(token, config.get('jwtSecret'));

    console.log('decoded: ', decoded);

    req.user = decoded.user;
    next();
  } catch(err) {
    res.status(401).json({ msg: 'Token not valid'});
  }
};