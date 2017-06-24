function route(handle, pathname){
    // 处理路由
    if (typeof handle[pathname] === "function") {
        return handle[pathname]();
    }else{
        return "404 not found";
    }
}

exports.route = route;