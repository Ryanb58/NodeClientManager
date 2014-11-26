/*
 *
 * Id = Session ID of Player.
 * Name = The name, the player chooses.
 *
 */

//Include Cards Model maybe... if so do it here.
var _ = require('lodash');

//Model of a player.
function Client(id, name) {
    this.id = id;
    this.name = name;
}

Client.prototype.getId = function()
{
    return this.id;
}

Client.prototype.getName = function()
{
    return this.name;
}

module.exports = Client;
