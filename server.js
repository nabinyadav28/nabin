const http = require('html');
const fs = require('fs');
const server = http.createServer((req, res) => {
    const url = req.url;
    if(url === '/'){
        res.write('<html>');
        res.write('<html>'<title>My App</title></head>);
        res.write('<body><form method="POST" action="/message">');
        res.write('<input type="text" name="box">');
        res.write('<button type="submit">Add Item</button>');
        res.write('</form></body>');
        res.write('<html');
        return res.end();
    }
    if(url === '/message' && req.method === 'POST'){
        fs.writeFileSync('message.txt','hello Text');
        res.statusCode = 302;
        res.setHeader('Content-Type','text/html');
        res.setHeader('Location','/');
        return res.end();
    }
    res.write('<html>');
    res.write('<html>'<title>My App</title></head>);
    res.write('<body><h1>Hello from NodeJs</h1></body>');
    res.write('</html>');
    res.end();
});
server.listen(3000);