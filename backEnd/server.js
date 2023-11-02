const bodyParser = require("body-parser");
const port = 3003;
const express = require("express");
const cors = require("cors");
const app = express();

//sequelize connection
// const Sequelize = require('sequelize');

const corsOptions = {
  origin: ["http://localhost:3000",],
};

//middleWare
app.use(cors(corsOptions));
app.use(express.json());
app.use(bodyParser.json());

app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

const paymentSuccess = require("./src/routes/paymentSuccess.route");
const progress = require("./src/routes/progress.route");

//Middleware or to set router
app.use("/", [paymentSuccess,progress]);

app.listen(port, async () => {
  console.log(`App running on port http://localhost:${port}.`);
  // await Sequelize.authenticate();
  console.log("Database connected!");
});