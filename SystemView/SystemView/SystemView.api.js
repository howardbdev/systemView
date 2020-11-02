const { App, HttpClient } = require("sht-tasks");
const { Types } = require("mongoose");
const SystemViewModel = require("./SystemView.model");
const moment = require("moment");

App.ServerModule("SystemView", function () {
  const SystemView = this;

  SystemView.connect = async ({ project_code, service_id, system }, cb) => {
    //compare project_ids to see if this service all ready exists
    //if so compare module names and add missing modules and methods, then save
    //otherwise save add documentation and test fields to the service module and methods for the first time
    //record the date-time of last connection
    try {
      const { route, port, host = "localhost" } = system.routing;
      const url = `http://${host}:${port}/${route}`;
      const { namespace, modules } = await HttpClient.request({ url });
      const systemView = await SystemViewModel.findOne({ project_code, service_id });

      if (systemView) {
        //updated systemView dependencies
        systemView.dependencies = system.Services;
        systemView.system_modules = system.Modules;
        systemView.server_modules = modules;
        systemView.url = url;
        systemView.namespace = namespace;
        systemView.last_updated = moment().toJSON();
        systemView
          .save()
          .then((updatedSystemView) =>
            cb(null, { updatedSystemView, status: 200, message: "New SystemView connection added" })
          )
          .catch((error) =>
            cb({ error, status: 400, message: "New SystemView connection failed" })
          );
      } else {
        //add new systemView
        const dependencies = system.Services;
        const system_modules = system.Modules;

        new SystemViewModel({
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
          .then((newSystemView) =>
            cb(null, { newSystemView, status: 200, message: "New SystemView connection added" })
          )
          .catch((error) =>
            cb({ error, status: 400, message: "New SystemView connection failed" })
          );
      }
    } catch (error) {
      cb(error);
    }
  };
});
