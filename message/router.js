const express = require("express");

const Message = require("./model");

const { Router } = express

const router = new Router();

router.get("/message", (req, res, next) => {
  Message.findAll()
    .then(message => {
      res.send(message);
    })

    .catch(next);
});

module.exports = router;
