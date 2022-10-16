require("../connectDB");
const MethodDocumentation = require("./MethodDocumentation");
const SystemView = require("./SystemView");
const { App } = require("systemlynx");
const route = "systemview/api";
const port = 3300;
const useREST = true;

App.startService({ route, port, useREST })
  .module("SystemView", SystemView)
  .module("MethodDocumentation", MethodDocumentation);
