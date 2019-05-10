"use strict";
const fs = require("fs");
const tinify = require("tinify");
const path = require("path");
// const archiver = require("archiver");
// const async = require("async");
// const glob = require("glob");

class Tinify {
  init(key, proxy) {
    tinify.key = key;
    tinify.proxy = proxy;
    return tinify
  }
  compressionCount() {
    return tinify.compressionCount
  }
  validate() {
    return tinify.validate(err => {throw err})
  }
  compress(url) {
    return fs.readFile(path.resolve(url), function(err, sourceData) {
      return tinify.fromBuffer(sourceData).toBuffer(function(err, resultData) {
        if (err instanceof tinify.AccountError) {
          console.warn("The error message is: " + err.message + "Pls Verify your API key and account limit.");
        } else if (err instanceof tinify.ClientError) {
          console.warn('Check your source image and request options.')
        } else if (err instanceof tinify.ServerError) {
          console.warn('Temporary issue with the Tinify API.')
        } else if (err instanceof tinify.ConnectionError) {
          console.warn('A network connection error occurred.')
        } else {
          console.warn('Something else went wrong, unrelated to the Tinify API.')
        }
        return resultData
      })
    })
  }
}

module.exports = Tinify