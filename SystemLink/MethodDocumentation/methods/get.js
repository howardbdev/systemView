const MethodDocumentation = require("../MethodDocumentation.model");

module.exports = async function ({ project_code, service_id, module_name, method_name }) {
  return (
    (await MethodDocumentation.findOne({
      project_code,
      service_id,
      module_name,
      method_name,
    })) || { status: 404, message: "method documentation not found" }
  );
};
