const { App } = require("sht-tasks");
const { Types } = require("mongoose");
const ServiceDocumentationModel = require("./ServiceDocumentation.model");

App.ServerModule("ServiceDocumentation", function () {
  const ServiceDocumentation = this;

  ServiceDocumentation.saveMethodDataTable = (data, cb) => {
    cb(null, { message: "documentation" });
  };

  ServiceDocumentation.saveMethodDescription = (data, cb) => {
    cb(null, { message: "documentation" });
  };

  ServiceDocumentation.saveReturnDataTable = (data, cb) => {
    cb(null, { message: "documentation" });
  };

  ServiceDocumentation.saveReturnDataDescription = (data, cb) => {
    cb(null, { message: "documentation" });
  };
});
