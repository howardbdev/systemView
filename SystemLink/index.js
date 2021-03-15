require("dotenv").config();
const mongoose = require("mongoose");

mongoose
  .connect(
    `mongodb+srv://Odion:${process.env.MONGODB_PASSWORD}@cluster0-8s7lw.mongodb.net/systemlink?retryWrites=true&w=majority`,
    { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true }
  )
  .then((data) => console.log("mongodb connected:-->"))
  .catch((err) => console.log("mongodb connection failed:-->", err));

const { App } = require("sht-tasks");
const route = "systemlink/api";
const port = 3300;
const useREST = true;

require("./SystemLink/SystemLink.api");
//require("./EventFeed/EventFeed.api");

App.startService({ route, port, useREST });
