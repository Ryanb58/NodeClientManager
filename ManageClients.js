
var _ = require('lodash');
var client = require('./Client.js');

//Include Cards Model maybe... if so do it here.
var _ = require('lodash');

//Model of a player.
function Manager() {
    this.clients = [];
}

Manager.prototype.addClient = function(client)
{
    this.clients.push(client);
}

Manager.prototype.getClient = function(id)
{
    _.filter(this.clients, function(client){
        if(client.getId == id)
        {
            return true;
        }
    });
}

Manager.prototype.removeClient = function(id)
{
    return _.remove(this.clients, function(client){
        if(client.getId() == id)
        {
            return true;
        }
    });
}

Manager.prototype.getClientList = function()
{
    return this.clients;
}

module.exports = Manager;
