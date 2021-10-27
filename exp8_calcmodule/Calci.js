const http = require("http");
const querystring=require("querystring");
const op = require("./Module");

http.createServer(function(req, res){
    var data1 = "";
    var ans = 0;
    req.on('data', function(chunk) {
        data1 += chunk;
    });
    req.on('end', function() {
        qs=querystring.parse(data1);
        var n1=qs['num1'];
        var n2=qs['num2'];
        var option=qs['option'];
        console.log(n1, n2, option);

        if(option === "+"){
            ans = op.add(n1,n2);
        }
        else if(option === "-"){
            ans = op.sub(n1,n2);
        }
        else if(option === "*"){
            ans = op.mul(n1,n2);
        }
        else if(option === "/"){
            ans = op.div(n1,n2);
        }
        res.write("<h1>Ans is: "+ans+"</h1>");
        res.end();
    });
}).listen(3000);
