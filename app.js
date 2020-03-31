const express = require("express");
const bodyParser = require("body-parser");
const routes = require("./routes");

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/", routes);


app.listen(process.env.PORT || 8080, () => {
  console.log("Server is running.. on Port 8080");
});
