const { Schema, model } = require("mongoose");
const moment = require("moment");
const required = true;
const unique = true;

module.exports = model(
  "Documentation",
  Schema({
    _id: Schema.Types.ObjectId,
    project_code: { type: String, required },
    service_id: { type: String, required },
    description: { type: String },
    label: { type: String },
    server_modules: [
      {
        name: { type: String, required },
        description: { type: String },
        label: { type: String },
      },
    ],
    methods: [
      {
        module_name: { type: String, required },
        fn: { type: String, required },
        description: { type: String },
        parameter: {
          name: { type: String },
          description: { type: String },
          type: { type: String },
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
      },
    ],
    evevts: [
      {
        name: { type: String, required },
        description: { type: String },
      },
    ],
    system_modules: [
      {
        name: { type: String, required },
        documentation: { type: String },
      },
    ],
    db_objects: [
      {
        name: { type: String, required },
        description: { type: String },
      },
    ],
    tests: [
      {
        module_name: { type: String, required },
        fn: { type: String, required },
        description: { type: String },
        value_type: { type: String },
        value: { type: String },
        expect: [
          {
            pointer: { type: String },
            to_equal: { type: String },
            to_be_type: { type: String },
            to_match: { type: String },
          },
        ],
      },
    ],
  })
);
