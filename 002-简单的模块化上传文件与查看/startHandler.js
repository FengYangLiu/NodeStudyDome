var fs = require('fs');

function start(response) {
    var body = fs.readFileSync("./post_file.html");
    response.writeHead(200, { "Content-Type": "text/html;charset=utf-8" });
    response.write(body);
    response.end();
}

exports.start = start;