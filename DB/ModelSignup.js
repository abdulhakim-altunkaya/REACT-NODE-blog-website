const mongoose  = require("mongoose");
const Schema = mongoose.Schema;
const { isEmail } = require("validator");
const bcrypt = require("bcrypt");

const signupSchema = new Schema ({
  loginName: {
    type: String,
    required: [true, "Shithole, you forgot password"]
  },
  loginSurname: {
    type: String,
    required: [true, "Asshole, you forgot password"]
  },
  loginEmail: {
    type: String,
    lowercase: true,
    validate: [isEmail, "Enter a valid email address please dude"],
    required: [true, "Dumbass, you forgot password"]
  },
  loginPassword: {
    type: String,
    minlength: [4, "Minimum character length is 4, my good sir"],
    required: [true, "Idiot, you forgot password"]
  }
});

signupSchema.pre("save", async function(next){
  const salt = await bcrypt.genSalt();
  this.loginPassword = await bcrypt.hash(this.loginPassword, salt);
  next();
});

const ModelSignup = mongoose.model("signupdoc", signupSchema);
module.exports = ModelSignup;
