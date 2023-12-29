const mongoose = require("mongoose");

const blacklistTokenSchema = new mongoose.Schema({
  token: {
    type: String,
    required: true,
  },
});

const BlacklistTokenModel = mongoose.model(
  "Thebrandwickblacklistedtoken",
  blacklistTokenSchema
);

module.exports = { BlacklistTokenModel };
