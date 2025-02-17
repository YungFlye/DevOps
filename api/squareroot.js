const router = require('express').Router();

/* GET squareroot of a number */
router.get('/', (req, res, next) => {
  const input = req.query.input;
  const result = Math.sqrt(input);

  const output = Math.round(result);

  res.send({ result: output });
});

module.exports = router;
