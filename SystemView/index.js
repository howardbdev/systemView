require("../connectDB");
const MethodDocumentation = require("./MethodDocumentation");
const SystemView = require("./SystemView");
const { App } = require("systemlynx");
const route = "systemview/api";
const port = 3300;
const useREST = true;

App.startService({ route, port, useREST })
  .ServerModule("SystemView", SystemView)
  .ServerModule("MethodDocumentation", MethodDocumentation);
