// Get - /v1/ - init game
async function init(req, res, next) {
  try {
    req.result = {};
    next();
  } catch (err) {
    next(err);
  }
}

module.exports = {
  init
};
