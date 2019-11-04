module.exports = function sendResponse(req, res) {
  res.status(res.statusCode || 200).json({
    result: req.result
  });
};
