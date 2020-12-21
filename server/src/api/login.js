const { Router } = require('express');
const { urlGoogle } = require('../google-util');

const router = Router();

router.get('/', (req, res, next) => {
  try {
    console.log("in login");
    const url = urlGoogle();
    res.json({
      url,
    });
  } catch (error) {
    console.log('in error');
    next(error);
  }
});

module.exports = router;
