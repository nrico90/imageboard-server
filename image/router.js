const express = require("express");
const { Router } = require("express");
const Image = require("./model");
const router = new Router();

router.get("/image", (request, response, next) =>
  Image.findAll()
    .then(data => response.send(data))
    .catch(error => next(error))
);

module.exports = router;
