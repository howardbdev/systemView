const { App } = require("sht-tasks");
const route = "systemview/api/systemview";
const port = 3300;
const useREST = true;

require("./Services/Services.api");
//require("./EventFeed/EventFeed.api");

App.startService({ route, port, useREST })
