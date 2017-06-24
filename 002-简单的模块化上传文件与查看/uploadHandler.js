var fs = require('fs');
var formidable = require('formidable');
var util = require('util');

function upload(response, request) {
    // console.log(util.inspect(request));
    if (request.method.toLowerCase() === 'get') {
        response.writeHead(404, { "Content-Type": "text/html;charset=utf-8" });
        response.write("404 Not find");
        response.end();
    } else {
        var form = new formidable.IncomingForm();
        form.uploadDir = "public/upload";
        form.parse(request, function (err, fields, files) {
            response.writeHead(200, { "Content-Type": "text/html;charset=utf-8;" });
            fs.renameSync(files.myFile.path, "tmp/test.png")
            response.write("image:</br>");
            response.write("<img width='100%' height='100%' src='/show'>");
            response.end();
        })
    }
}

exports.upload = upload;

