const { App } = require("sht-tasks");
const { Types } = require("mongoose");
const ServiceDataModel = require("./ServiceData.model");

App.ServerModule("Documentation", function () {
  const Documentation = this;

  Documentation.saveMethodDataTable = (data, cb) => {
    cb(null, { message: "documentation" });
  };

  Documentation.saveMethodDescription = (data, cb) => {
    cb(null, { message: "documentation" });
  };

  Documentation.saveReturnDataTable = (data, cb) => {
    cb(null, { message: "documentation" });
  };

  Documentation.saveReturnDataDescription = (data, cb) => {
    cb(null, { message: "documentation" });
  };
});
