const { Schema, model } = require("mongoose");
const moment = require("moment");
const { data_types, namespace_validator } = require("../_shared/shared_constants");
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
        data: {
          variable_namespace: { type: String, required, validate: namespace_validator },
          data_type: { type: String, required, enum: data_types },
          object_ref: { type: String },
          properties: [
            {
              name: { type: String, required, validate: namespace_validator },
              data_type: { type: String, required, enum: data_types },
              object_ref: { type: String },
              description: { type: String },
            },
          ],
        },
      },
    ],
    db_objects: [
      {
        variable_namespace: { type: String, required, validate: namespace_validator },
        data_type: { type: String, required, enum: data_types },
        properties: [
          {
            name: { type: String, required, validate: namespace_validator },
            data_type: { type: String, required, enum: data_types },
            object_ref: { type: String },
            description: { type: String },
            default_value: { type: String },
            required: { type: Boolean, default: false },
          },
        ],
      },
    ],
  })
);
