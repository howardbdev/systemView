const { Schema, model } = require("mongoose");
const { namespace_validator } = require("../_shared/shared_constants");
const moment = require("moment");
const required = true;

module.exports = model(
  "Tests",
  Schema({
    _id: Schema.Types.ObjectId,
    project_code: { type: String, required, validate: namespace_validator },
    service_id: { type: String, required, validate: namespace_validator },
    module_name: { type: String, required, validate: namespace_validator },
    method_name: { type: String, required, validate: namespace_validator },

    last_test: { type: Date, default: moment().toJSON() },
    description: { type: String },

    before: [
      {
        method: { type: String, required },
        data: { type: Schema.Types.Mixed },
      },
    ],

    data: { type: Schema.Types.Mixed },

    after: [
      {
        method: { type: String, required },
        data: { type: Schema.Types.Mixed },
      },
    ],

    evaluations: [
      {
        prop_name: { type: String, required },
        test: { type: String, required },
      },
    ],
    results: [
      {
        prop_name: { type: String, required },
        passed: { type: Boolean, required },
      },
    ],
  })
);
