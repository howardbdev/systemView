const { App } = require("systemlynx");
const { Types } = require("mongoose");
const ProjectDocumentationModel = require("./ProjectDocumentation.model");

App.ServerModule("ProjectDocumentation", function () {
  const ProjectDocumentation = this;

  ProjectDocumentation.saveMethodDataTable = (data, cb) => {
    cb(null, { message: "documentation" });
  };

  ProjectDocumentation.saveMethodDescription = (data, cb) => {
    cb(null, { message: "documentation" });
  };

  ProjectDocumentation.saveReturnDataTable = (data, cb) => {
    cb(null, { message: "documentation" });
  };

  ProjectDocumentation.saveReturnDataDescription = (data, cb) => {
    cb(null, { message: "documentation" });
  };
});
