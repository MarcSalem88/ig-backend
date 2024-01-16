const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    min: 3,
    max: 15,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    min: 4,
    max: 50,
    unique: true,
  },
  password: {
    type: String,
    require: true,
    min: 6,
  },
  description: {
    type: String,
    max: 50,
    default: "",
  },
  profilePicture: {
    type: String,
    default: "https://static.vecteezy.com/system/resources/previews/004/511/281/non_2x/default-avatar-photo-placeholder-profile-picture-vector.jpg",
  },
  followers: {
    type: Array,
    default: [],
  },
  followings: {
    type: Array,
    default: ['elie'],
  },
  role: {
    type: String,
    enum: ["admin", "user"],
    required: true,
    default: "user",
  },
  gender: {
    type: String,
    enum: ["male", "female"],
  },
  jwtToken: {
    type: String,
  },
});

module.exports = mongoose.model("User", UserSchema);
