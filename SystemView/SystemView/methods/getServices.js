const SystemView = require("../model");

module.exports = async function ({ project_code }) {
  return await SystemView.find({ project_code });
};
