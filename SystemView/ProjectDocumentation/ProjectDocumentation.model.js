const { Schema, model } = require("mongoose");
const moment = require("moment");
const required = true;
const unique = true;

module.exports = model(
  "ProjectDocumentation",
  Schema({
    _id: Schema.Types.ObjectId,
    project_code: { type: String, required },
    description: { type: String },
    git_repo: { type: String },
  })
);
