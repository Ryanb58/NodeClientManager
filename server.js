//Controllers and Models.
var Manager = require('./ManageClients.js');
var Client = require('./Client.js');
var _ = require('lodash');

//Init.
var manager = new Manager();

var client1 = new Client(1, "Taylor");
var client2 = new Client(2, "Ryan");
var client3 = new Client(3, "John");
var client4 = new Client(4, "Gerrit");

manager.addClient(client1);
manager.addClient(client2);
manager.addClient(client3);
manager.addClient(client4);

_.forEach(manager.getClientList(), function(client){
    console.log(client.getName());
});