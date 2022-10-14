const SystemLink = require("../SystemLink.model");

module.exports = async function ({ project_code }) {
  return await SystemLink.find({ project_code });
};
