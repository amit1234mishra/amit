// Load the http module to create an http server.
var http = require('http'); 

// Create a function to handle every HTTP request
function handler(req, res){
    res.setHeader('Content-Type', 'text/html');
    res.writeHead(200);
    res.end("<html><body><h1>Hello World!!!</h1></body></html>");
    var spawn = require("child_process").spawn;
    var process = spawn('python',["/media/amit/1CF8742EF87407F2/compiler/my_proj/proj/fun.py"]);
};
// Create a server that invokes the `handler` function upon receiving a request
http.createServer(handler).listen(3000, function(err){
  if(err){
    console.log('Error starting http server');
  } else {
    console.log("Server running at http://127.0.0.1:3000/ or http://localhost:3000/");
  };
});

