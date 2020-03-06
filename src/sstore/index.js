// We use CommonJS here so we can import dynamically at build-time
if (process.env.NODE_ENV === "production") {
  module.exports = require("./store.prod");
} else {
  module.exports = require("./store.dev");
}
