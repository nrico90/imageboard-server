const express = require("express");

const app = express();
const port = process.env.PORT || 4000;
const db = require("./db");
const imageRouter = require("./image/router");
const Image = require("../server/image/model");

app.use(imageRouter);

app.listen(port, () => console.log(`listening on ${port}`));
