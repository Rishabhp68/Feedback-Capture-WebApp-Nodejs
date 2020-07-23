//key.js check whether in dev or production
if (process.env.Node_ENV === "production") {
  module.exports = require("./prod");
} else {
  module.exports = require("./dev");
}
