const { Types } = require("mongoose");
const MethodDocumentation = require("../MethodDocumentation.model");

module.exports = async function (data) {
  const {
    project_code,
    service_id,
    module_name,
    method_name,
    description,
    request_data,
    response_data,
  } = data;

  const doc = await MethodDocumentation.findOne({
    project_code,
    service_id,
    module_name,
    method_name,
  });

  if (doc) {
    if (description || description === "") doc.description = description;
    if (request_data) doc.request_data = request_data;
    if (response_data) doc.response_data = response_data;
    if (request_data) doc.request_data = request_data;
    try {
      return await doc.save();
    } catch (error) {
      return {
        error,
        status: 400,
        message: "New MethodDocumentation save attempt failed",
      };
    }
  } else {
    try {
      return await new MethodDocumentation({ ...data, _id: Types.ObjectId() }).save();
    } catch (error) {
      return { error, status: 400, message: "New MethodDocumentation saveDocs failed" };
    }
  }
};
