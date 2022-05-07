const express = require("express");
const {} = require("express-graphql");
const cors = require("cors");

const app = express();
app.use(cors());

app.listen(5000, () => console.log("server started on port 5000"));
