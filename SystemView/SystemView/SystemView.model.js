const { Schema, model } = require("mongoose");
const moment = require("moment");
const required = true;
const unique = true;

module.exports = model(
  "SystemView",
  Schema({
    _id: Schema.Types.ObjectId,
    project_code: { type: String, required },
    service_id: { type: String, required },
    last_update: { type: Date, default: moment().toJSON() },
    url: { type: String, required },
    namespace: { type: String, required },
    server_modules: [
      {
        namespace: { type: String, required },
        route: { type: String, required },
        name: { type: String, required },
        methods: [
          {
            fn: { type: String, required },
            method: { type: String, required },
            tests: { type: String },
          },
        ],
      },
    ],
    system_modules: [
      {
        name: { type: String, required },
      },
    ],
    dependencies: [
      {
        name: { type: String, required },
        url: { type: String },
      },
    ],
  })
);
