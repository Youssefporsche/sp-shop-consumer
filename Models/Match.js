const mongoose = require("mongoose");
const MatchSchema = new mongoose.Schema({
  matchNumber: {
    type: Number,
    required: true,
  },
  roundNumber: {
    type: Number,
    required: true,
  },
  dateUtc: {
    type: Date,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  availability:{
    category1:{
        count: {type: Number},
        price: {type: Number},
        pending: {type: Number}
    },
    category2:{
        count: {type: Number},
        price: {type: Number},
        pending: {type: Number}
    },
    category3:{
        count: {type: Number},
        price: {type: Number},
        pending: {type: Number}
    }
  },
  homeTeam: {
    type: String,
    required: true,
  },
  awayTeam: {
    type: String,
    required: true,
  },
  group: {
    type: String,
    required: true,
  },
  NumberOfReservedTickets: {
    type: Number,
  },
});

module.exports = mongoose.model("Match", MatchSchema);