const mongoose = require("mongoose");

const Schema = mongoose.Schema({
  MeetingID: String,
  OrganizerName: String,
  ParticipantName: String,
  Date: String,
  Time: String,
});

module.exports = mongoose.model("meetingsData", Schema);
