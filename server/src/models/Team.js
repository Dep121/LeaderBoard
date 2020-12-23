const mongoose = require('mongoose');

const { Schema } = mongoose;

const TeamSchema = new Schema({
  team_name: {
    type: String,
    required: true,
  },
  wins: {
    type: Number,
    default: 0,
  },
  losses: {
    type: Number,
    default: 0,
  },
  ties: {
    type: Number,
    default: 0,
  },
  score: {
    type: Number,
    default: 0,
  },
}, {
  timestamps: true,
});

const Team = mongoose.model('Team', TeamSchema);

module.exports = Team;
