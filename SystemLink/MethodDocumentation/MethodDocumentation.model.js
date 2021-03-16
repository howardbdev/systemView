const { Schema, model } = require("mongoose");
const moment = require("moment");
const required = true;
const unique = true;

module.exports = model(
  "MethodDocumentation",
  Schema({
    _id: Schema.Types.ObjectId,
    project_code: { type: String, required },
    document_ref: { type: String, required },
    module_name: { type: String, required },
    method_name: { type: String, required },
    description: { type: String },
    request_data: {
      name: { type: String },
      description: { type: String },
      type: { type: String },
      object_ref: { type: String, required },
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
    response_data: {
      name: { type: String },
      description: { type: String },
      type: { type: String },
      object_ref: { type: String, required },
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
    emitted_events: [
      {
        name: { type: String, required },
        document_ref: { type: String, required },
        event_description: { type: String, required },
      },
    ],
  })
);
