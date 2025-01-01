//requiring http
const http = require ('http');
const app = require('./app');
const port = process.env.PORT || 3000;

//passing the export app in this server
const server = http.createServer(app);
server.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
