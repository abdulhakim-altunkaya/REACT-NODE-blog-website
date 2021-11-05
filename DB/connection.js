const mongoose = require ("mongoose");
const connectionParams = {
  useNewUrlParser: true,
  useUnifiedTopology: true
};
const url = "mongodb+srv://abdulhakim:seattle4@cluster0.ty6n4.mongodb.net/test"

const connectDB = async () => {
  try {
    await mongoose.connect(url, connectionParams);
    console.log("дб сязано господин")
  } catch (e) {
    console.log("Couldnt connect to database. Maybe you dont have internet connection. Or maybe you typed db url wrong.");
  }
};

module.exports = connectDB;
