const mongoose = require("mongoose");
const Schema = mongoose.Schema;


//create schema and module
const localeSchema = new Schema({
  name: { type: String, required: true },
  ratings: { Number, required: true },
  address: { type: String, required: true },
  hours: { Number, required: true },
  phone: { Number, required: true },
});

const locale = mongoose.model("locale", localeSchema);

module.exports = locale;
