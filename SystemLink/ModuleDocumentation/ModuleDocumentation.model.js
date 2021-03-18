const { Schema, model } = require("mongoose");
const moment = require("moment");
const required = true;
const unique = true;

module.exports = model(
  "ModuleDocumentation",
  Schema({
    _id: Schema.Types.ObjectId,
    project_code: { type: String, required, validate: namespace_validator },
    service_id: { type: String, required, validate: namespace_validator },
    module_name: { type: String, required, validate: namespace_validator },

    description: { type: String },
    service_dependenies: [
      {
        name: { type: String, required },
        url: { type: String, reqired },
        document_ref: { type: String },
      },
    ],
    evevts: [
      {
        name: { type: String, required },
        description: { type: String },
      },
    ],
    db_objects: [
      {
        name: { type: String, required },
        description: { type: String },
        properties: [
          {
            name: { type: String },
            type: { type: String },
            description: { type: String },
            default: { type: String },
            required: { type: String },
          },
        ],
      },
    ],
  })
);
