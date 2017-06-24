var startHandler = require('./startHandler.js');
var showHandler = require('./showHandler.js');
var uploadHandler = require('./uploadHandler.js');

// 路由表
var handle = {};
handle["/"] = startHandler.start;
handle["/start"] = startHandler.start;
handle["/upload"] = uploadHandler.upload;
handle["/show"] = showHandler.show;

exports.handle = handle;