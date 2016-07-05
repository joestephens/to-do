var createServer = require("http-server").createServer;
var server = createServer({ root: path.join(__dirname, "~/Desktop/MakersAcademy/Week7/to_do_list") });
server.listen(3000);

// to run the server:
// node node_modules/http-server/bin/http-server
