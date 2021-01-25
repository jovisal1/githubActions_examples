const core = require("@actions/core");
const fs = require("fs");
var filePath = "../../../src/App.js";

const gifs_alternative = core.getInput("gifs_alternative");
const randomPosition = Math.floor(Math.random() * gifs_alternative.length) + 0;

fs.readFile(filePath, "utf8", function (err, data) {
  if (err) {
    return console.log(err);
  }

  var gifUrl = gifs_alternative[randomPosition];
  var result = data.replace(
    /src=.* className/,
    'src="' + gifUrl + '" className'
  );

  fs.writeFile(filePath, result, "utf8", function (err) {
    if (err) return console.log(err);
  });
});

core.setOutput("response", "Loader modificado");
