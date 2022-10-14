const { Schema, model } = require("mongoose");
const moment = require("moment");
const required = true;
const unique = true;

module.exports = model(
  "ServiceDocumentation",
  Schema({
    _id: Schema.Types.ObjectId,
    project_code: { type: String, required },
    document_ref: { type: String, required },
    description: { type: String },
    service_dependencies: [
      {
        name: { type: String, required },
        url: { type: String, required },
        document_ref: { type: String },
      },
    ],
    events: [
      {
        name: { type: String, required },
        description: { type: String },
      },
    ],
    system_modules: [
      {
        name: { type: String, required },
        description: { type: String },
      },
    ],
    db_objects: [
      {
        name: { type: String, required },
        description: { type: String },
      },
    ],
  })
);
