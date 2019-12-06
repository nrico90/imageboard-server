const { Router } = require("express");
const { toJWT, toData } = require("./jwt");

const router = new Router();

// define endpoints here
router.post("/login", (request, response, next) => {
  const email = request.body.email;
  const password = request.body.password;

  if (!email || !password) {
    response.status(400).send({
      message: "Please supply a valid email and password"
    });
  } else {
    response.send({
      jwt: toJWT({ userId: 1 })
    });
  }
});

module.exports = router;
