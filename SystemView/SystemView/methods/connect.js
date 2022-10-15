const { HttpClient } = require("systemlynx");
const { Types } = require("mongoose");
const SystemView = require("../model");
const moment = require("moment");

module.exports = async function ({ project_code, service_id, system }) {
  //compare project_ids to see if this service all ready exists
  //if so compare module names and add missing modules and methods, then save
  //otherwise save add documentation and test fields to the service module and methods for the first time
  //record the date-time of last connection
  const { route, port, host = "localhost" } = system.routing;
  const url = `http://${host}:${port}/${route}`;
  const { namespace, modules } = await HttpClient.request({ url });
  const systemLink = await SystemView.findOne({ project_code, service_id });

  if (systemLink) {
    //updated SystemView dependencies
    systemLink.dependencies = system.Services;
    systemLink.system_modules = system.Modules;
    systemLink.server_modules = modules;
    systemLink.url = url;
    systemLink.namespace = namespace;
    systemLink.last_updated = moment().toJSON();
    try {
      return await systemLink.save();
    } catch (error) {
      return {
        error,
        status: 400,
        message: "New SystemView connection failed",
      };
    }
  } else {
    //add new SystemView
    const dependencies = system.Services;
    const system_modules = system.Modules;
    try {
      return new SystemView({
        _id: Types.ObjectId(),
        project_code,
        service_id,
        dependencies,
        system_modules,
        server_modules: modules,
        url,
        namespace,
      }).save();
    } catch (error) {
      return { error, status: 400, message: "New SystemView connection failed" };
    }
  }
};
