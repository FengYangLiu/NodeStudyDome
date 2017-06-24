var server = require('./server.js');// 服务模块
var router = require('./router.js');// 路由模块
var requestHandler = require('./requestHandler'); // 路由表

// 开启服务
server.start(router.route, requestHandler.handle);