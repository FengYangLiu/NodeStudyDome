var http = require('http'); 
var url = require('url'); 

function start(route, handle){
    http.createServer(function(request, response){
        // url.parse(url) 处理URL
        var pathname = url.parse(request.url).pathname;
        if(pathname === '/favicon.ico'){
        
        }else{
            // 调用路由模块方法
            var content = route(handle, pathname);
            response.writeHeader(200, {'Content-Type': 'text/plain;charset=utf-8'});
            response.write(content);
            response.end();
        }
    }).listen(8080, function(){
        console.log('端口号为8080');
    })
}

exports.start = start;