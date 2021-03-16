const { App } = require("sht-tasks");
const { Types } = require("mongoose");
const ModuleDocumentationModel = require("./ModuleDocumentation.model");

App.ServerModule("ModuleDocumentation", function () {
  const ModuleDocumentation = this;

  ModuleDocumentation.saveMethodDataTable = (data, cb) => {
    cb(null, { message: "documentation" });
  };

  ModuleDocumentation.saveMethodDescription = (data, cb) => {
    cb(null, { message: "documentation" });
  };

  ModuleDocumentation.saveReturnDataTable = (data, cb) => {
    cb(null, { message: "documentation" });
  };

  ModuleDocumentation.saveReturnDataDescription = (data, cb) => {
    cb(null, { message: "documentation" });
  };
});
