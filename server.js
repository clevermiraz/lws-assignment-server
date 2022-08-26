const data = require("./db.js");

const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router(data);
const middlewares = jsonServer.defaults({ noCors: true });
const port = process.env.PORT || 9000;

server.use(middlewares);
server.use("http://assignment-server-lws.herokuapp.com/todos", router);

server.listen(port);
