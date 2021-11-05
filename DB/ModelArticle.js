const mongoose = require ("mongoose");
const Schema = mongoose.Schema;

const articleSchema = new Schema({
  articleDate: {
    type: String
  },
  articleTitle: {
    type: String
  },
  articleAuthor: {
    type: String
  },
  articleText: {
    type: String
  },
  articleImage: {
    type: String
  }
});
articleSchema.index({articleTitle: "text"});
const ModelArticle = mongoose.model("articledoc", articleSchema);
module.exports = ModelArticle;
