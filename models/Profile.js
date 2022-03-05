const mongoose = require('mongoose');

const ProfileSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'users'
  },
  company: {
    type: String
  },
  location: {
    type: String
  },
  interests: {
    type: [String],
    required: true
  },
  about: {
    type: String
  },
  youtube: {
    type: String
  },
  twitter: {
    type: String
  },
  facebook: {
    type: String
  },
  linkedin: {
    type: String
  },
  instagram: {
    type: String
  },
birthDate: {
  type: Date,
}
});

module.exports = mongoose.model('profile', ProfileSchema);