const mongoose = require('mongoose');

const { Schema } = mongoose;

const TeamSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  wins: {
    type: Number,
  },
  losses: {
    type: Number,
  },
  ties: {
    type: Number,
  },
  score: {
    type: Number,
  },
}, {
  timestamps: true,
});

const Team = mongoose.model('Team', TeamSchema);

module.exports = Team;
