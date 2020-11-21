const { App } = require("sht-tasks");
const { Types } = require("mongoose");
const ServiceDataModel = require("./ServiceData.model");

App.ServerModule("Documentation", function () {
  const Documentation = this;

  Documentation.add = (data, cb) => {
    cb(null, { message: "documentation" });
  };

  Documentation.get = (data, cb) => {
    cb(null, { message: "documentation" });
  };

  Documentation.archive = (data, cb) => {
    cb(null, { message: "documentation" });
  };

  Documentation.save = (data, cb) => {
    cb(null, { message: "documentation" });
  };
});
