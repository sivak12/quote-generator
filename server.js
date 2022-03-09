const express = require("express");
const mongoose = require("mongoose");
const Quote = require("./models/quote");
const app = express();

const db_conn =
  "mongodb+srv://siva:reality123@testcluster1.choet.mongodb.net/quote?retryWrites=true&w=majority";

mongoose.connect(db_conn, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.set("view engine", "ejs");

let quotes_list = [];

app.get("/", async (req, res) => {
  const numQuotes = await Quote.estimatedDocumentCount();
  const rand = Math.floor(Math.random() * numQuotes);
  const quote = await Quote.findOne().skip(rand);

  res.render("index", { quote: quote });
});

app.listen(process.env.PORT || 5000);
