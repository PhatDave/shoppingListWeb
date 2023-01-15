const express = require('express');
const serveStatic = require('serve-static');

app = express();
console.log(`Using ${process.cwd()}/dist as the root directory for static files.`);
app.use(serveStatic(process.cwd() + "/dist"));
const port = process.env.PORT || 5000;
const hostname = '127.0.0.1';

app.listen(port, hostname, () => {
	console.log(`Server running at http://${hostname}:${port}/`);
});
