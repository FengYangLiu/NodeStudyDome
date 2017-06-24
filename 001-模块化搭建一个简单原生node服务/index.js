var server = require('./server.js');// 服务模块
var router = require('./router.js');// 路由模块
var requestHandlers = require('./requestHandlers'); // 路由处理处理模块

// 路由表
var handle = {};
handle["/"] = requestHandlers.start;
handle["/start"] = requestHandlers.start;
handle["/upload"] = requestHandlers.upload;


// 开启服务
server.start(router.route, handle);