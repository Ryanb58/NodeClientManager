/*
 *
 * Id = Session ID of Player.
 * Name = The name, the player chooses.
 *
 */

var _ = require('lodash');

//Model of a player.
function Client(id, socket, name) {
    this.id = id;
    this.socket = socket;
    this.name = name;
}

Client.prototype.getId = function()
{
    return this.id;
}

Client.prototype.getSocket = function()
{
    return this.socket;
}

Client.prototype.getName = function()
{
    return this.name;
}

module.exports = Client;
