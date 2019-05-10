const fs = require("fs");
const config = {
    key: "RBPAYIpjk9Xa7878gWLqeqnUk1UEsNE3"
}

const Tinify = require('../index')

let tinify = new Tinify().init(config.key)
fs.readFile("./src/94ea82c295086b71e57137bff932fc6a.png", function(err, sourceData) {
    if (err) throw err;
    tinify.fromBuffer(sourceData).toBuffer(function(err, resultData) {
        if (err) throw err;
        console.log(resultData)
    });
});