const { App, HttpClient } = require("sht-tasks");
const { Types } = require("mongoose");
const SystemLinkModel = require("./SystemLink.model");
const moment = require("moment");

App.ServerModule("SystemLink", function () {
  const SystemLink = this;

  SystemLink.connect = async ({ project_code, service_id, system }, cb) => {
    //compare project_ids to see if this service all ready exists
    //if so compare module names and add missing modules and methods, then save
    //otherwise save add documentation and test fields to the service module and methods for the first time
    //record the date-time of last connection
    try {
      const { route, port, host = "localhost" } = system.routing;
      const url = `http://${host}:${port}/${route}`;
      const { namespace, modules } = await HttpClient.request({ url });
      const SystemLink = await SystemLinkModel.findOne({
        project_code,
        service_id,
      });

      if (SystemLink) {
        //updated SystemLink dependencies
        SystemLink.dependencies = system.Services;
        SystemLink.system_modules = system.Modules;
        SystemLink.server_modules = modules;
        SystemLink.url = url;
        SystemLink.namespace = namespace;
        SystemLink.last_updated = moment().toJSON();
        SystemLink.save()
          .then((updatedSystemLink) =>
            cb(null, {
              updatedSystemLink,
              status: 200,
              message: "New SystemLink connection added",
            })
          )
          .catch((error) => {
            console.log(error);
            cb({
              error,
              status: 400,
              message: "New SystemLink connection failed",
            });
          });
      } else {
        //add new SystemLink
        const dependencies = system.Services;
        const system_modules = system.Modules;

        new SystemLinkModel({
          _id: Types.ObjectId(),
          project_code,
          service_id,
          dependencies,
          system_modules,
          server_modules: modules,
          url,
          namespace,
        })
          .save()
          .then((newSystemLink) =>
            cb(null, {
              newSystemLink,
              status: 200,
              message: "New SystemLink connection added",
            })
          )
          .catch((error) =>
            cb({
              error,
              status: 400,
              message: "New SystemLink connection failed",
            })
          );
      }
    } catch (error) {
      cb(error);
    }
  };

  SystemLink.getServices = ({ project_code }, cb) => {
    console.log(project_code);
    SystemLinkModel.find({ project_code })
      .then((services) => {
        cb(null, { services, status: 200 });
      })
      .catch((error) => cb(error));
  };
});
