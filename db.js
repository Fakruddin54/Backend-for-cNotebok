const mongoose = require("mmongoose");
const mongoURI =
  "mongodb+srv://fakruddeenansari:2UuwBlcP5UtWN7YS@cnotebook.3yqagux.mongodb.net/?retryWrites=true&w=majority";

const connectToMongo = () => {
  mongoose.connect(mongoURI, () => {
    console.log("connected to mongo to successfully");
  });
};

module.exports = connectToMongo;