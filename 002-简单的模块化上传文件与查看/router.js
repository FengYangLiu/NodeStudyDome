function route(handle, pathname, response, request){
    // 处理路由
    if (typeof handle[pathname] === "function") {
        handle[pathname](response, request)

    }else{
        response.writeHead(404, {'Content-Type':'text/plain;charset:utf8;'});
        response.write("404 Not fount.");
        response.end();
    }
}

exports.route = route;