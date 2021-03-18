const { Schema, model } = require("mongoose");
const moment = require("moment");
const { data_types, namespace_validator } = require("../_shared/shared_constants");
const required = true;
const unique = true;

module.exports = model(
  "MethodDocumentation",
  Schema({
    _id: Schema.Types.ObjectId,
    project_code: { type: String, required, validate: namespace_validator },
    service_id: { type: String, required, validate: namespace_validator },
    module_name: { type: String, required, validate: namespace_validator },
    method_name: { type: String, required, validate: namespace_validator },

    description: { type: String },

    request_data: {
      variable_namespace: { type: String, required, validate: namespace_validator },
      data_type: { type: String, required, enum: data_types },
      object_ref: { type: String },
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

    response_data: {
      variable_namespace: { type: String, required, validate: namespace_validator },
      data_type: { type: String, required, enum: data_types },
      object_ref: { type: String },
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

    triggered_events: [
      {
        name: { type: String, required },
        document_ref: { type: String },
        description: { type: String },
      },
    ],
  })
);
