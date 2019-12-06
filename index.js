const express = require("express");

const app = express();
const port = process.env.PORT || 4000;
const db = require("./db");
const Image = require("../server/image/model");
app.listen(port, () => console.log(`listening on ${port}`));
