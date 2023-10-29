const bodyParser = require("body-parser");
const port = 3003;
const express = require("express");
const cors = require("cors");
const app = express();

//sequelize connection
// const Sequelize = require('sequelize');

const corsOptions = {
  origin: ["http://localhost:3001","http://localhost:3000","http://game.admin.dev.vittae.money","http://game.dev.vittae.money"],
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


//Middleware or to set router
app.use("/", [paymentSuccess]);

app.listen(port, async () => {
  console.log(`App running on port http://localhost:${port}.`);
  // await Sequelize.authenticate();
  console.log("Database connected!");
});