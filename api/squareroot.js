var router = require('express').Router();

/* GET squareroot of a number */
router.get('/', (req, res, next) => {
    let input = req.query.input;
    let result = Math.sqrt(input);

    let output = Math.round(result);

    res.send({ "result": output});
});

module.exports = router;
