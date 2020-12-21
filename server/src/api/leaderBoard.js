const { Router } = require('express');
const Team = require('../models/Team');

const router = Router();

router.get('/', async (req, res, next) => {
  try {
    const entries = await Team.find();
    console.table(entries);
    res.json(entries);
  } catch (error) {
    next(error);
  }
});

router.post('/', async (req, res, next) => {
  try {
    const teamEntry = new Team(req.body);
    const createdEntry = await teamEntry.save();
    res.json(createdEntry);
  } catch (error) {
    if (error.name === 'ValidationError') {
      res.status(400);
    }
    next(error);
  }
});

module.exports = router;
