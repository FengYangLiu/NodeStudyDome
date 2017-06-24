var fs = require('fs');

// 显示图片
function show(response) {
    fs.readFile("tmp/test.png", function (err, file) {
        if (err) {
            // console.log(err);
            response.writeHead(500, { "Content-Type": "text/plain;charset=utf-8;" });
            response.write("服务器内部错误:500" + "\n");
            response.end();
        } else {
            response.writeHead(200, { "Content-Type": "text/plain;charset=utf-8;" });
            response.write(file, "binary");
            response.end();
        }
    })
}
exports.show = show;