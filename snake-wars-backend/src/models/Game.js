const mongoose = require('mongoose');

const GameSchema = new mongoose.Schema({
  playerIds: {
    type: [mongoose.Schema.Types.ObjectId],
    ref: 'Player',
  },
  state: {
    type: Object,
    default: {},
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Game', GameSchema);
