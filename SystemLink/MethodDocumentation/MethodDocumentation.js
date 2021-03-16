const { App } = require("sht-tasks");
const { Types } = require("mongoose");
const MethodDocumentationModel = require("./MethodDocumentation.model");

App.ServerModule("MethodDocumentation", function () {
  const MethodDocumentation = this;

  MethodDocumentation.saveDocs = async (data, cb) => {
    const {
      project_code,
      service_id,
      module_name,
      method_name,
      description,
      request_data,
      response_data,
      triggered_events,
    } = data;
    try {
      const MethodDocumentation = await MethodDocumentationModel.findOne({
        project_code,
        service_id,
        module_name,
        method_name,
      });

      if (MethodDocumentation) {
        if (description || description === "") MethodDocumentation.description = description;
        if (request_data) MethodDocumentation.request_data = request_data;
        if (response_data) MethodDocumentation.response_data = response_data;
        if (triggered_events) MethodDocumentation.triggered_events = triggered_events;
        if (request_data) MethodDocumentation.request_data = request_data;

        MethodDocumentation.save()
          .then((MethodDocumentation) =>
            cb(null, {
              MethodDocumentation,
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
          .then((MethodDocumentation) =>
            cb(null, {
              MethodDocumentation,
              status: 200,
              message: "New MethodDocumentation saved succesfully",
            })
          )
          .catch((error) =>
            cb({ error, status: 400, message: "New MethodDocumentation save attempt failed" })
          );
      }
    } catch (error) {
      cb(error);
    }
  };
});
