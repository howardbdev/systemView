const {App} = require('sht-tasks')

App.ServerModule('Services', function(){
    const Services = this;

    Services.connect = (connData, cb)=>{
        //compare project_ids to see if this service all ready exists
        //if so compare module names and add missing modules and methods, then save
        //otherwise save add documentation and test fields to the service module and methods for the first time
        //record the date-time of last connection
        //

        cb(null, {connData, message:'world conquest'})
    }
})