const { Schema, model } = require("mongoose");
const moment = require("moment");
const required = true;
const unique = true;
const data_types = [
  "String",
  "Object",
  "ObjectId",
  "Number",
  "Boolean",
  "Array(ObjectIds)",
  "Array(Objects)",
  "Array(Strings)",
  "Array(Numbers)",
  "Array(Boolean)",
  "Array(Misc)",
];
const namespace_validator = {
  validator: (namespace) => namespace.indexOf(" ") === -1,
  message: `variable namespace cannot contain empty spaces.`,
};

module.exports = model(
  "MethodDocumentation",
  Schema({
    _id: Schema.Types.ObjectId,
    project_code: { type: String, required, validate: namespace_validator },
    service_id: { type: String, required, validate: namespace_validator },
    module_name: { type: String, required, validate: namespace_validator },
    method_name: { type: String, required, validate: namespace_validator },
    document_ref: { type: String, required },

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
        document_ref: { type: String, required },
        event_description: { type: String, required },
      },
    ],
  })
);
