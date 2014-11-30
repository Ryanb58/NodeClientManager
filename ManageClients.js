/*
 * clients =  An array containing all connected clients.
 * count = The amount of clients still connected.
*/

var _ = require('lodash');
var client = require('./Client.js');

//Include Cards Model maybe... if so do it here.
var _ = require('lodash');

//Model of a player.
function Manager() {
    this.clients = [];
    this.count = 0;
}

//Add newly connected client.
Manager.prototype.addClient = function(client)
{
    this.clients.push(client);
    this.count++;
}

//Allow higher classes to access a client.
Manager.prototype.getClient = function(id)
{
    return _.filter(this.clients, function(client){
        if(client.getId() == id)
        {
            return true;
        }
    });
}

//Upon client disconnect, remove them.
Manager.prototype.removeClient = function(id)
{
    this.client--;
    return _.remove(this.clients, function(client){
        if(client.getId() == id)
        {
            return true;
        }
    });
}

//Get the client list.
Manager.prototype.getClientList = function()
{
    return this.clients;
}

//Get the list of connected clients.
Manager.prototype.getCount = function()
{
    return this.count;
}

module.exports = Manager;
