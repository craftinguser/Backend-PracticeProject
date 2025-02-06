const http = require("http");

const server = http.createServer(function(req,res){
    if(req.url === '/data'){
        res.end("The data is here");
    }
res.end("Hello I am creating server");
});

server.listen(7777);