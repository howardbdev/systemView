const { App } = require("sht-tasks");
const { Types } = require("mongoose");
const MethodDocumentationModel = require("./MethodDocumentation.model");

App.ServerModule("MethodDocumentation", function () {
  const MethodDocumentation = this;

  MethodDocumentation.saveMethodDataTable = (data, cb) => {
    cb(null, { message: "documentation" });
  };

  MethodDocumentation.saveMethodDescription = (data, cb) => {
    cb(null, { message: "documentation" });
  };

  MethodDocumentation.saveReturnDataTable = (data, cb) => {
    cb(null, { message: "documentation" });
  };

  MethodDocumentation.saveReturnDataDescription = (data, cb) => {
    cb(null, { message: "documentation" });
  };
});
