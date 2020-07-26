var User = require("./models/User");
var path = require("path");

module.exports = function (app) {
  // Application ------------------------------------------
  const dir = path.basename(path.dirname(__dirname));
  app.get("/", function (req, res) {
    res.sendFile("index.html", { root: dir + "/client/" });
  });

  // Wildcard all other GET requests to the angular app
  app.get("*", function (req, res) {
    res.sendFile("index.html", { root: dir + "/client/" });
  });
};
