var http=require("http");
var url=require("url");
var querystring=require("querystring");
http.createServer(function(req,res){
var data1="";
req.on('data', function(chunk) {
console.log(chunk);
data1 += chunk;
});
req.on('end', function() {
qs=querystring.parse(data1);
console.log(qs);
var name=qs['name'];
var email=qs['email'];
var password=qs['pwd'];
var gender=qs["radio"];
var phone=qs["number"];
res.write("<h1>Registered successfully in Post Method</h1>");
res.write("<p>Name\t:"+name+"</p>");
res.write("<p>Email\t:"+email+"</p>");
res.write("<p>Password\t:"+password+"</p>");
res.write("<p>Gender\t:"+gender+"</p>");
res.write("<p>Phone\t:"+phone+"</p>"); 
res.end();
});
}).listen(8000);
console.log("Server has started");

