const { Mongoose, Schema } = require("mongoose");

const UserSchema = new Schema({
  username: {
    type: String,
  },
  email: {
    type: String,
    required: true,
  },
  authSource: {
    type: String,
    required: true,
  },
  access_token: {
    type: String,
  },
});
