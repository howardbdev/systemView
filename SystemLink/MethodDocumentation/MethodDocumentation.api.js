const { App } = require("sht-tasks");
const { Types } = require("mongoose");
const MethodDocumentationModel = require("./MethodDocumentation.model");

App.ServerModule("MethodDocumentation", function () {
  const MethodDocumentation = this;

  MethodDocumentation.get = async ({ project_code, service_id, module_name, method_name }, cb) => {
    try {
      const documentation = await MethodDocumentationModel.findOne({
        project_code,
        service_id,
        module_name,
        method_name,
      });
      if (documentation) cb(null, { documentation, status: 200 });
      else cb({ status: 404, message: "methodDoucumentation not found" });
    } catch (error) {
      cb(error);
    }
  };

  MethodDocumentation.saveDoc = async (data, cb) => {
    const {
      project_code,
      service_id,
      module_name,
      method_name,

      description,
      request_data,
      response_data,
    } = data;
    try {
      const methodDocumentation = await MethodDocumentationModel.findOne({
        project_code,
        service_id,
        module_name,
        method_name,
      });

      if (methodDocumentation) {
        if (description || description === "") methodDocumentation.description = description;
        if (request_data) methodDocumentation.request_data = request_data;
        if (response_data) methodDocumentation.response_data = response_data;
        if (request_data) methodDocumentation.request_data = request_data;

        methodDocumentation
          .save()
          .then((documentation) =>
            cb(null, {
              documentation,
              status: 200,
              message: "MethodDocumentation saved succesfully",
            })
          )
          .catch((error) =>
            cb({ error, status: 400, message: "New MethodDocumentation save attempt failed" })
          );
      } else {
        new MethodDocumentationModel({
          ...data,
          _id: Types.ObjectId(),
        })
          .save()
          .then((documentation) =>
            cb(null, {
              documentation,
              status: 200,
              message: "New MethodDocumentation saved succesfully",
            })
          )
          .catch((error) =>
            cb({ error, status: 400, message: "New MethodDocumentation saveDocs failed" })
          );
      }
    } catch (error) {
      cb(error);
    }
  };

  MethodDocumentation.addEvent = async (
    { project_code, service_id, module_name, method_name, triggered_event },
    cb
  ) => {
    try {
      const methodDocumentation = await MethodDocumentationModel.findOne({
        project_code,
        service_id,
        module_name,
        method_name,
      });

      if (methodDocumentation) {
        methodDocumentation.triggered_events.push(triggered_event);
        methodDocumentation
          .save()
          .then((documetation) =>
            cb(null, {
              documetation,
              status: 200,
              message: "MethodDocumentation triggerd_event succesfully",
            })
          )
          .catch((error) =>
            cb({ error, status: 400, message: "MethodDocumentation addEvent failed" })
          );
      } else cb({ status: 404, message: "methodDoucumentation not found" });
    } catch (error) {
      cb(error);
    }
  };
  MethodDocumentation.removeEvent = (
    { project_code, service_id, module_name, method_name, id },
    cb
  ) => {
    MethodDocumentationModel.update(
      {
        project_code,
        service_id,
        module_name,
        method_name,
      },
      { $pull: { _id: id } }
    )
      .then((documentation) =>
        cb(null, {
          documentation,
          status: 200,
          message: "MethodDocumentation triggerd_event succesfully",
        })
      )
      .catch((error) => cb({ error, status: 400, message: "MethodDocumentation addEvent failed" }));
  };
});
