const serverless = require("serverless-http");
const dotenv = require("dotenv");
dotenv.config();
const express = require("express");
const connectDB = require("./db/db");
const app = express();
const queryRouter = require("./routes/contact.route");


app.use(express.json());
app.use(express.urlencoded({ extended: true }));


connectDB();

app.use("/api/v1/", queryRouter);

app.listen(process.env.PORT, () => {
  console.log("Server is running on port 3000");
}); 

module.exports.handler = serverless(app);
