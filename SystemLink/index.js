require("../connectDB");
const MethodDocumentation = require("./MethodDocumentation");
const SystemLink = require("./SystemLink");
const { App } = require("sht-tasks");
const route = "systemlink/api";
const port = 3300;
const useREST = true;

App.startService({ route, port, useREST })
  .ServerModule("SystemLink", SystemLink)
  .ServerModule("MethodDocumentation", MethodDocumentation);
