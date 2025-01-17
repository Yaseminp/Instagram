const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const ProfileSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'users'
  },
  handle: {
    type: String,
    required: true,
    max: 40
  },
  website: {
    type: String
  },
  bio: {
    type: String
  },
  email: {
    type: String
  },
   location: {
      type: String
  },
  youtube: {
    type: String
  },
  facebook: {
    type:String
  },
  
  
  date: {
    type: Date,
    default: Date.now
  }
});


module.exports = Profile = mongoose.model('profile', ProfileSchema);