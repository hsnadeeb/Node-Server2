const fs = require('fs');


const fileHandler=(req,res)=>{

    const url = req.url;
    const method = req.method;
    if (req.url === '/') {
        res.write('<html>');
        res.write('<head><title>Submit form</title><head>');
        try {
            const message = fs.readFileSync('message.txt', 'utf8');
            res.write(`<p>Previous message: ${message}</p>`);
        } catch (err) {
            console.log(err);
        }
        res.write('<body><form action="/message" method="POST" ><input type="text" name="message"><button type="submit">Send<button></form>');

        res.write('</body></html>');
        return res.end();
    }
    if (url === '/message' && method === 'POST') {
        const body = [];
        req.on('data', (chunk) => {
            console.log(chunk);
            body.push(chunk);
        });

        req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            const message = parsedBody.split('=')[1];
            console.log(message);
            fs.writeFileSync('message.txt', message);

          });

            res.statusCode = 302;
            res.setHeader('Location', '/');
            return res.end();
    }
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<head><title>Hello</title><head>');
        res.write('<body><h1>Hello</h1></body>');
        res.write('</html>');
        res.end();

}

module.exports=fileHandler;
