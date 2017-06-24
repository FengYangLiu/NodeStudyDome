var http = require('http'); 
var url = require('url'); 

function start(route, handle){
    http.createServer(function(request, response){
        // url.parse(url) 处理URL
        var pathname = url.parse(request.url).pathname;
        if(pathname === '/favicon.ico'){
        
        }else{
            // 调用路由模块方法
            route(handle, pathname, response, request );
        }
    }).listen(8080, function(){
        console.log('端口号为8080');
    })
}

exports.start = start;