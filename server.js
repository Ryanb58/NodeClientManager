//Controllers and Models.
var Manager = require('./ManageClients.js');
var Client = require('./Client.js');

var _ = require('lodash');

var app = require('express')();
var server = require('http').createServer(app);
var io = require('socket.io')(server);

//Initilize the client manager.
var manager = new Manager();

global.__base = __dirname + '/';

//Send a simple webpage for the client to interact with, and to connect to the server socket.
app.get('/', function(req, res){
    res.sendFile( __base + 'Client/index.html');
});

//Accept incomming socket connections.
io.on('connection', function(socket){

    console.log("User Connected.");

    //Add a new client.
    socket.on('add:client', function(name){

        manager.addClient(new Client(socket.id, socket, name));

        printClients();

    });

    //Make sure to remove them when they disconnect.
    socket.on('disconnect', function(){
        manager.removeClient(socket.id);

        printClients();

    });

});

server.listen(8080);

/** Functions/Methods **/
function printClients(){
    _.forEach(manager.getClientList(), function(client){
        console.log(client.getId() + ") " + client.getName());
    });
}
