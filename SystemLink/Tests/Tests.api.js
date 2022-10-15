const { App } = require("systemlynx");
const { Types } = require("mongoose");
const TestData = require("./Tests.model");
const TestsModel = require("./Tests.model");

App.ServerModule("Tests", function () {
  const Tests = this;

  Tests.get = async ({ project_code, service_id, module_name, method_name }, cb) => {
    try {
      const tests = await TestsModel.find({
        project_code,
        service_id,
        module_name,
        method_name,
      });
      if (tests) cb(null, { tests, status: 200 });
      else cb({ status: 404, message: "No Tests found" });
    } catch (error) {
      cb(error);
    }
  };

  Tests.save = (data, cb) => {
    const { id, description, before, after, evaluations, results } = data;
    try {
      const Tests = await Tests.findOne({ _id: id });

      if (Tests) {
        if (description || description === "") Tests.description = description;
        if (before) Tests.before = before;
        if (after) Tests.after = after;
        if (evaluations) Tests.evaluations = evaluations;
        if (results) Tests.results = results;

        Tests.save()
          .then((testData) =>
            cb(null, {
              testData,
              status: 200,
              message: "SystemLink.Tests saved succesfully",
            })
          )
          .catch((error) =>
            cb({ error, status: 400, message: "New SystemLink.Tests save attempt failed" })
          );
      } else {
        new Tests({
          ...data,
          _id: Types.ObjectId(),
        })
          .save()
          .then((testData) =>
            cb(null, {
              testData,
              status: 200,
              message: "New SystemLink.Tests saved succesfully",
            })
          )
          .catch((error) =>
            cb({ error, status: 400, message: "New SystemLink.Tests save failed" })
          );
      }
    } catch (error) {
      cb(error);
    }
  };
});
